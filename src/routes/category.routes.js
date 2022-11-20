const { Router } = require('express')
const router = Router()
const {
  getCategorys,
  insertCategory,
  getCategoryById,
  updateCategory,
  updateDeleteCategory,
  deleteCategory,
} = require('../controllers/category.controller')

router.get('/categories', getCategorys)
router.get('/categories/:id', getCategoryById)
router.post('/categories', insertCategory)
router.put('/categories/', updateCategory)
router.put('/categories/delete/:id', updateDeleteCategory)
router.delete('/categories/:id', deleteCategory)

module.exports = router
