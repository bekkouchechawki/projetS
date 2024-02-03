// Importez les modules nécessaires
import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';
import { Membres } from '../models/membres.model.js'; 
import { Cours } from '../models/cours.model.js';

// Définissez la table Commentaires
export const Commentaires = sequelize.define('Commentaires', {
  ID_Membres: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ID_Cours: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Commentaire: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  timestamps: false,
});

// Définissez les associations
Commentaires.belongsTo(Membres, { foreignKey: 'ID_Membres' });
Commentaires.belongsTo(Cours, { foreignKey: 'ID_Cours' });

// Exportez le modèle Commentaires
export default Commentaires;
