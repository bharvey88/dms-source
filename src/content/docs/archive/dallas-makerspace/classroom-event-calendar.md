---
title: "Classroom event calendar"
description: "This page is to document functional requirements for the next generation of the Dallas Makerspace Event Calendar. This is not a description of the existing..."
sourceUrl: "https://dallasmakerspace.org/wiki/Classroom_event_calendar"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Classroom_event_calendar\">legacy DMS wiki</a> — content may be outdated."
---
This page is to **document functional requirements** for the next generation of the Dallas Makerspace Event Calendar. This is not a description of the existing calendar system.

This page was originally created in 2016, before the current calendar system was implemented. It does not imply an effort to replace the current system.

## Functional Requirements

- Teachers can log in via the web to:
  - Submit Events
  - Edit their own events
  - Cancel their own events
  - See the status of their events
  - Subscribe to receive notifications of new events

<!-- -->

- Students can:
  - swipe in at the beginning of class
  - swipe in at the end of class to rate the teacher and class

<!-- -->

- Admin can:
  - Approve or deny events
  - Maintain resources
  - Edit any events

<!-- -->

- Board Members can:
  - approve honorarium

<!-- -->

- Log of activity
  - who deletes, approves, edits, etc

<!-- -->

- Tablets at each resource which:
  - Shows the schedule of current and future usage
  - Can ad-hoc reserve the resource

<!-- -->

- perhaps pull ideas from <https://mid.as/features>

## Configure

- validate users via: plugin / module
  - LDAP
    LDAP tutorial: <http://n0where.net/understanding-the-ldap/>
  - Active Directory
  - may want a front end to LDAP and Active Directory which will be a aggregated view (sic), borrowing the term from database terminology.
    <http://stackoverflow.com/questions/663402/what-are-the-differences-between-ldap-and-active-directory>
- number of board members required to approve honorarium
- Calendars, each may be implemented as a separate plugin / module if possible.
  - Meetup
  - EventBrite
  - Facebook (which facebook group)
  - etc

## Entities

## Users

- all users can submit an event
  - users is someone with a login. At the DMS, that means members.
- admin can approve an event
- board can approve honorarium
- The sponsor and teacher will receive an email prior to the event:
  - a week (168 hours) prior
  - a day (24 hours) prior

## Committee

This should be in databases somewhere.

- Description
-  ? wiki page ?
-  ? members ?

## Event

Fields

- Title: (Text)
- Description: (in HTML) See how Meetup and Eventbrite supports editing
- DMS Member who owns the event (yields name and email address)
- teacher name (defaults from dms member)
- contact email (defaults from dms member)
- contains (sic) resources
- Picture
- Specify Allocations
  - if multiple Allocations, a description of them will be built and appended to the Description
- Select External Calendars
- Request Honorarium
- Honorarium Committee to get the funds, or the person submitting the event.
  - (owner is likely to want to change this up until time of payout)
  - (hide from Honorarium approval process)
- Repeat Pattern: This can get dicey. May consider only allowing repeating if all resources are on the same date.
- Students who attended class
  will be available after the class
  will list the students who swiped in.

## Allocation

Fields

- Resource Allocation timestamp (will prolly derive this from a dropdown requesting setup time in minutes, for setup)
- Event Starting timestamp
- Event Ending timestamp
- Resource Free timestamp (for teardown)
- Resource

Behavior:

- when adding another allocation, try to default in the timestamps from a previous allocation with:
  - same resource
  - same day of week
  - different date

## Resource

Keep in mind that events can be done offsite. May consider moving the address information into the configuration, maybe. Just maybe.

- one-time flag
- type: room, equipment
- title
- Street Address
- City
- State
- Zip
- Image
- seating capacity
  for rooms

## Ticket

Patterned after Eventbrite tickets

- Price
- Qty Available
- Type \[ member, non-member \]
- Handled:
  by User or DMS Calendar
- Calendar System handling Tickets

## Looking forward

If you stumbled upon this, and think of a feature that you would like for this calendar to support, please add your desired feature here.

- Collect payments via PayPal (Brooks).
- Continue using the established [Events Calendar Color Codes](/w/images/8/80/Event_Calendar_Color_Codes.PNG) (Lisa)

## External references

Project

- <http://www.visionect.com/blog/digital-signage-how-we-built-an-e-paper-room-booking-system-with-google-calendar>

Lists

- <http://sourceforge.net/directory/business-enterprise/scheduling/resource-booking/freshness:recently-updated/>

potential Solutions

- mrbs
  - <http://mrbs.sourceforge.net/>
- Booked:
  - <http://www.bookedscheduler.com/>
  - <http://sourceforge.net/projects/phpscheduleit/?source=directory>
- Paid:
  - <http://www.condecosoftware.com/us/products/meeting-room-booking/>
