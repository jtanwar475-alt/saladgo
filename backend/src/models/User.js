import { DataTypes } from 'sequelize'
import { sequelize } from '../db/config.js'
import bcrypt from 'bcryptjs'

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.ENUM('customer', 'admin', 'supplier', 'delivery'),
    defaultValue: 'customer',
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, {
  timestamps: true,
  hooks: {
    beforeCreate: async (user) => {
      if (user.password) {
        user.password = await bcrypt.hash(user.password, 10)
      }
    },
  },
})

User.prototype.comparePassword = async function(password) {
  return bcrypt.compare(password, this.password)
}

export default User
