import { Router } from 'express'
import * as controllers from '../controllers/posts.js'

const router = Router()

router.get('/posts', controllers.getPost)
router.get('/posts/:id', controllers.getPosts)
router.post('/posts', controllers.createPost)
router.put('/posts/:id', controllers.updatePost)
router.delete('/posts/:id', controllers.deletePost)

export default router
