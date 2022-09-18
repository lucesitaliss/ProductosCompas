const pool = require('../db')

const allCategoria = async (req, res) => {
  const result = await pool.query('SELECT* FROM categorias')
  console.log(result)
  res.json(result.rows[0])
}

const insertCategoria = async (req, res) => {
  const { categoria } = req.body

  try {
    const result = await pool.query(
      'INSERT INTO categorias (nombrecat) VALUES ($1) RETURNING *',
      [categoria],
    )

    res.json(result.rows[0])
  } catch (error) {
    res.json({ error: error.mesage })
  }
}

module.exports = {
  allCategoria,
  insertCategoria,
}
