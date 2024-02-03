import Gestionnaire from '../models/gestionnaire.model.js';

export const getAllGestionnaire = async (req, res, next) => {
  try {
    const gestionnaire = await Gestionnaire.findAll();
    res.status(200).json(gestionnaire);
  } catch (error) {
    next(error);
  }
};


export const getGestionnaireById = async (req, res, next) => {
  try {
    const gestionnaire = await Gestionnaire.findByPk(req.params.id);
    if (gestionnaire) {
      res.status(200).json(gestionnaire);
    } else {
      res.status(404).json({ message: 'aucun Gestionnaire trouver' });
    }
  } catch (error) {
    next(error);
  }
};

export const createGestionnaire = async (req, res, next) => {
  try {
    const gestionnaire = await Gestionnaire.create(req.body);
    res.status(201).json(gestionnaire);
  } catch (error) {
    next(error);
  }
};

export const updateGestionnaire = async (req, res, next) => {
  try {
    const gestionnaire = await Gestionnaire.findByPk(req.params.id);
    if (gestionnaire) {
      await gestionnaire.update(req.body);
      res.status(200).json(gestionnaire);
    } else {
      res.status(404).json({ message: 'Gestionnaire not found' });
    }
  } catch (error) {
    next(error);
  }
};

export const deleteGestionnaire = async (req, res, next) => {
  try {
    const gestionnaire = await Gestionnaire.findByPk(req.params.id);
    if (gestionnaire) {
      await gestionnaire.destroy();
      res.status(200).json({ message: 'Gestionnaire deleted' });
    } else {
      res.status(404).json({ message: 'Gestionnaire not found' });
    }
  } catch (error) {
    next(error);
  }
};