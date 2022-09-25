const { Router } = require('express')
const router = Router()
const {
  allCategory,
  insertCategory,
  onecategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/catecorias.controller')

router.get('/categorias', allCategory)
router.get('/categorias/:id', onecategory)
router.post('/categorias', insertCategory)
router.put('/categorias/', updateCategory)
router.delete('/categorias/:id', deleteCategory)

module.exports = router
