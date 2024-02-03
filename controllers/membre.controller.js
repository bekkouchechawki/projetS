import Membres from '../models/membres.model.js';

export const getAllMembres = async (req, res, next) => {
  try {
    const membres = await Membres.findAll();
    res.status(200).json(membres);
  } catch (error) {
    next(error);
  }
};


export const getMembresById = async (req, res, next) => {
  try {
    const membres = await Membres.findByPk(req.params.id);
    if (membres) {
      res.status(200).json(membres);
    } else {
      res.status(404).json({ message: 'aucun membre trouver' });
    }
  } catch (error) {
    next(error);
  }
};

export const createMembre = async (req, res, next) => {
  try {
    const membres = await Membres.create(req.body);
    res.status(201).json(membres);
  } catch (error) {
    next(error);
  }
};

export const updateMembre = async (req, res, next) => {
  try {
    const membres = await Membres.findByPk(req.params.id);
    if (membres) {
      await membres.update(req.body);
      res.status(200).json(membres);
    } else {
      res.status(404).json({ message: 'membres not found' });
    }
  } catch (error) {
    next(error);
  }
};

export const deleteMembre = async (req, res, next) => {
  try {
    const membres = await Membres.findByPk(req.params.id);
    if (membres) {
      await membres.destroy();
      res.status(200).json({ message: 'membres deleted' });
    } else {
      res.status(404).json({ message: 'membres not found' });
    }
  } catch (error) {
    next(error);
  }
};






