---
title: "Bio FAQ"
description: "This information may be outdated.If you feel this is in error, please remove the {{outdated}} template."
sourceUrl: "https://dallasmakerspace.org/wiki/Bio_FAQ"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Bio_FAQ\">legacy DMS wiki</a> — content may be outdated."
---
**This information may be outdated.**\
If you feel this is in error, please remove the {{outdated}} template.

## Frequently Asked Questions

## What is this about?

A small group of us are interested in doing projects that involve programming biology ("synthetic biology", aka "DIY bio" projects). These kinds of projects involve genetically engineering small organisms, usually bacteria or yeast, to do something useful, in a process analogous to writing a program. An example project, first done in 2005, is to make a [100 megapixel camera using bacteria](http://www.engadget.com/2005/11/23/living-camera-uses-bacteria-to-capture-100-megapixel-photos/).

## Can you really do that?

Yes, and it's surprisingly not that hard. Since 2003, a competition called the International Genetic Engineered Machine competition ([iGEM](http://ung.igem.org/Main_Page)) has allowed undergraduate teams to compete to build useful biological machines. Last year, Peking University's team won with a bio-sensor that detected heavy metals. Earlier winning projects included engineering yeast to make [beer containing resveratrol](http://www.technologyreview.com/biomedicine/21628/) (done in Texas) and altering e-coli to smell like [mint instead of sewage](http://www.npr.org/templates/story/story.php?storyId=90014997). The iGEM competition is now operating regionally.

## How is it done?

Bacteria are basically little robots. They have a very simple circular genome and can take in and put out smaller separate circular rings of DNA called plasmids. Plasmids allow you to add new functions to the bacteria, like importing a module in Python. The bacteria conveniently provides an uptake mechanism you can trigger with chemicals to make it import new plasmids.

The [BioBricks Foundation](http://biobricks.org/) at MIT has produced a [Registry of Standard Biological Parts](http://partsregistry.org) that ships plasmids in a standard format with wiki documentation. You can order new plasmids from them and add them to your bacteria, usually by treating the bacteria with a solution of calcium chloride to trigger uptake.

## How is programming biology different than programming computers?

Small biological entities like bacteria reproduce quickly and you are operating with very large numbers of them, so biology explores all possible permutations of success and failure at the same time. When you do a bulk operation like introducing a plasmid, some bacteria will uptake it properly, some won't get it at all, some will get multiple copies, some get a mangled copy, etc. Also, your organisms constantly evolve on their own, whether you like it or not. Most of your effort goes into designing the filtering steps to select out and amplify the organisms that did what you wanted from those that did not. For example, often you will couple a gene you want to introduce with one that introduces resistance to a specific antibiotic, then apply the antibiotic to the colony to kill off the bacteria that did not uptake the target gene properly.

## Why is this important?

We have lived through an information technology revolution, which is still healthy and ongoing. Synthetic biology and genomics form the next revolution that will transform our industries and our world. There is a huge benefit to becoming literate in the technology, the techniques, and the issues and potential while this next revolution is still at an early stage.

## Are there concerns with this work?

Yes. First, as with any technology, there are basic safety processes to be followed. Biological experimentation can also generate waste (including basic chemical waste) that needs to be properly disposed of. There are also social concerns such as public relations and making sure law enforcement understands what you are doing. These aspects must be addressed, but none of them are insurmountable. Affiliating with appropriate programs may provide helpful frameworks for addressing these issues.

## Are any hackerspaces doing bio projects?

[BioCurious](http://biocurious.org), is now operating in the Bay area. [Genspace](http://genspace.org) in NYC, is further along.

## Are there any Dallas Makerspace members with credentials in molecular/synthetic biology?

There are. At least two members of the bio projects group (David Owen and Phillip Wrage) have recent PhDs in Cell & Molecular Biology from UT Southwestern and have familiarity with the techniques we are studying. Others have related experience in useful fields like chemistry and brewery engineering.

## What state are we at?

We are up and running projects - see [projects](http://dallasmakerspace.org/wiki/Bio_Projects_%28IGEM%29#Completed.2FOngoing_Bio_Projects)

## Where can I learn more about Synthetic Biology?

Check out these talks from [Drew Endy](http://mitworld.mit.edu/video/363) and [Craig Venter](http://www.ted.com/talks/craig_venter_is_on_the_verge_of_creating_synthetic_life.html) and [Andrew Hessel](http://www.youtube.com/watch?v=6HeQlrtUOu4).

## What do I need to do to prepare for these kinds of projects?

You need a basic grounding in cellular and genomic biology to understand the concepts and language. The field is changing rapidly, so if your educational experience was some time ago, you may want to update it. One excellent resource is the [Learn.Genetics site](http://learn.genetics.utah.edu/), an excellent online learning resource from University of Utah. Another excellent resource is MIT's [Open Courseware](http://ocw.mit.edu/courses/biology/) program lectures, especially [MIT 7.012, Intro to Biology](http://ocw.mit.edu/courses/biology/7-012-introduction-to-biology-fall-2004/) (you can also find its lectures in iTunesU; search for "MIT 7.012" in iTunes; you want the program with Eric Lander).

## How can I get more information or get involved?

We are meeting on Thurdays at the Makerspace after the regular meeting (which starts at 7pm); look for David Rostcheck or Philip Wrage or David Owen (or anyone else hanging out in the bio room, which is the obvious-looking room with the electronic lock and the Umbrella Corporation logo on it). Also see the [Bio Group Working Area](/dms-source/archive/science/bio-group-working-area/) page for more info. If you are a member, look for messages on the email list with the BIO tag.
