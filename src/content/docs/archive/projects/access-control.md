---
title: "Access Control"
description: "Andrew LeCody is currently working on ThrICE Access Control: https://github.com/Dallas-Makerspace/ThrICE-Access-Control"
sourceUrl: "https://dallasmakerspace.org/wiki/Access_Control"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Access_Control\">legacy DMS wiki</a> — content may be outdated."
---
## Design Goals

- Provide RFID+PIN access control at both external doors.
- Provide RFID access control at both internal doors leading to the warehouse.
- Send e-mail alerts whenever the security of the space or access control system may have been compromised.

## Secondary Design Goals

- Interface with the Building Control System to turn on all the lights in the event of an emergency or security breach.

## Design: ThrICE

Andrew LeCody is currently working on ThrICE Access Control: <https://github.com/Dallas-Makerspace/ThrICE-Access-Control>

## Threshold Control Device (TCD)

<img src="/dms-source/files/mw/thumb_f_fe_TCD_board.png_300px-TCD_board.png" width="300" height="345" /> TCD board design <img src="/dms-source/files/mw/thumb_f_fb_TCD_schematic.png_300px-TCD_schematic.png" width="300" height="224" /> TCD schematic

The TCD will consist of an RFID reader and keypad, connected to an atmega328 that sends the output from the two devices to our Master Control Arduino (MCS). The MCS will then determine what course of action should be taken. The TCD will also accept commands from the MCS to activate the LEDs and/or buzzer. For security the TCD handles no authentication logic. Pins 0 an 1 will be used for the serial connection to the MCS, while pins 2 and 3 will be used for software serial connections to the RFID readers.

### Command List

TBD

### Pinout

|                |                  |                  |
|----------------|------------------|------------------|
| Atmega328 Pins | Arduino Pins     | Use              |
| PC0/ADC0       | Analog 0         | Keypad 6         |
| PC1/ADC1       | Analog 1         | Keypad 7         |
| PC2/ADC2       | Analog 2         | A2               |
| PC3/ADC3       | Analog 3         | A3               |
| PC4/ADC4/SDA   | Analog 4         | A4               |
| PC5/ADC5/SCL   | Analog 5         | A5               |
| PD0/RXD        | Digital 0 (RX)   | RX               |
| PD1/TXD        | Digital 1 (TX)   | TX               |
| PD2/INT0       | Digital 2        | RFID1            |
| PD3/INT1       | Digital 3 (PWM)  | RFID2            |
| PD4/XCK/T0     | Digital 4        | RFID-Enable      |
| PD5/T1         | Digital 5 (PWM)  | Status LED Red   |
| PD6/AIN0       | Digital 6 (PWM)  | Status LED Green |
| PD7/AIN1       | Digital 7        | Keypad 2         |
| PB0/ICP        | Digital 8        | Keypad 1         |
| PB1/OC1A       | Digital 9 (PWM)  | Keypad 3         |
| PB2/OC1B       | Digital 10 (PWM) | Status LED Blue  |
| PB3/MOSI/OC2   | Digital 11 (PWM) | Buzzer           |
| PB4/MISO       | Digital 12       | Keypad 4         |
| PB5/SCK        | Digital 13       | Keypad 5         |

### Parts

[Full BOM](https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=0ApsEaOwu-NK3dERLRnlKd0Q3SGx0cVpwWUhuajBsT1E&output=html) on Google Docs.

- PCB
- Atmega328
- 28pin DIP socket
- 16Mhz crystal
- MAX3082
- 2N3904
- 2x 22pF capacitors
- 3x 100nF capacitors
- 4.7kOhm resistor
- 2x 1kOhm resistors
- 3 330 Ohm resistors
- Piezo Buzzer
- RJ45/8P8C connector
- Various headers
- [RFID Reader ID-12 (125 kHz)](http://www.sparkfun.com/products/8419) with ThrICE ID-12 Breakout or [Parallax RFID Card Reader Serial](http://www.parallax.com/tabid/768/ProductID/114/Default.aspx)
- Enclosure

## Interconnect Between TCD and MCS

All communication is via RS485 over a Cat5/5e/6 cable, with 8P8C (RJ-45) connectors:

1.  RS485-A / TX
2.  RS485-B / RX
3.  VCC (5v)
4.  Ground
5.  Ground
6.  Ground
7.  Ground
8.  12v strike (controlled by relay on MCS, most door strikes are Normally Open (NO), however magnetic strikes are almost always Normally Closed(NC))

## Master Control System/Shield (MCS)

The MCS will handle all business logic for this system. When the MCS receives authentication data (RFID/PIN) from a TCD it will verify the information against an access control list, stored on an SD card. The MCS will communicate and accept commands over TCP/IP on our internal security network. Eventually encryption/authentication will be added to prevent unauthorized changes in the event our security network is compromised.

### Commands

- TODO

### Parts

- Arduino Mega2560
- Ethernet shield (latest one, with SD card slot)
- 12v lead-acid battery
- 12v power supply
- Custom PCB shield
  - 5v power reg
  - 4x 8P8C (RJ-45) jacks for connection to TCDs
  - 4x relays to control 12v door strike
    - Jumper to determine if NO or NC
  - Charge control system for 12v battery
  - Voltage monitoring for battery/main power input so we can alert when battery in use and/or low. TODO: Add software option to release power to certain doors (e.g. NC maglock doors) to save power when the battery is in use.
  - Real Time Clock (RTC)
  - ICSP header, must be in the exact same spot so that the Ethernet shield will work
- Optional custom PCB shield
  - Screw terminals or 6P4C (RJ-11) jacks for various sensors.
- Enclosure (probably metal, keyed access)

## Communications Protocol

TODO

## Sensors and Tamper Detection

<img src="/dms-source/files/mw/thumb_7_70_Secure_Analog_Sensor.png_256px-Secure_Analog_Sensor.png" width="256" height="128" /> Example circuit of an analog sensor that can detect tampering/cutting.

In order to make our sensor more robust, we used a particular circuit layout for the sensors (when possible). The primary example is the door sensor, which can not only detect when the door is open or closed, but due to the addition of two resistors, can actually detect if the circuit as been cut or shorted.

The sensor itself is a simple [reed switch](http://en.wikipedia.org/wiki/Reed_switch) in one half and a magnet in the other. When the door is closed, the magnet is close enough to the switch to cause it to close, completing the circuit. When the door is opened, the magnet is moved away from the switch causing it to open. In this basic configuration we can only detect an open or closed state. If someone were to cut the wire it would appear that the door was always open, and if they shorted the wire it would appear to be closed.

To overcome this limitation we can place a resistor in parallel with the sensor and another in series. The basic layout of our circuit involves a 4.7kOhm pull-up resistor connected to 5 volts, a 1kOhm resistor to protect our Arduino and then our two 4.7kOhm resistors near the sensor.

Now our circuit can have four possible states:

|  |  |  |  |
|----|----|----|----|
| Resistance | Analog Reading | Status | Why |
| 0 | 0 | Wire shorted! | When the circuit is shorted there will be almost no resistance, as the switch and resistors have been bypassed. |
| 4.7kOhm | ~510 | Door closed | The switch is closed, which completes the circuit, bypassing the resistor wired in parallel but still going through the resistor wired in series. |
| 9.4kOhm | ~680 | Door open | The switch is open, so the current travels through our resistor that's wired in parallel, and the one in series. |
| Infinite | 1023 | Wire cut! | The circuit has been broken, so no current can travel through it. |

I recommend reading [Practical Arduino Chapter 6](http://www.practicalarduino.com/projects/security-sensors) for more information on security sensors.

### Examples

- <img src="/dms-source/files/mw/thumb_d_dd_Secure_Analog_Sensor_On_A_Breadboard.jpg_120px-Secure_Analog_Sensor_On_A_Breadboard.jpg" width="120" height="90" />

  Breadboard test of a secure analog sensor.

- <img src="/dms-source/files/mw/thumb_9_9e_Secure_Analog_Sensor_Closeup.jpg_120px-Secure_Analog_Sensor_Closeup.jpg" width="120" height="90" />

  Closeup of the sensor.

- <img src="/dms-source/files/mw/thumb_7_70_Secure_Analog_Sensor.png_120px-Secure_Analog_Sensor.png" width="120" height="60" />

  Example circuit.

## TODO

- Schematic and board layout for TCD
  - Status: Mostly done
  - May want to add transistor to turn RFID reader on/off for power saving
- Schematic and board layout for MCS
  - Status: Barely started, debating on using Arduino Mega2560 and making a shield (easier) or using an atmega2560 to make my own "Arduino Mega2560" with everything on one board (cheaper).
- Firmware for TCD
- Firmware for MCS
- Server-side software to communicate with MCS

## Option 2: Open-Access-Control

<http://code.google.com/p/open-access-control/>
