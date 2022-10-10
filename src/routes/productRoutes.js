const { Router } = require('express')
const router = Router()
const {
  getProducts,
  insertProduct,
  getProductById,
  updateProduct,
  updateDeleteProduct,
  deleteProducts,
  getProductByCategory,
} = require('../controllers/productsControlers')

router.get('/products', getProducts)
router.get('/products/:id', getProductById)
router.get('/products/category/:id_category', getProductByCategory)
router.post('/products', insertProduct)
router.put('/products', updateProduct)
router.put('/products/delete', updateDeleteProduct)
router.delete('/products/:id', deleteProducts)

module.exports = router
