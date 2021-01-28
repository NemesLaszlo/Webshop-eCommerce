import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
import connectDB from './database/database.js'

import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()
connectDB()

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('API is running!')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () =>
  console.log(
    `Server listening at http://localhost:${port} and running mode is ${process.env.NODE_ENV}`.yellow.bold
  )
)