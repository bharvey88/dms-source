---
title: "Hacking your Android"
description: "This page is archived and kept for historical purposes. Please do not make any edits.If you feel this is in error, please remove the {{archive}} template."
sourceUrl: "https://dallasmakerspace.org/wiki/Hacking_your_Android"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Hacking_your_Android\">legacy DMS wiki</a> — content may be outdated."
---
**This page is archived and kept for historical purposes. Please do not make any edits.**\
If you feel this is in error, please remove the {{archive}} template.

There is a plethora of information at XDA Developers [\[1\]](http://www.xda-developers.com/). Here are the steps I went through to "root" and install a custom firmware on the Samsung Galaxy S (Captivate; AT&T).

## **Warning**

This may not work for you. It is possible that you make your phone completely unusable, but because there has been so much work on the Android phones, there is likely to be someway to always fix the software on your phone to put it **an** operational state. I've updated (hacked) the firmware on many devices and IMHO, Android devices are the safest and easiest to reflash the firmware (as compared to soldering your own programming cables, finding an exploit in the operating system, and programming your own drivers). We will not go into any advanced content; If you can follow directions on a frozen dinner, you'll do OK. Of course, I'm not liable for anything you do with this educational content.

## Background

If you're reading this, I assume you have some knowledge what you are dealing with regarding the nature of voiding your warranty. I also assume you know a tiny bit of Linux, that Android is sort of a "branch" from Linux, and you know the difference between a hard disk and memory.

## Information Gathering

- Carrier: AT&T
- Phone: Samsung Captivate (AT&T's rebranded Samsung Galaxy S)
- Captivate Wiki @ XDA [\[2\]](http://forum.xda-developers.com/wiki/index.php?title=Samsung_Galaxy_S/SGH-I897)
- Android 2.1

Here's a good grid of the different Android devices (may or not be current): [\[3\]](http://forum.xda-developers.com/wiki/index.php?title=Main_Page#Devices)

## Requirements

- Samsung Captivate (I don't know if this exact method will work on other Galaxy S phones)
- USB cable to connect your phone to your computer (Mine came with the phone)
- Windows (just for my procedure; it's very possible to use Linux & Mac, and possibly others)
- 1-2 hours
- The necessary SD card for your phone (most likely a mini-SD; It may be be possible to do without, but I went the easiest route)



## Rooting

From the Captivate's wiki page, i find a simple program to root the phone, "One Click Root/UnRoot (Mac and PC)" by TGA_Gunnman [\[4\]](http://forum.xda-developers.com/showthread.php?t=739304). (There are others)

Downloading, Unraring, Malware-scanning is sucessful.

You need Microsoft's .NET Framework 4.0 installed on your computer (Google it if you don't know)

From the Author's post:

    1. Make sure your phone is on USB Debug mode: (MENU > Settings > Applications > Developement > USB debugging = Checked )

    2. For Windows x86 and x64 systems make sure that the Samsung Drivers are installed. You can get them here.**

    3. Extract the contents of GalaxyS_Vibrant_One-Click_Root.rar to a folder.

    4. Connect your phone to your PC via the USB cable and launch the file "T-Mobile Vibrant One-Click Root.exe" file.

    5. Click the "One-Click Root" button. This will launch a command shell follow the instructions in the CMD window.

\*\*[\[5\]](http://forum.xda-developers.com/showthread.php?t=728929)

I remember having a hitch somewhere getting into the installer upon booting my phone. Brute forcing the "Special" key sequence got me there safely (I would have never tried it this carelessly in more difficult devices like modems and routers).

## Backup

(Optional, but **highly recommended**)

- Install Titanium Backup \*root\*
- Backup your device

## New Firmware

I got a little skiddish at this point considering I don't have another phone to use if I break this one. After reading the forums, wikis, and asking some friends (Thanks Andrew & Leland!) about their firmwares, I chose the "Cognition" firmware (by designgears)\*\*\*[\[6\]](http://forum.xda-developers.com/showthread.php?t=964583). It's a custom Linux kernel (based on Android 2.2) with some apps preinstalled (not the service provider's apps).

\*\*\*Download from a forum post

*NOTE: Firmware is not the same as a kernel. The kernel is the operating system. The Firmware combines the kernel and applications. I'm pretty sure you wont be able to use your phone with just the kernel; that's a skill level limitation*

- Read the instructions
- Copy the zip to your SD card and insert in phone
- Install "Boot Manager" from app market
- Plug your phone to charge and leave it plugged in till complete!
- Run it, Backup your firmware (again!), click "Install orange (something)"
- Reboot
- (Missing details here)
- Wait ~15 minutes

You're done!

## What now?

- If you're a thief, there's an app called 'applanet' or something that supposedly lets you install/use paid apps.
- Install Skype and stick it to the MAN (It seems that AT&T blocks skype, and I've heard of others being blocked)
- Use your phone as a WiFi hotspot using ~~analog roaming~~ 3G
- Lagfix for extremely fast speeds!
- Writeup your experiences (Or contribute to this post)
- Spread knowledge/Spread freedom
