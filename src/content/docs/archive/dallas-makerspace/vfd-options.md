---
title: "VFD Options"
description: "When the spindle on our EMCO mill spins up, it causes the GFCI to trip. We are using a VFD (Variable-frequency Drive) to run the EMCO mill from 115V power...."
sourceUrl: "https://dallasmakerspace.org/wiki/VFD_Options"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/VFD_Options\">legacy DMS wiki</a> — content may be outdated."
---
## The Problem

When the spindle on our EMCO mill spins up, it causes the GFCI to trip. We are using a VFD (Variable-frequency Drive) to run the EMCO mill from 115V power. This is the VFD we are using: [Link](http://pdf2.datasheet.su/telemecanique/atv11hu18f1u.pdf)

We do not have access to native 3-phase power. This is in our shop (this might be relevant for electrical regulation purposes).

**Question**: Is it possible to run the 115V VFD on a GFCI circuit without tripping it? And, will it cost more than \$200 to make it work?

**Helpful Article**: [Link](http://www05.abb.com/global/scot/scot239.nsf/veritydisplay/bbe3c864d311f0e88525792000750ed3/$file/lvd-eotn14u-en.pdf)

## Solution Options

- Buy a 220-240V VFD (without GFCI) and run 220-240V power to the mill.
  - **Pros**: No GFCI is required for 220V according to NEC?
  - **Cons**: We would need to spend ~\$150 on buying a new VFD, and extra money on running another 220V line ~35 ft. the mill.

<!-- -->

- Buy a VFD with GFCI.
  - **Pros**: It would be hardwired from the breaker to the VFD and it will still have GFCI.
  - **Cons**: We would need to spend ~\$150 on buying a new VFD. We would also need to spend a small amount of money on replacing the wire that goes from the breaker to the VFD.



- Buy an isolation transformer
  - **Pros**: This should work?
  - **Cons**: Expensive option

<!-- -->

- Buy a [special earth-leakage relay](http://www.littelfuse.com/acdc)
  - **Pros**: This should work?
  - **Cons**: Doesn't list the price and can't find it on ebay. Probably extremely expensive
