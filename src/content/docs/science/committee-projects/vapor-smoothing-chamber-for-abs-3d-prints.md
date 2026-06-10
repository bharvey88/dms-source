---
title: "Vapor Smoothing Chamber for ABS 3D Prints"
description: "Background: Smoothing of 3D printed parts to hide layer lines and other defects is an essential part of post-processing. Frequently used techniques include..."
sourceUrl: "https://source.dallasmakerspace.org/display/SCIENCE/Vapor+Smoothing+Chamber+for+ABS+3D+Prints"
lastUpdated: 2024-10-21
---
**Background**: Smoothing of 3D printed parts to hide layer lines and other defects is an essential part of post-processing. Frequently used techniques include applying filler paints followed by multiple rounds of sanding with increasingly fine grit. An alternative method of post-processing involves the use of solvent vapors. Acetone vapor is known to swell ABS (acrylonitrile-butadiene-styrene) and allow the surface layer polymer to reflow. Simple acetone vapor chambers have long been used for post-processing for the hobbyist 3D printing as a surface treatment method. Other polymers such as PETG and PLA may require more dangerous solvents to vapor smooth. Given that ABS is the main polymer allowed on the Polyprinters, a better method of smoothing would allow 3D printing to produce smoothed parts suitable for further processing such as metal plating.

**Challenges:** Acetone vapor is heavier than air and tends to settle to the bottom of smoothing chambers. Efforts to redistribute the vapors using napkins along the sides of the chamber or using a fan are frequently seen online. The design of those chambers, however, leaves much to be desired about the consistency of the process.  A second challenge is the loss of fine details and sharp edges and corners. This is due to overpenetration of solvent into the 3D printed body resulting in smoothing of features when the surface is swelled due absorption of acetone vapor. Additionally, depending on chemical vapors for all smoothing means that any feature smaller than the largest feature to be smoothed will be obliterated.

**Hypothesis:** Current approaches either choose chemical vapor smoothing or mechanical processing–this is a mistake. Inspired by chemical mechanical planarization (CMP), a combination of chemical and mechanical polishing to do the rough smoothing followed by a light vapor smooth to take the surface from mostly smooth to a mirror finish will allow the targeted smoothing of areas while leaving details intact.  This also means that some areas can be preloaded with acetone before proceeding to the vapor step allowing certain areas to have solvent more deeply absorbed.

**Preliminary Tests: **

Kapton felt was folded and used as a makeshift polishing tool. When soaked with acetone, a rough polish of target areas could be more easily and quickly performed compared with sanding. A quick acetone vapor chamber treatment yielded substantially smoothed prints with much less loss of detail compared with approaches typically seen in guides online.  The following was printed at half-size and ended up with more detail than many attempt on full-sized prints of this same model.

<img src="/dms-source/files/embedded/SCIENCE/vapor-smoothing-chamber-for-abs-3d-prints/20241016_221108.jpg" draggable="false" height="250" /><img src="/dms-source/files/embedded/SCIENCE/vapor-smoothing-chamber-for-abs-3d-prints/20241016_221223.jpg" draggable="false" height="250" />

**Experimental Goals:**

1.  Devise optimized method for smoothing prints
2.  Design a small scale prototype test chamber (6 cubic inch capacity)
3.  Optimize the chamber using a combination of acetone sensors and microscope examination of prints
4.  Determine the smallest feature sizes that can be smoothed and generate test articles
5.  Scale up the design to match the size of a Bambu X1C build volume
6.  Provide a build guide and/or design files to assist other makers

**Experimental Approach:**

1.  New chamber design - create a chamber that accounts for the density of acetone vapor and has better temperature/pressure control (optional acetone recovery system)
2.  Test Solvent Blends - not everyone will have access to 100% acetone due to various restrictions
3.  Develop and use acetone chemoresistive sensors (potentially laser-induced-graphene based sensors)
4.  Cross-sectional microscopy using lapped edge-on samples.
