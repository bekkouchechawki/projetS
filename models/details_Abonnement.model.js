// Importez les modules nécessaires
import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';
import { Abonnements } from '../models/abonnement.model.js';
import { Cours } from '../models/cours.model.js'; 

// Définissez la table Details_Abonnement
const Details_Abonnement = sequelize.define('Details_Abonnement', {
  ID_Abonnement: {
    type: DataTypes.INTEGER,
  },
  ID_Cour: {
    type: DataTypes.INTEGER,
  },
  Frequence_Abonnement: {
    type: DataTypes.STRING,
    validate: {
      isIn: [['Mensuel', 'Annuel']],
    },
  },
  Date_Paiement: {
    type: DataTypes.DATE,
  },
}, {
  timestamps: false,
});

// Définissez les associations
Details_Abonnement.belongsTo(Abonnements, { foreignKey: 'ID_Abonnement' });
Details_Abonnement.belongsTo(Cours, { foreignKey: 'ID_Cour' });

// Exportez le modèle Details_Abonnement
export default Details_Abonnement;
