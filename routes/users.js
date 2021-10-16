import { Router } from 'express'
import * as controllers from '../controllers/user.js'

const router = Router()

router.post('/signup', controllers.signUp)
router.post('/signin', controllers.signIn)
router.get('/verify', controllers.verify)
//router.post('/change-password', controllers.changePassword)

router.get('/users/:id', controllers.getUser)
router.get('/users', controllers.getUsers)

router.get("/users/:userId/wishlist", controllers.getWishList)
router.put("/users/:userId/wishlist/:productId", controllers.addToWishList)
router.delete("/users/:userId/wishlist/:productId", controllers.removeFromWishList)
router.delete("/users/:userId/wishlist", controllers.clearWishList)
export default router
