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
    where categories.id_category = $1 and products.state_id=1 
    ORDER BY id_product
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
      'INSERT INTO products(name_product, category_id, state_id) VALUES ($1, $2, 1) RETURNING*',
      [capitalize(product), category],
    )

    res.json(result.rows[0])
  } catch (error) {
    next(error)
  }
}

const updateProduct = async (req, res, next) => {
  const { product, id } = req.body
  console.log(product, id)
  try {
    const result = await pool.query(
      'UPDATE products SET name_product = $1 WHERE id_product = $2 RETURNING*',
      [capitalize(product), id],
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

const updateResetCheckedById = async (req, res, next) => {
  const { id } = req.params
  console.log(id)

  const result = pool.query(
    'UPDATE products SET checked=false where id_product =$1 RETURNING*',
    [id],
  )
  res.json((await result).rows[0])
}

const updateResetChecked = async (req, res, next) => {
  try {
    const result = pool.query('UPDATE products SET checked=false')
    res.json(result.rows[0])
  } catch (error) {
    next(error)
  }
}

const updateDeleteProduct = async (req, res, next) => {
  const { id } = req.body
  try {
    const result = await pool.query(
      'UPDATE products SET state_id =2 WHERE id_product = $1 RETURNING*',
      [id],
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
  updateResetCheckedById,
  updateResetChecked,
  updateDeleteProduct,
  deleteProduct,
  getProductsByCategory,
}
