---
title: "Wifi Internet Proposal"
description: "The primary goal of this project is to provide the Dallas Makerspace with an Internet connection of at least 20Mbps. There is a datacenter 4.3 miles south ..."
sourceUrl: "https://dallasmakerspace.org/wiki/Wifi_Internet_Proposal"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Wifi_Internet_Proposal\">legacy DMS wiki</a> — content may be outdated."
---
The primary goal of this project is to provide the Dallas Makerspace with an Internet connection of at least 20Mbps. There is a datacenter 4.3 miles south of the space that has agreed to let us place networking gear on their roof for this project.

Secondary goals are:

- Increased throughput: 100Mbps would be preferred, up to 1Gbps may be possible with some designs.
- Decreased latency: Latency should be as low as possible, our current connection is 50-100ms to servers hosted in the Dallas area.
- Resiliency to power failure

## Why?

We currently have a 1.54mbit down and 512kbit AT&T DSL connection that has very bad latency and jitter.

<img src="/dms-source/files/mw/2_29_1890609802.png" width="300" height="135" alt="1890609802.png" /> <img src="/dms-source/files/mw/4_4c_60795679.png" width="300" height="135" alt="60795679.png" />

As you can plainly see the DSL connection is very poor. This is exacerbated by the security cameras installed at DMS.

## Locations

- Location of DMS
  - [32.879486, -96.878732](http://g.co/maps/eqsd8)
- Location of datacenter
  - [32.817564, -96.873087](http://g.co/maps/a648y)

Connectivity at the datacenter will likely be a 100 Mbps ethernet drop, with a handful of public IPs available for our use.

- [DMS Wifi Map](http://g.co/maps/ghkbb)

## How Can I Help?

If we could get temporary access to two mobile/crank-up/push-up masts that would allow us to test if direct line of sight is available. Please contact Andrew LeCody for more info.

## Options

## Option 1

### Initial Investment Costs

- Install a 50 foot mast on DMS roof
- Install a 50 foot mast on ADC roof
  - Purchase masts
  - Purchase Wifi equipment

### Monthly costs

- Lease tower space - About \$700/mo

### Tower

- Location of Tower
  - [32.82500, -96.84986](http://g.co/maps/2f5t9)
- <http://wireless2.fcc.gov/UlsApp/AsrSearch/asrRegistration.jsp?regKey=108002>
- American Tower
  - <http://www.americantower.com/atcweb>
  - 877-ATC-SITE / 877-282-7483
  - Office
    - South Plains
    - Stacey Noland, Area VP
    - 8505 Freeport Parkway, Suite 135
    - Irving, TX 75063
  - customer.relations@americantower.com

## Option 2

### Initial Investment Costs

- Install a 50 foot mast on DMS roof
- Install a 50 foot mast on ADC roof
  - Purchase masts
  - Purchase Wifi equipment

### Monthly costs

- Lease tower space - \$?

### Tower

- Location of Tower
  - [32.838027, -96.876500](http://g.co/maps/e5tzf)
- <http://wireless2.fcc.gov/UlsApp/AsrSearch/asrRegistration.jsp?regKey=609847>

## Option 3

### Initial Investment Costs

- Install a 50 foot mast on DMS roof
- Install a 50 foot mast on ADC roof
  - Purchase masts
  - Purchase Wifi equipment

### Monthly costs

- Lease rooftop space - \$?

### Building

- Location of building
  - [32.830152, -96.875124](http://g.co/maps/kvu7x)
- Jamison Services, Inc.
  - General Inquiries: info@jamisonservices.com
  - Acquisitions/Leasing Department: leasing@jamisonservices.com

## Useful Links And Information

- [FCC Antenna Structure Registration Info](http://wireless.fcc.gov/antenna/index.htm?job=about_getting_started)
- [FCC Antenna Calculator](http://wireless2.fcc.gov/UlsApp/AsrSearch/towairSearch.jsp) - for determining if an antenna needs to be registered.
- [EarthTools](http://www.earthtools.org/) - Useful for determining Site Elevation (AMSL)
- [GPS Coordinate Converter](http://boulter.com/gps/) - To convert between GPS formats

## Hardware

### MikroTik SEXTANT

- <http://routerboard.com/RBSEXTANT5HnD>
- 18dB gain
- Up to 100Mbps
- About \$110

### MikroTik SXT G-5HnD

- <http://routerboard.com/RBSXTG-5HnD>
- 16dB gain
- Up to 300Mbps
- About \$100
