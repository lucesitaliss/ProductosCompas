const { Router } = require('express')
const router = Router()
const {
  getProducts,
  insertProduct,
  getProductById,
  getCheckedById,
  updateChangeChecked,
  updateProduct,
  updateResetChecked,
  updateDeleteProduct,
  deleteProduct,
  getProductsByCategory,
} = require('../controllers/productsControlers')

router.get('/products', getProducts)
router.get('/product/:id', getProductById)
router.get('/products/category/:id_category', getProductsByCategory)
router.post('/product', insertProduct)
router.put('/product', updateProduct)
router.get('/product/checked/id/:idProduct', getCheckedById)
router.put('/product/checked', updateChangeChecked)
router.put('/products/checked/reset', updateResetChecked)
router.put('/product/delete', updateDeleteProduct)
router.delete('/product/:id', deleteProduct)

module.exports = router
