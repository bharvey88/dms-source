---
title: "Self Driving RC Car"
description: "Self driving autonomous RC Car. The RC car is controlled by a modified RC controller with inputs from an Arduino connected to a PC. The PC determines the d..."
sourceUrl: "https://dallasmakerspace.org/wiki/Self_Driving_RC_Car"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Self_Driving_RC_Car\">legacy DMS wiki</a> — content may be outdated."
---
## Overview

Self driving autonomous RC Car. The RC car is controlled by a modified RC controller with inputs from an Arduino connected to a PC. The PC determines the direction of the RC car by interpreting a visual display in front of the RC car. The visual display is sent from the front of the RC car via an android phone to the PC via WIFI wireless connection. The visual display is interpreted by the PC using a Neurel Net algorithm. The Neurel Net algorithm looks for dissimilar visual displays (in greyscale) of a defined track. Based on the algorithm results the PC feeds instructions to the Arduino controller so the RC follows the track.

## Members

- Larry D'Agostino

## Parts List

- RC Car: Hotwheels ([Walmart](http://www.walmart.com/ip/Hot-Wheels-ZL1-Remote-Controlled-Vehicle/21984629))
- Android phone
- Arduino Uno
- Laptop
- Opto-isolator: 4N35 or 4N38 (qty 4)
- 1K Resitor (qty 4)
- breadboard and wires

## Assembly

## Status

- All parts assembled
- All software installed
- PC control to Arduino works
- Android to PC video feed works

### Next Steps

- Video capture is not working properly. Fix Java program.
- Perform autonomous test
- Port PC Java apps to Python
- Port Neural Net algorithm to R

## Resources

- Diagrams

<!-- -->

- <img src="/dms-source/files/mw/thumb_5_52_Opto_schem.png_112px-Opto_schem.png" width="112" height="120" />

  Opto-isolator circuit diagram

- <img src="/dms-source/files/mw/thumb_3_31_Rccar_bb.png_120px-Rccar_bb.png" width="120" height="106" />

  Arduino controller connections

<!-- -->

- Software for android, arduino, and PC: [NNRCcar](https://github.com/dps/nnrccar/blob/master/arduino/serialrccar/serialrccar.pde)

## Credits

Originally designed and developed by [David Singleton](http://blog.davidsingleton.org/nnrccar/)
