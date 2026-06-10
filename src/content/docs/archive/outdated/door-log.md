---
title: "Door Log"
description: "This information may be outdated.If you feel this is in error, please remove the {{outdated}} template."
sourceUrl: "https://dallasmakerspace.org/wiki/Door_Log"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Door_Log\">legacy DMS wiki</a> — content may be outdated."
---
**This information may be outdated.**\
If you feel this is in error, please remove the {{outdated}} template.

## Project Goal

- Alert people physically at DMS when the door is left open after midnight and before 10am.
- Alert admins when no one closes the door.

## Am I Turning DMS Into A Nanny State?

- No, I think it's reasonable to ask people to leave the door closed when we're not expecting guests without access cards.
  - Positives: It might help cool down the space when it's hot.
  - Negatives: It's a security risk. There's not much stopping someone from coming through the door and stealing something if the door is left open. And when it's late, there are probably fewer people around to stop them.

## Project Setup

- Door strike has a sensor that will indicate whether the door is shut.
  - <http://www.kawamall.com/pd_1x_strike38s.cfm>
  - Use the yellow wire and the blue wire on the door strike for "Normally Closed".
- An arduino connected to the door sensor checks if the door is open and sends info to a raspberry pi via serial.
- Using Arduino's Debounce Example, modified to send 1 (if door open) and 0 (if door closed) over serial to a raspberry pi.
- Raspberry Pi Code: <https://github.com/pawl/DMSDoorLog>
- What the circuit looks like:

![button_schem.png](http://arduino.cc/en/uploads/Tutorial/button_schem.png)

## Ideas Less Hacky Alternatives

- Get rid of the clip that goes into the door, and make a device that lets someone inside DMS specify how long to leave the door open.
  - This might be too hard on the relay? The door is normally closed, and making it stay open may shorten the lifespan of the access control system.
