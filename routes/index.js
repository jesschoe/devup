import { Router } from 'express'
import productsRoutes from './products.js'
import usersRoutes from './users.js'
import postsRoutes from './posts.js'

const router = Router()

router.get('/', (req, res) => res.send('This is the api root!'))

router.use('/', usersRoutes)
router.use('/', productsRoutes)
router.use('/', postsRoutes)

export default router
