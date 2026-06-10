---
title: "Docker Swarm"
description: "Docker Swarm is a clustering and scheduling tool for Docker containers. With Swarm, IT administrators and developers can establish and manage a cluster of ..."
sourceUrl: "https://dallasmakerspace.org/wiki/Docker_Swarm"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Docker_Swarm\">legacy DMS wiki</a> — content may be outdated."
---
Docker Swarm is a clustering and scheduling tool for Docker containers. With Swarm, IT administrators and developers can establish and manage a cluster of Docker nodes as a single virtual system

## Intro

In order to make our systems more resilient and gearing up for fully automated deployment and testing pipelines for prod/preprod services the following highlights general details on the DMS docker cloud.

## Operations

Our docker cloud servers are managed though CICD and access able with a web ui known as Portainer which is authenticated against our active directory credentials.

A user needs to be apart of either `Portainer Admins` for docker cloud administrators or `Portainer Users` for general cloud users.

This gives them authentication permissions but does not grant access permissions within portainer. For that one needs to ask their committee chair to login into <https://communitygrid.dms.local/> then visit users and add the new users by username into their committee’s team.

## Committee Chair Add User Demo

<https://drive.google.com/file/d/13ADbCxe3EvE0JYlR7xmJV-t7P2FxRiNy/view?usp=sharing>

[download video with google login](https://drive.google.com/file/d/13ADbCxe3EvE0JYlR7xmJV-t7P2FxRiNy/view?usp=sharing)

## How to deploy an application to DMS docker

<https://drive.google.com/file/d/1VbTE1sWQaQbCNb3y4jwE3DRKBU-qzAY-/view?usp=sharing>

[download video with google login](https://drive.google.com/open?id=1VbTE1sWQaQbCNb3y4jwE3DRKBU-qzAY-)

## Extra Details

### Inventory items

all items can be found in the CMDB spreedsheet shared with Team_infrastructure.

### Changes made to systems

#### AD Groups Created

- Administrators: `(memberOf=CN=Portainer Admins,OU=Applications,OU=Groups,DC=dms,DC=local)`
- Users: `(memberOf=CN=Portainer Users,OU=Applications,OU=Groups,DC=dms,DC=local)`

## Training

One on one training is available with the google classroom code: `5j4vsr5`

## Classes

- <https://www.youtube.com/watch?v=nK3fK-raLuw>
- <https://www.youtube.com/watch?v=qyTLX1gLlb4>
- <https://www.youtube.com/watch?v=HsrwrBjkdrU>
- <https://www.youtube.com/watch?v=-qRUsuevKj4>
- <https://www.youtube.com/watch?v=mtDJfSHQfAM>
- <https://www.youtube.com/watch?v=2w188YsQS-M>
