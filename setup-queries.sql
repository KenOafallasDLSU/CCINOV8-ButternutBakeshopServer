CREATE DATABASE IF NOT EXISTS salary_db;

DROP TABLE IF EXISTS Persons;
CREATE TABLE Persons (
	id INT(11) PRIMARY KEY AUTO_INCREMENT,
    FirstName varchar(255),
    Hours int
);

INSERT INTO persons SET FirstName="Life", Hours=100;