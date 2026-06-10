---
title: "Building a Thermoelectric Diffusion Cloud Chamber"
description: "I am proposing the design and construction of a thermoelectric diffusion cloud chamber to observe and visualize particle interactions. This project will le..."
sourceUrl: "https://source.dallasmakerspace.org/display/SCIENCE/Building+a+Thermoelectric+Diffusion+Cloud+Chamber"
lastUpdated: 2024-12-29
---
<table>
<tbody>
<tr>
<td colspan="10" data-highlight-colour="blue"><h2 id="BuildingaThermoelectricDiffusionCloudChamber-1.Overview">1. Overview</h2>
<p>I am proposing the design and construction of a thermoelectric diffusion cloud chamber to observe and visualize particle interactions. This project will leverage Peltier thermoelectric coolers (TECs) and a Corsair water-cooling circuit for thermal regulation. The cloud chamber will be optimized for performance, reliability, and clear visibility of particle trails. I need help from the community to refine the design, optimize insulation, integrate electronics, and troubleshoot any technical challenges along the way.</p>
<p><br />
</p>
<p><br />
</p></td>
</tr>
<tr>
<td colspan="2" rowspan="2"><h2 id="BuildingaThermoelectricDiffusionCloudChamber-2.ThermalRegulation">2. Thermal Regulation</h2>
<ul>
<li><p>Utilize Peltier TECs (ordered from Laird, Germany) for cooling.</p></li>
<li><p>Corsair water-cooling circuit to dissipate excess heat and stabilize temperatures.</p></li>
</ul>
<p><em>"Chilly plate thing"</em></p>
<p><img src="https://mm.digikey.com/Volume0/opasdata/d220001/derivates/6/003/120/609/MFG_387005670_web%28640x640%29.jpg" draggable="false" width="320" alt="387005670" /> </p></td>
<td colspan="2"><h2 id="BuildingaThermoelectricDiffusionCloudChamber-7.ElectrostaticChargedPlating">7. Electrostatic Charged Plating</h2>
<p>Incorporate a metal plate inside the chamber to charge the air and enhance the visibility of ionization trails.</p>
<p><em>"Shockey plate thing"</em></p>
<p><br />
</p></td>
<td rowspan="2"><h2 id="BuildingaThermoelectricDiffusionCloudChamber-6.ImagingSystem">6. Imaging System</h2>
<p>Integrate three high-resolution cameras positioned at the top, side, and front of the chamber for comprehensive recording and observation.</p>
<p><em>"So we don't miss a thing"</em></p>
<p><img src="/dms-source/files/embedded/SCIENCE/building-a-thermoelectric-diffusion-cloud-chamber/image-2024-12-28_19-37-19.png" draggable="false" width="420" /> </p></td>
<td colspan="3"><h2 id="BuildingaThermoelectricDiffusionCloudChamber-4.PSUSetup">4. PSU Setup</h2>
<ul>
<li><p>A single high-efficiency PSU for primary operation.</p></li>
<li><p>A small auxiliary PSU dedicated to high-voltage components during initial testing.</p></li>
</ul>
<p><em>"This should be ideal."</em></p>
<p><br />
</p></td>
<td colspan="2" rowspan="2"><h2 id="BuildingaThermoelectricDiffusionCloudChamber-3.InsulationandTransparency">3. Insulation and Transparency</h2>
<ul>
<li><p>Build a chassis that provides effective thermal insulation.</p></li>
<li><p>Design with minimal obstructions to preserve clear views of particle trails.</p></li>
</ul>
<p><em>"It's basically a fancy box bro"</em></p>
<p><img src="https://img.uline.com/is/image/uline/S-10578?$Mobile_SI$" draggable="false" width="500" /> </p></td>
</tr>
<tr>
<td colspan="2"><h2 id="BuildingaThermoelectricDiffusionCloudChamber-8.AtmosphericOptimization">8. Atmospheric Optimization</h2>
<ul>
<li><p>Investigate rarefaction techniques to accelerate startup times and achieve supersaturation faster.</p></li>
<li><p>Current design relies on isopropyl alcohol, but glycol may be considered for testing purposes.</p></li>
</ul>
<p><em> "Let's get some HVAC up in this bitch"</em></p>
<p><br />
</p></td>
<td colspan="3"><h2 id="BuildingaThermoelectricDiffusionCloudChamber-5.HVPSUSetup">5. HV PSU Setup</h2>
<ul>
<li>We can improvise this in a way that protects our main PSU during the prototype phase, then implement it into that circuitry hopefully...</li>
</ul>
<p><em>"Emphasis on the hopefully."</em></p>
<p><br />
</p></td>
</tr>
<tr>
<td colspan="5"><h2 id="BuildingaThermoelectricDiffusionCloudChamber-10.CurrentStatus">10. Current Status</h2>
<ul>
<li><p>We have already ordered Peltier coolers from Laird in Germany, which are currently in transit.</p></li>
<li><p>We aim to assemble parts and start testing thermal gradients by the first Sunday of 2025 <u><strong>if we can find some spare TECs</strong>.</u></p></li>
<li><p>Spare TECs for prototyping are welcome while we wait for our primary components to arrive.</p></li>
</ul>
<p><em>"For our status in the streets, check the hood"</em></p>
<p><br />
</p></td>
<td colspan="5"><h2 id="BuildingaThermoelectricDiffusionCloudChamber-9.WhatMSDHomiesCanDo">9. What MSD Homies Can Do</h2>
<ol>
<li><p>Optimizing chamber insulation and rarefaction techniques.</p></li>
<li><p>Designing and fabricating the chamber’s frame and layout.</p></li>
<li><p>Configuring the power and high-voltage circuits safely.</p></li>
<li><p>Assisting with camera mounting and software integration for imaging.</p></li>
<li><p>Sharing spare TECs or components for early testing and experimentation.</p></li>
</ol>
<p><em>"May all who are bored and like science unite."</em></p>
<p><br />
</p></td>
</tr>
</tbody>
</table>



Parts List:

<https://www.digikey.com/en/products/detail/laird-thermal-systems-inc/387005670/14113442?s=N4IgTCBcDaKHAEBmAHAdgAxoKwDZ1xALoC%2BQA>

<https://www.corsair.com/us/en/p/custom-liquid-cooling/cx-9030006-ww/hydro-x-series-xr7-480mm-water-cooling-radiator-cx-9030006-ww?srsltid=AfmBOorh17JEgMzfXXGim_l_p8aafsHXl3jQrJ2zU7hnDd-GFHOpeZQe>

<https://www.corsair.com/us/en/p/custom-liquid-cooling/cx-9040005-ww/hydro-x-series-xd7-rgb-pump-reservoir-combo-aca-a-black-cx-9040005-ww>

<https://www.amazon.com/dp/B07FD26B92?ref=ppx_yo2ov_dt_b_fed_asin_title>

<https://www.amazon.com/Corsair-RM1000e-Modular-Low-Noise-Supply/dp/B0DD5RWTYY?crid=2S65OFLYOEP7X&dib=eyJ2IjoiMSJ9.vwlTxYF0RuraqhDz1j0HAB-iVFHPaAsp3HovnlncMZs7uPPPEhRvYDgMSPSPh7PLEf_00XbwhDTSr4UjVnlKKxuL-G3wJnoo7TDtHtFk_DeBKwugXrR4GMoXkE5c7DAQoIiWy4cycX7ae3MA8hTyZPg9B9iUt3AVLDrhDCy_G0tEbIwOUu1IzsLMcJfvSw5It4g9SmPO0JA0FNQFHbDonolsV_HNHxYyMBwrahoa8i3xXf0mZMgK9eroFHF0KygdbKaglW-3YlbT1EYGyFcZmwk57NGoS00Ig_YZJvQD2Jsd7wbBAUHS8hmBV0lipy0XSffkdeoe_zHmYN-sfFmCgy-pO0CR-IeWTDMwcF6VJp8.0_OPfAlFeIa5M6XALsAt7s7_1NwrW6vySYEUj0xUI8g&dib_tag=se&keywords=corsair+atx+1000ee&qid=1735435532&s=electronics&sprefix=corsair+atx+1000ee%2Celectronics%2C111&sr=1-1>
