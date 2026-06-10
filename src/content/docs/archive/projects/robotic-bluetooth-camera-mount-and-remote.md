---
title: "Robotic Bluetooth Camera Mount and Remote"
description: "After testing the GY-85 IMU for orientation, it does not seem to be reliable or precise enough for this project. After researching a switch to stepper moto..."
sourceUrl: "https://dallasmakerspace.org/wiki/Robotic_Bluetooth_Camera_Mount_and_Remote"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Robotic_Bluetooth_Camera_Mount_and_Remote\">legacy DMS wiki</a> — content may be outdated."
---
## Goals

- Motorized Pan/Tilt Camera Mount
- Automate the creation of panoramas using the motorized mount
- Bluetooth control from a Smartphone
- A Multipurpose electronic controller allowing for time lapses, long exposures, repeated panorama shooting, and other possibilities
- Allow for control and automation of other Pan/Tilt servo controlled heads
- Possibly sell the product as a kit

## Members

- Mikel Duke (project leader)

## Progress

### Mount

#### Revision 1

- Laser Cut 1/4" MDF
- 3" Lazy Susan Bearings
- Nut and Bolt Assembly
- Clearance issues during assembly
- Vertical and Horizontal rails for Parallax Correction
- Metric Ruler Slide rails to mark spacing

#### Revision 2

- Added hinges to enable the mount to fold to a smaller size for transport
- Adjusted placement of parts for better fit
- Widened Adjustment rails for stability
- Removed need for spacer boards allowing for less parts to be cut
- Added holes for battery mount

#### Revision 3

- Added access holes to Lazy Susan bearings for easier assembly
- Adjusted size of the mounting plates to help hold the servo gears in place
- Added radial guides on moving parts
- Changed servo placement for better cable routing, no more coming unplugged when rotating

#### Revision 4

- New Full build of the mount
- Redesigned to use larger servos from Servo City
- Gear ratio adjusted to account for the limited 3.5x rotation rather than continuous
- Larger overall
- Looser fit on to the servos
- Laser Cutter was out of focus and dirty, so the lines were not as clean as they should be and gears may need to be recut

### Electronics

#### Update 1

After testing the GY-85 IMU for orientation, it does not seem to be reliable or precise enough for this project. After researching a switch to stepper motors, the power requirements seem a little to high for the portability that is needed.

After more research and consideration, a pair of more powerful servos with a 1080 degree range has been purchased. Due to the extra power and range, continuous rotation should not be necessary. The camera mount gears will need to be re-sized to get the correct amount of rotation range given the limits of the new servos. Price-wise, it seems to be on par with changing to steppers if only slightly more, given the cost of 2 steppers, drivers, and bigger batteries.

## Next Steps

- Improve the orientation system
- Create PCB design for controller board
- Create housings for the electronics
- Define kit contents, instructions, SKU
- Develop support website
- Improve Bluetooth App

## Resources

### Parts

#### Builds 1-3

The mount is currently built out of laser cut 1/4" MDF. Acrylic is a possibility for future builds once the design is finalized, it will not be used for prototyping due to the higher price.

The electronics consist of 2 servos controlled by an Arduino Nano with a Serial Bluetooth interface. Orientation is currently done using a GY-85 IMU commonly used on quad copters.

Camera triggering is done with two 2n2222 transistors connected to a 2.5mm stereo audio cable to a Digital SLR's remote port.



#### Build 4

The original continuous rotation servos have been replaced with a pair of [HS-785HB](http://www.servocity.com/html/hs-785hb_3_5_rotations.html) 3.5x rotation 183oz-in servos.

## Photos

- <img src="/dms-source/files/mw/thumb_9_9e_CameraMount-Rev2.jpg_90px-CameraMount-Rev2.jpg" width="90" height="120" />

  Revision2

- <img src="/dms-source/files/mw/thumb_6_68_CameraMount-Rev2-back.jpg_90px-CameraMount-Rev2-back.jpg" width="90" height="120" />

  Revision 2 back

- <img src="/dms-source/files/mw/thumb_7_78_CameraMount-Rev-mounted.jpg_90px-CameraMount-Rev-mounted.jpg" width="90" height="120" />

  Canon Digital Rebel XT Mounted

## Similar Products

- <http://www.servocity.com/html/pt785-s_pan___tilt_system.html>
- <http://www.gomediamonkey.com/bescor-mp360.htm>
- <http://gigapan.com/>
