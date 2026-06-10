---
title: "Alarm"
description: "DMS Wiki is being migrated to source.dallasmakerspace.org Please go see the content on Source."
sourceUrl: "https://dallasmakerspace.org/wiki/Alarm"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Alarm\">legacy DMS wiki</a> — content may be outdated."
---
**DMS Wiki is being migrated to [source.dallasmakerspace.org](https://source.dallasmakerspace.org/)**\
Please go see the content on Source.

Link: [source.dallasmakerspace.org](https://source.dallasmakerspace.org/)

**This information may be outdated.**\
If you feel this is in error, please remove the {{outdated}} template.

## Alarm System

## Purchased Alarm

Decided to go with the Vista-20P with the 6160RF keypad and AD2USB module.

- Alarm was purchased from here for \$205 (better deal than amazon or ebay): <http://www.aesecurity.com/vi61plkit.html>
  - Came with bonus backup battery and siren.
- Separately ordered 2 motion sensors and 2 wireless door sensors.
- Also ordered AD2USB module for ~\$90.

## Requirements

- Controls must be accessible over serial or ethernet (this is required for integration)
- Must have open source software or be easy to write code for

## Options

### DSC Power Series

- Integration through the IT100 (serial) and IT120 (ethernet) modules
- Works with Vera home automation
- Lack of open-source software

### Ademco Vista Series

- \$160 for complete kit (w/o wireless): <http://www.ebay.com/itm/Ademco-Honeywell-Vista-20P-with-6160-Alpha-keypad-Version-9-12-/221041630131>
- \$205 for complete kit (w/ wireless)
- ~\$90 for Integration via the AD2USB adapter via Nutech <http://www.nutech.com/online-store/35.html>
- Good open-source software
- Works with Vera home Automation
- Requires 6160 keypad to be programmed
- Requires 6160RF keypad to be programmed and accept wireless sensors

### HAI – Omni panels

- These have Serial connectivity built in.
- Expensive (possibly around \$1k for the kit?)
- No good software?

## Automation & Integration

## Requirements

- Must be able to program the alarm to disarm when someone successfully badges into the access control.
- Must be able to use the program on linux or over the web.

## Options

### Homeseer

- Expensive (\$219.95)
- Closed Source (\$100 for source code)
- Requires Windows server
- Plug-in for DSC is free, plug-in for Ademco is \$30

### Vera

- Controller is \$179 or \$294 (not sure about the difference between the two)
- Not sure how we would make this work with the access control to disarm the alarm automatically
- Could be used to control other Z-Wave devices

### DSC Software

- Module (IT-100) costs \$60, but there does not seem to be any well developed software for it (except HomeSeer)
- <http://sourceforge.net/projects/dsc-alarm/>
- <http://hackaday.com/2012/07/27/bending-a-home-security-control-panel-to-your-will/>
- <http://openremote.org/display/docs/OpenRemote+2.0+How+To+-+DSC+Alarm+Systems>

### Ademco Software

- Software is free, but module costs nearly \$90
- For Linux (will work on our file server)
- Large community
- Node JS module: <https://github.com/alexkwolfe/node-ad2usb>
- <http://www.nutech.com/online-store/35.html>
- <http://www.nutech.com/index.php?option=com_fireboard&Itemid=74&func=view&catid=4&id=21>
- Should be fairly easy to disarm the alarm with it, as long as access control system can send a signal to the PC

## Monitoring

See: [https://dallasmakerspace.org/wiki/Alarm_Monitoring](/dms-source/archive/outdated/alarm-monitoring/)

## Important Vista 20p Notes

- Explanation of zone types: <http://www.diysecurityforum.com/index.php?topic=24817.msg116103#msg116103>
- How to add the additional panel: <http://help.safemart.com/entries/20485302-Adding-wireless-sensors-to-an-Ademco-Vista-Series-panel>
- "The resistors are supposed to be at the sensor location. They serve no useful purpose when installed in the panel." <http://www.diysecurityforum.com/index.php?topic=24817.msg116101#msg116101>
- Good review: <http://www.allpar.com/reviews/other/ademco.html>
- Good wiring diagrams: <http://www.myalarmguy.net/honeywell.html>
- Best explanation of an EOLR (end of line resistor): <http://www.diysecurityforum.com/index.php?topic=19202.msg85357#msg85357>
- Make sure both the Loop# and serial number on a wireless device match or the sensor will always fault. For example, this is wrong, since the loop number is wrong: ![zlQU95f.png](http://i.imgur.com/zlQU95f.png)
- You can disable a zone by using 00 for the zone type:

![lF7MeJ2.png](http://i.imgur.com/lF7MeJ2.png)
