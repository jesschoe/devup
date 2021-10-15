import { Router } from 'express'
import * as controllers from '../controllers/products.js'
import restrict from '../helpers/restrict.js'

const router = Router()

router.get('/products', controllers.getProducts)
router.get('/products/:id', controllers.getProduct)
router.post('/products', admin, controllers.createProduct)
router.put('/products/:id', admin, controllers.updateProduct)
router.delete('/products/:id', admin, controllers.deleteProduct)

export default router
