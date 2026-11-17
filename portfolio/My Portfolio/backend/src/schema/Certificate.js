import { DataTypes } from 'sequelize'
import sequelize from '../config/sequelize.js'

const Certificate = sequelize.define('Certificate', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  image: {
    type: DataTypes.STRING(300),
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  organization: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  route: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  date: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
}, {
  tableName: 'certificates',
  timestamps: false
})

export default Certificate
