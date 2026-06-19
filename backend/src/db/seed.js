import { sequelize } from './config.js'
import Category from '../models/Category.js'
import Product from '../models/Product.js'

const seedDatabase = async () => {
  try {
    // Sync all models with database
    await sequelize.sync({ alter: true })
    console.log('Database synced')

    // Clear existing data
    await Product.destroy({ where: {} })
    await Category.destroy({ where: {} })
    console.log('Cleared existing data')

    // Create Categories
    const categories = await Category.bulkCreate([
      {
        name: 'Cut Vegetables',
        slug: 'cut-vegetables',
        description: 'Fresh cut vegetables ready to use',
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&h=300&fit=crop',
        isActive: true,
      },
      {
        name: 'Fresh Fruits',
        slug: 'fresh-fruits',
        description: 'Seasonal fresh fruits',
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=300&fit=crop',
        isActive: true,
      },
      {
        name: 'Salads',
        slug: 'salads',
        description: 'Pre-made fresh salads',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop',
        isActive: true,
      },
      {
        name: 'Juices',
        slug: 'juices',
        description: 'Fresh pressed juices',
        image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop',
        isActive: true,
      },
      {
        name: 'Smoothies',
        slug: 'smoothies',
        description: 'Healthy smoothie blends',
        image: 'https://images.unsplash.com/photo-1618083479302-1e1f2e67dc84?w=300&h=300&fit=crop',
        isActive: true,
      },
      {
        name: 'Sprouts',
        slug: 'sprouts',
        description: 'Fresh organic sprouts',
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&h=300&fit=crop',
        isActive: true,
      },
      {
        name: 'Exotic Veggies',
        slug: 'exotic-veggies',
        description: 'Exotic vegetables from around the world',
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&h=300&fit=crop',
        isActive: true,
      },
      {
        name: 'Organic',
        slug: 'organic',
        description: 'Certified organic produce',
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&h=300&fit=crop',
        isActive: true,
      },
    ])

    console.log('Categories created')

    // Create Products
    const products = await Product.bulkCreate([
      {
        name: 'Fresh Tomatoes',
        description: 'Juicy and ripe tomatoes perfect for salads and cooking',
        price: 149,
        stock: 50,
        image: 'https://images.unsplash.com/photo-1568695041386-6e725ebd4b78?w=400&h=400&fit=crop',
        categoryId: categories[0].id,
        unit: 'kg',
        weight: 1,
        rating: 4.5,
        isActive: true,
      },
      {
        name: 'Crispy Lettuce',
        description: 'Fresh, crispy lettuce leaves for healthy salads',
        price: 99,
        stock: 40,
        image: 'https://images.unsplash.com/photo-1599599810694-2202a3c0b2f7?w=400&h=400&fit=crop',
        categoryId: categories[0].id,
        unit: 'piece',
        weight: 0.5,
        rating: 4.3,
        isActive: true,
      },
      {
        name: 'Sweet Apples',
        description: 'Crisp and sweet apples full of nutrients',
        price: 199,
        stock: 60,
        image: 'https://images.unsplash.com/photo-1585518419395-fc97c02c4e27?w=400&h=400&fit=crop',
        categoryId: categories[1].id,
        unit: 'kg',
        weight: 1,
        rating: 4.7,
        isActive: true,
      },
      {
        name: 'Fresh Carrots',
        description: 'Orange carrots loaded with beta-carotene',
        price: 129,
        stock: 45,
        image: 'https://images.unsplash.com/photo-1599599810923-9468430262fa?w=400&h=400&fit=crop',
        categoryId: categories[0].id,
        unit: 'kg',
        weight: 1,
        rating: 4.4,
        isActive: true,
      },
      {
        name: 'Banana Bunch',
        description: 'Fresh bananas rich in potassium',
        price: 79,
        stock: 70,
        image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop',
        categoryId: categories[1].id,
        unit: 'kg',
        weight: 1,
        rating: 4.6,
        isActive: true,
      },
      {
        name: 'Mixed Salad',
        description: 'Pre-made mix of fresh vegetables',
        price: 249,
        stock: 30,
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop',
        categoryId: categories[2].id,
        unit: 'kg',
        weight: 0.25,
        rating: 4.5,
        isActive: true,
      },
      {
        name: 'Fresh Juice',
        description: 'Freshly pressed orange juice',
        price: 159,
        stock: 35,
        image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop',
        categoryId: categories[3].id,
        unit: 'ml',
        weight: 250,
        rating: 4.4,
        isActive: true,
      },
      {
        name: 'Spinach',
        description: 'Nutrient-rich spinach leaves',
        price: 89,
        stock: 50,
        image: 'https://images.unsplash.com/photo-1599599810694-2202a3c0b2f7?w=400&h=400&fit=crop',
        categoryId: categories[0].id,
        unit: 'kg',
        weight: 0.5,
        rating: 4.5,
        isActive: true,
      },
      {
        name: 'Mango',
        description: 'Sweet and juicy mangoes',
        price: 180,
        stock: 55,
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop',
        categoryId: categories[1].id,
        unit: 'kg',
        weight: 1,
        rating: 4.8,
        isActive: true,
      },
      {
        name: 'Cucumber',
        description: 'Cool and refreshing cucumbers',
        price: 69,
        stock: 60,
        image: 'https://images.unsplash.com/photo-1599599810694-2202a3c0b2f7?w=400&h=400&fit=crop',
        categoryId: categories[0].id,
        unit: 'piece',
        weight: 0.3,
        rating: 4.3,
        isActive: true,
      },
    ])

    console.log('Products created successfully')
    console.log(`✅ Database seeded with ${categories.length} categories and ${products.length} products`)

    await sequelize.close()
  } catch (error) {
    console.error('Error seeding database:', error)
    await sequelize.close()
    process.exit(1)
  }
}

seedDatabase()
