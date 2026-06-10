---
title: "Announcement Bot"
description: "This information may be outdated.If you feel this is in error, please remove the {{outdated}} template."
sourceUrl: "https://dallasmakerspace.org/wiki/Announcement_Bot"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Announcement_Bot\">legacy DMS wiki</a> — content may be outdated."
---
**This information may be outdated.**\
If you feel this is in error, please remove the {{outdated}} template.

## CalendarAnnouncer

### Github Page

<https://github.com/pawl/CalendarAnnouncer/>

### Project Details

- A python project that announces events from Google Calendar over Dallas Makerspace's announcement system using Google's TTS webservice.
- Currently installed on the windows server at DMS.

## IRC Version (Failed)

### Project Goal

- Give the ability for people and programs to make announcements at DMS.

### Project Details

- I'm using this program: <https://github.com/eastein/announce>
- Announce is a bot made by someone from another hackerspace called Pumping Station One for their Tardis replica.
- It will do text to speech when it is sent a command over IRC, and it can play sounds when you refer to an MP3 already on the system.
- Announce is installed on a Raspberry Pi sitting on top of the Will Call Machine, and it is attached to some speakers.
- It's using a wifi module to connect to the internet, this may be contributing to the instability.
- It uses linux's festival to do Text-To-Speech.
- Ask Paul Brown for the password to the raspberry pi if you want to mess with it.

### Instructions for Installing Announce

<http://paulsprogrammingnotes.blogspot.com/2013/02/raspberry-pi-text-to-speech-irc-service.html>

### Progress

It will work, but it's not stable for more than about a day.

### Problems

- The IRC bot disconnects sometimes and we need to add the ability to reconnect.
- The voices could use some improvement.

### Improvement Ideas

- Allow it to play music by giving it a link to a grooveshark playlist.
