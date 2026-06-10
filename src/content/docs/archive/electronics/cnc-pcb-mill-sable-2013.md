---
title: "CNC PCB Mill Sable 2013"
description: "[https://github.com/synthetos/TinyG Code}"
sourceUrl: "https://dallasmakerspace.org/wiki/CNC_PCB_Mill_Sable_2013"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/CNC_PCB_Mill_Sable_2013\">legacy DMS wiki</a> — content may be outdated."
---
## To Do List

- Attach all the 3D printed files
- Create training curriculum
- Study spindle control from TinyG / Chillipeppr
- Research using Raspberry Pi for network attached control

### Setup

- Create a test cut
- Document settings and procedure on wiki

### Enclosure Fabrication

- Prep and paint
- Add Labels
- Cut and mount plexiglass on case top for viewing TinyG LEDs

## Settings and Procedures

[CNC_PCB_Mill_Training](/dms-source/archive/uncategorized/cnc-pcb-mill-training/)

## Sable-2015 CNC

[EBay Listing](https://www.ebay.com/itm/Sable-2015-CNC-ROUTER-Frame/202080065660)

[CNC Controller Setup](http://factorydaily.com/fdattachs/fdattachs5/11251957141302.zip)

## Hardware

### TinyG CNC Controller

[TinyG Project Page](https://www.synthetos.com/project/tinyg/)

[Documentation](https://github.com/synthetos/TinyG/wiki)

\[<https://github.com/synthetos/TinyG> Code}

[Forum](https://www.synthetos.com/forum/)

Motor 1: y-axis (front/back)

Motor 2: x-axis (left/right)

Motor 3: z-axis (up/down)

A1: Red

A2: Green

B1: Yellow

B2: Blue

### Homing Switches

[YouTube Video](https://www.youtube.com/watch?v=cRcb9yR76Jg)

- According to the tinyg manual, should use NC homing switches for better noise immunity

### Power Supply

There are two power supplies, one for the CNC control and one for the spindle; one is 24VDC for the TinyG and servos, the other is 100VDC for the spindle. The spindle supply is not well documented but assumed to be adequate for the ~500W spindle. It has a variable output controlled by a potentiometer. The CNC control power supply is marked as 24V @ 15A.

- CNC Control Fuse Rating Calculation
  - Output Power: 24V @ 15 Amps = 360 Watts
  - Current at minimum input voltage: 360W / 100V = 3.6A input max
  - AC Fuse Rating: 3.6A + 20% = 4.32A Fuse

Note: This is not the nominal input current which should be substantially less. This is also not the \_peak\_ input current which could be substantially higher when charging the input caps. This is the fuse rating which is designed so the fuse will not trip under the full operating range of expected input voltage (100-130V), maximum output power, fuse tolerances, and ambient temperature (20% factor).

- Spindle Fuse Rating Calculation
  - Output Power: 500 Watts
  - Current at minimum input voltage: 500 W / 100V = 5.0A input max
  - AC Fuse Rating: 5.0A + 20% = 6A Fuse

### Spindle

- The spindle has a separate fuse on the DC supply to protect from damage during a spindle stall
- 100VDC / 500W
- Air cooled, Brush contact armature
- 12,000 RPM
- 52mm diameter
- 2KG

## Software

- Convert gerber to gcode

[FlatCAM](http://flatcam.org/): Free and Open-source PCB CAM

- G-code runner for mill control

[Chilipeppr](https://github.com/synthetos/TinyG/wiki/Chilipeppr): Mill control with PCB auto-level

[bCNC](https://github.com/vlachoudis/bCNC): GRBL CNC command sender, auto-level, and g-code editor

## Completed To Do List Items

### ~~Purchase~~

- ~~Panel mount 2 pin / high amperage connector for spindle~~
- ~~(1) M3 x 0.5 x 16 pan head phillips; spindle power supply~~
- ~~(8) M3 x 0.5 x 8 pan head phillips; cable tie-downs~~
- ~~(2) M5 x 25 allen socket black; z-axis limit switches~~
- ~~(12 ft) 16GA black - AC power~~
- ~~(spool) 18GA black - DC power/spindle~~
- ~~(6) right angle female spade lugs~~
- ~~(6) red open spade lugs (narrow)~~
- ~~(5) blue open spade lugs (normal)~~
- ~~(8) cable tie-downs w/ small bolt (M3) eyelet~~
  - ~~Create Solidworks model for 3d printer~~
  - ~~Print cable tie-downs\<s\>~~
- ~~\<s\>(8) M3 x 0.5 x 3 screws for front face plate~~
- ~~Spindle Power Supply standoffs~~
- ~~Stepper Power Supply standoffs~~
- ~~Rubber feet for enclosure~~
- ~~USB-B Male to USB-B Female panel mount cable for tinyg~~

### ~~Enclosure Fabrication~~

- ~~Front~~
  - ~~Fabricate face plate for existing enclosure~~
    - ~~Cut on PlasmaCAM~~
  - ~~Mount master power switch~~
  - ~~Mount spindle power switch~~
  - ~~Mount spindle speed potentiometer~~
  - ~~Mount USB panel connector~~
- ~~Bottom~~
  - ~~Drill standoffs and mount power supplies~~
  - ~~Drill standoffs and mount TinyG~~
    - ~~Leave room for future Raspberry Pi~~
- ~~Back~~
  - ~~Drill and mount input power connector~~
  - ~~Drill and mount fuse holders~~
  - ~~Drill and mount stepper connectors~~
  - ~~Drill and mount spindle connector~~
  - ~~Drill and mount limit switch connector~~

### ~~Enclosure Cabling~~

- ~~DC power for TinyG (Red/Black 18GA)~~
- ~~Steppers (Red/Black/Yellow/Blue 22GA)~~
- ~~Limit switches (22GA)~~
- ~~Fan~~
- ~~Spindle (Red/Black 18GA)~~
- ~~AC Input power, fuses, switches, and chassis ground for supplies (Black/White/Green 16GA)~~

### ~~Gantry~~

- ~~Design and fabricate limit switch holders~~
- ~~Drill and tap gantry for limit switch holders~~
- ~~Fabricate spindle cable~~
- ~~Fabricate limit switch cables~~
- ~~Add webbing to all cables~~
- ~~Securely mount all cables to gantry~~
- ~~Solder stepper, spindle, and limit switch connectors~~

### ~~Cabling~~

- ~~Add z-min to limit switch connector~~
- ~~Mount z-min probe and ground binding posts on stationary part of gantry~~
- ~~Wire z-min probe and ground binding posts to limit switch connector~~

### Setup

- ~~Enable homing / limit switches in TinyG~~
- ~~Set polarity for each axis~~
- ~~Set maximum travel distance for each axis~~
- ~~Create PCB hold down~~
- ~~Load and configure FlatCAM~~
- ~~Load and configure [Chilipeppr](http://chilipeppr.com/) for PCB milling~~
- ~~Study auto leveling and electronics needed~~
