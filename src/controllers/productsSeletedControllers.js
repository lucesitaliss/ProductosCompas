const pool = require('../db')

const insertProductsSeleted = async (req, res, next) => {
  try {
    const cartSeleted = req.body
    const result = await pool.query(
      `insert into products_seleted (products_select) values (Array[1,2]) RETURNING*`,
    )

    res.json(result.rows)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  insertProductsSeleted,
}
