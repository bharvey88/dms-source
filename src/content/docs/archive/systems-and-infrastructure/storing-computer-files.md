---
title: "Storing computer files"
description: "Storing Computer Files at Dallas Makerspace"
sourceUrl: "https://dallasmakerspace.org/wiki/Storing_computer_files"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Storing_computer_files\">legacy DMS wiki</a> — content may be outdated."
---
Storing Computer Files at Dallas Makerspace

    ALL storage provided by Dallas Makerspace should be considered "secondary", "temporary", and/or "working". "Primary" and "backup" should be kept elsewhere by the member to reduce chances of loss/damage.

**Available File Storage**

## Less permanent options (aka "Temporary")

### Local drives on DMS provided computers

Local drives on systems provided by DMS are often protected by "deep freeze" or a similar configuration, which will "return to previous" on a reboot. Even those which are not so configured, should be considered **temporary at best**, and subject to deletion at any time.

### Local drives on [DMS JumpServer](/dms-source/archive/systems-and-infrastructure/jumpserverfaq/)

The local file system on the JumpServer should be considered temporary, and is subject to deletion at any time. Technically, after 3 days without login, or when space is needed, profiles are purged.\
**Consider it temporary!**

## Semi-Permanent Options (aka "Working")

### Members Storage

- Path options:
  - \\files\members
  - \\192.168.200.20\members

<!-- -->

- Windows Mapped Drive:
  - M:\\

#### How do I know which one is mine?

Right now, but soon to change, you create your own folder. Use your DMS Domain username, because after that upcoming change, it will be thus assigned.

#### Can I set Security Permissions on My Subfolders?

Not at this time.

#### How much space do I get?

Currently there are no quotas. Anything over 50gb will likely result in a conversation with the sysadmins, though. Future plans call for quota, TBD.

#### How "permanent" is it?

We do everything we can to keep this indefinitely. However, under the current system, all users have all rights (777 to you \*NIX folks) and therefore, anyone can delete anything at any time. [Act accordingly](/dms-source/archive/systems-and-infrastructure/storing-computer-files/#Most_Permanent_.28aka_.22Backup.22.29).

### Committees Storage (and vCarve)

- Path options:
  - \\files\committees
  - \\192.168.200.20\committees

<!-- -->

- Windows Mapped drive:
  - N:\\

<!-- -->

- Windows Mapped drive path for vCarve:
  - N:\woodworking\CNC Router\\Programs

#### How do I know which one is mine?

If you don't know, you probably should NOT be storing anything in the Committee Storage. The vCarve folder noted above is the only exception; therein please create your folder with your DMS username.

#### Can I set Security Permissions on My Subfolders?

Not at this time.

#### How much space do I get?

Currently there are no quotas. Anything over 50gb will likely result in a conversation with the sysadmins, though. Future plans call for quota, TBD.

#### How "permanent" is it?

We do everything we can to keep this indefinitely. This is monitored, however, to help keep us on the straight and narrow of making sure it's "committee related". Please do NOT store personal files there. There is no need (except vcarve, see above)

### Temporary Storage

- Path options:
  - \\files\temporary
  - \\192.168.200.20\temporary

<!-- -->

- Windows Mapped Drive:
  - T:\\

#### How do I know which one is mine?

I don't know anything about the t: drive.

#### Can I set Security Permissions on My Subfolders?

Not at this time.

#### How much space do I get?

I don't know anything about the t: drive.

#### How "permanent" is it?

I don't know anything about the t: drive.

## Most Permanent (aka "Backup")

User provided.\
Here are some suggestions:\
<http://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Doffice-products&field-keywords=usb+thumbdrive>\
<http://www.pcmag.com/article2/0,2817,2413556,00.asp>

## Offsite Access

Primary methods for accessing the "Member Drive", "Committe Drive", etc. is provided by [RDP and the JumpServer](/dms-source/archive/systems-and-infrastructure/jumpserverfaq/#How_can_I_access_the_Member_Storage_via_RDP.3F) or [ssh](/dms-source/archive/systems-and-infrastructure/jumpserverfaq/#From_Linux.2FLinux-like_Clients)

Currently no provision for "web upload" or other access is available.

## Additional Jump Server Information

Jump Server FAQs can be found [at this link.](/dms-source/archive/systems-and-infrastructure/jumpserverfaq/)
