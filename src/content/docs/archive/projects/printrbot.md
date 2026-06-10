---
title: "Printrbot"
description: "Note: An adapter plate will need to be laser cut. Link Also, finishing nails can be used with the Greg's Wade Reloaded (for J-head) design. (No adapter pla..."
sourceUrl: "https://dallasmakerspace.org/wiki/Printrbot"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Printrbot\">legacy DMS wiki</a> — content may be outdated."
---
## Sourcing

### Plastic Parts

|  |
|:--:|
| **People Willing To Print Sets of Printed Parts for DMS Members (for a small fee)** |
| Paul Brown |

### Hot End

|  |  |  |  |  |
|:--:|:--:|:--:|:--:|:--:|
| **Name** | **Source** | **Option 1** | **Option 2** | **Price** |
| J-Head | [Reprap-USA](http://www.reprap-usa.com/index.php?route=product/product&product_id=53) | .5mm Orifice | 3mm Filament | \$64.99 + Shipping |

Note: An adapter plate will need to be laser cut. [Link](https://github.com/MakerGear/MakerGear-Prusa-Mendel/blob/master/x%20groovemount%203.dxf) Also, finishing nails can be used with the Greg's Wade Reloaded (for J-head) design. (No adapter plate required)

### Electronics

|  |  |  |
|:--:|:--:|:--:|
| **Type** | **Source** | **Price** |
| Printrboard | [Printrbot Store](https://printrbot.com/shop/printrboard-electronics/) | \$130 + Shipping |
| RAMPS | [Ultimachine](http://ultimachine.com/ramps-pre-assembled-kit-complete) | \$200 + Shipping |

- If ordering RAMPS, make sure to order with Mechanical Endstops w/ Wiring and Double Connectors.

### Stepper Motors

|  |  |  |  |  |  |
|:--:|:--:|:--:|:--:|:--:|:--:|
| **Source 1** | **Source 1 Cost** | **Source 2** | **Source 2 Cost** | **Source 3** | **Source 3 Cost** |
| [Ultimachine](http://ultimachine.com/content/kysan-1124090-nema-17-stepper-motor) | \$72.50 + \$12.50 shipping | [Lulzbot](http://www.lulzbot.com/en/48-nema-17-stepper-motors.html) | \$97.50 + Shipping | [China](http://www.aliexpress.com/product-gs/517614158-NEMA17-78-Oz-in-CNC-stepper-motor-stepping-motor-1-8A-wholesalers.html) | ~\$85 |

I've tested the Chinese motors and the Ultimachine motors and they both work great. - Paul

I've not tested motors from Phidgets, but they may also work: [Phidgets](http://www.phidgets.com/products.php?category=23&product_id=3303) = \$70.00 + shipping

Note: The Ultimachine motors come with connectors attached, so you don't have to crimp your own connectors. The connectors are just 4 pin .1" header connectors.

### Couplings, Bushings, and Bearings

|  |  |  |  |
|:--:|:--:|:--:|:--:|
| **Item** | **Source 1** | **Source 2** | **Qty Required** |
| 5mm to 8mm Coupling | [China](http://www.ebay.com/itm/5x8mm-CNC-Motor-Jaw-Shaft-Coupler-5mm-to-8mm-Flexible-Coupling-OD-20x25mm-/280831259183?pt=LH_DefaultDomain_0&hash=item4162d8f22f) | [USA](http://www.ebay.com/itm/RepRap-3d-Printer-Prusa-Mendel-Z-AXES-COUPLER-FIX-NEW-/280834599250?pt=LH_DefaultDomain_0&hash=item41630be952) | 2 |
| 608Z Bearings | [Amazon](http://www.amazon.com/Bearing-Shielded-8x22x7-Miniature-Bearings/dp/B002BBICBK) |  | 6 bearings (package of 10) |
| LM8UU Bushings | [Ebay](http://www.ebay.com/sch/i.html?_from=R40&_nkw=LM8UU&LH_PrefLoc=1) |  | 10 |

### Pulleys and Belts

|  |  |  |  |  |
|:--:|:--:|:--:|:--:|:--:|
| **Item** | **Part \#** | **Source** | **Qty Required** | **unit price** |
| GT2 Pulley | A 6D51M015DF0605 | [SDP-SI](https://sdp-si.com/eStore/PartDetail.asp?Opener=Group&PartID=60189&GroupID=346) | 2 | \$18.51 |
| GT2 Belt (2218.00 mm) | A 6R51MB09060 | [SDP-SI](https://sdp-si.com/eStore/PartDetail.asp?Opener=Group&PartID=75964&GroupID=342) | 1 | \$11.95 |
| GT2 Belt (1 foot or 304.8mm) | 7959K21 | [McMaster Carr](http://www.mcmaster.com/#catalog/119/1053/=lxo5ao) | 8 | \$2.04 |
| GT2 Pulley (16 teeth) | 1375K35 | [McMaster Carr](http://www.mcmaster.com/#timing-belt-pulleys/=lxo3ft) | 2 | \$10.18 |

Note: Metal pulleys are not necessary, but it seems like finding plastic pulleys with less than a .9" inch (required for Y axis) diameter is difficult. The small tooth count and fine pitch should mean higher resolution than the standard MXL belts.

### Hobbed Bolt

|  |  |  |
|:--:|:--:|:--:|
| **Source 1** | **Source 2** | **Source 3** |
| [Lulzbot](http://www.lulzbot.com/en/7-hobbed-bolts.html) | [Ultimachine](http://ultimachine.com/content/hive76-milled-bolt-m8-x-60mm) | [Arcol](http://shop.arcol.hu/item/hobbed-bolt) |

### Threaded/Smooth Rod

The smooth rod needs to be M8 (for the LM8UU bushings), but the threaded rod can be 5/16ths or M8. Paul Brown has lots of 5/16ths rod and enough M8 drill rod for 2-3 printers. There is a chop saw at the space for cutting these. These rod lengths are for this print bed: [Lasercut Print Bed](http://www.thingiverse.com/thing:17498)

Cut Lengths:

|                        |            |         |                              |
|:----------------------:|:----------:|:-------:|:----------------------------:|
| **Smooth or Threaded** | **Length** | **QTY** |          **Notes**           |
|         Smooth         |   335mm    |    2    |            Y axis            |
|         Smooth         |   332mm    |    2    | X axis for 270mm apart bases |
|         Smooth         |   250mm    |    2    |    Z axis, can be longer     |
|        Threaded        |   200mm    |    2    |  Leadscrews, can be longer   |
|        Threaded        |   305mm    |    4    |      Bases 270mm apart       |

Threaded Rod Source:

|                                      |             |         |
|:------------------------------------:|:-----------:|:-------:|
|             **Source 1**             | **Part \#** | **Qty** |
| [Mcmaster](http://www.mcmaster.com/) |  98841A030  |    2    |

Smooth Rod Source:

|                                      |             |         |
|:------------------------------------:|:-----------:|:-------:|
|             **Source 1**             | **Part \#** | **Qty** |
| [Mcmaster](http://www.mcmaster.com/) |  88625K67   |    2    |

### Print Bed

Paul Brown made a design for this, but it is too large for our lasercutter: [Thingiverse Link](http://www.thingiverse.com/thing:17498)

Ponoko.com will cut it for ~\$15. CNC'ing this part would be preferred.

Cut this part from 1/4" tempered hardboard from Home Depot. (pick the flattest piece you can find)

### Heated Bed

Initially, we will not be using a heated bed. PLA plastic prints well without a heated bed (not ABS though). PLA sticks to Lexan very well, so a Lexan sheet will work for the print bed.

Paul Brown ordered several large PCB's on 3/15/11 and is hoping to mill them into heated beds. They will be very cheap, around ~\$15.

Mike C has made a couple of heated beds using Prototyping Stripboard wired up as a large resistor [Thingiverse Inspiration](http://www.thingiverse.com/thing:12727). Seems to work well - heats faster than a commercial bed and costs \< \$6 for an 8" X 8" bed. Using two 4" X 8" clad copper boards (not electroplated) from Veroboard (ordered through Amazon.com) is a good, cheap source. Andrew Falgout improved on the soldering technique by using stripped Cat 5 wire as a bridge across the end holes to aid in soldering without increasing the thickness of the solder joint.

Note: Glass will need to be placed on the heated bed. This can be 1/8th inch glass cut at a local glass store to 8.5"x8.5". It should only be a few dollars per piece. Cork sheet under the hot bed will improve efficiency.

### Local Purchases

|  |  |  |  |
|:--:|:--:|:--:|:--:|
| **Item** | **Qty Required** | **Source** | **Notes** |
| 6-32 .5” Bolt | 4 | Home Depot / Lowes / Ace Hardware | Y-Axis belt holder |
| 6-32 1” bolt | 10 | Home Depot / Lowes / Ace Hardware | Extruder |
| 6-32 1.25” bolt | 4 | Home Depot / Lowes / Ace Hardware | Print Platform Clips |
| 6-32 nuts | 8 | Ace Hardware / Lowes / Home Depot | Extruder |
| 6-32 Lock Nut | 10 | Home Depot / Lowes / Ace Hardware | Extruder and Y-Axis belt holder |
| 5/16"-18 1" bolt | 1 | Home Depot / Lowes / Ace Hardware / Tractor Supply | X-Idler |
| 5/16"-18 nuts (M8 for metric threaded rod) | 22 | Home Depot / Lowes / Ace Hardware | Bottom Platform, Z-Axis, and X-Axis Idler |
| 5/16" washers (or M8 for Metric Threaded Rod), 1/4" OD | 25 | Ace Hardware / Lowes / Home Depot / Tractor Supply | Bottom Platform and ?? |
| Fender washers for 5/16-18 (or m8) | 2 | Home Depot / Lowes / Ace Hardware / Tractor Supply | X-Idler |
| M3x6mm Set Screw | 1 (3 if using printed plastic pulleys) | Ace Hardware | Extruder pulley, opt. other pulleys |
| M3x8mm bolts, socket head | 21 | Ace Hardware / McMaster Part# 92005A120 | motor Attachment |
| M3x10mm bolts, socket head | 10 | Ace Hardware |  |
| M3x25mm bolts, socket head | 2 | Ace Hardware | Y Axis bearings |
| M3x30mm bolt, socket head | 1 | Ace Hardware |  |
| M3x50mm bolts, socket head | 2 | Ace Hardware | Extruder hinge (or use 2 6-32 1.75” bolts and jam nuts (the 1/2 height ones)) |
| M3 nut | 3 (5 if using 3 printed plastic pulleys) | Ace Hardware | 2 for Extruder hinge, 1 fore each plastic Pulley |
| M8 nuts | 2 | Ace Hardware / Lowes / Home Depot | Hobbed Bolt |
| 10mm Standoffs | 1 Pkg | [Radioshack](http://www.radioshack.com/product/index.jsp?productId=2102848) | 4 needed for print platform |
| 4" Zip ties | 1 Pkg | Home Depot / Lowes / Walmart | 8 needed for Y Axis bearings and 2 for X Axis Belt, plus more for wire containment |
| Spring with M3 ID (1/2" to 1" long) | 1 | Ace Hardware | Extruder Hinge |
| 12"x12" (at least) Lexan/Polycarbonate Sheet (1/4" thick) | 1 | Home Depot / Lowes | print platform |

### Plastic Filament

Paul Brown is currently trying to arrange a group buy. Filament prices have recently increased from ~\$60 for 5lbs to ~\$100. We might still be able to get it for ~\$10 per lb.
