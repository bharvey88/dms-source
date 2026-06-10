---
title: "Raman Spectrometer Build"
description: "Next Meetup Goals (Date: July 18th, 2016)"
sourceUrl: "https://dallasmakerspace.org/wiki/Raman_Spectrometer_Build"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Raman_Spectrometer_Build\">legacy DMS wiki</a> — content may be outdated."
---
**Raman Spectroscope Build**

**Next Meetup Goals (Date: July 18th, 2016)**

Align spectrometer components using white light source


**Links**

<https://hackaday.io/project/1279-ramanpi-raman-spectrometer>

<http://bwtek.com/spectrometer-introduction/>


**Contacts**

Eric Brunner: eric.w.brunner@gmail.com

Brian Terry: brianbterry@gmail.com


**History** This area for meeting minutes, issues \[resolution\], milestones, etc.

06-20-2016 (Meeting)

- Found that another PCB is needed (ordering)
- Got Nucleo board to load code (Board enumerates as removable hard drive and just copy \*.bin file to the board)
- Nucleo is supposed to send CCD info to Raspi by UART on a GPIO pin. We can take a [USB to serial adapter](http://www.kr4.us/ftdi-basic-breakout-5v.html?gclid=CjwKEAjwy6O7BRDzm-Tdub6ZiSASJADPNzYrekGKJyV5IJpPCG4km7bQArY7ev8LF6YsKwJd1lGyChoC6rPw_wcB) and hang the RX pin off it to snoop (this can stay even when RasPi is attached).

06-17-2016 Looking at Nucleo-64 board. It is intended to be programmed using the MBED site (code&tools in the cloud and cloud drives debug via USB). At MBED select the [NUCLEO-F401RE](https://developer.mbed.org/platforms/ST-Nucleo-F401RE/) Or just plug in the board and it enumerates as a usb drive - open the html file. Bummer... Cant install the driver for MBED. This is STSW-LINK009 but the page for download does not have a zip/exe to download. Opened question ticket at mbed/st site

06-1?-2016 (Email) Idea to simplify design as much as practical to get Raman working as soon as possible. As a first step simply shine laser through translucent material, through 532nM filter, into diffraction lens, into CCD and read with Nucleo. Additional features added as prioritized by group.

06-13-2016 (Meeting) PCB arrive! Open topics:

- How do the 3 pcb interconnect? (5+ pcb if we count the Pi and Nucleo)
- What value power supply is needed?
- We need to procure stuff (Steve will get some of this on order)

05/??/2016 (Meeting) Class on fundamentals of Raman spectroscopy and some ideas on how the space can use the upcoming spectrometer

5/9/2016 (Meeting) Kickoff, introduce project scope and goals. Based on Hackaday project. Idea on not installing optics until the last stage of assembly, this will reduce chance of breaking optics. Probably we will only build a subset of the Hackaday project, hopefully the firmware will tolerate missing features.
