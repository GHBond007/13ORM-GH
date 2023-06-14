-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;
USE ecommerce_db;


-- Create the tables
CREATE TABLE category (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  category_name VARCHAR(255) NOT NULL
);

CREATE TABLE product (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  product_name VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  stock INTEGER NOT NULL DEFAULT 10,
  category_id INTEGER,
  FOREIGN KEY (category_id) REFERENCES category(id)
);

CREATE TABLE tag (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  tag_name VARCHAR(255)
);

CREATE TABLE product_tag (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  product_id INTEGER,
  tag_id INTEGER,
  FOREIGN KEY (product_id) REFERENCES product(id),
  FOREIGN KEY (tag_id) REFERENCES tag(id)
);
