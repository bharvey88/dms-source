---
title: "Embedded Linux Computers"
description: "This page is a quick outline of various embedded linux computers, pricing, specifications, differences, etc. This is meant primarily for comparison purpose..."
sourceUrl: "https://dallasmakerspace.org/wiki/Embedded_Linux_Computers"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Embedded_Linux_Computers\">legacy DMS wiki</a> — content may be outdated."
---
## Summary

This page is a quick outline of various embedded linux computers, pricing, specifications, differences, etc. This is meant primarily for comparison purposes and to allow viewers to get an idea of what the differences are in this increasingly crowded market. Project links made with each device are welcome. This list is by no means comprehensive. This page is specifically for boards that can run Linux or Android (not straight Arduinos, etc.)

## BeagleBoard XM

- Price: \$150-\$200
- Processor: 1GHz ARM Cortex-A8 (OMAP3530)
- RAM: 512MB
- Storage: MMC / SD connector
- Networking: Ethernet, possibly USB Ethernet gadget
- USB: 4 2.0 ports
- Video: DVI-D/SVideo port driven via 2D/3D graphics accelerator
- Notes: Also has some TI DSP components. Is more of a computer than a hardware hacking device. Voltage levels can be tricky to work with.
- Availability: Reasonably available from multiple sources.

## BeagleBone

- Price: \$89 (as of 4/23/2013)
- Processor: AM3558 ARM Cortex A8, ARMv7 - 500MHz via USB, 720MHz via 9V power supply
- RAM: 256MB
- Storage: MicroSD card
- Networking: Ethernet and USB Ethernet Gadget
- USB: 1 host port, 1 client / OTG
- GPIO: 2x 46 pin headers
- Notes: Has additional PRU units for some realtime operations, ARM Cortex M3 for power management. Integrates with other devices more easily (3.3v, possibly 5v) than the BeagleBoard XM.
- Availability: Widely available

## BeagleBone Black

- Price: \$45
- Processor: AM355x 1GHz processor (ARM Cortex A8, ARMv7)
- RAM: 512MB
- Storage: 2GB eMMC, MicroSD slot
- Networking: Ethernet, USB Ethernet Gadget
- USB: 1 USB Host, 1 client / OTG
- Video: HDMI
- GPIO: 2x46 pin headers
  PWM: 8 pins
  ADC: 7 pins, 1.8 Volts max
  SPI: 1, 2 if you disable HDMI
  I2C: 1
  UART: 5, 3 are full featured, 1 is output only, 1 is missing CTS/RTS
- Notes: PRU units, ARM Cortex M3, should integrate well with other devices.
- Availability: New product, starts shipping in late April / early May. May be semi-difficult to obtain for a while.

## PandaBoard

- Price ~\$159.00
- Processor: TI OMAP 4430 Cortex A9
- RAM: 1Gig
- Storage: Full size SD/MMC card cage with Support for High Speed & High Capacity SD cards
- Networking: 10-100 Ethernet, WiFi 802.11 n, Bluetooth
- USB: 1x USB 2.0 HS OTG port, 2x USB 2.0 HS Host ports
- Video: HDMI v1.3 Connector (Type A) to drive HD displays, DVI-D Connector (can drive a 2nd display in simultaneous), LCD expansion header
- Audio: 3.5" Stereo Audio in/out, HDMI Audio out
- GPIO General purpose expansion header (I2C, GPMC, USB, MMC, DSS, ETM), Camera expansion header, LCD expansion header, Parallel RGB24 support, DSI support
- Debug: JTAG, 2 Debug LEDs (configurable), 1x GPIO button
- Height: 4.5" (114.3 mm)
- Width: 4.0" (101.6 mm)
- Weight: 2.6 oz (74 grams)

[Pandaboard info](http://www.pandaboard.org/content/resources/references)



## PandaBoard ES

- Price ~\$189.00
- Processor: TI OMAP 4460 Cortex A9
- GPU: Imagination Technologies’ POWERVR™ SGX540 384 MHz Graphics Core, Supports all major API's including OpenGL® ES v2.0, OpenGL ES v1.1, OpenVG v1.1 and EGL v1.3
- RAM: 1Gig
- Storage: Full size SD/MMC card cage with Support for High Speed & High Capacity SD cards
- Networking: 10-100 Ethernet, WiFi 802.11 bgn, Bluetooth
- USB: 1x USB 2.0 HS OTG port, 2x USB 2.0 HS Host ports
- Video: HDMI v1.3 Connector (Type A), DVI-D Connector, Simultaneous display of both HDMI and DVI-D with independent content, Full HD (1080p) multi-standard video encode/decode
- Audio: 3.5" Stereo Audio in/out, HDMI Audio out
- GPIO General purpose expansion header (I2C, GPMC, USB, MMC, DSS, ETM), Camera expansion header, LCD expansion header, Parallel RGB24 support, DSI support
- Debug: JTAG, 2 Debug LEDs (configurable), SYSCONFIG Boot Order Switches
- Height: 4.5" (114.3 mm)
- Width: 4.0" (101.6 mm)
- Weight: 81.5 gram / 2.88 oz

[Pandaboard ES info](http://www.pandaboard.org/content/resources/references)

## CubieBoard

- Price: \$49
- Processor: 1GHz Allwinner A10 (ARM Cortex A8, ARMv7)
- RAM: 512MB/1GB
- Storage: 4GB NAND Flash, SATA port available
- Networking: Ethernet
- USB: 2 Host
- Video: HDMI, other via extra pins
- GPIO: varies based on need, lots of stuff in the chip
- Notes: Considerable connectivity, not a lot available distribution wise for it yet.
- Availability: Somewhat difficult to obtain, available from SeeedStudio and Miniand

## PCDuino

- Price: \$59
- Processor: 1GHz Allwinner A10 (ARM Cortex A8, ARMv7)
- RAM: 1GB
- Storage: 2GB Flash, MicroSD card
- Networking: Ethernet
- USB: 1 Host, 1 OTG
- Video: HDMI (others possibly available via pins)
- GPIO: Lots, 0.1" spaced, pins laid out similarly to an arduino. Should eventually be able to use arduino shields via a physical adapter (currently works, must use self-built adapter / wiring)
- Notes: Very similar to CubieBoard. SATA is on chip, but not brought out to usable pins. SparkFun / GadgetFactory are creating a lot of tutorials for it.
- Availability: Generally available, from [Makertronic](http://makertronic.com/pcduino-mini-pc-arduino), SparkFun and GadgetFactory

## PCDuino v2

- Price: \$66
- Processor: 1GHz Allwinner A10 (ARM Cortex A8, ARMv7)
- RAM: 1GB
- Storage: 2GB Flash, MicroSD card
- Networking: Ethernet and onboard WIFI
- USB: 1 Host, 1 OTG
- Video: HDMI
- GPIO: Support Arduino Headers
- Notes: Very similar to CubieBoard. SATA is on chip, but not brought out to usable pins. SparkFun / GadgetFactory are creating a lot of tutorials for it.
- Availability: Generally available, from [Makertronic](http://makertronic.com/pcduino-v2), PcDruino's main site, and hwkitchen

## Raspberry Pi

- Price: \$25-\$35
- Processor: 700MHz-1GHz Broadcom BCM2835 (ARM11, ARMv6 instructions)
- RAM: 256MB-512MB
- Storage: SD Slot
- Networking: Model B - Ethernet via USB Hub
- USB: Model A, 1 port. Model B, 2 ports via USB Hub
- Video: HDMI & Composite
- Audio: 3.5" Stereo Audio out, HDMI Audio out
- GPIO: 8 (mostly 3.3v)
- Notes: Way more examples with this than anything else
- Availability: Model B's usually shipping within a few days from Newark and others. Model A's not yet available in US.

## UDOO

- Price: \$99 and up ([Kickstarter pledge](http://www.kickstarter.com/projects/435742530/udoo-android-linux-arduino-in-a-tiny-single-board))
- Processor: Freescale i.MX 6 ARM Cortex-A9 CPU Dua/Quad core 1GHz AND Atmel SAM3X8E ARM Cortex-M3 CPU (Arduino Due)
- RAM: DDR3 1GB
- Storage: Micro SD and SATA (Only Quad-Core version)
- Networking: Ethernet RJ45 (10/100/1000 MBit) AND Wifi
- USB: Mini USB and Mini USB OTG, USB type A (x2)
- Video: Integrated graphics, each processor provides 3 separated accelerators for 2D, OpenGL® ES2.0 3D and OpenVG, HDMI and LVDS + Touch (I2C signals)
- GPIO: 54 Digital I/O + Analog Input (Arduino-compatible R3 1.0 pinout)
- Notes: This unit is 4 Raspberry Pi + 1 Arduino Due combined. <http://www.udoo.org/>
- Availability: Currently in prototype stage. Kickstarter project.

## Rascal

- Price: \$199
- Processor: 400MHz ARM926
- RAM: 64MB
- Storage: MicroSD
- Networking: Ethernet RJ45
- USB: 2 ports
- Video: headless, no video
- GPIO: standard Arduino pin layout
- Notes: [www.rascalmicro.com](http://rascalmicro.com/), works with Arduino shields, python enabled (pytronics), internal web server
- Availability: [store.rascalmicro.com](http://store.rascalmicro.com/)
