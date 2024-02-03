import Abonnement from '../models/abonnement.model.js';

export const getAllAbonnements = async (req, res, next) => {
  try {
    const abonnement = await Abonnement.findAll();
    res.status(200).json(abonnement);
  } catch (error) {
    next(error);
  }
};


export const getAbonnementById = async (req, res, next) => {
  try {
    const abonnement = await Abonnement.findByPk(req.params.id);
    if (abonnement) {
      res.status(200).json(abonnement);
    } else {
      res.status(404).json({ message: 'aucun Abonnement trouver' });
    }
  } catch (error) {
    next(error);
  }
};

export const createAbonnement = async (req, res, next) => {
  try {
    const abonnement = await Abonnement.create(req.body);
    res.status(201).json(abonnement);
  } catch (error) {
    next(error);
  }
};

export const updateAbonnement = async (req, res, next) => {
  try {
    const abonnement = await Abonnement.findByPk(req.params.id);
    if (abonnement) {
      await abonnement.update(req.body);
      res.status(200).json(cours);
    } else {
      res.status(404).json({ message: 'Abonnement not found' });
    }
  } catch (error) {
    next(error);
  }
};

export const deleteAbonnement = async (req, res, next) => {
  try {
    const abonnement = await Abonnement.findByPk(req.params.id);
    if (abonnement) {
      await abonnement.destroy();
      res.status(200).json({ message: 'Abonnement deleted' });
    } else {
      res.status(404).json({ message: 'Abonnement not found' });
    }
  } catch (error) {
    next(error);
  }
};




