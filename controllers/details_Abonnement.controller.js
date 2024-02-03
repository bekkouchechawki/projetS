import Details_Abonnement from '../models/details_Abonnement.model.js';

export const getAllDetails_Abonnements = async (req, res, next) => {
  try {
    const details_Abonnement = await Details_Abonnement.findAll();
    res.status(200).json(details_Abonnement);
  } catch (error) {
    next(error);
  }
};


export const getDetails_AbonnementById = async (req, res, next) => {
  try {
    const details_Abonnement = await Details_Abonnement.findByPk(req.params.id);
    if (details_Abonnement) {
      res.status(200).json(details_Abonnement);
    } else {
      res.status(404).json({ message: 'aucun Details_Abonnement trouver' });
    }
  } catch (error) {
    next(error);
  }
};

export const createDetails_Abonnement = async (req, res, next) => {
  try {
    const details_Abonnement = await Details_Abonnement.create(req.body);
    res.status(201).json(details_Abonnement);
  } catch (error) {
    next(error);
  }
};

export const updateDetails_Abonnement = async (req, res, next) => {
  try {
    const details_Abonnement = await Details_Abonnement.findByPk(req.params.id);
    if (details_Abonnement) {
      await details_Abonnement.update(req.body);
      res.status(200).json(details_Abonnement);
    } else {
      res.status(404).json({ message: 'Details_Abonnement not found' });
    }
  } catch (error) {
    next(error);
  }
};

export const deleteDetails_Abonnement = async (req, res, next) => {
  try {
    const details_Abonnement = await Details_Abonnement.findByPk(req.params.id);
    if (details_Abonnement) {
      await details_Abonnement.destroy();
      res.status(200).json({ message: 'Details_Abonnement deleted' });
    } else {
      res.status(404).json({ message: 'Details_Abonnement not found' });
    }
  } catch (error) {
    next(error);
  }
};