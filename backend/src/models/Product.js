import { DataTypes } from 'sequelize'
import { sequelize } from '../db/config.js'

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  discountPrice: {
    type: DataTypes.DECIMAL(10, 2),
  },
  stock: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  image: {
    type: DataTypes.STRING,
  },
  images: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
  categoryId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  unit: {
    type: DataTypes.STRING,
    defaultValue: 'kg',
  },
  weight: {
    type: DataTypes.DECIMAL(5, 2),
  },
  rating: {
    type: DataTypes.DECIMAL(3, 2),
    defaultValue: 0,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  isFeatured: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  timestamps: true,
})

export default Product
