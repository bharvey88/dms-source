---
title: "DMS High Altitude Balloon"
description: "Note: primary project activity occurs on the talk thread at https://talk.dallasmakerspace.org/t/high-altitude-balloon-project/3101"
sourceUrl: "https://dallasmakerspace.org/wiki/DMS_High_Altitude_Balloon"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/DMS_High_Altitude_Balloon\">legacy DMS wiki</a> — content may be outdated."
---
**Note: primary project activity occurs on the talk thread at <https://talk.dallasmakerspace.org/t/high-altitude-balloon-project/3101>**\



## Overview

The DMS High Altitude Balloon (HAB) project is a project championed by the DMS Aero / RC committe intended to lead to the ability to launch a UAV from a balloon. This will result in the committee having a knowledge base of balloon launches and the gear to launch.

The overall concept initially involved stretching the project into several missions, focusing on basic launch capability for the first mission and drone development for the second mission. This has been debated somewhat actively, and the team has since switched from using a multi-mission approach to launching a drone on the first mission.

As of March of 2017, the project is on hold awaiting time commitments from core team members to resume. Most of the remaining work is believed to be doable in about two weekend workdays.

## History

The project began while DMS was still in the Ladybird location, and the initial champions were Romeo España and Chesley Kraniak. Some work occurred between then and the resurgence of the project in May of 2015 which is not currently documented; this resulted in a special Arduino-based HAB control board being created or acquired, special firmware created for it, the acquisition of the first balloon, the acquisition of the first foam cooler, and a number of other things which have since been superseded by current designs.

After the move to Monetary and Chesley Kraniak's actually joining DMS, the then-current Aerospace Committee chairperson Romeo España asked Chesley to lead the HAB effort in an effort to keep the committee relevant, and he agreed. Chesley began the HAB Project thread on talk and began holding meetings in June of 2015. During this period, the initial multi-mission approach was developed and pursued.

In February of 2016, after Nick McCarthy and Harold Asbridge became heavily involved with the project, the team decided that discarding the multi-mission approach could be accomplished without adding too much additional delay. Harold developed a flying wing aircraft body for use as the vehicle, but this was eventually dropped in favor of a purchased, molded airframe. While Chesley developed the initial proof-of-concept for the NiChrome release mechanism, Harold refined this into a receiver-interfaced (PWM-controlled) control board with PWM output. Jay Johnson began work an an antenna tracker. The helium system was developed, a supplier located, and costs estimated.

Around November of 2016, Chesley, Harold, and Nick all became too encumbered by external commitments to be able to continue to hold regular meetings.

## Team Members & Meetings

We meet every other week on Wednesday at 7:00PM. (This has been changed from Tuesday so as not to conflict with board meetings.)

Please edit the Wiki to add yourself to to our team.

- Chesley Kraniak
- Robert Jenks
- Nick McCarthy (Ham Radio technician license, KD5FTN)
- Jon Burroughs
- Jay Johnson
- Harold Asbridge

Additional discussion will take place on Talk here: <https://talk.dallasmakerspace.org/t/high-altitude-balloon-project/3101>

## HAB 1

### Rev A

The original first HAB mission was to send a research payload to the target altitude and return data to the ground.

**Objectives**

- Gain understanding and experience from attempting launching, tracking, and recovering our first high altitude balloon
- Test payload components, while maintaining communication with the payload and logging data

**Payload Components / Mass**

- Balloon- Hwoyee 350g balloon
- Recovery Parachute - 32"-42" size, designed for model rocket
- Nichrome wire balloon release - activated via relay driven by Pixhawk (automatically based on GPS altitude, or manually from ground station)
- Housing - Foam box, possibly re-purposing of Richard's "disposable" balloon payload foam shell
- Datalogger - [HKPilot32](http://www.hobbyking.com/hobbyking/store/__55561__HKPilot32_Autonomous_Vehicle_32Bit_Control_Set_w_Power_Module.html), (Loaned by Nick McCarthy
- Telemetry Radio - [3DR Telemetry](http://copter.ardupilot.com/wiki/common-optional-hardware/common-telemetry-landingpage/common-3dr-radio-version-2/) 900mhz, 100mW transceiver with range of a few Km at 57,600 baud. We can use the higher sensitivity /diversity [RFD900+](http://copter.ardupilot.com/wiki/common-optional-hardware/common-telemetry-landingpage/common-rfd900/) on our ground station, and lower the data rate for additional range
- APRS Radio - We'll be testing the recently developed open source [Tracksoar](https://www.tracksoar.com/) - It's an amazingly small (14g), fully-integrated APRS tracker that will only require external power. It runs off 1.5-4VDC. Plan to use 4x AA Lithium (2 series / 2 parallel, for about 3V of power for 60g of weight. Lithium batteries weight 1/2 as much as Alkaline and are more stable at extreme temperatures.) Depending on run time, we may reduce to only 2 batteries.

Mass for some measured components:

- Foam box - 194g
- Baofung w/ant - 202g
- Hwoyee 350g balloon = 350g

[Balloon Calculator](http://habhub.org/calc/)

#### Tasks

Before July 21st Meeting:

- Richard: Research flight profile & environmental variables: Launch/recovery sites, max/burst altitude, payload mass, ascent/descent rates, required parachute size, payload heating needs, etc...
- Nick: Research Pixhawk, GPS, telemetry radio as applied to HAB logging/communication / Gather hardware
- Chesley: Select preferred APRS hardware/software based on availability, cost and complexity. It sounds like we have at least 3x Baofeng UV5Rs between us, but we'll likely want to use them for either ground communication between teams, or for receiving APRS data from the balloon. Also - research / prep ground & launch hardware.

### Rev B

As of February 2016 (ish), the HAB-1 mission now encompasses a glider launch as well as an initial balloon launch.

## Return Vehicle

Main article: [DMS High Altitude Mission Return Vehicle](/dms-source/archive/aerospace/dms-high-altitude-mission-return-vehicle/)

The return vehicle is the drone which will be dropped from the balloon.

## Resources

General:

- [MIL-STD-210](http://everyspec.com/MIL-STD/MIL-STD-0100-0299/MIL-STD-210C_22329/): definition of hot, cold, tropical, and arctic days for (non)standard atmospheres
- [Amateur Radio High Altitude Ballooning](http://www.arhab.org/) website and [wiki page](http://info.aprs.net/index.php?title=ARHAB)
- [PDF Download](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=7&ved=0CC8QFjAG&url=http%3A%2F%2Fwww.springer.com%2Fcda%2Fcontent%2Fdocument%2Fcda_downloaddocument%2F9780387097251-c1.pdf%3FSGWID%3D0-0-45-740923-p173843909&ei=1dSSVbCKCcH2-QGR9YKADw&usg=AFQjCNGQ6UnFKw-9c73dLym5HcMN-IH9_A&bvm=bv.96783405,d.cWw&cad=rja) of some balloon physics work, focused on larger (\>100kg) balloons

Balloon Launch Info:

- [How to prepare a weather balloon for launch](https://www.youtube.com/watch?v=6_06Q_eWta8)
- [How to fill a weather balloon](https://www.youtube.com/watch?v=5Z23L4QIgtQ)
- [How to launch a weather balloon](https://www.youtube.com/watch?v=x5NyTzCcn9E)

Projects:

- Gliders
  - [Balloon Drop Glider FPV Flight](https://www.youtube.com/watch?v=rpBnurznFio): Remotely-piloted glider, launched from a high altitude balloon
  - [High Altitude Glider](http://www.canuck-boffin.net/sonde/index.htm): successful balloon-launched glider from the early 2000s; has some flight data graphs
  - [FPV Glider](http://rcexplorer.se/projects/2013/03/fpv-to-space-and-back/)
- Balloons
  - [Sparkfun HAB](https://www.sparkfun.com/tutorials/180)
  - [ENSURE 1](http://www.adwiens.com/projects/ensure/1/index.html) and [ENSURE 2](http://www.adwiens.com/projects/ensure/2/index.html)

Balloon Data:

- [HAB Flight Predictor](http://predict.habhub.org/)

FAA:

- [Discussion](http://www.eoss.org/faq/faa_liaison.htm) about waivers and other concerns
