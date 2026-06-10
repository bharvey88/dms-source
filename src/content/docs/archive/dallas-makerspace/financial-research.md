---
title: "Financial Research"
description: "This information may be outdated.If you feel this is in error, please remove the {{outdated}} template."
sourceUrl: "https://dallasmakerspace.org/wiki/Financial_Research"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Financial_Research\">legacy DMS wiki</a> — content may be outdated."
---
**This information may be outdated.**\
If you feel this is in error, please remove the {{outdated}} template.

This page is for notes about the current issues the financial committee is having, and the research that is being done on how to solve the problems.

## Current Issues

- We are not effectively tracking current membership status, and are not up to date on membership audits. This makes it difficult to estimate our expected income.
  - To-do: A membership audit needs to be performed.
  - To-do: Find software which helps us track membership.
    - **{Completed} Solution**: Implement invoicing and billing system. (We chose [WHMCS](http://dallasmakerspace.org/wiki/Whmcs))
      - Benefits of WHMCS:
        - Sends welcome e-mails when an user joins and improves the on-boarding process.
        - It can receive IPN notices from Paypal and updates a member's due date.
        - Generate reports on expected income.
        - Tracks membership, which was not done effectively for people who paid with cash.
        - Generate e-mails to remind people (especially those who pay with cash) of their due dates.
        - Reduces work load of the financial committee.
        - Effectively stores user information (such as RFID key#'s).
- We are behind on balancing the checkbook.
  - To-do: Enter recent receipts into Gnucash and find which receipts we're missing to balance checkbook for August.
  - **{Completed} Solution**: We did a reconcile on the past 6 months during the November finance committee meeting.
- We need to keep better track of our bills.
  - To-do: Ensure we are tax exempt on all of the things we pay for monthly.
  - **{Completed} Solution**: Send tax exempt paperwork to each of the utilities. However, we need to ensure this is applied during the next billing cycle.
  - To-do: List our monthly expenses.
  - **{Completed} Solution**: [www.dallasmakerspace.org/wiki/Expenses](http://www.dallasmakerspace.org/wiki/Expenses)
  - To-do: Some of the bills over the last few months were for unexpected amounts. We need to do research and find out why a few of the bills were much higher than usual.
  - To-do: Sign up with auto-pay for the water bill.
  - **{Completed} Solution**: Signed up for auto-pay on 10/7/2012.
- Only John was entering receipts, and others need to get up to speed on how to enter transactions into Gnucash. Others may be avoiding Gnucash because it's not very user friendly.
  - To-do: Research other software and see if other software has benefits besides just making it easier to enter transactions. (Gnucash is not that hard.) Paypal integration would help, because getting transactions from Paypal to Gnucash is difficult.
- Members need to sign up for a paypal account in order to pay us automatically each month with a credit card.
  - To-do: Sign up for paypal's Enhanced Recurring Payments feature.
  - **{Completed} Solution**: The board allocated funds and signed up for paypal enhanced recurring payments.
- Interest rates on savings could be much higher, and we could get rewards from paying with debit if we switched banks. Current bank (Chase) also has a 200 transaction limit (\$0.40 fee on each transaction over). However, it is nice that the current bank is local and has branches everywhere.
  - To-do: Switch savings to a 12 month CD. Maybe Ally bank?
  - To-do: Get a rewards checking account with a better bank.
- DMS could be getting cash back when paying bills and have a line of credit if financing a purchase is ever necessary.
  - To-do: Get a business credit card.
  - Solution: Robert did this, and we are currently waiting for an acceptance.

## Solutions (taken from 2 emails Paul Brown sent Hackerspace.org)

    Recurring payments are our secret weapon too. We started by using recurring buttons for memberships through paypal. Now we have
    a checkout system which also does some user provisioning.

    Since Dallas Makerspace is a 501(c)3, Paypal had the best pricing we could find for our amount of transactions. They have a discounted
    rate of 2.2% + $.30 per transaction for non-profits. If you're a 501(c)3 using paypal and not getting this rate, call them!

    Paypal also has API features which we use to track payments. Every time a transaction is made, Paypal alerts WHMCS
    that the user made a payment and marks them as paid. At the end of the month, we look through the people who are "overdue"
    and remove them from access control. If I was to start all over again, I would probably use Freshbooks + Paypal. However,
    Freshbooks looks like it will only track users who signed up through Freshbooks and getting all of our existing members to
    sign up through freskbooks would be a pain.

    If you absolutely can't stand paypal, some other (more expensive) options for recurring payments are:
    stripe.com
    http://www.beanstream.com/
    Google Checkout

    Side-note about payment gateways (like Authorize.net):
    Keep in mind, if you pick a payment gateway like Authorize.net, then you will also need a merchant account (which is
    most of the costs). For example, Authorize.net has a monthly fee of $20 + a per transaction fee of $.35 and a merchant
    account can charge a monthly fee of $10 + ~$.30 per transaction + ~.5% to ~2.5% depending on the credit card.
    There are also setup fees for both the merchant account and authorize.net. I think this option only makes sense
    if you're getting the 200+ transactions a month that Hacker Dojo probably gets.

    TL;DR: Steer clear of payment gateways unless you're huge, and use paypal with some type of invoicing system to track payments.

    Paypal has an option to automatically transfer your funds out of your paypal account and into your bank account at
    the end of each day. However, they won't enable this unless you call them and ask for it.

    This prevents large amounts of money from getting caught in limbo if you get your account frozen (which has never happened to us).

    There is a downside to using paypal for recurring payments which I forgot to mention. It requires people to have a paypal account
    unless you give paypal an extra $20/month for "enhanced recurring payments". We do the $20/month because the alternative means more
    people paying with cash. And, most of the people who start paying with cash do not pay at all or at least require reminders.

## Other Hackerspaces

I'm interested in the solutions other hackerspaces are using to manage their finances. This list contains software solutions, their pro/cons, and what other hackerspaces are using them for.

### ATX Hackerspace

- Freshbooks - Online accounting software. It allows them to crowdsource their finances.
- Authorize.net - Payment gateway. More expensive than Paypal.

### HacDC

- Quickbooks

## Suggested Software Solutions

Currently we use Gnucash for bookkeeping, and when we research started we did not have a invoicing/billing system.

- "There are three major components to a modern accounting system: payment processing, invoicing, and bookkeeping." -[Noisebridge](https://www.noisebridge.net/wiki/Treasury)

<!-- -->

- [Paypal Partners for Accounting, Invoicing, Billing](https://cms.paypal.com/us/cgi-bin/?cmd=_render-content&content_ID=developer/solutions_acct_invoice_billing)

### Payments

- Paypal
  - Currently giving us the non-profit rate of 2.2% + \$0.30 cents per transaction.
  - We have a business account with paypal payments standard.
  - We can accept recurring payments without people needing to have an account with paypal for \$20 more a month. [Enhanced Recurring Payments](https://merchant.paypal.com/us/cgi-bin/?cmd=_render-content&content_ID=merchant/erp_overview)
  - Seems like the least expensive option.
- Authorize.net
  - "Still need a merchant account which has fees close to .30+3% or something. You usually end up paying more if you have few transactions, and less if your have more if you go with you own gateway."
  - \$99 authorize.net setup + \$75 merchant account setup
  - (\$20 monthly fee) + (\$35 per month for merchant account) + (\$10 for recurring billing feature) + (\$0.35 per transaction) + (\$0.15 per transaction) + (0.30% per transaction)
  - Merchant Account with non-profit discount: <http://www.dharmams.com/rates-fees/by-internet-mail-phone/non-profit>
  - WHMCS supports tracking recurring payments through authorize.net
- Amazon Payments
  - 2.2% + \$0.30 per transaction
  - "Volume discounts on processing fees are available for all transactions of \$10 or more."
  - Recurring payments don't work with WHMCS tracking.
  - It does work with Seltzer CRM though.
- Stripe.com
  - "2.9% + 30 cents per successful charge. No setup fees, no monthly fees, no card storage fees, no hidden costs: you only get charged when you earn money."
  - No non-profit pricing.
- Dwolla
  - Requires the person to give their bank account information.
  - WHMCS doesn't accept their recurring payments: <http://www.whmcs.com/appstore/473/Dwolla-Payment-Gateway.html>
  - Extremely low fees
  - Offers recurring payments: <http://help.dwolla.com/customer/portal/articles/235874-how-can-i-setup-a-recurring-payment->

### Invoicing and Billing

- [WHMCS](http://whmcs.com/) (Andrew) - Membership tracking and invoicing. Usually used by webhosting companies for subscription based services. Integrates with paypal and tracks membership.
  - Allows us to track existing customers through Paypal's IPN notifications.
  - [We have decided to implement this.](http://dallasmakerspace.org/wiki/Whmcs)
  - Need to host it on your own server.
- [Seltzer CRM](http://hackerspaces.org/wiki/Seltzer_CRM)
- [Apache Ofbiz](http://ofbiz.apache.org/) (Kent) - Business information software. Tracks a lot of information, is very customizable, but is fairly complex.\\
- [Freshbooks](http://freshbooks.com)
  - Online access
  - Has web-based API that appears easy to use
  - iPhone and Android apps for maintaining it
  - uses handy buzzwords like 'crowd source' (which we need)
  - Looks like we would have to have customers sign up through freshbooks in order to have them tracked by freshbooks.
- [Chargify](http://chargify.com/)
  - Expensive
- [CheddarGetter](http://cheddargetter.com/)
- Paypal's Recurring Payment Dashboard

Update 12/2/2014:

- <http://killbill.io/>
  - Open source and free
  - Lots of supported gateways

### Accounting

- GnuCash
  - Free
  - Double entry
- Quickbooks
  - Does not allow crowdsourcing, but has 3 licenses.
  - Seems like the most widely used by businesses, accountants, and bookkeepers.
- Quickbooks Online
  - "You can now connect your QuickBooks Online company with your PayPal account. To set it up just go to the Online Banking option under the Banking menu and click Set Up Connections."
- Kashoo
  - Has an auto-reconcile feature to auto-balance the checkbook based on transactions in the checking account.

## Evaluation (Written By Pat)

1.  Requirements
    1.  Generate reports and paperwork
        1.  Support generating [IRS Form 990](http://en.wikipedia.org/wiki/IRS_Form_990#990) in less than an hour.
        2.  Support generating [IRS Forms 1099](http://en.wikipedia.org/wiki/IRS_Form_990#1099_series) in less than 5 minutes each, not counting loading custom forms into the printer and getting them aligned.
        3.  Generate gift acknowledgement letters in less than 5 minutes each.
        4.  Support generation of financial statements (e.g., for bank loan applications) in less than 5 minutes.
        5.  Support generation of periodic reports to the board or membership in less than 5 minutes.
        6.  Generate inventory report in less than 5 minutes.
    2.  Must be able to handle all transactions without requiring transfer of paper documents from one person to another except the following:
        1.  coins and currency
        2.  Note: transferring other paper documents is allowed, just cannot be required.
    3.  Handle error-free transactions of the following types in less than 2 minutes each:
        1.  Membership renewal
        2.  Request for reimbursement
        3.  Membership expiration
        4.  Donation of money
    4.  Handle all other error-free transactions in less than 10 minutes each. Transactions include:
        1.  Membership initial application.
        2.  Donation of equipment / tools.
    5.  Handle error-containing transactions of the following types in less than 10 minutes each:
        1.  Membership initial application
        2.  Membership renewal
        3.  Request for reimbursement
        4.  Membership expiration
    6.  Handle all other error-containing transactions in less than 15 minutes each.
    7.  Require that certain transactions be approved by the appropriate person(s). These transactions include:
        1.  Any payment by DMS.
    8.  Document each transaction entered, who entered it, and when.
    9.  Document that each transaction needing approval was approved, who approved it, and when.
    10. All transactions entered over an hour ago must survive failure of any one hardware component.
    11. All transactions entered more than 24 hours ago must survive failure of any two hardware components.
    12. Hosted on DMS host and accessible via Internet
    13. Automatic Paypal Integration
        1.  Transactions from Paypal are automatically pulled into the accounting software.
    14. John Haskins requests the system to be "Double Entry".
2.  Suggestions:
    1.  Define that all memberships start at the beginning of the first day of a month and expire at the end of the last day of a month.
        1.  Objection: This would require all current and members to pay a prorated rate initially. There are enough advantages to justify this hassle.
3.  Decisions needed:
    1.  If memberships start on the first day of a month, decide what to do for payments made during that month. Possible answers: prorate the cost of the first month; start memberships paid on or before the Nth day of the month at the beginning of that month and memberships paid after that day at the beginning of the next month.
    2.  If needed, decide what value to use for N.
    3.  What is the grace period for expired memberships with respect to deactivating building access?
    4.  What is the grace period for expired memberships with respect to removal from the wiki?
    5.  What is the grace period for expired memberships with respect to removal from the mailing list?
    6.  Re hosting: do we really want to host this on the DMS server, or is it OK to use someone else's server?
4.  Use cases:
    1.  Joe Blow signs up as a new member on the web page using the PayPal recurring option, shows up the next Thursday and signs the form and gets his card or fob.
    2.  Jane Blow signs up as a new member on the web page using the PayPal annual option, shows up the next Thursday and signs the form and gets her card or fob.
    3.  Julian Blow signs up as a new member on the web page, shows up at the next Thursday meeting, signs the form, but isn't issued a card or fob. (Maybe we're out, maybe no one can find one, maybe everyone forgot, ...)
    4.  Judith Blow signs up as a new member on the web site using some PayPal option but never shows up for a meeting.
    5.  John Blow shows up at a Thursday meeting and gives someone a check, signs the form, and gets his fob or card.
    6.  Jackie Blow shows up at a Thursday meeting and gives someone a check, signs the form, and gets her fob or card, but a few days later the check bounces. (Do we need a separate use case for the PayPal options that bounce?)
    7.  Jean Blow shows up at a Thursday meeting (regardless of how she paid) and gets her card or fob. She doesn't sign the form or someone loses the form before processing it.
    8.  After Joe Blow has been a member for a while, he cancels the PayPal recurring charge. (How do we decide whether he wants to cancel his membership or just start paying a different way?)
    9.  After Jane Blow has been a member for a year, she goes to the web site and sends another payment.
    10. After Jane Blow has been a member for a year, she doesn't go to the web site and send another payment.
    11. Jacob Blow donates money on the web page.
    12. Jenny Blow donates money by cash or check.
    13. Jacques Blow donates money by check but the check bounces.
    14. Jessica Blow signs up as a family member of Joe Blow at the same time as Joe using the same payment option.
    15. Jamal Blow signs up as a family member of Jane Blow using the monthly recurring option. (Recall that Jane used the annual option.)
    16. After a year, Jane Blow doesn't make a payment but Jamal's monthly payments are still coming in.
    17. DMS buys a new tool from a company, paying by check or debit card.
    18. DMS buys some supplies from a company, paying by check or debit card.
    19. DMS reimburses Jill Blow, non-member, for some supplies, paying by check.
    20. DMS reimburses James Blow, member, for some supplies, paying by check.
    21. A fire in the building destroys a lot of stuff, some of which is not specifically identifiable.
    22. Someone breaks into the building and steals a lot of stuff.
    23. John Blow violates something in the membership agreement and the Board decides to terminate his membership.
