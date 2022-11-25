const pool = require('../db')

const getCart = async (req, res, next) => {
  try {
    const result = await pool.query(`
   SELECT 
   categories.id_category, 
   categories.name_category, 
   products.name_product,
   products.id_product,
   products.category_id,
   cart.product_id,
   cart.selected,
   cart.id_cart
   FROM categories
   JOIN products ON categories.id_category = products.category_id
   JOIN cart ON cart.product_id = products.id_product
   ORDER BY products.id_product;`)

    const productByCategory = {}
    const productsByCategorys = []

    result.rows.forEach((product) => {
      if (!productByCategory[product.name_category]) {
        productByCategory[product.name_category] = [product]
        return productByCategory
      }

      productByCategory[product.name_category].push(product)

      return productByCategory
    })
    productsByCategorys.push(productByCategory)

    res.status(200).json(productByCategory)
  } catch (error) {
    return next(error)
  }
}

const addCart = async (req, res, next) => {
  try {
    const idProducts = req.body

    const result = await Promise.all(
      idProducts.map(async (product) => {
        return await pool.query(
          'INSERT INTO cart (product_id) VALUES ($1)RETURNING*',
          [product.id_product],
        )
      }),
    )

    res.json(result.rows)
  } catch (error) {
    next(error)
  }
}

const updateInvertSeleted = async (req, res, next) => {
  try {
    const { id, selected } = req.body
    const result = await pool.query(
      'UPDATE cart SET selected=$1 where id_cart=$2 RETURNING*',
      [!selected, id],
    )
    res.json(result)
  } catch (error) {
    next(error)
  }
}

const deleteCartById = async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await pool.query(
      'DELETE FROM cart WHERE id_cart = $1 RETURNING*',
      [id],
    )
    res.json(result.rows[0])
  } catch (error) {
    next(error)
  }
}

const deleteAllCart = async (req, res, next) => {
  try {
    const result = await pool.query('truncate cart')
    res.send('La Tabla Cart ha sido vaciada')
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getCart,
  addCart,
  updateInvertSeleted,
  deleteCartById,
  deleteAllCart,
}
