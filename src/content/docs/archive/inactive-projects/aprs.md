---
title: "APRS"
description: "This project has been listed as inactive. If you are interested in taking over this project please contact one or more of the project's members for more in..."
sourceUrl: "https://dallasmakerspace.org/wiki/APRS"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/APRS\">legacy DMS wiki</a> — content may be outdated."
---
**This project has been listed as inactive.**\
If you are interested in taking over this project please contact one or more of the project's members for more information.

## Introduction

APRS (Automatic Packet Reporting System) is a digital ham radio mode used primarily for reporting real-time geographic coordinates and Wx (weather) data over the 2 meter ham band, specifically, 144.390 MHz in North America, but other frequencies are available<sup>[\[1\]](#cite_note-freq-1)</sup>. In contrast to other digital modes, APRS is an interlinked network system which means nodes transmit data to digipeaters which then retransmit the data to other receivers, digipeaters, and IGates. An IGate is an APRS receiver that broadcasts the original data to the internet-based APRS-IS network "which inter-connects various APRS radio networks throughout the world (and space)." <sup>[\[2\]](#cite_note-2)</sup>\


You must have an FCC amateur radio license to legally transmit APRS, but anyone is free to listen in and decode APRS data. If you do not have the necessary radio equipment, you can view the data on any internet-connected device (computer, tablet, smartphone, Arduino, etc.) Check out [aprs.fi](http://aprs.fi/) for a cool website that overlays APRS data on a Google Map. If you have an Android phone, there's a cool free app called 'APRS Viewer' that will show something similar.\


If you're licensed, there's another cool app for you: APRSdroid. It's not available on the Android market, so waltz on over to [aprsdroid.org](http://aprsdroid.org/) to get it. After installation, you must get a code from the developers to verify you are a licensed ham. Make sure you fill out the entire form which requires your full name, callsign, maidenhead locator, and email. Getting the [maidenhead locator](http://en.wikipedia.org/wiki/Maidenhead_Locator_System) is as easy as getting it from another Android app called 'Lat Long Calc'. Once you get the the app activated, you can set it up to transmit your phones' location to an APRS-IS server which, in turn, will propagate your data to the air waves.

## Background

APRS uses a subset of the AX.25 protocol, which, in turn, is based upon the ITU X.25 standard. The data is modulated/demodulated using Bell 202 tones via FSK (Freq. Shift Keying), which specify the '1' bit be transmitted as a 1200 Hz tone, and the '0' bit as a 2200 Hz tone. Typically, data is transmitted at 1200bps, but 300bps and 9600bps can also be used. Using 1200bps for example, streaming '01100111' would require 833µs for each bit, and would be transmitted as '2200Hz,1200Hz,1200Hz,2200Hz,2200Hz,1200Hz,1200Hz,1200Hz'; if that data were an ASCII code, it would represent 'g'. If you were to hookup a speaker to the Radio Shield's output, it would sound similar to an old dial up modem.\


There are several ways to implement APRS: COTS TNC's, wiring up a Bell 202 compatible modem such as the MX614 and TCM3105 ICs, using a computer soundcard, doing the frequency synthesis in a microcontroller, along with many other techniques.

## APRS + Arduino

For simplicity, modularity, and cost effectiveness, I purchased the [Radio Shield](http://www.argentdata.com/catalog/product_info.php?cPath=22&products_id=136) ([wiki](http://wiki.argentdata.com/index.php/Radio_Shield)) from Argent Data Systems for \$28 USD which offers APRS MoDem (Modulation/Demodulation) and CW (Morse Code) modulation (and demodulation?). There is not a lot on information on this board, so I hope to shed some light on its assembly and operation of this impressive shield.\


It came as a kit with the following parts:

- PCB; Compatible Arduino Shield
- Freescale mcu HC908JL16 (based on Motorola 6800 architecture) programmed with (proprietary?) firmware
- 11 Resistors
- 6 Capacitors
- 3 dual-line male 0.1" Headers
- 4 single-line male 0.1" headers
- 1 29.4912 MHz Crystal
- 1 2N7000 Transistor
- 1 Red/Green LED
- 1 32-pin socket
- 1 pushbutton
- 2 jumpers

Note: The kit does NOT come with the LCD and ribbon cable as was my assumption.\


Soldering is simple enough for beginners, but the board is confusing so just don't rush. I added an additional 4-pin single-line 0.1" male header to the radio hookup part. This will allow me to use different cables for different radios sans soldering. It also allowed me to easily test the operation of the board later by creating a a 3.5mm phono plug \<--\> 4-pin female 0.1" cable and hooking it up to my "Line-in" input on the computer.\


I couldn't find sufficient information on the jumpers, so with a little reverse engineering, I found the out the following: JP7 is wired vertically flipped from how it looks from the schematic. I.e. if you're looking at the board with the mcu on the left, the top-right pin is pin 1, the top-left pin is pin 2. When operating, the jumpers should be connected around pins 1&3 and pins 2&4. I've taken the shield off the Arduino when reprogramming the Arduino. I am so far unsure what will happen if you mix up the jumpers and/or program the Arduino with the shield on.\


I also picked up the audio cable [\[2\]](https://www.argentdata.com/catalog/product_info.php?products_id=67) I needed to interface with my Yaesu VX-7R radio. This cable can be created, but I didn't mind spending a little extra to have a more polished look upon completion. Argent also sells cables for other radios. Check the [Radio Wiring](http://wiki.argentdata.com/index.php/Radio_Wiring) page to get electrical specifics of their cables and what conductors do what on your radio.\


The RadioShield uses the Rx/Tx (D0/D1) pins to communicate with the Arduino. The Arduino also uses these pins for communication with the computer which threw me off guard as how to send data from my terminal to the Arduino to send to the RadioShield.\


Here's the code I initially used to test its operation

    1    void setup() {
    2       Serial.begin(4800);            // RadioShield runs at 4800 baud
    3       delay(3);                      // Allow time for RadioShield setup
    4    }
    5
    6    void loop() {
    7       Serial.print("L255\n");        //Set the audio output to high
    8       while(1) {
    9          Serial.print("!KE5OSR\n");  //Send some data for the RadioShield to translate
    10         delay(10000);               //Pause for 10 s
    11   }

Let's examine line 9. Serial.print() takes a string as an argument, this in turn takes the ASCII values of each symbol and pushes out those bits on the Tx pin on the Arduino. Now, the exclamation point ('!') tells the MCU on the Radio Shield to send the data as an APRS packet. In contrast, prepending the string to transmit with the at symbol ('@') will send the data as morse code. The CR/LF symbol ('\n') tells the MCU to transmit. In other words, you can use many 'Serial.print()' functions to setup a single APRS packet then tell it to transmit by sending it CR/LF.



## Radio Shield Firmware

I'm pretty sure the Freescale MCU on the Radio Shield uses the same code as one of the other OpenTracker products.\

Here's how to get the code from within Ubuntu:

1.  Get subversion if you don't have it - sudo apt-get install subversion
2.  Make a directory to place the code in your hiome folder - mkdir ~/Argent
3.  Move into the directory - cd Argent
4.  Checkout the code - svn checkout <https://svn.freepository.com/50lItuLQ7fW6s/>
5.  Use 'guest' for username and password





## Additional Resources

APRS\
APRS Wiki\
APRS-IS



## References

1.  <span id="cite_note-freq-1">[↑](#cite_ref-freq_1-0) [APRS Frequencies](http://info.aprs.net/index.php?title=Frequencies)</span>
2.  <span id="cite_note-2">[↑](#cite_ref-2) [\[1\]](http://www.aprs-is.net/)</span>
