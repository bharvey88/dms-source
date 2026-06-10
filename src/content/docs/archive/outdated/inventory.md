---
title: "Inventory"
description: "This information may be outdated.If you feel this is in error, please remove the {{outdated}} template."
sourceUrl: "https://dallasmakerspace.org/wiki/Inventory"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Inventory\">legacy DMS wiki</a> — content may be outdated."
---
**This information may be outdated.**\
If you feel this is in error, please remove the {{outdated}} template.

## Software

The Dallas Makerspace inventory system is currently under development. It is licensed under the [GNU Affero General Public License](http://www.gnu.org/licenses/agpl.html).

The software is available at: <https://github.com/Dallas-Makerspace/Inventory>

## Database Schema

**Items**:

|              |                      |      |         |                |
|--------------|----------------------|------|---------|----------------|
| Field        | Type                 | Null | Default | Extra          |
| id           | int(10) unsigned     | NOT  | *none*  | auto_increment |
| created      | datetime             | NOT  | *none*  |                |
| modified     | datetime             | NOT  | *none*  |                |
| name         | varchar(255)         | NOT  | *none*  |                |
| function     | varchar(255)         | NULL | NULL    |                |
| manufacturer | varchar(255)         | NULL | NULL    |                |
| room_id      | int(10) unsigned     | NOT  | *none*  |                |
| location     | varchar(255)         | NOT  | *none*  |                |
| qty          | unsigned smallint(5) | NOT  | 0       |                |
| notes        | text                 | NULL | NULL    |                |

- Primary Key: id


**Rooms**:

|       |                  |      |         |                |
|-------|------------------|------|---------|----------------|
| Field | Type             | Null | Default | Extra          |
| id    | int(10) unsigned | NOT  | *none*  | auto_increment |
| name  | varchar(255)     | NOT  | *none*  |                |

- Primary Key: id


**Verifications**:

|          |                  |      |         |                |
|----------|------------------|------|---------|----------------|
| Field    | Type             | Null | Default | Extra          |
| id       | int(10) unsigned | NOT  | *none*  | auto_increment |
| item_id  | int(10) unsigned | NOT  | *none*  |                |
| created  | datetime         | NOT  | *none*  |                |
| username | varchar(255)     | NOT  | *none*  |                |
| comment  | text             | NULL | NULL    |                |

- Primary Key: id


**Comments**:

|          |                  |      |         |                |
|----------|------------------|------|---------|----------------|
| Field    | Type             | Null | Default | Extra          |
| id       | int(10) unsigned | NOT  | *none*  | auto_increment |
| item_id  | int(10) unsigned | NOT  | *none*  |                |
| created  | datetime         | NOT  | *none*  |                |
| username | varchar(255)     | NOT  | *none*  |                |
| message  | text             | NOT  | *none*  |                |

- Primary Key: id


**Categories**:

|            |                  |      |         |                |
|------------|------------------|------|---------|----------------|
| Field      | Type             | Null | Default | Extra          |
| id         | int(10) unsigned | NOT  | *none*  | auto_increment |
| parent_id  | int(10) unsigned | NOT  | *none*  |                |
| name       | varchar(255)     | NOT  | *none*  |                |
| lft        | int(10) unsigned | NOT  | *none*  |                |
| rght       | int(10) unsigned | NOT  | *none*  |                |
| item_count | smallint(5)      | NULL | NULL    |                |

- Primary Key: id


**Items_Categories**:

|             |                  |      |         |                |
|-------------|------------------|------|---------|----------------|
| Field       | Type             | Null | Default | Extra          |
| id          | int(10) unsigned | NOT  | *none*  | auto_increment |
| item_id     | int(10) unsigned | NOT  | *none*  |                |
| category_id | int(10) unsigned | NOT  | *none*  |                |

- Primary Key: id


**Uploads**:

|             |                  |      |         |                |
|-------------|------------------|------|---------|----------------|
| Field       | Type             | Null | Default | Extra          |
| id          | int(10) unsigned | NOT  | *none*  | auto_increment |
| item_id     | int(10) unsigned | NOT  | *none*  |                |
| name        | varchar(255)     | NOT  | *none*  |                |
| description | varchar(255)     | NULL | NULL    |                |
| type        | varchar(255)     | NOT  | *none*  |                |
| size        | int(10) unsigned | NOT  | *none*  |                |
| created     | datetime         | NOT  | *none*  |                |

- Primary Key: id
