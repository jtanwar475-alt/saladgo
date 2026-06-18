import { DataTypes } from 'sequelize'
import { sequelize } from '../db/config.js'

const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  items: {
    type: DataTypes.JSONB,
    defaultValue: [],
  },
  totalAmount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('pending', 'confirmed', 'shipped', 'delivered', 'cancelled'),
    defaultValue: 'pending',
  },
  paymentStatus: {
    type: DataTypes.ENUM('pending', 'completed', 'failed'),
    defaultValue: 'pending',
  },
  paymentMethod: {
    type: DataTypes.ENUM('razorpay', 'cod'),
    defaultValue: 'cod',
  },
  deliveryAddress: {
    type: DataTypes.JSONB,
  },
  notes: {
    type: DataTypes.TEXT,
  },
}, {
  timestamps: true,
})

export default Order
