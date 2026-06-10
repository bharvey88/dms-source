---
title: "Bookkeeping Notes"
description: "This information may be outdated.If you feel this is in error, please remove the {{outdated}} template."
sourceUrl: "https://dallasmakerspace.org/wiki/Bookkeeping_Notes"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Bookkeeping_Notes\">legacy DMS wiki</a> — content may be outdated."
---
**This information may be outdated.**\
If you feel this is in error, please remove the {{outdated}} template.

## Basics

[Bookkeeping Fundamentals (PDF Version)](/w/images/d/de/DMS_Bookkeeping_Fundamentals.pdf)

[Bookkeeping Fundamentals (DOC Version)](/w/images/d/d0/DMS_Bookkeeping_Fundamentals.zip)

Note: This is a work in progress.

## Basic Bookkeeping Process (modified 1/11/2015)

1.  Scan all receipts for the month into a digital format and save to DMS Accounting dropbox.
2.  Look at allocations from the previous Board Meeting and add them to Quickbooks and this page: [https://dallasmakerspace.org/wiki/Approved_Funding](/dms-source/archive/dallas-makerspace/approved-funding/)
3.  Enter scanned checks into quickbooks for the date they were written.
4.  Paypal Transactions Import
    1.  Go into the paypal account and get the export. I wrote about the quirky parts of that here: [https://dallasmakerspace.org/wiki/Bookkeeping_Notes#Paypal_Export](/dms-source/archive/outdated/bookkeeping-notes/#Paypal_Export)
    2.  Use this tool to parse the export and add rules as necessary: <http://dms-iif-parser.herokuapp.com/>
    3.  Import the IIF file into Quickbooks.
5.  Bank & Credit Card Transactions Import
    1.  Log into the bank account webpage and download the "Web Connect" file for the checking account and credit card for the first day of the month until the last day of the month.
    2.  Import the Web Connect file into Quickbooks and categorize the transactions.
    3.  Right click the bank account from the accounts page in Quickbooks and use the reconcile feature to make sure the transactions you imported match the bank statement.
6.  Add a "clearing" transaction to the "Director Fund" to take the fund to zero.
7.  [Reconcile](http://support.quickbooks.intuit.com/Support/pages/inproducthelp/core/qb2k12/contentpackage/core/balance_reconcile/task_reconcile.html)
8.  Generate reports and review
    1.  Create fund report by creating a custom report with classes for the rows. Filter out the following accounts: assets, payables, liabilities, and Capital expenses recategorized to fixed assets.
    2.  Create a "Changes In Funds" report by using "Last Month" as the period for the previous report.
    3.  Create a balance sheet with "Last Month" as the period (showing "\$ Changed").
    4.  Create a profit and loss report with "Last Month" as the period.
9.  Backup Quickbooks file

## Our Chart of Accounts

The Chart of Accounts we use is based on the Unified Chart of Accounts from NCCS: <http://nccs.urban.org/projects/ucoa.cfm>

If you have trouble categorizing something, it helps to take a look at their keyword sheet:

- Original: <http://nccsdataweb.urban.org/kbfiles/403/UCOA%20version%203%20Content-Key%20word%20list.xls>
- Modified (with line numbers from the 990-EZ): [Modified UCOA Keyword List](/w/images/2/21/Ucoa_keyword_list_with_990lines.xls)

### UCOA Errata

#### Janitorial Services Typo

In the [UCOA ver.3 Keyword Lookup Spreadsheet](http://nccsdataweb.urban.org/kbfiles/403/UCOA%20version%203%20Content-Key%20word%20list.xls) the following line contains a mistake:

- 8510 Housekeeping & janitorial services expense

Account 8510 corresponds to the following line in the [UCOA ver.3 Spreadsheet](http://nccsdataweb.urban.org/kbfiles/402/UCOA-version%203.xls):

- Account: 8510-\*\*\*
  - Description: Interest-general
  - Form 990 Line Item: 41
  - **Form 990 EZ Line Item: 16**
  - OMB A-122 Cost Principles: 23
  - United Way of America Accounting Guide: 9200-9299

However, "Housekeeping & janitorial services" corresponds to Line 14 of the Form 990 EZ according to [the instructions published by the IRS](http://www.irs.gov/pub/irs-pdf/i990ez.pdf) (even since 2003 when the UCOA was written). The instructions say:

    Line 14. Occupancy, Rent, Utilities, and Maintenance
    Enter the total amount paid or incurred for the use of office space
    or other facilities, including rent; mortgage interest; heat, light,
    power, and other utilities; outside janitorial services; real estate
    taxes and property insurance attributable to rental property; and
    similar expenses.

**Conclusion:** I think it's a typo and account 8510 was supposed to be account 8210. The 2 key is very close to the 5 key on the number pad.

#### Gross Sales

The UCOA doesn't have anything on the keyword spreadsheet which corresponds to field 7A in the form 990-EZ. Field 7A is for gross sales. "5440 Gross sales - inventory" should probably correspond to field 7A, but maybe field 7A appeared only appeared on the 990-EZ post-2008.

### New Post-2008 UCOA Draft

The form 990 was changed in 2008, the original UCOA was published in 2003. There are some proposed changes here: <http://www.nccs2.org/wiki/images/0/02/UCOA-version_3_plus_2008.xls>

### Adding Accounts Not In The UCOA

    To add an account that is not in UCOA, add it as a subaccount of an existing account.
    For example, if your organization tracks membership dues for youth, adults, and seniors
    separately, you can create three subaccounts of 5310 Dues and call them 5311 Youth, 5312
    Adults, and 5313 Seniors.
    -Quickbooks Help Documentation

### Fixed Assets (like Furniture and Computers)

How do I account for things like Furniture and Computers? Aren't they just expenses? This is something that's not intuitive for someone without an accounting background.

Here's how the Unified Chart of Accounts categorizes Computers, Furniture, and "Equipment for Use" (as a Fixed Asset): <img src="/dms-source/files/mw/0_01_Furniture_computers_equipment_bookkeeping.png" width="916" height="193" alt="Furniture computers equipment bookkeeping.png" />

Line 24 on the Form 990-EZ cooresponds to "Line 24. Other Assets". Examples of organizations that tracks this correctly on their 990-EZ:

- <http://www.cranberryisles.com/great/f990so-2010.pdf>
- <http://childvoiceintl.org/downloads/FY08_990_without_b.pdf>
- <http://990s.foundationcenter.org/990_pdf_archive/941/941167549/941167549_201203_990EO.pdf>

Fixed assets are generally things the organization intends to use for longer than a year.

~~Note: I'm still unclear about whether I should be categorizing it as an expense. There's a expense account in the Unified Chart of Accounts for "9830 - Capital purchases - equipment", but it doesn't have a line on the Form 990-EZ (it just says "capitalized").~~

[Wikipedia says](http://en.wikipedia.org/wiki/Expense#Bookkeeping_for_expenses) "The purchase of a capital asset such as a building or equipment is not an expense.".

If we purchase 100 chairs for a total cost of more than \$500, is that capitalized as an asset?

- Yes - <http://www.washcoll.edu/live/files/91-fixedassetpdf>

### Supplies

<img src="/dms-source/files/mw/c_c2_Supplies.png" width="691" height="66" alt="Supplies.png" />

Line 16 on the Form 990-EZ is for "Other Expenses". The description says:

    "Report expenses here that are not reportable on lines 10 through 15. Include here such expenses as penalties, fines, and
    judgments; unrelated business income taxes; insurance, interest, depreciation, and real estate taxes not reported as
    occupancy expenses; travel and transportation costs; and expenses for conferences, conventions, and meetings. Do not report
    on this line payments made by organizations exempt under section 501(c)(8), (9), or (17) to obtain insurance benefits for
    members. Report those expenses on line 11."

I use Supplies as a broad category for a lot of our spending on consumables, computer cables, and rfid badges.

Here are some of the examples for supplies given in the UCOA keywords list:

- Award plaques, non-cash prizes to clients
- Bookeeping supplies
- **Classroom supplies**
- Copying & duplicating materials & supplies
- **Craft supplies**
- Drugs & medicines (clinic use only)
- Duplicating & copying materials & supplies
- Film purchases & processing
- First aid supplies for employees
- Food & beverage - non-program related
- Food & beverage - program related
- Food & beverage for employees & visitors
- Food & beverage services to clients
- Housekeeping, laundry, & linen supplies
- Laundry, linen, & housekeeping supplies
- Medicine & drugs (clinic use only)
- **Office supplies**
- Paper, ink, film, & copying materials
- Prosthetic appliances (clinic use only)
- Recreational supplies
- Stationary, typing, accounting, etc supplies
- Supplies - classroom
- Supplies - computer, typing, accounting, etc
- Supplies - first aid for employees
- Supplies - housekeeping, laundry, & linen
- Supplies - paper, ink, film, & copying mat'ls
- Supplies- plaques, non-cash prizes for clients
- Typewriter supplies
- Vocational supplies

### Equipment maintenance supplies

Supplies purchased for maintaining equipment are classified differently:

<img src="/dms-source/files/mw/d_d7_Equipment_maintenance.png" width="916" height="303" alt="Equipment maintenance.png" />

Line 14 on the Form 990-EZ is for "Occupancy, Rent, Utilities, and Maintenance".

### Computer Software

I'm classifying computer software and website related items under 8560:

<img src="/dms-source/files/mw/5_5f_Website.png" width="923" height="198" alt="Website.png" />

Other examples of non-profits using Line 16 for computer software:

- <http://charlestoneastend.com/wp-content/uploads/2013/02/Chas_East_End_Main_St_2011_990EZ1.pdf>
- <http://www.paintamiracle.org/wp-content/uploads/2013/11/Paint-a-Miracle-990-2012.pdf>
- <http://fcir.org/990/FCIR2012.pdf>

### Alarm Monitoring Service

I'm classifying alarm monitoring service under Telecommunications, it's mentioned here as related to telecommunications:

- <http://www.irs.gov/irm/part7/irm_07-025-012.html>

### Snack Fund

I'm putting both expenses and revenue related to the Snack Fund under the "Program service fees" account. The UCOA puts "Cafeteria for clients, visitors, & staff", "Consessions (SP) at program-related activities", and "Gift shop for clients, visitors, & staff" under the same account.

See convenience of members section: <http://www.irs.gov/irm/part7/irm_07-027-005.html>

## Funds

Dallas Makerspace is currently Quickbook's "classes" to track funds which are designated for a specific purpose by the Board of Directors.

### A Better Way To Track Funds?

The way we're tracking board designated funds creates problems:

- Transferring funds between classes requires two transactions to/from a "clearing" account: <http://support.quickbooks.intuit.com/support/pages/inproducthelp/core/qb2k12/contentpackage/core/reports_description_other/unsupported_solutions_bal_sht_class.html?family=pro>
- **(The main problem I'm having)** Only expenses and revenues show up as a transaction under a class. **Deducting an asset purchase from a class would require an extra transaction with an expense account (even though assets aren't expenses)**: <http://forums.quickbooksusers.com/showthread.php?t=41971>
- We're not adequately reporting restricted funds
- "The problem is that you can’t get QB to report by class on many of the balance sheet accounts (and cash is one of them). You can, however, get it to report on your equity accounts which is how most nonprofits keep track of their designated fund balances." <http://www.theqbspecialists.com/quickbooks-help/2009/09/10/quickbooks-tip-nonprofit-designated-funds/comment-page-1/>

Possible Solutions:

- Add a Capital Purchases expense account
  - Suggested in this thread: <http://forums.quickbooksusers.com/showthread.php?t=41971>
  - "Running capital purchases through an expense account enables the client to budget and easily track purchases without having to create extra reports." -<http://www.linkedin.com/groups/Can-budget-vs-actual-reports-1910499.S.102294771>
  - Seems to be supported by the OCOA: [Picture](/w/images/8/8a/Ucoa_capital_expense.png)

<!-- -->

- Start keeping track of funds as an "unrestricted net asset" account:
  - **Probably won't work with quickbooks**: "Quickbooks does not support the "net asset" paradigm, because it doesn't let you configure your system to post net amounts to specific net asset accounts." -Running QuickBooks in Nonprofits by Kathy Ivens
  - "14-4. Board designated net assets is a subset of unrestricted net assets. Dollars are moved from the unrestricted net asset category to board designated net assets when the board takes action, usually reflected in the minutes to a board meeting, to set aside a portion of net assets for a future purpose. Examples might include repair of buildings or expansion of programs. As easily as a board can designate a special purpose for unrestricted net assets, it can “undesignated” those net assets, so board designated net assets are still classified as unrestricted net assets." -www.cpasites.com/Earney/MSA/SolutionsManual/Chapter014.doc
  - "Many organizations will breakout their unrestricted net assets into various board-designated funds, such as board endowment, reserve for capital improvements or building funds." <http://www.nonprofitaccountingbasics.org/auditing/fas-117>
  - <http://www.nonprofitaccountingbasics.org/reporting-operations/statement-financial-position>
  - Use classes to track functional expense categories as suggested in the "Running QuickBooks in Nonprofits" book. New classes would be Program Services, Management (administration), and Fundraising. These are for fields on the Form 990 (not form 990-EZ) according to a CPA I talked to. The unified chart of accounts seems to do something similar on Page 7: <http://www.notforprofitaccounting.net/wp-content/uploads/2008/08/ucoa.pdf>
  - "I strongly recommend that you not try tracking "funds" through the Class list or through individual equity accounts. I use one class for temporarily restricted receipts and release of restrictions - no expense activity." -<http://www.linkedin.com/groups/I-am-setting-up-nonprofit-4083947.S.205687754>
- Don't track assets and continue doing bookkeeping the way we are now.

Sources supporting the way we currently track funds:

- <http://support.quickbooks.intuit.com/support/pages/inproducthelp/Core/QB2K12/ContentPackage/Verticals/Nonprofit/nnp_tracking_funds_with_classes.html>
- <http://support.quickbooks.intuit.com/support/pages/inproducthelp/Core/QB2K12/ContentPackage/Verticals/Nonprofit/nnp_fund_accounting.html>

### Tracking Funds Spent On Capital Purchases With Classes

I am tracking funds (board allocated funds) in Quickbooks using the following method (with classes): <http://support.quickbooks.intuit.com/support/pages/inproducthelp/Core/QB2K12/ContentPackage/Verticals/Nonprofit/nnp_fund_accounting.html>

This gets complicated when I need to track funds spent on a Fixed Asset. Here's an example of the way I'm deducting funds spent on a capital purchase from a class:

<img src="/dms-source/files/mw/thumb_2_2d_Fixed_asset_hack3.png_1000px-Fixed_asset_hack3.png" width="1000" height="89" alt="Fixed asset hack3.png" />\]

This method was suggested by Sara L in this forum thread: <http://www.linkedin.com/groups/Can-budget-vs-actual-reports-1910499.S.102294771> It correctly deducts the amount of the purchase from the fund.

However, it has an unattended side effect. Now the class report shows an inaccurate number for Unclassified (number at the bottom). This is because the fixed assets are added to the "Unclassified" amount, but I only want to include Cash assets on this report.

Of course, this would show correctly because it doesn't involve adding to the Unclassified class (but it doesn't move funds from the bank account to the asset account):

<img src="/dms-source/files/mw/thumb_8_83_Asset_hack5.png_1000px-Asset_hack5.png" width="1000" height="31" alt="Asset hack5.png" />

Questions:

- Is there a way to make the amounts in fixed assets not count toward "Unclassified"?

Solution:

- The solution requires manually filtering out asset accounts and the "Reclassified to fixed assets" account the report:

<img src="/dms-source/files/mw/thumb_3_3d_Custom_report.png_600px-Custom_report.png" width="600" height="431" alt="Custom report.png" />

<img src="/dms-source/files/mw/1_1f_Reclassified.png" width="442" height="170" alt="Reclassified.png" />

### General Fund

For the general fund, I'm using the "Unclassified" number at the bottom of the class report (custom report, row=class, column=total only). However, all transactions should probably have a class (including a class for General Fund). However, adding a class to all transactions would be extremely time consuming.

<img src="/dms-source/files/mw/5_5d_Unclassified.png" width="334" height="116" alt="Unclassified.png" />

### Director Fund

This fund was formerly known as the "Discretionary Fund", but the name was changed to the more appropriate "Director Fund". When a director spends their approved \$200, I add a "Class" to the transaction for the "Director Fund".

As of 5/4/2014, there was a major change to the way I'm tracking the director fund. It's no longer an account (shown on the profit & loss), it's a fund which gets paid off at the end of each month.

This required correctly categorizing each of the expenses. Which was a much needed change before we file the Form 990-EZ. This will require re-issuing past financial reports.

### Maker Fellowship Fund

[Picture of an example transaction](/w/images/1/10/Maker_fellowship.png)

- The initial donation to the Maker Fellowship is counted as donation income and sent to the Maker Fellowship Fund.
- When the fellowship is awarded, it's expensed under "7 · Expenses - personnel related:7000 · Grants, contracts, & assistance:7040 · Awards & grants - individuals" with the class of "Maker Fellowship Fund".
- The income account used is "5 · Earned Revenues:5200 · Revenue from dues:5210 · Membership dues-individuals".

## Backups

- Dropbox will work for backing up quickbooks files. Make sure you actually use the backup function in the file menu.
- Before importing any IIF files, make sure you back up your company file. (you could spend hours manually deleting transactions or redo'ing work otherwise)

## Viewing Accounts Payable

Use "Sort By Name" when looking at Accounts Payable. This is necessary because it's not divided out by name.

## Unrelated Business Income

It looks like it's something we need to consider when we're thinking about letting people sell things on our behalf (like t-shirts) or letting people rent studio space from us. It looks like we don't need to worry about it our unrelated business income doesn't exceed \$1000 though. The definition for unrelated business income is definitely something to keep in mind when categorizing income.

This document has a lot of details: <http://www.irs.gov/publications/p598/ch03.html#en_US_2011_publink1000267734>

## Paypal Export

An explanation of how to download transaction history in paypal is here: <https://www.paypal.com/cgi-bin/webscr?cmd=p/gen/downloadable-outside>


When you go to "Download History" in paypal, you need to enter the following criteria on the first page:

- select Quickbooks IIF as the export type
- Use a date range starting the day after your last export and ending after the end of the last bank statement period. I usually use the 2nd of the previous month to the 1st of the current month.


On the next page I use:

- Name of Paypal Account
  - Cash in bank:Cash in bank-operating:Cash in Paypal
- Name of other expenses account:
  - Non-personnel related expenses:Other expenses:Other expenses:Credit Card Processing Fees
- Name of other Income Account:
  - Earned Revenues:Revenue from dues:Membership dues-individuals


~~Before I import the Quickbooks file I downloaded from Paypal's website, I have to manually change a lot of things in the file.~~

All the donations to things like the laser cutter fund need to have the accounts changed

~~For some reason, when you add a Class, it won't pick it up. After you import, you need to add the class manually. \<-- This is extremely frustrating.~~

Use this tool to automatically modify the IIF paypal export: <http://dms-iif-parser.herokuapp.com/> (<https://github.com/pawl/dms-iif-parser>)

    There are 2 types of PayPal transactions that do NOT get imported!  these are:

    Add Funds from a Bank Account
    Withdraw Funds to a Bank Account

    -http://howtoimportpaypalintoquickbooks.wordpress.com/

It's fine that "Withdraw Funds to a Bank Account" aren't in the imported, these are easy to track on the bank statement. But "Add Funds from a Bank Account" not being included is a big deal. This means every time you add funds from the bank account to Paypal, you need to make sure you have a transaction in Quickbooks as a Bank Account --\> Paypal Account funds transfer. What makes it confusing is that the transaction shows up on the checking account quickbooks import just like any other Paypal payment.

## Important Reading

- Not-For-Profit Accounting Made Easy by Warren Ruppel - contains a good overview of not-for-profit accounting, and includes an explanation of asset capitalization
- Unified Financial Reporting System for Not-for-Profit Organizations: A Comprehensive Guide to Unifying GAAP, IRS Form 990 and Other Financial Reports Using a Unified Chart of Accounts by Russy D. Sumariwalla and Wilson C. Levis - explains the Unified Chart of Accounts more in-depth
  - Unfortunately doesn't contain more information about how to categorize expenses (compared to the spreadsheets published on NCCS's website).
- Running QuickBooks in Nonprofits: The Only Comprehensive Guide for Nonprofits Using QuickBooks - contains good quickbooks-specific info
- Nonprofit accounting standards:
  - <http://www.fasb.org/pdf/fas116.pdf>
  - <http://www.fasb.org/pdf/fas117.pdf>
- Guide to implementing UCOA: <http://usvariety.org/pdfs/UCOA_implementing.pdf>
- <http://www.slideshare.net/Abila/2012-8-2achievingnonprofitfinancialhealth>

## Differences Between Non-Profit and For-Profit Reports

- <http://www.accountingcoach.com/nonprofit-accounting/explanation/2>
- Statement of Financial Position (similar to balance sheet)
  - "Since a nonprofit organization does not have owners, the third section of the statement of financial position is known as net assets (instead of owner's equity or stockholders' equity)."
  - Also shows restricted net assets
- Statement of Activities (similar to income statement, essentially a profit and loss report)
  - "reports revenue and expense amounts according to the three classifications of net assets"
- Statement of Functional Expenses
  - "it reports expenses by their function"
  - Not required for every non-profit by FASB
- Statement of Cash Flows
  - "reports the organization's change in its cash and cash equivalents during the accounting period"

## Tracking Grants

Grants are Jobs in Quickbooks, not Classes. Do not treat a grant like a Class.

## Reconciling Paypal With Quickbooks

This is assuming you don't have IDs on all of your paypal transactions, but it still works well if you do.

1.  Export the "Comma Delimited - Balance Affecting Payments" report from paypal. (Under History --\> Download History)
2.  Export your "Cash In Paypal" account from quickbooks for the same date range as step 1.
3.  Create a new column to the right called "Paypal or Quickbooks" and fill every row in the paypal export with "Paypal"
4.  This step changes depending on how transactions are stored in Quickbooks.
    1.  Fees and payments are separate transactions - Copy the fees column in the paypal export below the "Gross" amount column. This will create a new row, you will need to add "Paypal" under the "Paypal or Quickbooks" column.
    2.  Payments are a single deposit transaction - continue to the next step.
5.  Copy the following columns from the Quickbooks export below the final transaction in the Paypal export:
    1.  Num
    2.  Name
    3.  Memo (goes under Type)
    4.  Date
    5.  Amount (goes under Gross)
6.  Create a pivot table like the following:

<img src="/dms-source/files/mw/9_9f_Pivot_table.png" width="394" height="330" alt="Pivot table.png" />

Now find the mismatches and research them. (Example: Paypal has 1 transaction for \$50, Quickbooks has 2 transactions for \$50)

## Sale Of An Asset

The sale of an asset requires a lot of transactions. I had to get someone to make me a clear example for this: [Sale of An Asset Example](/w/images/9/98/Sale_of_an_asset.pdf)
