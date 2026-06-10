---
title: "USB Capture Device"
description: "DMS Wiki is being migrated to source.dallasmakerspace.org Please go see the content on Source."
sourceUrl: "https://dallasmakerspace.org/wiki/USB_Capture_Device"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/USB_Capture_Device\">legacy DMS wiki</a> — content may be outdated."
---
**DMS Wiki is being migrated to [source.dallasmakerspace.org](https://source.dallasmakerspace.org/)**\
Please go see the content on Source.

Link: <https://source.dallasmakerspace.org/display/DM/Digital+Media>

- [HDE EasyCap Model 002 - 4 Channel USB 2.0 DVR Video Audio CCTV Capture Adapter](http://www.amazon.com/HDE-EasyCap-Model-002-Channel/dp/B001M547EM/ref=sr_1_64?ie=UTF8&qid=1367869487&sr=8-64&keywords=USB+Capture+Device) . Also [here (\$\<8 variant?)](http://www.amazon.com/Channel-DVR-Video-Capture-Audio/dp/B002BCKYHY)
  - Technical Details ***(quoted from the webpage)***
  - Features 4-channel video input and 1-channel audio input in one card, allows you to watch 4 different video displays on one screen
  - Record Video at 5 levels of quality in DVD/VCD/MP4 format & save it on your hard drive
  - Model \#002 - Compatible with Windows 2000 / XP / Vista 32 bit
  - 4 channel video input on one card. Maximum display/recording rate is 25 fps in PAL format; 30 fps in NTSC(US) format per channel
  - Supports multi-channel playback, searching by time/date and recording events, images options include zoom/capture/save/print/backup


When plugging it into a laptop with 64-bit Fedora 18, got the following syslog entries:

    May  6 13:21:06 osg-laptop kernel: [  127.444168] usb 1-5: new high-speed USB device number 2 using ehci-pci
    May  6 13:21:06 osg-laptop kernel: [  127.558865] usb 1-5: New USB device found, idVendor=05e1, idProduct=0408
    May  6 13:21:06 osg-laptop kernel: [  127.558875] usb 1-5: New USB device strings: Mfr=1, Product=2, SerialNumber=0
    May  6 13:21:06 osg-laptop kernel: [  127.558882] usb 1-5: Product: USB 2.0 Video Capture Controller
    May  6 13:21:06 osg-laptop kernel: [  127.558887] usb 1-5: Manufacturer: Syntek Semiconductor
    May  6 13:21:06 osg-laptop mtp-probe: checking bus 1, device 2: "/sys/devices/pci0000:00/0000:00:1d.7/usb1/1-5"
    May  6 13:21:06 osg-laptop mtp-probe: bus: 1, device: 2 was not an MTP device
    May  6 13:21:06 osg-laptop kernel: [  127.729908] media: Linux media interface: v0.10
    May  6 13:21:06 osg-laptop kernel: [  127.755310] Linux video capture interface: v2.00
    May  6 13:21:07 osg-laptop kernel: [  127.871915] usb 1-5: New device Syntek Semiconductor USB 2.0 Video Capture Controller @ 480 Mbps (05e1:0408, interface 0, class 0)
    May  6 13:21:07 osg-laptop kernel: [  127.871920] usb 1-5: video interface 0 found
    May  6 13:21:07 osg-laptop kernel: [  128.377509] stk1160: driver ver 0.9.5 successfully loaded
    May  6 13:21:07 osg-laptop kernel: [  128.381228] ALSA sound/pci/ac97/ac97_codec.c:2100 AC'97 0 access is not valid [0x0], removing mixer.
    May  6 13:21:07 osg-laptop kernel: [  128.383185] stk1160 1-5:1.0: V4L2 device registered as video0
    May  6 13:21:07 osg-laptop kernel: [  128.384420] usbcore: registered new interface driver stk1160
    May  6 13:21:07 osg-laptop kernel: [  128.482316] usbcore: registered new interface driver snd-usb-audio
    May  6 13:21:07 osg-laptop colord: Device added: sysfs-Syntek_Semiconductor-USB_2.0_Video_Capture_Controller

Plugging it into Ubuntu 64-bit (12.04.02 LTS) (fileserver at the space) got the following syslog entries:

    [3098844.848102] usb 1-1: new high-speed USB device number 5 using ehci_hcd
    [3098845.077826] Linux video capture interface: v2.00
    [3098845.128214] easycap: module is from the staging directory, the quality is unknown, you have been warned.
    [3098845.128222] easycap: module is from the staging directory, the quality is unknown, you have been warned.
    [3098845.129887] easycap: module is from the staging directory, the quality is unknown, you have been warned.
    [3098845.130534] Easycap version: 0.9.01
    [3098848.333433] easycap::0adjust_standard: selected standard: PAL_BGHIN
    [3098848.644495] easycap::0adjust_format: sought:    640x480,UYVY(0x59565955),1=field,0x00=std mask
    [3098848.644501] easycap::0adjust_format: sought:    V4L2_FIELD_NONE
    [3098848.644506] easycap::0adjust_format: actioning: 640x480 PAL_BGHIN_AT_640x480_FMT_UYVY-n
    [3098848.668250] easycap::0adjust_brightness: adjusting brightness to  0x7F
    [3098848.692126] easycap::0adjust_contrast: adjusting contrast to  0x3F
    [3098848.716260] easycap::0adjust_saturation: adjusting saturation to  0x2F
    [3098848.740265] easycap::0adjust_hue: adjusting hue to  0x00
    [3098848.741611] easycap::0easycap_usb_probe: registered with videodev: 0=minor
    [3098848.741619] easycap::0easycap_usb_probe: ends successfully for interface 0
    [3098848.741647] easycap::0easycap_usb_probe: ends successfully for interface 1
    [3098848.741661] easycap::0easycap_usb_probe: audio hardware is microphone
    [3098848.743667] easycap::0easycap_alsa_probe: registered EasyALSA0
    [3098848.743675] easycap::0easycap_usb_probe: ends successfully for interface 2
    [3098848.743739] usbcore: registered new interface driver snd-usb-audio
    [3098848.744362] usbcore: registered new interface driver easycap
    [3098848.757652] easycap:: easycap_open: ==========OPEN=========
    [3098850.013253] easycap::0adjust_standard: selected standard: PAL_BGHIN
    [3098850.332321] easycap::0adjust_format: sought:    640x480,UYVY(0x59565955),1=field,0x00=std mask
    [3098850.332326] easycap::0adjust_format: sought:    V4L2_FIELD_NONE
    [3098850.332332] easycap::0adjust_format: actioning: 640x480 PAL_BGHIN_AT_640x480_FMT_UYVY-n
    [3098850.356198] easycap::0adjust_brightness: adjusting brightness to  0x7F
    [3098850.380457] easycap::0adjust_contrast: adjusting contrast to  0x3F
    [3098850.404209] easycap::0adjust_saturation: adjusting saturation to  0x2F
    [3098850.428086] easycap::0adjust_hue: adjusting hue to  0x00

A helpful comment on the intertron was: (actually, [here](http://www.amazon.com/Channel-DVR-Video-Capture-Audio/dp/B002BCKYHY))

Works for me on Linux (Debian 6.0 Squeeze), but not nslu2 (not enough memory \[256Mb\] or cpu power \[BogoMIPS=266.24\] to do this AND 'motion'), but it work did on a SheevaPlug (512M and BogoMIPS=1192.75) and better systems sufficient for security cameras.

Search for "easycap_dc60.0.9.tar.gz" ( I found it at sites google com /site/viewandrecordwithlinux/file-cabinet/easycap_dc60.0.9.tar.gz ) and more or less follow the embedded README. (With the addition of: sudo rmmod easycap && sudo modprobe easycap 'bars=0').

Change /etc/motion/motion.conf settings: videodevice /dev/easycap1, v4l2_palette 5, input 1, norm 1 . The /dev/easycap might be 0 or 1; input is 1, 2, 3, or 4 (because there are 4 cables).

I was not interested in the audio port and so didn't test/use it.

This may very well be [the code they were talking about, above](http://code.google.com/p/easycap-somagic-linux/). However it doesn't seem to have the same idVendor.

This [blog](http://easycap.blogspot.com/2012/07/new-driver-for-easycap-dc60-stk1160.html) may be relevant though.

Current source for the driver is located

root@fileserver:/usr/src/linux-source-3.2.0/linux-source-3.2.0/drivers/staging/media/easycap

More information, potentially relevant:

<http://linuxtv.org/wiki/index.php/Easycap>

<http://linuxtv.org/wiki/index.php/Stk1160>

"The stk1160 driver is the successor of the easycap driver. It supports video capturing and audio capturing via ALSA. This driver doesn't suffer from the limitations of the easycap driver. The stk1160 module replaces the easycap module in the 3.7 kernel release."

------------------------------------------------------------------------

The easycap driver is out-of-date:

<https://github.com/ezequielgarcia/stk1160-standalone/issues/14>

    Everyone:

    I'm happy to report this is fixed (or almost fixed) in mainline. Expect a fix in v3.11 kernel and request a backport
    to your distribution's maintainer.

    This issue was NOT a BUG and had nothing at all to do with stk1160 driver. Instead it was simply the saa7115
    decoder driver not supporting gm7113c (chinese clone chip). This support has been added and as I said
    will be available probably in v3.11 kernel.

    I'm finally closing this!

From the kernel dev mailing list.

This may be the posting that will fix it: <https://lkml.org/lkml/2013/4/25/470>

This might be the actual patch: <https://patchwork.kernel.org/patch/2493981/>

Also possibly relevant: <https://github.com/btrask/EasyCapViewer/tree/master/Documentation>

Have to follow this guide to make a new module on the fileserver: <http://www.codewhirl.com/2012/04/how-to-compile-a-single-module-in-ubuntu-linux/>
