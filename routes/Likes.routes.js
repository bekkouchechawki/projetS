import { Router } from 'express';
import {
  getAllLikes,
  getLikesById,
  createLikes,
  updateLikes,
  deleteLikes,
} from '../controllers/likes.controller.js';

const router = Router();

router.get('/getAllLikes', getAllLikes);
router.get('/getLikesById/:id', getLikesById);
router.post('/createLikes', createLikes);
router.put('/updateLikes/:id', updateLikes);
router.delete('/deleteLikes/:id', deleteLikes);

export default router;
