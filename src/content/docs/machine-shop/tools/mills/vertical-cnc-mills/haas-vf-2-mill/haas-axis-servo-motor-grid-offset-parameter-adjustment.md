---
title: "HAAS Axis servo motor- grid offset parameter adjustment."
description: "Press the PARAM/DGNOS button. The title of the displayed page is PARAMETERS (ZERO RET). Then Page down EIGHT times and record parameters 125, 126 and 127, ..."
sourceUrl: "https://source.dallasmakerspace.org/pages/viewpage.action?pageId=26417249"
lastUpdated: 2022-08-20
---
<u>**Initial Steps:**</u>

Power up the HAAS.

Press the PARAM/DGNOS button.  The title of the displayed page is PARAMETERS (ZERO RET). Then Page down EIGHT times and record parameters 125, 126 and 127, being the X,Y and Z axis grid offset parameters respectively.

Press the MEM button . Press the PARAM/DGNOS button. The title of  the displayed page is PARAMETERS (MEM).  PRESS THE DOWN arrow to find parameters 5,19 and 33. These are the number of encoded STEPS/UNIT. for the X,Y and Z axes respectively. They are all the same currently but should a motor or ball screw be changed they may not be.

You now have all the information to prevent irrevocable harm.

<u>**The procedure..**</u>

Press the SETTINGS/GRAPH button  and page up twice.

Select parameter 7 PARAMETER LOCK. It should be ON. Press either the left or right arrow keys to change the display to OFF. Press write to save the change.

Find the parameter appropriate to the axis you want to set. enter 0 and WRITE to set it to zero.

Press ZERO RET. Select the axis that you want to zero and press ZERO SINGLE AXIS.

Press POSIT. Note the DIST TO GO numbers.

Subtract 0.118 from the appropriate value.

Multiply the result by the appropriate STEPS/UNIT value and note it.

Push the EMERGENCY STOP.

Enter the CALCULATED result above in the the appropriate parameter.

Release the EMERGENCY STOP and push RESET.

Push ZERO RET. Select the correct axis and push SINGLE.

Return to parameter 7 PARAMETER LOCK and ENSURE THAT IT IS  ON.

This procedure is required after replacing any of the following items:

1.   Any servo motor
2.  Any ball screw.
3.  Any proximity switch.

Or if either of the axes display an alarm indicating that its zero return margin is too large or too small.

<u>**NOTE:**</u>

After setting The Z axis parameter 64 Z-axis tool change offset must be adjusted.
