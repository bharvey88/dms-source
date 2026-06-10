---
title: "Plasma Cutter, Table - Dynatorch Super-B"
description: "Hypertherm has a good explanation of what plasma is and how it can be used to cut metal. See their page What Is Plasma? for more information. The method av..."
sourceUrl: "https://source.dallasmakerspace.org/display/METAL/Plasma+Cutter%2C+Table+-+Dynatorch+Super-B"
lastUpdated: 2026-03-12
---
<img src="/dms-source/files/embedded/METAL/plasma-cutter-table-dynatorch-super-b/4x8SBAirC.jpg" draggable="false" height="250" />

## Background Material

Hypertherm has a good explanation of what plasma is and how it can be used to cut metal. See their page [What Is Plasma?](http://www.hypertherm.com/en/Training_and_education/Intro_to_plasma/What_is_plasma/what_is_plasma.jsp) for more information. The method available at the makerspace is conventional plasma cutting (first on the list).

> One common description of plasma is to describe it as the fourth state of matter. We normally think of the three states of matter as solid, liquid and gas. For a common element, water, these three states are ice, water and steam. The difference between these states relates to their energy levels. When we add energy in the form of heat to ice, the ice melts and forms water. When we add more energy, the water vaporizes into hydrogen and oxygen, in the form of steam. By adding more energy to steam these gases become ionized. This ionization process causes the gas to become electrically conductive. This electrically conductive, ionized gas is called a plasma...

Numerical control is a method for computers to control equipment, also known as CNC. This content will be familiar to some members but if this is new take a minute to review the basic concepts of numeric control. Wikipedia has a good article on [numeric control](http://en.wikipedia.org/wiki/Numerical_control).

Another simple way of defining plasma is that it is controlled lightning. We use plasma to cut metals. Plasma torches work by passing electricity through the torch tip, through the plasma gas (yes plasma conducts electricity) and into the metal to cut and through the table and finally into the ground clamp attached to the table.

## Terminology

**Pierce.** Before cutting through material the plasma torch needs to punch a hole through the material.

**Nozzle.** Metal piece on the end of the torch that directs the flow of the plasma and air.

**Electrode.** Copper piece inside the torch that is on one side of the arc.

**Consumable.** Parts or supplies that are used or worn out as the machine is used.

**Kerf.** Width of the cut in the material, thicker material means a wider kerf with the plasma cutter.

**Dross or Slag.** Melted metal and junk left on the bottom of material after being cut.

## Equipment

### The Table

Dynatorch Super B

### The Cutter

The plasma cutter is a Hypertherm Powermax 85 with a mechanized torch

#### Consumables (Local walk-up supplier):

    [Metroplex Welding Supply](http://www.metroweld.com/), 1970 W Northwest Hwy, Dallas, TX 75220\
    (972) 556-0213



|                      |          |          |
|----------------------|----------|----------|
| Consumable           | Regular  | Fine Cut |
| Shield/Deflector:    | 220817   | 220948   |
| Retaining cap:       | 220953   | 220953   |
| Nozzle:              | 220941\* | 220930   |
| Electrode:           | 220842\* | 220842   |
| Long life Electrode: | 220777   | 220778   |
| Swirl ring:          | 220857   | 220947   |

\* Wear fast and come in packs of 5



## <u>Safety</u>

The CNC plasma cutter is dangerous in just about every way a tool can be dangerous. It's hot, loud, heavy, automated, sharp, and powerful. This is not a comprehensive list of the dangers.

- Speeding Gantry/Torch Carrier on the table can sever body parts
- Plasma torch can severely burn or sever body parts
- The light emitted from the plasma torch is very bright
  - you must use shade \#8 glasses or darker if you look at the light from the torch.
- Recently cut metal parts will be extremely hot
- Table grid and cut parts can have razor sharp edges
- Prolonged exposure to plasma cutting can cause hearing damage
- Thick stock can be heavy and a drop hazard

Take a look at this document regarding **eye protection** from the UV-\>IR spectrum light thrown off of a running plasma arc: <http://www.esabna.com/us/en/education/blog/what-eye-protection-is-required-for-cnc-plasma-cutting.cfm> (in a nuthsell, we're recommending SHADE 8 approved safety glasses, as recommended by AWS, OSHA, and other safety regulation bodies).

## <u>Designing Files</u>

Cuts are made based on vectors, The ideal format for CNC cutting is DXF (2D) which can be exported from most vector based software (Adobe Illustrator, Inkscape, etc). Cuts can either be open like a line or a closed shape like a circle. The type of material should be kept in mind when designing files to cut because the thickness of the material causes the kerf to be wider (width of the cut). Intricate designs will be easier to cut from thin material than thick material (e.g. 20ga sheet compared to 1/4" sheet).

## <u>Cuttable Materials</u>

**DO NOT CUT MAGNESIUM, TITANIUM, OR OTHER METALS WHICH SUPPORT COMBUSTION**.\
**DO NOT CUT ZINC-CONTAINING ALLOYS** such as [brass](https://www.azom.com/article.aspx?ArticleID=4387). [SEE METAL FUME FEVER.](https://en.wikipedia.org/wiki/Metal_fume_fever)\
**DO NOT CUT GALVANIZED OR ZINC/TIN ELECTROPLATED METALS**. Galvanized and electroplated materials use zinc or tin to protect the base metal (steel, generally) from corrosion/rusting. [SEE METAL FUME FEVER.](https://en.wikipedia.org/wiki/Metal_fume_fever)

The plasma can cut most materials that conduct electricity. See the list below for commonly cut materials.

- Mild steel
- Stainless steel
- Aluminum
- Copper

Mild steel is easiest to cut (max sever is .5") and copper and aluminum are more difficult to cut because they conduct heat away from the cutting area much faster.

## <u>Preparing Files with SheetCAM Software</u>

### Importing Files

Designing should be completed \*\*BEFORE\*\* tying up the CNC Plasma Cutter. Sheetcam can be downloaded and used on your own device, though the output is limited to 180 lines of G-Code without license. Nevertheless, the designing work can be completed prior to using the licensed copy.

## <u>Cutting with the CNC Plasma Cutter</u>

Members cutting for the first few times should have another member present who is familiar with the plasma cutter.

### Preparing Equipment

- The plasma cutter uses the 220v outlet on the South wall, so check that it is plugged in
- Compressed air is needed for the plasma cutter. There should be an air hose already plugged in at the back
- The table uses downdraft evacuation table which will need to be turned on and off manually

### Cutting

1.  Physically load the material to be cut onto the plasma table
2.  Select an appropriate grounding location and ATTACH THE GROUND LUG to the workpiece (not to the table)
3.  Load the file to be cut into the software
4.  Perform a dry run to make sure everything is as planned and the design fits in the allocated space
5.  Start the cut
6.  After each pierce make sure cut parts do not swing into the path of the torch to avoid damage to the torch and the work

<!-- -->

    (DO NOT LET IT RUN UNATTENDED AT ANY TIME!!!)

## <u>Cleaning Up/Shutting Down</u>

After you are done with your job, shut down all the equipment

1.  Move the torch so it's ready for the next person to load their stock
2.  Power off the exhaust fan
3.  Power off the Hypertherm
4.  Power off the computer
5.  Power off the table control box
6.  Clear the table of any material - be careful, parts will be hot! Use pliers, etc.



<table>
<tbody>
<tr>
<th>Name</th>
<td><p>Dynatorch Super-B CNC Plasma Cutter (4ft x 10ft)</p></td>
</tr>
<tr>
<th>Date Acquired</th>
<td><p>01 Jan 2014</p></td>
</tr>
<tr>
<th>Training</th>
<td><p>Training Required</p>
<p>Age requirements:<br />
  18+ (unless accompanied by a parent)<br />
  16+ with parent (some exceptions are made with chair approval)</p></td>
</tr>
<tr>
<th>Manufacturer</th>
<td><p>Dynatorch</p></td>
</tr>
<tr>
<th>Description</th>
<td><p>Capacity: 3/4 inch steel, 4 ft x 10 ft</p></td>
</tr>
<tr>
<th>Volunteers</th>
<td><p>Erik Jackson, Max Holthaus, Randy Lisbona, Tim Bene</p></td>
</tr>
</tbody>
</table>

## Related Pages



Training Slides: <a href="/dms-source/files/80904307/Dynatorch.pdf" data-linked-resource-id="126976276" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="Dynatorch.pdf" data-nice-type="PDF Document" data-linked-resource-content-type="application/pdf" data-linked-resource-container-id="80904307" data-linked-resource-container-version="13">Dynatorch.pdf</a>

Super Bee Quickstart: <a href="/dms-source/files/80904307/Super-B-Quick-Start-Plasma.pdf" data-linked-resource-id="126976275" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="Super-B-Quick-Start-Plasma.pdf" data-nice-type="PDF Document" data-linked-resource-content-type="application/pdf" data-linked-resource-container-id="80904307" data-linked-resource-container-version="13">Super-B-Quick-Start-Plasma.pdf</a>

How to set the start position: <a href="/dms-source/files/80904307/How-To-Set-The-Start-Position.pdf" data-linked-resource-id="126976277" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="How-To-Set-The-Start-Position.pdf" data-nice-type="PDF Document" data-linked-resource-content-type="application/pdf" data-linked-resource-container-id="80904307" data-linked-resource-container-version="13">How-To-Set-The-Start-Position.pdf</a>

Understanding Plasma: <a href="/dms-source/files/80904307/Understanding-Plasma.pdf" data-linked-resource-id="126976278" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="Understanding-Plasma.pdf" data-nice-type="PDF Document" data-linked-resource-content-type="application/pdf" data-linked-resource-container-id="80904307" data-linked-resource-container-version="13">Understanding-Plasma.pdf</a>

Hypotherm Reference Guide: <a href="/dms-source/files/80904307/QSC_894380_R2.pdf" data-linked-resource-id="208535589" data-linked-resource-version="1" data-linked-resource-type="attachment" data-linked-resource-default-alias="QSC_894380_R2.pdf" data-nice-type="PDF Document" data-linked-resource-content-type="application/pdf" data-linked-resource-container-id="80904307" data-linked-resource-container-version="13">QSC_894380_R2.pdf</a>
