---
title: "Analog High-Definition Television : NHK MUSE"
description: "Presented as two sessions, first a lecture, then a demonstration of the MUSE system using a Hi-Vision LaserDisc source."
sourceUrl: "https://dallasmakerspace.org/wiki/Analog_High-Definition_Television_%3A_NHK_MUSE"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Analog_High-Definition_Television_%3A_NHK_MUSE\">legacy DMS wiki</a> — content may be outdated."
---
Presented as two sessions, first a lecture, then a demonstration of the MUSE system using a Hi-Vision LaserDisc source.

## Slides for Lecture Session

- <img src="/dms-source/files/mw/thumb_4_45_MUSE_00_intro.png_120px-MUSE_00_intro.png" width="120" height="68" />

  Title Card

- <img src="/dms-source/files/mw/thumb_5_56_MUSE_01_whatis.png_120px-MUSE_01_whatis.png" width="120" height="68" />

  Just what are we talking about here, anyway?

- <img src="/dms-source/files/mw/thumb_5_54_MUSE_02_screen_formats.png_120px-MUSE_02_screen_formats.png" width="120" height="68" />

  The blue rectangle represents NTSC television, 483 visible lines with 4:3 aspect ratio ; the green represents Hi-Vision, 1035 visible lines, 16:9, with the dark green areas being parts of the Hi-Vision picture which are not transmitted in the MUSE system.

- <img src="/dms-source/files/mw/thumb_d_de_MUSE_03_fundamentals.png_120px-MUSE_03_fundamentals.png" width="120" height="68" />

  What is television supposed to do, anyway, and how does Hi-Vision achieve it better than NTSC does?

- <img src="/dms-source/files/mw/thumb_a_a6_MUSE_04_raster.png_120px-MUSE_04_raster.png" width="120" height="68" />

  Since there is no practicable way of transmitting the value of every point in the picture all at once, the points are sampled successively over the course of one frame period. Until recently, the most common way of doing this was to trace an electron beam across a light-sensitive or light-emitting screen, using electric or magnetic fields. By precise control of timing, the image as seen at the receiver is a good duplicate of that at the transmitter.

- <img src="/dms-source/files/mw/thumb_4_4b_MUSE_05_interlace.png_120px-MUSE_05_interlace.png" width="120" height="68" />

  Because the eye is more sensitive to flicker than to motion, the picture only needs to be scanned about 24 times each second, but dividing it into two interdigitated sets of lines scanned in succession 48 or more times a second reduces the sensation of flicker to tolerable levels.

- <img src="/dms-source/files/mw/thumb_7_79_MUSE_06_color_rgb.png_120px-MUSE_06_color_rgb.png" width="120" height="68" />

  Any full-colour image can be adequately represented by a combination of three primary-colour images, red, green, and blue.

- <img src="/dms-source/files/mw/thumb_a_a9_MUSE_07_color_ypbpr.png_120px-MUSE_07_color_ypbpr.png" width="120" height="68" />

  For efficiency in transmission, a colour image can be separated into a monochrome image and two colour difference images, weighted sums of the primary colour images which correlate less. The colour differences can then be transmitted at reduced resolution, as the eye is less sensitive to colour detail than brightness detail.

- <img src="/dms-source/files/mw/thumb_d_d2_MUSE_08_spectrum.png_120px-MUSE_08_spectrum.png" width="120" height="68" />

  The raster scan structure causes the energy in the video signal to cluster at integer multiples of the line frequency, and around those multiples at integer multiples of the field frequency.

- <img src="/dms-source/files/mw/thumb_5_53_MUSE_09_chronology.png_120px-MUSE_09_chronology.png" width="120" height="68" />

  The meaning of "high definition television" has changed over time.

- <img src="/dms-source/files/mw/thumb_3_3a_MUSE_10_signal_format.png_120px-MUSE_10_signal_format.png" width="120" height="68" />

  The transmitted signal, after MUSE processing, is very clearly a video signal, but one which has been "mangled". Green represents the vertical synchronizing signal, black the horizontal synchronizing signal, orange the digital audio signal, yellow the luminance video signal, and red and blue the colour-difference video signals.

- <img src="/dms-source/files/mw/thumb_d_db_MUSE_11_block_diagram.png_120px-MUSE_11_block_diagram.png" width="120" height="68" />

  The MUSE encoder is quite complicated.

- <img src="/dms-source/files/mw/thumb_9_9c_MUSE_12_interframe_subsampling.png_120px-MUSE_12_interframe_subsampling.png" width="120" height="68" />

  Elements marked "A" are transmitted in the first frame, elements marked "B" in the second frame, in a "dot interlacing" process. In stationary picture areas, this is a lossless process.

- <img src="/dms-source/files/mw/thumb_9_9d_MUSE_13_interframe_subsampling_A.png_120px-MUSE_13_interframe_subsampling_A.png" width="120" height="68" alt="MUSE 13 interframe subsampling A.png" />

- <img src="/dms-source/files/mw/thumb_2_22_MUSE_14_interframe_subsampling_B.png_120px-MUSE_14_interframe_subsampling_B.png" width="120" height="68" alt="MUSE 14 interframe subsampling B.png" />

- <img src="/dms-source/files/mw/thumb_6_66_MUSE_15_still_image.png_120px-MUSE_15_still_image.png" width="120" height="68" />

  Transformation of original luminance signal into transmitted (bandwidth-reduced) luminance signal in still-image areas.

- <img src="/dms-source/files/mw/thumb_9_9e_MUSE_16_moving_image.png_120px-MUSE_16_moving_image.png" width="120" height="68" />

  Processing in moving-image areas, relying on intraframe subsampling.

- <img src="/dms-source/files/mw/thumb_5_5d_MUSE_17_audio.png_120px-MUSE_17_audio.png" width="120" height="68" />

  MUSE supports two digital audio formats, using an unsophisticated type of bitrate reduction, for a total of four possible audio channels.

- <img src="/dms-source/files/mw/thumb_4_4d_MUSE_18_frequencies.png_120px-MUSE_18_frequencies.png" width="120" height="68" />

  MUSE has been transmitted by satellite, using a wide frequency deviation and low carrier-to-noise ratio, and recorded on optical disc, with an narrow deviation and high CNR, with roughly equivalent signal-to-noise ratio, after demodulation, in both cases.
