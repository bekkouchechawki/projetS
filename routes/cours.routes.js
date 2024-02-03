import { Router } from 'express';
import {
  getAllCours,
  getCoursById,
  createCours,
  updateCours,
  deleteCours,
} from '../controllers/cours.controller.js';

const router = Router();

router.get('/getAllCours', getAllCours);
router.get('/getCoursById/:id', getCoursById);
router.post('/createCours', createCours);
router.put('/updateCours/:id', updateCours);
router.delete('/deleteCours/:id', deleteCours);

export default router;
