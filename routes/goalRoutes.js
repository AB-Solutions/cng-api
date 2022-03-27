const express = require('express');
const router = express.Router();
const {getGoals, postGoals, putGoal, deleteGoals} = require('../controllers/goalController');

router.route('/').get(getGoals).post(postGoals);

router.route('/:id').put(putGoal).delete(deleteGoals);

module.exports = router;
