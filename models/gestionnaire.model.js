// Importez les modules nécessaires
import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';

// Définissez la table Gestionnaire
export const Gestionnaire = sequelize.define('Gestionnaire', {
  Nom: {
    type: DataTypes.STRING,
  },
  Prenom: {
    type: DataTypes.STRING,
  },
  Photo: {
    type: DataTypes.STRING,
  },
  Adresse_email: {
    type: DataTypes.STRING,
  },
  Mot_de_passe: {
    type: DataTypes.STRING,
  },
}, {
  timestamps: false,
});

// Exportez le modèle Gestionnaire
export default Gestionnaire;
