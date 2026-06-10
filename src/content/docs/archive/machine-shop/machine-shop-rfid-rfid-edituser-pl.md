---
title: "Machine Shop RFID:rfid edituser.pl"
sourceUrl: "https://dallasmakerspace.org/wiki/Machine_Shop_RFID%3Arfid_edituser.pl"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Machine_Shop_RFID%3Arfid_edituser.pl\">legacy DMS wiki</a> — content may be outdated."
---
#!/usr/bin/perl
    #
    # RFID access control database editor v1.0
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
    # $Id: rfid_edituser.pl,v 1.1 2016/01/02 23:15:39 zmetzing Exp $

    use warnings;
    use strict;
    use DB_File;

    # Local variables
    my (%auth_tags, $k, $v);

    # Name of database file
    my $db_fn = "nfc_auth_tags.db";

    # Command line arguments
    my ($cmd, $tag_id, $username) = @ARGV;

    if (!defined($cmd)) {
        die "usage: $0 (add/del/list) [hex tag ID] [username first_last]\n";
    }

    # Attempt to open database
    if (-e $db_fn) {
        tie %auth_tags, "DB_File", $db_fn, O_RDWR | O_EXCL, 0600, $DB_HASH
        or die "Cannot open file $db_fn: $!\n";
    } else {
        print "Creating new database $db_fn\n";
        tie %auth_tags, "DB_File", $db_fn, O_RDWR | O_CREAT | O_EXCL, 0600, $DB_HASH
        or die "Cannot create file $db_fn: $!\n";
    }

    # Parse commands. Could be done more intelligently, but this works for now
    if ($cmd =~ /list/) {
        print "Access list\n";
        print "-----------\n";
        # This bit lifted from the DB_File perldoc
        while (($k, $v) = each %auth_tags) {
        print "$k -> $v\n";
        }
    } else {
        if ($cmd =~ /add/) {
        if (!defined($tag_id) || !defined($username)) {
            untie %auth_tags;
            die "Please specify tag id and username (eg. \"$0 add 10008751C204 zach_metzinger\")\n";
        }
        if ($auth_tags{$tag_id}) {
            warn "Tag $tag_id already exists in database. Overwriting value with new username $username\n";
        }
        print "Adding tag id $tag_id for user $username\n";
        $auth_tags{$tag_id} = $username;
        } else {
        if ($cmd =~ /del/) {
            if (!defined($tag_id)) {
            untie %auth_tags;
            die "Please specify tag id to delete (eg. \"$0 del 10008751C204\")\n";
            }
            if ($auth_tags{$tag_id}) {
            print "Deleting tag id $tag_id\n";
            delete $auth_tags{$tag_id};
            } else {
            print "Tag id $tag_id was not fond in database\n";
            }
        } else {
            warn "Unknown command $1\n";
        }
        }
    }

    # Close the database
    untie %auth_tags;
