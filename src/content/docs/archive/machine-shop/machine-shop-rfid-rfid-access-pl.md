---
title: "Machine Shop RFID:rfid access.pl"
sourceUrl: "https://dallasmakerspace.org/wiki/Machine_Shop_RFID%3Arfid_access.pl"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Machine_Shop_RFID%3Arfid_access.pl\">legacy DMS wiki</a> — content may be outdated."
---
#!/usr/bin/perl
    #
    # RFID access control program v1.0
    #
    # Copyright (c) 2016, Zach Metzinger
    # All rights reserved.
    #
    # Redistribution and use in source and binary forms, with or without
    # modification, are permitted provided that the following conditions
    # are met:
    #
    # 1. Redistributions of source code must retain the above copyright
    #    notice, this list of conditions and the following disclaimer.
    #
    # 2. Redistributions in binary form must reproduce the above copyright
    #    notice, this list of conditions and the following disclaimer in
    #    the documentation and/or other materials provided with the distribution.
    #
    # THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
    # "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED
    # TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
    # PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR
    # CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
    # EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
    # PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
    # PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
    # OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
    # NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
    # EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    #
    # $Id: rfid_access.pl,v 1.1 2016/01/02 23:15:31 zmetzing Exp $

    use warnings;
    use strict;
    use DB_File;
    use Device::SerialPort qw( :PARAM :STAT 0.07 );

    # Configuration parameters
    my $db_fn = "nfc_auth_tags.db";
    my $serial_port_device = "/dev/ttyO2";
    my $relay_on_time = 10; # Seconds
    # Note: See http://www.armhf.com/using-beaglebone-black-gpios/ for details on the following
    my $sys_class_path = "/sys/class/gpio";
    my $sys_class_export = "$sys_class_path/export";
    my $sys_class_gpio = "$sys_class_path/gpio";
    my $red_led_gpio = 32+12;
    my $yel_led_gpio = 32+13;
    my $grn_led_gpio = 32+15;
    my $off_btn_gpio = 32+14; # Not currently used
    my $on_relay_gpio = 48;

    # Local vars
    my %auth_tags;
    my $tag_id;
    my $nbytes;
    my $nfc;
    my $sysfh;

    # Debugging hexdump subr
    sub hexdump($)
    {
        my $offset = 0;

        foreach my $chunk (unpack "(a16)*", $_[0])
        {
            my $hex = unpack "H*", $chunk; # hexadecimal magic
            $chunk =~ tr/ -~/./c;          # replace unprintables
            $hex   =~ s/(.{1,8})/$1 /gs;   # insert spaces
            printf "0x%08x (%05u)  %-*s %s\n",
                $offset, $offset, 36, $hex, $chunk;
            $offset += 16;
        }
    }

    # Banner
    printf "DMS HAAS RFID access control program v1.0\n";

    # Verify existance of database before starting
    if (! -e $db_fn) {
        die "Unable to find database nfc_auth_tags.db\n";
    }

    # Enable LEDs
    if (! -e $sys_class_export) {
        die "sysfs path $sys_class_export does not exist, are we on BBB?\n";
    }
    system("sudo chmod 222 $sys_class_export");
    system("echo $red_led_gpio > $sys_class_export");
    system("echo $yel_led_gpio > $sys_class_export");
    system("echo $grn_led_gpio > $sys_class_export");
    system("echo $on_relay_gpio > $sys_class_export");
    system("sudo chmod -R go=rwX $sys_class_gpio$red_led_gpio/*");
    system("sudo chmod -R go=rwX $sys_class_gpio$yel_led_gpio/*");
    system("sudo chmod -R go=rwX $sys_class_gpio$grn_led_gpio/*");
    system("sudo chmod -R go=rwX $sys_class_gpio$on_relay_gpio/*");
    system("echo high > $sys_class_gpio$red_led_gpio/direction");
    system("echo high > $sys_class_gpio$yel_led_gpio/direction");
    system("echo high > $sys_class_gpio$grn_led_gpio/direction");
    system("echo low > $sys_class_gpio$on_relay_gpio/direction");

    # Initialize serial port
    $nfc = new Device::SerialPort ($serial_port_device)
        || die "Can't open $serial_port_device: $!\n";

    $nfc->user_msg(1);
    $nfc->databits(8);
    $nfc->baudrate(9600);
    $nfc->parity("none");
    $nfc->stopbits(1);
    $nfc->handshake("none");
    $nfc->read_char_time(0);
    $nfc->read_const_time(250);
    $nfc->write_settings || undef $nfc;

    if (!defined($nfc)) {
        die "Unable to open serial port: $!\n";
    }

    system("stty -F $serial_port_device raw");

    printf "Ready to read tags\n";

    while (1) {
    # Light red LED, others off
        system("echo 0 > $sys_class_gpio$red_led_gpio/value");
        system("echo 1 > $sys_class_gpio$grn_led_gpio/value");

    # Wait for serial port data to come in
      ($nbytes, $tag_id) = $nfc->read(255);
      if ($nbytes == -1) {
          die "EOF on serial port read\n";
      }

      # Only process if we got after the 1 second read timeout
      if ($nbytes > 0) {
          # FIXME: Dump for debug
          #hexdump($tag_id);
          if (($nbytes != 16) || (ord(substr($tag_id, 0, 1)) != 0x02)) {
          printf "Got data on serial port, but does not fit tag format. Ignoring.\n";
          } else {
          # Extract tag id from framing
          $tag_id = substr($tag_id, 1, 12);
          # FIXME: Dump for debug
          #hexdump($tag_id);
          # Look up NFC tag ID in database
          # Note: Only opening database long enough to look this up. That way, we don't have to
          #  manage a multi-access database right now. Could be solved with DB v2-v6 or mysql ..later
          if (!defined(tie %auth_tags, "DB_File", $db_fn, O_RDONLY | O_EXCL, 0600, $DB_HASH)) {
              printf "Cannot open database: $!\n";
          } else {
              if ($auth_tags{$tag_id}) {
              printf "Tag $tag_id is authorized\n";
              # If matched, close relay and light green LED
              system("echo 1 > $sys_class_gpio$on_relay_gpio/value");
              system("echo 1 > $sys_class_gpio$red_led_gpio/value");
              system("echo 0 > $sys_class_gpio$grn_led_gpio/value");
              sleep($relay_on_time);
              } else {
              printf "Tag $tag_id is NOT authorized\n";
              }
              untie %auth_tags;
          }
          # Release relay and light red RED
          system("echo 0 > $sys_class_gpio$on_relay_gpio/value");
          system("echo 0 > $sys_class_gpio$red_led_gpio/value");
          system("echo 1 > $sys_class_gpio$grn_led_gpio/value");
          }
      }
    }
