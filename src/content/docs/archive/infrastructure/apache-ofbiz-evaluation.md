---
title: "Apache OFBiz Evaluation"
description: "This information may be outdated.If you feel this is in error, please remove the {{outdated}} template."
sourceUrl: "https://dallasmakerspace.org/wiki/Apache_OFBiz_Evaluation"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Apache_OFBiz_Evaluation\">legacy DMS wiki</a> — content may be outdated."
---
**This information may be outdated.**\
If you feel this is in error, please remove the {{outdated}} template.

## What is It?

    TODO: Fill this in...

## Motivation for Evaluation

    TODO: Fill this in...

## Installing and Starting

### Prerequisites

OFBiz will need a 1.6 JDK to be installed. While they claim that 1.6 is a "minimum", the code seems to have some syntax errors in 1.7. If you're going to grab the source from their repository, you'll also obviously need Subversion. As far as I can tell, those are the only requirements to get up and running.

### Getting the Source

The source to OFBiz can either be downloaded as a single ZIP file, or grabbed using SVN. The single ZIP can be found at their [Download Page](http://ofbiz.apache.org/download.html).

I am using their bleeding edge code, and prefer to grab the trunk and HEAD revision from their SVN repository. In order to grab the code, use the following command from a command line:

    svn co http://svn.apache.org/repos/asf/ofbiz/trunk

This will check the source out to a directory called "trunk" and you can rename that if you'd like. I tend to use "ofbiz". You can also specify the directory when using the svn command.

### Building

OFBiz uses [Ant](http://ant.apache.org/) as its build system. Ant basically uses an XML file (typically called build.xml) to control the build process. Ant usage is beyond the scope of this document, but for those unfamiliar it can be thought of as an XML based build system primarily used for Java. The most basic way to use Ant is to run it and specify a target. If you're using build.xml, that is all that is required:

    ant <target>

If you want to clean up anything that was built at any point, there is a target called "clean-all" that should remove everything but source code. If you're just starting, this should not be needed (but it should also run very quickly). It's executed from the command line like so:

    ant clean-all

At this point you must decide if you want to load up a "Demo" or an empty system. The demo creates all sorts of Accounts, Products, Employees, etc. It's good for getting a feel for everything OFBiz can do out of the box. If we go with the "empty system" route, we'll end up creating an empty database and a single admin user whose job it will be to create everything. Some people seem to get started with a Demo install and hide everything not needed. I think we might get a better feel for how the system works by actually deploying an empty system and building up everything we need.

#### Demo Build

The demo build is a single target called "load-demo" and can be executed via:

    ant load-demo

#### Empty Build

The empty build consists of two targets.

The first target (load-seed) seems to populate the database with the tables it needs, but leaves them relatively empty. **(NOTE: Some pages will refer to this target as "run-install", but that appears to have been deprecated.)** The load-extseed target is executed like so:

    ant load-seed

The second target simply creates an admin user we can use to login to the system. It will prompt for a user name you'd like to use. It sets the password to "ofbiz", but forces the user to change it at first login.

    ant create-admin-user-login

### Starting

There might be scripts that launch it as well, but starting OFBiz can be done via ant as well:

    ant start

## Notes

[LDAP Config](https://cwiki.apache.org/OFBTECH/apache-ofbiz-technical-production-setup-guide.html#ApacheOFBizTechnicalProductionSetupGuide-SecuritySettings)

[Creating Subscriptions](http://www.amicontech.com/blog/subscriptions-in-ofbiz-and-opentaps/)
