---
title: "Single Spool Holder"
description: "What Filaments must only be utilized in the single spool setup?"
sourceUrl: "https://source.dallasmakerspace.org/display/3DFAB/Single+Spool+Holder"
lastUpdated: 2025-09-04
---
## This page is for outlining the use cases and a how to guide for adding your filament to the side single spool holder.

## **Prerequisites / FAQ:**

- You must have completed the in person Bambu in person training.

- What Filaments must only be utilized in the single spool setup?

  - The single spool printer must be utilized if you are printing using a filament that is **too soft, too brittle, or too hard and rough filaments.** Too soft filaments include TPU 95A, TPU 85A, TPU 83A, TPU 80A, **damp PVA or BVOH**, etc., which are difficult to pass through the AMS and can easily cause loading and unloading failures, clogging, and other issues. Some brands of PET-CF, PLA Wood, PA-CF/GF, PAHT-CF/GF, and other filaments are too brittle and prone to break in the AMS.  If you are using any of these or are unsure what filaments are required please reach out on Talk / Discord.

- Are there any filaments that DMS Does not allow printing regardless if authorized by Bambu for single spool printing?
  - Will be providing guidance on this in the future. However it is best to ask in Talk or Discord if your non-standard (not ABS, PETG, PLA, etc.) is approved to be printed in the machines.

- How are we able to use both the single spool and AMS?
  - We have included an adapter in the back of the machine which allows tubing to be setup from the AMS and our side spool holder and feed it into the machine.  It is imperative that with this adapter that no filament is left in the AMS or Side Spool Holder when they are not in use.  See troubleshooting for what could happen if filament left in the machine and AMS is loaded.

\*\*\*Note with recent firmware updates the screens are slightly different than the photos. However overall same process.



## **Loading Process**

- Remove any old prints, clean bed etc. as per normal Bambu operation and 3DFab rules.
- Remove / Verify no other filaments are loaded in the AMS or on the spool holder.
  - <img src="/dms-source/files/embedded/3DFAB/single-spool-holder/IMG_20250819_202814_257.jpg" draggable="false" height="250" />
- Place filament onto the holder with  counter clockwise "filament should be straight from top of roll to PTFE Tube.
  - <img src="/dms-source/files/embedded/3DFAB/single-spool-holder/Loaded_Spool_Example1.jpg" draggable="false" height="250" />
- Feed filament into the PTFE Tube. Note push all they way through to the extruder.
  - The Bambu screen will show a line from the single spool icon to the extruder head when the sensor detects the filament.
  - <img src="/dms-source/files/embedded/3DFAB/single-spool-holder/IMG_20250819_202922_754.jpg" draggable="false" height="250" />
- Set the spool holder filament type and color at the machine.
  - Click load button and monitor the extruder for filament extrusion into poop bucket.
  - <img src="/dms-source/files/embedded/3DFAB/single-spool-holder/IMG_20250819_203148_423.jpg" draggable="false" height="250" />
  - If prompted confirm that you saw filament extruded "Note this could be residual old filament".
  - Let the load process complete the purge.
- Put your name and number on the whiteboard.
- Now you are setup at the printer.

## **Printing from Bambu Studios**

- Prepare your print as per normal 3D Fab Bambu training.

- When sending to the Printer ensure that you select the external filament.

## **Unloading Filament**

- On the filament screen select the single spool and click the unload button and wait for prompt.

  - <img src="/dms-source/files/embedded/3DFAB/single-spool-holder/IMG_20250819_203148_423.jpg" draggable="false" height="250" />

-
  - <img src="/dms-source/files/embedded/3DFAB/single-spool-holder/IMG_20250819_203159_859.jpg" draggable="false" height="250" />

-
  - <img src="/dms-source/files/embedded/3DFAB/single-spool-holder/IMG_20250819_203218_741.jpg" draggable="false" height="250" />

<!-- -->

- When prompted roll your filament all the way out of the machine and tube and remove your filament from the holder.
  - The line on the filament screen from holder to Extruder is no longer solid.
- On Filament setting screen click the edit icon and press reset. This will remove your filament details and replace with a question mark.

## **Troubleshooting / Issues when not all filament is removed.**

- I am seeing this error "Unable to feed filament into the extruder. This could be due to entangled filament or a stuck spool. If not please check if the AMS PTFE Tube is connected."
  - <img src="/dms-source/files/embedded/3DFAB/single-spool-holder/Troubleshooting_Stuck_Filament.jpg" draggable="false" height="250" />
  - This can be caused by one of the following.
    - You did not confirm that the side spool holder was empty and tried to feed filament in from the AMS.  Unload the AMS Filament and follow the above steps to completely remove the filament loaded from the single spool.
    - Your filament spool is tangled.  Unload and check your spool if it is tangled then reload.
    - Yours or prior filament used was brittle and broken off in the tube.  If above does not resolve than this is likely the case. Open a ticket and a maintenance person will properly remove the broken filament.
