---
title: "DoorAccess"
description: "There are many ways to set up 24/7 access to a space including old school keys, keypad access, RFID access, biometric access (fingerprint scanner, iris sca..."
sourceUrl: "https://dallasmakerspace.org/wiki/DoorAccess"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/DoorAccess\">legacy DMS wiki</a> — content may be outdated."
---
## Setting up a space with 24/7 access to it's members

## Deciding on a system

There are many ways to set up 24/7 access to a space including old school keys, keypad access, RFID access, biometric access (fingerprint scanner, iris scanner) or a combination of those.

There are pluses and minuses to each method I won't go into here but we decided to go with RFID for ease of use and the ability to log accesses, have RFID keys also control tool access, and the ability to add and remove keys on the fly.

## Components to an RFID system

There are 3 basic components to an RFID system:

- The power supply
- The controller/reader
- The door strike or deadbolt

There may be additional components depending on the setup.

The door strike or deadbolt is the part that controls whether the door stays locked or opens. It is usually moved by a solenoid which is an electromagnet that moves some part of the door mechanism to unlock the door.

The controller/reader is the brains of the system and it has a small computer internally that keeps track of which RFID cards are authorized to access the space and sometimes will log which RFID cards where read and when. Usually the controller will have an RFID reader built into it, but also will connect to an external RFID reader as well. The advantage of having an external reader is that the reader must be outside the building where it could be vandalized. If you put the controller outside it could be tampered with or vandalized and that is typically the most expensive part of the system. Keeping the controller inside the building minimizes the risk to the system. RFID readers are relatively cheap compared to other parts of the system.

The controllers are typically stand alone, but some can also be connected to a computer to ease setup, control and monitoring. The computer interface is usually RS-485 or ethernet. In our case we decided to get a controller with an ethernet interface so we could remotely monitor and control the system and incorporate a web interface with it.

## Deciding on which components to use

The controllers vary in price quite a bit going all the way from \$50 to thousands of dollars. The more expensive ones generally are the ones with computer interfaces and ethernet interfaces are a bit more than RS-485 interfaces. The cheaper systems are made in China. The software and documentation with Chinese system is typically not very good, but if you are good with electronics and computers, this may not be an issue. Also if you don't need a computer interface, the controller can be very cheap and as low as \$50.

Sometimes you may want an exit button to allow people to exit easily.

If you have an electric strike and mechanical latch, a push bar may be an option. We chose to use a push bar to allow easy exit.

## Choosing an electric door strike

The door strike or door deadbolt is more of a style or fire code decision. In most cities fire codes dictate that there must be easy egress from the building in case of fire. There must be some sort of exit button or push bar to allow people in the building the ability to get out of the building fast without the need for a key or code.

Electric door strikes are a part that go into the door frame and hold onto or let go of the door latch that sticks out of the door.

Electric deadbolts are a part that go into the door and either extend or retract depending on whether you want the door locked or unlocked. You need either an electric strike or deadbolt but not both - that would be redundant.

Electric deadbolts can only be opened or locked electrically so if you want to still be able to use a key to open the building, an electric strike may be for you.

We decided on an electric strike to still allow key access to the building because the landlord still needs to be able to get in to do maintenance with a key.

Electric strikes have the advantage that a key can still be used to open the door if you need access for the landlord. When an electric strike is opened, it allows the latch to pass through the door frame without being retracted first. When you use the key with an electric latch it retracts the latch into the door so the door can open.

Electric door strikes can be setup for NO or NC (normally open (NO) or normally closed (NC)) Normally open means that when no electricity is applied to the strike the strike allows the door to open, and applying electricity to the strike locks it. Normally closed (NC) means the strike is locked when no electricity is applied and opens when electricity is applied. Some electric door strikes can be switched between NO and NC and others are fixed to NO or NC so keep that in mind when ordering the electric strike.

Electric door strikes also need a latch in the door and not a deadbolt. In our case our doors came with a deadbolt so we also had to buy a new door latch to work with the electric strike. We also bought a push bar to allow easy egress and a latch plate to cover the latch and door strike from the outside to make it a little more difficult to break in from the outside.

## Installing the system, or acting as your own locksmith

So you ordered all the parts you need and now you need to install them.

When you get all the parts you will probably want to bench test them. Connect everything all together on a table and make sure that all the parts work together and that the strike or dead bolt moves when a valid RFID tag is read.

If everything works, start installing the system. If you need to replace the door deadbolt with a latch, start with that first. Most commercial doors have a module in the door that can either be a deadbolt or a latch type. The lock cylinder screws into this module. Start by opening the door and removing 2 screws that hold a cover plate on the deadbolt module. Then loosen the two setscrews that hold the lock cylinder in the module. Now unscrew the lock cylinder from the outside in a counter clockwise fashion. If you have troubles getting a grip on it, put a key in the cylinder and use that to help turn it, but not too hard because you might break the key off in the lock. Now remove the thumb turn mechanism on the inside of the door, opposite the lock cylinder. Now you can remove the deadbolt module by loosening the 2 screws from the edge of the door, holding the module in the door frame.

If you have a push bar or paddle install it now. You have to drill a couple of holes in the door to match up with the paddle. Attach the threaded studs to hold the paddle frame to the door. The paddle can be configured for pull or push to open, but in most cases you will need to push the door to open it and you will want to configure the paddle for push to open. Attach the paddle to the door and continue with the rest of the install.

Install the new latch module in the same way in reverse order. Be careful when putting in the new module, not to strip the screws. Thread the old lock cylinder back into the new door latch module. Screw the new cover plate back onto the new latch module and you should be done with the door end of things.

Now install the electric strike into the door frame. Place the strike over the latch while the door is open and carefully close the door until the strike touches the door frame and mark on the door frame where the strike needs to go. Use the strike on the door frame or the plans that came with the strike to mark up the door frame where you need to cut to get it installed. Use a jigsaw or 1 ended hacksaw to cut up the door frame to get the door strike to fit. Always cut on the conservative side because you can always make the hole bigger but you can't make the hole smaller! A file would be best to make the lines nice and straight and make the hole just big enough to hold the strike. Carefully position the strike depth in the frame so that the door just closes when the latch meets the strike, otherwise your door will not close properly. If you are lucky, there will be a small gap (maybe 1/4" to 1/8") between the door frame and door so then you can face mount the strike. Some doors may not have much clearance between the door frame and the door, in this case you may need to flush mount the door strike and use tabs that come with the door strike to do this. To face mount, you will need to drill and tap 2 holes in the door frame to attach the door strike. In our case one of the holes we needed to drill and tap a hole was already cut out so we had to use one of the metal tabs that came with the door strike to attach the strike.

You will need to run wires from the door strike (and RFID reader) to the controller. In our case we placed the RFID reader about 4 inches above the door strike on the door frame. We ran CAT5 cables from the door to the place where we had the door controller in the building. One cable for the RFID reader and one cable for the door strike. Our space, like many has drop ceilings so it was pretty easy to run the cable through the ceiling. The door frame is hollow extruded aluminum. If you have a solid frame, it will be trickier and you'll have to drill a hole for the cables. We attached a weight to a thread and lowered it through the top of the extruded aluminum door frame until the weight could be seen in the cutout for the door strike. We then tied the cables to the thread and pulled the cables through the door frame and through the ceiling until we got the cables to the door controller.

Wire the RFID read and door strike to the two cables, noting which colors are connect to which on the CAT5 cable so when you connect the controller end later you know which wires are which. I soldered and used heat shrink tubing to cover the solder joints. On the controller end connect the wires as well. Double check all your wiring to make sure everything is correct before turning on power. Turn on power an test your system. Make sure the RFID reader and all other parts are working. If everything is OK your door should unlock when you have a valid RFID tag read.
