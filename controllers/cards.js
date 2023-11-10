const Card = require('../models/card');

const getAllCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const createCards = async (req, res) => {
  const { name, link, owner: id } = req.body;
  try {
    const newCard = await Card.create({ name, link, owner: id });
    res.status(201).json(newCard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteCardById = async (req, res) => {
  const cardId = req.params.id;
  try {
    const deleteCard = await Card.findByIdAndDelete(cardId);
    if (!deleteCard) {
      return res.status(404).json({ message: 'Carta no encontrada' });
    }
    res.json({ message: 'Carta eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  ).orFail(() => {
    const error = new Error('Id no encontrado');
    error.status = 404;
    throw error;
  })
    .then((users) => res.send({ data: users }))
    .catch((err) => res.status(404).send({ message: err.message }));
};

const dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  ).orFail(() => {
    const error = new Error('Id no encontrado');
    error.status = 404;
    throw error;
  })
    .then((users) => res.send({ data: users }))
    .catch((err) => res.status(404).send({ message: err.message }));
};

module.exports = {
  getAllCards,
  createCards,
  deleteCardById,
  likeCard,
  dislikeCard,
};
