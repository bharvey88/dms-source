---
title: "Introduction to Database Query Injection"
description: "-- Mark Havens 02:08, 10 April 2010 (CDT)"
sourceUrl: "https://dallasmakerspace.org/wiki/Introduction_to_Database_Query_Injection"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Introduction_to_Database_Query_Injection\">legacy DMS wiki</a> — content may be outdated."
---
-- Mark Havens 02:08, 10 April 2010 (CDT)

**This page is archived and kept for historical purposes. Please do not make any edits.**\
If you feel this is in error, please remove the {{archive}} template.

## SQL Injection

Arguably, one of the most common methods of attack for any database equipped web application is SQL Injection<sup>\[2\]</sup>. SQL Injection is an exploitation method that allows a potential attacker to modify a SQL query in such a way that it causes a web application to execute code that was not originally intended.<sup>\[1\]</sup> Often, such exploits allow for the retrieval of arbitrary data, or even full control of a database. Depending on the programming, experience, and security knowledge of the application programmer, any web application interfacing with a SQL database is at risk of SQL injection attacks.

## XPATH Injection

Similarly, XPATH Injection can accomplish the same objective when exploiting applications that query XML. Like SQL, XPath expressions are used to retrieve information from an XML document, except that instead of retrieving information from tables, as with a traditional SQL database, XML is designed to store data in a node-based tree structure. The methods of preventing the exploitation of XPATH Injection by an attacker are the same as with SQL Injection, and can often be prevented by taking the same steps to validate input, as well as by implementing code that does not execute dynamically generated expressions at run time<sup>\[3\]</sup>.

## Injection Methods

Several categories of injection methods have been identified, including query manipulation, code injection, and function call injection. Query manipulation, for example, is a typical exploitation that can modify a statement in a way that allows it to be executed in an unintended manner. In the case of a SQL database, once preliminary information is obtained, arbitrary data can be retrieved from a table is by making use of the UNION operator, as in the case below:

    http://some.url.com/index.asp?id=0 UNION SELECT TOP 1 password FROM userinfo where loginid='bob'--

Executing this in a browser could potentially return an error message with Bob's password inappropriately embedded<sup>\[5\]</sup>. Fortunately, there are methods of mitigating against such sensitive information.

## Mitigation

Once an injection method is successful, an attacker is often restricted to information that is available only to the application's database account<sup>\[4\]</sup>. The problem is that many database administrators do not properly restrict the application's access to the database. As this sometimes happens because of ignorance, misaligned priorities, negligence, or a combination of all three, database administrators should consider the impact of relying solely on the application for security and implement strict access policies for the information in which the application has control. Sometimes this is not always possible, and additional security measures should be used. Encrypting individual fields in the database, for example, would require that the application be designed to automatically encrypt and decrypt the data. This extra overhead, however, would help ensure that a potential attacker could not read the sensitive user information such as passwords or user names.

## References

1.  Ahmad, R. (n.d.). *Hardening Your Web Application Against SQL Injections*. Retrieved April 9, 2010 from <http://ezinearticles.com/?Hardening-Your-Web-Application-Against-SQL-Injections&id=1301170>
2.  Dowd, M., McDonald, J., & Schuh, J. (2007). T*he Art of Software Security Assessment: Identifying and Preventing Software Vulnerabilities*.
3.  Dwibedi, R. (2005). *XPath injection in XML databases*. Retrieved April 9, 2010 from. <http://palisade.plynt.com/issues/2005Jul/xpath-injection/>
4.  Sagar, J. (2005). *SQL Injection Attack and Defense*. Retrieved April 9, 2010, from <http://www.securitydocs.com/library/3587>
5.  Scan Associates. (2002). *SQL Injection Walkthrough*. Retrieved April 9, 2010 from <http://www.securiteam.com/securityreviews/5DP0N1P76E.html>
