---
title: "Arduino programming from Ubuntu 10.04 (Lucid)"
description: "This information may be outdated.If you feel this is in error, please remove the {{outdated}} template."
sourceUrl: "https://dallasmakerspace.org/wiki/Arduino_programming_from_Ubuntu_10.04_(Lucid)"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Arduino_programming_from_Ubuntu_10.04_(Lucid)\">legacy DMS wiki</a> — content may be outdated."
---
**This information may be outdated.**\
If you feel this is in error, please remove the {{outdated}} template.

**A request has been made to delete this page.**\
If you feel this is in error, please remove the {{delete}} template.

I started out using an Arduino Diecimila, many others should work as well. Using Ubuntu 10.04.x (Lucid) x64; x86 & other distros should work similar.

Some instructions borrowed from [arduino.cc](http://arduino.cc/):

- From shell, "sudo add-apt-repository ppa:arduino-ubuntu-team" (highlight, Ctrl+C, focus on your shell, Ctrl+Shift+V)
- Enter your su password
- "sudo apt-get update"
- "sudo apt-get install arduino"
- The Arduino IDE is located at \>\>Applications \>\>Programming \>\>arduino
- Plug your arduino into USB
- Go \>\>Tools \>\>Board, and select the arduino you are using (in my case, "Arduino Diecimila, Duemalanove, or Nano w/ ATmega 168"
- Go \>\>File \>\>Examples \>\>Digital \>\>Blink; A new window will open with the blink example
- Go \>\>Sketch \>\>Verify/Compile (or Ctrl+L or click the "play" button)
- Go \>\>File \>\>Upload to IO Board (or Ctrl+U)
- An LED should be blinking; 1s on, 1s off
- Near the bottom of the source code, look for the lines "delay(1000);". The first one is how long the LED is on and the second one is how long the LED is off
- Replace both the "1000" values with "5", Compile and Upload (Ctrl+L; Ctrl+U)
- You've just made an LED dimmer! Power goes to the LED for 5ms, then takes a break for 5ms. We could make the LED dimmer by controlling the current supplied to the LED, but this is easier, faster, and doesn't require too many modifications (to hardware or software)
- The reason you don't see the LED blinking is because our eyes (or brain) cannot detect changes as fast as the LED is switching on and off. It is a task to the reader to find values for the on/off times that your eyes *just* start to see the flicker. (I start to see the flicker right around 40Hz)
- The LED is at 50% duty cycle, which (theoretically) is 50% as bright as the LED can go. If you want to make the LED go to 75% of its brightness, use the values 3 & 1, respectively, for the on/off times. The duty cycle can be calculated by (on time)/((on time) + (off time))
- We very well could have made the 5ms on/off times, 1ms on/off with the same 50% duty cycle.
- For more great instructions, visit <http://arduino.cc/playground/>

## Windows

For brevity, here are the steps for windows. Summarized from <http://arduino.cc/en/Guide/Windows>\

- Go download the software by clicking "Windows" at <http://arduino.cc/en/Main/Software>
- Unzip the download. Mine was called "arduino-0022.zip"
- Plug in the Arduino and install the drivers. (Mine is the Diecimelia, so I installed the FTDI drivers) Check <http://arduino.cc/en/Guide/Windows#toc4> for the driver options
- Start the arduino application and resume from opening the example from above

## TODO

Digital Bitbanging Analog Sensor interfacing (ADC) Ethernet interfacing
