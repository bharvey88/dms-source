---
title: "Red Bull Creation 2013 - Midnight Invention"
description: "http://codeandlife.com/2012/07/01/raspberry-pi-serial-console-with-max3232cpe/"
sourceUrl: "https://dallasmakerspace.org/wiki/Red_Bull_Creation_2013_-_Midnight_Invention"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Red_Bull_Creation_2013_-_Midnight_Invention\">legacy DMS wiki</a> — content may be outdated."
---
## Equipment

## Logic Level Converter

- Low voltage side to [Raspberry Pi](#Pinout)
- High Voltage Side to [Relay Control Board](#Relay_Control_Board)

|            |                  |                   |            |
|------------|------------------|-------------------|------------|
| Wire Color | Low Voltage Side | High Voltage Side | Wire Color |
| Blue       | TX I             | TX O              | White      |
| Green      | RX O             | RX I              | Blue       |
| Blue       | LV (3.3 v)       | HV (12 v)         | White      |
| Green      | Gnd              | Gnd               | Brown      |

<http://codeandlife.com/2012/07/01/raspberry-pi-serial-console-with-max3232cpe/>

## Monitor

- Acer
  - Resolution: 900 x 1440
  - Ports (DVI, VGA)

## Arduino

### Connections

- D6 - white - fast spi to control the leds
- Vin - Orange
- Gnd - Blue

## Raspberry Pi

### Configuration

     sudo raspi-config

#### Autorun

from <http://www.slideshare.net/SeggySegaran/raspberry-pi-autostarting-a-python-program>

     cd /home/pi/.config
     mkdir autorun

create food_for_thought.desktop

     [Desktop Entry]
     Encoding=UTF-8
     Type=Application
     Name=Food For Thought
     Comment=
     Exec=sudo python /home/pi/food_for_thought.py
     StartupNotify=false
     Terminal=false
     Hidden=false

#### Packages

     sudo apt-get install python-dev

     wget https://pysqlite.googlecode.com/files/pysqlite-2.6.3.tar.gz
     gunzip pysqlite-2.6.3.tar.gz
     tar -xvf pysqlite-2.6.3.tar
     cd pysqlite-2.6.3
     python setup.py build

     sudo apt-get install apache2 php5 libapache2-mod-php5 php5-sqlite

     sudo apt-get install python-serial

     sudo apt-get install python-pygame

     sudo apt-get install arduino

#### Audio

    sudo amixer cset numid=3 1

#### Keyboard

`/etc/kbd/config`

    LEDS=+num

To see which keys are pressed

    xev

#### Serial

`/etc/inittab`

Free up the serial port so that we can talk through it. Comment out getty on ttyAMA0 like so:

     #T0:23:respawn:/sbin/getty -L ttyAMA0 115200 vt100

Add users to the dialout group for easy access.

     sudo usermod -a -G dialout greiter
     sudo usermod -a -G dialout owagner

#### Video

`/etc/config.txt`

    display_rotate=1

### Pinout

|  |  |  |  |  |  |  |
|----|----|----|----|----|----|----|
| Secondary | Purpose | Pin | Pin | Purpose | Secondary |  |
|  | 3.3v Power | 1 | 2 | 5v Power |  | White wire |
| SDA | GPIO 0 | 3 | 4 | 5v Power |  |  |
| SCL | GPIO 1 | 5 | 6 | Ground |  | Brown wire |
|  | GPIO 4 | 7 | 8 | GPIO 14 | TXD (RS232 Out) | [Blue (TX I)](#Logic_Level_Converter) |
|  | Ground | 9 | 10 | GPIO 15 | RXD (RS232 In) | [Green (RX O)](#Logic_Level_Converter) |
|  | GPIO 17 | 11 | 12 | CPIO 18 | PCM_CLK |  |
|  | PCM_DOUT | 13 | 14 | Ground |  |  |
|  | GPIO 22 | 15 | 16 | GPIO 23 |  |  |
|  | 3.3v Power | 17 | 18 | GPIO 24 |  |  |
| MOSI | GPIO 10 | 19 | 20 | Ground |  |  |
| MISO | GPIO 9 | 21 | 22 | GPIO 25 |  |  |
| SCLK | GPIO 11 | 23 | 24 | GPIO 8 | CE0 |  |
|  | Ground | 25 | 26 | GPIO 7 | CE1 |  |

### git

- <https://help.github.com/articles/set-up-git>
- <https://github.com/scorpioGusTx/food_for_thoughts.git>

#### Create a new repository on the command line

    touch README.md
    git init
    git add README.md
    git commit -m "first commit"
    git remote add origin https://github.com/scorpioGusTx/food_for_thoughts.git
    git push -u origin master

#### Add new files

    git add {filename}

#### Commit new changes

    git commit -m "first commit"
    git push -u origin master

#### get a copy

    git clone https://github.com/scorpioGusTx/food_for_thoughts.git

### Python

### sqlite

### User Listing

- greiter
- owagner

## Relay Control Board

- protocol for interfacing with the relay control board.
  - <http://www.controlanything.com/Relay/Device/XR2410&Category_Code=XR&CpField=relays&CpValue=24>
  - download the product manual .pdf
- Connector

|  |  |  |
|----|----|----|
| Label | DB 9 RS232 | [Level Converter](#Logic_Level_Converter) |
| +12 V (Relay Power) | n/a | n/a |
| Ground (Relay Power) | n/a | n/a |
| Data Ground | (Gnd) 5 - Blue | Ground on Power |
| Data In | (TX) 3 - Brown | [White](#Logic_Level_Converter) |
| Data Out | (RX) 2 - Red | [Blue](#Logic_Level_Converter) |

## Source Code

<https://github.com/scorpioGusTx/food_for_thoughts>

## To Do

## Meta Goals

### Soon

- perhaps integrate sounds with gameplay

### Long Term

- Source for questions in the machine, <http://nces.ed.gov/nationsreportcard/itmrlsx/search.aspx?subject=science>
- UI Graphics
  - images with questions
  - text size
  - credits page after the quiz is over
- Tweet My Win
- Data Logging
  - Which answers were selected
    - Answer id
    - timedate
  - The Quiz is over
    - Timedate
    - Win / Loose
    - Level
    - Answer id

## System Administration

- setup a github repository for the source code ?
- perhaps make it a wifi hotspot to facilitate changing the questions

## Programming and hardware interfacing

- (gus) update the individually addressable led lighting to reflect the current state of the game.
  - (gus) count up as the number of correct answers accumulate.
- get the Arduino to monitor the current used when turning the motor to see when it reaches "home\*
  - The Raspberry Pi would query the Arduino to know when to stop the motor, with a timeout.
  - measure the voltage across the a 1 ohm power resister, or shunt to see when it drops for a sec.
- LED Modes
  - Risk or cash out (shows bargraph)
  - Dispense
  - Won all 7 questions - rainbow win

## Electronics

- consider replacing the network cable wire with something more flexible ?
- consider using the power cable which is attached to the bottom of the vending machine to power the power strip(s) in the vending machine instead of using the trap door in the back of the vending machine.
- sus out how to control the two right most columns of the bottom row of the dispenser.
- replace the serially controlled relay board with a custom board.
- logic level converter:
  Pins are labeled as Inputs and Outputs. These are relative to the board. A digital one going into the RXI pin on the 5V side will show up on the RXO pin on the 3.3V side as 3.3V. A digital one going into the TXI pin on the 3.3V side will show up on the TXO pin on the 5V side as 5V.
  on the pi: tx - output, rx - input

## Fabrication

- Aaron Whitaker has volunteered to redo the outsides to make it pretty

## Progress

## 2013 May 7

Programming

- updated the code to not crash when you get all of the answers correct.
- the logic to spin the first column of the appropriate row is correct and tested.
- I made the mouse pointer go away.

## 2013 May 8

Fabrication

- re-attach the power supply to the plastic board using wire and drilling a couple of holes.
- re-attach the power cord from the pc power supply to the Arduino. We now have the individually addressable leds doing the demo pattern again.
- re-run the cables between the door, the laptop, the Arduino, etc.
- pop the trap door in the back of the machine so that all cables now go through it instead of the front door.
- re-attached the currently white rgb led strip on the top of the inside of the door with duct tape. It could probably use a more permanent method of attachment.

## 2013 May 15

The Raspberry Pi is in the vending machine now and running the quiz quite nicely. A few notes:

Otto's USB hub is in there connecting the Raspberry Pi to:

- the buttons for the front panel
- the Serial port for the relay board
- the keyboard so that we can program it while it is in the vending machine. Feel free to use the small keyboard which is in the classroom.

Also, there is a small network switch in the vending machine. Feel free to connect your laptop to it to program if you like. If you do, you may want to run the following commands so that you have internet access over the wifi: sudo route -v add default gw 192.168.1.1 sudo route del default gw 192.168.93.254 This does expect that you have hard wired your laptop's wired ethernet connection to ip address to 192.168.93.3 or something. Note that the pi's ip address is hard wired to 192.168.93.76.

## 2013 Jun 5

I am just letting you all know that I have made some progress on Food for Thought today. I have it randomly choosing questions, first level 1, then level 2, etc. The answers are also return randomly just for fun. The questions are now coming from the a sqlite database.

You can actually web browse into a set of ugly but (mostly) functional web pages which the pi is current serving. You can add and delete questions, but not update them. In order to see this web page, you will need to:

1.  plug a laptop into the switch which is currently in the vending machine (the purple network cord is the easiest to see)
2.  change your ip address to be 192.168.93.x, where 1 can any number between 1 and 255, except for the ip address in the next line
3.  point your web browser at 192.168.93.76.

## 2013 Jun 12

I am just letting you all know that the LED strips now reflect game play. The timing could probably be adjusted but the core functionality is there.

Also, the IP address has changed to 192.168.1.9 so that it can be integrated into the dms network with Robert's help. People will be able to add and remove the questions by pointing their web browser at the vending machine.

## 2013 Jun 18

Today I put the vending machine on the network, its ip address is 192.168.1.9. Feel free to point your web browser there to edit the questions. Also, I updated the very primitive web pages to be be able to modify as well add and delete questions.

## 2013 Sept 23

I finally got this sucker powered up again, the power cable to the Raspberry Pi to the headers had broken off, so I just installed a usb power supply. Now that my Linear Algebra class is over, and I have had my break, I can get this rolling again.

## 2013 Nov 15

Finally, now demo-able. I have:

- removed the usb keypad since the top button stopped functioning, and have moved the button processing onto the Arduino.
- created a table which keeps track of which dispensers are utilized for which level, and (kinda) which to spin up next.

Had a good day showing it at Tanner Electronics today.

Aaron Whitaker has volunteered to redo the outsides to make it pretty.
