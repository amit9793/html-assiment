Microsoft Windows [Version 10.0.19042.1237]
(c) Microsoft Corporation. All rights reserved.

C:\Users\91788>mongo
MongoDB shell version v5.0.3
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("9f90207b-e079-41b1-a202-33cecb92fbd6") }
MongoDB server version: 5.0.3
================
Warning: the "mongo" shell has been superseded by "mongosh",
which delivers improved usability and compatibility.The "mongo" shell has been deprecated and will be removed in
an upcoming release.
We recommend you begin using "mongosh".
For installation instructions, see
https://docs.mongodb.com/mongodb-shell/install/
================
---
The server generated these startup warnings when booting:
        2021-09-25T07:05:03.809+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
---
---
        Enable MongoDB's free cloud-based monitoring service, which will then receive and display
        metrics about your deployment (disk utilization, CPU, operation statistics, etc).

        The monitoring data will be available on a MongoDB website with a unique URL accessible to you
        and anyone you share the URL with. MongoDB may use this information to make product
        improvements and to suggest MongoDB products and deployment options to you.

        To enable free monitoring, run the following command: db.enableFreeMonitoring()
        To permanently disable this reminder, run the following command: db.disableFreeMonitoring()
---
> db
test
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
web11   0.000GB
> use web11
switched to db web11
> show collections
user
> db.user.find({"movies_name":"Simple Men"}).pretty()
{
        "_id" : ObjectId("614e0e620c06b2951a7cad50"),
        "id" : ObjectId("614e0c8ffc13ae423d000003"),
        "movies_name" : "Simple Men",
        "movies_genre" : "Comedy|Drama",
        "production_year" : 1994,
        "budget" : 54
}
> db.user.find({movies_name:{$ne"Simple Men"}}).pretty()
uncaught exception: SyntaxError: missing : after property id :
@(shell):1:30
> db.user.find({movies_name:{$ne:"Simple Men"}}).pretty()
{
        "_id" : ObjectId("614e0e620c06b2951a7cad4d"),
        "id" : ObjectId("614e0c8ffc13ae423d000000"),
        "movies_name" : "Young Sherlock Holmes",
        "movies_genre" : "Action|Adventure|Children|Fantasy|Mystery|Thriller",
        "production_year" : 1992,
        "budget" : 2
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad4e"),
        "id" : ObjectId("614e0c8ffc13ae423d000001"),
        "movies_name" : "Anna: 6-18 (Anna: Ot shesti do vosemnadtsati)",
        "movies_genre" : "Documentary",
        "production_year" : 1990,
        "budget" : 80
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad4f"),
        "id" : ObjectId("614e0c8ffc13ae423d000002"),
        "movies_name" : "Angriest Man in Brooklyn, The",
        "movies_genre" : "Comedy|Drama",
        "production_year" : 2009,
        "budget" : 90
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad51"),
        "id" : ObjectId("614e0c8ffc13ae423d000004"),
        "movies_name" : "Dinner at Eight",
        "movies_genre" : "Comedy|Drama|Romance",
        "production_year" : 2004,
        "budget" : 81
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad52"),
        "id" : ObjectId("614e0c8ffc13ae423d000005"),
        "movies_name" : "The Third Reich: The Rise & Fall",
        "movies_genre" : "(no genres listed)",
        "production_year" : 2012,
        "budget" : 76
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad53"),
        "id" : ObjectId("614e0c8ffc13ae423d000006"),
        "movies_name" : "Leap Year",
        "movies_genre" : "Comedy|Romance",
        "production_year" : 2002,
        "budget" : 55
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad54"),
        "id" : ObjectId("614e0c8ffc13ae423d000007"),
        "movies_name" : "Frogs",
        "movies_genre" : "Drama|Horror|Mystery|Thriller",
        "production_year" : 2011,
        "budget" : 48
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad55"),
        "id" : ObjectId("614e0c8ffc13ae423d000008"),
        "movies_name" : "My Dear Enemy (Meotjin haru)",
        "movies_genre" : "Drama|Romance",
        "production_year" : 2011,
        "budget" : 100
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad56"),
        "id" : ObjectId("614e0c8ffc13ae423d000009"),
        "movies_name" : "Beyond Re-Animator",
        "movies_genre" : "Horror",
        "production_year" : 2005,
        "budget" : 79
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad57"),
        "id" : ObjectId("614e0c8ffc13ae423d00000a"),
        "movies_name" : "Solas",
        "movies_genre" : "Drama",
        "production_year" : 2000,
        "budget" : 57
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad58"),
        "id" : ObjectId("614e0c8ffc13ae423d00000b"),
        "movies_name" : "Thirty Day Princess",
        "movies_genre" : "Comedy|Romance",
        "production_year" : 2012,
        "budget" : 41
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad59"),
        "id" : ObjectId("614e0c8ffc13ae423d00000c"),
        "movies_name" : "Scorpion King, The",
        "movies_genre" : "Action|Adventure|Fantasy",
        "production_year" : 1997,
        "budget" : 92
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad5a"),
        "id" : ObjectId("614e0c8ffc13ae423d00000d"),
        "movies_name" : "Gymnast, The",
        "movies_genre" : "Drama|Romance",
        "production_year" : 2005,
        "budget" : 11
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad5b"),
        "id" : ObjectId("614e0c8ffc13ae423d00000e"),
        "movies_name" : "Charleston",
        "movies_genre" : "Comedy|Crime",
        "production_year" : 1993,
        "budget" : 80
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad5c"),
        "id" : ObjectId("614e0c8ffc13ae423d00000f"),
        "movies_name" : "Times of Harvey Milk, The",
        "movies_genre" : "Documentary",
        "production_year" : 2007,
        "budget" : 16
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad5d"),
        "id" : ObjectId("614e0c8ffc13ae423d000010"),
        "movies_name" : "Rock the Boat",
        "movies_genre" : "Animation",
        "production_year" : 1999,
        "budget" : 81
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad5e"),
        "id" : ObjectId("614e0c8ffc13ae423d000011"),
        "movies_name" : "Holiday",
        "movies_genre" : "Comedy|Drama|Romance",
        "production_year" : 1995,
        "budget" : 7
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad5f"),
        "id" : ObjectId("614e0c8ffc13ae423d000012"),
        "movies_name" : "The Big Cube",
        "movies_genre" : "Mystery|Thriller",
        "production_year" : 1996,
        "budget" : 13
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad60"),
        "id" : ObjectId("614e0c8ffc13ae423d000013"),
        "movies_name" : "Our Daily Bread (Unser täglich Brot)",
        "movies_genre" : "Documentary",
        "production_year" : 2009,
        "budget" : 11
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad61"),
        "id" : ObjectId("614e0c8ffc13ae423d000014"),
        "movies_name" : "Pretty Devils",
        "movies_genre" : "Comedy|Drama",
        "production_year" : 2006,
        "budget" : 35
}
Type "it" for more
>
> db.user.find({and:[{budget:{$gt:9000}},{budget:$lt:20000}}]})
uncaught exception: SyntaxError: missing } after property list :
@(shell):1:50
> db.user.find({and:[{budget:{$gt:9000}},{budget:{$lt:20000}}]})
> db.user.find({$or:[{budget:{$lt:9000}},{budget:{$lt:20000}}]})
{ "_id" : ObjectId("614e0e620c06b2951a7cad4d"), "id" : ObjectId("614e0c8ffc13ae423d000000"), "movies_name" : "Young Sherlock Holmes", "movies_genre" : "Action|Adventure|Children|Fantasy|Mystery|Thriller", "production_year" : 1992, "budget" : 2 }
{ "_id" : ObjectId("614e0e620c06b2951a7cad4e"), "id" : ObjectId("614e0c8ffc13ae423d000001"), "movies_name" : "Anna: 6-18 (Anna: Ot shesti do vosemnadtsati)", "movies_genre" : "Documentary", "production_year" : 1990, "budget" : 80 }
{ "_id" : ObjectId("614e0e620c06b2951a7cad4f"), "id" : ObjectId("614e0c8ffc13ae423d000002"), "movies_name" : "Angriest Man in Brooklyn, The", "movies_genre" : "Comedy|Drama", "production_year" : 2009, "budget" : 90 }
{ "_id" : ObjectId("614e0e620c06b2951a7cad50"), "id" : ObjectId("614e0c8ffc13ae423d000003"), "movies_name" : "Simple Men", "movies_genre" : "Comedy|Drama", "production_year" : 1994, "budget" : 54 }
{ "_id" : ObjectId("614e0e620c06b2951a7cad51"), "id" : ObjectId("614e0c8ffc13ae423d000004"), "movies_name" : "Dinner at Eight", "movies_genre" : "Comedy|Drama|Romance", "production_year" : 2004, "budget" : 81 }
{ "_id" : ObjectId("614e0e620c06b2951a7cad52"), "id" : ObjectId("614e0c8ffc13ae423d000005"), "movies_name" : "The Third Reich: The Rise & Fall", "movies_genre" : "(no genres listed)", "production_year" : 2012, "budget" : 76 }
{ "_id" : ObjectId("614e0e620c06b2951a7cad53"), "id" : ObjectId("614e0c8ffc13ae423d000006"), "movies_name" : "Leap Year", "movies_genre" : "Comedy|Romance", "production_year" : 2002, "budget" : 55 }
{ "_id" : ObjectId("614e0e620c06b2951a7cad54"), "id" : ObjectId("614e0c8ffc13ae423d000007"), "movies_name" : "Frogs", "movies_genre" : "Drama|Horror|Mystery|Thriller", "production_year" : 2011, "budget" : 48 }
{ "_id" : ObjectId("614e0e620c06b2951a7cad55"), "id" : ObjectId("614e0c8ffc13ae423d000008"), "movies_name" : "My Dear Enemy (Meotjin haru)", "movies_genre" : "Drama|Romance", "production_year" : 2011, "budget" : 100 }
{ "_id" : ObjectId("614e0e620c06b2951a7cad56"), "id" : ObjectId("614e0c8ffc13ae423d000009"), "movies_name" : "Beyond Re-Animator", "movies_genre" : "Horror", "production_year" : 2005, "budget" : 79 }
{ "_id" : ObjectId("614e0e620c06b2951a7cad57"), "id" : ObjectId("614e0c8ffc13ae423d00000a"), "movies_name" : "Solas", "movies_genre" : "Drama", "production_year" : 2000, "budget" : 57 }
{ "_id" : ObjectId("614e0e620c06b2951a7cad58"), "id" : ObjectId("614e0c8ffc13ae423d00000b"), "movies_name" : "Thirty Day Princess", "movies_genre" : "Comedy|Romance", "production_year" : 2012, "budget" : 41 }
{ "_id" : ObjectId("614e0e620c06b2951a7cad59"), "id" : ObjectId("614e0c8ffc13ae423d00000c"), "movies_name" : "Scorpion King, The", "movies_genre" : "Action|Adventure|Fantasy", "production_year" : 1997, "budget" : 92 }
{ "_id" : ObjectId("614e0e620c06b2951a7cad5a"), "id" : ObjectId("614e0c8ffc13ae423d00000d"), "movies_name" : "Gymnast, The", "movies_genre" : "Drama|Romance", "production_year" : 2005, "budget" : 11 }
{ "_id" : ObjectId("614e0e620c06b2951a7cad5b"), "id" : ObjectId("614e0c8ffc13ae423d00000e"), "movies_name" : "Charleston", "movies_genre" : "Comedy|Crime", "production_year" : 1993, "budget" : 80 }
{ "_id" : ObjectId("614e0e620c06b2951a7cad5c"), "id" : ObjectId("614e0c8ffc13ae423d00000f"), "movies_name" : "Times of Harvey Milk, The", "movies_genre" : "Documentary", "production_year" : 2007, "budget" : 16 }
{ "_id" : ObjectId("614e0e620c06b2951a7cad5d"), "id" : ObjectId("614e0c8ffc13ae423d000010"), "movies_name" : "Rock the Boat", "movies_genre" : "Animation", "production_year" : 1999, "budget" : 81 }
{ "_id" : ObjectId("614e0e620c06b2951a7cad5e"), "id" : ObjectId("614e0c8ffc13ae423d000011"), "movies_name" : "Holiday", "movies_genre" : "Comedy|Drama|Romance", "production_year" : 1995, "budget" : 7 }
{ "_id" : ObjectId("614e0e620c06b2951a7cad5f"), "id" : ObjectId("614e0c8ffc13ae423d000012"), "movies_name" : "The Big Cube", "movies_genre" : "Mystery|Thriller", "production_year" : 1996, "budget" : 13 }
{ "_id" : ObjectId("614e0e620c06b2951a7cad60"), "id" : ObjectId("614e0c8ffc13ae423d000013"), "movies_name" : "Our Daily Bread (Unser täglich Brot)", "movies_genre" : "Documentary", "production_year" : 2009, "budget" : 11 }
Type "it" for more
> db.user.find({$or:[{budget:{$lt:9000}},{budget:{$lt:20000}}]}).pretty()
{
        "_id" : ObjectId("614e0e620c06b2951a7cad4d"),
        "id" : ObjectId("614e0c8ffc13ae423d000000"),
        "movies_name" : "Young Sherlock Holmes",
        "movies_genre" : "Action|Adventure|Children|Fantasy|Mystery|Thriller",
        "production_year" : 1992,
        "budget" : 2
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad4e"),
        "id" : ObjectId("614e0c8ffc13ae423d000001"),
        "movies_name" : "Anna: 6-18 (Anna: Ot shesti do vosemnadtsati)",
        "movies_genre" : "Documentary",
        "production_year" : 1990,
        "budget" : 80
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad4f"),
        "id" : ObjectId("614e0c8ffc13ae423d000002"),
        "movies_name" : "Angriest Man in Brooklyn, The",
        "movies_genre" : "Comedy|Drama",
        "production_year" : 2009,
        "budget" : 90
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad50"),
        "id" : ObjectId("614e0c8ffc13ae423d000003"),
        "movies_name" : "Simple Men",
        "movies_genre" : "Comedy|Drama",
        "production_year" : 1994,
        "budget" : 54
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad51"),
        "id" : ObjectId("614e0c8ffc13ae423d000004"),
        "movies_name" : "Dinner at Eight",
        "movies_genre" : "Comedy|Drama|Romance",
        "production_year" : 2004,
        "budget" : 81
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad52"),
        "id" : ObjectId("614e0c8ffc13ae423d000005"),
        "movies_name" : "The Third Reich: The Rise & Fall",
        "movies_genre" : "(no genres listed)",
        "production_year" : 2012,
        "budget" : 76
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad53"),
        "id" : ObjectId("614e0c8ffc13ae423d000006"),
        "movies_name" : "Leap Year",
        "movies_genre" : "Comedy|Romance",
        "production_year" : 2002,
        "budget" : 55
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad54"),
        "id" : ObjectId("614e0c8ffc13ae423d000007"),
        "movies_name" : "Frogs",
        "movies_genre" : "Drama|Horror|Mystery|Thriller",
        "production_year" : 2011,
        "budget" : 48
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad55"),
        "id" : ObjectId("614e0c8ffc13ae423d000008"),
        "movies_name" : "My Dear Enemy (Meotjin haru)",
        "movies_genre" : "Drama|Romance",
        "production_year" : 2011,
        "budget" : 100
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad56"),
        "id" : ObjectId("614e0c8ffc13ae423d000009"),
        "movies_name" : "Beyond Re-Animator",
        "movies_genre" : "Horror",
        "production_year" : 2005,
        "budget" : 79
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad57"),
        "id" : ObjectId("614e0c8ffc13ae423d00000a"),
        "movies_name" : "Solas",
        "movies_genre" : "Drama",
        "production_year" : 2000,
        "budget" : 57
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad58"),
        "id" : ObjectId("614e0c8ffc13ae423d00000b"),
        "movies_name" : "Thirty Day Princess",
        "movies_genre" : "Comedy|Romance",
        "production_year" : 2012,
        "budget" : 41
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad59"),
        "id" : ObjectId("614e0c8ffc13ae423d00000c"),
        "movies_name" : "Scorpion King, The",
        "movies_genre" : "Action|Adventure|Fantasy",
        "production_year" : 1997,
        "budget" : 92
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad5a"),
        "id" : ObjectId("614e0c8ffc13ae423d00000d"),
        "movies_name" : "Gymnast, The",
        "movies_genre" : "Drama|Romance",
        "production_year" : 2005,
        "budget" : 11
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad5b"),
        "id" : ObjectId("614e0c8ffc13ae423d00000e"),
        "movies_name" : "Charleston",
        "movies_genre" : "Comedy|Crime",
        "production_year" : 1993,
        "budget" : 80
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad5c"),
        "id" : ObjectId("614e0c8ffc13ae423d00000f"),
        "movies_name" : "Times of Harvey Milk, The",
        "movies_genre" : "Documentary",
        "production_year" : 2007,
        "budget" : 16
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad5d"),
        "id" : ObjectId("614e0c8ffc13ae423d000010"),
        "movies_name" : "Rock the Boat",
        "movies_genre" : "Animation",
        "production_year" : 1999,
        "budget" : 81
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad5e"),
        "id" : ObjectId("614e0c8ffc13ae423d000011"),
        "movies_name" : "Holiday",
        "movies_genre" : "Comedy|Drama|Romance",
        "production_year" : 1995,
        "budget" : 7
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad5f"),
        "id" : ObjectId("614e0c8ffc13ae423d000012"),
        "movies_name" : "The Big Cube",
        "movies_genre" : "Mystery|Thriller",
        "production_year" : 1996,
        "budget" : 13
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad60"),
        "id" : ObjectId("614e0c8ffc13ae423d000013"),
        "movies_name" : "Our Daily Bread (Unser täglich Brot)",
        "movies_genre" : "Documentary",
        "production_year" : 2009,
        "budget" : 11
}
Type "it" for more
>
Microsoft Windows [Version 10.0.19042.1237]
(c) Microsoft Corporation. All rights reserved.

C:\Users\91788>mongo
MongoDB shell version v5.0.3
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("9f90207b-e079-41b1-a202-33cecb92fbd6") }
MongoDB server version: 5.0.3
================
Warning: the "mongo" shell has been superseded by "mongosh",
which delivers improved usability and compatibility.The "mongo" shell has been deprecated and will be removed in
an upcoming release.
We recommend you begin using "mongosh".
For installation instructions, see
https://docs.mongodb.com/mongodb-shell/install/
================
---
The server generated these startup warnings when booting:
        2021-09-25T07:05:03.809+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
---
---
        Enable MongoDB's free cloud-based monitoring service, which will then receive and display
        metrics about your deployment (disk utilization, CPU, operation statistics, etc).

        The monitoring data will be available on a MongoDB website with a unique URL accessible to you
        and anyone you share the URL with. MongoDB may use this information to make product
        improvements and to suggest MongoDB products and deployment options to you.

        To enable free monitoring, run the following command: db.enableFreeMonitoring()
        To permanently disable this reminder, run the following command: db.disableFreeMonitoring()
---
> db
test
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
web11   0.000GB
> use web11
switched to db web11
> show collections
user
> db.user.find({"movies_name":"Simple Men"}).pretty()
{
        "_id" : ObjectId("614e0e620c06b2951a7cad50"),
        "id" : ObjectId("614e0c8ffc13ae423d000003"),
        "movies_name" : "Simple Men",
        "movies_genre" : "Comedy|Drama",
        "production_year" : 1994,
        "budget" : 54
}
> db.user.find({movies_name:{$ne"Simple Men"}}).pretty()
uncaught exception: SyntaxError: missing : after property id :
@(shell):1:30
> db.user.find({movies_name:{$ne:"Simple Men"}}).pretty()
{
        "_id" : ObjectId("614e0e620c06b2951a7cad4d"),
        "id" : ObjectId("614e0c8ffc13ae423d000000"),
        "movies_name" : "Young Sherlock Holmes",
        "movies_genre" : "Action|Adventure|Children|Fantasy|Mystery|Thriller",
        "production_year" : 1992,
        "budget" : 2
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad4e"),
        "id" : ObjectId("614e0c8ffc13ae423d000001"),
        "movies_name" : "Anna: 6-18 (Anna: Ot shesti do vosemnadtsati)",
        "movies_genre" : "Documentary",
        "production_year" : 1990,
        "budget" : 80
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad4f"),
        "id" : ObjectId("614e0c8ffc13ae423d000002"),
        "movies_name" : "Angriest Man in Brooklyn, The",
        "movies_genre" : "Comedy|Drama",
        "production_year" : 2009,
        "budget" : 90
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad51"),
        "id" : ObjectId("614e0c8ffc13ae423d000004"),
        "movies_name" : "Dinner at Eight",
        "movies_genre" : "Comedy|Drama|Romance",
        "production_year" : 2004,
        "budget" : 81
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad52"),
        "id" : ObjectId("614e0c8ffc13ae423d000005"),
        "movies_name" : "The Third Reich: The Rise & Fall",
        "movies_genre" : "(no genres listed)",
        "production_year" : 2012,
        "budget" : 76
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad53"),
        "id" : ObjectId("614e0c8ffc13ae423d000006"),
        "movies_name" : "Leap Year",
        "movies_genre" : "Comedy|Romance",
        "production_year" : 2002,
        "budget" : 55
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad54"),
        "id" : ObjectId("614e0c8ffc13ae423d000007"),
        "movies_name" : "Frogs",
        "movies_genre" : "Drama|Horror|Mystery|Thriller",
        "production_year" : 2011,
        "budget" : 48
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad55"),
        "id" : ObjectId("614e0c8ffc13ae423d000008"),
        "movies_name" : "My Dear Enemy (Meotjin haru)",
        "movies_genre" : "Drama|Romance",
        "production_year" : 2011,
        "budget" : 100
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad56"),
        "id" : ObjectId("614e0c8ffc13ae423d000009"),
        "movies_name" : "Beyond Re-Animator",
        "movies_genre" : "Horror",
        "production_year" : 2005,
        "budget" : 79
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad57"),
        "id" : ObjectId("614e0c8ffc13ae423d00000a"),
        "movies_name" : "Solas",
        "movies_genre" : "Drama",
        "production_year" : 2000,
        "budget" : 57
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad58"),
        "id" : ObjectId("614e0c8ffc13ae423d00000b"),
        "movies_name" : "Thirty Day Princess",
        "movies_genre" : "Comedy|Romance",
        "production_year" : 2012,
        "budget" : 41
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad59"),
        "id" : ObjectId("614e0c8ffc13ae423d00000c"),
        "movies_name" : "Scorpion King, The",
        "movies_genre" : "Action|Adventure|Fantasy",
        "production_year" : 1997,
        "budget" : 92
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad5a"),
        "id" : ObjectId("614e0c8ffc13ae423d00000d"),
        "movies_name" : "Gymnast, The",
        "movies_genre" : "Drama|Romance",
        "production_year" : 2005,
        "budget" : 11
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad5b"),
        "id" : ObjectId("614e0c8ffc13ae423d00000e"),
        "movies_name" : "Charleston",
        "movies_genre" : "Comedy|Crime",
        "production_year" : 1993,
        "budget" : 80
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad5c"),
        "id" : ObjectId("614e0c8ffc13ae423d00000f"),
        "movies_name" : "Times of Harvey Milk, The",
        "movies_genre" : "Documentary",
        "production_year" : 2007,
        "budget" : 16
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad5d"),
        "id" : ObjectId("614e0c8ffc13ae423d000010"),
        "movies_name" : "Rock the Boat",
        "movies_genre" : "Animation",
        "production_year" : 1999,
        "budget" : 81
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad5e"),
        "id" : ObjectId("614e0c8ffc13ae423d000011"),
        "movies_name" : "Holiday",
        "movies_genre" : "Comedy|Drama|Romance",
        "production_year" : 1995,
        "budget" : 7
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad5f"),
        "id" : ObjectId("614e0c8ffc13ae423d000012"),
        "movies_name" : "The Big Cube",
        "movies_genre" : "Mystery|Thriller",
        "production_year" : 1996,
        "budget" : 13
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad60"),
        "id" : ObjectId("614e0c8ffc13ae423d000013"),
        "movies_name" : "Our Daily Bread (Unser täglich Brot)",
        "movies_genre" : "Documentary",
        "production_year" : 2009,
        "budget" : 11
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad61"),
        "id" : ObjectId("614e0c8ffc13ae423d000014"),
        "movies_name" : "Pretty Devils",
        "movies_genre" : "Comedy|Drama",
        "production_year" : 2006,
        "budget" : 35
}
Type "it" for more
>
> db.user.find({and:[{budget:{$gt:9000}},{budget:$lt:20000}}]})
uncaught exception: SyntaxError: missing } after property list :
@(shell):1:50
> db.user.find({and:[{budget:{$gt:9000}},{budget:{$lt:20000}}]})
> db.user.find({$or:[{budget:{$lt:9000}},{budget:{$lt:20000}}]})
{ "_id" : ObjectId("614e0e620c06b2951a7cad4d"), "id" : ObjectId("614e0c8ffc13ae423d000000"), "movies_name" : "Young Sherlock Holmes", "movies_genre" : "Action|Adventure|Children|Fantasy|Mystery|Thriller", "production_year" : 1992, "budget" : 2 }
{ "_id" : ObjectId("614e0e620c06b2951a7cad4e"), "id" : ObjectId("614e0c8ffc13ae423d000001"), "movies_name" : "Anna: 6-18 (Anna: Ot shesti do vosemnadtsati)", "movies_genre" : "Documentary", "production_year" : 1990, "budget" : 80 }
{ "_id" : ObjectId("614e0e620c06b2951a7cad4f"), "id" : ObjectId("614e0c8ffc13ae423d000002"), "movies_name" : "Angriest Man in Brooklyn, The", "movies_genre" : "Comedy|Drama", "production_year" : 2009, "budget" : 90 }
{ "_id" : ObjectId("614e0e620c06b2951a7cad50"), "id" : ObjectId("614e0c8ffc13ae423d000003"), "movies_name" : "Simple Men", "movies_genre" : "Comedy|Drama", "production_year" : 1994, "budget" : 54 }
{ "_id" : ObjectId("614e0e620c06b2951a7cad51"), "id" : ObjectId("614e0c8ffc13ae423d000004"), "movies_name" : "Dinner at Eight", "movies_genre" : "Comedy|Drama|Romance", "production_year" : 2004, "budget" : 81 }
{ "_id" : ObjectId("614e0e620c06b2951a7cad52"), "id" : ObjectId("614e0c8ffc13ae423d000005"), "movies_name" : "The Third Reich: The Rise & Fall", "movies_genre" : "(no genres listed)", "production_year" : 2012, "budget" : 76 }
{ "_id" : ObjectId("614e0e620c06b2951a7cad53"), "id" : ObjectId("614e0c8ffc13ae423d000006"), "movies_name" : "Leap Year", "movies_genre" : "Comedy|Romance", "production_year" : 2002, "budget" : 55 }
{ "_id" : ObjectId("614e0e620c06b2951a7cad54"), "id" : ObjectId("614e0c8ffc13ae423d000007"), "movies_name" : "Frogs", "movies_genre" : "Drama|Horror|Mystery|Thriller", "production_year" : 2011, "budget" : 48 }
{ "_id" : ObjectId("614e0e620c06b2951a7cad55"), "id" : ObjectId("614e0c8ffc13ae423d000008"), "movies_name" : "My Dear Enemy (Meotjin haru)", "movies_genre" : "Drama|Romance", "production_year" : 2011, "budget" : 100 }
{ "_id" : ObjectId("614e0e620c06b2951a7cad56"), "id" : ObjectId("614e0c8ffc13ae423d000009"), "movies_name" : "Beyond Re-Animator", "movies_genre" : "Horror", "production_year" : 2005, "budget" : 79 }
{ "_id" : ObjectId("614e0e620c06b2951a7cad57"), "id" : ObjectId("614e0c8ffc13ae423d00000a"), "movies_name" : "Solas", "movies_genre" : "Drama", "production_year" : 2000, "budget" : 57 }
{ "_id" : ObjectId("614e0e620c06b2951a7cad58"), "id" : ObjectId("614e0c8ffc13ae423d00000b"), "movies_name" : "Thirty Day Princess", "movies_genre" : "Comedy|Romance", "production_year" : 2012, "budget" : 41 }
{ "_id" : ObjectId("614e0e620c06b2951a7cad59"), "id" : ObjectId("614e0c8ffc13ae423d00000c"), "movies_name" : "Scorpion King, The", "movies_genre" : "Action|Adventure|Fantasy", "production_year" : 1997, "budget" : 92 }
{ "_id" : ObjectId("614e0e620c06b2951a7cad5a"), "id" : ObjectId("614e0c8ffc13ae423d00000d"), "movies_name" : "Gymnast, The", "movies_genre" : "Drama|Romance", "production_year" : 2005, "budget" : 11 }
{ "_id" : ObjectId("614e0e620c06b2951a7cad5b"), "id" : ObjectId("614e0c8ffc13ae423d00000e"), "movies_name" : "Charleston", "movies_genre" : "Comedy|Crime", "production_year" : 1993, "budget" : 80 }
{ "_id" : ObjectId("614e0e620c06b2951a7cad5c"), "id" : ObjectId("614e0c8ffc13ae423d00000f"), "movies_name" : "Times of Harvey Milk, The", "movies_genre" : "Documentary", "production_year" : 2007, "budget" : 16 }
{ "_id" : ObjectId("614e0e620c06b2951a7cad5d"), "id" : ObjectId("614e0c8ffc13ae423d000010"), "movies_name" : "Rock the Boat", "movies_genre" : "Animation", "production_year" : 1999, "budget" : 81 }
{ "_id" : ObjectId("614e0e620c06b2951a7cad5e"), "id" : ObjectId("614e0c8ffc13ae423d000011"), "movies_name" : "Holiday", "movies_genre" : "Comedy|Drama|Romance", "production_year" : 1995, "budget" : 7 }
{ "_id" : ObjectId("614e0e620c06b2951a7cad5f"), "id" : ObjectId("614e0c8ffc13ae423d000012"), "movies_name" : "The Big Cube", "movies_genre" : "Mystery|Thriller", "production_year" : 1996, "budget" : 13 }
{ "_id" : ObjectId("614e0e620c06b2951a7cad60"), "id" : ObjectId("614e0c8ffc13ae423d000013"), "movies_name" : "Our Daily Bread (Unser täglich Brot)", "movies_genre" : "Documentary", "production_year" : 2009, "budget" : 11 }
Type "it" for more
> db.user.find({$or:[{budget:{$lt:9000}},{budget:{$lt:20000}}]}).pretty()
{
        "_id" : ObjectId("614e0e620c06b2951a7cad4d"),
        "id" : ObjectId("614e0c8ffc13ae423d000000"),
        "movies_name" : "Young Sherlock Holmes",
        "movies_genre" : "Action|Adventure|Children|Fantasy|Mystery|Thriller",
        "production_year" : 1992,
        "budget" : 2
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad4e"),
        "id" : ObjectId("614e0c8ffc13ae423d000001"),
        "movies_name" : "Anna: 6-18 (Anna: Ot shesti do vosemnadtsati)",
        "movies_genre" : "Documentary",
        "production_year" : 1990,
        "budget" : 80
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad4f"),
        "id" : ObjectId("614e0c8ffc13ae423d000002"),
        "movies_name" : "Angriest Man in Brooklyn, The",
        "movies_genre" : "Comedy|Drama",
        "production_year" : 2009,
        "budget" : 90
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad50"),
        "id" : ObjectId("614e0c8ffc13ae423d000003"),
        "movies_name" : "Simple Men",
        "movies_genre" : "Comedy|Drama",
        "production_year" : 1994,
        "budget" : 54
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad51"),
        "id" : ObjectId("614e0c8ffc13ae423d000004"),
        "movies_name" : "Dinner at Eight",
        "movies_genre" : "Comedy|Drama|Romance",
        "production_year" : 2004,
        "budget" : 81
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad52"),
        "id" : ObjectId("614e0c8ffc13ae423d000005"),
        "movies_name" : "The Third Reich: The Rise & Fall",
        "movies_genre" : "(no genres listed)",
        "production_year" : 2012,
        "budget" : 76
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad53"),
        "id" : ObjectId("614e0c8ffc13ae423d000006"),
        "movies_name" : "Leap Year",
        "movies_genre" : "Comedy|Romance",
        "production_year" : 2002,
        "budget" : 55
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad54"),
        "id" : ObjectId("614e0c8ffc13ae423d000007"),
        "movies_name" : "Frogs",
        "movies_genre" : "Drama|Horror|Mystery|Thriller",
        "production_year" : 2011,
        "budget" : 48
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad55"),
        "id" : ObjectId("614e0c8ffc13ae423d000008"),
        "movies_name" : "My Dear Enemy (Meotjin haru)",
        "movies_genre" : "Drama|Romance",
        "production_year" : 2011,
        "budget" : 100
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad56"),
        "id" : ObjectId("614e0c8ffc13ae423d000009"),
        "movies_name" : "Beyond Re-Animator",
        "movies_genre" : "Horror",
        "production_year" : 2005,
        "budget" : 79
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad57"),
        "id" : ObjectId("614e0c8ffc13ae423d00000a"),
        "movies_name" : "Solas",
        "movies_genre" : "Drama",
        "production_year" : 2000,
        "budget" : 57
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad58"),
        "id" : ObjectId("614e0c8ffc13ae423d00000b"),
        "movies_name" : "Thirty Day Princess",
        "movies_genre" : "Comedy|Romance",
        "production_year" : 2012,
        "budget" : 41
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad59"),
        "id" : ObjectId("614e0c8ffc13ae423d00000c"),
        "movies_name" : "Scorpion King, The",
        "movies_genre" : "Action|Adventure|Fantasy",
        "production_year" : 1997,
        "budget" : 92
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad5a"),
        "id" : ObjectId("614e0c8ffc13ae423d00000d"),
        "movies_name" : "Gymnast, The",
        "movies_genre" : "Drama|Romance",
        "production_year" : 2005,
        "budget" : 11
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad5b"),
        "id" : ObjectId("614e0c8ffc13ae423d00000e"),
        "movies_name" : "Charleston",
        "movies_genre" : "Comedy|Crime",
        "production_year" : 1993,
        "budget" : 80
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad5c"),
        "id" : ObjectId("614e0c8ffc13ae423d00000f"),
        "movies_name" : "Times of Harvey Milk, The",
        "movies_genre" : "Documentary",
        "production_year" : 2007,
        "budget" : 16
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad5d"),
        "id" : ObjectId("614e0c8ffc13ae423d000010"),
        "movies_name" : "Rock the Boat",
        "movies_genre" : "Animation",
        "production_year" : 1999,
        "budget" : 81
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad5e"),
        "id" : ObjectId("614e0c8ffc13ae423d000011"),
        "movies_name" : "Holiday",
        "movies_genre" : "Comedy|Drama|Romance",
        "production_year" : 1995,
        "budget" : 7
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad5f"),
        "id" : ObjectId("614e0c8ffc13ae423d000012"),
        "movies_name" : "The Big Cube",
        "movies_genre" : "Mystery|Thriller",
        "production_year" : 1996,
        "budget" : 13
}
{
        "_id" : ObjectId("614e0e620c06b2951a7cad60"),
        "id" : ObjectId("614e0c8ffc13ae423d000013"),
        "movies_name" : "Our Daily Bread (Unser täglich Brot)",
        "movies_genre" : "Documentary",
        "production_year" : 2009,
        "budget" : 11
}
Type "it" for more
>


