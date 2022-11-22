const pool = require('../db')
const { capitalize } = require('../utils/strings')

const getProducts = async (req, res, next) => {
  try {
    const result = await pool.query(
      'SELECT * FROM products WHERE state_id=1  ORDER BY name_product',
    )
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

const getProductsByCategory = async (req, res, next) => {
  const { id_category } = req.params
  try {
    const result = await pool.query(
      `
    SELECT * 
    FROM products
    JOIN categories ON categories.id_category = products.category_id
    where categories.id_category = $1 
    ORDER BY name_product
    `,
      [id_category],
    )
    res.json(result.rows)
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
  try {
    const result = await pool.query(
      'UPDATE products SET name_product = $1, state_id = $2, category_id =$3 WHERE id_product=$4 RETURNING*',
      [capitalize(product), state_id, category, id],
    )

    res.json(result.rows[0])
  } catch (error) {
    next(error)
  }
}

const getCheckedById = async (req, res, next) => {
  try {
    const { idProduct } = req.params
    const result = await pool.query(
      'SELECT checked from products where id_product = $1 ',
      [idProduct],
    )
    res.json(result.rows[0])
  } catch (error) {
    next(error)
  }
}

const updateChangeChecked = async (req, res, next) => {
  try {
    const { valueChecked, idProduct } = req.body
    const result = await pool.query(
      'UPDATE products SET checked=$1 where id_product=$2 RETURNING*',
      [valueChecked, idProduct],
    )

    res.json(result.rows)
  } catch (error) {
    next(error)
  }
}
const updateResetChecked = async (req, res, next) => {
  try {
    const result = pool.query('UPDATE products SET checked=false')
    res.json((await result).rows)
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

const deleteProduct = async (req, res, next) => {
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
  getCheckedById,
  updateChangeChecked,
  updateResetChecked,
  updateDeleteProduct,
  deleteProduct,
  getProductsByCategory,
}
