const express = require('express');
const router = express.Router();
const {registerUser, getUsers, putGoal, deleteGoals} = require('../controllers/userController');

router.route('/')
    .post(registerUser)
    .get(getUsers);

module.exports = router;
