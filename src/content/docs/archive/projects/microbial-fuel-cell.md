---
title: "Microbial Fuel Cell"
description: "We are running a project to produce power using bacteria in a bacterial fuel cell. We plan to research the operating principles and engineer the devices to..."
sourceUrl: "https://dallasmakerspace.org/wiki/Microbial_Fuel_Cell"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Microbial_Fuel_Cell\">legacy DMS wiki</a> — content may be outdated."
---
## Introduction

We are running a project to produce power using bacteria in a bacterial fuel cell. We plan to research the operating principles and engineer the devices to maximize their power output.

## Goals

- Understand the KeegoTech MudWatt fuel cell's physical construction, configuration, and operating principles
- Achieve successful sustained power output with the MudWatt (demonstrated when the cell can continuously flash its LED)
- Construct our own fuel cell from basic materials and open source the design
- Conduct a review of research in the academic literature \[ongoing\]
- Assemble a multi-cell test-bed to quantify power output under different conditions
- Demonstrate the ability to reliably duplicate a functioning baseline control fuel cell
- Document and open source the baseline protocol
- Identify design parameters to vary to improve performance
- Observe the microbial cultures on the electrodes to determine what organisms are effective and how they function (are they building nano-wire networks, using direct contact, or exchanging charge through biomolecules?)
- Systematically vary the design parameters to identify those important for optimizing power output
- Potentially design and implement an open source experimental control and monitor system
- Ultimately exceed the power output of AA cells batteries, then use our cells to power electronic devices

## Progress

- **2011 Dec 29** - Flushed the non-performing 01 mud mix from the fuel cell and replaced it with new mud sampled from Bachmann Lake at coordinates 32.859801, -96.855976, mixed with activated charcoal (and ion exchange resin, which should not hurt) from a Brita water filter cartridge (mud mix 02).
- **2012 Jan 5** - We are measuring approximately 43 mV from our 02 mix test cell; low, but the polarity is correct.
- **2012 Jan 12** - First success! The cell fueled with fuel mix 02 is now outputting a steady voltage of 322 mV, and is flashing its LED.
- **2012 Jan 26** - The fuel cell is outputting constant voltage of 340 mV. We are sourcing carbon fabric electrodes to begin fabricating our own cells.
- **2012 Feb 2** - The fuel cell was outputting constant voltage of 357 mV. After settling it by shaking it, the output voltage increased to a steady 385 mV. We think the upper electrode comes out of full contact with the fuel mix and shaking the fuel cell seats it more fully.
- **2012 Feb 9** - The fuel cell seems to now be outputting a constant voltage of 363 mV. We have ordered carbon fiber electrodes (for muscle stimulators, from a medical supply company) and next week should try building our own fuel cell from scratch. We are beginning initial planning for the experimental monitor system.
- **2012 Feb 16** - The electrodes are in; we are ready to start building our own fuel cells. The electrodes have a gel on them that may be antimicrobial. Strategies to try involve leaving it on to see if it matters, letting it dry out, and/or removing it w/ alcohol. Temporarily slowed by lab reorganization.
- **2012 Mar 22** - The fuel cell is now outputting a constant voltage of 430 mV.
- **2012 Apr 12** - The fuel cell is now outputting a constant voltage of 446 mV. Lab reorganization is complete, but David R's personal time constraints are impairing progress on the project.
- **2012 May 5** - The fuel cell is now outputting a constant voltage of 458 mV.
- **2012 May 10** - The fuel cell is now outputting a constant voltage of 463 mV.
- **2012 May 24** - The fuel cell is now outputting a constant voltage of 466 mV.
- **2012 May 31** - The fuel cell is now outputting a constant voltage of 473 mV.
- **2012 June 14** - The fuel cell had suddenly dropped in voltage to 172 mV. There was a large bulge in the top electrode, raising the possibility that it was not making good contact anymore, perhaps due to expansion of the soil due to dryness, or possible handling. Visible bands have been forming in the soil over the past two months, may indicate biofilms. We opened the cell and tamped it down, adding a little distilled water; voltage went back up to 200 mV and then after 2 hours to 240 mV. We also built our own fuel cell from our own sourced components, using TENS electrodes with the anti-microbial gel coating peeled off after soaking in alcohol, and a tupperware container with a hole drilled in the top for the wires (then covered with tape). We loaded this with fuel mix 03 (worm soil) mixed with activated charcoal (from a Brita filter) and a little distilled water. Interestingly enough, this one booted immediately and outputted 450 mV, raising questions of the mechanism (diffusion vs. nanowires).
- **2012 Jun 21** - Fuel cell 02 is back up to 447 mV. Fuel cell 03 is now down to 72 mV.
- **2012 Jun 28** - Fuel cell 02 is down to 372 mV, flashing steadily. Fuel cell 03 is now up to 148 mV.

## References

## Microbial Fuel Cell

- [KeegoTech](http://www.keegotech.com), makers of our first test fuel cell
- [Discussion of microbial fuel cells](http://groups.google.com/group/diybio/browse_thread/thread/170fa18d8ce77bde?pli=1) on the DIY Bio email list
- [Activated Carbon Cloth as Anode for Sulfate Removal in a Microbial Fuel Cell](http://pubs.acs.org/doi/abs/10.1021/es8003766) (Environ. Sci. Technol., 2008, 42 (13), pp 4971–4976) - concludes that Activated Carbon Cloth (ACC) is superior to graphite foil (GF) and carbon fiber veil (CFV) as an anode for sulfate removal in microbial fuel cells (note that we ultimately used TENS electrodes)
- [Pubmed searches](http://www.ncbi.nlm.nih.gov/pubmed?term=microbial%20fuel%20cell)
- Sources for carbon cloth electrodes: [Fuel Cell Earth](http://fuelcellearth.com/Education/index.php?option=com_virtuemart&page=shop.browse&category_id=15&Itemid=100002&TreeId=1), [Jamestown Distributors](http://www.jamestowndistributors.com/userportal/search_subCategory.do?categoryName=Carbon%20Fiber&categoryId=522&page=GRID&engine=adwords!6456&keyword=carbon_cloth), [Fiberglass Supply](http://www.fiberglasssupply.com/Product_Catalog/Reinforcements/Carbon_and_Kevlar/carbon_and_kevlar.html?gclid=CJyFzcDi7q0CFWhjTAod52EQsw)

## Not yet read through

- [ACS subscription info](http://portal.acs.org/portal/acs/corg/content?_nfpb=true&_pageLabel=PP_ARTICLEMAIN&node_id=343&content_id=CNBP_028598&use_sec=true&sec_url_var=region1&__uuid=91b2019a-e95d-4902-86cf-7b9a497eda44)
- [Electricity-producing bacterial communities in microbial fuel cells](http://www.ncbi.nlm.nih.gov/pubmed/17049240)
- [Power generation using an activated carbon fiber felt cathode in an upflow microbial fuel cell](http://www.sciencedirect.com/science/article/pii/S037877530901533X)
- [Bifunctional Silver Nanoparticle Cathode in Microbial Fuel Cells for Microbial Growth Inhibition with Comparable Oxygen Reduction Reaction Activity](http://pubs.acs.org/doi/pdfplus/10.1021/es2000326)
