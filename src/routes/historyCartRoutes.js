const {Router} = require('express')
const router = Router()

const {insertHistories} = require('../controllers/historyCartControllers')

router.post('/history', insertHistories)

module.exports = router