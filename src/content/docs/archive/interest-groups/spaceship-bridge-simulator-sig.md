---
title: "Spaceship Bridge Simulator SIG"
description: "The Spaceship Bridge Simulator SIG is a group of makers actively modding and adding the bridge simulator genre of LAN party games, with the goal of upping ..."
sourceUrl: "https://dallasmakerspace.org/wiki/Spaceship_Bridge_Simulator_SIG"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Spaceship_Bridge_Simulator_SIG\">legacy DMS wiki</a> — content may be outdated."
---
The Spaceship Bridge Simulator SIG is a group of makers actively modding and adding the bridge simulator genre of LAN party games, with the goal of upping the world immersion without the use of VR. We are currently focused on the open source game Empty Epsilon. We have built, and are continuing to develop, a show control system to drive DMX lights, lasers, fog machines, etc. that responds automatically to what's happening in the game. We are at the beginning stages of developing custom missions and building a bigger world narrative.


Our show control method involves a combination of TouchDesigner, Arduino, and other electronics to drive our props and effects.


For other recent activity, see our Talk category. [Special Interest Groups - Spaceship Bridge Simulators](https://talk.dallasmakerspace.org/c/interest-groups/spaceship-bridge-simulators)



## Log:

### For Event 07/07/2017:

- NEW Shield hit and hull hit cues
  - Building off last month's method for "momentary" cues, now we have working cues and light animations for laser and weapon impacts
- NEW Game paused cue
- Enhanced phaser cues
  - Left and right phasers are now tied to left and right lasers in the room
  - Stability fix - they shouldn't get stuck any more
- Tweaked Docking lights
- Enhanced Main screen performance
  - Things were a bit jittery last time - this was a video card setting that was fixed.
- Improved Relay signals
  - Some relay boards need logic level pulled high to activate, some need it pulled low. This is now addressed in TouchDesigner
- Stability fixes between EE and TD

### For Event 06/02/2017:

- Mitch Cerroni made us some totally rad event posters! Thanks, Mitch!
- Momentary cues are now possible.
  - We've developed a method of adding "momentary" cues to Empty Epsilon. These are game events that have no duration (impacts, phasers firing, item pickups, etc). This is a big deal, because before we were missing half of our cues!
- Custom sound workflow developed.
  - It's now possible to have 5.1-panned sound! TouchDesigner does not support reverb, so this needs to be manually built in to each sound effect. The first custom Red Alert sound made its debut, and there's more to come!
- Wash light repaired.
  - I opened up the malfunctioning DMX wash light and replaced the brain with a Teensy. Now it's rock solid AND has new features like 16-bit dimming! This was a fairly involved project I may do a write-up on later. - David Smart
- NEW lasers
  - Nate got our new GREEN lasers put together! These are now mapped to phasers firing.
- NEW Red police light
  - Mapped to Red Alert cue
- NEW Yellow Alert cue and sound
- Nebula lightning effect fixed.
- Stability issues fixed between TouchDesigner and the Arduino controller.

### For Event 04/28/2017:

- First time playing Empty Epsilon
- Show control adaptation
  - Existing system Dave built last year was for Artemis, which works differently. We had to find a way to feed out useful cues from the game. A handful of others have done this and posted about it, but not many.
  - Most of the month was spend learning to create a custom build of the game and widen the scripting interface so TouchDesigner can talk to it.

### For Event 03/31/2017:

- First time using TouchDesigner as the brains of our show control.
  - Most of this time was spent getting to know TouchDesigner, getting it to play nice with Artemis and Arduino, and learning how to procedurally animate lights. Also we found a better way to stream data from the game.

### For Event 01/27/2017:

- First one of the year!
- We did stuff, but it's not documented. Shame on us.

### For Event 12/16/2016:

- Weapons prop added
  - Nate built a totally BA weapons prop with four representations of weapons that rotate when the Weapons officer is reloading the torpedo tubes. Complete with a CNC router-ed housing, acrylic name plate, vinyl decals, and blinky lights. So awesome!
- Continued work on Neopixels
  - I created my own driver board so I can send the data over RS485! Wohoo! - Dave
- Improved DMX cue organization
- Support for external relays added

### For Event 11/11/2016:

- New fog machine!
- Worked with Neopixels for Room 2
  - Implemented SPI on Arduino to communicate faster

### For Event 09/30/2016:

- New Neopixel strips
  - Built up 12m of portable, individually addressable LED's.

### Event 08/26/2016 and earlier:

There were another half dozen events before this, but documentation is sparse. We had a ping pong cannon though! Hopefully it'll come back some day....
