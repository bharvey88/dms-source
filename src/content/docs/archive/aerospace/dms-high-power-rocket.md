---
title: "DMS High Power Rocket"
description: "High power rocketry involves rockets above a certain specific impulse. There's not a particular goal with the high power rocketry interest at the Makerspac..."
sourceUrl: "https://dallasmakerspace.org/wiki/DMS_High_Power_Rocket"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/DMS_High_Power_Rocket\">legacy DMS wiki</a> — content may be outdated."
---
This page is a draft.

## Overview

High power rocketry involves rockets above a certain specific impulse. There's not a particular goal with the high power rocketry interest at the Makerspace other than just building and flying rockets. Some potential projects could be:

- deploying a drone at an altitude above 1,000ft
- succesful recovery using autorotation
- a stabilization system that keeps a rocket oriented vertically despite wind disturbances
- a liquid or hybrid motor powered rocket
- an extreme altitude (\>100,000ft) attempt

For now, core competency needs to be developed. Some aerospace committee members have previous experience, but this experience has not translated into active makerspace projects as of yet.

A good first rocketry project is to design, build, and fly a certification rocket; design can be foregone if you would rather build from a kit. Another one is to design, build, and fly a smaller target altitude rocket.

## Design

### General Information

All (most) high power amateur rockets have these features:

- Motor
- Body
- Fins
- Recovery System

Smaller motors are often one-time use; larger motors typically use grains in a reusable motor tube. The motor will be mounted in the "fin can", or the bottom section of the rocket which, surprisingly, is where the fins are located. The motors are sized by how much specific impulse they have.

A typical rocket body will have 2 or 3 main sections (plus the nose cone), one of which will have the motor and fins, and one of which will have the main parachute.

The fins keep the rocket stable. A rocket is stable when the center of pressure (CP) is below / behind the center of gravity (CG). The measurement of stability is the **static margin**, which is the distance between the CG and CP, divided by the rocket diameter. A typical rocket will have a static margin between 1 and 2; lower margins lead to rockets that may not fly vertically (dangerous), while higher margins make the rocket susceptible to being blown off course by the wind. The fins are sized such that the center of pressure is far enough back to achieve the desired static margin. The exact shape of the fins is not important (unless you *seriously* care about weight optimization), and in fact they are often creatively shaped. A few oddball rockets don't have fins at all since their body shape puts the CP far enough below the CG; this includes 'saucer' rockets and a few joke designs I've seen (round laundry basket, plastic lawn furniture), but this is not very common.

Most rocket-makers want their rockets back. Recovery systems can be diverse, although the most common system is a parachute that is deployed at apogee from an internal section. The main parachute is deployed with a black powder charge which is detonated either electronically or by the motor after some delay. Many parachute systems augment the main chute with a smaller drogue chute so the descent takes less time and the rocket doesn't drift as far. Smaller rockets sometimes use streamers; streamers can also be used as a drogue stage. 'Saucer' rockets have so much drag that their terminal velocity isn't high enough to damage the rocket when it lands. A rotor can be deployed that autorotates and slows the rocket.

<img src="/dms-source/files/mw/thumb_8_8f_Ck_cert_design_openrocket.png_300px-Ck_cert_design_openrocket.png" width="300" height="159" /> A design in OpenRocket

### Software

OpenRocket is useful, and will work for most projects. RockSim is better, but you have to spend money.

The motor, body sections, mass components, nose cone, fins, etc. are all input into the program. The software the predicts maximum speed, apogee, and stability / static margin, among other things. You can typically do most of your design work up front in the software.

People I know have told me it is better to design overstable by 0.5 or so in OpenRocket, as the real rocket's mass distribution will tend to be further back / down than predicted.

### Motor

Rocket motors are primarily designated by their impulse. An "A" motor has 1.26 to 2.5 Newton-seconds of impulse, a "B" motor doubles this (2.51 to 5 N-s), a "C" is double a "B", and so on. Letters further down the alphabet have more impulse available, meaning they will be able to fly a rocket higher, faster, or with more weight.

Specific motors usually have more information in their names. For example, a **J-350W** engine is a "J"-class motor with an average thrust of 350 Newtons and using a **W**hite Lightning propellant

Motors in higher impulse classes will typically be reloadable, so one will need to include the motor casing in design considerations. In the future, some members of the aerospace committee (or the committee itself) may make previously obtained motor casings available to new rocket designers to help defray the cost of building the first rocket, as the casings and associated hardware is relatively expensive.

Reloadable motors will come in "grains", or small pieces of propellant that are stacked on top of each other in the motor casing. The use of grains adds a level of control to the burn characteristics of the motor. Some casings can hold a variable number of grains as well; this can make certain engines less expensive to use, as you may already own the case to use it with an adapter, and it can make a single rocket capable of flying on both a level 1 and level 2 motor (see [Certification](#Certification)).

The thrust curve a motor has will tell the designer how the rocket's impulse is applied (i.e. a force vs. time graph). Typical motors apply more thrust near the beginning of the flight and taper off near the end; however, you will need to consult manufacturer data (or data found in design software) for the specific thrust curve of the chosen motor.

### Body

The body of a rocket is made from a few sections which are held together with *couplers* that have either an interference fit or shear pins.

#### Fin Can

The fin can is the bottom-most rocket section which houses the motor and the fins.

The motor will be mounted via a motor tube placed at the bottom of the section, which is held in by centering rings.

Fins may be shaped as desired, so long as the resulting CP of the rocket yields a good static margin. Other concerns with the fin are how they mount to the rest of the section and whether they will be susceptible to flutter.

#### Altimeter Bay

The altimeter bay is typically a volume placed in a coupler at the bottom of the payload bay which contains the altimeter and its associated support hardware, including a battery and an activation switch.

#### Payload Bay

The payload bay is a compartment typically placed behind / below the nose cone. The main parachute is usually placed here, and payloads will typically go here as well.

#### Nose Cone

Rocket nose cones come in many different shapes. Perhaps the two most useful ones are *von Karman* and *parabolic*: von Karman can be used for higher speed designs and parabolic for slower rockets. Other types are *conic*, *ogive*, and the remainder of the Haack series.

If a radio beacon is to be placed in the nose cone, the cone needs to be made out of a non-conductive material; a (conductive) carbon fiber nose cone will behave as a Faraday cage and prevent the signal from propagating well.

### Fins

### Recovery System

### Other

**Do not** try to design a multi-stage rocket until you have a good amount of experience.

On that note, I've never seen a "Delta-style" payload fairing work yet. I've seen it tried once by a U of Arizona team; the fairing failed / deployed on ascent both times they launched (although amazingly enough the rocket did not destabilize either time, and the payload survived freefall both times as well).

Don't even think about orbit.

Stick to tried and true *normal* designs until you get your feet under you.

### Certification-specific Design

A properly designed rocket can fly on both a class 1 and class 2 motor. This means certification for class 1 and class 2 can happen on the same day, with the same design, one launch after the other.

## Certification

Certification permits one to fly rockets using larger rocket motors. There are three levels of certification: Class 1, 2, and 3. Certification is done by either NAR or Tripoli; they are both relatively similar in requirements and privileges.

### Class 1

### Class 2

### Class 3

## Failure

Your rockets will fail at some point. Expect it.

## Resources

- Motors
  - [Aerotech Motor Assembly Instructable](http://www.instructables.com/id/Assembly-of-an-Aerotech-Rocket-Motor/?ALLSTEPS)
  - [Aerotech 38/480-1320 Assembly Datasheet](http://www.aerotech-rocketry.com/uploads/769bd5ee-e903-4908-b790-8ee6e3354929_RMS-38_480-1320%202-Page%20Inst%206-27-13.pdf)
  - [Aerotech Reload Adapter Datasheet](http://www.aerotech-rocketry.com/uploads/900941fb-4429-42b3-b686-abff01c8f083_38mm_reload_adapter_anchor_inst.pdf)

## Member Designs

- [Chesley's Certification Rocket](/dms-source/archive/aerospace/chesleys-certification-rocket/)
