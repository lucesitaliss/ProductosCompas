const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const port = 4000

const categoriarouter = require('./routes/category.routes')

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use(categoriarouter)
app.use((error, req, res, next) => {
  return res.json({message: error.message })
})

app.listen(port)
console.log(`el puerto ${port} es del servidor de backend`)
