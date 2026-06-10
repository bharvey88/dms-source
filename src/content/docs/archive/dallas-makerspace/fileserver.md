---
title: "Fileserver"
description: "This information may be outdated.If you feel this is in error, please remove the {{outdated}} template."
sourceUrl: "https://dallasmakerspace.org/wiki/Fileserver"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Fileserver\">legacy DMS wiki</a> — content may be outdated."
---
**This information may be outdated.**\
If you feel this is in error, please remove the {{outdated}} template.

We need a fileserver (among other things) located at the space in order to facilitate working on and sharing files. This page will act as a design document for the services and setup of a proposed fileserver.

## Directories

|                         |             |                                    |
|-------------------------|-------------|------------------------------------|
| Directory               | Permissions | Description                        |
| /home/*username*        | 0750        | Home directory                     |
| /home/*username*/public | 0755        | Public file folder                 |
| /home/*username*/htdocs | 0755        | Personal website folder            |
| /var/public/*username*  |             | Symlink to /home/*username*/public |

## Services

All authentication will be handled by LDAP.

## SSH

- Default shell will be bash
- Use loginshell value from LDAP

## FTP

- Anonymous access to /var/public
- Authenticated access to /home/username

## HTTP

- <http://servername/public> for /var/public with directory listing
- <http://servername/~username> for /home/username/htdocs
- Can we use [MPM-ITK](http://mpm-itk.sesse.net/) to run each vhost under the user's UID?

## MySQL

All users have full permissions to username-% and ability to create DBs

## SMB/Samba

- \\servername\username for /home/username (authenticated)
- \\servername\public for /var/public

## Local Repo Mirror

- Ubuntu
  - Latest release and latest LTS release
  - 32 and 64 bit
  - Server, Alt and Desktop
- Debian
  - Latest release
  - 32 and 64 bit
- Fedora
  - Latest release
  - 32 and 64 bit
  - Desktop

## PXEBOOT

- Installs of Ubuntu, Debian and Fedora
- Memtest86+
- Other diag tools

## NTP

- Why not?
- Sync it with GPS just because it's cool?

## Hardware

Andrew LeCody has donated a 1u Supermicro server with a hardware raid card and bays for 4 hot-swapable SATA drives. If all 4 bays are used, we can setup a RAID 5 or RAID 10.
