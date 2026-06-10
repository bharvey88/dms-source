---
title: "JumpServerLogin"
description: "The above procedure ensures that your active directory login account is synchronized with the WHMCS system. You now use this same account for accessing the..."
sourceUrl: "https://dallasmakerspace.org/wiki/JumpServerLogin"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/JumpServerLogin\">legacy DMS wiki</a> — content may be outdated."
---
## Credentials

- You will need to create your Active Directory (AD) login account for the JUMP Server through our billing system (WHMCS).
- If you have an account in WHMCS, you will need to do the following to create your AD account:
  - Log in at: <https://accounts.dallasmakerspace.org/accounts/clientarea.php>
  - In the Top Right corner, click the drop down menu that says, "Hello, YOURFIRSTNAME"
  - Click, "Edit Account Details"
  - Do not change it, but take note of the "Username" near the bottom. That is the name of your LDAP account and will be the name of the AD account (once created).
  - Click "Save Changes" (blue button near the bottom)
  - Go back to the Top Right corner, click your name on the dropdown menu again
  - Click, "Change Password" (You must type in new passwords, even if they are the same as your old passwords)
  - Click the blue "Save Changes" button.

The above procedure ensures that your active directory login account is synchronized with the WHMCS system. You now use this same account for accessing the JUMP server, general use laptops, Wiki, Maker Manager, and voting.

## Connection information

Access to the JUMP server is primarily through the use of a [Remote Desktop Client application](https://en.wikipedia.org/wiki/Comparison_of_remote_desktop_software). This software is available on Windows, Mac, and Linux desktops. On the laptops available at the Makerspace, the Linux client is "Remmina"

Use this address: physical.dallasmakerspace.org

Your username will be the one you took note of from the "Username" on Account Details above. The domain used is "dms". The easiest way to do this is simply use dms\username (where username is obviously replaced by whatever your username is) as the username. **YOUR USERNAME WILL NOT BE AN EMAIL ADDRESS AND WILL NEVER CONTAIN AN @ IN IT** The backslash character is the one above the Enter key.

Additional information can be found in the [Jump Server FAQ](/dms-source/archive/systems-and-infrastructure/jumpserverfaq/)

## For the Linux Users

This server also allows you to secure shell (SSH) into the server, providing a command line environment within the DMS network. It can be accessed like so:

     ssh <username>@physical.dallasmakerspace.org -p 2222

You can also mount the members and committee files from the file server to your home machine using the following command:

      sshfs -p 2222 <username>@physical.dallasmakerspace.org:/home/<username> /<some_directory_on_your_home_machine>
