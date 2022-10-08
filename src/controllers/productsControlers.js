const pool = require('../db')
const { capitalize } = require('../utils/strings')

const getProducts = async (req, res, next) => {
  try {
    const result = await pool.query('SELECT * FROM products WHERE state_id=1')
    res.json(result.rows)
  } catch (error) {
    next(error)
  }
}

const getProductById = async (req, res, next) => {
  const { id } = req.params
  try {
    const result = await pool.query(
      'SELECT * FROM products WHERE id_product = $1',
      [id],
    )
    res.json(result.rows[0])
  } catch (error) {
    next(error)
  }
}

const insertProduct = async (req, res, next) => {
  const { product, category } = req.body

  try {
    const result = await pool.query(
      'INSERT INTO products(name_product, category_id, state_id) VALUES ($1, $2, $3) RETURNING*',
      [capitalize(product), category, 1],
    )

    res.json(result.rows[0])
  } catch (error) {
    next(error)
  }
}

const updateProduct = async (req, res, next) => {
  const { product, state_id, category, id } = req.body
  const upperProduct = product[0].toUpperCase() + product.slice(1).toLowerCase()
  try {
    const result = await pool.query(
      'UPDATE products SET name_product = $1, state_id = $2, category_id =$3 WHERE id_product=$4 RETURNING*',
      [upperProduct, state_id, category, id],
    )

    res.json(result.rows[0])
  } catch (error) {
    next(error)
  }
}

const updateDeleteProduct = async (req, res, next) => {
  const { id, state_id } = req.body
  try {
    const result = await pool.query(
      'UPDATE products SET state_id =$1 WHERE id_product = $2 RETURNING*',
      [state_id, id],
    )

    res.json(result.rows[0])
  } catch (error) {
    next(error)
  }
}

const deleteProducts = async (req, res, next) => {
  const { id } = req.params
  try {
    const result = await pool.query(
      'DELETE FROM products WHERE id_product = $1 RETURNING*',
      [id],
    )
    res.json(result.rows[0])
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getProducts,
  insertProduct,
  getProductById,
  updateProduct,
  updateDeleteProduct,
  deleteProducts,
}
