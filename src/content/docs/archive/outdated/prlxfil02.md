---
title: "PRLXFIL02"
description: "This information may be outdated.If you feel this is in error, please remove the {{outdated}} template."
sourceUrl: "https://dallasmakerspace.org/wiki/PRLXFIL02"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/PRLXFIL02\">legacy DMS wiki</a> — content may be outdated."
---
**This information may be outdated.**\
If you feel this is in error, please remove the {{outdated}} template.

The file server is running on a donated Dell R810 machine with a SAS JBOD enclosure.

## Software

The operating system is or was CentOS 7.5 at the time of the install.

### ZFS on Linux

ZFS on Linux is used to manage the storage. The commands below were used to setup ZFS on Linux on the machine and configure the storage into two VDEV that are RAID Z2 with six drives per VDEV. These commands are provided for reference but might not be current.

    yum check-update
    yum upgrade
    yum install epel-release
    yum install kernel-devel dkms
    yum install http://download.zfsonlinux.org/epel/zfs-release.el7_5.noarch.rpm
    yum install zfs
    systemctl preset zfs-import-cache zfs-import-scan zfs-import.target zfs-mount zfs-share zfs-zed zfs.target

The command below setup the storage pool as described above. The command is one line but broken up into multiple for legibility.

    zpool create -f tank raidz2 \
    pci-0000:0e:00.0-sas-0x500304801e88ab80-lun-0 \
    pci-0000:0e:00.0-sas-0x500304801e88ab81-lun-0 \
    pci-0000:0e:00.0-sas-0x500304801e88ab82-lun-0 \
    pci-0000:0e:00.0-sas-0x500304801e88ab83-lun-0 \
    pci-0000:0e:00.0-sas-0x500304801e88ab84-lun-0 \
    pci-0000:0e:00.0-sas-0x500304801e88ab85-lun-0 \
    raidz2 \
    pci-0000:0e:00.0-sas-0x500304801e88ab86-lun-0 \
    pci-0000:0e:00.0-sas-0x500304801e88ab87-lun-0 \
    pci-0000:0e:00.0-sas-0x500304801e88ab88-lun-0 \
    pci-0000:0e:00.0-sas-0x500304801e88ab89-lun-0 \
    pci-0000:0e:00.0-sas-0x500304801e88ab8a-lun-0 \
    pci-0000:0e:00.0-sas-0x500304801e88ab8b-lun-0

The commands below are for performance. They enable compression, disable access time, and disable synchronous writes.

    zfs set compression=lz4 tank
    zfs set atime=off tank
    zfs set sync=disabled tank

### zfsnap

Snapshots are taken on a regular basis using zfsnap which is a wrapper script to help manage native ZFS snapshots. A script handled by cron executes the snapshot commands. Need to setup snapshots once shares are established.

### sssd

Joining the domain is handled via sssd and the realm command. Samba defined shares and user logins can use this. Replace adm_luke with whatever administrator username.

    yum install sssd realmd oddjob oddjob-mkhomedir adcli samba-common samba-common-tools krb5-workstation openldap-clients policycoreutils-python -y
    realm join -U adm_luke dms.local

To use short usernames (e.g. luke instead of luke@dms.local) change the line in /etc/sssd/sssd.conf from True to False and restart the service.

    use_fully_qualified_names = False

Need to figure out whether to use Active Directory UID and GID or generate them automatically with sssd.

### kerberos

Kerberos allows the file server to securely communicate with Active Directory to authenticate users. Need to configure this to automatically renew session ticket.



### Samba

Samba is used to share files via SMB/CIFS. Need to configure shares.
