---
title: "Infrastructure OLA"
description: "A Service Level Agreement typically contains the following information (actual contents may vary depending on the type of service):"
sourceUrl: "https://dallasmakerspace.org/wiki/Infrastructure_OLA"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Infrastructure_OLA\">legacy DMS wiki</a> — content may be outdated."
---
## Service Level Agreement - Contents

*A Service Level Agreement typically contains the following information (actual contents may vary depending on the type of service):*



#### Service name

#### Clearance information (with location and date)

1.  Service Level Manager
2.  Customer representative

#### Contract duration

1.  Start and end dates
2.  Rules regarding renewal and termination of the agreement (if applicable, also rules regarding early termination of the agreement)

#### Description/ desired customer outcome

1.  Business justification and benefits
2.  Business processes/ activities on the customer side supported by the service
3.  Desired outcome in terms of utility (example: "Field staff can access enterprise applications xxx and yyy without being constrained by location or time")
4.  Desired outcome in terms of warranty (example: "High availability required during office hours in locations …")

#### Communication between customer and service provider

1.  Responsible contact person on customer side with contact details
2.  Designated Business Relationship Manager on service provider side with contact details
3.  Service Reporting (contents and intervals of service reports to be produced by the service provider)
4.  Procedure for handling exceptions and complaints (e.g. details to be included in formal complaints, agreed response times, escalation procedure)
5.  Satisfaction surveys (description of the procedure for measuring customer satisfaction on a regular basis)
6.  Service Reviews (description of the procedure for reviewing the service with the customer on a regular basis)

#### Service and asset criticality

1.  Identification of business-critical assets connected with the service
    1.  Vital Business Functions (VBFs) supported by the service
    2.  Other critical assets used within the service (e.g. certain types of business data)
2.  Estimation of the business impact caused by a loss of the service or assets (in monetary terms, or using a classification scheme)

#### Service times

1.  Times when the service is required to be available
2.  Exceptions (e.g. weekends, public holidays)

#### Required types and levels of support

1.  On-site support
    1.  Area/ locations
    2.  Types of users
    3.  Types of infrastructure to be supported
    4.  Reaction and resolution times (according to priorities, definition of priorities e.g. for the classification of Incidents)
2.  Remote support
    1.  Area/ locations
    2.  Types of users (user groups granted access to the service)
    3.  Types of infrastructure to be supported
    4.  Reaction and resolution times (according to priorities, definition of priorities e.g. for the classification of Incidents)

#### Service level requirements/ targets

1.  Availability targets and commitments
    1.  Conditions under which the service is considered to be unavailable (e.g. if the service is offered at several locations)
    2.  Availability targets (exact definition of how the agreed availability levels will be calculated, based on agreed service time and downtime)
    3.  Reliability targets (required by some customers, usually defined as MTBF (Mean Time Between Failures) or MTBSI (Mean Time Between Service Incidents))
    4.  Maintainability targets (required by some customers, usually defined as MTRS (Mean Time to Restore Service))
    5.  Down times for maintenance (number of allowed down times, pre-notification periods)
    6.  Restrictions on maintenance, e.g. allowed maintenance windows, seasonal restrictions on maintenance, and procedures to announce planned service interruptions
    7.  Definitions of Major Incidents as well as Emergency Changes and Releases to resolve urgent issues, including procedures to announce unplanned service interruptions
    8.  Requirements regarding availability reporting
2.  Capacity/ performance targets and commitments
    1.  Required capacity (lower/upper limit) for the service, e.g.
        1.  Numbers and types of transactions
        2.  Numbers and types of users
        3.  Business cycles (daily, weekly) and seasonal variations
    2.  Response times from applications
    3.  Requirements for scalability (assumptions for the medium and long-term increase in workload and service utilization)
    4.  Requirements regarding capacity and performance reporting
3.  Service Continuity commitments (availability of the service in the event of a disaster)
    1.  Time within which a defined level of service must be re-established
    2.  Time within which normal service levels must be restored

#### Technical standards/ specification of the service interface

Mandated technical standards and specification of the technical service interface

#### Responsibilities

1.  Duties of the service provider
2.  Duties of the customer (contract partner for the service)
3.  Responsibilities of service users (e.g. with respect to IT security)
4.  IT Security aspects to be observed when using the service (if applicable, references to relevant IT Security Policies)

#### Pricing model

1.  Cost for the service provision
2.  Rules for penalties/ charge backs

#### Change history

#### List of annexes and references

(e.g. to to higher-level SLAs on the corporate or customer level which also apply to this agreement)

#### Glossary

(if applicable)



**Committees are voluntary groups, formed by members in order to achieve certain goals.**\
To join this committee, contact the committee chairperson. See [Rules and Policies#Committees](/dms-source/archive/dallas-makerspace/rules-and-policies/#Committees) for more information.

## Charter

*Charter approved by BoD 2019-09-08*

### Purpose

The Infrastructure Group performs operations and maintenance of Dallas Makerspace mechanical/electrical/plumbing (MEP), communications, online presence, and physical security.

### Infrastructure Officer General Charter

The Infrastructure Officer shall be bound by the [General Officer Charter](/dms-source/archive/dallas-makerspace/officers/#General_Officer_Charter).

### Governance

The Infrastructure Group is headed by the Technology Officer, who may appoint or dismiss members without cause. The Technology Officer shall record and publically post the names of all members of the Infrastructure Group, noting changes in a timely fashion. The Infrastructure Group shall meet on an as-needed basis and report to the Board when requested by the Board.

### Operations

The Technology Officer may delegate functions of the Office of the Technology Officer to member(s) of the Infrastructure Group as they deem necessary.

### Responsibilities of the Office of the Technology Officer

1.  Facility MEP (Mechanical, Electrical, Plumbing)
    1.  Plumbing
    2.  HVAC
    3.  Electrical
    4.  Compressed air
2.  Onsite Electronic Communications / information assets
    1.  LAN
    2.  Wi-fi
    3.  Internet
    4.  Onsite servers
    5.  Phones
    6.  DMS-owned computers
3.  Online presence
    1.  Website (infrastructure)
    2.  Cloud infrastructure
    3.  Internet access
4.  Physical security
    1.  Access control
    2.  Cameras
5.  Contracts related to Infrastructure

### Finances

The Infrastructure Group shall have a monthly allocation specified by the Board of Directors. This shall be charged against the general fund; Infrastructure Group will retain no balance.

## Policies

The Jump server hosts several virtual machines; including a Windows Server that hosts our VCarve, FeatureCAM, and AutoDesk Inventor software.

- [This link](/dms-source/archive/systems-and-infrastructure/storing-computer-files/) provides information about storing and accessing computer files at DMS.
- [Jump Server login](/dms-source/archive/systems-and-infrastructure/jumpserverlogin/) (and creating AD account)
- [Jump Server FAQ](/dms-source/archive/systems-and-infrastructure/jumpserverfaq/).

## Telephone System

The phone system is a Voice over IP PBX, which consists of a virtual machine running Asterisk 11 with IncredibleGUI 12 on Ubuntu 14.04LTS. We use Google Voice for trunks, providing free calls to anywhere in the US or Canada. Our main number is 214-699-6537.

[VoIP Server Information Page](/dms-source/archive/voipserver/voipserver/)

## BoD Annual Election Procedures

Our Bylaws require an annual election of our BoD, the page in the link below details the procedures that were used in the most recent election. These procedures should be updated whenever a change is made.

[BoD Annual Election Procedures](/dms-source/archive/dallas-makerspace/board-of-directors-annual-election-procedures/)

## Infrastructure

[Infrastructure](/dms-source/archive/infrastructure/infrastructure/)

## Governance Model

Group

## Contact

Post to the Infrastructure category on the [forums](https://talk.dallasmakerspace.org/c/infrastructure), chat with us on [Discord](https://chat.dallasmakerspace.org/), or send an email to <infrastructure@dallasmakerspace.org> (or infra@dallasmakerspace.org) and it will be forwarded to all members of the committee.

## Members

- Andrew Spencer - Infrastructure Officer / CTO (@jast)
- Freddy Calvert
- Tails Hartnett (@hon1nbo ; cybersecurity stickler)
- Dwight Spencer (DevOps, IT, PM)
- Lisa Selk
- Andrew LeCody
- Alex Rhodes
- Bill Gee (@Bill)
- Robert Davidson
- Frank Lima
- Joe Helmstetter
- Jason Ottwell
- Mike Kelp (Code Wizard)
- john a. gorman (Senior IT Specialist)
- Stephenie Webb
- James Blocker
- Justin Edwards
- James Braye
- Woody (@woody)
- Kyle Crothers

## Moderators

The Infrastructure Committee sponsors a team (Moderator Team) to moderate the Talk Forum with a published set of [moderator guidelines](/dms-source/archive/infrastructure/moderator-guidelines/). The Moderator Team desires and promotes an open, transparent environment on Talk that promotes inclusion, diversity of opinions, knowledge sharing, fairness and respect while respecting privacy of all individuals.

## Meeting Minutes

The committee routinely meets on the second Wednesday of every month. Meetings will be posted on [the calendar](https://calendar.dallasmakerspace.org/).

- [Infrastructure Committee Meeting (template)](/dms-source/archive/infrastructure/infrastructure-committee-meeting-template/)

### 2018

- [Infrastructure Committee Meeting 20180420](/dms-source/archive/dallas-makerspace/infrastructure-committee-meeting-20180420/)

## How To Join

1.  Send an email to infrastructure@dallasmakerspace.org and request to join the Infrastructure committee.
2.  Add your name to the list of members on this page.

All pages related to the [Infrastructure Committee](/dms-source/archive/infrastructure/).
