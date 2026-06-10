---
title: "Bookkeeping Software"
description: "This information may be outdated.If you feel this is in error, please remove the {{outdated}} template."
sourceUrl: "https://dallasmakerspace.org/wiki/Bookkeeping_Software"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Bookkeeping_Software\">legacy DMS wiki</a> — content may be outdated."
---
**This information may be outdated.**\
If you feel this is in error, please remove the {{outdated}} template.

## Quickbooks Online

- \$39.95 /month for "Class Tracking" feature (required for us)
- Can only import transactions from a quickbooks file? (Paypal import is going to require IIF or CSV, unless I write something that uses the quickbooks online API)

## Quickbooks Desktop

**Cons:**

- Complete pain to import transactions from Gnucash into Quickbook.
  - There are two \$200 programs that look like they can import general journal information from a CSV.
  - I made my own gnucash to IIF file converter from scratch: <https://github.com/pawl/gnucash2iif>
    - (the real script ended up being quite a bit more complex though, because i had to map the current accounts to the new accounts)
  - It's difficult to translate your existing accounts into "classes". Quickbooks doesn't work well with the imaginary accounts that Gnucash encourages.
- On the chart of accounts: It won't allow deleting or modifying multiple accounts at a time. You can't just ctrl click several accounts and delete them. This can be extremely time consuming when it imports all your accounts as "Bank" and you have to delete them.
- (not exactly a problem with quickbooks, but) Our bank requires us to pay \$ to do the direct link with quickbooks. Downloading the file manually isn't that bad though.
- The interface is surprisingly slow and buggy for such a mainstream piece of software. It uses 500mb+ of ram on average. If you see a progress bar, it's likely to get stuck on a percentage in the single digits and freeze the entire application until it's done. (especially if you switch windows) It takes a mind numbing 15-20 minutes to "consolidate" or clear out all of your transactions.
- Transaction matching is not very smart. It mainly matches transactions with the same amount and description (and if it's a check, pretty much only the check number). If you have a \$50 transaction several months in a row, it will say each one is a match (even though it's obviously unrelated). I wish you could tell it where the priorities are, like focus on amount and date of transaction only.
- Gnucash will match parts of the transaction, it will automatically fill the account even though it's going to be a new transaction. Quickbooks doesn't do this.
- Gnucash allows for multiple splits on both the debit and credit account when it's doing imports. Quickbooks doesn't allow this. We had to change accounts to only reflect physical accounts, and turn the non-physical accounts into classes.
- It's complicated to move funds between classes:
- Moving funds between classes, such as from "Unclassified" to "Education" requires a General Journal entry with 2 lines and creating a special account for it:

1.  Create an expense account called "Clearing"
2.  Create a general journal entry with the following transactions:
    1.  Credit "Clearing" without anything in the class field.
    2.  Debit "Clearing" with "Education" in the class field.

- A lot of the reports are useless for non-profits with a bunch of classes. Why would I need a report with 20+ columns half the width of the page? One of the only ones I've been using is the custom summary report. It let's you show the balances in your accounts or classes.
- The Undo button never works for Undoing anything useful. (deleted a transaction? Undo? Nope.)

**Pros:**

- It's industry standard. It's a lot easier to find a bookkeeper who uses quickbooks vs one who uses gnucash.
- The reconcile process is more streamlined than Gnucash.
- Better reporting than Gnucash. I'm still working on figuring out what all the reports do.
- It's easier to manage funds through Quickbooks' "Classes" system (basically tags for transactions).
- Transaction matching during bank imports is smarter than Gnucash.
- All the websites we regularly use have an export option specifically for Quickbooks. This means we don't need to make a script parsing files to prep them for import, and all we need to do is categorize/split the transactions to the different funds.
- Allows copy/paste on account names during an import. In Gnucash, it was a pain to click the drop-down on almost every transaction during an import.
- The 2013 Premier Non-profit version has letter templates.
- The 2013 Premier Non-profit version will allow you to import the unified chart of accounts. (didn't really use this, it just imports nearly EVERYTHING, when not many non profits use all those accounts)
- You can do math inside of a field.

**Recommendations:**

- Understand the general journal and what it's for.
- If you're a non-profit doing fund accounting, definitely use "classes".
- Get familiar with AutoHotkey. It helps automate repetitive tasks on the crappy UI.

## Kashoo

- Doesn't seem to have scheduled transactions.
- Much better data import than quickbooks.

## Wave Accounting

- Doesn't seem to be able to import from spreadsheet.
- Doesn't seem to have scheduled transactions.

## Xero

- Has recurring transactions, but it seems more geared toward billing.
- Doesn't seem to work for fund accounting.
