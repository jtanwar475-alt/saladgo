import Product from '../models/Product.js'
import Category from '../models/Category.js'

export const getProducts = async (req, res) => {
  try {
    const { categoryId, search, limit = 10, offset = 0 } = req.query

    const where = { isActive: true }
    if (categoryId) where.categoryId = categoryId
    if (search) {
      where.name = { [require('sequelize').Op.iLike]: `%${search}%` }
    }

    const products = await Product.findAndCountAll({
      where,
      include: [{ model: Category, attributes: ['name'] }],
      limit: parseInt(limit),
      offset: parseInt(offset),
      order: [['createdAt', 'DESC']],
    })

    res.json({
      total: products.count,
      products: products.rows,
      limit,
      offset,
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [{ model: Category }],
    })

    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }

    res.json(product)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body)
    res.status(201).json({
      message: 'Product created successfully',
      product,
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id)

    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }

    await product.update(req.body)
    res.json({
      message: 'Product updated successfully',
      product,
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id)

    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }

    await product.destroy()
    res.json({ message: 'Product deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
