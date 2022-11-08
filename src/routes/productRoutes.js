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
  deleteProducts,
  getProductByCategory,
} = require('../controllers/productsControlers')

router.get('/products', getProducts)
router.get('/products/:id', getProductById)
router.get('/products/category/:id_category', getProductByCategory)
router.post('/products', insertProduct)
router.put('/products', updateProduct)
router.get('/product/checked/id/:idProduct', getCheckedById)
router.put('/product/checked', updateChangeChecked)
router.put('/products/checked/reset', updateResetChecked)
router.put('/products/delete', updateDeleteProduct)
router.delete('/products/:id', deleteProducts)

module.exports = router
