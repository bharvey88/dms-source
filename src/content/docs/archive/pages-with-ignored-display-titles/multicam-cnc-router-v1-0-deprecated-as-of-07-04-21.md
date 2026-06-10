---
title: "MultiCam CNC Router v1.0 Deprecated as of 07/04/21"
description: "The MultiCam CNC router is capable of cutting and engraving up to 5x10' sheets of wood and plastic. Training is required in order to use it."
sourceUrl: "https://dallasmakerspace.org/wiki/MultiCam_CNC_Router_v1.0_Deprecated_as_of_07%2F04%2F21"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/MultiCam_CNC_Router_v1.0_Deprecated_as_of_07%2F04%2F21\">legacy DMS wiki</a> — content may be outdated."
---
<img src="/dms-source/files/mw/thumb_0_07_Multicam.jpg_300px-Multicam.jpg" width="300" height="300" /> MultiCam Classic CNC Router

The MultiCam CNC router is capable of cutting and engraving up to 5x10' sheets of wood and plastic. Training is required in order to use it.

## Materials

Basic users may only cut wood on the machine. Advanced rated users may cut wood and plastic, and may engrave many materials with the diamond drag bit.

## Training

There are currently three classes being offered for the CNC Router at various times during the month.

**Basic CNC Router** is approximately 4 hours in length, and has a \$50 fee. This fee helps pay for replacement bits and machine maintenance. After the class, a hands-on test must be scheduled before unsupervised use of the machine is allowed. This class enables users to cut wood and products made from wood.

**CNC Router Hands-on** is a workshop intended for new users to get some additional hands-on experience prior to taking their test for the Basic CNC Router class. The class is limited to 5 persons.

**Advanced CNC Router** is offered only for those who have already earned their basic rating, and gained some experience using the router. Topics are discussed to allow users to become more proficient using the router, and to enable advanced users to cut plastics, as well as using the diamond drag bit.

## Keypad

For studying purposes:

<img src="/dms-source/files/mw/thumb_c_c1_MulticamKeypad.jpg_300px-MulticamKeypad.jpg" width="300" height="225" /> The MultiCam EZ Control® keypad

## User-supplied Cutters

If you choose to provide your own cutters (bits), here are some options:

- MOLZA TOOL gives DMS a fabulous deal on end mills. Use them for your personal needs whenever possible. eBay store operated by Molza Tool: <https://www.ebay.com/usr/getsmarttooling?_trksid=p2057872.m2749.l2754>
- [Onsrud](http://www.onsrud.com/) - particularly for mills, compression bits and ballnose (Onsrud is frequently available through [Manson Tool](http://www.mansontool.com/))
- Freud - particularly for Vbits and tapered ballnose
- Other popular brands include Amana, Misenheimer and Niagara Cutter plus these online sources:\
  - [Precise Bits](http://precisebits.com/)\
  - [Eagle America](http://www.eagleamerica.com/)\
  - [MLCS Woodworking](https://www.mlcswoodworking.com/)

## Infrastructure Setup

The MultiCAM computer in the woodshop is a Raspberry PI remote connecting to the [Jump Server](/dms-source/archive/infrastructure/#Jump_Server).

The [Jump Server](/dms-source/archive/infrastructure/#Jump_Server) has software that supports the MultiCAM.

"Machine Tools Suite v4" is required to be running on the Jump Server for operation. This software has a required USB dongle on the VMH-07 Hyper-V server.

The software can be downloaded from [MultiCAM Downloads](http://www.multicamsoutheast.com/wordpress/index.php/downloads) and it is called "MultiCam Suite 4 Install"

VCarve Pro is also installed to support the MultiCAM. If VCarve can't find the license, see [this Talk Post](https://talk.dallasmakerspace.org/t/vcarve-runbook-how-to-fix-vcarve-when-its-not-finding-the-licence/46604) for troubleshooting.

## MultiCam Special Interest Group

A Special Interest Group for the Multicam was formed at the end of 2018 to rehabilitate the equipment. With this task accomplished, the SIG was disbanded at the end of September, 2019.

### SIG Information

In January 2019 the SIG (with the assistance of numerous Makers) repaired the Republic blower and modified the CNC Vacuum Holddown Bed. A status update was prepared for email distribution to authorized Multicam users.

- Jan 2019 Changes to Multicam System and Users Rules

A copy is also available on the committee drive:

      N:\woodworking\CNC Router\Multicam SIG\Blast Email of Multicam changes 14Jan2019.pdf

### SIG Update Information

As of October 1, 2019, the Multicam SIG is being absorbed into the general Woodshop Committee. The Multicam Talk Group has also been removed.

- 2019 Multicam SIG Legacy Information

A copy is also available on the committee drive:

      N:\woodworking\CNC Router\Multicam SIG\2019 Multicam SIG Legacy Information.pdf

## Operational Notes and Videos

### Collets

- The MultiCam uses ER25 collets
- We have collets from 1/8" dia to 1/2" dia, specifically 1/8", 3/16", 1/4", 3/8", 1/2" (barring loss or damage)

### Spoilboard and Hold Down

- Vacuum system is partitioned into active zones
- NO SCREWS in the spoilboard

<!-- -->

- [Video 1](https://youtu.be/o-sNPIZbaK8) - 2019 update to the spoilboard, zones, and hold down (07:40 min)
- [Video 2](https://youtu.be/uV3thBJgTx0) - Alternate work material hold down approaches (05:35 min)
- [Video 3](https://youtu.be/cV6d0ozY6zA) - Hold Down Helpers. When/how to use the new helpers in securing your material. (02:06 min)
- [Video 4](https://youtu.be/Oy_wv4T0HH0) - Spoilboard Repair (how to) (05:40 min)

### Aligning work

- [Video](https://youtu.be/1kiDILSa-Fc) - Process for aligning work and related jig (02:37 min)

### Dust Collector

- The Multicam is now connected to the Felder Dust Collector. Slide gate below the point hose connect to shoe must be open.
- You can lift the large hose out of the white standleg and vacuum up the table
- In addition, there is a hose extension normally on top of the Multicam Control Box that will allow you to vacuum up the surrounding floor ... much easier to clean between CNC and walls.

### Tool Balancer for Remote

<img src="/dms-source/files/mw/thumb_d_db_MC_Tool_Balancer.jpeg_200px-MC_Tool_Balancer.jpeg" width="200" height="200" alt="MC Tool Balancer.jpeg" />

Use the balancer to keep the remote out of harms way or from being dropped.

When you take the remote out of the wall mounted lock box, clip it on the cable of the balancer. When your work is done, unclip and put the remote back in the lock box.

### Torque Wrench for Collet

- Use the calibrated torque wrench to tighten the cover nut for the collet. Specification torque is 25 Ft-Lbs.
- The wrench “snaps” when 25 ft-lbs is reached. The actual “snap” is a give in the wrench that changes the alignment of the handle with the head of the wrench. You can feel it give, so go slow and “feel” the give. You will likely not hear the click above the other woodshop noises.
- Brace the wrench that goes on the nut against the spindle mount bracket and then turn the shaft clockwise with the torque wrench. (Clockwise as viewed from the top or motor end of the spindle.)

<img src="/dms-source/files/mw/thumb_3_32_Multicam_torque_wrench_1_RevA.jpeg_600px-Multicam_torque_wrench_1_RevA.jpeg" width="600" height="337" alt="Multicam torque wrench 1 RevA.jpeg" /> <img src="/dms-source/files/mw/thumb_b_b0_Multicam_torque_wrench_2.jpeg_600px-Multicam_torque_wrench_2.jpeg" width="600" height="337" alt="Multicam torque wrench 2.jpeg" /> <img src="/dms-source/files/mw/thumb_b_b3_Multicam_torque_wrench_3.jpeg_600px-Multicam_torque_wrench_3.jpeg" width="600" height="337" alt="Multicam torque wrench 3.jpeg" /> <img src="/dms-source/files/mw/thumb_1_19_Multicam_torque_wrench_4.jpeg_600px-Multicam_torque_wrench_4.jpeg" width="600" height="337" alt="Multicam torque wrench 4.jpeg" />

## References

### Manufacturer Information

- [Specification pamphlet](/w/images/d/d6/Multicam1000cEN.pdf)
- \[[User manual](http://www.multicamsoutheast.com/wordpress/Files/Router_User_Manual.pdf)

### G-Code

- MultiCam G-Code Table - [PDF of Mcodes and Gcodes](/w/images/b/bf/MultiCAM-GCodes_and_MCodes_with_Software_Ports.pdf)

### Regenerative Blower (vacuum system)

DMS equipment comprises HRB-1102 motor portion and HRC-1102 air handler portion, per the serial number that is installed.

- [Manual for air handler portion](/w/images/4/4d/HRC-4RC_Republic_Regenerative_Blower_Manual.pdf)
- [Specs](/w/images/f/fe/HRC1102-1202-Spec-Sheet-50-60.pdf)
- Manual/schematic for motor portion was provided in hard copy by manufacturer. A copy is available on the committee drive:

<!-- -->

      N:\woodworking\Drawings\MultiCam CNC router\280-0041-Regen-Owners-Manual

### Classroom Notes

[Docs From Training](https://drive.google.com/open?id=0B-KBCWE3VUfdfnJLWlVzMmlhSDUtNWJLY2dpWXJOb1UzUG11dFVoeXJaTTJFZWZoX0Y0T2M)

## Multicam Regular Maintenance How-to's

- Grease machine: There are a total of 12 nozzles that need to be greased with the yellow-and-black grease gun that is located in the MultiCam desk. There are: 2 nozzles on the left side of the table, and 2 on the right (Where the giant gantry is). There are 4 on the left side of the spindle, and 4 on the right. In order to grease these nozzles, insert the grease gun gently onto the tips of the nozzles. Make sure that the grease gun is set directly facing into the nozzle and gently press the gun's handle to extrude the grease. Do so until you visually see the grease come out the gantry, then stop immediately. Do so for all the nozzles. Lastly, move the Z-axis completely down, clean the lead screw with cotton rags, then apply a thin coat of Super Lube Silicone Lubricating grease over the entire lead screw. Move the Z-axis fully up and repeat the process on the bottom half. Wipe off excess. You are now complete.

## Multicam Regular Maintenance Schedule

- 1/19/19: Grease and lubricated machine -Natcha
