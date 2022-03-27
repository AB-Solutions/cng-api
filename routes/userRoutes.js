const express = require('express');
const router = express.Router();
const {registerUser, getUsers, userExists} = require('../controllers/userController');

router.route('/')
    .post(registerUser)
    .get(getUsers);

router.route('/exists')
    .post(userExists);

module.exports = router;
