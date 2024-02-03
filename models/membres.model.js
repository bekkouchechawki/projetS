// Importez les modules nécessaires
import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';

// Définissez la table Membres
export const Membres = sequelize.define('Membres', {
  
  Nom: {
    type: DataTypes.STRING,
  },
  Prenom: {
    type: DataTypes.STRING,
  },
  Courriel: {
    type: DataTypes.STRING,
  },
  Password: {
    type: DataTypes.STRING,
  },
  Adresse: {
    type: DataTypes.STRING,
  },
  Photo: {
    type: DataTypes.STRING,
  },
}, {
  timestamps: false,
});

// Exportez le modèle Membres
export default Membres;
