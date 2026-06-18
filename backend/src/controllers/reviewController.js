import Review from '../models/Review.js'

export const createReview = async (req, res) => {
  try {
    const { productId, rating, title, comment } = req.body

    const review = await Review.create({
      productId,
      userId: req.user.id,
      rating,
      title,
      comment,
    })

    res.status(201).json({
      message: 'Review created successfully',
      review,
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getProductReviews = async (req, res) => {
  try {
    const { productId } = req.params
    const reviews = await Review.findAll({
      where: { productId },
      order: [['createdAt', 'DESC']],
    })

    res.json(reviews)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateReview = async (req, res) => {
  try {
    const { rating, title, comment } = req.body
    const review = await Review.findByPk(req.params.id)

    if (!review || review.userId !== req.user.id) {
      return res.status(404).json({ message: 'Review not found' })
    }

    await review.update({ rating, title, comment })

    res.json({
      message: 'Review updated successfully',
      review,
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteReview = async (req, res) => {
  try {
    const review = await Review.findByPk(req.params.id)

    if (!review || review.userId !== req.user.id) {
      return res.status(404).json({ message: 'Review not found' })
    }

    await review.destroy()

    res.json({ message: 'Review deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const markHelpful = async (req, res) => {
  try {
    const review = await Review.findByPk(req.params.id)

    if (!review) {
      return res.status(404).json({ message: 'Review not found' })
    }

    review.helpfulCount += 1
    await review.save()

    res.json({ message: 'Marked as helpful', review })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
