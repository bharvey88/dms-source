---
title: "Other Payments"
description: "This information may be outdated.If you feel this is in error, please remove the {{outdated}} template."
sourceUrl: "https://dallasmakerspace.org/wiki/Other_Payments"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Other_Payments\">legacy DMS wiki</a> — content may be outdated."
---
**This information may be outdated.**\
If you feel this is in error, please remove the {{outdated}} template.

This page is to address the need of other payment types to DMS.

From the ToDo List \[[\[1\]](http://dallasmakerspace.org/wiki/Maker_Space_ToDo_list)\]

    on the payments, would be nice someday to offer additional choices for the occasional paypal-phobes (e.g. paypal, google, amazon, CC, etc)

As of 2011-02-28, DMS only accepts payments from PayPal.

## Options

- PayPal
- Google Checkout
- Amazon
- Credit Card



## PayPal

What is the current rate charged by PayPal?

## Google Checkout

- Easy to get started
- "Buy Now" Button Generator

We need:

- A Google Account
- Someone to setup Google Checkout (Pretty easy & straight forward)

Pretty Button: <img src="/dms-source/files/mw/4_4a_Google_checkout_button.png" width="327" height="116" alt="Google checkout button.png" />



## Amazon

- Somewhat easy to setup
- "Buy Now" button generator

## Credit Card

- Difficult to startup
- Cheapest transaction rates

To directly accept credit cards, DMS will have to setup a merchant account with a bank offering a credit card processing gateway.

Some large banks that offer a credit card gateway:

- Chase
- First Data
- Mercury Payment Systems
- Fifth Third
- Costco(?)

Recently, VISA and MasterCard have teamed up to ensure customer security. These requirements on merchants are called PCI-DSS (Payment Card Industry-Data Security Standards) and outline specific security and privacy best practices. There are certain levels of PCI certification depending on how many transactions a company generates. The highest level is PCI-DSS Level I, which will require an investment in excess of \$100,000 in resources to obtain proper certification.

The interfaces required to implement credit card processing range from SOAP, XML, HTTP POST, to TCP/IP, and even lower level protocols. IMHO, between the first 4 banks, Chase is easiest to implement with.
