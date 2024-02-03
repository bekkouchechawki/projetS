import { Router } from 'express';
import {
  getAllAbonnements,
  getAbonnementById,
  createAbonnement,
  updateAbonnement,
  deleteAbonnement,
} from '../controllers/abonnement.controller.js';

const router = Router();

router.get('/getAllAbonnements', getAllAbonnements);
router.get('/getAbonnementById/:id', getAbonnementById);
router.post('/createAbonnement', createAbonnement);
router.put('/updateAbonnement/:id', updateAbonnement);
router.delete('/deleteAbonnement/:id', deleteAbonnement);

export default router;