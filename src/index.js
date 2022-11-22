const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const port = 4000

const categoriaRoutes = require('./routes/category.routes')
const productRoutes = require('./routes/productRoutes')
const cartRoutes = require('./routes/cartRoutes')
const historyCartRoutes = require('./routes/historyCartRoutes')


const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use(categoriaRoutes)
app.use(productRoutes)
app.use(cartRoutes)
app.use(historyCartRoutes)


app.use((error, req, res, next) => {
  return res.json({ message: error.message })
})

app.listen(port)
console.log(`el puerto ${port} es del servidor de backend`)
