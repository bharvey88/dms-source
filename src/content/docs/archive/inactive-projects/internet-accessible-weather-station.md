---
title: "Internet accessible weather station"
description: "This project has been listed as inactive. If you are interested in taking over this project please contact one or more of the project's members for more in..."
sourceUrl: "https://dallasmakerspace.org/wiki/Internet_accessible_weather_station"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Internet_accessible_weather_station\">legacy DMS wiki</a> — content may be outdated."
---
**This project has been listed as inactive.**\
If you are interested in taking over this project please contact one or more of the project's members for more information.

I've been wanting to make my own weather station for quite some time now. Finally, I have some time to bang this out and set it up at my apartment so anyone interested will be able to get real time (and historic) weather data here from anywhere we have internet access.

## Requirements

- Internet Accessible
- Wind Velocity/Direction, & Rain Accumulation
- 24/7 Availability

## Parts

- Arduino Diecimilia
- Computer w/ Inet access to serve/upload data
- Weather Meters: Wind Vane, Anemometer, Rain Gauge (SFE SEN-08942 \$69.95 [\[1\]](http://www.sparkfun.com/products/8942); Datasheet: [\[2\]](http://www.sparkfun.com/datasheets/Sensors/Weather/Weather%20Sensor%20Assembly..pdf))
- Weather Board (SFE SEN-09800 \$124.95 [\[3\]](http://www.sparkfun.com/products/9800); Datasheet: [\[4\]](http://www.sparkfun.com/datasheets/Sensors/Pressure/USBWeatherBoard-v2.pdf))
- Ethernet Shield (SFE DEV-09026 \$45.95 [\[5\]](http://www.sparkfun.com/products/9026))
- Ethernet Cable
- Battery & supporting hardware/electronics
- Instrument Support

## Theory

**Wind Vane:**

The wind vane can be thought of as a nonlinear potentiometer. By 'nonlinear', I mean that when the vane rotates about its axis, the resistance doesn't increase continuously nor proportionately (with respect to its angular displacement), thus we'll have to be creative when coding the 'decoder'. With that in mind, we're going to setup a voltage divider using a resistor in-line from Vcc to ground.

- <img src="/dms-source/files/mw/thumb_a_a7_Wind_direction.png_99px-Wind_direction.png" width="99" height="120" />

  Wind Vane Schematic

**Anemometer:**

The anemometer rotates at 1 Hz when the wind is blowing at 2.4 Km/hr and briefly closes a normally open connection between its two leads.


**Rain Gauge:**

The same principle of momentary connection as the anemometer is implemented in the rain gauge. For every bucket flip inside the rain gauge, a momentary connection is made between its two terminals. The manufacturer says this is equivalent to 0.2794 mm of rain. *NOTE:* This rain gauge is very simplistic and doesn't take into account solid precipitation, vibrations falsely triggering a bucket flip, nor manufacturing inconsistencies. There are no further specifications from the manufacturer available.

## Arduino Code

Steve (saustin), from the comments on SFE's Weather Meters page, posted [his code](http://home.comcast.net/~saustin98/misc/WeatherStationADC.txt) he developed for the Arduino. One thing he didn't develop was the code for the Rain Guage.


**Rain Guage:**

Here's the additional lines of code I used to implement the rain gauge. I basically copied the code from the wind speed and made adjustments from there.

    +    #define PIN_RAIN_GUAGE  3     // Digital 3
    +    #define MSECS_CALC_RAIN   1000
    +    ulong nextCalcRain;                   // When we next calc the rain

         void setup() {
    +      pinMode(PIN_RAIN_GUAGE, INPUT);
    +      digitalWrite(PIN_RAIN_GUAGE, HIGH);
    +      attachInterrupt(0, countRainGuage, FALLING);
    +      nextCalcRain  = millis() + MSECS_CALC_RAIN;

    +    //=======================================================
    +    // Interrupt handler for rain guage. Called each time the reed
    +    // switch triggers (one empty).
    +    //=======================================================
    +    void countRainGuage() {
    +      numEmptiesRainGuage++;
    +    }

    +    //=======================================================
    +    // Calculate the rain fall, and display it (or log it, whatever).
    +    // 1 empty/sec = 0.2794 mm
    +    //=======================================================
    +    void calcRain() {
    +       int x, iRain;

    +       Serial.print("Rain: ");
    +       Serial.print(x);

    +       numRainEmpties = 0;        // Reset counter
    +    }



- Copy/Paste that into the Arduino IDE
- Copy/Paste [saustin's code](http://home.comcast.net/~saustin98/misc/WeatherStationADC.txt) into the same file
- Save/Compile/Upload to the Arduino
- Windows Users: In Hyper Terminal, Configure: 9600 bps, 8 data bits, No parity, 1 stop bit, No flow control
- Linux Users: Something like 'screen /dev/ttyUSB0' in your shell should work
- You should see the sensor's values update every 5 seconds

**Ethernet:**

This project will use the [Ethernet Shield](http://www.arduino.cc/en/Main/ArduinoEthernetShield) to serve up the weather station values using HTTP. Unfortunately, I don't have the Ethernet Shield yet to test this out and make modifications, so I'll get to it later. The following code was stolen from Arduino Cookbook by Michael Margolis from O'Reilly (p 469; "Setting Up an Arduino to Be a Web Server"):

    /*
     * Web Server
     *
     * A simple web server that shows the value of the analog input pins.
     */

    #if ARDUINO > 18
    #include <SPI. h>         // needed for Arduino versions later than 0018
    #endif

    #include <Ethernet.h>

    byte mac[ ] = { 0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED };
    byte ip[ ] = { 192, 168, 1, 177};

    Server server(80);

    void setup()
    {
       Ethernet. begin(mac, ip);
       server. begin();
    }

    void loop()
    {
       Client client = server.available();
       if (client) {
         // an http request ends with a blank line
         boolean current_line_is_blank = true;
         while (client.connected()) {
           if (client.available()) {
             char c = client.read();
             // if we've gotten to the end of the line (received a newline
             // character) and the line is blank, the http request has ended,
             // so we can send a reply
             if (c == '\n' && current_line_is_blank) {
               // send a standard http response header
               client.println("HTTP/1.1 200 OK");
               client.println("Content-Type: text/html");
               client.println();
               // output the value of each analog input pin
               for (int i = 0; i < 6; i++) {
                 client.print("analog input ");
                 client.print(i);
                 client.print(" is ");
                 client.print(analogRead(i));
                 client.println("<br />");
               }
               break;
             }
             if (c == '\n') {
               // we're starting a new line
               current_line_is_blank = true;
             } else if (c != '\r') {
               // we've gotten a character on the current line
               current_line_is_blank = false;
             }
           }
         }
         // give the web browser time to receive the data
         delay(1);
         client. stop();
       }
    }

## TO DO

- Get an Ethernet Shield & make necessary changes to the ethernet code above
- Assemble everything
- Port opened up on router so I can view the webpage over the inet

## Possible Upgrades

- Charts, Graphs, Statistics
- Historical logs for \>= 7days (much longer preferred)
- Microchip PIC programmed to gather & serve data (to conserve costs)
- Wireless
- Webcam
- Integrate w/ Weather Underground
- 'Ajax' web interface
- Add this stations' data to national weather data collection agencies
- Rolling average of sensors to remove minuscule artifacts (or DSP High-pass filter?)
- Instantaneous value interrogation
- APRS
- Implement Barometric Pressure, Humidity, Temperature, & Light sensors
- Handling the wind direction differently. Possible to get accuracy to the degree? ADC value (IN) {0-1023} (-\>) {N, NE, E, SE, S, SW, W, NW}
- Viewable from a chumby, digital picture frame, LCD, etc.
