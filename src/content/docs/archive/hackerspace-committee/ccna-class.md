---
title: "CCNA Class"
description: "This information may be outdated.If you feel this is in error, please remove the {{outdated}} template."
sourceUrl: "https://dallasmakerspace.org/wiki/CCNA_Class"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/CCNA_Class\">legacy DMS wiki</a> — content may be outdated."
---
**This information may be outdated.**\
If you feel this is in error, please remove the {{outdated}} template.

## CCNA Class

Charles & Rich Hill will teach the entire Cisco Certified Network Associate (CCNA) exam \#200-120 topics in an accelerated 12 week format.

Cost: free. Open to members & non-members Classes run from January 6TH to March 24TH, 2014

The class starts with the most basic of basic concepts of how networks work and how to operate them. 1 hour lecture and a 30 minute lab or simulation/demonstration each week.

## CCNA Overview Course Outline

OR "60 Hours of Material in Roughly 24 Hours"

**Week 1: Building a Simple Network**

- Mission: Making one box of electronics talk to another
- Network components: switches, bridges, hubs, wireless access points, routers, and firewalls
- OSI model vs. TCP/IP
- Network addressing and encapsulation, "datagram, frame, or packet?"
- Types of cables and connectors and layer 1 caveats
- Routing versus switching, label switching, load balancing
- Connecting to a switch/router console port
- Cisco switch password recovery procedure
- Configuration first steps
- Basic utilities: telnet, ssh, ping, arp, traceroute, etc.

**Week 2: Switching basics OR "Just Enough to be Dangerous"**

- Ethernet 802.3
- Ethernet media types and connectors
- Crossover cables versus MDIX
- 802.3u, Clauses 28 & 40, autonegotiate, ugly patents, and two minutes of hate
- MAC address table / CAM
- Broadcasts and broadcast domains
- VLANs
- Configuring Cisco switch interfaces
- Ethernet caveats: collision domains, broadcast storms, and bridge loops
- Troubleshooting Ethernet (CRC errors, late collisions aka duplex mismatch)

**Week 3: Local Area Network Connections**

- trunking, VTP
- encapsulation
- DTP
- [Spanning tree protocol](https://en.wikipedia.org/wiki/Spanning_tree_protocol)(s) introduction
- STP basic configuration
- STP beyond 802.1D: PVSTP, PVSTP+, RSTP, MST
- BPDU Guard

**Week 4: Multilayer Switching**

- [Etherchannel](https://en.wikipedia.org/wiki/EtherChannel), etc. (PAgP, LACP, stack, VSS, and VPC)
- Trunking review
- Router on a stick
- Configuring an SVI
- Packet capture, debug tips, and flows

**Week 5: Network Environment Management**

- SNMP (v2 and v3), traps, polling
- Syslog
- MOTD
- AAA
- Configuring ACLs for device security
- Physical security
- Layer 2 hacking, MAC spoofing, DHCP spoofing
- Identifying security threats and implementing countermeasures

**Week 6: Medium\*Sized Routed Network Construct**

- Introduction to IP addressing, subnetting, VLSM
- Introduction to routing protocols
- Split horizon
- Process switching, fast switching, and CEF
- HSRP, VRRP, GLBP
- CDP
- Connecting to a WAN (Serial connections, Cable, DSL, VSAT, Metro Ethernet, etc.)

**Week 7: Single Area OSPF Implementation**

- LSA types
- Adjacencies and DR election
- OSPF database
- OSPFv3 for IPv6
- Configuration steps
- Troubleshooting

**Week 8: EIGRP Implementation**

- K values \*\> Feasible distance
- Configuration steps
- Load balancing
- Route redistribution basics

**Week 9: Access Control Lists**

- Numbered vs. named
- Standard vs. extended
- Sources, destinations, protocols, and ports
- Applying ACLs in the right direction
- Troubleshooting with ACLs, logging

**Week 10: Address Space Management**

- VLSM, subnetting review
- DHCP
- IPv6
- All the NATs: PAT, NAPT, two\*way and bidirectional NAT, multi\*homed NAT, Twice NAT
- NAT traversal and Carrier Grade NAT

**Week 11: Wireless Local Area Networks (WLANs).**

- LAN review
- WLAN overview
- Standalone vs. LWAPP
- WLAN security

**Week 12: WAN overview**

- T1/E1 troubleshooting
- SONET
- HDLC
- PPP and PPPoE
- Frame relay configuration: point to point, multi\*point
- LAN Ext into a WAN with Frame Relay (if time)
- Review

**Week 13: CCNA Exam Simulation**

- Transcender ICND1 and ICND2 <http://www.transcender.com/demos/#Cisco>

Some of these topics are highly compressed, like WAN is 10% of the exam, but we'll cover it in 90 minutes.

## Class notes from week 1

Class notes from week 1:

Configuring a Cisco switch: <http://ciscoiseasy.blogspot.com/2010/08/lesson-2-navigating-in-cisco-ios.html> <http://ciscoiseasy.blogspot.com/2010/08/lesson-3-initial-configuration-of-cisco.html>

A slideshow to review + complement what we covered last week: <http://www.slideshare.net/dsunte/ccna-network-devices>

Some slides of the OSI model material I glossed over, which you should memorize on your own. . . it really is too boring for class: <http://www.slideshare.net/dsunte/ccna-introducing-networks>

The OSI model info you really need to know: <http://ciscoiseasy.blogspot.com/2010/08/lesson-5-encapsulation-and-de.html>

Preview of week 2: A suggested preview of basic switching: <http://www.slideshare.net/dsunte/ccna-basic-switching-and-switch-configuration>

Here are some of the resources for the CCNA 200-120 Exam in general.

The overview of the exam itself: <https://learningnetwork.cisco.com/community/certifications/ccna/ccna_exam_v2>

The lab simulator software (\$99 purchase): <http://www.ciscopress.com/store/cisco-ccna-routing-and-switching-icnd2-200-101-network-9780789750402>

The (e)book+DVD includes a "Lite" version of the lab simulator: <http://www.ciscopress.com/store/cisco-ccna-routing-and-switching-icnd2-200-101-official-9781587143731>

To create an account on cisco.com to get access to extensive documentation: <https://tools.cisco.com/RPF/register/register.do>

## Resources

- Test topics are found here:

<http://www.cisco.com/web/learning/exams/list/ccna_composite2.html#~Topics>

- Lab book in PDF format:


<http://ebookbrowsee.net/instructorsed-lan-switching-and-wireless-lab-book-pdf-d576369395>

- Archive of all Class presentations (95MB, PPT)

https://dallasmakerspace.org/wiki/File:Network_Topics_Presentations.zip
