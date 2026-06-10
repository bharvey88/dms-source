---
title: "Laser Queue System"
description: "The Laser Queue system is designed to help laser users login to the various Laser machines operated by Team Laser, track statistics about machine usage and..."
sourceUrl: "https://dallasmakerspace.org/wiki/Laser_Queue_System"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Laser_Queue_System\">legacy DMS wiki</a> — content may be outdated."
---
The Laser Queue system is designed to help laser users login to the various Laser machines operated by [Team Laser](/dms-source/archive/laser/), track statistics about machine usage and let waiting users know when a machine is available.



## Current Features

- RFID Login with makerspace tag/fob/card
- Raspberry Pi Touch Screen Interface
- Wall timer for assisting with three hour limit per session
- Displays cool committee shark logo



## Planned Features

- Usage tracking to assist with paying for a session
- Electronic Queue
- Remote Queue Monitoring
- Statistics collection

## Current Implementation

The current implementation uses a Raspberry Pi 3, Model B+ for each Laser. The Raspberry Pi is fitted with a SmartPi touch case and the official Raspberry Pi screen. Each screen on the lasers acts as a client to the laser queue server. The laser queue server is also currently implemented using a Raspberry Pi 3, Model B+ running Apache, PHP7 and MariaDB. The RFID login feature depends on the same script used for the [RFID_Member_Info_Portal](/dms-source/archive/active-projects/rfid-member-info-portal/).

## Machines Operational

- Blitzen (Installed 2dec2018)

## Known Issues

- Login Field Loses Focus (fixed 26dec2018)
- RFID Reader Generates Garbage (WIP - replacing original USB reader with Wiegand Reader)

## RFID Reader

The original implementation used a [low-cost RFID reader from Amazon](https://www.amazon.com/Reader-LANMU-125khz-Contactless-Proximity/dp/B07B7H6CQ2/) that plugged directly into USB and emulated a keyboard. This reader works fine, however, it occasionally starts generating garbage rather than the tag number. The plan is to replace it with [this reader](https://www.amazon.com/gp/product/B00G4ZWORW/) and use a Teensy 2.0 microcontroller running [this code](https://github.com/monkeyboard/Wiegand-Protocol-Library-for-Arduino).

## Project Members

- @SixVolts
- @JoshW
