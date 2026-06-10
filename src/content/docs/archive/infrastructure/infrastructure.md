---
title: "Infrastructure"
description: "Services that make use of AD for authentication"
sourceUrl: "https://dallasmakerspace.org/wiki/Infrastructure"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Infrastructure\">legacy DMS wiki</a> — content may be outdated."
---
Managed by the [Infrastructure_Committee](/dms-source/archive/infrastructure/)

## Hosted at Amazon Web Services (AWS)

## AD Server

- Replicates to/from the DMS-hosted AD server (contains the exact same information as the DMS-hosted AD server)
- Hosted by AWS for optimal uptime and also for DR (Disaster Recovery)

**Services that make use of AD for authentication**

- [MakerManager](#MakerManager)
- [Wiki](#wiki)
- [Woodshop RFID Controllers](https://rfidinterlock.com/) - Many thanks to Robert Davidson for supporting this over the years!
- DMS Made RFID Controllers
- [Dallas Makerspace GMAIL](https://mail.dallasmakerspace.org)
- Moodle

## Calendar

[DMS Event Calendar](https://calendar.dallasmakerspace.org)

## MakerManager

<https://accounts.dallasmakerspace.org/makermanager>

Controls Access Cards.

- Sends updates to the [RFID door access controller server](#RFID_door_access_controller_server)
- Create new entries in the [\#AD Server](#AD_Server) for family members.
- and also deactivate them whenever \#WMHCS disables users due to non-payment.

## Moodle

Learning Management System

[DMS Moodle!](https://learn.dallasmakerspace.org)

## Splunk

Provides Central logging for syslog and other logging needs.

## VoIP Server

Cloud hosted instance of [3CX](https://www.3cx.com). Google Compute Services provides the voice to text services.

## Wiki

<https://dallasmakerspace.org/wiki/>

## WHMCS

[DMS Billing System](https://accounts.dallasmakerspace.org/)

## Hosted at Dallas Makerspace

## AD Server

Active Directory

## Jump Server

Provides remote access to DMS software primarily for CNC machines e.g. HAAS and woodshop CNC router. [JumpServerFAQ](/dms-source/archive/systems-and-infrastructure/jumpserverfaq/)

## RFID door access controller server

This provides the link between maker manager and the door controllers.
