const express = require('express');

const router = express.Router();

const CardsController = require('../controllers/cards');

router.get('/cards', CardsController.getAllCards);
router.post('/cards', CardsController.createCards);
router.delete('/cards/:id', CardsController.deleteCardById);
router.put('/cards/:id', CardsController.likeCard);
router.delete('/cards/:id', CardsController.dislikeCard);

module.exports = router;