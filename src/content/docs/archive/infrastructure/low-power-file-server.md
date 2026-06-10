---
title: "Low Power File Server"
description: "This information may be outdated.If you feel this is in error, please remove the {{outdated}} template."
sourceUrl: "https://dallasmakerspace.org/wiki/Low_Power_File_Server"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Low_Power_File_Server\">legacy DMS wiki</a> — content may be outdated."
---
**This information may be outdated.**\
If you feel this is in error, please remove the {{outdated}} template.

This file server can be used as a tool for members and committees to store data for projects, classes, training, and other activities related to the makerspace and it's goals as a non profit organization. It is maintained by the [Network Team](mailto:network@dallasmakerspace.org), a subgroup of Operations.

## Accessing

The hostname of the file server on the DMS network is files. It can be access in Windows with the path **\\files\\** with the path **samba://files/** on other platforms. Descriptions for the different shares are below.

### Members

This is a place where members can store DMS related files like source code, 3D models, documentation, project photos, etc. Directory names are determined by members at this point but it may transition to an automated system and linked to LDAP. Members should not see this as storage for personal files not related to DMS (like music, movies, etc.).

### Committees

Training videos, software installers, group project files, and other committee related files should be stored here. In the future it might make sense to create a training share instead of integrating it with the committees share depending on how much training material is created.

### Temporary

Files stored here should not be expected to stick around. This is a good place to put something to handoff to another member or other temporary purposes like downloads from the internet that don't need to be kept afterwards. Snapshots have been disabled for this share so if something is accidentally deleted or overwritten it's gone for good.

## Hardware

Intel's Avoton platform was selected because it provides a lot of performance in a relatively low power package. The board selected has 12 SATA ports which make it an ideal candidate for a low power file server. The specs are 24TB of raw disk space, 8GB of ECC memory, 8 processor cores at 2.4GHz, and dual 1GbE interfaces.

### List of Components

- [Seagate ST4000DM000](http://www.superbiiz.com/detail.php?name=HD-ST400DM) (x6)
- [ASRock C2750D4I](http://www.newegg.com/Product/Product.aspx?Item=N82E16813157475) (x1)
- [Kingston KVR16E11S8/4](http://www.newegg.com/Product/Product.aspx?Item=N82E16820239667) (x2)
- [Antec P100](http://www.newegg.com/Product/Product.aspx?Item=N82E16811129199) (x1)
- [Thermaltake TR-700P](http://www.newegg.com/Product/Product.aspx?Item=N82E16817153167) (x1)
- [Kingston V300 120GB SSD](http://www.newegg.com/Product/Product.aspx?Item=N82E16820721107) (x1)

### Potential Upgrades

- Additional memory so more data can be cached (up to 64GB on the motherboard)
- Dedicated SSDs for read and sync write caching (L2ARC and SLOG)
- Additional disks and a chassis with more disk bays

## Software

Ubuntu 12.04 LTS was used initially but was upgraded to Ubuntu 14.04 LTS shortly after release (supported until April of 2019).

### ZFS on Linux

The underlying file system and volume management for data storage are provided by ZFS on Linux which is a kernel port of ZFS (much faster than the old FUSE implementation). The drives are configured as a single RAID Z2 type VDEV so up to two disks can be lost without losing any data (similar to a RAID 6 array). Compression is enabled (type lz4), rolling snapshots are automated via zfs-auto-snapshot package, and access time is disabled to improve performance. The version installed is 0.6.3 which was released in June of 2014.

### NFS Kernel Server

Currently not setup as there are no Linux or Mac OS clients on the DMS network (excluding members).

### Samba

There's no security or authentication currently. All shares are setup as guest accessible with write access.

### ownCloud

This feature should be investigated further. The internet service at the makerspace is much faster than it used to be (500Mbps down and 100Mbps up).
