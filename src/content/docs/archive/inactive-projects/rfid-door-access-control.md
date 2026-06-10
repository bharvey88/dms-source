---
title: "RFID Door Access Control"
description: "This project has been listed as inactive. If you are interested in taking over this project please contact one or more of the project's members for more in..."
sourceUrl: "https://dallasmakerspace.org/wiki/RFID_Door_Access_Control"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/RFID_Door_Access_Control\">legacy DMS wiki</a> — content may be outdated."
---
**This project has been listed as inactive.**\
If you are interested in taking over this project please contact one or more of the project's members for more information.

## Introduction

This project has been abandoned for now.

The RFID Door Access Control Project is intended to primarily provide a secure method for members to use the RFID cards and key fobs to gain access to Dallas Makerspace secure doors.

This system will replace the limited Chinese control board system we currently have in place. The system will be open source and will use off the shelf components as much as possible. The system will allow for expansion beyond the 4 door limit of the current system. Better logging and data mining will also be part of the design criteria.

## Requirements

### Software

- Software for reading Wiegand RFID data
- Software for accessing Active Directory for RFID lookup
- Active Directory Group for Members
- Active Directory Group for Special Secure areas (Server Room, Electrical Room, Secure Storage, etc)
- Logging and data collection

### Hardware

- ~~Wiegand reader for RPi. (RPi can not effectively directly read multiple Wiegand)~~
- Arduino Nanos (one per door) to translate Wiegand RFID readers to serial
- Network connectivity to the DMS network
- Hardware for powering the device via Power over Ethernet (802.3af)
- ~~PoE Wiring to door for RFID readers (not needed)~~
- ~~24VDC wiring to door strikes (using existing)~~
- Case to protect device from dust and tampering
- RPi Hardware for activating door strikes (24VDC Relays)

### Wiegand RFID

The Wiegand interface has two data lines, DATA0 and DATA1. These lines are normally held high at 5V. When a 0 is sent, DATA0 drops to 0V for a few us. When a 1 is sent, DATA1 drops to 0V for a few us. There is usually a few ms between the pulses. Both lines dropping to 0V is an error condition.

The reader should have at least 4 connections (some readers have more, LED, Buzzer, 35 bit enable). Connect the red wire to 12V. Connect the black wire to ground. Connect the green wire (DATA0) to Digital Pin 2 (INT0). Connect the white wire (DATA1) to Digital Pin 3 (INT1). The blue wire is the reader LED, the yellow wire is the reader Buzzer, and usually the grey wire is 35 bit enable. The LED and Buzzer lines are held HIGH for off, LOW for on.

Each of the data lines are connected to hardware interrupt lines. When one drops low, an interrupt routine is called and some bits are flipped. After some time of of not receiving any bits, the Arduino will decode the data. The program currently only decodes the 26 bit, 35 bit and PIN Code (4 bit) formats, but you can easily add more.

#### 35 bit HID Corporate 1000 format

The 35 bits are broken down into a 12 bit facility code (bits 3-14) and a 20 bit card code (bits 15-34). Bit 1 is an odd parity bit that covers all 35 bits. Bit 2 is an even parity covering bits 3&4, 6&7, 9&10, 12&13, 15&16, 18&19, 21&22, 24&25, 27&28, 30&31, 33&34. Bit 35 is odd parity, covering bits 2&3, 5&6, 8&9, 11&12, 14&15, 17&18, 20&21, 23&24, 26&27, 29&30, 32&33. When calculating the parity bits, calculate bit 2, bit 35, and then bit 1.

#### 26 bit standard format

The 26 bits are broken down into an 8 bit facility code (bits 2-9), a 16 bit card code (bits 10-25), and two parity bits. The first parity bit is an even parity bit and covers the first 13 bits. Bits 2 thru 9 are the facility code and bits 10 thru 25 are the card code, stored big endian (MSB first). The last parity bit is an odd parity bit and covers the last 13 bits. There are only 255 possible facility codes and 65,535 possible card codes, so there are duplicate cards.

#### 8 bit PIN format

No parity bits. 8 bit Wiegand keyboard data, high nibble is the "NOT" of low nibble. eg if key 1 is pressed, data = E1, in binary 11100001 , high nibble = 1110 , low nibble = 0001. (Not yet implemented)

#### 4 bit PIN format

No parity bits, internal code = bits 0 to 4, ESC (1010) clears pin, ENT (1011) sends the pin. We are arbitrarily limiting the pin to a minimum of 6 and maximum of 10 characters. We drop leading zeros to match the cards.

## Completed Steps

### Software

- Demoed early alpha software that toggles relays
- Demoed alpha software that reads RFID and looks up active member status
- Demoed alpha software that looks up Group Membership(s)
- Demoed beta software/hardware that converts Wiegand RFID to serial

### Hardware

- Decided on Raspberry Pi 2/3 for cost and ease of prototyping (RPi3 for processor overkill and WiFi)
- Decided on PoE to 5v Micro USB adapter (UCTRONICS IEEE 802.3af Active PoE to Micro USB 5V 2.4A for Raspberry Pi)
- Decided on Arduino Nanos (one per door) to translate Wiegand to serial
- Prototype Wiegand Nano board finished

## Next Steps

### Software

- ~~Create AD Group "CN=Server Room Access"~~
- ~~Create AD Group "CN=Electrical Room Access"~~
- ~~Create AD Group "CN=Secure Storage Room Access"~~
- ~~Create AD Service User~~
- ~~Config page for web page port, relay timing and relay pin number~~
- ~~Bought/Built icons for screen buttons~~
- ~~Active Directory RFID (Employee ID) lookup~~
- ~~Active Directory Member of Group lookup~~

### Hardware

- ~~Raspberry Pi 3 (for main processing)~~
- ~~16 port relay board (5A-10A relays w/ NO and NC contacts) (too big)~~
- ~~Wiegand Bi-Directional Logic Level Converter 5v-12v to 3.3v for Pi GPIO (not using RPi for Wiegand)~~
- ~~Hall effect sensor for door open sense (not using)~~
- ~~802.3af Power over Ethernet Adapter~~
- 3D print and test fit case
- ~~Run PoE wiring to doors (not needed)~~
- ~~Connect Hall Effect sensor to GPIO pin (not needed)~~

## Status

Abandoned: We found lots of good information while working on this, but ran out of steam. While researching we found the chinese door control system had more capability than originally thought. At this time we will be expanding use of that system.

## Photos

<img src="/dms-source/files/mw/thumb_6_6c_RPi3.jpg_200px-RPi3.jpg" width="200" height="150" alt="RPi3.jpg" /> <img src="/dms-source/files/mw/thumb_5_5c_PoE_to_Micro_USB.jpg_200px-PoE_to_Micro_USB.jpg" width="200" height="159" alt="PoE to Micro USB.jpg" /> <img src="/dms-source/files/mw/thumb_3_30_Wiegand_Reader_Prototype.png_200px-Wiegand_Reader_Prototype.png" width="200" height="161" alt="Wiegand Reader Prototype.png" />

## Project members

- Stan Simmons
- Mike Kelp

## Resources

- <http://www.robotshop.com/en/3-channel-raspberry-relay-board.html>
