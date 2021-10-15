import { Router } from 'express'
import * as controllers from '../controllers/user.js'

const router = Router()

router.post('/signup', controllers.signUp)
router.post('/signin', controllers.signIn)
router.get('/verify', controllers.verify)
//router.post('/change-password', controllers.changePassword)

router.get('/users/:id', controllers.getUser)
router.get('/users', controllers.getUsers)
router.get('/users/:id/products', controllers.getUserProducts)
router.get('/users/:id/products/:productId', controllers.getUserProduct)

router.get("/users/:id/wishList", controllers.getWishList)
router.put("/users/:userId/wishList/:productId", controllers.addToWishList)
router.delete("/users/:id/wishList/:productId", controllers.removeFromWishList)
router.delete("/users/:id/wishList", controllers.clearWishList)
export default router
