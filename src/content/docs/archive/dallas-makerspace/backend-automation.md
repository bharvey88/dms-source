---
title: "Backend Automation"
description: "This page is created to document some of the business automation Dallas Makerspace is doing behind the scenes."
sourceUrl: "https://dallasmakerspace.org/wiki/Backend_Automation"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Backend_Automation\">legacy DMS wiki</a> — content may be outdated."
---
This page is created to document some of the business automation Dallas Makerspace is doing behind the scenes.

## Why Automate?

I feel automating the "real work" tasks has a special importance to non-profits like the makerspace. It's difficult to get volunteers to do "real work" tasks. In many cases, if it's not automated and you're not paying someone to do it - it won't get done.

## WHMCS

WHMCS is a billing system that automates how we track who is/isn't paying their dues. It's automatically updated when someone pays us through paypal or authorize.net. It gives us a list of "overdue invoices", which is basically a list of people whose badges we need to deactivate.

We've stopped accepting cash because it requires more manual work and is difficult to track. Also, very few of the people who were cash users were paying their dues on time (and they needed to be reminded).

## DONE: User Account Creation

<https://github.com/pawl/WHMCS_LDAP>

Paul Brown automated user account creation by making a script for WHMCS. It also syncs their password with LDAP when their password is reset.

## DONE: Automatic Overdue E-mails

Paul Brown created a script which triggers an e-mail reminding users their membership has expired and gives them a link to restart their payments on their usual day through paypal: <https://github.com/pawl/OverdueMemberCalculator>

**Update 1/1/13**: I'm no longer using the javascript calculator part of this. I'm just using a link that takes them to their account after signing in with their LDAP credentials.

## DONE: Automating Badge Deactivation

We need to make WHMCS automatically removes someone from access control when they have not paid. This task requires making a better place to store user's RFIDs than a google spreadsheet (a CRUD application, which I've built already). The application stores each user's RFID with their WHMCS userid. When an user's badge needs to be deactivated, it will know which RFID to deactivate based on the user. The part that isn't done: I need to make a python webservice running on the server at DMS that can talk to the access control system. We also need to allow the server with the billing system to talk securely with that server.

The end goal is to make a system where members can pick someone's email address, add an RFID to them, then it sends an e-mail to the admins confirming that it can be added to the RFID system. And when someone needs to be removed for non-payment, it does that automatically.

**Update 1/1/13**: The CRUD application for storing all the badges has been completed, and all the badges from the spreadsheet have been added to the database. The application also has a web service for activating and deactivating badges.

**Update 1/6/13**: This is finished and implemented using an API in [Maker Manager](/dms-source/archive/dallas-makerspace/maker-manager/). All WHMCS does is make a GET request using CURL when someone is suspended/unsuspended.

## Done: Automating WHMCS Login

I have a script that sets someone's LDAP password when they reset their password in WHMCS (which makes password resets really easy), but unfortunately it doesn't work the other way around yet. When someone changes their LDAP password through www.dallasmakerspace.org/password (<https://github.com/koppor/phpLdapPasswd>), then they are unable to log into WHMCS with that new password.

My plan is to use this: <http://docs.whmcs.com/AutoAuth>

We'll need to set an auth key in WHMCS, then we need to make a page that requires the user to log in via LDAP. Once the user is logged in with the email address they have in WHMCS, it generates a link for them to access their billing account with.

**Update 1/1/13**: This automatic login is done through [Maker Manager](/dms-source/archive/dallas-makerspace/maker-manager/). I've added a link to a page on [Maker Manager](/dms-source/archive/dallas-makerspace/maker-manager/) which asks the user to log in using their LDAP credentials, then it redirects them to WHMCS.

## DONE: Allow Signing Liability Waivers Online

Not completely sure if we want to do this. The person who is joining needs to have at least a little bit of interaction with someone at DMS before they join. Maybe that interaction will occur when they pick up their badge.

But, it's worth exploring the options for signing waivers online.

**Update 1/1/13**: The advice we were given was not to allow the users to sign the liability waivers online. But, we've made some of the form fields fillable. The liability waiver has been revamped for 2014.
