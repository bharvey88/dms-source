---
title: "Calendar Queries"
description: "This page is a collection of useful queries to run on the Calendar database to get statistical insight to DMS. None of these queries alone contain personal..."
sourceUrl: "https://dallasmakerspace.org/wiki/Calendar_Queries"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Calendar_Queries\">legacy DMS wiki</a> — content may be outdated."
---
This page is a collection of useful queries to run on the Calendar database to get statistical insight to DMS. None of these queries alone contain personal or sensitive information, however the results definitely will.

### Most popular classes, with date and length of class

    SELECT e.name, COUNT(r.id) AS attendance,e.event_start, TIMESTAMPDIFF(MINUTE, e.event_start, e.event_end) AS `length`
    FROM `events` e
    LEFT JOIN registrations r ON r.event_id = e.id
    GROUP BY e.id
    ORDER BY attendance DESC

### Average attendances of classes, and number of classes, by room, by year / month

    SELECT
     DATE_FORMAT(e.event_start, "%Y-%m") AS yearmonth,
     r.name,
     COUNT(e.id) AS classes,
     COUNT(reg.id) / COUNT(DISTINCT reg.event_id) as avg_attendance
    FROM `events` e
    LEFT JOIN registrations reg on reg.event_id = e.id
    LEFT JOIN rooms r ON r.id = e.room_id
    WHERE e.event_start < NOW()
    GROUP BY DATE_FORMAT(e.event_start, "%Y-%m"),r.name
    ORDER BY yearmonth DESC

### Honorarium / Class Fees for a Committee

     select
       e.id,
       e.name,
       e.event_start,
       e.cost as "Class Fee",
       (select count(*) from registrations r where r.event_id = e.id and r.`type` = "paid") * e.cost as "Total Class Fees",
       e.`status`,
       IF(h.pay_contact = 1, 50.00, 0.00) as "Honorarium Teacher Amount",
       IF(h.id is null, 0.00, IF(h.pay_contact = 1, 50.00, 100.00)) as "Honorarium Committee Amount",
       c.name as "Honorarium Committee"
     from events e
     left join honoraria h on h.event_id = e.id
     left join committees c on c.id = h.committee_id
     where h.committee_id = 1 and e.`status` IN ("approved", "completed")
     order by e.event_start desc;
