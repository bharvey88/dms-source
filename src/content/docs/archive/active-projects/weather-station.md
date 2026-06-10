---
title: "Weather Station"
description: "Our goal for this project is to install a weather station at DMS and primarily focused on proof of concept. We will be using the OurWeather Kit from switch..."
sourceUrl: "https://dallasmakerspace.org/wiki/Weather_Station"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Weather_Station\">legacy DMS wiki</a> — content may be outdated."
---
## Project Scope

Our goal for this project is to install a weather station at DMS and primarily focused on proof of concept. We will be using the OurWeather Kit from switchdoclabs as our prototype. It's expected that the station will last a year before developing a more advance model. The following documentation will detail our design and implementation process.

## Requirements

- Design a setup where current and future sensors can be installed
- Data:
  - Display temperature readings on Dallas Makerspace Website
  - Wunderground.com
- Implement APRS

## Tools

**Language:** Python, Github\
**Communication:**Email, [Build Log](https://talk.dallasmakerspace.org/t/dms-weather-project-build-log/16179)\
**Build Days:** A room will be reserved each week to work on your part of the project. Thursdays, 7 p.m. - 9 p.m. Starting Jan 19, 2017\

## Obstacles

**Problem:**Heat reflecting from the roof can cause inaccurate temperature readings.\
**Solution:**Build housing for temp/humidity sensor and raise 5 ft. above roof.

**Problem:**We can't drill holes in the roof. Follow HAM radio's example\
**Solution:**Follow HAM Radio's example

**Problem:**Must have a power source and connect to the internet.\
**Solution:**We will use Solar Power but will research outdoor Cat5e as an option. Ourweatherplus board has esp8266. Will request a separate network for station called DMSWEATHER for reliable connection.

**Problem:**Parts must withstand heat, wind and rain exposure over long periods of time (1 year).\
**Solution:**Possibly coat electronic box with polyurethane.

## Schedule

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<tbody>
<tr>
<th scope="col">Task</th>
<th scope="col">Description</th>
<th scope="col">Due Date</th>
</tr>
&#10;<tr>
<td>Set-up</td>
<td>Initialize software and build kit</td>
<td>Jan 9th</td>
</tr>
<tr>
<td>Software Implementation</td>
<td>Setup our own database;<br />
&#10;<p>APRS;<br />
WeatherUnderground;<br />
DMS Main Website<br />
</p></td>
<td>Jan 26th</td>
</tr>
<tr>
<td>Design &amp; Build Station Base and Electronic Housing</td>
<td>Weather station base and electronic housing built with the intention of withstanding severe weather conditions</td>
<td>Feb 2nd</td>
</tr>
<tr>
<td>Power Source</td>
<td>Primary choic is solar panelling;<br />
&#10;<p>Run test up to Due Date to prove proof of concept;<br />
Research using outdoor Cat5e as a backup plan<br />
</p></td>
<td>Feb 11th</td>
</tr>
<tr>
<td>Finished Product</td>
<td>Bring materials up to roof for final install</td>
<td>Feb 16th</td>
</tr>
</tbody>
</table>

## Bill of Materials - Weather Station and Sensors

|                      |       |          |
|----------------------|-------|----------|
| Item                 | Count | Price    |
| OurWeather Kit       | 1     | \$149.00 |
| PoE Splitter         | 1     | \$9.45   |
| Raspberry Pi 3       | 1     | \$39.95  |
| Return Shipping Cost | 1     | \$6.15   |
| **Total:**           |       | \$204.55 |

## Bill of Materials - Antenna base/mast

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| Item | Quantity | Unit Price | Extended Price | Acquired | Source |
| Homer Bucket | 1 | \$2.97 | \$2.97 | Yes | [Home Depot](http://www.homedepot.com/b/Lumber-Composites-Pressure-Treated-Lumber/N-5yc1vZc3sr/Ntk-Extended/Ntt-2x4?Ntx=mode+matchpartialmax&NCNI-5) |
| 80 lbs Quickcrete | 1 | \$3.97 | \$3.97 | Yes | [Home Depot](http://www.homedepot.com/p/Quikrete-80-lb-Concrete-Mix-110180/100318511) |
| 8' Pressure Treated 2x4 | 2 | \$3.37 | \$6.74 | Yes | [Home Depot](http://www.homedepot.com/b/Lumber-Composites-Pressure-Treated-Lumber/N-5yc1vZc3sr/Ntk-Extended/Ntt-2x4?Ntx=mode+matchpartialmax&NCNI-5) |
| bolts, nuts, fender washers (lbs) | 1 lb bulk | \$3.12 | \$3.12 | Yes | [Tractor Supply bulk nuts and bolts](http://www.tractorsupply.com) |
| Waterproof Plastic Case (Pelican Case Style) | 1 | \$10.00 | \$10.00 | Yes | [Tractor Supply](http://www.tractorsupply.com) |
| 2" x 10' PVC pipe for mast | 1 | \$0.00 | \$0.00 | Yes | Donated |
| hardware to attach Box to mast | pieces from HD | \$1.12 | \$1.12 | Yes | \[<http://www.homedepot.com> |
| Total |  |  | \$27.92 |  |  |
| Tax (8.25%) |  |  | \$2.30 |  |  |
| Total |  |  | \$30.22 |  |  |

## Meetings

We'll meet every Thursdays from 7 p.m. - 9 p.m., starting Jan 19, 2017

    20170109: We currently have a weather station kit and a raspberry pi to begin our install. We will put the kit together, run the given software, and discuss the changes that will be made to fit our needs. Dwight's suggested using a solar panel to power the station, as well as suggested using an outdoor cat5e. However the outdoor cat5e may be susceptible to a lightning strike. We will need more information just in case we decide to switch back to hard wiring. Established the final project plan as stated above. Mike and David will design and build the station base and electronic housing. Dwight will develop database and aprs configuration. Mike and Andrew put the kit together and used DMS Guest network to begin software configuration. Tried using DMS Member but kept getting kicked. Andrew suggest a possible DMSWeather network as solution. Next Meeting Jan 19, 2017 7 p.m. - 9 p.m. check calendar for location

    --------------------------------------------------------------------------------------------------

    20170119:We went on the roof and tested our station's wifi connection. Because we were connected to DMS Member we were still unable to connect. We then reconfigured it to DMS Guest thanks to @HankCowdog and @Gimli and were able to have a stable wifi connnection that displayed sensor data. At the time we only had the humidity, temperature and pressure connected to the board. The pressure may be off because we set it at ground level height.

    Goals:
    1.[] Order solar power battery - We did a risk analysis and decided it was better to run Cat5e to the roof. Although using solar would be neat it may not be efficient for our current and future needs.
    2. [X]Develop a materials list for the station base
    3. [X]Design station base
    4. [X]Report on outside Cat5e wiring
       -Will us HAM radio's example
       -Materials
        [X]Outdoor-rated UV Cat5e cable 300ft. - 1000 ft. get cable length estimate from HAM radio
        [ ]Seal Caulk
        [X]Cable Lubricant
        [X]Ubiquiti ethernet surge protector
        [X]Buck converter
    5. [ ]Database
    6. []Test sending temperature information to DMS website
    7. [X]Setup DMSWeather Network - Connect to DMS Guest
    8. [X] Test current - Thanks to @Gimli; @brianbterry will be doing another test this coming week.

    --------------------------------------------------------------------------------------------------

    20170126:

    Goals:
    1. [X] Build station base
    2. [X] Ask HAM radio wire length
    3. [X] Build a materials list for wiring install
    4. [ ] Database configuration
    5. [ ] Figure out how to haul station base to the roof.
    6. [ ] Make a final decision on where to place the station base.

    -If a database isn't decided upon by Sunday afternoon, we will go with MariaDb/Mysql
    -Figure out how to haul the station base on the roof - We need rope and some hands to make this work. This may be an adhoc plan.
    -Make a final decision on where to place the station base - Until we revisit the roof again we will not be able to make this decision
    -Wiring - Brooks will be here Sunday(1/29) 2 p.m. to begin install the wiring. @bscharff if you won't be able to do it let us know so we can help you in any way that seems feasible.
    -Turn in receipts - please turn in your receipts to me for reimbursement.

    --------------------------------------------------------------------------------------------------
    20170129
    Goals:
    [X] Have database up and running
    [X] Register Station at Wunderground.com - thanks @LisaSelk
    [X] Decide upon a location
    [X] Begin shooting Instructional video - This video will detail how we put Ourweather kit together the nuances and the nuances we found.
    [X]Hoist the weather station onto the roof - @HankCowdog, Ret, @gimli, Patrick, @sciborg, I'm sorry I forgot your name but I remember your face...
    [X] Run Cat5e cable to the roof - @Gimli,@bscharff
    [X] Connect to DMS Member - @bscharff,@HankCowdog
    [X] Install a database ---> MariaDB/SQL - @bscharff

    However this time around while on the roof we were able to connect to network. We were able to in previous runs but for some reason couldn't do so sunday. @HankCowdog suggested options that we could possibly try:

    1. Adjust a wifi antenna so that part of its field of strength could point towards the roof, just to test if we have a signal strength problem.
    2. Installing a PoE wifi card next to our controller board to increase the signal
    3. Take out our board completely and use a raspberry pi and let go of the wifi and use ehternet. There are some complications with using a raspberry pi and should be addressed before those issues arises.
    Last night I spoke with Britton about our issue and he was able to find a sensor breakout board for the Raspberry Pi on switchdocs website.

    --------------------------------------------------------------------------------------------------
    20170202

    Last night we tried orienting the board's antenna facing towards the roof and still had difficulty receiving a signal. Three weeks ago we were able to connect to the wifi but are unable to do so now. We are trying to find the factor that changed since then. Some suggestions included:

    Code the ESP8266 module to have more power
    Add an outside antenna to the board.
    A decision will be made this Sunday (2/5) on how we should proceed. Thank you Thomas for lending your IT expertise to our group! It was much appreciated. I would tag you but there's like 10 other Thomas'...

    --------------------------------------------------------------------------------------------------
    20170209

    Goals
    [X] Configure Weewx and Weatherunderground
    [X] Figure out the cause of the no POE
    [X] Install remaining sensor drivers
    [] Look into pushing some of our data into APRS
    [] Documentation

    20170206

    The ethernet link problems bypassed with the ETH‑SP4 installed on the roof. (PoE worked and the link light was on, but no DHCP, so substituting a plain rj45 coupler in place made it work; can ssh to it.

    [] The python code for the wind direction sensor1 functions, but needs to be rewritten

    Weewx is running on the Pi with a custom Weewx driver1 receiving data from a separate python script1 which is reading data from the sensors using various available libraries.

    As long as the ethernet is plugged in, there's a web page accessible from onsite at http://192.168.201.194/1 displaying current weather conditions and historical charts.

    [X] Fix the humidity and temperature drop out during higher temperatures (Now switched to 5V.)
    [X] Fix the wind direction

    20170309
    Surge protection is still bypassed.
    []The pull from the breeze is tripping the rain sensor. Each time it moves far enough to trip its sensor is equivalent to ~0.3mm of rain filling and tipping the bucket, and the software is interpreting it as such.
    [X] Upload code to github
    [] Update github Wiki

## Check us out

If you would like to join our group please visit the [calendar](https://calendar.dallasmakerspace.org/) and look for **DMS Weather Station** on Thursdays from 7 p.m. - 9 p.m.. Or get on Talk and send a message to @actionjackson Subject: Join DMS Weather.

## Resources

[WeatherPlus Product Specifications](http://www.switchdoc.com/wp-content/uploads/2016/05/WeatherPlus_CurrentSpecification.pdf)\
[Assembly and Operation Manual](http://www.switchdoc.com/wp-content/uploads/2016/04/OurWeatherAssembly.pdf)\
[OurWeather and WeatherPlus Advanced Usage Manual](http://www.switchdoc.com/wp-content/uploads/2016/05/OurWeatherAdvancedUsageManual.pdf)\
[OurWeather REST Interface and the Raspberry Pi](http://www.switchdoc.com/2016/06/ourweather-rest-interface-interface-raspberry-pi/)\
[OurWeather Github](https://github.com/switchdoclabs/OurWeatherWeatherPlus)\
[DMS Weather Project Github](https://github.com/Dallas-Makerspace/weather-station)\
[Weewx](http://weewx.com/)\
[Weewx Github](https://github.com/weewx/weewx)\
