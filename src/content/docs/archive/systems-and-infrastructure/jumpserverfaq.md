---
title: "JumpServerFAQ"
description: "The Jump Server allows remote access to some DMS software and tools."
sourceUrl: "https://dallasmakerspace.org/wiki/JumpServerFAQ"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/JumpServerFAQ\">legacy DMS wiki</a> — content may be outdated."
---
## What is the Jump Server?

The Jump Server allows remote access to some DMS software and tools.

## What are some of these software packages and tools?

- VCarve
- Fusion 360
- Member storage space

## What if I want to see "Software X" on here?

We **MAY** be able to accommodate. Create a [request](https://talk.dallasmakerspace.org/c/issues-requests) to ask for it.

We cannot accommodate requests for Adobe Creative Suite or its components (Illustrator, Photoshop, etc.), as our licensing does not allow unlimited access.

## How do I Access the Jump Server?

### What is the Connection Information...

physical.dallasmakerspace.org

### Is there a special port?

No. The port should be the default port for Windows RDP: 3389. For Linux services ports, see the Linux section.

### Credential (Login) Information

#### What is my Username?

Your username will be the (Active Directory) DMS.LOCAL domain username assigned from your WHMCS (Billing system) account. See below "[How do I find out...](/dms-source/archive/systems-and-infrastructure/jumpserverfaq/#How_do_I_find_out.2FActivate.2FSynchronize_My_Credentials.3F)" for more information.

Note1: for discussions about the Jump Server, **YOUR USERNAME WILL *NOT* BE A UPN (UserPrincipleName, aka"eMail address") AND WILL NEVER CONTAIN AN @**

Note2: Don't forget to put a backslash '\\ character *after* the domain and before your username (usually entered into the client as *dms\username* ). The backslash character is the one directly above the Enter key on most keyboards.

Note3: Use the model domain\username (e.g. *dms\username* ) to enter your credentials into the client software's GUI, if applicable.

Here's an example using the Windows RDP client:

<img src="/dms-source/files/mw/thumb_2_2f_Dms_rdp.PNG_100px-Dms_rdp.PNG" width="100" height="120" alt="Dms rdp.PNG" />\

#### What **Domain** is used?

The domain used is "dms". Don't forget to put a backslash '\\ character after the domain and before your username (usually entered into the client as *dms\username* ). The backslash character is the one directly above the Enter key on most keyboards.

#### How do I find out/Activate/Synchronize My Credentials?

Follow the process on [this page](/dms-source/archive/systems-and-infrastructure/how-to-enable-your-active-directory-login/) to find out/change/troubleshoot credentials issues.



## How do I access Windows Virtual Machines/Tools?

### How can I access Windows Virtual Machines/Tools via RDP (Remote Desktop Protocol)?

Access to the JUMP server Windows Virtual Machine is primarily through the use of a [Remote Desktop Client](https://en.wikipedia.org/wiki/Comparison_of_remote_desktop_software). This software is available for Windows, Mac, and Linux clients as well as iOS, Android, and other platforms. Using the connection information and user credentials noted in their respective sections, plug in to the client and BOOM! you're in like Flynn.

#### How do I use RDP from Windows?

- Click on the Windows Logo in the lower left corner of the screen.
- Start typing: Remote Desktop
- Click on the shortcut for 'Remote Desktop Connection' that will be listed as one of the search results in the right sidebar.

or

- Click on the Windows Logo in the lower left of the screen,
- Click on "All Apps", "Windows Accessories", "Remote Desktop Connection"

or

- Hold down the Windows Logo Key and hit the R key
- Type MSTSC.EXE into the Run box and hit Enter

#### How do I use RDP from Linux?

You can use any of the remote desktop clients for linux, such as remmina or rdesktop; however, at this time (9/2015) remmina does not appear to succeffuly share your local folder. To use rdesktop you should use the following command

       rdesktop -d DMS -u wandrson -p <password> -r disk:mydisk=/home/wandrson physical.dallasmakerspace.org -r sound:local -f

where you replace:\
*wandrson* with your DMLS.LOCAL domain user name\
*\<password\>* with your DMLS.LOCAL domain password (or just - if you want it to prompt you)\
and */home/wandrson* with the full path on your machine that you want to be able to access while on the Jump Server

If you have trouble seeing the mouse cursor, go to the control panel on the remote desktop and disable mouse pointer shadow (source: <http://superuser.com/questions/549275/rdesktop-windows-7-mouse-pointer-invisible-no-black-outline>)

The rdesktop application does not allow resizing the window. For this reason, you should probably add a -g to specify a resolution. I would recommend a percentage like "-g 90%".

#### How do I use RDP from Mac OSX?

- Download 'Microsoft Remote Desktop' from the Apple App Store
- Launch the app by clicking on the "Microsoft Remote Desktop" icon, in application menu.
- Configure (or select, if already configured) the session you wish to connect to (in this case: physical.dallasmakerspace.org)
- Log in with DMS.LOCAL domain account (format: dms\username ).

#### How do I use RDP from iOS?

- Download 'Microsoft Remote Desktop' from the Apple App Store
- Launch the app by clicking on the "RD Client" icon.
- Configure (or select, if already configured) the session you wish to connect to (in this case: physical.dallasmakerspace.org)
- Log in with DMS.LOCAL domain account (format: dms\username ).

#### How do I use RDP from Android?

- Download 'Microsoft Remote Desktop' from the Android Play Store: <https://play.google.com/store/apps/details?id=com.microsoft.rdc.android&hl=en>
- Launch the app by clicking on the "RD Client" icon.
- Configure (or select, if already configured) the session you wish to connect to (in this case: physical.dallasmakerspace.org)
- Log in with DMS.LOCAL domain account (format: dms\username ).

### How can I access the Member Storage via RDP?

#### What is the Name of the Server/Mapped Drive?

Please see [Storing computer files](/dms-source/archive/systems-and-infrastructure/storing-computer-files/).

#### From Linux/Linux-like Clients

- If using rdesktop for Linux, try this: % rdesktop -r 'disk:local disk=/some/path' physical.dallasmakerspace.org

#### From Mac Clients

Mac clients, like Linux, only share a specific local folder with the remote operating system.

It is important to configure this BEFORE connecting:

##### Microsoft Remote Desktop for Mac (version 8.x)

Select the connection to edit (or create a new one)

- Go to edit
- Click the Redirection tab
- Ensure "Enable folder redirection" is checked
- Hit the + mark on the bottom left corner
- Enter the friendly name for the local folder you wish to share (you can use whatever you like here; it's just for you)
- Use the "Path" field to enter the full local path to the folder you wish to share (most folks will "Browse..." for it)
- Select necessary confirmatory responses to return to the Remote Desktop app.
- Connect to the RDP

##### Microsoft Remote Desktop for Mac (version 10.x)

Select the connection to edit (or create a new one)

- Select the "Folders" tab
- Tick the box for "Redirect Folders"
- Click the "plus symbol" to add a redirect folder
- Enter the friendly name for the local folder you wish to share (you can use whatever you like here; it's just for you)
- Use the "Path" field to enter the full local path to the folder you wish to share (most folks will "Browse..." for it)
- Select the necessary confirmatory responses to return to the Remote Desktop app
- Connect to the RDP

------------------------------------------------------------------------

Once in you can treat find the folder you shared under Windows Explorer, Devices and Drives, named "friendlyname on yourmac'scomputername". You may copy & paste files to and from this folder as if it were native. Likewise, in your Mac Finder, you can continue to treat the folder like the local folder it is, retrieving files placed there on the remote server, or placing new files there to copy to another location through the remote server.

#### From Windows Clients

<img src="/dms-source/files/mw/thumb_8_8c_Mstsc_loc_devs.png_300px-Mstsc_loc_devs.png" width="300" height="187" /> Local Devices and Resources

Configure "clipboard" and/or "drive share" in the Remote Desktop Connection "Show Options" settings. These are usually available once the application has launched, by clicking the "Show Options" expansion button in the bottom left corner of the window. Then open "Local Resources" tab. Under the "Local devices and resources", printers and clipboard can be checked or unchecked. Other "Local devices and resources" such as disk drives, can be found under the "More..." button.

##### Navigation

- While remote desktop'd in, Windows-Key E, and select a drive and move down from there.

Alternately: Windows-Key R, type in server name and press enter, navigate from there.

##### Methods

- As long as "clipboard" is enabled copy and paste from client to server and vice versa will work with Microsoft clients and possibly others.
- If the "local drive" resource is set to available on the client, and you will find a "c: on yourclientsname" drive on the computer you have rdp'd into on Microsoft Clients.

## How can I access Linux Virtual Machines/Tools?

### How can I access Linux tools via ssh?

     ssh -p 2222 username@physical.dallasmakerspace.org

Where *username* is your DMS.LOCAL domain username. You will be prompted for your DMS.LOCAL domain password.

### How can I mount the Member Storage (from \*NIX)?

     sshfs -p 2222 username@physical.dallasmakerspace.org:/mnt/files /some_directory_on_your_home_machine

Where *username* is your DMS.LOCAL username. You will be prompted for your DMS.LOCAL password. Because this, like any "mount" action in Linux, requires a directory on which to mount the requested file system, the directory */some_directory_on_your_home_machine* should be created first.

Dismount with e.g.

    sudo umount -f /some_directory_on_your_home_machine

### How can I simplify the two things above?

Edit your .ssh/config file…

     nano ~/.ssh/config

Add a section like the following. *roughvagabond* is your DMS.LOCAL domain user name.

     Host dms
             HostName physical.dallasmakerspace.org
             User roughvagabond
             Port 2222

Create a place to mount the Member Storage…

     mkdir ~/dms

Mount the Member Storage…

     sshfs dms:/mnt/files ~/dms

You will be prompted for your DMS.LOCAL domain password. Enjoy…

     cd ~/dms/members/roughvagabond
     ls -l

When you are finished…

     cd ~
     sudo umount -f ~/dms

The next step is optional; remove the directory…

     rmdir ~/dms

After adding the *dms* section to your .ssh/config file connecting with the secure shell is much less typing (as is mounting the Member Storage)...

     ssh dms

You will be prompted for your DMS.LOCAL domain password.

## Using the Jump Sever with Arduino and similar devices

In Windows:

1.  Connect the Arduino to the local computer.
2.  Start the Remote Desktop Connection
3.  Click Show Options…<img src="/dms-source/files/mw/thumb_6_6f_Port_mapping_step_1.png_300px-Port_mapping_step_1.png" width="300" height="186" alt="Port mapping step 1.png" />
4.  Click Local Resources…<img src="/dms-source/files/mw/thumb_e_ed_Jumpdrive_portmapping_2.png_300px-Jumpdrive_portmapping_2.png" width="300" height="349" alt="Jumpdrive portmapping 2.png" />
5.  Click More…<img src="/dms-source/files/mw/thumb_3_3a_Jumpdrive_portmapping_3.png_300px-Jumpdrive_portmapping_3.png" width="300" height="349" alt="Jumpdrive portmapping 3.png" />
6.  Ensure Ports is selected…<img src="/dms-source/files/mw/thumb_7_7e_Jumpdrive_portmapping_4.png_300px-Jumpdrive_portmapping_4.png" width="300" height="280" alt="Jumpdrive portmapping 4.png" />
7.  Click OK
8.  Click Connect
9.  If a warning is displayed click Connect.
10. Ensure the correct port is selected in the Arduino IDE and enjoy.

## What if All That Does Not Work or I Have Other Problems?

Gather as much information as possible, and be as descriptive as possible, and if you can, submit a request for assistance on [Talk](https://talk.dallasmakerspace.org/c/issues-requests).

Otherwise email infrastructure@dallasmakerspace.org with as much information and description as possible.
