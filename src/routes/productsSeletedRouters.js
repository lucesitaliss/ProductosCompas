const { Router } = require('express')
const router = Router()
const {
  insertProductsSeleted,
} = require('../controllers/productsSeletedControllers')

router.post('/productsSeleted', insertProductsSeleted)

module.exports = router
