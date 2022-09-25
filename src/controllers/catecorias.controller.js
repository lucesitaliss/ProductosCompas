const pool = require('../db')

const allCategory = async (req, res, next) => {
  try {
    const result = await pool.query('SELECT* FROM categorias')
    console.log(result)
    res.json(result.rows)
  } catch (error) {
    next(error)
  }
}

const onecategory = async (req, res, next) => {
  const { id } = req.params
  console.log(req.params.id)
  try {
    const result = await pool.query(
      `SELECT* FROM categorias WHERE idcat = $1`,
      [id],
    )
    if (result.rowCount === 0) {
      return res.status(404).json({
        message: 'El id de categoría especificado no existe',
      })
    }
    res.json(result.rows[0])
  } catch (error) {
    next(error)
  }
}

const insertCategory = async (req, res, next) => {
  const { categoria } = req.body
  try {
    const result = await pool.query(
      'INSERT INTO categorias (nombrecat) VALUES ($1) RETURNING *',
      [categoria],
    )
    res.json(result.rows[0])
  } catch (error) {
    next(error)
  }
}

const updateCategory = async (req, res, next) => {
  const { id, categoria } = req.body
  try {
    const result = await pool.query(
      `UPDATE categorias SET nombrecat = $1 WHERE idcat = $2 RETURNING *`,
      [categoria, id],
    )

    res.json(result.rows[0])
  } catch (error) {
    next(error)
  }
}

const deleteCategory = async (req, res, next) => {
  const { id } = req.params
  try {
    const result = await pool.query(
      `DELETE FROM categorias WHERE idcat = $1 RETURNING *`,
      [id],
    )
    if (result.rowCount === 0) {
      return res.status(404).json({
        message: 'El id de categoría especificado no existe',
      })
    }
    res.json(result.rows[0])
  } catch (error) {
    next(error)
  }
}

module.exports = {
  allCategory,
  onecategory,
  insertCategory,
  updateCategory,
  deleteCategory,
}
