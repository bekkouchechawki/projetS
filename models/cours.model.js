import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';


export const Cours = sequelize.define('Cours', {
  Nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Image: {
    type: DataTypes.STRING,
  },
  Video: {
    type: DataTypes.STRING,
  },
  Tarifs: {
    type: DataTypes.DECIMAL(10, 2),
  },
  Description: {
    type: DataTypes.STRING,
  },
  Nombres_place: {
    type: DataTypes.INTEGER,
  },
}, {
  timestamps: false,
});

export default Cours;





