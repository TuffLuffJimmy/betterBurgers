DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(60) NOT NULL,
  devoured BOOLEAN DEFAULT FALSE
);