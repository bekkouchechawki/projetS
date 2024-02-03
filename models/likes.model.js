// Importez les modules nécessaires
import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';
import { Membres } from '../models/membres.model.js'; 
import { Cours } from '../models/cours.model.js'; 

// Définissez la table Likes
export const Likes = sequelize.define('Likes', {
  ID_Membres: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ID_Cours: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.INTEGER,
    
  },
}, {
  timestamps: false,
});

// Définissez les associations
Likes.belongsTo(Membres, { foreignKey: 'ID_Membres' });
Likes.belongsTo(Cours, { foreignKey: 'ID_Cours' });

// Exportez le modèle Likes
export default Likes;
