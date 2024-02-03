import { Router } from 'express';
import {
  getAllGestionnaire,
  getGestionnaireById,
  createGestionnaire,
  updateGestionnaire,
  deleteGestionnaire,
} from '../controllers/Gestionnaire.controller.js';

const router = Router();

router.get('/getAllGestionnaire', getAllGestionnaire);
router.get('/getGestionnaireById/:id', getGestionnaireById);
router.post('/createGestionnaire', createGestionnaire);
router.put('/updateGestionnaire/:id', updateGestionnaire);
router.delete('/deleteGestionnaire/:id', deleteGestionnaire);

export default router;
