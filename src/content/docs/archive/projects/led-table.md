---
title: "Led Table"
description: "Demo Code: Adafruit WS2801 Demo and Example"
sourceUrl: "https://dallasmakerspace.org/wiki/Led_Table"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Led_Table\">legacy DMS wiki</a> — content may be outdated."
---
## Photos

- <img src="/dms-source/files/mw/thumb_c_c7_Led_Table-Led_Install.jpg_120px-Led_Table-Led_Install.jpg" width="120" height="90" />

  Led Install

- <img src="/dms-source/files/mw/thumb_a_ae_Led_Table-Led_Array.jpg_120px-Led_Table-Led_Array.jpg" width="120" height="90" />

  Led Array

- <img src="/dms-source/files/mw/thumb_f_f3_Led_Table-Led_Array_test1.jpg_120px-Led_Table-Led_Array_test1.jpg" width="120" height="90" />

  Led Array Test

- <img src="/dms-source/files/mw/thumb_6_67_Led_Table-Cube_Install.jpg_120px-Led_Table-Cube_Install.jpg" width="120" height="90" />

  Cube Install

- <img src="/dms-source/files/mw/thumb_6_68_Led_Table-Led_Cube_test1.jpg_90px-Led_Table-Led_Cube_test1.jpg" width="90" height="120" />

  Led Cube Test

- <img src="/dms-source/files/mw/thumb_e_eb_Led_Table-Test_Fit.jpg_90px-Led_Table-Test_Fit.jpg" width="90" height="120" />

  Led Array Test Fit

- <img src="/dms-source/files/mw/thumb_a_a6_Led_Table-Top_Back.jpg_90px-Led_Table-Top_Back.jpg" width="90" height="120" />

  Top

- <img src="/dms-source/files/mw/thumb_e_ec_Led_Table-Top_On.jpg_120px-Led_Table-Top_On.jpg" width="120" height="90" />

  Top On

## Videos

[Led Table Video 1](http://www.youtube.com/watch?v=T2C9mu11J88&feature=youtu.be)

[Led Table Video 2](https://www.youtube.com/watch?v=4fyQAG1ji9Y)

[Led Table Video 3](https://www.youtube.com/watch?v=qthHU0W8SG4)

## Goals

- Coffee Table of Addressable Leds (Done)
- Interface for creating animations, new effects, light demos (Done)
- Raspberry Pi Control for expansion (Done)
- Image based Animations (Done)

## Members

- Mikel Duke (project leader)

## Status

- 06/12/2013 Leds Arrived, Began Design of Led assembly for laser cutting
- 06/13/2013 Laser Cut the Led Assembly, and glue leds in
- 06/14/2013 Built the led array and support frame, mounted power supply, and tested
- 07/03/2013 The table frame has been built, and I have begun to stain it.
- 07/08/2013 A sheet of Soft Ice Acrylic has been bought from Allied Plastics for \$45. It is 36"x24" and will be used for the top to diffuse the leds.
- 07/10/2013 I finally found a Raspberry Pi and will be looking into using it in combination with the Arduino Uno for more power and higher level language support.
- 07/13/2013 The table has been built and brought home. Some extra trim needs to be added around the top to allow for a better fit.
- 11/19/2013 Successfully got the Arduino to read full rgb led byte arrays over the USB connection from the Raspberry Pi using a Java app
- 04/26/2014 I finally uploaded code to [GitHub](https://github.com/mikelduke/LedTable) for the progess so far. The Arduino uses a USB interface to a Raspberry Pi which runs Apache, php, and MySQL. This allows for a webpage based interface to a java program which talks to the Arduino. BMP Image loading and animations are now possible.

## Next Steps

## Done

- Make a fancy coffee table to put the led array in
- Research using a rPi or PCDuino instead of Arduino for greater flexibility
- Hookup the Pi and Arduino over usb, write java to access it over serial, and a php page for the interface

## Resources

### Parts

- 2 50 addressable led strings
- Arduino UNO
- 5V 10A Power Supply
- Power Cord and plug
- Power Switch
- Misc Wires
- 5 4x2ft sheets of MDF
- Other wood as needed
- Silver/White Glossy Spray Paint
- Misc Fittings/Screws/Bolts
- 36"x24" Soft Ice Acrylic Sheet

### Designs

### Notes

- The wiring for the led strands I used was different than expected and will vary between suppliers.

### Software

Demo Code: [Adafruit WS2801 Demo and Example](http://learn.adafruit.com/12mm-led-pixels/code)

Raspberry Pi: [Pi4J](http://pi4j.com/)

GitHub: [LedTable Code](https://github.com/mikelduke/LedTable)
