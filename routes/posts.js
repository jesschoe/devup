import { Router } from 'express'
import * as controllers from '../controllers/posts.js'
import admin from "../helpers/admin.js"

const router = Router()

router.get('/posts', controllers.getPosts)
router.get('/posts/:id', controllers.getPost)
router.post('/posts', admin, controllers.createPost)
router.put('/posts/:id', admin, controllers.updatePost)
router.delete('/posts/:id', admin, controllers.deletePost)

export default router
