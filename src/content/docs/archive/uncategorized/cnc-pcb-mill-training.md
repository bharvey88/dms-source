---
title: "CNC PCB Mill Training"
description: "There are a number of things that must all align throughout the tool chain to successfully cut a board. Especially important are the origins and units."
sourceUrl: "https://dallasmakerspace.org/wiki/CNC_PCB_Mill_Training"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/CNC_PCB_Mill_Training\">legacy DMS wiki</a> — content may be outdated."
---
## KiCAD

There are a number of things that must all align throughout the tool chain to successfully cut a board. Especially important are the origins and units.

### Set Origin

Set an "origin point for drill and place files" on the bottom, left pcb extent and check "use auxiliary axis as origin" in the plot options:

- Place / Grid Origin <img src="/dms-source/files/mw/b_b7_Place-Grid_Origin.png" width="38" height="38" alt="Place-Grid Origin.png" />
- Place / Drill and Place Offset <img src="/dms-source/files/mw/b_bb_Place_-_Drill_and_Place_Offset.png" width="41" height="35" alt="Place - Drill and Place Offset.png" />

### Plot Gerber Files

- File / Plot
  - Layers
    - F.Cu
    - B.Cu
    - Edge.cuts
  - Options<img src="/dms-source/files/mw/8_8b_Options.png" width="178" height="24" alt="Options.png" />
  - Plot
  - Generate Drill File<img src="/dms-source/files/mw/d_d7_Generate_Drill_File.png" width="136" height="77" alt="Generate Drill File.png" />
    - Drill File

## FlatCAM

### Setup

- File -\> Open Gerber: Open back and front copper
- Switch from in to mm
  - Options tab -\> Project Options (drop down)
    - Units: mm
    - Tool Dia: 0.120mm (v-engraver @ -0.0508mm depth)

V-Engraver cut width vs. depth: [Tool Width Calculator](http://woodworkerb.com/home/pcb-isolation-routing/tool-width-calculator/)

### Mirror 2-sided

[FlatCam Manual: 4.3. 2-side PCB](http://flatcam.org/manual/doubleside.html)

- Tool -\> Double Sided PCB Tool
  - Select bottom copper .gbr file
  - Mirror Axis: X
  - Axis Location: point
  - Point/Box: (***0,45***) (for 100mm tall board) (<img src="/dms-source/files/mw/9_98_18px-OOjs_UI_icon_alert-destructive.png" width="18" height="18" alt="18px-OOjs UI icon alert-destructive.png" /> ***need to subtract the y axis margin***)
    - ***(board height - y-axis margin) / 2***
  - Mirror Object

### Create G-Code for Front Copper

[FlatCam Manual: 4.1. Isolation Routing](http://flatcam.org/manual/iso.html)

- Project tab -\> select the front copper .gbr file
- View -\> Disable all plots but this one
- Selected tab -\> Isolation Routing
  - Tool Diameter: 0.120mm (v-engraver @ -0.0508mm depth)
  - Generate Geometry
- Project tab -\> select the .gbr_iso file
- Selected tab --\> Create CNC Job
  - Feed Rate: 60
  - Generate
- Project tab -\> select the .gbr_iso_cnc file
- Selected tab -\> Export G-Code
  - Export G-Code

### Create G-Code for Back Copper

- Project tab -\> select the back copper .gbr file
- View -\> Enable all plots
- View -\> Disable all plots but this one
- Repeat Isolation Routing, Create CNC job, and Export G-Code for back copper

### Create G-Code for Each Drill Job

[FlatCam Manual: 4.2. Drilling](http://flatcam.org/manual/drill.html)

- File -\> Open Excellon: Open drill file
- Project tab -\> select the drill file
- View -\> Enable all plots
- View -\> Disable all plots but this one
- Selected tab -\> Plot Options
  - Select all tools
- Selected tab -\> Create CNC Job
  - Cut Z: -2.54
  - Travel Z: 2.54
  - Feed Rate: 76.2
  - Tool Change: enabled
  - Tool Change Z: 25.4mm
  - Generate
- Project tab -\> select the .drl_cnc file
- Selected tab -\> Export G-Code
  - Export G-Code

### Create G-Code for Board Cutout

- File -\> Open Gerber: Open edge cuts file
- Project tab -\> select the edge cuts file
- View -\> Enable all plots
- View -\> Disable all plots but this one
- Selected tab -\> Bounding Box
  - Generate Geometry
- Project tab -\> select the .gbr_bbox file
- Selected tab -\> Create CNC Job
  - Cut Z: -2.54
  - Travel Z: 2.54
  - Feed Rate: 40
  - Tool Dia: 0.50
  - Generate
- Project tab -\> select the .gbr_bbox_cnc file
- Selected tab -\> Export G-Code
  - Export G-Code

## Chilipeppr

### Load the G-Code File

- Drag-n-drop into window

### Auto Zero

- Set coordinate system to mm in Axes widget
- Home Machine ( all axes)
- Open auto-level widget
  - Steps every **10mm**;
  - Start at: 0,0
  - End at: **50,50**; <img src="/dms-source/files/mw/9_98_18px-OOjs_UI_icon_alert-destructive.png" width="18" height="18" alt="18px-OOjs UI icon alert-destructive.png" /> ***Make sure probe area exceeds board area***
  - Clearance Height: **2.0mm**
  - Start Probing at: **1.5mm**
  - Probe Feedrate: 25
  - Max negative Z: -1.5mm
- Place z axis just above work piece (-33mm)
- <img src="/dms-source/files/mw/9_98_18px-OOjs_UI_icon_alert-destructive.png" width="18" height="18" alt="18px-OOjs UI icon alert-destructive.png" /> ***Zero the "machine" z axis***
- <img src="/dms-source/files/mw/9_98_18px-OOjs_UI_icon_alert-destructive.png" width="18" height="18" alt="18px-OOjs UI icon alert-destructive.png" /> ***Make sure the probe wires are connected***
- Go to 0,0
- First use "Run Test Probe" to probe the first point and find the board top
- <img src="/dms-source/files/mw/9_98_18px-OOjs_UI_icon_alert-destructive.png" width="18" height="18" alt="18px-OOjs UI icon alert-destructive.png" /> ***Zero the "machine" z axis***
- Click the VCR "run" button
- Post-Run tab -\> Send Auto-Leveled Gcode to Workspace

<img src="/dms-source/files/mw/9_98_18px-OOjs_UI_icon_alert-destructive.png" width="18" height="18" alt="18px-OOjs UI icon alert-destructive.png" /> ***Note: Do not use "send Auto-Leveled Gcode to Workspace" more than once; it will double or triple the adjustment***

### Cut the File

- <img src="/dms-source/files/mw/9_98_18px-OOjs_UI_icon_alert-destructive.png" width="18" height="18" alt="18px-OOjs UI icon alert-destructive.png" /> ***Remove probe wires***
- Raise(+) z-axis 2 mm
- Go to 0,0
- Start spindle motor
- Click run VCR button in "Gcode" widget
