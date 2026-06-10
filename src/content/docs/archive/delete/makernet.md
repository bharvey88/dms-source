---
title: "MakerNet"
description: "A request has been made to delete this page.If you feel this is in error, please remove the {{delete}} template."
sourceUrl: "https://dallasmakerspace.org/wiki/MakerNet"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/MakerNet\">legacy DMS wiki</a> — content may be outdated."
---
**A request has been made to delete this page.**\
If you feel this is in error, please remove the {{delete}} template.


**Note:** This information is for the old space. The only parts still in operation at the new location are Bryan Tower and the DARC sites (which aren't real useful without internet connection from datacenter).



<img src="/dms-source/files/mw/thumb_9_94_DMSWirelessLinks.png_300px-DMSWirelessLinks.png" width="300" height="363" /> Old and more complicated diagram of MakerNet, including the wireless backhaul network and VPN/BFD failover.

MakerNet encompasses all of the network infrastructure for the Dallas Makerspace and some affiliated organizations. For security reasons some information may not be available on this page (such as passwords for specific devices). This information can be found on the admin wiki.

Once the wireless backhaul is completed, our primary connection to the Internet will be through the [CoreSpace datacenter](http://corespace.com), thanks to a generous donation of bandwidth and public IPs. Wireless access points are used to create a high-speed point-to-point links with Bryan Tower (BT) as the "hub" due to it's location and height. Each link is comprised of two MikroTik 5.8 Ghz access points, with the three "spokes" being CoreSpace (CS), Dallas Makerspace (DMS) and Dallas Amateur Radio Club (DARC).

[Network Address Translation (NAT)](https://en.wikipedia.org/wiki/Network_address_translation) is done at the datacenter. This allows us to setup 1-to-1 NATs so that any device on the internal network can be accessed from the public Internet. By default, all clients will access the Internet via NAT, and will not be directly accessible from outside.

Future plans include establishing a VPN from the DMS router to the CoreSpace router for failover, should there be an issue with the wireless link. The routing changes will be handled using [BFD](http://wiki.mikrotik.com/wiki/Manual:Routing/BFD). Additionally, we hope to provide virtual machines (VMs) for member experimentation and development. These VMs will likely be assigned IPs on the 10.100.4.0/22 range.

## Frequency Allocation

Bryan Tower to DMS 5825



## IP Allocation

There are two primary IP allocations, each one is on a separate [RFC 1918](http://tools.ietf.org/html/rfc1918) range.

### Wireless Backhaul

This network encompases the wireless point-to-point links and management network. End users should not use IPs on this range.

- 172.16.0.0/24
  - 172.16.0.1 - CS Router
  - 172.16.0.2 - DMS Router
  - 172.16.0.3 - DARC Router
  - 172.16.0.4 - BT switch (for management)
  - 172.16.0.100 - CS AP
  - 172.16.0.101 - BT-CS AP
  - 172.16.0.102 - DMS AP
  - 172.16.0.103 - BT-DMS AP
  - 172.16.0.104 - DARC AP
  - 172.16.0.105 - BT-DARC AP
  - 172.16.0.200 - BT raspberry pi (may have a 3G dongle for out-of-band management)

### Internal Network

The internal network encompases IPs used by clients and servers at all locations.

- 10.100.0.0/16 - Internal Network
  - 10.100.0.0/24 - DARC
    - 10.100.0.1 - DARC Router
  - 10.100.1.0/24 - unused
  - 10.100.2.0/24 - unused
  - 10.100.3.0/24 - unused
  - 10.100.4.0/22 - CoreSpace
    - 10.100.4.1 - CS Router
  - 10.100.8.0/22 - DMS (logically split into /24s and a /23)
    - 10.100.8.0/24 - Servers/Printers/Statics
      - 10.100.8.1 - DMS Router
    - 10.100.9.0/24 - unused
    - 10.100.10.0/23 - DHCP

## Routing

The router at Corespace (172.16.0.1) should be the default gateway for the DMS and DARC routers. It will either need static routes for the internal IP ranges for DMS and DARC or will be configured with OSPF.

### Example Routes

From within the makerspace, your IP may be assigned the following IP via DHCP:

    IP 10.100.10.23
    Netmask 255.255.252.0
    Gateway 10.100.8.1

The DMS router will have the following IPs:

    Internal
     IP 10.100.8.1
     Netmask 255.255.252.0
    External/Wan
     IP 172.16.0.2
     Netmask 255.255.255.0
     Gateway 172.16.0.1
