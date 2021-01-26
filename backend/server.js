import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './database/database.js'
import products from './data/products.js'

dotenv.config()

connectDB()

const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('API is running!')
})

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id)
    res.json(product)
})

app.listen(port, () =>
  console.log(
    `Server listening at http://localhost:${port} and running mode is ${process.env.NODE_ENV}`.yellow.bold
  )
)