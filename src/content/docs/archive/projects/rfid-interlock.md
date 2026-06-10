---
title: "RFID Interlock"
description: "Development for BeagleBoneBlack has began. The Arduino was much to finicky with higher level functionality. Also, for some reason DHCP quit working after a..."
sourceUrl: "https://dallasmakerspace.org/wiki/RFID_Interlock"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/RFID_Interlock\">legacy DMS wiki</a> — content may be outdated."
---
## Members

- Add your names here
- Andrew LeCody
- Gus Reiter
- Lampy Ken Purcell
- Michael Lass
- Mikel Duke
- Nick Sainz

[RFID Storage Cabinet](/dms-source/archive/projects/rfid-storage-cabinet/)

## Goals

- Provide power to an outlet once an authorized RFID tag is scanned.
- Will connect over HTTP(s) to a web service to query if a particular RFID tag is valid/authorized.
- After a configurable amount of time, a warning light/sound will go of to indicate that the tool will be shutoff. Users should be able to rescan to push back the timeout or off, to completely turn off power to the device ahead of the timeout.
- Detect if the attached device is in use and start timer once it is turned off to avoid interruptions
- Eat pizza

### For Version 1

#### Hardware

- RFID Reader
- BIG Red Button w/ led
- Current Sensor
- Relay
- AC Outlet
- Enclosure w/ screw and lock-ability
- Power Supply, 5v or 9v for relay
- Network Cable
- Arduino with network or Beagle Bone

#### Software

- Time Used
- Machine ID & User RFID
- Certified Table
- Trainer Table
- User Table
- Marker on Website
- What machine is in use
- Maintenance Mode – machine unavailable

### For Version 2

- Clock display
- WiFi
- Remote deactivation
- Keypad for laser to do job estimate

## Status

### Update 11/23/2013

Development for BeagleBoneBlack has began. The Arduino was much to finicky with higher level functionality. Also, for some reason DHCP quit working after a few hours of testing and no code changes. There is example code below for Python, and the start of a Java app on Github.

After some research, there are various models of cheap (\<\$20) RFID USB readers available. These interface with the host as a keyboard which makes coding for BBB/RPi much simpler, but would be very difficult to do on Arduino. They also have the big advantage of coming as a packaged product, with a plastic housing and usb port installed instead of a bare pcb. The Parallax readers used in the Hackathon run about \$45+, are bare pcb, and work over 5v Serial connection. This looks to be the cheaper and easier way to go.

### Hackathon 11/09/2013

[Prototype Demo Video](http://www.youtube.com/watch?v=_4yQKg9zY50)

#### Achievements

- Created working prototype using an Arduino Ethernet.
- Successfully scanned an RFID tag, queried the server over ethernet, and retrieved authorization status and time.
- Enabled the use of a fan
- Successfully detected fan operational status using the current detecting circuit
- Started countdown timer was the fan was off, and successfully turned off the power
- Ate pizza

#### Todo

- Improve reading RFID tags, get ghost reads due to RF interference
- Improve code stability, Arduino seems to have issues processing large strings, possibly change to char arrays
- Create housing for reader and controller

## Parts

### Version 1

- 125KHz RFID Tags
- Parallax Serial RFID Reader
- Arduino Ethernet
- 110V Relay
- 2n2222 Transistors
- Leds
- Current Sensor

### LCD

|                                     |                       |
|-------------------------------------|-----------------------|
| lcd command                         | i2c command           |
| color                               | i2cset -y 1 0x38 1 xx |
| clear                               | i2cset -y 1 0x38 2 1  |
| cursor off                          | i2cset -y 1 0x38 2 12 |
| cursor flashing block               | i2cset -y 1 0x38 2 13 |
| cursor underline                    | i2cset -y 1 0x38 2 14 |
| cursor flashing block and underline | i2cset -y 1 0x38 2 15 |
| clear                               | i2cset -y 1 0x38 2 1  |
| character                           | i2cset -y 1 0x38 3 1  |
| no more character                   | i2cset -y 1 0x38 3 13 |

## Beaglebone black

pinout where the yellow legend on the pins show overlaps with virutal capes can be found here: ![Black_eMMC_and_HDMI_pins.PNG](http://elinux.org/images/8/8c/Black_eMMC_and_HDMI_pins.PNG)

### ADC for current monitoring

This is a low impedence sensor, so if using a voltage divider, the divider resisters need to add up to about 900 ohm.

- P9_32, VDD_ADC, provides 1.8 volts
- P9_33, AIN4 \<--- ok to use
- P9_35, AIN6 \<--- ok to use
- P9_36, AIN5 \<--- ok to use
- P9_37, AIN2 \<--- weird
- P9_38, AIN3 \<--- weird
- P9_39, AIN0 \<--- ok to use
- P9_40, AIN1 \<--- ok to use

### GPIO available for controlling LEDs and the tool

- P9_11, GPIO_30
- P9_12, GPIO_60
- P9_13, GPIO_31
- P9_14, GPIO_40
- P9_15, GPIO_48
- P9_16, GPIO_51
- P9_17, GPIO_4
- P9_18, GPIO_5

<!-- -->

- P9_21, GPIO_3
- P9_22, GPIO_2
- P9_23, GPIO_49
- P9_24, GPIO_15
- P9_25, GPIO_117
- P9_26, GPIO_14
- P9_27, GPIO_125

<!-- -->

- P9_30, GPIO_122
- P9_41, GPIO_20
- P9_42, GPIO_7

<!-- -->

- P8_7, GPIO_66
- P8_8, GPIO_67
- P8_9, GPIO_69
- P8_10, GPIO_68
- P8_11, GPIO_45
- P8_12, GPIO_44
- P8_13, GPIO_23
- P8_14, GPIO_26
- P8_15, GPIO_47
- P8_16, GPIO_46
- P8_17, GPIO_27
- P8_18, GPIO_65
- P8_19, GPIO_22

There are more available if we disable either the HDMI or eMMC capes.

#### PWM

- <http://learn.adafruit.com/setting-up-io-python-library-on-beaglebone-black/pwm>
- <http://beagleboard.org/support/BoneScript/analogWrite/> for pins

## Designs

File:Interlock Flow Chart.pdf

## Wish list

nxt i2c buffer

- <http://www.nxp.com/documents/leaflet/75016081.pdf>
- <http://www.nxp.com/products/interface_and_connectivity/i2c/i2c_bus_repeaters_hubs_extenders/>

## Software

### Git Repositories

[Arduino Ethernet Code](https://github.com/Dallas-Makerspace/RFID-Interlock/tree/master/arduino)

[Java BeagleBoneBlack Code](https://github.com/Dallas-Makerspace/RFID-Interlock/tree/master/java)

### Python Beaglebone Black Code

[Python Beaglebone Black Code](https://gitorious.org/mother/rfid_interlock/)

#### Required Python Library

consider using <http://www.pingo.io/docs/> so that we are not device dependant

##### Ångström distribution

    opkg install python-pip python-setuptools python-smbus
    pip install Adafruit_BBIO
    pip install pyserial
    pip install evdev

    mkdir notsmb_1_3
    cd notsmb_1_3
    wget http://www.byvac.com/downloads/sws/notsmb_1_3.zip
    unzip notsmb_1_3.zip
    sudo python setup.py install

###### static ip

    http://derekmolloy.ie/set-ip-address-to-be-static-on-the-beaglebone-black/

##### Debian

    apt-get install python-smbus
    pip install evdev

###### disable HDMI

from <http://www.logicsupply.com/blog/2013/07/18/disabling-the-beaglebone-black-hdmi-cape/>

- df
- see /boot/uboot, cd to there.
- edit uEnv.txt
- find where it comments about HDMI

#### Configuration

in /etc/mother.ini

This is a JSON formatted file where the top level as a few things specific to the rfid interlock system followed by various connections.

##### Top Level

|  |  |  |
|----|----|----|
| field | datatype | function |
| "tool_id" | string | the id used to validate the rfid card with makermanager |
| "description" | string | The description of the tool |
| "timeout" | int / float | how long to let the machine idle before automatically logging out |
| "warning" | int / float | how many seconds of warning before automatically logging out will we give the user |
| connection | dictionary | how the connection is used in the rfid interlock. |

Top level

- which connection to define, various. Such as AIN\[0-9\], P8_23, unix device name for a serial connection, stdin, stdout. The dictionary found with

###### Logging

Note that `"logging": {"root": { "level": "DEBUG" }}` should be at least `ERROR`, otherwise errors in the config file will go unnoticed by the system. The way to think about the python logging system is that at the top level you accept the most detailed messages that you could possibly want on the lower levels, then on the lower levels you lock the verbosity down. Note that a custom logging handler is used internally, and it notices ERROR messages, especially from the class constructors to know whether or not we have a properly configured system. If not, it will try to notify by putting all outputs into "error" mode and not accept badge swipes.

Lookup:

    https://docs.python.org/3/howto/logging-cookbook.html
    https://docs.python.org/3/library/logging.config.html#logging.config.dictConfig

Example

     "logging": {
        "version": 1,
        "formatters": {
            "detailed": {
                "class": "logging.Formatter",
                "format": "%(asctime)s %(name)-15s %(levelname)-8s %(message)s"
            }
        },
        "handlers": {
            "console": {
                "class": "logging.StreamHandler",
                "level": "CRITICAL"
                "formatter": "detailed",
            },
            "var_log": {
                "class": "logging.FileHandler",
                "filename": "/var/log/mother.log",
                "mode": "a",
                "level": "INFO",
                "formatter": "detailed"
            }
        },
        "root": {
            "level": "DEBUG",
            "handlers": ["console", "var_log"]
        },
        "loggers": {
            "digital_output":               { "level": "ERROR", "handlers": [ "var_log" ] },
            "digital_monitor":              { "level": "ERROR", "handlers": [ "var_log" ] },
            "input_event_rfid_reader":      { "level": "ERROR", "handlers": [ "var_log" ] },
            "interlock":                    { "level": "ERROR", "handlers": [ "var_log" ] },
            "keyboard_rfid_reader":         { "level": "ERROR", "handlers": [ "var_log" ] },
            "rfid_reader":                  { "level": "ERROR", "handlers": [ "var_log" ] },
            "serial_rfid_reader":           { "level": "ERROR", "handlers": [ "var_log" ] },
            "stdio_output":                 { "level": "ERROR", "handlers": [ "var_log" ] },
        }
    },

##### RFID Reader Connection

<table>
<tbody>
<tr>
<th>Dictionary</th>
<th>Value</th>
<th>Description</th>
</tr>
<tr>
<th colspan="3">common required settings</th>
</tr>
&#10;<tr>
<td>"comment"</td>
<td>string</td>
<td>human readable description</td>
</tr>
<tr>
<td>"mode"</td>
<td>"rfid_reader"</td>
<td>how many characters to skip before we start paying attention to the code</td>
</tr>
<tr>
<td>"code_skip_chars"</td>
<td>integer</td>
<td>how many characters to skip before we start paying attention to the code</td>
</tr>
<tr>
<td>"code_len"</td>
<td>integer</td>
<td>how many characters to pay attention to</td>
</tr>
<tr>
<td>"code_base"</td>
<td>integer</td>
<td>10 if base ten, 16 if the code read is hexadecimal</td>
</tr>
<tr>
<td>Serial</td>
<td colspan="2">the connection is a device in /dev/ that will respond nicely to .readline() function once read</td>
</tr>
<tr>
<td>"type"</td>
<td colspan="2">"serial"</td>
</tr>
<tr>
<td>"baud"</td>
<td>integer</td>
<td>the baud rate</td>
</tr>
<tr>
<td>input event</td>
<td colspan="2">a device in /dev/input/event[0-9]</td>
</tr>
<tr>
<td>"type"</td>
<td colspan="2">"input_event"</td>
</tr>
<tr>
<td colspan="3">keyboard input</td>
</tr>
<tr>
<td>"type"</td>
<td>"stdin"</td>
<td>input from keyboard</td>
</tr>
</tbody>
</table>

###### examples

    "/dev/ttyUSB0": {
        "mode": "rfid_reader",
        "type": "serial",
        "baud": 2400,
        "code_skip_chars": 2,
        "code_len": 10,
        "code_base": 16
    }

    "/dev/input/event1": {
        "mode": "rfid_reader",
        "type": "input_event",
        "code_skip_chars": 0,
        "code_len": 10,
        "code_base": 10
    }

##### Output Connection

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<tbody>
<tr>
<th>Dictionary</th>
<th>Value</th>
<th>Description</th>
</tr>
<tr>
<th colspan="3">common required settings</th>
</tr>
&#10;<tr>
<td>"comment"</td>
<td>string</td>
<td>human readable description</td>
</tr>
<tr>
<td>"mode"</td>
<td>"output"</td>
<td>what this connection does to reflect the state of the machine</td>
</tr>
<tr>
<td>"active"</td>
<td rowspan="4">see below<br />
in digital<br />
output options</td>
<td>consider this to be "green light" state</td>
</tr>
<tr>
<td>"inactive_soon"</td>
<td>consider this to be "yellow light" state</td>
</tr>
<tr>
<td>"inactive"</td>
<td>consider this to be "red light" state</td>
</tr>
<tr>
<td>"error"</td>
<td>something is wrong, seriously wrong</td>
</tr>
<tr>
<td>Digital</td>
<td colspan="2">the connection is a pin that an LED or power control is connected to</td>
</tr>
<tr>
<td>"type"</td>
<td>"digitial"</td>
<td>controls a digital output pin to reflect the state of the machine</td>
</tr>
<tr>
<td rowspan="2">"On"</td>
<td>"HIGH"</td>
<td>when the signal is high, that signifies that the device attached it on</td>
</tr>
<tr>
<td>"LOW"</td>
<td>when the signal is low, that signifies that the device attached it on. Inverted logic if you will.</td>
</tr>
<tr>
<td>stdio</td>
<td colspan="2">prints to the console that starts the rfid_interlock.py</td>
</tr>
<tr>
<td>"type"</td>
<td>"stdio"</td>
<td>prints to the console that starts the rfid_interlock.py</td>
</tr>
</tbody>
</table>

###### Digital Output Options

|  |  |
|----|----|
| Value | Description |
| "ON" | turn it on, dependent on the "on" field of the connection |
| "OFF" | turn it off, dependent on the "on" field of the connection |
| "BLINK" | turn it high, then low, then high. Defaults to half a second per high or low. |
| "SOS" | ... - - - ... |
| Modifier | You can associate a modifier to the ON, OFF and BLINK digital output option. When used on BLINK, this will override the blink speed. When used with ON or OFF, it will switch to the other state after the specified number of seconds. |
| "output" | if you turn a output option into a dictionary, you will need to add this "output" field to the dictionary and put the output option in for its value. |
| "seconds" | integer / float |

###### examples

    "P8_11": {
       "comment": "Active LED",
       "type": "digital",
       "mode": "output",
       "on": "HIGH",
       "error": "SOS",
       "active": {"output": "ON", "seconds": 1},
       "inactive_soon": "OFF",
       "inactive": "OFF"
    }

    "P8_11": {
       "comment": "Warning LED",
       "type": "digital",
       "mode": "output",
       "on": "HIGH",
       "error": "SOS",
       "active": "OFF",
       "inactive_soon": "ON",
       "inactive": "OFF"
    }

##### Monitor Connection

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<tbody>
<tr>
<th>Dictionary</th>
<th>Value</th>
<th>Description</th>
</tr>
<tr>
<th colspan="3">common required settings</th>
</tr>
&#10;<tr>
<td>"comment"</td>
<td>string</td>
<td>human readable description</td>
</tr>
<tr>
<td>"mode"</td>
<td>"monitor"</td>
<td>values on this connection affect the state</td>
</tr>
<tr>
<td>"active"</td>
<td rowspan="5">condition</td>
<td>Switch the state to active and start the countdown to deactivate and countdown to warning timers.</td>
</tr>
<tr>
<td>"inactive_soon"</td>
<td>if we are not already in inactive_soon mode, then we switch the state to inactive_soon and set the deactivate timer to count down the seconds of warning</td>
</tr>
<tr>
<td>"inactive"</td>
<td>switch the state to inactive and clear the timers</td>
</tr>
<tr>
<td>"error"</td>
<td>we switch the state to error and clear the timers</td>
</tr>
<tr>
<td>"reset_timer"</td>
<td>we reset the countdown timer and set the state to active whenever this happens</td>
</tr>
<tr>
<td colspan="3">digital settings</td>
</tr>
<tr>
<td>"type"</td>
<td>"digital"</td>
<td>we respond to voltage her going high or low</td>
</tr>
<tr>
<td rowspan="2">new state</td>
<td>"FALLING"</td>
<td>trigger when the signal goes low</td>
</tr>
<tr>
<td>"RISING"</td>
<td>trigger when the signal goes high</td>
</tr>
<tr>
<td colspan="3">analog to digital settings</td>
</tr>
<tr>
<td>"type"</td>
<td>"adc"</td>
<td>we respond to voltage her going high or low</td>
</tr>
<tr>
<td rowspan="3">new state</td>
<td>{ "higher": float }</td>
<td>triggers whenever the adc value is higher than the value</td>
</tr>
<tr>
<td>{ "lower": float }</td>
<td>triggers whenever the adc value is lower than the value</td>
</tr>
<tr>
<td>{ "higher": float, "lower": float }</td>
<td>if the higher value is higher than the lower value, then the higher and lower values then either can trigger a new state.<br />
If the higher value is lower than the lower value, then the higher and lower values must both evaluate to true to trigger the new state.</td>
</tr>
</tbody>
</table>

###### examples

    "AIN1": {
        "mode": "monitor",
        "type": "adc",
        "countdown_reset": {
            "higher": 0.209222216129
        }
    },

    "P9_14": {
       "comment": "PIR Sensor",
       "mode": "monitor",
       "type": "digital",
       "reset_timer": "FALLING"
    },

    "P9_12": {
       "comment": "logout button",
       "mode": "monitor",
       "type": "digital",
       "inactive": "FALLING"
    },

#### Example

    {
        "tool_id": "1",
        "tool_desc": "Table Saw",
        "timeout": 60,

        "AIN1": {
            "description": "read in the amperage",
            "revision_log": [
                "modified by Lance on ..",
                "LALALAL"
            ],
            "mode": "monitor",

            "timer_reset": {
                "lower": 0.209222216129,
                "higher: 0.809222216129
            },

            "higher_power_value": 0.402222216129,
            "idle_power_value":   0.01666671038
        },
        "AIN2": {
            "description": "Temperature monitor",
            "mode": "monitor",

            "soft_stop": {
                "higher": 0.809222216129,
                "lower": 0.909222216129
            },
            "hard_stop": {
                "higher": 0.909222216129
            },
        },
        "AIN3": {
            "mode": "monitor",
            "timer_reset": {
                "higher": 0.209222216129
            },
            "higher_power_value": 0.402222216129,
            "idle_power_value":   0.01666671038
        },
        "P8_4": {
            "mode": "monitor",
            "hard_stop": "RISING",
        },
        "P8_6": {
            "mode": "monitor",
            "RISING": "soft_stop"
        },
        "P8_32": {
            "mode": "monitor",
            "time_reset": "RISING"
        },
        "/dev/ttyO1": {
            "mode": "monitor",
            "baud_rate": "9600",
            "timer_reset": "resetme"
        },
        "/dev/ttyO2": {
            "mode": "monitor",
            "baud_rate": "9600",
            "init": "send me data !",
            "timer_reset": "1"
        },
        "P9_23": {
            "description": "Active LED",
            "mode": "output",
            "active": "HIGH",
            "inactive_soon": "LOW",
            "inactive": "LOW"
        },
        "PWM1A": {
            "description": "Pulsing inactive soon LED",
            "mode": "output",
            "active": 0,
            "inactive_soon": "PULSE",
            "inactive": 0
        },
        "P9_25": {
            "description": "blinking inactive soon LED",
            "mode": "output",
            "active": "LOW",
            "inactive_soon": "BLINK",
            "inactive": "LOW"
        },
        "P9_27": {
            "description": "Inactive LED",
            "mode": "output",
            "active": "LOW",
            "inactive_soon": "LOW",
            "inactive": "HIGH"
        },
        "/dev/ttyUSB0": {
            "mode": "rfid_reader",
            "baud": 2400,
            "type": "serial"
        },
        "P9_28": {
            "description": "Power On",
            "mode": "output",
            "active": "HIGH"
        },
        "P9_30": {
            "description": "Enable Power On",
            "mode": "output",
            "active": {
                "output": "HIGH",
                "seconds": 120
            }
        },
        "P9_42": {
            "mode": "output",
            "inactive": {
                "power": "HIGH",
                "seconds": 1
            }
        },

        "stdin": {
            "mode": "rfid_reader",
            "type": "stdio"
        },
        "/dev/ttyO3": {
            "description": "serial control",
            "baud_rate": 9600,
            "mode": "output",
            "active":   "on\n",
            "inactive": "off\n"
        },
        "/dev/dsp": {
            "type": "oss",
            "mode": "output",
            "active": "/var/mother/interlock/active.wav",
            "inactive_soon": "/var/mother/interlock/active_soon.wav",
            "inactive": "/var/mother/interlock/inactive.wav"
        },
        "espeak": {
            "mode": "output",
            "active": "Power On",
            "inactive_soon": "Timing Out",
            "inactive": "Power Off",
        },
        "/dev/ttyO3": {
            "mode": "output",
            "baud_rate": 9600,
            "inactive": "off\n"
        }
    }

### beaglebone black python snippets

#### breadboard_led.py

    #! /usr/bin/python

    import Adafruit_BBIO.GPIO as GPIO
    import time

    GPIO.setup("P8_10", GPIO.OUT)
    while True:
         GPIO.output("P8_10", GPIO.HIGH)
         time.sleep(0.5)
         GPIO.output("P8_10", GPIO.LOW)
         time.sleep(0.5)

#### read_rfid.py

    #! /usr/bin/python
    import serial
    import time
    import urllib2

    ser = serial.Serial('/dev/ttyUSB0', 2400)

    while True:
            response = ser.readline().trim()
            if response <> "":
                    print "raw: " + str(response)
                    print "hex: " + str(response[-8:])
                    print "dec: " + str(int(response[-8:], 16))
                    rfid = str(int(response[-8:], 16))

                    filehandle = urllib2.urlopen("http://www.google.com/?" + rfid)
                    print(filehandle.readline())

            time.sleep(1)

#### read_mac_address.py

    #! /usr/bin/python

    from uuid import getnode as get_mac
    mac = get_mac()
    print hex(mac)
    print hex(mac)[2:14]

#### read_url.py

    #! /usr/bin/python

    import urllib2

    filehandle = urllib2.urlopen("http://www.google.com")

    print(filehandle.readline())

#### user_led_blink.py

    #! /usr/bin/python

    import sys
    import time

    leds = [
         '/sys/class/leds/beaglebone:green:usr0/brightness',
         '/sys/class/leds/beaglebone:green:usr1/brightness',
         '/sys/class/leds/beaglebone:green:usr2/brightness',
         '/sys/class/leds/beaglebone:green:usr3/brightness'
    ]

    def ledon(n):
         value = open(leds[n],'w')
         value.write(str(1))
         value.close()

    def ledoff(n):
         value = open(leds[n],'w')
         value.write(str(0))
         value.close()

    if __name__ == '__main__':
         while True:
              for i, val in enumerate(leds):
                     ledoff(i)
              time.sleep(1)

              for i, val in enumerate(leds):
                           ledon(i)
              time.sleep(1)

         print 'Exiting...'

#### Watchdog Timer

<http://beaglebone.cameon.net/home/watchdog-timer>

## Network Connection

Use t-568b

May connect to the security vlan

## Routing through Linux PC over USB

Linux PC:

    iptables --table nat --append POSTROUTING --out-interface wlan1 -j MASQUERADE
    iptables --append FORWARD --in-interface eth3 -j ACCEPT
    echo 1 > /proc/sys/net/ipv4/ip_forward

Beaglebone:

    route add default gw 192.168.7.1
    echo "nameserver 4.2.2.1" > /etc/resolv.conf
    /usr/bin/ntpdate -b -s -u pool.ntp.org

## Routing through Windows 7 over USB

<http://lanceme.blogspot.com/2013/06/windows-7-internet-sharing-for.html>
