---
title: "Infrastructure Incident Management"
description: "The Incident Prioritization Guideline describes the rules for assigning 'priorities to Incidents', including the definition of what constitutes a 'Major In..."
sourceUrl: "https://dallasmakerspace.org/wiki/Infrastructure_Incident_Management"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Infrastructure_Incident_Management\">legacy DMS wiki</a> — content may be outdated."
---
## Incident Prioritization Guideline

[File:Incident-prioritization.jpg](/w/index.php?title=Special:Upload&wpDestFile=Incident-prioritization.jpg) [ITIL Incident Prioritization Guideline (view full size)](/w/index.php?title=Special:Upload&wpDestFile=Incident-prioritization.jpg)

The *Incident Prioritization Guideline* describes the rules for assigning 'priorities to Incidents', including the definition of what constitutes a 'Major Incident'. Since Incident Management escalation rules are usually based on priorities, assigning the correct priority to an Incident is essential for triggering appropriate 'Incident escalations'.



## Incident Urgency (Categories of Urgency)

This section establishes *categories of urgency*. The definitions must suit the type of organization, so the following table is only an example:

To determine the *Incident's urgency*, choose the highest relevant category:



<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<th>Category</th>
<th>Description</th>
</tr>
&#10;<tr>
<td><strong>High (H)</strong></td>
<td><ul>
<li>The damage caused by the Incident increases rapidly.</li>
<li>Work that cannot be completed by staff is highly time sensitive.</li>
<li>A minor Incident can be prevented from becoming a major Incident by acting immediately.</li>
<li>Several users with VIP status are affected.</li>
</ul></td>
</tr>
<tr>
<td><strong>Medium (M)</strong></td>
<td><ul>
<li>The damage caused by the Incident increases considerably over time.</li>
<li>A single user with VIP status is affected.</li>
</ul></td>
</tr>
<tr>
<td><strong>Low (L)</strong></td>
<td><ul>
<li>The damage caused by the Incident only marginally increases over time.</li>
<li>Work that cannot be completed by staff is not time sensitive.</li>
</ul></td>
</tr>
</tbody>
</table>



## Incident Impact (Categories of Impact)

This section establishes *categories of impact*. The definitions must suit the type of organization, so the following table is only an example:

To determine the *Incident's impact*, choose the highest relevant category:



<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<th>Category</th>
<th>Description</th>
</tr>
&#10;<tr>
<td><strong>High (H)</strong></td>
<td><ul>
<li>A large number of staff are affected and/or not able to do their job.</li>
<li>A large number of customers are affected and/or acutely disadvantaged in some way.</li>
<li>The financial impact of the Incident is (for example) likely to exceed $10,000.</li>
<li>The damage to the reputation of the business is likely to be high.</li>
<li>Someone has been injured.</li>
</ul></td>
</tr>
<tr>
<td><strong>Medium (M)</strong></td>
<td><ul>
<li>A moderate number of staff are affected and/or not able to do their job properly.</li>
<li>A moderate number of customers are affected and/or inconvenienced in some way.</li>
<li>The financial impact of the Incident is (for example) likely to exceed $1,000 but will not be more than $10,000.</li>
<li>The damage to the reputation of the business is likely to be moderate.</li>
</ul></td>
</tr>
<tr>
<td><strong>Low (L)</strong></td>
<td><ul>
<li>A minimal number of staff are affected and/or able to deliver an acceptable service but this requires extra effort.</li>
<li>A minimal number of customers are affected and/or inconvenienced but not in a significant way.</li>
<li>The financial impact of the Incident is (for example) likely to be less than $1,000.</li>
<li>The damage to the reputation of the business is likely to be minimal.</li>
</ul></td>
</tr>
</tbody>
</table>



## Incident Priority Classes

*Incident Priority* is derived from [urgency](#Incident_Urgency_.28Categories_of_Urgency.29) and [impact](#Incident_Impact_.28Categories_of_Impact.29).

#### Incident Priority Matrix

If classes are defined to rate urgency and impact (see above), an *Urgency-Impact Matrix* (also referred to as *Incident Priority Matrix*) can be used to define priority classes, identified in this example by colors and priority codes:



<table>
<tbody>
<tr>
<th colspan="2"></th>
<th colspan="3">Impact</th>
</tr>
&#10;<tr>
<td>   H   </td>
<td>   M   </td>
<td>   N   </td>
<td></td>
<td></td>
</tr>
<tr>
<td rowspan="3"><strong>Urgency</strong></td>
<td>   H   </td>
<td>   1</td>
<td>   2</td>
<td>   3</td>
</tr>
<tr>
<td>   M   </td>
<td>   2</td>
<td>   3</td>
<td>   4</td>
</tr>
<tr>
<td>   L   </td>
<td>   3</td>
<td>   4</td>
<td>   5</td>
</tr>
</tbody>
</table>



|               |             |                      |                        |
|---------------|-------------|----------------------|------------------------|
| Priority Code | Description | Target Response Time | Target Resolution Time |
| **1**         | Critical    | Immediate            | 1 Hour                 |
| **2**         | High        | 10 Minutes           | 4 Hours                |
| **3**         | Medium      | 1 Hour               | 8 Hours                |
| **4**         | Low         | 4 Hours              | 24 Hours               |
| **5**         | Very low    | 1 Day                | 1 Week                 |



## Circumstances that warrant the Incident to be treated as a Major Incident

*Major Incidents* call for the establishment of a Major Incident Team and are managed through the Handling of Major Incidents process.

#### Indicators

The above prioritization scheme notwithstanding, it is often appropriate to define additional, readily understandable indicators for identifying Major Incidents (see also the comments below on identifying Major Incidents). Examples for such indicators are:

1.  Certain (groups of) business-critical services, applications or infrastructure components are unavailable and the estimated time for recovery is unknown or exceedingly long (specify services, applications or infrastructure components)
2.  Certain (groups of) Vital Business Functions (business-critical processes) are affected and the estimated time for restoring these processes to full operating status is unknown or exceedingly long (specify business-critical processes)



#### Identifying Major Incidents

It is not easy to give clear guidelines on how to identify major incidents although the 1st Level Support often develops a "sixth sense" for these. It is also probably better to err on the side of caution in this respect.

A *Major incidents* tend to be characterized by its impact, especially on customers. Consider some examples:

- A high speed network communications link fails and part of or all data communication to and from outside the organization is cut off.
- A website grinds to a halt because of unexpected heavy demand prior to a deadline (for example to reserve tickets or make a legal submission) resulting in large numbers of customers failing to meet that deadline.
- A key business database is found to be corrupted.
- More than one business server is infected by a worm.
- The private and confidential information of a significant number of individuals is accidentally disclosed in a public forum.

Note also that all disasters (covered by the IT Service Continuity Strategy and underpinning ITSCM Plans) are Major Incidents and that smaller incidents that are compounded by errors or inaction can become major incidents.



#### Major Incidents - Key Characteristics

Some of the key characteristics that make these Major Incidents are:

- The ability of significant numbers of customers and/or key customers to use services or systems is or will be affected.
- The cost to customers and/or the service provider is or will be substantial, both in terms of direct and indirect costs (including consequential loss).
- The reputation of the Service Provider is likely to be damaged.

AND

- The amount of effort and/or time required to manage and resolve the incident is likely to be large and it is very likely that agreed service levels (target resolution times) will be breached.

A Major Incident is also likely to be categorized as a critical or high priority incident.



## Notes

\<html\>Is based on: Template "Incident Prioritization Guideline" from the \<a href="<https://en.it-processmaps.com/products/itil-process-map.html>" title="The ITIL Process Map" class="external text"\>ITIL Process Map\</a\>.\</p\>

By:  Stefan Kempter \<a rel="author" href="<https://plus.google.com/111925560448291102517/about>"\>\<img style="margin:0px 0px 0px 0px;" src="/skins/Vector/images/itpm/bookmarking/gplus.png" width="16" height="16" title="By: Stefan Kempter \| Profile on Google+" alt="Author: Stefan Kempter, IT Process Maps GbR" /\>\</a\>, IT Process Maps.



<span class="small">\<a href="<https://wiki.en.it-processmaps.com/index.php/Checklist_Incident_Priority#incident-priority>" itemprop="url"\>Definition\</a\> › \<a href="<https://wiki.en.it-processmaps.com/index.php/Checklist_Incident_Priority#guideline>" itemprop="url"\>Incident Prioritization Guideline\</a\> › \<a href="<https://wiki.en.it-processmaps.com/index.php/Checklist_Incident_Priority#incident-urgency>" itemprop="url"\>Urgency\</a\> › \<a href="<https://wiki.en.it-processmaps.com/index.php/Checklist_Incident_Priority#incident-impact>" itemprop="url"\>Impact\</a\> › \<a href="<https://wiki.en.it-processmaps.com/index.php/Checklist_Incident_Priority#incident-priority-classes>" itemprop="url"\>Priority Classes\</a\></span>



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
