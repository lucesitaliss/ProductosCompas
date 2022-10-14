const { Router } = require('express')
const router = Router()
const {
  getCart,
  addCart,
  deleteAllCart,
} = require('../controllers/cartControllers')

router.get('/cart', getCart)
router.post('/cart/', addCart)
router.delete('/cart/', deleteAllCart)

module.exports = router
