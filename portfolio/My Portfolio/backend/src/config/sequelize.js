import 'dotenv/config'
import { Sequelize } from 'sequelize'
import config from '../shared/config.js'

const sequelize = new Sequelize(
  config.DB.database,
  config.DB.user,
  config.DB.password,
  {
    host: config.DB.host,
    port: config.DB.port,
    dialect: 'mysql',
    logging: false,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
)

export default sequelize
