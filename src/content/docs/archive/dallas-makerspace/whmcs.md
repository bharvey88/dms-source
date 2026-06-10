---
title: "Whmcs"
description: "At the end of september, we have begun to implement WHMCS as our invoicing, billing, and membership tracking system."
sourceUrl: "https://dallasmakerspace.org/wiki/Whmcs"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Whmcs\">legacy DMS wiki</a> — content may be outdated."
---
At the end of september, we have begun to implement WHMCS as our invoicing, billing, and membership tracking system.

## Cost:

- \$15 a month w/ branding
- Cheaper through a reseller like [Licensepal](http://licensepal.com/products/whmcs.php)

## Benefits:

- **Can receive notifications from Paypal's IPN to mark invoices paid. This means we do not have to sign up customers through WHMCS in order for them to be tracked by WHMCS.**
- Send overdue reminders.
- Generate forecasts and expected income for the year.
- Allows users to pay with multiple payment methods.

## Phase 1:

- Begin tracking all paypal payments and active memberships with WHMCS.

1.  Enter all clients (people who have payed us with paypal) into WHMCS.
2.  Enter payment gateway settings for paypal, and go to paypal account to assign IPN url. (this needed to be a direct link to paypal.php in the gateways folder)
3.  Create a "Product" for each membership type.
4.  Assign product to each person who is currently a member. (This is shown on the active subscriptions report in paypal.)
5.  Add the "due date" and paypal subscription ID to each customer's product.
6.  Turn off payment reminder and invoice due reminders in the automation settings under setup.
7.  Turn off invoice created e-mail by going to the e-mail templates and marking the checkbox for 'Do not send'.
8.  Remove link to "Domains" in the customer portal by commenting out corresponding code. (this does not apply to our business)

## Phase 2:

- Replace paypal subscription button with direct link to \$50 membership.

## Missing Functionality

- You can't "Suspend" a single product and prevent it from creating invoices automatically.
- Can't set it to only send invoices to cash users.
