const express = require('express');
const userController = require('../controllers/users');

const router = express.Router();

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.patch('/me', userController.updateUser);
router.patch('/me', userController.updateUserAvatar);

module.exports = router;
