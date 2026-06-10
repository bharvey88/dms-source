---
title: "CNC Plasma Cutter Training"
description: "The cutter is a Hypertherm Powermax 85 The table is a Dynatorch Super B."
sourceUrl: "https://dallasmakerspace.org/wiki/CNC_Plasma_Cutter_Training"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/CNC_Plasma_Cutter_Training\">legacy DMS wiki</a> — content may be outdated."
---
<img src="/dms-source/files/mw/thumb_1_1f_Superb-1.jpeg_300px-Superb-1.jpeg" width="300" height="225" /> Dynatorch Super B

The cutter is a Hypertherm Powermax 85\
The table is a Dynatorch Super B.

## Background Material

Hypertherm has a good explanation of what plasma is and how it can be used to cut metal. See their page [What Is Plasma?](http://www.hypertherm.com/en/Training_and_education/Intro_to_plasma/What_is_plasma/what_is_plasma.jsp) for more information. The method available at the makerspace is conventional plasma cutting (first on the list).

> One common description of plasma is to describe it as the fourth state of matter. We normally think of the three states of matter as solid, liquid and gas. For a common element, water, these three states are ice, water and steam. The difference between these states relates to their energy levels. When we add energy in the form of heat to ice, the ice melts and forms water. When we add more energy, the water vaporizes into hydrogen and oxygen, in the form of steam. By adding more energy to steam these gases become ionized. This ionization process causes the gas to become electrically conductive. This electrically conductive, ionized gas is called a plasma...

Numerical control is a method for computers to control equipment, also known as CNC. This content will be familiar to some members but if this is new take a minute to review the basic concepts of numeric control. Wikipedia has a good article on [numeric control](http://en.wikipedia.org/wiki/Numerical_control).

Another simple way of defining plasma is that it is controlled lightning. We use plasma to cut metals. Plasma torches work by passing electricity through the torch tip, through the plasma gas (yes plasma conducts electricity) and into the metal to cut and through the table and finally into the ground clamp attached to the table.

## Terminology

Pierce
Before cutting through material the plasma torch needs to punch a hole through the material.

Nozzle
Metal piece on the end of the torch that directs the flow of the plasma and air.

Electrode
Copper piece inside the torch that is on one side of the arc.

Consumable
Parts or supplies that are used or worn out as the machine is used.

Kerf
Width of the cut in the material, thicker material means a wider kerf with the plasma cutter.

Dross or Slag
Melted metal and junk left on the bottom of material after being cut.

## Equipment

### The Table

Dynatorch Super B



### The Cutter

The plasma cutter is a Hypertherm Powermax 85 with a mechanized torch

#### Consumables

Video with a Hypertherm rep going over the consumables in a handtorch. Not identical but similar to what you'll see in the machine torch.

<https://www.youtube.com/watch?v=wHAuq0ntUD4>

Local walk-up supplier:

[Metroplex Welding Supply](http://www.metroweld.com/)

1970 W Northwest Hwy

Dallas, TX 75220

(972)556-0213

|                      |          |          |
|----------------------|----------|----------|
| Consumable           | Regular  | Fine Cut |
| Shield/Deflector:    | 220817   | 220948   |
| Retaining cap:       | 220953   | 220953   |
| Nozzle:              | 220941\* | 220930   |
| Electrode:           | 220842\* | 220842   |
| Long life Electrode: | 220777   | 220778   |
| Swirl ring:          | 220857   | 220947   |

**\* Wear fast and come in packs of 5**

Complete kits also available online as: [Consumable Kit Hypertherm PowerMax85 ESSENTIAL Mechanized Ohmic 85A Cutting 851470](https://www.hypertherm.com/en-US/hypertherm/powermax/consumable-kit-powermax85-essential-mechanized-ohmic-85-a-cutting/)\

## Safety

The CNC plasma cutter is dangerous in just about every way a tool can be dangerous. It's hot, loud, heavy, automated, sharp, and powerful. This is not a comprehensive list of the dangers.

- Speeding Gantry/Torch Carrier on the table can sever body parts
- Plasma torch can severely burn or sever body parts
- The light emitted from the plasma torch is very bright
  - you must use shade \#8 glasses or darker if you look at the light from the torch.
- Recently cut metal parts will be extremely hot
- Table grid and cut parts can have razor sharp edges
- Prolonged exposure to plasma cutting can cause hearing damage
- Thick stock can be heavy and a drop hazard

Some warnings from the ["cuttable materials" section](/dms-source/archive/tools/cnc-plasma-cutter-training/#Cuttable_Materials):\
**DO NOT CUT MAGNESIUM, TITANIUM, OR OTHER METALS WHICH SUPPORT COMBUSTION**.\
**DO NOT CUT ZINC-CONTAINING ALLOYS** such as brass. [SEE METAL FUME FEVER.](https://en.wikipedia.org/wiki/Metal_fume_fever)\
**DO NOT CUT GALVANIZED OR ZINC/TIN ELECTROPLATED METALS**. Galvanized and electroplated materials use zinc or tin to protect the base metal (steel, generally) from corrosion/rusting. [SEE METAL FUME FEVER.](https://en.wikipedia.org/wiki/Metal_fume_fever)\
See also [Cuttable Materials section](/dms-source/archive/tools/cnc-plasma-cutter-training/#Cuttable_Materials)

Take a look at this document regarding **eye protection** from the UV-\>IR spectrum light thrown off of a running plasma arc: <http://www.esabna.com/us/en/education/blog/what-eye-protection-is-required-for-cnc-plasma-cutting.cfm> (in a nuthsell, we're recommending SHADE 8 approved safety glasses, as recommended by AWS, OSHA, and other safety regulation bodies).

## Training Slide Deck

- [PDF](/w/images/5/50/Dynatorch_opt1.pdf) (video links probably not working)

## Designing Files

Cuts are made based on vectors, The ideal format for CNC cutting is DXF (2D) which can be exported from most vector based software (Adobe Illustrator, Inkscape, etc). Cuts can either be open like a line or a closed shape like a circle. The type of material should be kept in mind when designing files to cut because the thickness of the material causes the kerf to be wider (width of the cut). Intricate designs will be easier to cut from thin material than thick material (e.g. 20ga sheet compared to 1/4" sheet).

## Cuttable Materials

The plasma can cut most materials that conduct electricity. See the list below for commonly cut materials.

- Mild steel
- Stainless steel
- Aluminum
- Copper

Mild steel is easiest to cut (max sever is .5") and copper and aluminum are more difficult to cut because they conduct heat away from the cutting area much faster.

**DO NOT CUT MAGNESIUM, TITANIUM, OR OTHER METALS WHICH SUPPORT COMBUSTION**.\
**DO NOT CUT ZINC-CONTAINING ALLOYS** such as [brass](https://www.azom.com/article.aspx?ArticleID=4387). [Zinc vapor is to be avoided.](https://www.cdc.gov/niosh/docs/81-123/pdfs/0675.pdf)\
**DO NOT CUT GALVANIZED OR ZINC/TIN ELECTROPLATED METALS**. Galvanized and electroplated materials use zinc or tin to protect the base metal (steel, generally) from corrosion/rusting. [Zinc vapor is to be avoided.](https://www.cdc.gov/niosh/docs/81-123/pdfs/0675.pdf)

## Preparing Files with SheetCAM Software

### Converting Fonts to Stencil Outlines

Is this still useful after the Dynatorch installation?

\<!This [Stencilfy Tool](https://stencilfy.glitch.me/) is useful for converting text in various fonts into stencils which can be cut on the PlasmaCAM without losing parts of the letters. Output is in SVG which can be converted via InkScape to DXF for cutting. \>

### Importing Files

Designing should be completed \*\*BEFORE\*\* tying up the CNC Plasma Cutter. Sheetcam can be downloaded and used on your own device, though the output is limited to 180 lines of G-Code without license. Nevertheless, the designing work can be completed prior to using the licensed copy.

## Cutting with the CNC Plasma Cutter

Members cutting for the first few times should have another member present who is familiar with the plasma cutter.

### Preparing Equipment

The configuration of the machinery may change and this information should be updated to reflect any changes. Use the list below to make sure the machine is ready to cut.

- The plasma cutter uses the 220v outlet on the South wall, so check that it is plugged in
- Compressed air is needed for the plasma cutter. There should be an air hose already plugged in at the back
- The table uses downdraft evacuation table which will need to be turned on and off manually

### Start up sequence

1.  will update soon

### Cutting

1.  Physically load the material to be cut onto the plasma table
2.  Select an appropriate grounding location and ATTACH THE GROUND LUG to the workpiece (not to the table)
3.  Load the file to be cut into the software
4.  Perform a dry run to make sure everything is as planned and the design fits in the allocated space
5.  Start the cut
6.  After each pierce make sure cut parts do not swing into the path of the torch to avoid damage to the torch and the work

<!-- -->

    (DO NOT LET IT RUN UNATTENDED AT ANY TIME!!!)

### Cleaning Up/Shutting Down

After you are done with your job, shut down all the equipment

1.  Move the torch so it's ready for the next person to load their stock
2.  Power off the exhaust fan
3.  Power off the Hypertherm
4.  Power off the computer
5.  Power off the table control box
6.  Clear the table of any material - be careful, parts will be hot! Use pliers, etc.

<!-- -->

    Leave the table like you would like to find it!

## Troubleshooting

Some helpful troubleshooting tips\
coming soon

## Other Notes

### Age Requirements

Minimum age to use the Machine Shop's CNC Plasma Cutter is 18 years old; the same as the minimum age for a member to attend the training for same.
