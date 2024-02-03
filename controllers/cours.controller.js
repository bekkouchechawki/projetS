import Cours from '../models/cours.model.js';

export const getAllCours = async (req, res, next) => {
  try {
    const cours = await Cours.findAll();
    res.status(200).json(cours);
  } catch (error) {
    next(error);
  }
};


export const getCoursById = async (req, res, next) => {
  try {
    const cours = await Cours.findByPk(req.params.id);
    if (cours) {
      res.status(200).json(cours);
    } else {
      res.status(404).json({ message: 'aucun Cours trouver' });
    }
  } catch (error) {
    next(error);
  }
};

export const createCours = async (req, res, next) => {
  try {
    const cours = await Cours.create(req.body);
    res.status(201).json(cours);
  } catch (error) {
    next(error);
  }
};

export const updateCours = async (req, res, next) => {
  try {
    const cours = await Cours.findByPk(req.params.id);
    if (cours) {
      await cours.update(req.body);
      res.status(200).json(cours);
    } else {
      res.status(404).json({ message: 'Cours not found' });
    }
  } catch (error) {
    next(error);
  }
};

export const deleteCours = async (req, res, next) => {
  try {
    const cours = await Cours.findByPk(req.params.id);
    if (cours) {
      await cours.destroy();
      res.status(200).json({ message: 'Cours deleted' });
    } else {
      res.status(404).json({ message: 'Cours not found' });
    }
  } catch (error) {
    next(error);
  }
};




