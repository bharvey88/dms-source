---
title: "Rostock Prisma 3D Printer"
description: "This information may be outdated.If you feel this is in error, please remove the {{outdated}} template."
sourceUrl: "https://dallasmakerspace.org/wiki/Rostock_Prisma_3D_Printer"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Rostock_Prisma_3D_Printer\">legacy DMS wiki</a> — content may be outdated."
---
**This information may be outdated.**\
If you feel this is in error, please remove the {{outdated}} template.

## Current Firmware

Current firmware is located on the Github repository: <https://github.com/ealott/DMS-Deltabot-Marlin> Outdated:File:Marlin.zip

## Construction

### To Do List

- ~~Print hot bed mounts with larger holes or get smaller slot nuts~~ (not necessary)
- ~~Print six additional motor end clips~~ (done)
- ~~Pick up another carbon fiber rod~~
- ~~Get hot end, ball joints, and t-slot nuts from Andrew~~
- ~~Print extruder body~~
- ~~Print carriage~~
- Print LCD screen mount
- ~~Cut the carbon fiber rod (luke says to use dremel with cut off wheel)~~
- Get another stepper for the extruder from William
- Put firmware on electronics and connect electronics
- Assemble "platform" (thing that holds the hot end)
- Laser cut a piece to hold the electronics
- Install end-stops

Post-Move Update 9/15:

- Repair thermistor connector
- ~~Determine if Marlin firmware on build page is fully configured~~
- ~~If not, configure the current version of Marlin~~
- ~~Plugin endstops~~
- Plugin extruder heater and bed heater
- Manage cables
- Get a metal or glass build plate (ideally a thin sheet of metal for initial testing)
- ~~Re-tension belts~~
- Test the extruder
- Configure Pronterface/slic3r/KISSlicer
- Test Octoprint? Give it a try and see if it fits our use case.\</s\>
- ~~Document all configurations in a GitHub repo, link it to the Wiki page~~
- Print some very ~~tall party hats~~ [Gear Bearings](http://www.thingiverse.com/thing:53451)
- Set these values to their correct measurements in Configuration.h and recompile/reupload the firmware:

<sup>[\[1\]](#cite_note-1)</sup>

- Fix the thermistor wire
- Set the correct thermistors for hotend and bed
- Build a level bed, cover it with a suitable print surface

### Missing Parts

- ~~Hot end and related components (Andrew says he has these)~~
- ~~Traxxas ball joints (Andrew says he has these too)~~
- ~~T-slot nuts~~
- ~~Pultruded carbon fiber rod~~
- Rubber bands for holding the belt (William used zip ties)
- Nema 17 motor for the extruder (William has one, we also ordered one)
  - We need to buy this from ultimachine.
- Piece of glass for the heated bed
  - We need to buy this from a glass shop. (william used the laser cutter to cut this, he probably got the larger piece from home depot)
- ~~Extruder body~~
- ~~Carriage~~
- ~~2x Rotating Polybutylene Tube Fitting, Adapter for 4MM Tube OD, M5 X 0.8 Male Pipe Thread~~
  - ~~We need to buy this from mcmaster.~~ William donated this
- ~~5ft Super-Smooth Clear Mfa Tubing, 2 mm ID, 4 mm OD, 1 mm Wall Thickness~~
  - ~~We need to buy this from mcmaster.~~ William donated this
- LCD screen mount
- End stop mounts? (william found some on thingiverse)
- Some nylon spacers to go between the heated bed and the ABS heated bed mounts.
  - Need to buy these from home depot
- ~~Filament Drive Gear~~ William donated one

### Things We Need To Buy

- ~~Calipers to measure the rods (since we're cutting them)~~
- ~~Dial indicator for making sure the bed is level~~

### Things We Bought

- Filament Drive Gear
- Another NEMA 17 motor to replace the one we're borrowing from William
- Packet of sugru to hold up the idlers

Post-Move Update 9/15:

- RAMPS replaced (Richard B. provided the funds)

### What We've Learned

- There don't seem to be any instructions, only pictures of completed printers. (this printer seems like more of a prototype, the original rostock and the rostock max are more popular - but the rostock max gets bad reviews: [Source](https://www.youtube.com/watch?feature=player_embedded&v=OtDKx2kvAj4#!))
- There's a similar version called the Kossel: <http://reprap.org/wiki/Kossel#Mini_Kossel>
- Bearing guides don't fit on the parts that hold the belt and slide onto the extrusions.
- The slotted end of the heated bed mounts goes under the heated bed. The other side attaches to the extrusions.
- The extruder body attaches to the extrusions, it doesn't sit on the carriage like most other printers. The filament is guided by some tube that goes from the extruder to the carriage/hot end.
- The belts are held together with rubber bands.
- We purchased ends for the rods/ball-joints rather than printing them, this is a better idea.
- You should probably just buy the t-slot nuts rather than print them.
- The carbon fiber rods in the BOM say 3/16 (or 4.8mm), but the traxxas ball joints are for smaller metric rods.
  - We put a drill bit into a vise, the twisted the ball joints onto them by hand to bore them out.
- There are holes for the belt on one side of the carriage piece that slides along the extrusions. Make sure those face inward.
- The motor mounts should all face the same direction, so you don't have to invert some of the stepper motors in the firmware.
- Two 608 bearings go inside of the carriages, because a single bearing will wear a track in the extrusions.
- The tension used to hold the idlers up can be problematic with keeping it calibrated. Sugru was used to hold them up.

Post-Move Update 9/15:

- Mitch discovered the RAMPS board was non-functional. The Arduino Mega was just fine, as were the stepper drivers.
- RAMPS replaced (Richard B. provided the funds), stepper drivers are still functional.
- Mitch compiled and uploaded Marlin. Basic motion achieved. More configuration necessary.
- Standard ATX power supply was wired up to the RAMPs board.
- Created a GitHub repo here to keep track of config changes: <https://github.com/ealott/DMS-Delta-Marlin>
- The thermistor wire broke from the connector. I'll try to bring in a replacement connector (or at least a new crimp pin).
- Discovered the old build page here: [https://dallasmakerspace.org/wiki/Rostock_Prisma_3D_Printer](/dms-source/archive/3d-fabrication/rostock-prisma-3d-printer/), will review the firmware posted
- \[Evan\] scrapped the initial attempts at compiling the deltabot Marlin branch and instead resorted to using jcrocholl's deltabot branch of Marlin
- The firmware repo is here. I'll try to keep the commit messages descriptive. <https://github.com/ealott/DMS-Deltabot-Marlin>
- Thanks to the help of Ed (thanks, Ed!), we've now got functioning endstops, and Z-axis homing works perfectly
- Printer control through Pronterface works as expected
- The REPRAP_DISCOUNT_FULL_GRAPHIC_SMART_CONTROLLER isn't working. We probably need to merge some changes from the main Marlin branch.

### Things printed by another 3d printer

- The entire project was started around the Rostock Prisma by JorgeRdgz [thing 34146](http://www.thingiverse.com/thing:34146)
  - This design was a great start, but was lacking little things like a build doc with details and measurements
- [belt guides](http://www.thingiverse.com/thing:28683) x 12 (2 per bearing)
- [air stripper bsp extruder](http://www.thingiverse.com/thing:126778)
- [build platform](http://www.thingiverse.com/thing:43318)
- carbon fiber rods
- traxxis ball bearing joints
- [mounting ramps board](http://www.thingiverse.com/thing:53857)
- [end stop mounts](http://www.thingiverse.com/thing:135423)

## Project Update

The Rostock Prisma was disolved by the board and the parts have been passed on to the 3D fab Mendel90 project as part of the [How to build a RepRap 3D printer class](/dms-source/archive/3d-fabrication/how-to-build-a-reprap-3d-printer/)

1.  <span id="cite_note-1">[↑](#cite_ref-1) \#define DELTA_SEGMENTS_PER_SECOND 160 // Center-to-center distance of the holes in the diagonal push rods. \#define DELTA_DIAGONAL_ROD 186.0 // mm // Horizontal offset from middle of printer to smooth rod center. \#define DELTA_SMOOTH_ROD_OFFSET 128.0 // mm // Horizontal offset of the universal joints on the end effector. \#define DELTA_EFFECTOR_OFFSET 19.9 // mm // Horizontal offset of the universal joints on the carriages. \#define DELTA_CARRIAGE_OFFSET 19.5 // mm \#define XYZ_FULL_STEPS_PER_ROTATION 200 \#define XYZ_MICROSTEPS 16 \#define XYZ_BELT_PITCH 2 \#define XYZ_PULLEY_TEETH 17 \#define XYZ_STEPS (XYZ_FULL_STEPS_PER_ROTATION \* XYZ_MICROSTEPS / double(XYZ_BELT_PITCH) / double(XYZ_PULLEY_TEETH)) \#define DEFAULT_AXIS_STEPS_PER_UNIT {XYZ_STEPS, XYZ_STEPS, XYZ_STEPS, 100} \#define DEFAULT_MAX_FEEDRATE {200, 200, 200, 200} // (mm/sec) \#define DEFAULT_MAX_ACCELERATION {9000,9000,9000,9000} // X, Y, Z, E maximum start speed for accelerated moves. E default val</span>
