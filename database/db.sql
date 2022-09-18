CREATE DATABASE comprascasadb

CREATE TABLE categorias(
    idcat SERIAL PRIMARY KEY,
    nombrecat VARCHAR(255) UNIQUE

);

CREATE TABLE productos(
    idpro SERIAL PRIMARY KEY,
    nombreprod VARCHAR(255) UNIQUE
    cat_id FOREIGN KEY .....
);

