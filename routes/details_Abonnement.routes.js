import { Router } from 'express';
import {
  getAllDetails_Abonnements,
  getDetails_AbonnementById,
  createDetails_Abonnement,
  updateDetails_Abonnement,
  deleteDetails_Abonnement,
} from '../controllers/details_Abonnement.controller.js';

const router = Router();

router.get('/getAllDetails_Abonnements', getAllDetails_Abonnements);
router.get('/getDetails_AbonnementById/:id', getDetails_AbonnementById);
router.post('/createDetails_Abonnement', createDetails_Abonnement);
router.put('/updateDetails_Abonnement/:id', updateDetails_Abonnement);
router.delete('/deleteDetails_Abonnement/:id', deleteDetails_Abonnement);

export default router;
