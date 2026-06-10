---
title: "Near Space Balloon"
description: "NOTE: This is the old project. Please see the new HAB project. DMS High Altitude Balloon"
sourceUrl: "https://dallasmakerspace.org/wiki/Near_Space_Balloon"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Near_Space_Balloon\">legacy DMS wiki</a> — content may be outdated."
---
NOTE: This is the old project. Please see the new HAB project. [DMS High Altitude Balloon](/dms-source/archive/aerospace/dms-high-altitude-balloon/)

High altitude balloons are unmanned balloons, usually filled with helium or hydrogen that are released into the stratosphere, generally reaching between 60,000 to 120,000 feet (18 to 37 km).<sup>[\[1\]](#cite_note-1)</sup>

## Status

This project is currently in the design phase. See the [Near Space Balloon](http://dallasmakerspace.org/forums/viewtopic.php?f=5&t=2) thread on our forums to get involved with the design process.

## Things We Need

- People with HAM radio experience.
- People willing to help build and test various modules.
- People who will help with launch and recovery (lots of driving involved).
- Someone to take photos and video to document the project.


- The DPRG has several HAMs, including Jeff Koenig and Kipton Moravec. In addition, the Dallas User Friendly group, dfwufies.org has several like minded folks that are quite involved in HAM and telemetry broadcast etc. Once we have the project a little more firm, we can reach out to folks like Melissa Rasmussen and Patrick St. Jean.

## Active Members

- Leland Flynn
- Andrew LeCody
- Bryan Smith
- Mike Eber

## Goals

- Take pictures, at least once per second from at least one camera
- Record position, including altitude
- Some way to recover the electronics package after it has landed
- Stay within a budget of \$300

## Secondary Goals

- Take video
- Record atmospheric conditions such as temperature, humidity, pressure, acceleration, magnetic field strength, and ionizing radiation (using a Geiger Counter).
- Broadcast some or all data in real-time

## Challenges

- Temperature: As low as -50C
- Pressure: Near 0mbar (almost vacuum!)
- Legal: We need to meet the FAA regulations
- Recovery

## Design

There are the three main segments, connected by a cord:

- Balloon
- Parachute
- Electronics package

## Balloon

Details on the balloon and cord will go here.

## Parachute

Details on the parachute will go here.

## Electronics Package

### Telemetry Module

#### High Altitude Sensing Board

- Supplier: [SparkFun](http://www.sparkfun.com/products/9944)
- Price: \$100
- Datasheet: None
- Schematic: <http://www.sparkfun.com/datasheets/Sensors/HAS-v13.pdf>
- Original source code: <http://www.sparkfun.com/tutorial/High-Altitude-Balloon/balloon-project-v10.zip>
- Our source code: <https://github.com/aceat64/Near-Space-Balloon/tree/master/sensor_board>

We've modified the source code slightly, so that the sensor board outputs the current UTC time from the GPS receiver. The vanilla firmware only uses the number of miliseconds since activation for timing information. We felt that grabbing the UTC time from the GPS was a better way to match readings to the actual time.

Also of note, it appears that the firmware the sensor board ships with is different that the source code Sparkfun has posted. The shipped firmware would show a menu for a few seconds and then start outputting telemetry in a loop. The source code Sparkfun posted has the menu being displayed with each telemetry burst. Our modified code removes the menu entirely (we didn't need it).

##### Serial Output

Baud rate is 9600 8N1, TTL voltage. First we'll get 9 lines of accelerometer and magnetometer readings. Then we'll get a 10th line with everything. Each burst starts with a hash ('#') and ends with an asterisk ('\*'), all fields are comma delimited. If you see "complete timed out" messages, that means that the external temperature sensor is not communicating with the board.

Example:

    #,12,249,73,136,350,-325
    #,14,254,73,124,356,-342
    #,10,250,90,133,356,-332
    #,13,251,73,124,350,-329
    #,15,245,86,126,350,-338
    #,13,250,78,132,352,-333
    #,12,247,82,127,354,-335
    #,9,250,81,127,356,-343
    #,13,255,72,135,355,-323
    #,12,249,81,131,348,-336,159260,173205,096.8730,32.8177,138,9,2,25,25,39,0,258,100155,*

When the board can not connect to the GPS the following is shown on the last line:

    #,20,266,-5,-376,500,32,376382,1!000000,000.0000,00.0000,0,99,0,25,25,57,0,252,97843,*

I compiled this info from the source code:

- \# - Start of line
- accel_x
- accel_y
- accel_z
- mag_x
- mag_y
- mag_z
- millis_passed - Number of miliseconds since activation
- utc_time - Current UTC time, this field not present with the vanilla firmware
- long_h.long_l
- lat_h.lat_l
- altitude - Meters
- siv - **S**atellites **I**n **V**iew
- fix - 0 = Invalid, 1 = GPS fix, 2 = DGPS fix, \>2 Unknown
- temp_internal - Celsius
- temp_external - Celsius
- humidity_level - What unit of measure is this?
- batt_lvl - How do we convert this to volts?
- temperature (from the pressure sensor) - Why is this so high?
- pressure - What unit of measure is this?
- \* - End of line

##### Radio Output

Baud rate is 9600 8N1, I think at TTL voltage.

We have modified the firmware to output telemetry in a different format than the factory firmware. We have also added a number of additional data fields.

Example (this is without a GPS connected):

    #,000000,000.0000,00.0000,0,99,0,25,24,0,100091,*

Example (with GPS):

    #,170749,096.8730,32.8176,153,57,69,25,24,0,100106,*

Data fields:

- utc_time - Current UTC time, this field not present with the vanilla firmware
- long_h.long_l
- lat_h.lat_l
- altitude - Meters
- siv - **S**atellites **I**n **V**iew
- fix - 0 = Invalid, 1 = GPS fix, 2 = DGPS fix, \>2 Unknown
- temp_internal - Celsius
- temp_external - Celsius
- batt_lvl - How do we convert this to volts?
- pressure - What unit of measure is this?

#### LS20031 GPS

- Supplier: [Pololu](http://www.pololu.com/catalog/product/1249)
- Price: \$50
- Datasheet: <http://www.pololu.com/file/0J286/LS20030~3_datasheet_v1.2.pdf> (mostly useless and wrong)
- Schematic: None

Don't let the datasheet fool you, the GPS defaulted to a baud rate of 57600 8N1 and not the 9600 8N1 that the datasheet claims. To get the GPS module setup to work with our sensor board the following PMTK commands need to be sent.

Turn off everything except GPGGA:

    $PMTK314,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0*29

Set the baud rate to 9600:

    $PMTK251,9600*17

After much trial and error I realized that the GPS requires both CR and LF line termination. If you are trying to configure the GPS from Linux you will need to use the following commands:

    echo -e '$PMTK314,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0*29\r' > /dev/ttyUSB0
    echo -e '$PMTK251,9600*17\r' > /dev/ttyUSB0

When connecting the LS20031 to our sensor board I discovered that the TX/RX pins need to be swapped on the connector. Since both the sensor board and the GPS use the following pin out:

1.  GND or not connected
2.  GND
3.  TX
4.  RX
5.  Vcc

Just be sure to read the datasheets and make sure that GPS_DOUT on the sensor board is connected to TX on the GPS.

For additional information, see the [LS20031 GPS](/dms-source/archive/electronics/ls20031-gps/) page in this wiki.

#### TMP102 External Temperature Sensor

- Supplier: [SparkFun](http://www.sparkfun.com/products/9418)
- Price: \$6
- Datasheet: <http://www.sparkfun.com/datasheets/Sensors/Temperature/tmp102.pdf>
- Schematic: <http://www.sparkfun.com/datasheets/Sensors/Temperature/TMP102_Breakout-v11.pdf>

Be sure to tie ADD0 to ground, since this is how the sensor determines what I2C address to use. If you don't tie ADD0 to ground the sensor will appear to work, but if you touch it or breathe on it weird things happen. This is probably due to the fact that ADD0 is floating, so touching the board causes ADD0 to jump around randomly.

#### OpenLog Data Recorder

- Supplier: [SparkFun](http://www.sparkfun.com/products/9530)
- Price: \$25
- Datasheet: <https://github.com/nseidle/OpenLog/wiki/Datasheet>
- Schematic: <http://www.sparkfun.com/datasheets/DevTools/Arduino/OpenLog-v11.pdf>

We took a female 6-pin header, bent the pins about 90 degrees and soldered them to the OpenLog. Be sure to do this with the SD card slot and header on the bottom.

#### Radio

[APRS](/dms-source/archive/inactive-projects/aprs/)\

We are looking for a sub-\$100 2-meter "handie talkie" that has at least 2 watts transmission power. It should have microphone/headphone connections and ability to operate periodically for 12+ hours on a single charge. Hooking the radio up to our Arduino/RadioShield combination should allow us bi-directional communication with the balloon during its entire flight.

### Imaging Module

Information on the cameras used will go here.

### Recovery Module

Information on the backup recovery method (cell phone) will go here.

## Resources

- [Landing Prediction](http://habhub.org/predict/)
- [HobbySpace.com](http://www.hobbyspace.com/NearSpace/index.html)
- [American Radio Relay League](http://www.arrl.org/)
- [Edge Of Space Sciences: Ham Ballooning FAQ](http://www.eoss.org/pubs/faqloon.htm)
- [Makezine Weather Balloons](http://makezine.com/24/weatherballoons/)
- [Parallax Near Space Book](http://www.parallax.com/tabid/567/Default.aspx)
- [EOSS: FAA Liaison](http://www.eoss.org/faq/faa_liaison.htm)
- [Citizen Scientist: Poorman's Space Program](http://www.sas.org/tcs/weeklyIssues_2007/2007-10-05/project1/index.html)
- [Federal Aviation Regulation FAR 101](http://www.parallax.com/Portals/0/Downloads/docs/cusapps/NearSpaceCh14-v1.0.pdf.pdf) (PDF)
- [FAA Regulations for Kites/Balloons](http://www.chem.hawaii.edu/uham/part101.html)

## Other Launches

- [1337arts: Project Icarus](http://space.1337arts.com/)
- [HALO: Helium Balloon Mission to Near-Space](http://www.natrium42.com/halo/flight2/)
- [Arizona Near Space Research](http://blog.makezine.com/archive/2010/04/ansr_near_space_balloon_launch.html)

## References

1.  <span id="cite_note-1">[↑](#cite_ref-1) <http://en.wikipedia.org/wiki/High-altitude_balloon></span>
