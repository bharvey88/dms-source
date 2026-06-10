---
title: "Beagle Bone Black Stuff"
description: "This information may be outdated.If you feel this is in error, please remove the {{outdated}} template."
sourceUrl: "https://dallasmakerspace.org/wiki/Beagle_Bone_Black_Stuff"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Beagle_Bone_Black_Stuff\">legacy DMS wiki</a> — content may be outdated."
---
**This information may be outdated.**\
If you feel this is in error, please remove the {{outdated}} template.

## General Info

The [BeagleBone Black](http://en.wikipedia.org/wiki/BeagleBoard#BeagleBone_Black) (sometimes abbreviated as BBB) is an inexpensive (currently \$45 USD) [Single-board computer](http://en.wikipedia.org/wiki/Single-board_computer) about the length and width of a credit card (but obviously thicker). It has a 1GHz ARM Cortex-A8, 512 MB of DDR3 RAM, 2GB of eMMC flash memory, a micro SD slot, micro-HDMI output, many GPIO pins, ethernet, and USB host/client capabilities among other things.

[CircuitCo](http://circuitco.com/wordpress), who make the BBB (amongst other devices), have donated a few of these to the [Electronics Robotics Committee](/dms-source/archive/electronics/) for DMS members to experiment with (while at DMS).

## Alternate Images

The BBB ships with an Angstrom distribution inside its eMMC flash memory. Some people prefer to try out other distributions for various reasons. Many Linux tutorials you find on the internet are based upon the Angstrom distribution, so it's possible that various information (such as the location of certain files etc.) could be different for other Linux distributions.

In all alternate images, a few starting points of information are important:

- Username/password - Typically you'll want to SSH or log into your machine, and knowing the default username and password on the image is crucial. Angstrom tends to use root with an empty password, while Ubuntu images tend to use ubuntu/temppwd.
- Boot sequence - Some images require holding down the BOOT button (small button closest to the micro SD slot) in order to boot off of the micro SD. Some images will automatically copy themselves to the eMMC flash memory automatically and then require you to remove the micro SD and reset the BBB.
- How to write the micro SD - You will typically be downloading a compressed disk image that will need to be written to the micro SD. Depending on your desktop/laptop OS, this is done in different ways. **TODO: Fill this in a bit more**

### Ubuntu

The best instructions I've seen for putting Ubuntu on an SD card and using that to boot can be found [here](http://www.zachrohde.com/blog/2013/05/installing-ubuntu-on-the-beaglebone-black/).

## Development

### General Info

#### Device Trees

**TODO: History of device trees, 3.8 kernel and tools used to deal with them etc.**

##### Device Tree Compiler

The device tree compiler (dtc) is used to convert files from the binary "compiled" version to human readable text and the reverse. The dtc application comes installed on Angstrom.

For Ubuntu the best way I can find to get the dtc is shown [here](http://www.eewiki.net/display/linuxonarm/BeagleBone+Black#BeagleBoneBlack-Upgradedistro%22device-tree-compiler%22package). That approach downloads the source for dtc (do this on the BBB) and then run a make to compile the dtc program.

#### PRUs

##### General Information

While the ARM processor on the BBB is a very capable processor, the main CPU can be interrupted by things like the OS, making it less than ideal for "real time" applications (controlling stepper motors for instance). To allow teal time processing, the ARM has two other CPUs which are unaffected by the OS etc. These are formally called PRU-ICSS or PRUSSv2, but more informally just called PRUs. They are basically sent a program to run by the main CPU, and then communication can occur in the form of shared memory (both between the two PRUs and the main CPU) and interrupts.

The PRUs are (currently) programmed via assembly. The assembly is fairly easy to deal with due to a large number of registers and the lack of pipelining etc. **TODO: Link to a page with all the assembly instructions**. The PRUs run at 200MHz and the majority of instructions take 1 clock cycle (**TODO: Identify instructions that don't**).

##### Enabling PRUs

The PRUs must be enabled via the Device Tree. I tried following instructions [here](http://www.element14.com/community/community/knode/single-board_computers/next-gen_beaglebone/blog/2013/05/22/bbb--working-with-the-pru-icssprussv2). It turns out that apparently on the newest Angstrom image at least, there's already a dtbo file called BB-BONE-PRU-01-00A0.dtbo in /lib/firmware, and this can be installed using "echo BB-BONE-PRU-01 \> \$SLOTS" where the SLOTS environment variable has been set to "/sys/devices/bone_capemgr.8/slots". Once that has been done, a "modprobe uio_pruss" will activate the firmware once the previous steps have been done. In other words:

\<source lang="bash"\> export SLOTS=/sys/devices/bone_capemgr.8/slots echo BB-BONE-PRU-01 \> \$SLOTS modprobe uio_pruss \</source\>

NOTE: That page mentions that SLOTS might need to be set to "sys/devices/bone_capemgr.**9**/slots", but I have;t seen that yet

##### PRU Assembler (PASM)

The "Getting Started" section of [this page](http://blog.boxysean.com/2012/08/12/first-steps-with-the-beaglebone-pru/) does a good job explaining how to acquire the source for the PRU assembler and samples. His forked version of the PRU assembler fixes a few problems and adds a couple of examples. The basic instructions executed from the BBB (via SSH or locally):

\<source lang="bash"\> cd ~ git clone <git://github.com/boxysean/am335x_pru_package.git> cd am335x_pru_package/pru_sw/app_loader/interface make CROSS_COMPILE="" cd ../../utils/pasm_source ./linuxbuild cd ../../example_apps make CROSS_COMPILE="" \</source\>

From there, if you've enabled the PRU by setting up the device tree slot and doing a "modprobe uio_pruss" (as described in the Enabling the PRU section), you should be able to run the examples (residing in the am335x_pru_package/pru_sw/example_apps/bin directory). For instance, to run the blinkslave example, you would:

\<source lang="bash"\> cd ~/am335x_pru_package/pru_sw/example_apps/bin ./blinkslave \</source\>

### Python

**TODO: Describe basic Python development and Adafruit libraries etc.**

### JavaScript/node.js

**TODO: Describe Cloud9 and node.js libraries etc.**

### C/C++

#### Cross Compiling

In many instances it might make more sense to compile code on your PC or desktop. Your PC or desktop probably has a better CPU, more RAM, and faster disk I/O. For large amounts of code, these assets can be crucial.

Typically desktop machines are x86 based machines, but since the BBB is an ARM based device, we will have to use a [cross compiler](http://en.wikipedia.org/wiki/Cross_compiler) to generate ARM code. A decent tutorial for cross compiling (particularly in [Eclipse](http://en.wikipedia.org/wiki/Eclipse_%28software%29)) can be found [here](http://www.michaelhleonard.com/cross-compile-for-beaglebone-black/). **NOTE: I ran into an issue (on Ubuntu at least) while going thru this tutorial. The problem and solution is described [here](http://askubuntu.com/questions/165953/no-such-file-or-directory-not-64bits).**
