---
title: "DMS Intro to RC Flight"
description: "This class covers all of the basics of RC flight. It applies to airplanes, helicopters, and multirotors. Target class time is 2 hours."
sourceUrl: "https://dallasmakerspace.org/wiki/DMS_Intro_to_RC_Flight"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/DMS_Intro_to_RC_Flight\">legacy DMS wiki</a> — content may be outdated."
---
This class covers all of the basics of RC flight. It applies to airplanes, helicopters, and multirotors. Target class time is 2 hours.

## Introduction

RC flying has been a popular hobby for decades. Originally it was fairly limited due to electronics being heavy, expensive, and limited in functionality. Today, with the availability of cheap lightweight microprocessors, nearly anything is possible. In recent years, the widespread use of molded foam has made airframes cheap, fast, and easy to assemble. Gone are the days when you needed to spend weeks building your first aircraft, only to crash it on the first flight and have to start over. Also, with the relatively recent introduction of large high-current LiPo batteries, electric flight is finally a viable clean alternative to gas power. The RC flying hobby is easier to get started in today than it has ever been.

### Everyone Crashes

Even the most experienced pilots crash from time to time -- it is not always simply a matter of pilot skill. Mechanical or electronic failure can cause a crash, even if you're the best pilot in the world. This simple fact must be accepted, otherwise you'll never get past your first crash. If you go into the hobby expecting to never crash, you will not have a fun time. Sometimes the aircraft can be repaired to fly again, sometimes not. However, most or all of the components can be salvaged, and used in another aircraft afterwards.

### Safety

RC aircraft can have surprisingly powerful engines, and carry a high amount of battery energy. Both of these are potential safety concerns, so care must be taken to avoid accidents or injuries.

#### Propellers

It is not uncommon for propellers to be spinning at 10,000 RPM or more, and they can cause serious injury if they come in contact with you. Keep clear of all propellers when an aircraft is armed. Think of "armed" as a loaded rifle with the safety off. The "trigger" is the throttle stick - moving it will cause the motor to engage. For electric airplanes and helicopters, this is any time the battery is plugged in. For multirotors, there is sometimes an actual arm/disarm sequence to enable and disable the motors.

#### Collisions

Never fly close to people, as a collision could cause serious injury. If you're a new pilot, it is a good idea to choose a flying location where no other people are around.

#### Batteries

Care must be taken when charging, handling, and storing LiPo batteries. Improper use can cause them to explode and/or catch fire.

##### Charging

The most important rule is to **never charge LiPo batteries unattended**. If a battery does catch fire while charging, you need to be nearby to extinguish it, or take it outside and let it burn out.

##### Storage

LiPo batteries have an optimum storage voltage of 3.85 volts per cell. For a 2 cell battery this would be 7.7v, 3 cell would be 11.55v, and so on. This allows for the slowest possible self-discharge of around 1% per month. Batteries should be stored in a temperature-controlled environment. Most manufacturers agree that 35 to 40 degrees F is optimal, but room temperature will also work. Storing them in a refrigerator works well. They should never be stored in a hot environment. Also storing them in a fire-proof container is a good idea. For example, steel ammo cans work well and can be found cheaply.

### Remember to Have Fun

At the end of the day, this hobby is supposed to be fun. It can be frustrating sometimes when dealing with crashes, equipment failure, or other inconveniences. But remember that these things happen to everyone, and the fun of flying is worth the occasional heartache.

## Lift

All aircraft fly by generating lift. In the case of an airplane, this is done by the wings. In a multirotor or helicopter, this is done by the rotor blades or propellers. Lift must be equal to the weight of the aircraft to remain airborne. In an airplane, lift is controlled by airspeed -- more speed generates more lift. In a helicopter it is done by varying the pitch of the rotor blades. In a multirotor, it is done by increasing or decreasing the speed of the motors.

## Flight Controls

Flight controls are essentially the same regardless of what type of aircraft you are flying. There are three control axes which are roll, pitch and yaw. Helicopters and multirotors have an additional flight control, collective.

### Roll

Roll is used to turn the aircraft, usually in conjunction with yaw. Facing forward, it tilts the aircraft left or right. On an airplane it is controlled by ailerons (or elevons on a flying wing). On a helicopter it is controlled by changing rotor blade pitch on one side of the helicopter. On multirotors, it is controlled by varying motor RPM on one side of the aircraft.

### Pitch

Pitch is used to climb or descend. Changing pitch causes the nose of the aircraft to move up or down. On an airplane it is controlled by the elevator (or elevons on a flying wing). On a helicopter it is controlled by changing rotor blade pitch on only the front or back of the helicopter). On a multirotor it is controlled by varying motor RPM on the front or back of the aircraft.

### Yaw

Yaw is used to turn the aircraft in conjunction with roll. It is also used to counteract crosswinds. Facing forward, it steers the nose of the aircraft left or right, just like car steering. On an airplane it is controlled by the rudder (except for flying wings). On a helicopter it is controlled by the tail rotor by either adjusting the speed or pitch of the tail rotor blades. On a multirotor it is controlled by adjusting the speed of motors opposite each other so that torque turns the aircraft.

### Collective

Collective is used in a helicopter to ascend or descend vertically. It is controlled by varying the pitch of all rotor blades collectively, which is where the name comes from. Multirotors do not have adjustable pitch rotors, and this is accomplished by simply increasing or decreasing the speed of all motors.

## Motors

All aircraft except gliders need some sort of propulsion. There are two basic options for RC aicraft, which are nitro and electric.

### Nitro

Nitro engines come in both 2 and 4 stroke designs, and produce a very high power output for their weight. Refueling is fast and easy, with no need to wait for batteries to charge. However, they are messy, loud, require more maintenance than electric motors, and can sometimes be tempermental. Throttle is controlled by a servo which moves the throttle lever on the carburetor. Some high-end nitro engines feature on-board electronic ignition and electric starting, making remote starting and stopping possible.

### Electric

Electric motors come in two varieties - brushed, and brushless. Brushed motors have been around for over 100 years, and were the only available option until recently for RC aircraft. They generally produce less power than equivalent brushless designs, and do not last as long due to brush wear. Brushless motors use 3-phase alternating current instead of a commutator and brushes to control which coils are energized, and as a result have less friction, and no power loss through sparking. The only wear parts are the actual bearings. Another side benefit is that brushless motors work underwater, since there is no commutator to short out. Throttle is controlled by an ESC (Electronic Speed Controller). For a brushed motor, the ESC simply varies the voltage sent to the motor. For a brushless motor, the ESC varies the frequency and strength of the AC pulses to the motor.

## Propellers

Propellers, or props, are used to generate thrust from the motor. They come in many different sizes and shapes, but all accomplish the same basic goal. There are two main factors that define a prop - diameter and pitch. Diameter is simply the prop size measured from end-to-end. Pitch measures the angle of the blades - specifically how far they travel in one revolution. For example, a 10x6 prop would be 10 inches in diameter, and travel 6 inches forward with every revolution. A 10x8 prop would still be 10 inches in diameter, but have a steeper pitch and travel 8 inches with every revolution. However, the 10x8 prop will require more power to turn, since it is trying to move more air. Props must be sized correctly with the motor to avoid poor performance, or even damage to the motor or ESC. Another aspect of props is the number of blades. Two blades is by far the most common setup, but props with 3, 4, or even more blades do exist. Having more blades is actually less efficient than having fewer blades however. Each propeller blade is also working in the turbulent air from the blade ahead of it, and the more blades there are, the less space between each there is.

-- WORK IN PROGRESS --
