--liquibase formatted sql

--changeset madis:1
DROP TABLE IF EXISTS pet;
CREATE TABLE pet (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL,
code VARCHAR(24) NOT NULL,
type VARCHAR (24) NOT NULl,
color VARCHAR(24) NOT NULL,
country VARCHAR(24) NOT NULL
);

--changeset madis:2
DROP TABLE IF EXISTS person;
CREATE TABLE person (
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   username VARCHAR(255) NOT NULL,
   emailid VARCHAR(255) NOT NULL,
   password VARCHAR (255) NOT NULL

 );

 --changeset madis:3
 INSERT INTO Pet (name, code, type, color, country) VALUES ('Kiisu','2202122113','Cat','Yellow','Estonia' );
 INSERT INTO Pet (name, code, type, color, country) VALUES ('Pontu','22021221145','Dog','White','Norway' );
 INSERT INTO Pet (name, code, type, color, country) VALUES ('Triibik','22021221145','Cat','Black','Latvia' );


 --changeset madis:4
  INSERT INTO person (emailid, username, password) VALUES ('madis1@test.com', 'Kasutaja1', 'test1');
 INSERT INTO person (emailid, username, password) VALUES ('madis2@test.com', 'Kasutaja2', 'test2');
 INSERT INTO person (emailid, username, password) VALUES ('madis3@test.com', 'Kasutaja3', 'test3');
