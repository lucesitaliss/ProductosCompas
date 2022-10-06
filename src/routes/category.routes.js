const { Router } = require('express')
const router = Router()
const {
  getCategorys,
  insertCategory,
  getCategoryById,
  updateCategory,
  updateDeleteCategory,
  deleteCategory,
} = require('../controllers/catecory.controller')

router.get('/categorys', getCategorys)
router.get('/categorys/:id', getCategoryById)
router.post('/categorys', insertCategory)
router.put('/categorys/', updateCategory)
router.put('/categorys/delete', updateDeleteCategory)
router.delete('/categorys/:id', deleteCategory)

module.exports = router
