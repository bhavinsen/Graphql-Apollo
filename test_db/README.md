# How to run:

* Running the database
* Connecting to the database
* Removing the database

## Running the database:

On linux in the project's root run `sudo docker-compose up`

## Connecting to the database

```
    $ mysql -h::  -uroot -psecret test
```

## Removing the database:

Run 'sudo docker-compose down'

## Common commands

List all databases on the server.
mysql> show databases;

Switch to a database.
mysql> use [db name];

To see all the tables in the db.
mysql> show tables;

To see table's field formats.
mysql> describe [table name];
