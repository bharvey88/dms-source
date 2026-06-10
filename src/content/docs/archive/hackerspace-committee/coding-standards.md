---
title: "Coding Standards"
description: "As you've probably guessed from the name of this approach to application design, mobile first means designing an online experience for mobile and tablets b..."
sourceUrl: "https://dallasmakerspace.org/wiki/Coding_Standards"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Coding_Standards\">legacy DMS wiki</a> — content may be outdated."
---
## Makerspace Coding Standards (proposed)

|  |  |
|----|----|
| <img src="/dms-source/files/mw/thumb_c_c8_Ambox_notice.png_40px-Ambox_notice.png" width="40" height="34" alt="Ambox notice.png" /> | This Article is a **DRAFT** |



## Project Standards

### Mobile first, Web second

As you've probably guessed from the name of this approach to application design, mobile first means designing an online experience for mobile and tablets before designing it for the desktop, Web only, or any other device. In the past, when users' focus was on the desktop, with web and mobile design as an afterthought.

### Microservices

microservice architecture is a method of developing software applications as a suite of independently deployable, small, modular services in which each service runs a unique process and communicates through a well-defined, lightweight mechanism to serve a business goal. Unix Philosophy, docker and <https://12factor.net/> are good examples of standards while github, trello, and IFTTT are good examples of microservice apps.



### Application frameworks

Several frameworks exist but the ones being implemented in the industry and being taught to the membership are based on ReactJS, Material Design, with Electron. However quicker adoption and rapid prototyping can be achieved with ng-admin or semantic ui.

As for backend apis, the most common would either be swagger.io via python-eve/node express or a stack that implements Horizon/RethinkDB (an example of this using ReactJS is at <https://preview.c9users.io/daplanet/solaris/>)

### UX Design goals

Considering many of our membership has special needs which Material UI Design does implement so I can say having ADA compliance is an achievable goal.



## Operations Standards

### CICD Pipelines

Automate as much as possible and leverage TravisCI for continuous deployment from github to docker swarm clusters in aws and on site. This also includes using BDD development and monthly scrum meetings to ensure what's released is functional and meets the membership's needs. The way we implement this is by using both docker, ansible, and a workflow that leverages git with Issue tracking via github and Trello kanban boards.

### DevOps Baked In

We're all makers and code hackers, buy providing well Documented APIs and application usage (ie document write up prior to RC acceptance) other members can build better tools or even learn how to improve things quickly and easily without much guidance. The additional Benefit of this is we get rapid development cycles and are able to implement new features sooner than later with less duplication of effort.

### Performance and Monitoring

While development is a needed part of Service delivery the other part is the operations. Many of the following is already being implemented by \[\[User::Denzuko\]\] for the infrastructure team and [VCC](/dms-source/archive/hackerspace-committee/)'s grid computing project to help with providing a single source of truth for error logging, performance monitoring, and push button administration.

- deployment of TICK stack for APM and Server Performance Monitoring (currently in deployment to motherboard.dms.local) should be used to detect anomalies and potential stress points in both systems and applications.
- A ELK stack for Alerting, auto remediation, and Event correlation (currently deployed to motherboard.dms.local) shall be available to both network devices, compute/storage, and applications.
- Network and compute nodes (vm and physical) will have SNMP and SysLog enabled for full stack monitoring

### Database Backends

While each project is different and have its own requirements an orm framework that supports one or more of the following should be the primary method of storing long term persistent application data:

- MongoDB for nosql applications
- influxdb for timeserial applications
- MySQL for relational database applications
- ElasticSearch supported where appropriate
- Redis/memcache support where appropriate
- Optionally RethinkDB/Horizon can be implemented instead of either the above



### Server Stack

At present our server stack is based on Microsoft windows with a few linux machines running web services. Much of which was setup and administered more by User:bscharff. To help keep the effort of administration to a minimum the following is already being implemented by User:Denzuko for the infrastructure team and [VCC](/dms-source/archive/hackerspace-committee/)'s grid computing project with the goal of easier administration, Rapid deployment, and lower licence costs:

- Deployment of applications to Docker swarm nodes on top of linux virtual machines using <https://github.com/Dallas-Makerspace/applications-as-a-service> as a deployment environment template.

<!-- -->

- Automation of server administration via ansible and semaphore ( currently being test deployed to motherboard.dms.local and vm in aws )

## Compliance standards

- PCI
- ADA
- W3C
- IETF RFC
- OSI
- 12 Factor
- Scrum
- POSIX
- Licensing: <https://opensource.org/licenses/BSD-2-Clause>

*Feel free to weigh in as it’s obvious I have my options on a lot of this most of which come from running development shops but I’d rather we get all perspectives.*
