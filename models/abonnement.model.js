// Importez les modules nécessaires
import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';
import { Membres } from '../models/membres.model.js'; 


// Définissez la table Abonnements
export const Abonnements = sequelize.define('Abonnements', {
  ID_Membres: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Date_Abonnement: {
    type: DataTypes.DATE,
  },
  Statut_reservation: {
    type: DataTypes.STRING,
    validate: {
      isIn: [['En_attente', 'Confirme']], 
    },
  },
  Debut_Abonnement: {
    type: DataTypes.DATE,
  },
  Fin_Abonnement: {
    type: DataTypes.DATE,
  },
}, {
  timestamps: false,
});

// Définissez les associations
Abonnements.belongsTo(Membres, { foreignKey: 'ID_Membres' });


// Exportez le modèle Abonnements
export default Abonnements;
