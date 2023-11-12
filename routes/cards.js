const express = require('express');

const router = express.Router();

const CardsController = require('../controllers/cards');

router.get('/', CardsController.getAllCards);
router.post('/', CardsController.createCards);
router.delete('/:id', CardsController.deleteCardById);
router.put('/:cardId/likes', CardsController.likeCard);
router.delete('/:cardId/likes', CardsController.dislikeCard);

module.exports = router;
