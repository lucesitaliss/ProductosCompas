CREATE DATABASE cart;

CREATE TABLE statuses (
    id_state SERIAL PRIMARY KEY,
    name_state VARCHAR (255) UNIQUE
);

CREATE TABLE categorys(
    id_category SERIAL PRIMARY KEY,
    name_category VARCHAR(255) UNIQUE,
    state_id integer REFERENCES statuses (id_state)
);



CREATE TABLE products(
    id_product SERIAL PRIMARY KEY,
    name_product VARCHAR(255) UNIQUE,
    category_id integer REFERENCES categorys(id_category),
    state_id integer REFERENCES statuses (id_state)
);

CREATE TABLE rol(
    id_rol SERIAL PRIMARY KEY,
    rol VARCHAR(255) UNIQUE
);

CREATE TABLE users(
    id_user SERIAL PRIMARY key,
    name_user VARCHAR(255) UNIQUE,
    rol_id integer REFERENCES rol(id_rol)
);

CREATE TABLE cart(
    id_cart SERIAL PRIMARY KEY,
    product_id integer REFERENCES products (id_product)
   
);

CREATE TABLE history_cart (
    id_historycart SERIAL PRIMARY KEY,
    product_id integer REFERENCES products (id_product),
    fecha DATE
);


Querys

SELECT * FROM categorys;


Insert
 
 INSERT INTO statuses (name_state)
 VALUES ('activo');
 INSERT INTO statuses (name_state)
 VALUES ('inactivo');