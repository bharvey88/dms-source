---
title: "Machine Shop RFID"
description: "Use Beaglebone Black and EM4001 RFID reader to log and lock-out the HAAS mill based on DMS badge #."
sourceUrl: "https://dallasmakerspace.org/wiki/Machine_Shop_RFID"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Machine_Shop_RFID\">legacy DMS wiki</a> — content may be outdated."
---
## Summary

Use Beaglebone Black and EM4001 RFID reader to log and lock-out the HAAS mill based on DMS badge \#.

Authorized badges will be entered manually, due to low volume of authorized users, but system will eventually support interconnect with other DMS systems to centralize this in the future.

## Information / Procedures

- The BBB static address is 192.168.200.152 (haas-vf-2.dms.local)
- User "rfid" runs the rfid_access.pl control program
- Admins must establish an SSH session to add/remove authorized users
  - Commands:
    - SSH \[[\[1\]](Mailto:rfid@192.168.200.152%7Crfid@192.168.200.152)\] where ‘rfid’ is the username
    - enter password
    - List directory contents: "ls" Unix/Mac "dir" Windows
      - disabled_init_d
      - rfid_access.pl
      - rfid_edituser.pl
      - rfid_service.sh
      - old_tags.db
      - rfid_access.service
      - rfid_ntpdate.service
      - rfid_access.log
      - rfid_auth_tags.db
      - rfid_ntpdate.sh
    - Run "perl rfid_edituser.pl" for usage
      - usage: rfid_edituser.pl (add/del/list) \[hex tag ID\] \[username first_last\]
        - Insert rfid tag with 2 leading zeros
        - The script will convert the rfid tag to hex
          - Example command: perl "rfid_edituser.pl add 00555555 first_last"
      - After the command succeeds, run the 'list' command to make sure the new user was added successfully.
        - perl rfid_edituser.pl list
          -

## Log of work

- 09/01/2015
  - Zach M. & Bryan G.
    - Meeting @5:30pm to discuss initial implementation and attempt quick proof-of-concept by reading badges

<!-- -->

- 09/10/2015
  - Zach M.
    - Reader confirmed working with text output at 9600-8-N-1

<!-- -->

- 09/23/2015
  - Zach M. & Bryan G.
    - Makeshift "control cape" with control relay shown off, still need to get 2mm to .1" adapter PCB constructed
    - Pictures inside HAAS control box of connector and mounting location
      - <img src="/dms-source/files/mw/thumb_3_32_Haas_mounting_place.jpg_100px-Haas_mounting_place.jpg" width="100" height="133" alt="Haas mounting place.jpg" /> <img src="/dms-source/files/mw/thumb_9_9c_Haas_start_stop_connector.jpg_100px-Haas_start_stop_connector.jpg" width="100" height="133" alt="Haas start stop connector.jpg" />
    - Propose that we use a generic switching power module to provide 5VDC from 1-phase of input power
    - Need to buy: START/STOP connectors
    - Need to create: START/STOP harness which tees off to the BBB control cape, mounting plate from HAAS mounting holes to BBB mounting holes, new swing arm end-cap with provision to mount RFID reader PCB, beeper, and R/Y/G LEDs

<!-- -->

- 11/4/2015
  - Zach M. & Bryan G.
    - Determined which wires go to the START/STOP buttons
      - START is N-O, STOP is N-C
    - Found [Molex connector](http://www.molex.com/molex/products/datasheet.jsp?part=active/0022012055_CRIMP_HOUSINGS.xml) to mate with HAAS PCB
    - Bryan to make mounting/adapter plate for BBB mounted in HAAS control enclosure
    - Zach to update CAD file for swing arm end-cap to hold RFID module

<!-- -->

- 11/9/2015
  - Zach M.
    - Purchased qty 10 of [Molex locking header](http://www.molex.com/molex/products/datasheet.jsp?part=active/0022232051_PCB_HEADERS.xml) at Altex for \$4.87
    - Altex didn't have the 22-01-2055 "other side", but Mouser does. Order going in today.

<!-- -->

- 11/10/2015
  - Zach M.
    - File:ReaderBoardwithLEDs.pdf for end-cap board is complete

<!-- -->

- 11/15/2015
  - Bryan G.
    - Completed first-pass end-cap model for 3D printer

<!-- -->

- 12/11/2015
  - Bryan G.
    - Final end-cap printed and installed on HAAS swing arm

<!-- -->

- 01/02/2016
  - Zach M.
    - Wiring in HAAS cabinet and swing-arm started
      - BBB and control daughter-board installed
        - <img src="/dms-source/files/mw/thumb_b_b9_Haas_bbb_mounted_in_cabinet.jpg_100px-Haas_bbb_mounted_in_cabinet.jpg" width="100" height="75" alt="Haas bbb mounted in cabinet.jpg" /> <img src="/dms-source/files/mw/thumb_e_e2_Haas_bbb_daughterboard.jpg_100px-Haas_bbb_daughterboard.jpg" width="100" height="75" alt="Haas bbb daughterboard.jpg" />
      - New 10-conductor cable pulled down swing arm and terminated on both ends with Molex 12-position connector
      - RFID reader PCB w/ LEDs and beeper installed in swing-arm end
        - <img src="/dms-source/files/mw/thumb_e_ef_Haas_swinarm_endcap.jpg_100px-Haas_swinarm_endcap.jpg" width="100" height="75" alt="Haas swinarm endcap.jpg" />
    - Initial testing
      - Green LED and relay closure verified after authorized tag read
      - Red LED remains lit and no relay closure after non-authorized tag read
    - Remaining work
      - Create and install harness to hijack ON/OFF cable (in progress)
      - Terminate network RJ-45 and attach to BBB for remote access
      - Wire in switching PSU for BBB 5V supply

<!-- -->

- 01/04/2016
  - Zach M.
    - Brooks terminated and tested the RJ-45 network drop. Connectivity verified.
    - Completed wiring for ON/OFF cable
    - First successful test of RFID control w/ Zach & Bryan's cards!!!

## Data Sheets

- File:ID-2LA, ID-12LA, ID-20LA2013-4-10.pdf -- used to read badges
- File:TLP3545 datasheet en 20120316.pdf -- used to sense HAAS +5 VDC for usage time logging
- File:Edr.pdf -- relay used to block ON button signal

## Source Code

- [rfid_access.pl](/dms-source/archive/machine-shop/machine-shop-rfid-rfid-access-pl/)
- [rfid_edituser.pl](/dms-source/archive/machine-shop/machine-shop-rfid-rfid-edituser-pl/)

## Resources

    - https://github.com/VegetableAvenger/BBBIOlib
    - http://processors.wiki.ti.com/index.php/PRU-ICSS
