---
title: "Traveling Arc"
description: "This project has been completed. If you would like to expand on this project, we suggest creating a new project page."
sourceUrl: "https://dallasmakerspace.org/wiki/Traveling_Arc"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Traveling_Arc\">legacy DMS wiki</a> — content may be outdated."
---
**This project has been completed.**\
If you would like to expand on this project, we suggest creating a new project page.



    Note: due to removal of flickr and youtube plugins, articles in the Wiki are missing media.
    You can view a restored version of this project page on my personal website at Steevithak's Projects: Traveling Arc


\<flickr\>5194098382\|right\|frame\|Photo by Lyn Caudle\</flickr\>

## Introduction

A High Voltage Traveling Arc, more commonly known as a Jacob's Ladder, is a specialized spark gap generator that produces a series of sparks which rise upwards along two rods. This project was done for the 2010 Open House at Dallas Makerspace. A Jacob's Ladder was chosen because we had all the parts available and not much time to construct something.

## Team

- Coordinator, electrical work: Steve Rainwater
- Wood work: Paul Wilson
- Greinacher advice: Jeff Koenig (DPRG), Gareth Edwards (Edinburgh Hacklab)
- Materials: Mike Dodson (DPRG), Doug Emes and several DMS members

## Goals

- A working Jacob's Ladder
- An insulated display for safety

## Design Process

### Proof of Concept

A line powered, neon light transformer providing 7,500 volts AC was provided by Dallas Personal Robotics Group member, Mike Dodson. This was used for an initial test to verify that we could easily improvise a Jacob's Ladder. Here's the result of a few minutes work to convert some stiff copper wire into electrodes.

Above is an initial test at 7.5kV powered directly by the transformer

The result worked but the voltage was too low to support the larger electrodes we wanted for the open house display. It was suggested that a [Greinacher voltage doubler](http://en.wikipedia.org/wiki/Voltage_doubler#Greinacher_circuit) might work to boost the voltage for a better display.

### Greinacher Voltage Doubler

#### First Attempt

A Greinacher voltage doubler was constructed to boost the to 15kV with mixed results. The first attempt at building a voltage doubler had insufficient insulation and the components were too close together. The result was a destructive arc between the two primary capacitors when it was activated. The resulting arc destroyed the caps.

\<flickr\>5141976864\|none\</flickr\>Black spots on caps mark location of arc\
Photo by Steve Rainwater

#### Second Attempt

A second attempt was made with widely spaced components and the entire assembly was potted in wax. This voltage doubler worked well. The higher voltage produced a smaller, brighter arc that fluctuated at 60 Hz, generating a huge amount of noise. However, because the spark was not continuous we could not coax it to travel up the electrodes.

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td>none&lt;/flickr&gt;<br />
Voltage doubler enclosed in wax<br />
Photo by Steve Rainwater</td>
<td>none&lt;/flickr&gt;<br />
First 15Kv arc produced with doubler<br />
Photo by Steve Rainwater</td>
</tr>
</tbody>
</table>

### Plan B

Another makerspace member was able to provide a 15 KV neon transformer. This provided the needed voltage at a much higher current. With no voltage doubler needed, all that remained was adding two steel rods and building a finished case. Two 48 inch steel rods were used as electrodes. A 56 inch acrylic tube was included to shroud the electrodes for safety reasons. The 56 inch tube was also chosen because it tended to amplify the sound produced by a 60 Hz arc. During the 2010 open house the unit operated extensively and, over time, blackened the inside of the tube. After that we cleaned the tube frequently but finally opted to remove it altogether. Even with the tube in place the unit requires constant supervision when operating as it involves lethal voltages, so the protective tube didn't really provide much additional safety. Regardless, the Jacob's Ladder was a big success and continues to be a useful demonstration tool for public events. It has been demonstrated extensively at Dallas Makerspace and at Art Bytes, a Dallas Museum of Art late night educational event.

## Photos of Finished Jacob's Ladder

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<tbody>
<tr>
<td>none&lt;/flickr&gt;<br />
Components without case<br />
Photo by Steve Rainwater</td>
<td>none&lt;/flickr&gt;<br />
Jacob's Ladder with safety tube<br />
Photo by Steve Rainwater</td>
<td>none&lt;/flickr&gt;<br />
Jacob's Ladder with case and warning sign<br />
Photo by Lyn Caudle</td>
</tr>
</tbody>
</table>

## References

- [Voltage Doublers (wikipedia)](http://en.wikipedia.org/wiki/Voltage_doubler)
- [Resonate pipe length calculations](http://www.rwgiangiulio.com/math/pipelength.htm)
- [Source for HV Caps and Diodes](http://stores.ebay.com/OT-Electronics)
