const pool = require('../db')

const getProductsOfCategory = async (req, res, next) => {
  const result = await pool.query(`
 SELECT 
 categorys.id_category, 
 categorys.name_category, 
 products.name_product,
 products.id_product,
 products.category_id,
 cart.product_id 
 FROM categorys
 JOIN products ON categorys.id_category = products.category_id
 JOIN cart ON cart.product_id = products.id_product;`)
  console.log(result)
  res.json(result.rows)
}

module.exports = {
  getProductsOfCategory,
}
