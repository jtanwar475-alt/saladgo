import express from 'express'
import {
  createReview,
  getProductReviews,
  updateReview,
  deleteReview,
  markHelpful,
} from '../controllers/reviewController.js'
import { authMiddleware } from '../middleware/auth.js'

const router = express.Router()

router.post('/', authMiddleware, createReview)
router.get('/product/:productId', getProductReviews)
router.put('/:id', authMiddleware, updateReview)
router.delete('/:id', authMiddleware, deleteReview)
router.put('/:id/helpful', markHelpful)

export default router
