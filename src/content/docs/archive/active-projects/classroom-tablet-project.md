---
title: "Classroom Tablet Project"
description: "The Classroom Tablet Project is intended to primarily provide accurate, up to date Classroom Calendar information. It will eventually allow other operation..."
sourceUrl: "https://dallasmakerspace.org/wiki/Classroom_Tablet_Project"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Classroom_Tablet_Project\">legacy DMS wiki</a> — content may be outdated."
---
## Introduction

The Classroom Tablet Project is intended to primarily provide accurate, up to date Classroom Calendar information. It will eventually allow other operations such as allowing members to check into classes with their RFID badges.

## Requirements

- 7"-10" tablets (Android, Apple, or Windows)
- Hardware for powering the tablets via Power over Ethernet (802.11af)
- Wiring to classrooms and PoE switch for power
- Wall hanging case for mounting outside of each classroom
- Software for accessing the DMS Calendar and displaying it on the tablet.
- Hardware for reading RFID (125MHz, EM4100 compatible)
- Software for accessing Active Directory for RFID, Name, email and phone lookup.

## Completed Steps

- Decided on Android tablets for cost reasons.
- Tested Amazon Fire 7" tablets (already DMS owned). No power solution.
- Tested AM1078 10.1" tablet (\$100 Microcenter). No power solution. Returned.
- Researched charging Android devices while using OTG USB. Many/most are not compatible with charging while using OTG with stock Android software.
- Demoed early alpha software that displays live class data.
- Decided on using a tablet that has separate USB OTG and DC Power in. Motorola XOOM matches this description and is available in quantity inexpensively on the used market.
- Tested Motorola XOOM MZ604 (WiFi Only). USB OTG and DC power in work fine together. Ordered Motorola XOOM MZ602 tablets.
- Ordered converters and adapters.
- Received PoE adaptors.
- Room selection check boxes (up volume button)
- Disabled back button
- Beta software version 0.5 in limited release

## Next Steps

### Software

- Config page for refresh rate, etc.
- Timeout to return to default page
- Kiosk mode
- Swipe for more events
- UI improvements
- RFID lookup in Active Directory
- Use RFID lookup to check in for class (Need API from DMS Calendar)
- Use RFID lookup to populate Name/EMail/Phone for class signup (Need API from DMS Calendar)

### Hardware

- Design wall hanging case to be cut on the CNC Router
- Cut and test fit case
- Functional test of PoE
- Functional test of USB OTG hub and Ethernet adapter
- Run PoE wiring to doors of classrooms
- Install PoE switch in wiring closet

## Status

- 8/20/2016 - Tested \$50 Amazon Fire 7" tablet (OTG and USB power incompatible)
- 8/27/2016 - Tested \$100 Microcenter Android Tablet (OTG and USB power incompatible)
- 8/30/2016 - Early Alpha software demoed
- 8/30/2016 - Tested Motorola XOOM 10.1" tablet (works with external DC power and OTG)
- 8/31/2016 - Ordered XOOM tablets (\$45@ from ebay)
- 8/31/2016 - Ordered PoE 12V adapters (\$8.95@ on Amazon)
- 8/31/2016 - OTG USB hub with Ethernet (\$11.93@ on Amazon from China)
- 9/02/2016 - Ordered USB RFID adapters (\$3.88@ on ebay from China)
- 9/02/2016 - Received PoE 12V adapters
- 9/03/2016 - Ordered power cable adapters (\$4.19@ on ebay from China)
- 9/04/2016 - Beta software version 0.5 in limited release
- 10/24/2016 - All parts in from China
- 11/01/2016 - Updated XOOM tablets to Android 4.1.2
- 01/22/2017 - 1st proof of concept tablet mount
- 02/05/2017 - 2nd proof of concept tablet mount

## Photos

- <img src="/dms-source/files/mw/thumb_f_f7_XOOM_MZ604.jpg_92px-XOOM_MZ604.jpg" width="92" height="120" alt="XOOM MZ604.jpg" />
- <img src="/dms-source/files/mw/thumb_9_9c_USB_RFID_Adaptor.jpg_120px-USB_RFID_Adaptor.jpg" width="120" height="120" alt="USB RFID Adaptor.jpg" />
- <img src="/dms-source/files/mw/6_6e_PoE_Adaptor.jpg" width="120" height="99" alt="PoE Adaptor.jpg" />
- <img src="/dms-source/files/mw/thumb_a_a0_OTG_Hub_with_Ethernet.jpg_120px-OTG_Hub_with_Ethernet.jpg" width="120" height="120" alt="OTG Hub with Ethernet.jpg" />
- <img src="/dms-source/files/mw/thumb_4_4a_DC_XOOM_Adaptor.jpg_120px-DC_XOOM_Adaptor.jpg" width="120" height="80" alt="DC XOOM Adaptor.jpg" />

## Project members

- Stan Simmons
- Gus Reiter

## Resources

- Special thanks to Stacy Devino and her Android Study Jams GDG Dallas classes
- Android Studio <https://developer.android.com/studio>
