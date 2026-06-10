---
title: "Tormach-8L Lathe"
description: "This is taken from the Facing section of the guide:"
sourceUrl: "https://dallasmakerspace.org/wiki/Tormach-8L_Lathe"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Tormach-8L_Lathe\">legacy DMS wiki</a> — content may be outdated."
---
## Reference

<img src="/dms-source/files/mw/thumb_7_71_Tormach_8L.jpg_300px-Tormach_8L.jpg" width="300" height="165" /> Tormach 8L CNC lathe

- [Manufacturer's documentation](https://tormach.com/support/lathe/8l-lathe-documents)
- [Manual](https://tormach.com/docs/download/assetlink/asset_id/637)
- [Path Pilot Controller](https://tormach.com/docs/download/assetlink/asset_id/637)
- Lubrication Requirements (page 56 of the [manual](https://tormach.com/docs/download/assetlink/asset_id/634))
- Parts List (starts on page 75 of the [manual](https://tormach.com/docs/download/assetlink/asset_id/634))



## [Specifications](https://tormach.com//media/asset/8/l/8l_lathe_spec_sheet_0721.pdf)

<table>
<colgroup>
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
</colgroup>
<tbody>
<tr>
<td><strong>MACHINE SPECIFICATIONS</strong></td>
<td></td>
<td></td>
<td><strong>SPINDLE</strong></td>
<td></td>
</tr>
<tr>
<td>Carriage Length x Width</td>
<td>7.25 in x 4 in</td>
<td></td>
<td>Spindle Power</td>
<td>1.5 hp</td>
</tr>
<tr>
<td>Machine Footprint</td>
<td>50 in x 26 in</td>
<td></td>
<td>Spindle Speed</td>
<td>Two spindle ranges with speeds<br />
from 180 to 5,000 rpm</td>
</tr>
<tr>
<td>Typical System Weight<br />
incl. optional stand</td>
<td>838 lbs</td>
<td></td>
<td>Through Spindle Bore</td>
<td>1 in</td>
</tr>
<tr>
<td>Maximum Swing Over Bed</td>
<td>8 in</td>
<td></td>
<td>Maximum Workpiece Length</td>
<td>10 in with tailstock</td>
</tr>
<tr>
<td>Maximum Swing Over Carriage</td>
<td>4 in</td>
<td></td>
<td>Maximum Stock Over Bed</td>
<td>8 in</td>
</tr>
<tr>
<td>Max System Height with Door Open<br />
(mounted on optional stand)</td>
<td>66 in</td>
<td></td>
<td>Maximum Stock Over Carriage</td>
<td>4 in</td>
</tr>
<tr>
<td>Overall System Height</td>
<td>52 in</td>
<td></td>
<td>Spindle Nose</td>
<td>5C</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><strong>TAILSTOCK</strong></td>
<td></td>
<td></td>
<td><strong>MOTION</strong></td>
<td></td>
</tr>
<tr>
<td>Taper</td>
<td>MT2</td>
<td></td>
<td>X- and Z- Axis Maximum Feed Rate</td>
<td>150 ipm</td>
</tr>
<tr>
<td>Diameter</td>
<td>0.9 in</td>
<td></td>
<td>Axis Drivers (X, Z)</td>
<td>High-Performance Polyphase Stepper Motors</td>
</tr>
<tr>
<td>Travel</td>
<td>2.2 in</td>
<td></td>
<td></td>
<td>with Leadshine Microstepping Drivers</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><strong>TRAVELS</strong></td>
<td></td>
<td></td>
<td><strong>POWER</strong></td>
<td></td>
</tr>
<tr>
<td>X-Axis</td>
<td>4.5 in</td>
<td></td>
<td>Power Requirements</td>
<td>Single phase 115 VAc,<br />
50/60 Hz, 15A breaker</td>
</tr>
<tr>
<td>Z-Axis</td>
<td>10 in with tailstock</td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

## Accessories

- 4" four jaw chuck with 5C mount
- OXA quick change tool post and tool holders
- Post mount Knurling tool.

## Getting Started

## Learning

To get started learning:

- Use a virtual instance of the PathPilot controller software
  - Create an account on [PathPilot Hub](https://hub.pathpilot.com)
  - Connect to a virtual instance to begin learning to control a virtual lathe

## DRO Settings

This is taken from the Facing section of the guide:

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<tbody>
<tr>
<td>Tool</td>
<td>Initial X DRO Field</td>
<td>Final X</td>
<td>Description</td>
</tr>
<tr>
<td>Rear</td>
<td>Positive</td>
<td>Positive</td>
<td>The tool works on the positive<br />
X side of the spindle center<br />
(the side away from you)</td>
</tr>
<tr>
<td>Front</td>
<td>Negative</td>
<td>Negative</td>
<td>The tool works on the negative<br />
X side of the spindle center<br />
(the side closest to you)</td>
</tr>
</tbody>
</table>

## Optional Post-Processor

If you do not choose to use the PathPilot conversational programming, you can CAM your part and post-process. The Fusion 360 post-processor for the 8L is on the Machine Shop committee drive, in the Training folder. You can also look for updates [at this link](https://cam.autodesk.com/hsmposts), and search for 8L.

*Note that the 15L post-processor will not work because the 8L post has the default X axis direction reversed from that of the 15L*
