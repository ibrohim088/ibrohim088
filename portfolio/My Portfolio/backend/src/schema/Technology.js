import { DataTypes } from 'sequelize'
import sequelize from '../config/sequelize.js'

const Technology = sequelize.define('Technology', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  icon: {
    type: DataTypes.STRING(300),
    allowNull: false
  }
}, {
  tableName: 'technologies',
  timestamps: false
})

export default Technology
