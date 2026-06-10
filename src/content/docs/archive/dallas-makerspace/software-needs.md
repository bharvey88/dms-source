---
title: "Software Needs"
description: "This page describes software projects which would be helpful to Dallas Makerspace."
sourceUrl: "https://dallasmakerspace.org/wiki/Software_Needs"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Software_Needs\">legacy DMS wiki</a> — content may be outdated."
---
This page describes software projects which would be helpful to Dallas Makerspace.

## Improve Membership Statistics Page (Paul Brown)

Current membership statistics page: <https://dallasmakerspace.org/misc/membership_table.php>

**Requirements:**

- Add month selector and only show relevant yearly memberships within the last 12 months.
- Add stats for:
  - New yearly memberships
  - Family memberships
  - Regular monthly memberships
  - Net increase over last month
- Add a graph for net increase by month.

**Solution (work in progress):**

- Link: <http://membership-numbers.herokuapp.com/>
- Github: <https://github.com/pawl/dms-membership-report>

## Energy Saving Software (Paul Brown)

**Requirements:**

- Scrape the Texas Smart Meter site and add the information to the database so we can track our progress on saving electricity: <https://github.com/ChrisAlvares/SmartMeterTexasPhantomJS>
- Remotely control WIFI thermostats by creating a script to scrape and control the WIFI thermostat website. (or use an API?, brooks applied for beta access)
- Allow triggering the temperature change with a POST request. (this will allow other applications to change the temperature)
- Add functionality to G-cal Manager to send a post request when a class is about to occur.

## Calendar Replacement (Paul Brown)

**Requirements:**

- Community events management (allow users to submit events and have them approved by the PR group)
- Must be responsive and look good on mobile screens
- [Allow adding events for specific rooms](/dms-source/archive/dallas-makerspace/room-booking/)
- Automatically push events to facebook, eventbrite, google calendar, and meetup
  - We also need it to remove events when events are deleted or cancelled

~~**Idea \#1:** Create an add-on for [The Events Calendar](https://github.com/moderntribe/the-events-calendar) that publishes events to facebook, meetup, and eventbrite. The eventbrite add-on looks like it can push events, but not automatically. The facebook add-on only imports events. And there is no meetup.com add-on.~~

~~**Idea \#2:** Modify [Hacker Dojo's events calendar](https://github.com/hackerdojo/hd-events) to suit our needs. Unfortunately, this requires using google app engine and doesn't have as much out of the box functionality as idea \#1.~~

~~**Idea \#3:** Use [Full Calendar](http://arshaw.com/fullcalendar/) for the calendar's front-end. Create a [backend](https://github.com/vinsol/fullcalendar_rails) for the calendar with an approval process for submitting new events. Then add the functionality for the calendar to read and write events to/from Facebook, Eventbrite, Google Calendar, and meetup.com.~~

~~**Idea \#4:** Create a program which only finds and fixes the differences between google calendar, meetup, facebook, and eventbrite. (could be a good step \#1)~~

Solution: Paul made an web app for this: <http://www.calendaradmin.com>

## Volunteer Opportunities Tracker (Paul Brown)

**Requirements:**

- At the top it needs to say "This is not a TODO list for you to use to mandate other volunteers to do work for you."
- It will allow users to create a "Volunteer Opportunity". A volunteer opportunity will be a task the user is willing to own (see to completion themselves if necessary), but the owner needs help from the group to complete it.
- Allow non-owners to attach themselves to a task (or get officially involved with a task).
- Allow the owner to provide updates, possibly send reminders to the people involved. The owner will post updates on progress and who is helping.
- Allow users to comment on tasks (also allow users to upvote/downvote comments)

~~**Idea \#1:** Add the functionality to Maker Manager. Create a table for comments, tasks, and users involved with tasks.~~

Solution: We've been using Trello for this.

## Cancellation Link (Paul Brown)

Requirements:

- Allow an user to go directly to the cancellation page in our billing system (WHMCS) with a link.
- The URL would be: <https://dallasmakerspace.org/accounts/clientarea.php?action=cancel&id=> (id needs to be filled with their product ID, which will need to be looked up by the script)

**Idea \#1:** Make the page on Maker Manager and make it similar to the Billing function under the site/ controller.

## Paypal Export Parser for Quickbooks (Paul Brown)

Requirements:

- Add transaction numbers to the IIF file which comes from paypal or convert the CSV to a format which can import.
- Needs to automatically change the debit and credit accounts when appropriate. For example, laser fees don't go to membership dues (which is the default).

**Solution**: <https://github.com/pawl/dms-iif-parser> (still a work in progress, just hacked something together that barely works)

## Add Categories To ["How Did You Hear About Us?" Page](http://dallasmakerspace.org/misc/howdidyouhearaboutus.php) (Paul Brown)

Requirements:

- [The page](http://dallasmakerspace.org/misc/howdidyouhearaboutus.php) needs to allow sorting the answers for "How did you hear about us?" into categories and creating new categories. I want to keep the "How did you hear about us?" field as a text field so we can get as much data as possible.

**Idea \#1:**

Add two database tables to a database:

- Table 1
  - Category ID
  - Category Name
- Table 2
  - WHMCS ID
  - Category ID

Add dropdowns to the "How Did You Hear About Us?" page for categories and a new page for creating categories.

## Improve Handling of Family Member Badges In MakerManager (Paul Brown)

Requirements:

- Make family member add-ons consistent in WHMCS. Some members have a special \$60 product without any add-ons. This makes it difficult for the software to run a single query to find family members without some awkward special cases.
- Create a new table for family members. There will be a one-to-many relationship between the main person on the account and family members.
- Modify "Badge Request" page to show another drop-down when a family member is selected.
  - Ask for the family member's name and badge#.
  - Query WHMCS for whether the person has a family membership.

**Idea \#1:**

- The "badges" code in MakerManager will need to be modified:
  - Controller: <https://github.com/pawl/MakerManager/blob/master/protected/controllers/BadgesController.php>
  - Model: <https://github.com/pawl/MakerManager/blob/master/protected/models/Badges.php>
  - Form View: <https://github.com/pawl/MakerManager/blob/master/protected/views/badges/_form.php>
  - Admin View: <https://github.com/pawl/MakerManager/blob/master/protected/views/badges/admin.php>
- This might help, since we need the Request Badges page to add records for two different models: <http://www.yiiframework.com/wiki/19/how-to-use-a-single-form-to-collect-data-for-two-or-more-models/>
- The admin view needs to have way to show nested badges or we need to create a separate set of views for family members.
  - Example for a nested view is here: <http://yiiwheels.2amigos.us/site/grid#relationalcolumn>

Solution: Now we're limiting the number of active badges to the number of active products + addons.

## Allow Individual-Door Access Control in MakerManager

We will soon need to have 2 separate 4-door access controllers. We need to be able to have fine-grained access. Requirements:

- Eliminate the dropdown box box Active/Deactivated
- Add checkboxes for access to different areas:
  - Main entry
  - Warehouse (woodworking direct entry, warehouse general, warehouse back door, entry through classroom)
  - IT/Server Room (limited access)
  - Secondary entrance (limited access)
