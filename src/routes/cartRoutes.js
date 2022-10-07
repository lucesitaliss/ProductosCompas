const { Router } = require('express')
const router = Router()
const { getProductsOfCategory } = require('../controllers/cartControllers')

router.get('/cart', getProductsOfCategory)

module.exports = router
