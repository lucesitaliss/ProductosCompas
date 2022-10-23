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
    state_id integer REFERENCES statuses (id_state),
    
);
ALTER TABLE products ADD COLUMN checked boolean default false;
ALTER TABLE products DROP COLUMN checked; 

CREATE TABLE products_seleted(
    id_cart SERIAL PRIMARY KEY,
    products_select jsonb
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





Insert
 
 INSERT INTO statuses (name_state)
 VALUES ('activo');
 INSERT INTO statuses (name_state)
 VALUES ('inactivo');

 
 INSERT INTO cart (product_id)
 values (2);




INSERT INTO history_cart (product_id, fecha)
select product_id,  current_timestamp from cart;


Querys

SELECT * FROM categorys;

Todas las categorias y productos Activos
 SELECT categorys.id_category,
  categorys.name_category, 
  products.name_product,
  products.id_product,
  products.category_id,
  cart.product_id 
  FROM categorys
  JOIN products ON categorys.id_category = products.category_id
  JOIN cart ON cart.product_id = products.id_product;

Producto de una categoria
SELECT * 
FROM products
JOIN categorys ON categorys.id_category = products.category_id
where categorys.id_category =1;



para cuando se necesita poner un campo json

 const cartSeleted = req.body
    console.log(JSON.stringify(cartSeleted))
    const result = await pool.query(
      `INSERT INTO products_seleted (products_select) SELECT * FROM jsonb_array_elements($1::jsonb)`,
      [JSON.stringify(cartSeleted)],
    )


