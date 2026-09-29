import { DataTypes } from 'sequelize'
import sequelize from '../config/sequelize.js'

const Profile = sequelize.define('Profile', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  photo: {
    type: DataTypes.STRING(300),
    allowNull: true
  },
  
  // ===============================================================
  name_uz: {
    type: DataTypes.STRING(200),
    allowNull: true
  },
  name_ru: {
    type: DataTypes.STRING(200),
    allowNull: true
  },
  name_en: {
    type: DataTypes.STRING(200),
    allowNull: true
  },
  
  // ===============================================================
  role_uz: {
    type: DataTypes.STRING(200),
    allowNull: true
  },
  role_ru: {
    type: DataTypes.STRING(200),
    allowNull: true
  },
  role_en: {
    type: DataTypes.STRING(200),
    allowNull: true
  },
  
  // ===============================================================
  social_telegram: {
    type: DataTypes.STRING(300),
    allowNull: true
  },
  social_linkedin: {
    type: DataTypes.STRING(300),
    allowNull: true
  },
  social_phone: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  social_github: {
    type: DataTypes.STRING(300),
    allowNull: true
  }
}, {
  tableName: 'profile',
  timestamps: false
})

export default Profile
