#/bin/bash

USER=root
PASS=secret
DB=test

echo "drop database if exists $DB; create database $DB" | mysql -u$USER -p$PASS
cat /data/dev/schema.sql | mysql -u$USER -p$PASS $DB
