const pool = require('../db')

const allCategory = async (req, res) => {
  try {
    const result = await pool.query('SELECT* FROM categorias')
    res.json(result.rows[0])
  } catch (error) {
    console.log(error.messae)
  }
}

const onecategory = async (req, res) => {
  const { id } = req.params
  console.log(req.params.id)
  try {
    const result = await pool.query(
      `SELECT* FROM categorias WHERE idcat = $1`,
      [id],
    )
    res.json(result.rows[0])
  } catch (error) {
    console.log(error.messae)
  }
}

const insertCategory = async (req, res) => {
  const { categoria } = req.body
  console.log('entro aca')
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

const updateCategory = async (req, res) => {
  const { id, categoria } = req.body

  const result = await pool.query(
    `UPDATE categorias SET nombrecat = $1 WHERE idcat = $2 RETURNING *`,
    [categoria, id],
  )

  res.json(result.rows[0])
}

const deleteCategory = async (req, res) => {
  const { id } = req.params
  const result = await pool.query(`DELETE FROM categorias WHERE idcat = $1 RETURNING *`, [
    id,
  ])
  console.log(result)
  res.json(result.rows[0])
}

module.exports = {
  allCategory,
  onecategory,
  insertCategory,
  updateCategory,
  deleteCategory,
}
