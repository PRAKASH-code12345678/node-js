import express from 'express'
import{ allBlogs, create, delte, update }  from '../controllers/blog.js'
import authMiddleware from '../middleware/auth.js'
const router=express.Router()


router.post("/create",authMiddleware, create)
router.delete("/delete/:id",authMiddleware, delte)
router.put("/update/:id",authMiddleware, update)
router.post("/allBlogs", allBlogs)

export default router