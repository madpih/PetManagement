DROP TABLE IF EXISTS pet;
CREATE TABLE pet (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL,
code VARCHAR(24) NOT NULL,
type VARCHAR (24) NOT NULl,
color VARCHAR(24) NOT NULL,
country VARCHAR(24) NOT NULL
);

