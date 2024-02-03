import Likes from '../models/likes.model.js';

export const getAllLikes = async (req, res, next) => {
  try {
    const likes = await Likes.findAll();
    res.status(200).json(likes);
  } catch (error) {
    next(error);
  }
};


export const getLikesById = async (req, res, next) => {
  try {
    const likes = await Likes.findByPk(req.params.id);
    if (likes) {
      res.status(200).json(likes);
    } else {
      res.status(404).json({ message: 'aucun Likes trouver' });
    }
  } catch (error) {
    next(error);
  }
};

export const createLikes = async (req, res, next) => {
  try {
    const likes = await Likes.create(req.body);
    res.status(201).json(likes);
  } catch (error) {
    next(error);
  }
};

export const updateLikes = async (req, res, next) => {
  try {
    const likes = await Likes.findByPk(req.params.id);
    if (likes) {
      await likes.update(req.body);
      res.status(200).json(likes);
    } else {
      res.status(404).json({ message: 'Likes not found' });
    }
  } catch (error) {
    next(error);
  }
};

export const deleteLikes = async (req, res, next) => {
  try {
    const likes = await Likes.findByPk(req.params.id);
    if (likes) {
      await likes.destroy();
      res.status(200).json({ message: 'Likes deleted' });
    } else {
      res.status(404).json({ message: 'Likes not found' });
    }
  } catch (error) {
    next(error);
  }
};




