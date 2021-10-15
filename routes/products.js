import { Router } from 'express'
import * as controllers from '../controllers/products.js'
import restrict from '../helpers/restrict.js'
import admin from '../helpers/admin.js'

const router = Router()

router.get('/products', controllers.getProducts)
router.get('/products/:id', controllers.getProduct)
router.put('/products/:id/reviews', restrict, controllers.addReview)
router.post('/products', admin, controllers.createProduct)
router.put('/products/:id', admin, controllers.updateProduct)
router.delete('/products/:id', admin, controllers.deleteProduct)

export default router
