---
title: "Reverse Engineering RFID Reader"
description: "This page is archived and kept for historical purposes. Please do not make any edits.If you feel this is in error, please remove the {{archive}} template."
sourceUrl: "https://dallasmakerspace.org/wiki/Reverse_Engineering_RFID_Reader"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Reverse_Engineering_RFID_Reader\">legacy DMS wiki</a> — content may be outdated."
---
**This page is archived and kept for historical purposes. Please do not make any edits.**\
If you feel this is in error, please remove the {{archive}} template.

## Model

<http://www.kawamall.com/pd_3x_lckombopu.cfm>

## Reverse Engineering RFID Reader / Door lock

This page contains the assorted details discovered in reverse engineering the RFID reader / door lock. Details will be sparse as we discover more but we've made interesting progress so far.

## Current Progress (2014-04-20)

- We've switched to a new controller
- Paul Brown made a python library for interfacing with the new controller: <https://github.com/pawl/Chinese-RFID-Access-Control-Library/>

## Current Progress (2011-02-28)

- We can send a door unlock sequence over ethernet from any platform running Python (with a socket library)
- We can send a "perpetual unlock" sequence as per above
- Looks like we can use the tags along with several of the Parallax RFID readers for any other purpose we see fit
- Wrote a quick & dirty iPhone app to be tested (\*See notes below for security considerations!)
- We can parse the entry log format for standard tag reads, unknown tag reads, and "Soft Open" calls (ie, the door unlock sequence mentioned above)
- Written Python tool to query reader for log entries, parse them, and display in text form.
- Python logging code is largely working and logging information to text files and to mongodb for further processing.
- Seeing some odd behaviors - the record counter isn't perfect and occasionally the byte values are off. Also seeing individual entries occasionally missing 2 hex values.
- The record counter has an option to handle overflows - if it's greater than 0xff (255) entries, then the 2nd byte is a value greater than the first byte. ie, 1c1d means 283 (28 + 255) entries. Determined this from some parsed text logging. Need to figure out algorithm for how many are actually there. Something like (byte2-byte1)\*255 + byte1... Ok, that was easier than it seems - which leads to a theoretical max of 65535 entry logs. Guessing it's considerably less than that.
- The missing values appear to be a networking issue, likely a bug in the python code. May add a small delay in record gathering to see if that eases the issue.

## To Do

- Write general parsing code for log formats
- Possibly test / configure "Hard open" or the "Stay open" command available in the software
- Work on server code for interacting with the door in general (db logging, connectivity with LDAP, etc)
- Determine which server to run python log reader on

## Details

### General Notes

The protocol seems to include some fixed length strings (padded with zero's). All the commands seem to be six characters (OPDOOR, GETINF, ADDLST, DELLST so far). Packets seem to have a rolling XOR checksum in many cases. In some cases, the packet seems to start with a length prefix, which is not included in the checksum.

### Reader

- [Link to Hardware](http://www.kawamall.com/pd-1x-rfpsrfy8tcpip-rfid-tcpip-door-access-attendance-control-w-lan-net.cfm%7C)
- Runs a version of SMC Embedded according to nmap
- TCP Port 1868 is the listening / control port on the RFID reader
- To send an open door command, the communication looks like:

<!-- -->

      * Client - Connect to 1868
      * Client - Send "\xA5<passwd in hex>" (For example, with a password of 123456, you would send "\xA5\x12\x34\x56")
      * Client - Send "\x09\xB1\x4F\x50\x44\x4F\x4F\x52\x00\xB8 (NOTE: \x4F thru \x52 is ASCII for "OPDOOR", so that little section including the \x00 looks like a null terminated string)
      * Server - Send "\x26"
      * Client - Send "\x00"
      * Client - Send "\x00"
      * There's some further handshake communication afterwards, but it's not required to signal the relay to open.

- To send a "perpetual" open door command, the communication looks like:

<!-- -->

      * Client - Connect to 1868
      * Client - Send "\xA5<passwd in hex>" (For example, with a password of 123456, you would send "\xA5\x12\x34\x56")
      * Client - Send "\x09\xB1\x4F\x50\x44\x4F\x4F\x52\x00\xB8 (NOTE: as above, "OPDOOR" is in there)
      * Server - Send "\x26"
      * Client - Send "\xf0"
      * Client - Send "\xf0"
      * There's some further handshake communication afterwards, but it's not required to signal the relay to open.
      * To re-lock the door after a "perpetual" open, send the open once sequence

- The reader does not automatically send the RFID tag data elsewhere so it must be polled to get access information. Initial decodes below...

<!-- -->

- "GetInfo" - the interaction between the software and the door reader for log reading:

<!-- -->

     * Client - Connect to TCP 1868
     * Client - Send "\xA<passwd in hex>"
     * Client - Send "\x09\xA7\x47\x45\x54\x49\x4E\x46\x00\xB0" (NOTE: like above, \x47 thru \x46 is "GETINF")
     * Server - Send "\x26"
     * Client - Send "\x00"
     * Client - Send "\x00"
     * Server - Send "\x26\x06\x06"
     * Client - Send "\x26"
     * Server - Send "\x00"
     * Server - Send "\xNN\xNN" where NN is the number of Entry records in hex for the logs to be sent - *DATE RECORDS DO NOT COUNT TOWARDS THIS* - Discovered some instances where this assumption is not correct.  Debugging...
     * Client - Send "\x26"
     * Client - Send "\xFA"
     * Server - Send "\xFA\xFA\xFA\xYY\xMM"
     * Server - Send "\xDD\xNN" where YY is 2 digit Year, MM is 2 digit Month, DD is 2 digit Day, all in Hex.  NN is an unknown byte value.  This will be referred to as the Date record.
     * Client - Send "\x26"
     * Client - Send "\xFA"
     * Server - Send "\xV1\xV2\xV3\xV4\xHH"
     * Server - Send "\xMM\xNN" where V1-V4 are the RFID bytes in Hex, HH is the Hour in hex, MM is the minute value in hex, and NN is an unknown byte value.  This will be referred to as a valid Entry record.  Have discovered instances where the \xHH byte is missing or relocated.  Possibly a short rfid tag.
     * What happens next depends on several factors as follows...
     * If there are no more records, the client sends "\x26" and the connection is finished.
     * If there are more Entry records on the same day they continue the sequence mentioned until there are no more Entries or the Entries occur on a new date.
     * If the entries occur on a new date, you see a new Date record, then at least one Entry record, then it continues as described above.
     * Manual "Soft Open" commands are represented by the Server sending
     * Server - Send "\x90\xF2\xF2\xF2\xHH"
     * Server - Send "\xMM\xNN" where the \x90\xF2\xF2\xF2 is a literal string, and HH, MM, and NN are as described above.
     * Unidentified keys are recorded as
     * Server - Send "\x30\xV1\xV2\xV3\xHH"
     * Server - Send "\xMM\xNN" where V1-4, HH, MM, and NN are described as above.

### Special cases

- No records logged - the exchange looks like the following:

<!-- -->

     * Client - Connect to TCP 1868
     * Client - Send "\xA<passwd in hex>"
     * Client - Send "\x09\xA7\x47\x45\x54\x49\x4E\x46\x00\xB0" (NOTE: \x47 thru \x46 is "GETINF")
     * Server - Send "\x26"
     * Client - Send "\x00"
     * Client - Send "\x00"
     * Server - Send "\x26\x06\x06"
     * Client - Send "\x26"
     * Server - Send "\x00"
     * Server - Send "\x00\x00" (ie, No records)
     * Client - Send "\x26"

### Log Decode Notes

- Date records do not count towards the record counting. This is important to keep track of whether to end the connection or ask for another (ie, the \xFA)
- During custom code testing, we determined that if you fail to acknowledge the receipt of the data, it is stored on the log reader until the next read. It's unknown at this point if it stores all the data since the last successful read or just the failed records (ie, if a couple records are properly ack'd but then parsing fails before final acknowledgment.)

### Native control software

- Called "Batman!"
- Looks to be an app running on top of Visual FoxPro
- That somehow does TCP communication (rather impressive in itself...) But - it uses TCP packets for strict communication rather than relying on stream format. ie, the client will send data in 3 separate packets...
- As imagined, it's flat out awful
- If run on Windows 7 (and likely Vista), it requires "Run as Administrator"

### PCAPs

- [Captures - Door open signal and "raw data extract"](http://www.dallasmakerspace.com/w/images/c/c0/Rfid-door-reader-pcaps.zip)

In these caps, 192.168.1.68 is the door reader itself, 192.168.1.100 is a Windows XP VM running the "Batman" software, and 192.168.1.200 is a Mac OSX Snow Leopard system running the Python script.

- Other pcaps are available to members on an as needed basis due to sensitive information contained within. Please contact Mike Metzger if you'd like to see these / work with them.

### Python scripts

These are really raw right now, just used as proof of concept...

- Open door

\<source lang="python"\>

     import binascii
     from socket import *

     HOST = '192.168.1.68' # IP of the reader
     PORT = 1868
     ADDR = (HOST, PORT)

     c = socket(AF_INET, SOCK_STREAM)
     c.connect((ADDR))

     s1 = "A5888888" # Passwd string - A5 and the 6 digit password
     s2 = "09B14F50444F4F5200B8" # Command to "open door" - activates relay ("OPDOOR" in there)
     s3 = "00" # Appears to be an acknowledgement string

     # Convert to binary / hex (yes, there are a ton of ways to do this)

     b1 = binascii.a2b_hex(s1)
     b2 = binascii.a2b_hex(s2)
     b3 = binascii.a2b_hex(s3)

     c.send(b1) # Send passwd string
     c.send(b2) # send open door command
     c.recv(1) # Wait for acknowledgement (\x26)
     c.send(b3) # Send \x00
     c.send(b3) # Send \x00
     c.close()

\</source\>

- "Perpetual" Open door

\<source lang="python"\>

     import binascii
     from socket import *

     HOST = '192.168.1.68' # IP of the reader
     PORT = 1868
     ADDR = (HOST, PORT)

     c = socket(AF_INET, SOCK_STREAM)
     c.connect((ADDR))

     s1 = "A5888888" # Passwd string - A5 and the 6 digit password
     s2 = "09B14F50444F4F5200B8" # Command to "open door" - activates relay ("OPDOOR" in there)
     s3 = "f0" # Appears to be an acknowledgement string

     # Convert to binary / hex (yes, there are a ton of ways to do this)

     b1 = binascii.a2b_hex(s1)
     b2 = binascii.a2b_hex(s2)
     b3 = binascii.a2b_hex(s3)

     c.send(b1) # Send passwd string
     c.send(b2) # send open door command
     c.recv(1) # Wait for acknowledgement (\x26)
     c.send(b3) # Send \xf0
     c.send(b3) # Send \xf0
     c.close()

\</source\>

- Debug proof of concept log reader

\<source lang="python"\>

     import binascii
     from socket import *
     import sys

     HOST = '192.168.0.68' # IP of the reader
     PORT = 1868
     ADDR = (HOST, PORT)

     passwd = binascii.a2b_hex("A5888888") # Password string - A5 and the 6 digit password
     getinfo = binascii.a2b_hex("09A7474554494E4600B0") # GETINF command
     ack = binascii.a2b_hex("26") # Seems to be an acknowledgment byte
     nulbyte = binascii.a2b_hex("00") # Null byte value
     getnext = binascii.a2b_hex("FA") # Appears to be a "get next" command
     sendinginfo = binascii.a2b_hex("260606") # Used at the start of the log send by the server / door reader

     c = socket(AF_INET, SOCK_STREAM)
     c.connect(ADDR)

     c.send(passwd)
     c.send(getinfo)
     c.recv(1)              # Should be equal to ack
     c.send(nulbyte)
     c.send(nulbyte)
     c.recv(3)              # Should be equal to getnext
     c.send(ack)
     c.recv(1)              # Should be equal to nulbyte
     recordcountstr = binascii.b2a_hex(c.recv(2))       # Get the record count, convert back to hex
     print recordcountstr

     recordcount = int(recordcountstr[:2], 16)          # Get one byte, convert to decimal, maintain recordcount
     print recordcount

     if recordcount == 0:
       print "No records available to download"
       c.send(ack)
       c.close()
       sys.exit()

     c.send(ack)

     keepgoing = recordcount
     datestr = ""

     while (keepgoing):
       c.send(getnext)
       s1 = binascii.b2a_hex(c.recv(5))
       s2 = binascii.b2a_hex(c.recv(2))
       print s1
       print s2
       if s1[:6] == "fafafa":                   # Record type check - Date record
         print "New Date record"
         datestr += str(int(s1[6:8], 16))
         datestr += "-" + str(int(s1[8:10], 16))
         datestr += "-" + str(int(s2[:2], 16))
         print "Date string: ", datestr
       if s1[:2] == "00":                       # Record type check - Entry record
         print "New Entry record"
         rfid = str(int(s1[2:8], 16))
         timestr = str(int(s1[8:10], 16)) + ":" + str(int(s2[:2], 16))
         print "ID: " + rfid + " entered at " + timestr
         keepgoing = keepgoing - 1
       if s1[:2] == "90":                       # Record type check - Soft open
         print "New Soft open record"
         timestr = str(int(s1[8:10], 16)) + ":" + str(int(s2[:2], 16))
         print "Soft open at " + timestr
         keepgoing = keepgoing - 1
       if s1[:2] == "30":                       # Record type check - Unknown key record
         print "New Unknown Entry Attempt record"
         rfid = str(int(s1[2:8], 16))
         timestr = str(int(s1[8:10], 16)) + ":" + str(int(s2[:2], 16))
         print "Unknown ID: " + rfid + " attempted entry at " + timestr
         keepgoing = keepgoing - 1
       c.send(ack)

     c.close()

\</source\>

## Notes

- If you pick one of these up, do not connect it to any kind of public network. Given that the password is 6 digits of 0-9 with no encryption / challenge-response / etc, it would be pretty easy to brute force through the 1 million possible combinations and get the latch to release.
- To put it in perspective, RFID can also be spoofed, but has a 32-40 bit id, giving you between 4.2 and about 16.8 billion possible combinations (of course, this is part of the reason people are concerned about RFID for tracking purposes.)

## Current Scripts

### Get Log

\<source lang="python"\>

    import binascii
    from socket import *
    import sys

    logfile = open('door.log', 'a')

    HOST = 'xxx.xxx.xxx.xxx' # IP of the reader
    PORT = 1868
    ADDR = (HOST, PORT)

    passwd = binascii.a2b_hex("A5xxxxxx") # Password string - A5 and the 6 digit password
    getinfo = binascii.a2b_hex("09A7474554494E4600B0") # GETINF command
    ack = binascii.a2b_hex("26") # Seems to be an acknowledgment byte
    nulbyte = binascii.a2b_hex("00") # Null byte value
    getnext = binascii.a2b_hex("FA") # Appears to be a "get next" command
    sendinginfo = binascii.a2b_hex("260606") # Used at the start of the log send by the server / door reader

    c = socket(AF_INET, SOCK_STREAM)
    c.connect(ADDR)

    c.send(passwd)
    c.send(getinfo)
    c.recv(1)                               # Should be equal to ack
    c.send(nulbyte)
    c.send(nulbyte)
    c.recv(3)                               # Should be equal to getnext
    c.send(ack)
    c.recv(1)                               # Should be equal to nulbyte

    recordcountstr = binascii.b2a_hex(c.recv(2))            # Get the record count, convert back to hex
    recordcount = int(recordcountstr, 16)                   # convert to decimal, maintain recordcount
    print recordcount

    if recordcount == 0:
            print "No records available to download"
            c.send(ack)
            c.close()
            sys.exit()

    c.send(ack)

    keepgoing = recordcount
    datestr = ""
    while (keepgoing):
            c.send(getnext)
            s1 = binascii.b2a_hex(c.recv(5))
            if not s1:
                    print "s1 is blank"
                    break
            elif len(s1) < 8:                                                       # get bytes again if length is incorrect
                    logfile.write("Error - Too Few Bytes In S1: " + s1 + "\n")      # add mystery bytes to the log
                    s1 = binascii.b2a_hex(c.recv(5))                                # not sure why it returns a single byte of different information
            if not s1:
                    print "s1 is blank on 2nd attempt"
                    break

            s2 = binascii.b2a_hex(c.recv(2))
            if not s2:
                    print "s2 is blank"
                    break

            print s1
            print s2

            if not s1[8:10]:                                        # sometimes hours is blank
                    hours = "00"
            else:
                    hours =  str(int(s1[8:10], 16)).zfill(2)

            minutes = str(int(s2[:2], 16)).zfill(2)
            timestr = hours + ":" + minutes

            if s1[:6] == "fafafa":                                  # Record type check - Date record
                    logfile.write("New Date record\n")
                    datestr = str(int(s1[6:8], 16)).zfill(2)                # year
                    datestr += "-" + str(int(s1[8:10], 16)).zfill(2)        # month
                    datestr += "-" + str(int(s2[:2], 16)).zfill(2)          # day

                    logfile.write("Date string: " + datestr + "\n")

            if s1[:2] == "00":                                              # Record type check - Entry record
                    logfile.write("New Entry record\n")
                    rfid = str(int(s1[2:8], 16))

                    logfile.write("ID: " + rfid + " entered at " + timestr + "\n")
                    keepgoing = keepgoing - 1

            if s1[:2] == "90":                                              # Record type check - Soft open
                    logfile.write("New Soft open record\n")
                    logfile.write("Soft open at " + timestr + "\n")

                    keepgoing = keepgoing - 1

            if s1[:2] == "30":                                              # Record type check - Unknown key record
                    logfile.write("New Unknown Entry Attempt record\n")
                    rfid = str(int(s1[2:8], 16))
                    logfile.write("Unknown ID: " + rfid + " attempted entry at " + timestr + "\n")

                    keepgoing = keepgoing - 1

            c.send(ack)

    c.close()
    logfile.close()

\</source\>

### Add

\<source lang="python"\>

    import sys
    print sys.argv
    import binascii
    from socket import *

    HOST = 'xxx.xxx.xxx.xxx' # IP of the reader
    PORT = 1868
    ADDR = (HOST, PORT)

    c = socket(AF_INET, SOCK_STREAM)
    c.connect((ADDR))

    #ask user for input
    rawID = raw_input("Enter ID (without leading zeros): ")
    formattedID = str(("{0:x}".format(int(rawID))).zfill(8))

    #print formattedID
    #print (formattedID == "00434B23")

    if len(formattedID) > 8:
        print("Error: Too many digits in ID")
        sys.exit(0)

    s1 = "A5xxxxxx" # Passwd string - A5 and the 6 digit password

    s2 = "09" + "A84144444C535400" + "A2" # Command to add an user, (4144444C5354 is ASCII for "ADDLST")
    #ends with checksum A2

    s3 = "55" + formattedID + "E0E0" + "888888" + "3232323232323232323232" + "3131313131313131" + "E3FC" + "00" # Hex value of key
    #Description of each part of the string:
    #1. "55" U (for User)
    #2. the user's ID
    #3. which door to grant access, E0EE is just door 1, E0E0 is both doors
    #4. "888888" ???
    #5. 11 character max field showing user's "code", possibly for employee ID
    #6. 8 character max field for user's name
    #7. "E3FC" ???
    #This key usually ends with a checksum value which is generated later in this code


    s4 = "00" # Appears to be an acknowledgement string

    # function to change final hex value to correct checksum
    def addChecksum( hexStr ):
        xor = 0
        for i in range(0, len(hexStr)-1):
            xor = xor ^ ord(hexStr[i])
        return hexStr[0:-1] + chr(xor)

    # Convert to binary / hex (yes, there are a ton of ways to do this)
    b1 = binascii.a2b_hex(s1)
    #b2 = "\t" + addChecksum(binascii.a2b_hex(s2))
    b2 = binascii.a2b_hex(s2)
    b3 = addChecksum(binascii.a2b_hex(s3))
    b4 = binascii.a2b_hex(s4)

    print (binascii.hexlify(b1))
    print (binascii.hexlify(b2))
    print (binascii.hexlify(b3)) # debug
    print (binascii.hexlify(b4))

    c.settimeout(10)
    c.send(b1) # Send passwd string
    c.send(b2) # send add user command
    c.recv(1) # Wait for acknowledgement (\x26)
    c.send(b3) # Send key
    c.send(b4) # Send acknowledgement
    while True:
            x = c.recv(1)
            if len(x) == 0:
                    break
    c.close()

\</source\>

### Remove

\<source lang="python"\> import binascii from socket import \* import sys

def removeUser(ADDR, formattedID): c = socket(AF_INET, SOCK_STREAM) c.connect((ADDR))

s1 = "A5XXXXXX" \# Passwd string - A5 and the 6 digit password

s2 = "09" + "A944454C4C535400" + "AF" \# Command to remove an user \# "44454C4C5354" means DELLST (like delete list) \#s2 = "09A8" + "4144444C5354" + "00A2" \# 00A2 may specify the door \# \#erase 2nd user 09:a9:44:45:4c:4c:53:54:00:af \#erase 3rd user 09:a9:44:45:4c:4c:53:54:00:af

s3 = formattedID \# Hex value of ID \#s3 = "005E4440" \# different id example

\#function to generate the checksum of s3 def addChecksum( hexStr ): xor = 0 for i in range(0, len(hexStr)): xor = xor ^ ord(hexStr\[i\]) return chr(xor)

\#s4 = "4C" \# Appears to be an acknowledgement string \#erase 2nd user 00:45:69:b6 - 9A \#erase 3rd user 00:5e:44:40 - 5A

\# Convert to binary / hex (yes, there are a ton of ways to do this) b1 = binascii.a2b_hex(s1) b2 = binascii.a2b_hex(s2) b3 = binascii.a2b_hex(s3) b4 = addChecksum(binascii.a2b_hex(s3)) \# assign checksum to variable

c.settimeout(10) c.send(b1) \# Send passwd string c.send(b2) \# send open door command c.recv(1) \# Wait for acknowledgement (\x26) c.send(b3) \# Send key c.send(b4) \# Send checksum response = "" while True: x = c.recv(1) if len(x) == 0: break else: if (x == "5"): response = "Response Received - User Not Registered" c.close() return response

HOST = '10.0.0.XXX' \# IP of the reader PORT = XXXX ADDR = (HOST, PORT)

1.  ask user for input
2.  rawID = raw_input("Enter ID (without leading zeros): ")

rawID = sys.argv\[1\] formattedID = str(("{0:x}".format(int(rawID))).zfill(8))

if len(formattedID) \> 8: print("Error: Too many digits in ID") sys.exit(0)

1.  try to terminate the user up to 5 times

userRemoved = 0 for x in range(0,4): result = removeUser(ADDR, formattedID) if result == "Response Received - User Not Registered": userRemoved = 1 break

if userRemoved == 1: print("User Removed Successfully") else: print("Failed To Remove User") \</source\>
