CREATE DATABASE comprascasadb

CREATE TABLE categorias(
    idcat SERIAL PRIMARY KEY,
    nombrecat VARCHAR(255) UNIQUE

);

CREATE TABLE productos(
    idpro SERIAL PRIMARY KEY,
    nombreprod VARCHAR(255) UNIQUE,
    cat_id integer REFERENCES categorias (idcat)
);

CREATE TABLE personas(
    idper SERIAL PRIMARY key,
    nombreper VARCHAR(255) UNIQUE
);

CREATE TABLE listacompra(
    idlc SERIAL PRIMARY KEY,
    productoid integer REFERENCES productos (idpro),
    personaid integer REFERENCES personas (idper),
    fecha DATE
);

CREATE TABLE historicocompra (
    idlch SERIAL PRIMARY KEY,
    productoid integer REFERENCES productos (idpro),
    personaid integer REFERENCES personas (idper), 
    fecha DATE
);