---
title: "Board of Directors Meeting 20150621"
description: "This meeting will be held in Modified SRC3 format."
sourceUrl: "https://dallasmakerspace.org/wiki/Board_of_Directors_Meeting_20150621"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Board_of_Directors_Meeting_20150621\">legacy DMS wiki</a> — content may be outdated."
---
This meeting will be held in [Modified SRC3](/dms-source/archive/dallas-makerspace/modified-src3/) format.

## Time, location

16:00, Dallas Makerspace

## Prior minutes

[Board_of_Directors_Meeting_20150517#Minutes](/dms-source/archive/meetings/board-of-directors-meeting-20150517/#Minutes)

## Spending Request Summary

|           |                    |
|-----------|--------------------|
| Amount    | Request            |
| 1500      | Drink fridge       |
| ?         | Logistics          |
| 1400      | network router     |
| 200       | Printer            |
| 8050      | Server             |
| 250/month | Web Hosting        |
| 6200      | Digital Media      |
| 500       | Dust Collection    |
| 1750      | Worktables         |
| 500       | Science worktable  |
| 385       | Science goggles    |
| 275       | Science electrical |
| 21,010    |                    |

## Consent Agenda

Newly proposed agenda items appear in the consent agenda. Any member present at the meeting may pull an item out of the consent agenda for discussion, at which point it goes under "New Business". If nobody objects to the solutions presented by the consent agenda, everything in the consent agenda passes by consensus. Items that have more than one proposed solution should be moved to the "New Business" section.

Any member may edit this wiki page and place an item on the agenda. However, discussion of agenda items should be done via the forums. The cut-off time for addition to or revision of the consent agenda items is 48 hours prior to the meeting. Please note, agenda items (Consent, New, or Old) that request spending \$250 or more must include a section on "Relevance to our tax exempt purpose".

### Replace drink fridge (Brandon Green)

**Problem:** Current drink fridge is tiny and does not adequately cool beverages. We have cases and cases of drinks that end up sitting on the shelves (taking space away from food items) because the only place to put them to cool them is the less than 5 cubic foot drink fridge. This leads to not being able to keep any drinks cold because the microscopic current drink fridge is quickly emptied and not restocked consistently. And even if it is restocked the drinks take a very long time to cool. The soda vending machine is also not great because it is loud, inefficient in space usage, tends to shake cans enough during dispensing to spray soda everywhere, has on occasion actually punctured cans inside itself, requires laborious restocking (relative to just being able to set an entire case inside an adequately sized drink fridge).

**Solution:** Allocate \$1500 to Logistics for purchase of [a 23 ft^3 glass door merchandiser refrigerator](http://www.centralrestaurant.com/23-Cu-Ft-Swing-Glass-Door-Merchandiser---Refrigerator-1-Door-27-inW-c182p47914.html)

**Relevance to our tax exempt purpose:** Staying hydrated is a safety concern for all members and reducing the electricity costs by replacing 2 old devices with 1 new device helps allow the organization stay solvent. Improving space utilization also furthers our ability to grow and serve more members, promoting out primary mission of educating more people.

### Logistics budget (Allen)

**Problem:** I suspect that the Logistics Committee is seriously in the red but I'm actually not sure. The latest account balance still shows \$1000+ balance which I believe to be out of date. It also continues to be a challenge for smaller necessities to compete budget wise with larger capital purchases. The consumables budget that was originally allocated to Workshop is now part of Woodworking.

**Solution:** Allocate enough to zero out the Logistics Committee and change the monthly allocation to Logistics to be roughly a dollar per a member.

**Relevance to our tax exempt purpose:** The Logistics committee supports the daily operations of the Space. All of the Logistics committee's spending is incidental to our exclusive 501(c)(3) purposes.

### Replace Router (Brooks Scharff)

**Problem:** Our current router (Ubiquiti EdgeMax Lite) is currently maxed out in terms of performance. We are not able to enable any features on the router without halving the routing performance (example, when we attempted to do NetFlow captures \[anonymized traffic analysis\], the routing performance slowed from 500mbps to less than 200mbps). Members are also reporting slow DHCP response time, which we can trace back to the underpowered router. Every time we upgrade the firmware, the config reverts to a previous state, which caused downtime for 3DFab on 4/24.

**Solution:** Authorize purchase of a pfSense C2758 Appliance (\$1399). This will solve all current issues and prevent future ones. This appliance is more powerful in EVERY aspect and runs pfSense, a free and open-source router replacement (of note, we used pfSense briefly at the old space, but had to switch to our current router since the old hardware failed \[before we had the money to purchase a long-term solution\]). This new hardware would also be upgradable to have 10Gb interfaces, which we plan on implementing in the coming months. It's also capable of running a VPN service, should we choose to go that route. If this item is pulled, another option would be to allocate \$1500 to the Infrastructure Committee to allow them to decide internally.

**Relevance to our tax exempt purpose:** Increased capacity will allow for future growth and prevent any problems before they occur (network problems cause issues with the membership).

### Purchase of Printers (Brooks Scharff)

**Problem:** Our current set of printers at DMS are all donated by members, and generally tend to have a short lifespan while at DMS. The constant change in printers is constantly causing an issue with print driver mismatches. We should try to provide high-uptime and reliable printers at DMS.

**Solution:** Allocate \$199 to the Infrastructure Committee to purchase a high-quality printer. I'm currently pushing for this one: [\[1\]](http://amzn.com/B004MSN4BI) (I have several at work - they're quick, reliable, and toner is CHEAP)

### Buy a new server to replace aging server (Robert Davidson)

**Problem:** Woodshop and the Machine Shop committee have made the move to used a shared server that is remotely accessible to allow members to use the equipment. The current server is aged and outages effectively shut down the CNC Router and Haas Mill. The 2nd issue is Blue Iris server is at capacity and we are in need of a replacement the intention is to share the system and allow other committees access as needed. The intention is to make a shift to "Cloud" access instead of local machines this allows the ability to use underpowered laptops to have access to the software without the need to install software on to the local laptop.

**Solution:** Purchase a new SuperMicro server that costs (\$8049.89) that will give us the CPU power to handle an increased load on the jump environment [\[2\]](http://secure.newegg.com/WishList/PublicWishDetail.aspx?WishListNumber=27302665)

**Relevance to our tax exempt purpose:** We are building a system that allows members access the jump environment remotely and locally to use DMS resources this allows us to use low cost endpoints that just require Microsoft RDP. We are approaching 1K members and we will need something that can scale we are currently at capacity and we are just starting out using the jump environment. This server will also be used for classes so we can use the jump server.

### Authorize \$250 For Website/Forum Hosting (Andrew LeCody)

**Problem:** The website and forums are currently hosted (at no cost) on Andrew LeCody's personal servers. These servers may be going away in within the next year due to increases in hosting costs for Andrew. The website and forums are vital parts of our online infrastructure and need to be highly available (99.9% or better).

**Solution:** Authorize spending of up to \$250/month for hosting with Digital Ocean and CloudFlare CDN/DNS. This will cover the existing billing and calendar admin VMs, as well as two new VMs for the website and forums. This cost includes weekly backups of the VMs and caching/load-balancing with CloudFlare.

**Relevance to our tax exempt purpose:** Our website and online services are critical in providing information about our organization, such as class schedules and for membership collaboration via our wiki and forums.

### Authorize Honorariums for Tour Guides (Stan Simmons)

**Problem:** Open House Tours often overwhelm the few members that normally give tours. Sometimes visitors can wait up to half an hour for the next Tour Guide to start the next tour. This often leads to visitors wandering the halls unsupervised. The tours also vary wildly in tone and content depending on the guides knowledge. During particularly busy open house times, tours will often bump into each other, causing bottlenecks and confusion.

**Solution:** Setup an Honorarium system similar to the Teaching Honorarium to encourage more members to give tours. PR will generate a standardized guide and class for tour content and walking path. The following is my suggested rules for the "Tour Guide Honorarium":

Tour Guide Honorarium:

1.  Tours, by approved Tour Guides, will be eligible for a \$10 Honorarium.
2.  To be eligible for the Honorarium, a member may become a Tour Guide by taking a regularly scheduled Tour Guide class. The class (to be developed by the PR Committee) will detail the high points of the Makerspace and the standard tour route through the space.
3.  Eligible Tours must be during regularly scheduled open house times. Special Tours must be scheduled in advance.
4.  Special Tours must be scheduled, and approved by the Board of Directors at least 3 days before the Special Tour, and must be approved by a majority of the Board of Directors to be eligible for payout.
5.  Impromptu Tours are not eligible for payout.
6.  Tours must be attended by at least 5 people to be eligible for payout. Tour group sizes should be limited to a maximum of 15 people to minimize disruption of ongoing Makerspace operations.
7.  For every Tour eligible for payout, \$10 will be given to the committee selected by the Tour Guide.
8.  An Honorarium can be forfeited and given to a committee. Honorarium payout requests MUST be submitted, by form, within 30 days.
9.  Honorariums will be paid out in \$50, or larger increments.
10. Tour Guides paid out more than \$600 in a single year are required to fill out the appropriate tax forms.

**Relevance to our tax exempt purpose:** Tours are one of the major ways we get new membership and get information out to visitors. Expanding our member base and replacing members who leave keeps us in business.

### Reserve October 3, 2015 for DMS-wide mini-convention (Paul Wilson)

**Problem:** A large event that uses multiple rooms in the space creates conflicts with other potential events. I would like to host a one day convention at DMS on the topics of Costuming and Propmaking.

**Solution:** Reserve the following rooms in the space for this event:

1.  Lecture Hall - 9am to 7pm
2.  Interactive Classroom - 9am to 7pm
3.  Purple Classroom - 9am to 7pm
4.  Common Area - 8am to 8pm
5.  Woodshop, Vacuuformer, Foundry, Lasercutter, CNC router, etc depending upon scheduled panel needs

**Relevance to our tax exempt purpose:** Teaching various techniques including modeling, sewing, 3d printing, along with general promotion of the space.

**Conflicts:** The only scheduling conflict as of May 31 is Open Source Saturday, 10-Noon in the Lecture Hall, reserved by John Fields.

### Purchase of Sony Cyber-shot DSC-RX10(Natasha Cooks)

**Problem:** Digital Media Committee does not have access to a camcorder to create member projects such as crowdfunding projects, how-to videos or instructables. This also limits the scope of Digital Media Educational opportunities, as well as prevents production of DMS tours and safety videos.\
**Solution:** Purchase an easy to use, Sony Cyber-shot DSC-RX10. Link --\><http://www.amazon.com/Sony-DSCRX10-Cybershot-Digital-Camera/dp/B00FRHTSMW/ref=sr_1_1?ie=UTF8&qid=1433648220&sr=8-1&keywords=sony+rx10>\
Product Overview --\> <https://www.youtube.com/watch?v=8RScQz5BQ_8>\
**Cost: \$1072**\
**Relevance to our tax exempt purpose:** Creating online tours, how-to videos, and highlighting member projects brings significant visibility to the space. Digital Media can also expand it's course offerings, and begin project based learning. This camera/camcorder also enables members to promote their work, which enhances DMS visibility.

### Purchase of studio and field equipment for Digital Media(Natasha Cooks)

**Problem:** Digital Media Committee does not have access to sufficient lighting and equipment to support the new Digital Media camcorder to create member projects such as crowdfunding projects, how-to videos or instructables. This also limites the scope of Digital Media Educational opportunities, as well as prevents production of DMS tours and safety videos.\
**Solution:** Purchase studio lighting, blue screen lighting, field lighting, photography tent, and tripod for member use.\
**Cost: approximately \$1500**\
**Relevance to our tax exempt purpose:** Supports the creation of online tours, how-to videos, and highlighting member projects, which will bring significant visibility to the space. Digital Media can also expand it's course offerings, and begin project based learning. Studio equipment also enables members to promote their work, which enhances DMS visibility.\

### Purchase of secure storage for high-end production equipment(Natasha Cooks)

**Problem:** Digital Media Committee does not have secure storage for expensive Digital Media Equipment, such as a camcorder purchase, audio equipment, and other small, but expensive items.\
**Solution:** Purchase of Hallowell safety-view lockers, which would reside outside of the Digital Media room.\
OptionA --\> \$851.00\
<http://m.globalindustrial.com/m/p/storage/lockers/visible/safety-view-plus-locker-w-digitech-locks-12x12x12-4-person-parchment-assembled>\
OptionB ---\> \$948.00\
<http://m.globalindustrial.com/m/p/storage/lockers/visible/safety-view-plus-locker-w-digitech-locks-12x15x12-six-tier-1-wide-parchment-assembled>.\
**Relevance to our tax exempt purpose:** Provides Storage, safety, and ease of access to DMS members. Secures classroom equipment.\

### Pre-authorization/wait-list purchase :Canon XC10 4K professional camcorder(Natasha Cooks)

**Problem:** Digital Media Committee does not have access to a professional level camcorder that will elevate interest and awareness to the Digital Media Committee. A professional level camcorder will add additional quality to member projects such as crowdfunding projects, how-to videos or instructables. Lack of equipment also limits the scope of Digital Media Educational opportunities, as well as prevents production of DMS tours and safety videos.\
**Solution:** Pre-authorize the purchase of a Canon XC10 Professional Camcorder. This camera is in high demand, and has received EXCELLENT reviews and a ton of buzz.\
Link --\>\
<http://www.amazon.com/Sony-DSCRX10-Cybershot-Digital-Camera/dp/B00FRHTSMW/ref=sr_1_1?ie=UTF8&qid=1433648220&sr=8-1&keywords=sony+rx10>\
Product Overview --\>\
<http://www.usa.canon.com/cusa/professional/products/professional_cameras/uhd_hd_video_cameras/uhd_video_cameras/xc10>\
Product Review ---\>\

    http://www.digitaltrends.com/photography/canons-new-affordable-4k-camcorder-ideal-for-budding-filmmakers-youtube-creators/

**Cost: \$2500 plus accessories**\
**Relevance to our tax exempt purpose:** This camcorder is on a wait list. The purchasing wouldn't occur for 2-3 months. Asking the Board to authorize this purchase. Creating and teaching professional videography, online tours, how-to videos, and highlighting member projects brings significant visibility to the space. Digital Media can also expand it's course offerings, and begin project based learning. This camcorder also enables members to promote their work, which enhances DMS visibility. Ideal for documentaries.\

### Allocate a Reoccurring budget for woodshop air filters (Robert Davidson)

**Problem:** Currently the amount of dust in the air is overwhelming our current dust control in the woodshop.

**Solution:** Allocate an additional \$400 a month to Woodshop for the purchase of Air Filters. The Inner filter is \$60 and the prefilter is \$20 per filter. I would also like to purchase another unit for 369.99 to install above the CNC Router to help with air flow. (Would still need power ran)

**Relevance to our tax exempt purpose:** Dust Collection is important to the safety of DMS members as well as firecode that we must maintain the dust in the woodshop.

### Allocate budget to mass produce frank tables (Brandon Green)

**Problem:** We had a table build off over the last month, we need more decent work tables in the workshop (wobbly tables are ridiculous)

**Solution:**

- Declare Frank tables (non caster) as the winner
- Allocate \$1,750 for the building of 5 frank tables
- Require addition of [heavy duty leveler feet](http://www.rockler.com/heavy-duty-lifting-leveler) (because the concrete floor is not level). Mobility could always be added on [with addition of deployable casters](http://www.amazon.com/Workbench-Caster-Kit-4-Pack/dp/B005W0UWCY/ref=pd_bxgy_60_img_y)
- With feet raise height to a bit closer to existing worktable height
- Dispose of current plywood top tables

**Relevance to our tax exempt purpose:** Facilitating members making stuff is one of the primary goals of DMS, we can't do that without space for people to work on

### Science Committee Workbench (Richard Alexander)

**Problem:** The current tables in the Science Committee area are not intended for heavy use or durability. Attaching a heavy clamp (for our illuminated magnifying lens) to the 'Lifetime' plastic table resulted in tears in the plastic. Anticipated demand for a sturdy, water-resistant, acid-resistant, heat-resistant workbench cannot be met with the current portable tables.

**Solution:** Obtain a lab workbench that is suitable for a wet lab. The cost of materials for building one out of wood and phenolic would be about \$500, according to Frank. Optionally, we could use a steel workbench similar to those in the Electronics Room (example of a retail model with price list: <https://materialflow.com/p/5000-lbs-Capacity-K-Series-Workbenches/> ). Allocate the necessary funds for the aquisition of an appropriate workbench.

**Relevance to our tax exempt purpose:**Sturdy, safe working surfaces and storage are critical for working on committee projects.

### UV Laser Safety Goggles (Richard Alexander)

**Problem:** Science Committee is working with equipment that produces ultraviolet laser radiation. This radiation can damage eyes.

**Solution:** Allocate \$385 to purchase seven UV Laser Safety Goggles at \$45 (plus shipping) each. An example of these goggles: <http://www.innovam.com/en/GS-LPG405.html> .

**Relevance to our tax exempt purpose:** Appropriate safety equipment allows safe experimentation for educational purposes.

### Electrical Safety Equipment (Richard Alexander)

**Problem:** Science Committee is working with electrical equipment in a wet lab environment. This results in an electric shock hazard to occupants.

**Solution:** Allocate \$75 for three Yellow Jacket 5138 6-Outlet Heavy Duty Metal Surge Protector 1050 Joules, 15-foot High Visibility Cord (example: <http://www.amazon.com/Yellow-Jacket-5138-Protector-Visibility/dp/B000HJBEMW/ref=sr_1_1?&ie=UTF8&qid=1434744395&sr=8-1&keywords=heavy+duty+surge+protectors> ).

\- Install GFCI outlets in Science area.

Allocate \$200 for Voltage Safe Industrial Workplace Mats (example: <http://www.amazon.com/Voltage-Safe-Industrial-Workplace-Mats/dp/B00IKLC9VE/ref=sr_1_3?ie=UTF8&qid=1434744859&sr=8-3&keywords=Electrical+Safety+Mats> ).

**Relevance to our tax exempt purpose:** Appropriate safety equipment allows safe experimentation for educational purposes.

## New Business

### Formal Complaint & Behavior of a Member

A formal complaint against a member, including possible disciplinary action will be discussed.

### Increase visibility of the board, committee chairs to members and visitors in answering questions and inform people of roles and duties (Nicole Franczvai)

Problem: I am sorry I am once again traveling during a board meeting so I can't explain this in person. I believe we should have an area where names and faces meet. Members sometimes find it very hard to match the person who can help me with the problem I have and I would like to take the simplest route to the answer. Now I know everything is online but this would be a quick "look-see" solution.

Solution: In the font lobby we have a small wall that we can use to nicely mount photos (approx 5X7 of the persons choosing) of each of the board members, committee chairs, and people with "tasks" or "jobs" at this space. On the bottom a nicely made plate (laser?) with name, talk name, possibly an email address and a simple statement like "I help.....(setup classes online, questions with buying supplies, laser repair)" If they are a committee chair I think a small area for the next meeting would be helpful as well. It would be nice if each person created a custom personalized frame or just used a simple black dollar store frame (pr could possibly purchase them). I'm sorry for taking up so much space with this and I'm not even sure if this is board meeting worthy. I could easily take this task on if you decided to do it and complete it in under a month. Nicole Franczvai

## Minutes

    Dallas Makerspace Board of Directors Meeting notes : June 21st, 2015

    In attendance:
    - Benjamin Groves
    - Kent Bowling
    - Andrew LeCody
    - Robert Davidson
    - Alex Rhodes

    Meeting called to order at 4:10pm


    *** Prior Minutes ***
    - Prior Minutes Pass


    *** Finiancial Report ***
    General Funds as of April 30th = $26,273.42
    Note: Compared to last month, our General Funds decreased $5693.59
    - Treasurer advises fiscal conservancy, as large purchases are looming


    *** Consent Agenda ***

    These items pass consent agenda with unanimous consent:
    - Authorize $250 For Website/Forum Hosting (Andrew LeCody)


    *** NEW BUSINESS (PART 1) ***

    Formal Complaint & Behavior of a Member (Side A)
    - On the grounds that one member was not being excellent and will not concede the point, the Board of Directors is instating a one month ban
    - Proposed by Andrew LeCody, seconded by Robert Davidson
      - Motion passes with 4 in favor, 1 against

    Formal Complaint & Behavior of a Member (Side B)
    - Arguments heard out, no disciplinary action taken against other member
    - Dismissed with full consent of the board

    Increase visibility of the board, committee chairs to members and visitors in answering questions and inform people of roles and duties (Nicole Franczvai)
    - Board approves approximately $100 for materials in setting up photos in lobby per this item, to be coordinated by Nicole Franczvai
    - Proposed by Benjamin Groves, seconded by Andrew LeCody
      - Unanimous Approval by the Board

    Appoint Alex Rhodes, Tom Cook as Co-Chairs for the Wood Shop Committee (Alex Rhodes)
    - Proposed by Alex Rhodes, seconded by Robert Davidson
      - Unanimous Approval by the Board

    Approve Justin Edwards, Nicole Franczvai as Purchasing Officers (Benjamin Groves)
    - Proposed by Benjamin Groves, seconded by Andrew LeCody
      - Unanimous Approval by the Board


    *** PULLED CONSENT AGENDA ITEMS ***

    Replace drink fridge (Brandon Green)
    - Tabled till next board meeting with full consent of the board

    Replace Router (Brooks Scharff)
    - Tabled till next board meeting with full consent of the board

    Purchase of Printers (Brooks Scharff)
    - Tabled till next board meeting with full consent of the board

    Buy a new server to replace aging server (Robert Davidson)
    - Tabled till next board meeting with full consent of the board

    Authorize Honorariums for Tour Guides (Stan Simmons)
    - News divulged that we are beginning a process of looking for employees to alleviate this role
    - Tabled with full consent of the board

    Reserve October 3, 2015 for DMS-wide mini-convention (Paul Wilson)
    - Proposed as written by Andrew LeCody, seconded by Benjamin Groves
      - Unanimous Approval by the Board

    Purchase of Sony Cyber-shot DSC-RX10 (Natasha Cooks)
    - Allocate $972 to Digital Media with the intent of Sony camera purchase
    - Proposed by Robert Davidson, Alex Rhodes
      - Motion passes with 3 in favor, 2 against

    Purchase of studio and field equipment for Digital Media (Natasha Cooks)
    - Tabled till next board meeting with full consent of the board

    Purchase of secure storage for high-end production equipment (Natasha Cooks)
    - Tabled till next board meeting with full consent of the board

    Pre-authorization/wait-list purchase :Canon XC10 4K professional camcorder (Natasha Cooks)
    - Tabled till next board meeting with full consent of the board

    Allocate a Reoccurring budget for woodshop air filters (Robert Davidson)
    - Allocate $1000 to Wood Shop for the purpose of handling sawdust air filtration
    - Proposed by Robert Davidson, seconded by Andrew LeCody
      - Unanimous Approval by the Board

    Logistics budget (Allen)
    - Allocate $2000 to Logistics and increace monthly allocation to $500 a month
    - Proposed by Benjamin Groves, seconded by Andrew LeCody
      - Unanimous Approval by the Board

    Allocate budget to mass produce frank tables (Brandon Green)
    - Tabled till next board meeting with full consent of the board

    Science Committee Workbench (Richard Alexander)
    - Tabled till next board meeting with full consent of the board

    UV Laser Safety Goggles (Richard Alexander)
    - Allocate $385 to Science Committee with the intent that they purchase Safety Goggles
    - Proposed by Andrew LeCody, seconded by Kent Bowling
      - Unanimous Approval by the Board

    Electrical Safety Equipment (Richard Alexander)
    - Allocate $100 to Science Committee with the intent that they purchase three surge protectors
    - Proposed by Andrew LeCody, seconded by Benjamin Groves
      - Unanimous Approval by the Board


    *** NEW BUSINESS (PART 2) ***

    Allocate $400 per month for offsite storage
    - Proposed by Robert Davidson, seconded by Andrew LeCody
      - Motion passes with 4 in favor, 1 against

    Approve open spending until the July 2015 Board of Directors meeting, for addressing issues raised by government inspectors
    - Each expenditure must be submitted to the Board of Directors via admin@dallasmakerspace.org and approved by email repy by 3 of the 5 Board Members
    - Proposed by Benjamin Groves, seconded by Andrew LeCody
      - Unanimous Approval by the Board

    Purchase 3 security cameras for approximately $540
    - Proposed by Robert Davidson, seconded by Alex Rhodes
      - Motion passes with 3 in favor, 2 against


    Next Board Meeting Scheduled on June 21st at 4:00pm

    Meeting adjourned at 8:41pm

## May, 2015 Budget Report

    Dallas Makerspace
    General End Of Month Balance Statement              May 31st 2015

            3D Fabrication Committee                            15.46
            3D Printer Operations                            2,144.74
            Aerospace Committee                                 50.00
            Amateur Radio Committee                            923.05
            Authorized Spending Fund                           307.83
            Automotive Committee                             1,363.40
            Bio Committee Fund                                 284.58
            Blacksmithing Committee                          1,300.00
            Cintas First Aid Maintenance                       138.10
            Classroom Committee                                945.60
            Creative Arts Committee                          3,718.35
            Digital Media Committee                            288.35
            Electronics & Robotics Committe                  1,293.78
            Financial Committee Fund                           116.46
            Foundry Committee                                  563.59
            FUND_Adobe CC License                              600.00
            FUND_Delta 3d Printer                               72.70
            FUND_Lathe Tooling                                   8.28
            FUND_MultiCam CNC Router                          -543.41
            FUND_Premium Class                                 350.96
            Infrastructure                                     993.72
            Laser Committee                                  8,720.20
            Logistics                                       -1,164.94
            Machine Shop Committee                          -3,782.50
            Maker Fellowship Fund                            1,194.15
            Metal Shop Committee                               911.64
            PR Committee                                       837.56
            Savings Fund                                    20,004.77
            Screen Printing Operations Fund                    495.39
            Snack Fund                                       1,045.86
            VECTOR Committee                                   124.08
            Vinyl Cutter Fund                                  201.59
            Wood Shop Committee                             -1,293.13
            Unclassified                                    17,013.48

         TOTAL                                              59,243.69

## Approved Purchase Tracking

Below is a condensed list of purchasing decisions made by the Board of Directors (above), and the status of these action items.

    [✓] Set up autopayments for Digital Ocean and CloudFlare CDN/DNS
    [✓] $100 authorized for Nicole Franczvai's use in setting up photos in lobby (running total $12.99)
    [✓] Allocate $972 to Digital Media with the intent of Sony camera purchase (QB#1526)
    [✓] Allocate $1000 to Wood Shop for the purpose of handling sawdust air filtration (QB#1527)
    [✓] Allocate $2000 to Logistics (QB#1528)
    [✓] Increase monthly allocation to Logistics to $500 a month
    [✓] Allocate $385 to Science Committee with the intent that they purchase Safety Goggles (QB#1529)
    [✓] Allocate $100 to Science Committee with the intent that they purchase three surge protectors (QB#1530)
    [✓] Allocate $400 per month for offsite storage
    [✓] Purchase 3 security cameras for approximately $540
