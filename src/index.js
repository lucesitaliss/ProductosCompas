const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const categoriarouter = require('./routes/categorias.routes')

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use(categoriarouter)
app.use((err, req, res, next) => {
  return res.json({ message: err.message })
})

app.listen(4000)
console.log('el puerto 4000 es del servidor de backend')
