import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

let sequelizeConfig

if (process.env.DATABASE_URL) {
  // Heroku PostgreSQL URL format
  sequelizeConfig = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
  })
} else {
  // Local PostgreSQL connection
  sequelizeConfig = new Sequelize(
    process.env.DB_NAME || 'saladgo',
    process.env.DB_USER || 'postgres',
    process.env.DB_PASSWORD || 'password',
    {
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 5432,
      dialect: 'postgres',
      logging: process.env.NODE_ENV === 'development' ? console.log : false,
    }
  )
}

export const sequelize = sequelizeConfig
