const pool = require('../db')

const insertProductsSeleted = async (req, res, next) => {
  try {
    const cartSeleted = req.body
    console.log(JSON.stringify(cartSeleted))
    const result = await pool.query(
      `INSERT INTO products_seleted (products_select) SELECT * FROM jsonb_array_elements($1::jsonb)`,
      [JSON.stringify(cartSeleted)],
    )

    res.send('')
  } catch (error) {
    next(error)
  }
}

module.exports = {
  insertProductsSeleted,
}
