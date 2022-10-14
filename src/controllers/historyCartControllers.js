const pool = require('../db')

const insertHistories = async (req, res, next) => {
  try {
    const result = await pool.query(
      'INSERT INTO history_cart (product_id, fecha)select product_id,current_timestamp from cart RETURNING*;',
    )
    res.json(result.rows)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  insertHistories,
}
