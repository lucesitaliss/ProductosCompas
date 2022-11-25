const { Router } = require('express')
const router = Router()
const {
  getCategories,
  insertCategory,
  getCategoryById,
  updateCategory,
  updateDeleteCategory,
  deleteCategory,
} = require('../controllers/category.controller')

router.get('/categories', getCategories)
router.get('/category/:id', getCategoryById)
router.post('/category', insertCategory)
router.put('/category/', updateCategory)
router.put('/category/delete/:id', updateDeleteCategory)
router.delete('/category/:id', deleteCategory)

module.exports = router
