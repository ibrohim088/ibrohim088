import 'dotenv/config'
import sequelize from './sequelize.js'
import Contact from '../schema/Contact.js'
import Education from '../schema/Education.js'
import Technology from '../schema/Technology.js'
import Profile from '../schema/Profile.js'
import Certificate from '../schema/Certificate.js'

const connectDB = async () => {
  try {
    await sequelize.authenticate()
    console.log('MySQL DB connected!')
    await sequelize.sync({ alter: false })
    console.log('Tables synced!')
  } catch (err) {
    console.error('DB connection error:', err)
    throw err
  }
}

export { sequelize, Contact, Education, Technology, Profile, Certificate }
export default connectDB