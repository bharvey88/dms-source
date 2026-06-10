---
title: "Portable CNC Cart"
description: "This project has been listed as inactive. If you are interested in taking over this project please contact one or more of the project's members for more in..."
sourceUrl: "https://dallasmakerspace.org/wiki/Portable_CNC_Cart"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Portable_CNC_Cart\">legacy DMS wiki</a> — content may be outdated."
---
**This project has been listed as inactive.**\
If you are interested in taking over this project please contact one or more of the project's members for more information.

## Important Note

This project is now defunct. The CNC Cart has been disassembled into its component parts.

## Concept

The concept behind the CNC cart is to put a lot of the expensive components behind any CNC project and put them into a portable cart that can be used to power any number of CNC machines. This will allow us build more tools for less money in a shorter amount of time. The first machine it will power is the Emco CNC mill. Design considerations that make this possible are the following:

The cart will use stepper drivers that are capable of driving stepper motors from .5A up to 7.8A. This means that it can power everything from a reprap to a 3,000lb Bridgeport milling machine. These stepper drivers also have the unique ability to set the current with a resistor on the stepper motor cable. This means that the act of plugging a machine into the cart will automatically set the correct current setting on the stepper drivers. Initially the system will support 3 axis to reduce costs, but it will be built to accommodate 6 axis in the future.

The control will be a PC powered by Linux and control software called EMC2. This highly configurable open source software can be made to power virtually any machine we can think of. An FPGA PCI card will provide 72 pins of IO, providing plenty of headroom for any application. Also this card will enable a much higher pulse rate, for machines with a high drive ratio; and a much smoother pulse stream to the stepper drivers to enable faster motor operation without lost steps.

A daughter card will provide optically isolated 24v IO for things like limit switches. This will make the system much more tolerant of components that create a lot of electrical noise like variable frequency drives for three phase spindles, or a plasma cutter.

Possible accessories include: a touch screen display, a hand held jogging pendant for manual operation, a touch probe, a built in VFD to drive three phase motors, a control panel with dedicated hardware buttons...

## Possible uses

- 8'x 4'CNC router
- Plasma cutter table
- Emco mill
- Shirline mill
- Bridgeport size milling machine
- Bench top CNC lathe
- Full size CNC lathe
- 2'x4' laser cutter
- 4 axis Hot wire foam cutter
- 6 axis robotic arm
- paintball sentry
- large format 3d printer
- CNC sewing machine
- CNC tube bender
- CNC press brake
- CNC knife table for cutting vinyl or fabric
- CNC camera boom
- Wire EDM
- Sinker edm
- pick and place machine

## Parts

- stepper drivers
  - [G201X](http://www.geckodrive.com/g201x-p-32.html) - 3-6 \* \$107
  - <http://www.kelinginc.net/GeckorDriver.html>
- stepper motor
  - KL23H284-35-4B - 3-6 \* \$49.00
  - 3.5a
  - 1 OHM
  - 4.1 mH
  - ~70v max
  - <http://www.kelinginc.net/NEMA23Motor.html>
- stepper cable
  - Wire 100\` 4c shielded 18ga Speaker Cable - \$50
- Stepper plug
  - 6x6 array of Anderson power poles
- limit cable
  - \$25
- machine IO plug
  - 50 Conductor Centronics, cn 50,scsi-1,micro ribbon, rj21,Amphenol, Telco
  - <http://www.weisd.com/store2/QVS/SCSI-1P.php>
  - <http://www.mouser.com/Interconnects/_/N-5g3y?Keyword=centronics+50p&FS=True>
  - female solder cup
    - <http://search.digikey.com/scripts/DkSearch/dksus.dll?Detail&name=1050FA-ND>
    - netsemi.com
    - 111-050-203L001
    - 110-050-103L001
  - <http://www.cabledepot.com/05CQPCN50.html>
  - IDC50
  - <http://www.fu-yao.com.tw/Centronic-I-D-C--Type-100-Pin-Male-with-.html?CID=1>
- stepper power supply 48-70V \>15A preferably unregulated linear
  - KL- 7220 Specification: \$189/pcs Unregulated Power Supply 1440W, 72VDC/20A ,120VAC or 230VAC 1-2 \$189
- limit power supply 24V ~\$15
- PC
  - Use what we have
- Interface Card
  - <http://www.mesanet.com/>
  - Option 1
    - 5i25 PCI Anything I/O - 40 I/O bits LX9 Spartan6 FPGA (dual parallel port format) \$89
    - 7I76 STEP/IO Step&dir plus I/O daughtercard \$119
      - The 7I76 is a step/dir oriented breakout with 5 axis of buffered step/dir outputs, one spindle encoder input, one isolated 0-10V analog spindle speed plus isolated direction and enable outputs, one RS-422 expansion port, 32 isolated 5-32V inputs and 16 isolated 5-32V 300 mA outputs.
  - <http://www.anderswallin.net/2006/08/optoisolator-cards-for-mesa-5i20-servocard/>
- touchscreen
  - Use what we have
  - <http://www.ebay.com/itm/Neuro-Logic-RF-19-S-USB-Touchscreen-LCD-Monitor-Rackmnt-/140606717382?pt=Computer_Monitors&hash=item20bcd03dc6#ht_3640wt_648>
- cart
  - <http://www.harborfreight.com/580-lb-capacity-four-drawer-roller-cart-95659.html> \$99-150
- VFD (Variable Frequency Drive) for Spindle motor on EMCO PC Mill
  - <http://www.ebay.com/itm/TELEMECANIQUE-Altivar-11-ATV11HU18F1U-Drive-VFD-NOS-/260845078955?pt=LH_DefaultDomain_0&hash=item3cbb9409ab#ht_500wt_898>
  - Start-up Guide: <http://dallasmakerspace.org/w/images/2/23/AC_Drive_Altivar_11_Start-Up_Guide.pdf>
  - User's Guide: <http://dallasmakerspace.org/w/images/5/53/AC_Drive_Altivar_11_User_Manual.pdf>

## EMC2

- 0xe800
- Step Time 500
- Step Space 4000
- Direction Hold 20000
- Steps on falling edge
- 24000 jitter
- 200 steps
- 10 microsteps
- 20:40
- 2mm pitch
- 25.mm/s
- 500mm/s/s

<!-- -->

-

## Existing EMCO PC Mill Retrofit

- <http://www.cnczone.com/forums/benchtop_machines/39868-emco_pc_mill_50_similar-9.html>
