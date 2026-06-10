---
title: "VoIPServer"
description: "The Dallas Makerspace Phone system is now hosted in the cloud in an instance of 3CX."
sourceUrl: "https://dallasmakerspace.org/wiki/VoIPServer"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/VoIPServer\">legacy DMS wiki</a> — content may be outdated."
---
> Currently this page has stale data 06/01/2021

## Overview

The Dallas Makerspace Phone system is now hosted in the cloud in an instance of 3CX.

## Managed

by the [Infrastructure_Committee](/dms-source/archive/infrastructure/)

## VoIP Server

3CX Cloud Hosted

## Hardware

## Phones

More than 75 VoIP phones were donated to the Dallas Makerspace from an upgrade of a local call center. Most of the phones were in very good shape.

The Siemens OpenStage 40 VoIP SIP Phones have a built in two port Ethernet switch and can be powered with PoE or a standalone 48v power supply. They have a nice LCD display and 6 programmable buttons. The LCD can display a 144x32 pixel b&w .bmp logo.

[OpenStage 40 Wiki](http://wiki.unify.com/wiki/OpenStage_40)

[DMSPhoneLogo.zip](https://dallasmakerspace.org/w/images/8/8c/DMSPhoneLogo.zip)

## Paging

[Snom PA1 - Public announcement system](https://www.snom.com/en/products/networking/snom-pa1/)

[Documentation](http://wiki.snom.com/Snom_PA1/Documentation)

## Setup

## Sources

[Ubuntu 14.04 LTS "Trusty Tahr" Minimal CD ISO](http://archive.ubuntu.com/ubuntu/dists/trusty/main/installer-amd64/current/images/netboot/mini.iso)

[Incredible PBX](http://incrediblepbx.com/)

[Nerd Vittles](http://nerdvittles.com/)

## Software Setup

### Configuration

All account information and passwords are stored in the Admin Wiki.

### Extensions

The following extensions have been provisioned, but not all the phones have been installed.

### IVR

### Voicemail

## Hardware Setup DEPRECATED

### Siemens OpenStage 40

#### Factory Reset

- Hold down 2 8 and 9 keys
- Enter 124816 as the reset password
- Hit OK, wait 5 minutes for reset and reboot

#### Find IP Address

- Press the Menu button
- Choose Settings, User
- Choose Network Info, IPv4 address
- Web Browse to HTTPS:\\\<IP ADDR\>

#### Set User Password

- Set User Password as defined in Admin Wiki

#### Set Locality to US

- Set Country to US
- Set Language to English (US)
- Set Date format to MM/DD/YY
- Set Time format to 12 hour

#### Set Admin Password

- Login to Admin tab, default password: 123456
- Choose Security and Policies, Password, Change Admin Password
- Set Admin Password as defined in Admin Wiki

#### Setup Automatic Date and Time

- Choose Date and Time
- Timezone offset -6
- Daylight Savings check box checked
- Click Submit
- Auto time change check box checked
- DST Zone United States
- Click Submit

#### Set Phone Extension

- Choose System, System Identity
- Set Terminal Number to 1000 \<Extension number\>
- Set Display identity to Lounge \<Extension name\>
- Enable ID check box checked
- Set Web name to DMSVoice-Lounge \<Extension name\>
- Set DNS name construction to Web name

#### Server Registration

- Set all 3 SIP Addresses to 192.168.200.32
- Set User ID to 1000 \<Extension number\>
- Set Password to \<Phone Password from Admin Wiki\>

#### One Button Dialing (Speed Dial Buttons)

- Choose System, Features, Program keys
- Select "Selected dialing" for the key
- Enter Key label
- Enter Dial number

#### Adding Logo to LCD Display

- Logo file must be:
  - Monochrome BMP
  - 144 pixels wide x 32 pixels tall
- FTP to the phone:
  - Start your FTP Server (I use babyftp)
  - Choose File Transfer, Logo
  - Set FTP Server address to your FTP server
  - Set FTP account to Anonymous
  - Set FTP username to Anonymous
  - Set FTP password to Anonymous
  - Set Filename to DMSPhoneLogo.bmp
  - Set After submit to Start Download
  - Click Submit

### SNOM PA1
