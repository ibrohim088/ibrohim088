import { DataTypes } from 'sequelize'
import sequelize from '../config/sequelize.js'

const Education = sequelize.define('Education', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  name: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  period: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  logo: {
    type: DataTypes.STRING(300),
    allowNull: true
  }
}, {
  tableName: 'education',
  timestamps: false
})

export default Education
