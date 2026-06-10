---
title: "Fusor"
description: "10-23-2022 Completed rebuild of vacuum Roughing Pump, this was a time consuming and painstaking process, but we cut no corners. See vacuum pump pics; there..."
sourceUrl: "https://dallasmakerspace.org/wiki/Fusor"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Fusor\">legacy DMS wiki</a> — content may be outdated."
---
<img src="/dms-source/files/mw/thumb_2_24_Brazed_Tungsten_Oxide.jpg_300px-Brazed_Tungsten_Oxide.jpg" width="300" height="400" /> Electrode--brazed Tungsten Carbide Rings to a Tungsten Rod <img src="/dms-source/files/mw/thumb_7_79_Pirani_Gauge.jpg_300px-Pirani_Gauge.jpg" width="300" height="400" /> Added new Pirani Gauge with Heltec ESP32 uComp to measure it and display vacuum to a Webpage

## The objective is to build a working Farnsworth-Hirsch Fusor, to demonstrate Inertial Electrostatic Fusion (the binding of lighter atom's nuclei together, to form heavier atoms). Fusors are the smallest and simplest of the fusion reactors. Their yield is very low and difficult to even detect, but it can be detected.

<img src="/dms-source/files/mw/thumb_1_13_Fusion_Chamber.jpg_300px-Fusion_Chamber.jpg" width="300" height="169" /> First Plasma

Progress to date:

<img src="/dms-source/files/mw/thumb_9_9d_VacPump_SS_back_tube.jpg_300px-VacPump_SS_back_tube.jpg" width="300" height="400" /> New 1 inch flex line to connect the Roughing Pump to the Diffusion Oil High Vacuum primary pump.

10-23-2022 Completed rebuild of vacuum Roughing Pump, this was a time consuming and painstaking process, but we cut no corners. See vacuum pump pics; there is the teardown, vane rotor with wall damage, and precision grinding back to specs. What we didn't pic is the fine polishing of the vane surfaces, special thanks to Vasha for some very skilled wet sanding down to 2000 grit. The pump has been reinstalled and tested down to about 14 Microns of pressure, webpage shows 1422, or 3.45Vdc at the Pirani gauge. Next is the new stainless steel line for the backside of the Diffusion Oil Pump.

<img src="/dms-source/files/mw/thumb_7_71_VacPump_cover_off.jpg_300px-VacPump_cover_off.jpg" width="300" height="400" /> Body of the 2 stage vacuum pump <img src="/dms-source/files/mw/thumb_c_c9_VacPump_rotary_vanes.jpg_300px-VacPump_rotary_vanes.jpg" width="300" height="400" /> VacPump rotary vanes, and chamber walls <img src="/dms-source/files/mw/thumb_6_63_VacPump_grinding_vane_walls.jpg_300px-VacPump_grinding_vane_walls.jpg" width="300" height="400" /> This is the precision grinder we used to buff the damage of the rotary vane walls.

9-4-2022 Teardown for rebuild of the Roughing Pump. We noticed the pressure rising while the pump was running consistently, at over 70 Microns.

<img src="/dms-source/files/mw/thumb_8_8d_Diffusion_Oil_Pump_back_flange.jpg_300px-Diffusion_Oil_Pump_back_flange.jpg" width="300" height="400" /> We TIG welded a KF-25 stainless flange onto the backside of the High Vacuum Pump.

7-3-2022 We modified the backside of the Diffusion Oil Pump, by TIG welding on a Kleinlock Flange. The previous thick rubber hose connection to the backside was a source of outgassing and leaks.

5-28-2022 Ran 1st vacuum test to new system using only the Roughing Pump, new Pirani Gauge, and Heltec ESP32 uComp.

Starting Reading--9.71 Vdc Webpage display 4095

Ending Reading--5.25 Vdc Webpage display 2341

Interpolation--about 10 E-1 Torr, this is the lowest you can go with a mechanical pump, so we think it is a reasonable success!

4-28-2022 Added new Pirani Gauge to plumbing. We are using our standard platform Heltec ESP32 uComp to measure the Pirani output and display it on a Webpage.

<img src="/dms-source/files/mw/thumb_f_fb_Added_MFC_D2_Electrolyzer.jpg_300px-Added_MFC_D2_Electrolyzer.jpg" width="300" height="225" /> Added Deuterium Electrolyzer and Mass Flow Controller

3-13-2022 After much research, we followed the advice of Charles Proctor, using the Miller TIG Welder to braze 2 Tungsten Carbide Rings to a Tungsten TIG Rod to form our new electrode.

2-20-2022 Added Deuterium Electrolyzer and Mass Flow Controller

<img src="/dms-source/files/mw/thumb_d_de_Radiator_Fans_Pump.jpg_300px-Radiator_Fans_Pump.jpg" width="300" height="225" /> Added Radiator and Rough Pump with plumbing.

1-16-2022 Added Radiator and Roughing Pump with plumbing.

<img src="/dms-source/files/mw/thumb_7_70_6_port_chamber.jpg_300px-6_port_chamber.jpg" width="300" height="400" /> New Fusor2 chamber on new cart

1-03-2022 New Viewport installed in chamber.

12-30-2021 TIG welded Tungsten Rod onto Spark Plug using a simple guiding fixture. It was important to choose a Non-Resistor Plug to make welding possible.

12-20-2021 Russell Crow machining new Baffle Plate to attach Chamber to Diffusion Pump.

12-19-2021 New Fusor2; 6 port chamber on new cart after staining.

<img src="/dms-source/files/mw/thumb_f_f2_Machining_Baffle.jpg_300px-Machining_Baffle.jpg" width="300" height="400" /> Russell Crow machining Baffle Plate adapter between Chamber and Diffusion Pump <img src="/dms-source/files/mw/thumb_9_94_Plug_Welding_Fixture.jpg_300px-Plug_Welding_Fixture.jpg" width="300" height="400" /> TIG welding a Tungsten Rod onto a Spark Plug <img src="/dms-source/files/mw/thumb_9_93_Viewport.jpg_300px-Viewport.jpg" width="300" height="297" /> New Viewport installed

2-21-2021 HDPE Fast Neutron Moderator for He3 Thermal Neutron Detector--We obtained 6 blocks of High Density Polyethylene, measuring 12 x 6 x 1 inches for \$106.71 In the DallasMakerSpace Woodshop, we set a regular round wood 5/8 inch router bit, set the fence, and made 3 passes down the length of each of 2 of the HDPE blocks to form a domed channel for the He3 tube. We then used regular shrink wrap to bind the 1 inch slabs into a block. Voila, a neutron moderator! Special Thanks to @kobin Science Chair for acquiring the HDPE!!!

<img src="/dms-source/files/mw/thumb_a_af_He3_HDPE_routing.jpg_300px-He3_HDPE_routing.jpg" width="300" height="400" /> A Woodshop Router was used to cut the space for the He3 Neutron Detector tube. The hands in this "Michelangelo Moment" belong to @kobin and Yury.

We'll employ our ESP32 WiFi OLED data logger platform to web enable the detector, as we did with our Geiger Counter, Scintillator, Mass Flow Controller, and Peltier Gas Dryer. We plan to publish the Arduino IDE code for the ESP32 platform, and Java PC receiver when we have finished alpha testing.

<img src="/dms-source/files/mw/thumb_b_b7_He3_HDPE_block.jpg_300px-He3_HDPE_block.jpg" width="300" height="400" /> He3 Thermal Neutron Detector Tube is shown protruding from the High Density Polyethylene Block which will "moderate" fast neutrons into thermal neutrons, so they can be counted.

2-14-2021 Deuterium Gas Dryer--We are repurposing the Peltier dryer from a Heidelberg PrimeSetter 102 compressor dryer unit. We stacked Peltier elements to augment cooling to below -40'C in the brass chiller cube. There is a thermocouple to measure temp, and dual inline filters of 25um and 0.1um to insure that no foreign particle or ice crystals enter the reactor chamber. The Dryer will operate at 1 Barr of pressure. We use our ESP32 Wifi OLED instrumentation controller to drive MOSFETs in 12Volt PWM to chill the Peltier stack, and measure temperature from the thermocouple. The ESP32 will present a Webpage for access and control like our other dataloggers (Geiger Counter, Scintillator, He3 Detector Neutron Detector, and Mass Flow Controller)

<img src="/dms-source/files/mw/thumb_9_9d_Deuterium_Gas_Dryer.jpg_300px-Deuterium_Gas_Dryer.jpg" width="300" height="400" /> Deuterium Gas Dryer--PEM Electrolyzer (blue in back), Chiller Block (dark brass at top front) with thermocouple insert, Peltier Stack (behind Chiller Block), Heat Sink for Peltiers (black finned back top), Inline Filters (white 25um, green 0.1um) <img src="/dms-source/files/mw/thumb_d_d0_Fusor_grid_heatsink.jpg_300px-Fusor_grid_heatsink.jpg" width="300" height="300" /> Stainless screen cathode grid

11/21/2020 On the advice of Fusor.net posters, I constructed a 150 mesh stainless steel grid screen cylinder cathode. The idea is that when the plasma enters Star Mode, it creates an array of Ion Beams which can melt through the containment wall. The fine screen should block the Ions Beams, and the base will conduct heat from the screen into the reactor base.

<img src="/dms-source/files/mw/thumb_e_e7_MFC_BalanceTest.jpg_300px-MFC_BalanceTest.jpg" width="300" height="300" /> Fusor Pressure balancing test using MFC controlled over Web by ESP32_WiFiKit. Thanks to @JoshMelnick for MFC, and Yury for software enhancements, NICE WORK!

10/26/2020 Most of October, we have worked on instrumentation and control. Yury developed the software for ESP32-WiFiKit in Arduino IDE, to drive the Mass Flow Controller (thanks @JoshMelnick, your MFC runs like a dream) to balance Fusor chamber pressure with precision, THIS IS CRITICAL! Testing last night showed that we can set pressure from 5-100 microns, in increments of 1 micron, by remote through our Web Interface. NICE WORK, Yury!

Also, we are setting the Geiger Counter and Scintillator, to feed data to ESP32-WifiKit Counters w/ Timestamps, for logging our data runs, by remote through the Web.

<img src="/dms-source/files/mw/thumb_5_5a_PowerSupply_mods.jpg_300px-PowerSupply_mods.jpg" width="300" height="300" /> 40KV 34mA CO2 power supply

09/26/2020 Modified our 40KV 34mA CO2 Laser power supply to local operation with a simply potentiometer and knob through the case wall. We'll need some double insulated leads, and perhaps a bias change in the 3 flybacks which stack to make the High Voltage, since this requires -30KV, not +30KV. We will incorporate P/S control into the WiFi remote CPC Datalogger/Management after preliminary functional testing in this base config.

<img src="/dms-source/files/mw/thumb_4_4a_MFC_FEP.jpg_300px-MFC_FEP.jpg" width="300" height="300" /> Mass Flow Controller precision injector for Deuterium fuel to Fusor chamber <img src="/dms-source/files/mw/thumb_2_2e_Fusor_cathode_grid.jpg_300px-Fusor_cathode_grid.jpg" width="300" height="300" /> Stainless 150 mesh screen cathode

09/20/2020 We added the MFC to the experimental setup, and then tested vacuum. After the addition of a 1/8" OD tube, we added an adaptor connector 1/8 to 1/4 inch, then connected a Mass Flow Controller (MFC) using FEP synthetic line. Thanks to Science Chair Kobin for this brilliant solution to 2 problems; flexible connection and electrical isolation. The FEP allows for very tight vacuum seals, we tested back down to 5 microns!

07/05/2020 Dallas Maker Space is RE-OPENED, and the whole Fusion Team is ALIVE!

We checked our connections, vacuum equipment, configurations, and did a Vacuum Check to confirm nothing had broken in our absence. Achieved \<5 microns pressure, then fired the Plasma with appr. 8KV DC at 8mA. We video recorded a nice Hot White Plasma, which indicates that we are indeed down at the vacuum levels we need. We did not see a Star Mode form, but we haven't used Hydrogen for the Plasma yet. Stay Tuned...

03/10/2020 DataLogger MFC in progress to v-0.5 The DataLogger MFCs are based on ESP32 WiFi processors. They will transmit readings from the instruments (scintillator, Geiger counter, spectrophotometer, and voltmeters) to the main computer for analysis (nice work, Yury). Also, a DataLogger will manage the Mass Flow Controller for induction of gas into the Reactor Chamber, and the power unit for High Voltage control of the plasma.

<img src="/dms-source/files/mw/thumb_2_28_DMS_Fusor_MFC.jpg_150px-DMS_Fusor_MFC.jpg" width="150" height="267" /> Mass Flow Controller loaned for Deuterium injection Thanks Josh!

03/05/2020 Tore down vacuum chamber. Discarded old neoprene gaskets, new silicon gaskets available (thanks to Ben's handy water torch cutting). Removed chamber lockdown bolts and drilled holes for new. Ordered new polypropylene isolator rods for chamber (to prevent arcing to rods). Set Bayard Alpert gauge on shelf till needed. Inspected chamber wall, no signs of Ion Damage.

<img src="/dms-source/files/mw/thumb_1_19_Fusion_Reactor.jpg_300px-Fusion_Reactor.jpg" width="300" height="169" /> Vac pump in orange, HiV inverter in Blue, DC supplies for HiV in black, Meter for Piranni vacuum probe in gray & white <img src="/dms-source/files/mw/thumb_9_9b_DMS_Fusor_data_web.jpg_300px-DMS_Fusor_data_web.jpg" width="300" height="169" /> One of several data logger/controllers to manage Fusor code and designs by Yury and Russell 02/23/2020 Ran vacuum test with new Nishok needle valve assembly on vinyl tubing leader to vac chamber. Achieved \< 15 micron pressure. Then ran live plasma test in chamber using Blue Box 50kV source. Only able to achieve appr 5mA into plasma, several apparent shorts through grid at higher voltage, measure at 8kV with 2MOhm resistance. Plasma at \<4kV, with appr 5mA current. We need to alter the excitation mechanism dramatically/.<img src="/dms-source/files/mw/thumb_1_10_Bayard-Alpert_gauge.jpg_300px-Bayard-Alpert_gauge.jpg" width="300" height="169" /> Yury, with new Bayard-Alpert gauge

02/13/2020 Added new vacuum T-fitting and Bayard-Alpert Ion gauge tube to system. Tested vacuum down to approximately 5 microns using old Piranni gauge. Still need to get a proper connector for B-A Tube signal line to Varian Multi-Gauge instrument input. Here is Fusion Team member, Yury with the new set-up.

02/07/20 Fusor chamber has been tested to below 10 microns of pressure (1/76000th of an atmosphere)! We are down in the range where we can begin testing with Hydrogen, now.

Found leaks:

at 200 microns in main vacuum riser tube junction, sealed with 2 layers of JB Weld, inside and outside

at 25 microns in main vacuum valve, just reseated by closing and re-opening valve, then pressure dropped below 10 microns

01/27/20 We have successfully tested an Electrolyzer, for synthesizing Deuterium from heavy water. Before you get nervous about heavy water; 1/6700 molecules of water in most rivers and oceans (and you for that matter) is heavy. This means that if you have 13 liters of H2O in your body, you also have about 2cc of heavy water.

01/20/20 High Voltage power supply tested to 40,000 Vdc using our High Voltage Meter (great meter, Jerry). Special thanks to Rob Vikrus for modelling the high voltage multipliers mathematically, IT WORKS!

01/06/20 1/2 inch thick steel box completed for X-Ray shielding for the Fusor. At this thickness, the steel should provide adequate attenuation of X-Rays up to 120,000 Volts. Since we don't plan to go much above 40,000 Volts, this is a safety factor of 3:1, essentially.

12/18/20

We received appr. 90 mL of 99% pure Deuterium Oxide from Sigma Aldrich, U.K. The heavy water was marked "Fusor Use Only", added to Science's chemical inventory list, and locked in the chemical cabinet.
