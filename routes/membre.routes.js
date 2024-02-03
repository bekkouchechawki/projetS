import { Router } from 'express';
import {
  getAllMembres,
  getMembresById,
  createMembre,
  updateMembre,
  deleteMembre,
} from '../controllers/membre.controller.js';

const router = Router();

router.get('/getAllMembres', getAllMembres);
router.get('/getMembresById/:id', getMembresById);
router.post('/createMembre', createMembre);
router.put('/updateMembre/:id', updateMembre);
router.delete('/deleteMembre/:id', deleteMembre);

export default router;
