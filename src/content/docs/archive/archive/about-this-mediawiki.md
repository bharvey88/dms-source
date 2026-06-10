---
title: "About This Mediawiki"
description: "This page is archived and kept for historical purposes. Please do not make any edits.If you feel this is in error, please remove the {{archive}} template."
sourceUrl: "https://dallasmakerspace.org/wiki/About_This_Mediawiki"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/About_This_Mediawiki\">legacy DMS wiki</a> — content may be outdated."
---
**This page is archived and kept for historical purposes. Please do not make any edits.**\
If you feel this is in error, please remove the {{archive}} template.

This is a page just to go over bits and details of this Wiki.

20100623 Finished installing ConfirmAccount plugin. This required wget'ing a TRUNK version of ConfirmEdit, un-tar'ing this into a temp folder, moving the ConfirmEdit\* files into the extensions/recaptcha directory! I don't think a TRUNK version of ConfirmAccount is neccessary (as is alluded to [here](http://www.mediawiki.org/wiki/Extension_talk:ConfirmAccount#.22efCheckIfAccountNameIsPending_failed_to_return_a_value.3B_.22)) The deal is that ConfirmAccount can use the Recaptcha plugin. However, the Recaptcha plugin includes a \*COPY\* of the ConfirmEdit plugin to do its work, and the ConfirmEdit plugin has been updated since the COPY was added to Recaptcha, so you have to update that manually. PeterS

20100624 Added [Flickr](http://www.mediawiki.org/wiki/Extension:Flickr) extension. PeterS

20100802 Upgraded to MediaWiki v1.16.0. PeterS

20100803 Reshuffled the blog and wiki locations so that the default root is the blog, with the wiki living elsewhere. The wiki links didn't change so we dont' lose our Google PageRank.

Details:

    actual file system on server

    ~/dallasmakerspace.com/
    ~/dallasmakerspace.com/wiki/
    ~/dallasmakerspace.com/blog/

    Current "web directory" (in DH panel)
    /home/username/dallasmakerspace.com

    Current sub-directory rewrites
    -none-

    Goals:

    1. www.dallasmakerspace.com drops you at the blog
    2. the wiki lives ???? and works too :)
    3. human readable wiki URLs
    4. retain google page rank by having URLs not change

    Implemented setup:
    1. htaccess in / to redirect from / to /blog meets goal #1 (above)
    2. wiki lives in www.dms.com/w/
    - alter LocalSettings.php, $wgScriptPath =""; to be $wgScriptPath = "/wiki";
    - alter $wgArticlePath setting to be $wgArticlePath = "/wiki/$1";
    - alter $wgUsePathInfo to be $wgUsePathInfo = true;
    - alter $wgLogo to be $wgLogo = "/w/images/b/b7/Logo01.png";
    3. htaccess in / to redirect from /wiki to /w/ parts meets goal #2 and #3
    4. htaccess in /w/ to redirect from /wiki to /w/ parts also meets goal #2 and #3

    Main Document Howto: http://www.mediawiki.org/wiki/Manual:Short_URL/wiki/Page_title_--_no_root_access

(^-This was from [a typewithme document](http://typewith.me/yS4KtOi2yD) (rev 2))

20100901 Removed ".zip file upload restriction" found in wiki's includes/DefaultSettings.php file (original is DefaultSettings.php-20100901-1414 . PeterS

20100924 Added CategoryTree and ParserFunctions plugins and created some basic categories. - Aceat64 16:37, 24 September 2010 (CDT)

20101119 Updated logo. Uploaded new logo to wiki. Changed "\$wgLogo" parameter in LocalSettings.php. - PeterS 15:38, 19 November 2010 (CST)

20101204 Moved site from .com (on Dreamhost) to .org (on colocated server "optimus.beyondweb.net"). The .com site is still active until we can get the DNS changed over, so for now there's an .htaccess file redirecting all requests .org (and the new server). - Aceat64 18:05, 6 December 2010 (CST)

20101209 Changed the public/private keys for reCaptcha so it will work with the .org domain. - Aceat64 21:40, 9 December 2010 (CST)

20101218 Changed authentication method to LDAP and disabled account creation. - Aceat64 16:47, 18 December 2010 (CST)

20110107 Set \$wgCookieSecure to false and added lines to the .htaccess file so that all logins are redirected to HTTPS but everything else is HTTP. - aceat64 21:17, 7 January 2011 (CST)

20110118 Upgraded to version 1.16.1 - aceat64 13:38, 18 January 2011 (CST)

20110307 Disabled the captcha, it's no longer needed. - aceat64 23:11, 7 March 2011 (CST)

20110307 Installed and setup LaTeX - aceat64 23:46, 7 March 2011 (CST)

20110308 Installed the UsabilityInitiative extension - aceat64 12:44, 8 March 2011 (CST)

20110308 Installed the Cite extension - aceat64 13:38, 8 March 2011 (CST)

20110330 Installed FCKEditor.

20110422 Installed SyntaxHighlight_GeSHi - aceat64 13:53, 22 April 2011 (CDT)

20110504 Fixed an issue with generating thumbnails for large images. - aceat64 15:00, 6 May 2011 (CDT)

20110701 Updated to version 1.17.0.

20110712 Installed RSS reader extension on 07/12/2011 - aceat64 17:57, 12 July 2011 (CDT)

20111209 Updated to version 1.18.0 - peter242 11:17, 13 December 2011 (CST)

20111213 Re-enabled WikiEditor - peter242 11:17, 13 December 2011 (CST)

20120118 Updated to version 1.18.1 - peter242 16:08, 18 January 2012 (CST)

20121109 Updated to version 1.20.0; Updated [User Merge and Delete](https://www.mediawiki.org/wiki/Extension:User_Merge_and_Delete) extension; Updated [LDAP Authentication Plugin](https://www.mediawiki.org/wiki/Extension:LDAP_Authentication) - peter242 (talk)

20121109 Updated CategoryTree and RSS feed extensions. - aceat64 (talk) 15:31, 9 November 2012 (CST)

20130326 Added [Math Extension](http://www.mediawiki.org/wiki/Extension:Math) - aceat64 (talk) 15:50, 26 March 2013 (CDT)

20130604 Updated to version 1.20.6 peter242 (talk) 10:56, 4 June 2013 (CDT)

20131115 Added

    'ogg', 'mp3', 'mp4'

to \$wgFileExtensions in daedalus:/home/dallasmakerspace/htdocs/w/LocalSettings.php and

            php_value upload_max_filesize 100M
            php_value post_max_size 100M

to daedalus:/etc/apache2/sites-available/00_dallasmakerspace.org to support larger media file uploads.

20140711 Updated to version 1.23.1 peter242 (talk) 16:18, 11 July 2014 (CDT)
