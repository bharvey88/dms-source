---
title: "MOTHER"
description: "Some or all of the information on this page is outdated, inconsistent, irrelevant or confusing.Please help clean it up if you are able."
sourceUrl: "https://dallasmakerspace.org/wiki/MOTHER"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/MOTHER\">legacy DMS wiki</a> — content may be outdated."
---
**Some or all of the information on this page is outdated, inconsistent, irrelevant or confusing.**\
Please help clean it up if you are able.

**This information may be outdated.**\
If you feel this is in error, please remove the {{outdated}} template.

MOTHER is a combination of hardware and software which controls a variety of physical or digital outputs based on various inputs. We would like to create something similar to the [LVL1 Hackerspace implementation](http://wiki.lvl1.org/MotherStatus), but tailored to our own needs.

## Makerspace Ubiquitous / Task Helper / Event Responder

The goal of MOTHER is to create an AI system to monitor and control various systems within the space based on the following design criteria.

- Open-source - MOTHER should use open software and hardware whenever possible.
- Low cost - Everything is relative, but if a low cost commercial solution exists, cost may trump open-source.
- Flexible - MOTHER should be able to monitor or control nearly anything we can think of. New systems should be as easy as possible to integrate.

## Status

Currently this project is in the design phase.

#### Paul Brown's Mother Related Projects

- Got an IRC bot that does text to speech running: <http://paulsprogrammingnotes.blogspot.com/2013/02/raspberry-pi-text-to-speech-irc-service.html>
  - It's not very stable though, and we need to make it reconnect.

<!-- -->

- Made a program that sounds an alert when the door is left open for too long after midnight: [https://dallasmakerspace.org/wiki/Door_Log](/dms-source/archive/outdated/door-log/)
  - I had to dismantle this and attach the sensor to the security system, and use the Arduino for something else.

<!-- -->

- Currently working to make a stable PA system for soundings alarms and making announcements.

<!-- -->

- Made a program which pulls the logs from the access control system when someone badges into the access control successfully (then posts to google docs). This program can trigger other events when someone badges in.

<!-- -->

- Currently working with Steve-O on a program that monitors the security system and sounds alerts.

## Active Members

- Karl
- Gus Reiter
- Paul Brown

## Priorities

Priorities will be listed here in order from most important to least. The ease of implementation or other factors may also increase a particular item's priority.

## Back-end system

The first step will be deciding on a backend system for the AI. Considerations include physical hardware (PC, interface cards, etc...), Operating system (most likely some variant of Linux), and configuration of interface modules (scripts, data format, etc...).

Realistically, it will probably be a Raspberry Pi.

## Classroom lighting

Due to high interest and ease of implementation, MOTHER controlled classroom lighting will most likely be the first system to be integrated.

## Front door traffic monitoring

The front door's electronic door strike has a sensor which is attached to the security system. Anything on the local network can use the [security system's API](https://dallasmakerspace.org/forums/viewtopic.php?f=16&t=263) and detect traffic coming through the front door.

Mother could use this a number of ways:

- Detected when the door is open when it shouldn't be.
- Detect traffic and trigger other home automation events.

There's also an arduino attached from the file server to the access control, and it sends serial data when the someone badges into the access control successfully. This can be used to:

- Trigger events when someone badges in (like pulling the log and announcing the user over the PA system)

## Space-wide audio

Due to relative ease of implementation and high utility, MOTHER controlled audio throughout the space may make a good candidate for the third system to be integrated.

## Feature Wish List

## Monitoring

### 3D Printer

### Brewing

### Climate

- Temperature (in each room)
- Humidity
- Barometric pressure
- Gas levels (oxygen/CO)
- Radioactivity
- Local weather / forecast (web scrape)

### Hydroponics

### Internet Connection

- notify when the internet connection goes down, possibly walk occupants through resetting the internet if not try to reset the router itself.

### Kiln

### Maintenance

- Trash / Recycling
- Fridge / Freezer temps
- Food / Drink / Supplies
- Toilet Paper
- Dust sensor

### Occupancy

- Individual presence (opt in)
- Total members present
- Total people present
- Space vacant

### Radio

- Strong nearby signals
- Police / Fire

### Security

- Cameras
- Motion

### Web

- Weather
- DMS mentions
- Craigslist
- Ebay

### WiFi

- notify if another SSID of DMS shows up to prevent spoofing.
- notify if another hotspot shows up on the same, and possibly adjacent channel, is over powering the official WiFi.

## Control

### 3D Printer

Send next job in queue to printer when ready (with notification)

### Audio

#### Design Questions

##### AI Voice

- What type of AI voice?

<!-- -->

    *GLaDOS
    *Sultry female
    *Sultry male

- Can we implement multiple voices and change them at will?

##### Independent control of room audio

- Should room audio be mono or stereo?
- How do we implement intelligent control for multiple rooms with independent audio streams?
- What types of audio do we want?

<!-- -->

    Announcements of meetings
    Music
    IRC events
    Local weather warnings
    Audio "scenes" similar to LVL1's implementation

##### Highly directional sound using ultrasound

A research project on it's own, [getting audible sound from an ultrasonic source](http://en.wikipedia.org/wiki/Sound_from_ultrasound), could give us a way for MOTHER to address only a single person. It could also be used for other interesting effects.

#### Classroom

Adjust lighting for impending meeting

### HVAC

Adjust AC based on various criteria

### Kiln

Control temperature profile via web interface (with notification)

### Lighting

### Security

Arm security system when space is vacant



## Communication

### SMS / E-mail Notification

- Upcoming/Current meetings
- Kiln job finished
- 3D Print job finished
- Brewing finished / status update
- Hydroponic warning - chemicals or temp out of tolerance

### Automate food ordering

- Prepare order when snack levels are low
- order food from local delivery places

## Resources

Place useful resources here.\

[LVL1 MOTHER](http://wiki.lvl1.org/MotherStatus)

## Other
