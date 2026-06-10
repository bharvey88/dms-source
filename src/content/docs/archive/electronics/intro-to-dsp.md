---
title: "Intro to DSP"
description: "Digital Signal Processing (DSP) uses software to change the nature of electronic signals. This could as simple as adding more bass to your favorite song or..."
sourceUrl: "https://dallasmakerspace.org/wiki/Intro_to_DSP"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Intro_to_DSP\">legacy DMS wiki</a> — content may be outdated."
---
**[The 60-Second Overview of DSP](http://www.redcedar.com/learndsp.htm#60-second)**

Digital Signal Processing (DSP) uses software to change the nature of electronic signals. This could as simple as adding more bass to your favorite song or as complex as an entire radio receiver.

Many parts of DSP hark back to the original form of signal processing that used physical circuit elements (op-amps, capacitors, resistors, etc). We could refer these original designs as "Analog Signal Processing". But there are many things you can do with DSP that have no corresponding analog circuit design.

## Applications

What about a speech generator like [this one](http://web.archive.org/web/20030903224613/spatula-city.org/~im14u2c/intv/tech/sp0256_instr_set.html) ?

Or maybe a [tone decoder](http://www.embedded.com/story/OEG20020819S0057) to decode DTMF tones?

Here is a [custom Atmel AVR-based telephony system](http://docs.google.com/viewer?a=v&q=cache:klqbAAE-ZhgJ:www.circuitcellar.com/avr2006/winners/Abstracts/AT3344_Abstract.pdf+Goertzel+algorithm+atmega&hl=en&gl=us&pid=bl&srcid=ADGEEShZm7vHE4tnb3mHBrR2LG3dVX3DktX2DXSgbw5vAh8VtKDdnfPR1nk5jE6kzz6UuewP8mLJJogEaK_PRpE_mZh04c99Ds2qHDiB6ZPF_llsuja5Q6vbonv9QJHIlxRmzRAxoGG4&sig=AHIEtbSnr2EYeaIOoaeGTY9K5IU0l8Xo-w) that can record and playback audio, detect DTMF tones, and send all this data back and forth to a connected PC.

## Filter Design

A neat website to design different types of digital filters can be used [here](http://mshook.appspot.com/z/firkernel.htm).

## Software

If you would like to experiment with writing your own DSP software without having to build anything, try PA3FWM's neat software [BasicDSP](http://wwwhome.cs.utwente.nl/~ptdeboer/ham/basicdsp/). Both a Windows executable and source code for Linux are provided.

[Here are some BasicDSP scripts to play with.](http://www.google.com/notebook/public/17894154587286929730/BDRF6SgoQ96vq2eUj)

## Links

An entire book on DSP is available [here](http://www.dspguide.com/pdfbook.htm) free of charge. It doesn't get much better than that.

The other (there are two) author of BasicDSP has a page [here](http://home.tiscali.nl/curious_about/PA1DSP/basicdsp/index.html). Take note of the navigation bar on the left side of the page with links to some example scripts.

[Here is a great page](http://www.redcedar.com/learndsp.htm) describing how you can get involved with DSP without having to go to school to do it.
