const express = require('express');
const userController = require('../controllers/users');

const router = express.Router();

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.patch('/:id', userController.updateUser);
router.patch('/:id', userController.updateUserAvatar);

module.exports = router;
