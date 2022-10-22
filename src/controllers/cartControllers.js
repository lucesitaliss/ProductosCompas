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

    res.json(productByCategory)
  } catch (error) {
    next(error)
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

const deleteAllCart = async (req, res, next) => {
  const result = pool.query('truncate cart')
  res.send('La Tabla Cart ha sido vaciada')
}

module.exports = {
  getCart,
  addCart,
  deleteAllCart,
}
