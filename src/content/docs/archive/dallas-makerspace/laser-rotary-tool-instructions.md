---
title: "Laser Rotary Tool Instructions"
description: "DMS Wiki is being migrated to source.dallasmakerspace.org Please go see the content on Source."
sourceUrl: "https://dallasmakerspace.org/wiki/Laser_Rotary_Tool_Instructions"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Laser_Rotary_Tool_Instructions\">legacy DMS wiki</a> — content may be outdated."
---
**DMS Wiki is being migrated to [source.dallasmakerspace.org](https://source.dallasmakerspace.org/)**\
Please go see the content on Source.

Link: <https://source.dallasmakerspace.org/display/LASER/Thunder+Laser+Rotary+Tool>

## Using the rotary attachment for the Thunder Laser

The rotary unit will work on all three Thunder lasers (63 an 35s)

The rotary unit should be stored on a shelf beneath "Donner"'s computer desk. There is also a tool box around (black with a yellow top) that has the chuck key and other accessories (see storage shelf beneath work table by overhead door).

To attach the unit, **lower the bed far enough so that there is no chance that the head will hit the rotary unit**. Place the unit with chuck and stepper motor on the right side of the laser bed and parallel to the front panel. (picture 1)

<img src="/dms-source/files/mw/thumb_1_10_Rotary_pic1.jpg_400px-Rotary_pic1.jpg" width="400" height="301" alt="Rotary pic1.jpg" />\
*Picture 1. Rotary Attachment placement*

Plug the unit into the socket along the right side (next to a switch) (picture 2). The plug is keyed so you can't plug it in wrong. Flipping the switch turns off the y-axis on the laser main rail. The y-axis will now be around the circumference of the object to be engraved and the main rail can be gently manually moved with your hand.

<img src="/dms-source/files/mw/thumb_1_1c_Rotary_pic2.jpg_400px-Rotary_pic2.jpg" width="400" height="301" alt="Rotary pic2.jpg" />\
*Picture 2. Rotary attachment switch location inside Thunder laser*

Again, **make sure the table is low enough to prevent a head crash**. Press Reset on the front panel. It will take a bit longer than normal to reset because there is no stop on the rotary attachment.

In the RDWorks software there is a box to check to make the output look right. It's in the "Output" tab on the upper right. Check "Enable Rotary Engrave". "Circle pulse" should always be set to 16000 and enter the diameter of your workpiece in millimeters.

<img src="/dms-source/files/mw/c_cb_Rotary_pic3.jpg" width="288" height="383" alt="Rotary pic3.jpg" />\
*Picture 3. Rotary engraving output selection options*

Download your image to the laser. The right side of your drawing will be closest to the chuck.

Put the object to be etched/cut in the chuck and be sure to remove the chuck key. The tail stock is held in place with a bolt with a 5mm head. Move the main rail to the center of your object with your hand using the red dot as a guide (keep the table low). Depending on the object you’re using, you may need to shim up one end or the other of the unit so that the top surface of the object is level (see far left of picture 1). Press and hold the y-axis button to make sure your object is rotating evenly. Run a “Frame” on your image and ensure that the laser head or autofocus unit will not hit any part of the rotary unit. Now raise the table and focus the lens as usual. If there is a high spot on your object focus on that point so that the lens can't hit your object. Close the door and press run.

When you are done, **flip the switch back**, disconnect the unit from the laser and put it and the tool box back on the shelf. Make sure you **uncheck "Enable Rotary Engrave"**. If you leave it checked it will really foul up the next person to use the laser.

### Notes

1\) Holding objects in place can be a challenge. The chuck has two sets of jaws The jaws and the chuck are numbered and they are not reversible. There is a circle of wood with a piece of foam attached that can be used on the tail stock. There is no force on the object so it does not take much to hold it in place. If you are going to do a bunch of a given sized objects, it might make sense to make a custom holder.

2\) There is a string level in the tool box.

3\) Ensure that the laser is set to engrave longitudinally along the X-axis, with only slight indexing movements in the Y direction. Select X-Swing from the Parameter Library dialog. Unilaterism fires in one direction then returns. Swing fires in both directions, on the pass and on the return. In theory this cuts time in half.

<img src="/dms-source/files/mw/thumb_6_60_Rotary_pic4.jpg_300px-Rotary_pic4.jpg" width="300" height="525" alt="Rotary pic4.jpg" />\
*Picture 4. Layer parameter selection for direction of engraving*
