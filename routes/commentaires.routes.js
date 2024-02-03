import { Router } from 'express';
import {
  getAllCommentaires,
  getCommentairesById,
  createCommentaires,
  updateCommentaires,
  deleteCommentaires,
} from '../controllers/Commentaire.controller.js';

const router = Router();

router.get('/getAllCommentaires', getAllCommentaires);
router.get('/getCommentairesById/:id', getCommentairesById);
router.post('/createCommentaires', createCommentaires);
router.put('/updateCommentaires/:id', updateCommentaires);
router.delete('/deleteCommentaires/:id', deleteCommentaires);

export default router;
