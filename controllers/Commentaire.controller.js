import Commentaires from '../models/Commentaires.model.js';


export const getAllCommentaires = async (req, res, next) => {
  try {
    const commentaires = await Commentaires.findAll();
    res.status(200).json(commentaires);
  } catch (error) {
    next(error);
  }
};


export const getCommentairesById = async (req, res, next) => {
  try {
    const commentaires = await Commentaires.findByPk(req.params.id);
    if (commentaires) {
      res.status(200).json(commentaires);
    } else {
      res.status(404).json({ message: 'aucun Commentaires trouver' });
    }
  } catch (error) {
    next(error);
  }
};

export const createCommentaires = async (req, res, next) => {
  try {
    const commentaires = await Commentaires.create(req.body);
    res.status(201).json(commentaires);
  } catch (error) {
    next(error);
  }
};

export const updateCommentaires = async (req, res, next) => {
  try {
    const commentaires = await Commentaires.findByPk(req.params.id);
    if (commentaires) {
      await commentaires.update(req.body);
      res.status(200).json(commentaires);
    } else {
      res.status(404).json({ message: 'Commentaires not found' });
    }
  } catch (error) {
    next(error);
  }
};

export const deleteCommentaires = async (req, res, next) => {
  try {
    const commentaires = await Commentaires.findByPk(req.params.id);
    if (commentaires) {
      await commentaires.destroy();
      res.status(200).json({ message: 'Commentaires deleted' });
    } else {
      res.status(404).json({ message: 'Commentaires not found' });
    }
  } catch (error) {
    next(error);
  }
};


