import Category from '../models/Category.js'

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll({
      where: { isActive: true },
      order: [['createdAt', 'DESC']],
    })

    res.json(categories)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id)

    if (!category) {
      return res.status(404).json({ message: 'Category not found' })
    }

    res.json(category)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const createCategory = async (req, res) => {
  try {
    const { name, slug, description, image } = req.body

    const category = await Category.create({
      name,
      slug,
      description,
      image,
    })

    res.status(201).json({
      message: 'Category created successfully',
      category,
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateCategory = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id)

    if (!category) {
      return res.status(404).json({ message: 'Category not found' })
    }

    await category.update(req.body)

    res.json({
      message: 'Category updated successfully',
      category,
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id)

    if (!category) {
      return res.status(404).json({ message: 'Category not found' })
    }

    await category.destroy()

    res.json({ message: 'Category deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
