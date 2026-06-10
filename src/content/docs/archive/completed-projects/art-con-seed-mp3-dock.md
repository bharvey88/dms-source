---
title: "Art Con SEED MP3 Dock"
description: "This project has been completed. If you would like to expand on this project, we suggest creating a new project page."
sourceUrl: "https://dallasmakerspace.org/wiki/Art_Con_SEED_MP3_Dock"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Art_Con_SEED_MP3_Dock\">legacy DMS wiki</a> — content may be outdated."
---
**This project has been completed.**\
If you would like to expand on this project, we suggest creating a new project page.

## Introduction

[Art conspiracy](http://www.artconspiracy.org) is a local 501(c)(3) non-profit that organizes a big fund raising event for a different North Texas non-profit group each year. They've raised over \$140,000 for local non profits so far. To cover their annual operating expenses, they also hold an annual art auction called the Art Con SEED event. For [SEED 2012 (RZN8)](http://artconspiracy.org/art-conspiracy-presents-rzn8/), Art Conspiracy selected 30 local artists. Each artist was given an identical kit. Each kit was used as the basis to build a working MP3 player dock. The 30 art pieces/mp3 docs were auctioned off at a live event on 25 August at [Life in Deep Ellum](http://www.lifeindeepellum.com/). DPRG/DMS member Steve Rainwater (that's me) was selected as one of the 30 artists for 2012. (in 2010, the DMS was selected to produce a group entry, see [Art Con SEED Clock](/dms-source/archive/completed-projects/art-con-seed-clock/), in 2011 DMS members Haley, Steve Reeves, and Steve Rainwater participated in the main ArtCon event). I had approximately 2 weeks from the time I was selected to design and build the art piece.

## Goals

- Create an art piece that functions as an MP3 speaker dock
- Include a visual element that is driven by the audio
- Raise some money for a good cause
- Raise awareness of DPRG / DMS

## Results

**This piece went for \$185 at the action** - It wasn't the highest selling price by a long shot but it was in the top 10.

## Design Process

The artist kit turned out to be a pair of inexpensive iPod speakers. Rather than use them, I chose to build something from parts in my existing junk box along with recycled or repurposed materials. Mostly I used audio components left over from the [Noise Boundary](http://www.flickr.com/photos/steevithak/sets/72157622727931306/) projects Ed and I had done in 2010. This included a 10 Watt-per-channel stereo amp and a pair of 15 watt speakers. The one new component I picked up was an LED light array from [BG Micro](http://www.bgmicro.com/); the type that's used in traffic lights. It was super bright and really inexpensive. However, the LED array used 110 vac, so it required retro technology to drive it from the audio output of an MP3 player.

The amplifier output was passed to the low-impedance side of an isolation transformer. The high-impedance side of the transformer was connected to an analog band-pass filter circuit. The filter output drives an SCR which modulates the 110 vac power to the LED array. The resulting circuit design is basically identical to that of a 1970s light organ but is limited to mid-range detection and a single lighting unit. The light array flashes in time to the music.

Once I got all the parts together it was relatively trivially to get the whole thing working. The hard part was coming up with an artistic design to enclose the whole thing. I struck on the idea of using a hexagon theme; no real reason for that other than hexagons are cool. The piece was named: **Hexagonal Repurposed Junk Array \#1**

There were two limiting factors in designing the enclosure 1) it had to be large enough to contain the LED array and 2) it had to be small enough to cut the parts using the laser cutter. This proved a bit challenging but by breaking the speakers and amplifier out as separate enclosures that attached to the main unit it turned out to be possible. I used a combination of clear and red acrylic, both salvaged. The acrylic was assembled using some amazing acrylic cement provided by friends at a local plastics company ([E & D Plastics](http://edplastics.com/)). Because the LED array and driver circuit used dangerous voltages, it was also necessary to add an additional enclosure for the driver. An off-the-shelf plastic project box from [Tanner Electronics](http://www.tannerelectronics.com/) was used to house the driver circuit.

## Photos and Video of Construction

|  |  |  |
|----|----|----|
| m\|frame\|Testing amp and speakers\</flickr\> | m\|frame\|Testing the LED array and driver\</flickr\> | m\|frame\|Driver enclosure and acrylic panels\</flickr\> |
| m\|frame\|Test fitting acrylic panels\</flickr\> | m\|frame\|Final assembly of acrylic panels\</flickr\> | m\|frame\|Completed piece\</flickr\> |

## Photos and Video of Completed Piece

|  |  |  |  |
|----|----|----|----|
| m\|frame\|Completed piece\</flickr\> | m\|frame\|Amp enclosure on back\</flickr\> | m\|frame\|Speaker enclosures and player shelf on top\</flickr\> | m\|frame\|Speaker enclosures and SEED RZN8 logo\</flickr\> |

### More Photos

- [Flickr set by Steevithak: my RZN8 piece](http://www.flickr.com/photos/steevithak/sets/72157631217087564)
- [Flickr set by Steevithak: ArtCon 2012 SEED Auction (RZN8)](http://www.flickr.com/photos/steevithak/sets/72157631432041570)



## SVG Drawings for Laser Cut Acrylic

These are the SVG drawings I created for use with the DMS laser CNC machine. In some cases there are multiple verions. For example, I initially created a separate set of panels for each speaker but later opted to go with a single set of panels that enclosed both speakers. Some of the drawings also include a bounding box that represents that maximum size of the laser work area. The bounding box will need to be deleted before cutting the design. The "assembly rig" is a temporary part that was used to hold the main enclosure panels at a fixed location while the acrylic cement set. All these drawings are Copyright (C) 2012 by Steve Rainwater and released under a Creative Commons BY-SA 3.0 license.

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| <img src="/dms-source/files/mw/thumb_6_67_Rzn8-base.svg_100px-Rzn8-base.svg.png" width="100" height="100" /> Main base | <img src="/dms-source/files/mw/thumb_5_52_Rzn8-retainer.svg_100px-Rzn8-retainer.svg.png" width="100" height="100" /> LED retainer | <img src="/dms-source/files/mw/thumb_4_46_Rzn8-assembly-rig.svg_100px-Rzn8-assembly-rig.svg.png" width="100" height="100" /> assembly rig | <img src="/dms-source/files/mw/thumb_2_2c_Rzn8-base-supports.svg_100px-Rzn8-base-supports.svg.png" width="100" height="100" /> Base support | <img src="/dms-source/files/mw/thumb_2_2e_Rzn8-amp-inner.svg_100px-Rzn8-amp-inner.svg.png" width="100" height="100" /> Amp bottom | <img src="/dms-source/files/mw/thumb_1_1d_Rzn8-amp-outer.svg_100px-Rzn8-amp-outer.svg.png" width="100" height="100" /> Amp top |
| <img src="/dms-source/files/mw/thumb_3_34_Rzn8-speaker-support.svg_100px-Rzn8-speaker-support.svg.png" width="100" height="100" /> Speaker/Amp support | <img src="/dms-source/files/mw/thumb_9_98_Rzn8-speaker-back.svg_100px-Rzn8-speaker-back.svg.png" width="100" height="100" /> Speaker back with hole | <img src="/dms-source/files/mw/thumb_1_19_Rzn8-speaker-front.svg_100px-Rzn8-speaker-front.svg.png" width="100" height="100" /> Speaker front version A | <img src="/dms-source/files/mw/thumb_7_70_Rzn8-speaker-front-2.svg_100px-Rzn8-speaker-front-2.svg.png" width="100" height="100" /> Speaker front version B | <img src="/dms-source/files/mw/thumb_3_38_Rzn8-speaker-double-back.svg_100px-Rzn8-speaker-double-back.svg.png" width="100" height="100" /> Two Speaker back | <img src="/dms-source/files/mw/thumb_f_f4_Rzn8-speaker-double-front.svg_100px-Rzn8-speaker-double-front.svg.png" width="100" height="100" /> Two Speaker front |
