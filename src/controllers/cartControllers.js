const pool = require('../db')

const getCart = async (req, res, next) => {
  try {
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
    res.json(result.rows)
  } catch (error) {
    next(error)
  }
}

const addCart = async (req, res, next) => {
  try {
    const { id } = req.body
    const result = await pool.query(
      'INSERT INTO cart (product_id) VALUES ($1)RETURNING*',
      [product.id],
    )
    res.json(result.rows[0])
  } catch (error) {
    next(error)
  }
}

const deleteAllCart = async (req, res, next) => {
  const result = pool.query('truncate cart')
  res.send('La Tabla Cart ha sido vaciada')
}

module.exports = {
  getCart,
  addCart,
  deleteAllCart,
}
