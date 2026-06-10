---
title: "Network"
description: "This document encompasses all of the network infrastructure for the Dallas Makerspace. For security reasons some information may not be available on this p..."
sourceUrl: "https://dallasmakerspace.org/wiki/Network"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Network\">legacy DMS wiki</a> — content may be outdated."
---
This document encompasses all of the network infrastructure for the Dallas Makerspace. For security reasons some information may not be available on this page (such as passwords for specific devices). This information can be found on the admin wiki.

## Networks

## Internet

Our upstream provider is Verizon FIOS. We currently have 500 Mbps down and 500 Mbps up, with a single static IP.

|             |                 |
|-------------|-----------------|
| **Network** | 71.164.221.0/24 |
| **Netmask** | 255.255.255.0   |
| **Gateway** | 71.164.221.1    |

## Members

This network is for members, printers, desktops and is the default for all network drops.

|                |                                 |
|----------------|---------------------------------|
| **Vlan**       | 2                               |
| **Network**    | 192.168.200.0/21                |
| **Start**      | 192.168.200.1                   |
| **End**        | 192.168.207.254                 |
| **Netmask**    | 255.255.248.0                   |
| **Gateway**    | 192.168.200.1                   |
| **DNS**        | 192.168.0.1                     |
| **DHCP Range** | 192.168.201.0 - 192.168.207.254 |

### Wireless

|          |            |              |     |
|----------|------------|--------------|-----|
| **SSID** | DMS Member | **Password** |     |

## Guests

This is a wireless-only network, designed for guests to access the Internet.

|                |                               |
|----------------|-------------------------------|
| **Vlan**       | 5                             |
| **Network**    | 192.168.16.0/21               |
| **Start**      | 192.168.16.1                  |
| **End**        | 192.168.23.254                |
| **Netmask**    | 255.255.248.0                 |
| **Gateway**    | 192.168.16.1                  |
| **DNS**        | 192.168.16.1                  |
| **DHCP Range** | 192.168.17.0 - 192.168.23.254 |

### Wireless

|              |           |
|--------------|-----------|
| **SSID**     | DMS Guest |
| **Password** | (none)    |

## Management

This network is used for managing internal infrastructure such as switches, routers, access control, etc.

|                |                               |
|----------------|-------------------------------|
| **Vlan**       | 9                             |
| **Network**    | 192.168.0.0/24                |
| **Start**      | 192.168.0.1                   |
| **End**        | 192.168.0.254                 |
| **Netmask**    | 255.255.255.0                 |
| **Gateway**    | 192.168.0.1                   |
| **DNS**        | 192.168.0.1                   |
| **DHCP Range** | 192.168.0.100 - 192.168.0.254 |

## Security

This network is used for security cameras, and possibly any other future security systems.

|                |                         |
|----------------|-------------------------|
| **Vlan**       | 10                      |
| **Network**    | 10.0.0.0/24             |
| **Start**      | 10.0.0.1                |
| **End**        | 10.0.0.254              |
| **Netmask**    | 255.255.255.0           |
| **Gateway**    | 10.0.0.1                |
| **DNS**        | 10.0.0.1                |
| **DHCP Range** | 10.0.0.100 - 10.0.0.254 |

## Network Hardware

## Core Switch

Our core switch consists of 4 Cisco Catalyst WS-3750G-48PS, configured with StackWise to act as one. The individual segments are Gi1... Gi4, each is a 48-port gigabit ethernet switch with all ports capable of PoE.

|            |                         |
|------------|-------------------------|
| **IP**     | 192.168.0.2             |
| **Access** | SSH                     |
| **Login**  | Available on admin wiki |

Ports on this switch stack should have a description set as specific as possible. Default is vlan info (e.g. "vlan2-member"), next best is device type (e.g. "wirelessap"), best is device name/location (e.g. "cam-lobby").

## Core Router

Our core router is a pfSense X-1540.

|            |                                                    |
|------------|----------------------------------------------------|
| **IP**     | 192.168.200.1, 192.168.16.1, 192.168.0.1, 10.0.0.1 |
| **Access** | HTTPS, SSH                                         |
| **Login**  | DMS.local AD accounts                              |

## Wireless Access Points

- Configured by a software controller hosted on-site.
- 3x Ubiquiti UAP-AC-Pro (Office areas) - 2.4Ghz & 5Ghz (Wireless-AC)
  - WAP-Committees (Located in the main hallway right outside the Entryway)
  - WAP-Multipurpose (located above the first table in the Multipurpose Room)
  - WAP-Classrooms (located between the classrooms in the hallway)
- 3x Ubiquiti UAP-Pro (Warehouse areas) - 2.4Ghz & 5Ghz (Wireless-N)
  - WAP-Woodworking (Located in the center of woodworking room)
  - WAP-WarehouseL (Located above the Laser area)
  - WAP-WarehouseR (Located above the Mill area)

## Servers

## Fileserver

|            |                             |
|------------|-----------------------------|
| **IP**     | 192.168.0.20, 192.16.200.20 |
| **Access** | SAMBA, SSH                  |
| **Login**  | dms.local domain SSO        |

## MakerManager/Access Control

[MakerManager](https://dallasmakerspace.org/makermanager) handles activating and deactivating RFID tags. It accomplishes this by connecting to a server at the space, which is running a script to configure the 3rd party access control system.

|                           |              |
|---------------------------|--------------|
| **MakerManager API IP**   | 192.168.0.48 |
| **Access Control IP**     | 192.168.0.49 |
| **Access Control \#2 IP** | 192.168.0.47 |

The 2nd access controller is not managed by MakerManager.

## BlueIris

This server is for our security cameras.

|            |                            |
|------------|----------------------------|
| **IP**     | 192.168.0.21, 192.168.0.22 |
| **Access** | HTTP, RDP                  |
| **Login**  | dms.local domain SSO       |

## Server Room

## Access

Access to the Server Room is granted on an as-needed basis and is generally limited to the Board of Directors, members of the Infrastructure Committee, and anyone else with a valid business reason (as determined by the Chairperson of Infrastructure). For 24/7 access, please open a ticket. Temporary access can be granted with the same procedure.

## TODO

If you would like to help tackle this TODO list, please contact network@dallasmakerspace.org to offer assistance.

- Sell useless gear
