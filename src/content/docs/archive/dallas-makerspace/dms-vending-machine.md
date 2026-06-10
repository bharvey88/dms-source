---
title: "DMS Vending Machine"
description: "This information may be outdated.If you feel this is in error, please remove the {{outdated}} template."
sourceUrl: "https://dallasmakerspace.org/wiki/DMS_Vending_Machine"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/DMS_Vending_Machine\">legacy DMS wiki</a> — content may be outdated."
---
**This information may be outdated.**\
If you feel this is in error, please remove the {{outdated}} template.

<img src="/dms-source/files/mw/thumb_6_69_Cold_food_vending.png_300px-Cold_food_vending.png" width="300" height="432" /> Cold Food Vending Machine

This page documents the process of acquiring and setting up DMS's own vending machine.

This project's goals:

- Provide a convenient source for important materials for members' projects.
- We want to encourage entrepreneurship and incentivize members to stock the machine with profit sharing.
- Build a reliable platform for selling items at the space.
- Raise money for DMS by sharing a percentage of the profits from sales.

## The Machine

<img src="/dms-source/files/mw/thumb_5_51_Cold_food_machine.jpg_300px-Cold_food_machine.jpg" width="300" height="533" /> Purchased Vending Machine

### Purchased Machine

A GPL/Crane Foodking 429 was purchased for \$450 by Paul Brown. There are a few very good things about this machine:

- It has an MDB interface, so it can accept a credit card reader. Only the expensive/newer machines have this. MDB is basically high voltage serial, and it can be hacked to make the machine do what we want.
- It works! The only issues experienced so far are a burnt out f13t5 fluorescent bulb. (I ordered a new one)
- It's a cold food style machine.

Possible issues:

- When the machine is power cycled, it will show out of order until you open and close the refrigerator.
- When you open the slot to one compartment, there's a small opening in the compartment to the right of it. It's clearly made for sandwiches, or things big enough not to fit through the gap.
  - We might need to cut new dividers with a lip to cover the gap. The ones on the machine are a bit flimsy.
- I haven't tried turning off the refrigerator and seeing if it will still vend. There's a chance that could trigger a "health warning".

##### Details

Coin Acceptor (TRC 6512 MDB): [Link](http://www.meigroup.com/usa/vending/vending_products/coin_acceptors/trc6512/datasheet.pdf)

Bill Acceptor (VN 2512 U5, should accept 5's): [Link](http://www.meitechnical.com/documentation/view_documentation_by_pro/product_documentation/index.xml?nid=1168534034-22%7C1163431328-3)

#### The Machine We Almost Got

##### National Shoppertron 430

- Didn't get this machine because it didn't have an MDB interface (meaning no credit card reader).
- 431 has separate connections on the controller PCB for serial, MDB, or pulse validators. This makes it way cheaper and easier to connect the credit card reader.
  - This link mentions someone getting an MDB conversion kit and hooking a credit card reader up to a 430: [Link](http://vendiscuss.net/index.php?/topic/4126-mdb-conversion-kits/) (it doesn't go well)
- From the manual, it looks like it's possible to set it to at least \$99: <http://www.dsvendinginc.com/pdf-manuals/Shoppertron430.pdf>
- MDB kit costs \$180: <http://www.capitalvending.com/cart.php?target=product&product_id=6927&category_id=447> (<http://www.vend-resource.com/forum-topic/can-national-430-take-cc-reader>)

## Machine Type Notes

### Type: Standard Snack Machine

A snack machine would need a "Guaranteed vend" sensor in order to successfully vend a variety of items.

- This company makes "Guaranteed vend" kits: <http://www.capitalvending.com/cart.php?target=category&category_id=561>
  - Only for these machines: NV 16x, 787, 157, 158, 484 and GPL 17x & 490
- Retrofitting a machine with a control board that supports MDB + a guaranteed vend sensor could easily cost \$600+.

### Type: Cold Food Machine

Why a cold food vending machine?

- It has compartments!
- They are a proven, out-of-the-box solution for vending small items.
- The locker type vending machines are freaking expensive. Paul is not interested in building his own machine from scratch (He worries about it being reliable).
- It's harder to make the coil type snack machines always dispense items with varying sizes
  - ~~The coil type machines with vend detection systems are more expensive than cold food vending machines.~~
  - There are cheap kits for guaranteed vend systems.

Will likely just turn the refrigerator part off.

All the machines I've seen so far have a price for the entire shelf, instead of each compartment.

Not all machines allow you to hook up a credit card reader and monitor stock. Look for machines that are MDB compatible. Might just need to replace the bill acceptor with one that's MDB compatible.

## Credit Card Reader

Since members likely won't have cash most of the time, a credit card reader will help increase sales and instantly report stock/sales.

- It would be preferable to get a reader which you can use to download a report of what sold.
- Brown emailed a company called USA technologies which sells a popular reader called the Eport. It's \$280 for the reader, all the transactions go through them, and it's \$8 per month for wireless service.

## Idea For Items To Sell

- DMS T-Shirts
- Arduinos
- Female/Male Header Pins
- Usb cables
- Brandon's BeagleBone black cases
- Phone chargers

## Taxes

- There's a coin operated machine permit, but likely we don't need to register the machine if it's a "merchandise vending machine".
  - Sec. 2153.004. states a "merchandise vending machine" is exempt from coin operated machine taxes: <http://www.statutes.legis.state.tx.us/Docs/OC/htm/OC.2153.htm>
- We will acquire a sales tax permit and start remitting sales tax.
- It's likely the machine is exempt from unrelated business income tax. It should fall under the IRS's "Convenience of Members" exemption, like a cafeteria.
  - <http://www.irs.gov/Charities-&-Non-Profits/Charitable-Organizations/Unrelated-Business-Income-Tax-Exceptions-and-Exclusions>

## How Are We Going To Manage It?

### Method 1: Members Stock It

This is the most challenging to manage. There would be profit sharing with the members and DMS would handle the sales tax (but a portion would be paid by the person whose object sold)

### Method 2: DMS Stocks It

DMS allocates funding for purchasing inventory and manages it. It might be a challenge to get volunteers to help with this. But, you wouldn't need to deal with profit sharing and all the funds go to DMS.

### Method 3: Someone Rents It

We rent the machine out to someone. Or maybe we just rent slots to someone. They handle the sales tax and DMS doesn't have to manage anything but keeping the machine working. If we rent individual slots, then DMS would need to distribute the cash.

### Challenges With Members Stocking

Most Challenging:

- Strict documention of the history of what is in the machine.
  - This is probably best done on the web through a simple CRUD (create, read, update, delete) interface.
  - Probably need to also have a sticker behind each item noting whose it is and what it is.
- We will need to do a monthly audit of what sold and remit profits. (credit card reader should make this easier)

Less Challenging:

- Several people will need to be given keys in case there is a problem.
- We may need to appoint someone as the vending machine Czar.
- We may need to charge rent for slots, to people not to keep items which aren't selling.
- Not accepting the cash would reduce work required to count and deposit cash, and also reduces the chance of it being stolen to 0.
- The machine should probably only be opened when someone else is present.
- Probably need to get people putting objects into the machine to agree to waive liability.

Unanswered:

- How do we decide how many slots will be given to who?
  - Probably need to make a webpage that allows members to apply for a slot. Propose their idea and get it approved.
  - Not sure if this will be a problem at first, I'll be excited if it fills up though. We'll need to take turns somehow.
- How do we keep out crappy products which aren't going to sell without making enemies?

## Hacking It

### LEDs!!!

1.  Paul cut the white and black wires which went to the fluorescent ballasts and installed outlets in their place.
2.  After the outlets were installed, he plugged in some LED strips.
3.  The harness for the fluorescent lights is now completely removed.\

<img src="/dms-source/files/mw/thumb_f_fd_LedsVending.jpg_150px-LedsVending.jpg" width="150" height="267" alt="LedsVending.jpg" /> <img src="/dms-source/files/mw/thumb_0_04_LedsVending2.jpg_150px-LedsVending2.jpg" width="150" height="267" alt="LedsVending2.jpg" />

### New Dividers

Pearce made some new dividers using the laser cutter.

<img src="/dms-source/files/mw/thumb_e_ea_2014-01-01.jpg_400px-2014-01-01.jpg" width="400" height="226" alt="2014-01-01.jpg" />

### New Bill Acceptor

Paul purchased a MARS AE2612 Bill acceptor after finding out the machine does not accept new \$5 bills. Unfortunately the machine still doesn't allow us to accept 10's or 20's. The machine's manual says there is an option in the menu for "MDB validator with additional bill selections", but this bill validator does not make that option appear.

### Disabling The Refridgerator

There is not a way in the menu to turn the refrigerator off, but there's an option to adjust the temp between 32-39 degrees (in the food safe range).

Romeo says:

- It needs a resistance of 6.5 k to make the machine read the temperature as 35\*f.
- It uses a reverse thermistor so the resistance goes down as the temp goes up.
- "I unbolted (and moved to the rear) a door cut off switch that was tied to the circulation fan (that is tied only to that switch for some reason...) that was wasting energy."

### Connecting A Computer To It

If we can connect to the MDB interface, then we can control it.

##### The MDB-RS232 Adapter

We got one of these from AliExpress to connect the MDB interface: <http://www.waferstar.com/en/MDB-PC.html>

Manual is for the MDB device is here: <http://www.waferstar.com/downloads/MDB-RS232-V2.2.pdf>

It seems the MDB-RS232 adapter may handle some of the quirks in the protocol by calculate the checksum byte and giving a simple 8-bit serial signal to the beaglebone.

Other alternatives for connecting a PC to mdb include:

- <http://wiki.nottinghack.org.uk/wiki/Vending_Machine/Cashless_Device_Implementation>
- <http://reaktor23.org/en/projects/mate_dealer>

##### The PC

- BeagleBone Black (\$50)
- BeagleBone Black RS232 Cape

Getting the RS232 cape to work was difficult: <http://paulsprogrammingnotes.blogspot.com/2013/12/enable-uart2-on-beaglebone-black-for.html>

##### MDB Documentation

- This is a good description of some of the quirks in the protocol: <ftp://ftp.tik.ee.ethz.ch/pub/students/2012-FS/GA-2012-01.pdf>
- Explanation of what most of the master commands do: <http://www.coinco-europe.com/manuals/928711%20Quick%20Guide%20Coinco%20MDB%20Virtual%20Testbox.pdf>
- <https://www.upstatenetworks.com/mdb2usb.htm>
- Explanation for registering a cashless device: <http://blog.bouni.de/blog/2012/07/11/the-mdb-protocol-part-3/>
- Excellent pictures of using the protocol for vending: <https://reaktor23.org/de/projects/mate_dealer>

##### Example Code

- <http://www.upstatenetworks.com/software_dl_a.htm>
- <https://github.com/cjfman/MJKP/blob/master/VendingMachineCode/MDB.cpp>

### What do we want it to do?

1.  It needs to tell us what sold. This will make it easier to track the inventory and share profits.
2.  It needs to allow people to purchase things without cash. This will probably require typing a code and getting credit.

#### Phase 1

The first thing we need to do is connect to the machine and find out if it's possible to indicate which row and slot vended. It would also be cool to make it vend remotely.
