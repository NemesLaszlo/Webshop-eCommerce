import express from 'express'
const router = express.Router()

import {protect, admin} from '../middleware/authMiddleware.js'
import {getProducts, getProductById, deleteProduct, createProduct, updateProduct, createProductReview} from '../controllers/productController.js'

router.route('/').get(getProducts).post(protect, admin, createProduct)
router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct).put(protect, admin, updateProduct)
router.route('/:id/reviews').post(protect, createProductReview)

export default router