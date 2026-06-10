---
title: "IM Server"
description: "The service was put into production on 1/18/2016 and is supported by the Infrastructure Committee. It runs on Ignite's (open source) OpenFire server with t..."
sourceUrl: "https://dallasmakerspace.org/wiki/IM_Server"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/IM_Server\">legacy DMS wiki</a> — content may be outdated."
---
## Overview

The service was put into production on 1/18/2016 and is supported by the [Infrastructure Committee](/dms-source/archive/infrastructure/). It runs on Ignite's (open source) OpenFire server with the Jitsi plugin.

## Instant Messaging

While you can use any [XMPP](https://en.wikipedia.org/wiki/XMPP) client, Spark is the only client that the Infrastructure Committee will support. It can be downloaded from [HERE](http://www.igniterealtime.org/projects/spark/).

### Web-Based Client

The web version can be accessed at <https://dallasmakerspace.org/im/>

### Full Client Setup

1.  Open Spark
2.  Enter your [DMS Active Directory account](/dms-source/archive/systems-and-infrastructure/how-to-enable-your-active-directory-login/) username
3.  Enter your DMS password
4.  Enter "im.dallasmakerspace.org" for the server
5.  Select "Save password" and "Auto login" (if desired)
6.  Click Login. You will be connected to the server.

### Adding Other Members

1.  At the bottom, you will see a field that says "Search"
2.  Click there and type in someone's name, username, or email address
3.  Hit enter
4.  A new window will appear with a listing of users that were found.
    1.  NOTE: If searching by name, you must enter their first name first. You cannot search by last name at this time.
    2.  NOTE: If the person does not appear in the search results, but you know they're a member, they probably have not created their Active Directory account.
5.  Double-click on the desired user and a chat window will open.

### Starting a Group Chat

1.  At the bottom, click on the "Conferences" tab
2.  Double-click on "conferences.im.dallasmakerspace.org"
3.  Click "Create or join room"
4.  Enter the name of the room, and a topic (if desired)
5.  Click "Create"
6.  A new window will pop-up with your new conference room
7.  To add people, drag them from your contacts list to the group chat window.

## Video Conferencing

You can access the video conferencing site by going to <https://dallasmakerspace.org/conf>. It uses your [Active Directory account](/dms-source/archive/systems-and-infrastructure/how-to-enable-your-active-directory-login/) username and password. You can use anything for the room name.

## Server Details

Server: PRLXUTIL (192.168.0.31/192.168.200.31)

Ports: 5222/5223

Conferencing URI: conferences.im.dallasmakerspace.org

Search URI: search.im.dallasmakerspace.org
