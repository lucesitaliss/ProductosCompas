const pool = require('../db')
const { capitalize } = require('../utils/strings')
const getCategorys = async (req, res, next) => {
  try {
    const result = await pool.query(
      'SELECT* FROM categories WHERE state_id = 1',
    )
    res.json(result.rows)
  } catch (error) {
    next(error)
  }
}

const getCategoryById = async (req, res, next) => {
  const { id } = req.params
  try {
    const result = await pool.query(
      `SELECT* FROM categories WHERE id_category = $1`,
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
  const { category } = req.body

  try {
    const result = await pool.query(
      'INSERT INTO categories (name_category, state_id) VALUES ($1, $2) RETURNING *',
      [capitalize(category), 1],
    )

    res.json(result.rows[0])
  } catch (error) {
    next(error)
  }
}

const updateCategory = async (req, res, next) => {
  const { id, category, state_id } = req.body
  try {
    const result = await pool.query(
      `UPDATE categories SET name_category = $1,  state_id = $3 WHERE id_category = $2 RETURNING *`,
      [category, id, state_id],
    )

    res.json(result.rows[0])
  } catch (error) {
    next(error)
  }
}

const updateDeleteCategory = async (req, res, next) => {
  const  {id}  = req.params 
  try {
    const result = await pool.query(
      'UPDATE categories SET state_id= 2 WHERE id_category= $1 RETURNING*',
      [id],
    )
    console.log(result)
    res.json(result.rows[0])
  } catch (error) {
    next(error)
  }
}

const deleteCategory = async (req, res, next) => {
  const { id } = req.params
  try {
    const result = await pool.query(
      `DELETE FROM categories WHERE id_category = $1 RETURNING *`,
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
  getCategorys,
  getCategoryById,
  insertCategory,
  updateCategory,
  deleteCategory,
  updateDeleteCategory,
}
