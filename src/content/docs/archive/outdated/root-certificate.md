---
title: "Root Certificate"
description: "This information may be outdated.If you feel this is in error, please remove the {{outdated}} template."
sourceUrl: "https://dallasmakerspace.org/wiki/Root_Certificate"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Root_Certificate\">legacy DMS wiki</a> — content may be outdated."
---
**This information may be outdated.**\
If you feel this is in error, please remove the {{outdated}} template.

## Dallas Makerspace Public-Root-Certificates manual import on Windows

Reasons to import the CAcert Public-Root-Certificates manually:

- You use Windows 8 Technology (incl. Server 2012) at that the provisioning did not work as expected.
- You want to have them available for all users using this computer
- You want to have them available for services running on Windows like Outlook, Internet Explorer/Edge, Google Chrome, Opera, MS-Exchange, MS Internet-Information-Server or any other software that uses the windows certificate storage



### Preparing

Download the CAcert Public-Root-Certificates from File:RootCA.DMS.zip. This results in downloading the RootCA.DMS.zip which has the files "Root+CA.crt" and "Intermediate+Signing+Key.crt".



### Installation

Start "Microsoft Management Console" and prepare it for organize certificates. Start "MMC.EXE" as Administrator. In the File menu, you can find the function "Add/Remove Snap-In". Add Snap-In "Certificates" for the "Computer Account" and in the next screen for the "Local Computer".

Once one can see the Certificates Organization for the Computer Certificates Store. Expand the certificates folder.

Import "Root+CA.crt" into "Trusted Root Certification Authorities"

Confirm that you want to import the root certificate, and that you trust the issuer. Then be sure you trust it by Right clicking "internal-ca" as "CA cert Signing Authority" and select Properties then "Enable all purposes for this certificate."

Import "Intermediate+Signing+Key.crt" into "Trusted Root Certification Authorities"

Confirm that you want to import intermediate-certificate, and that you trust the issuer.
