const asyncHandler = require('express-async-handler');
const Goal = require('../models/goal');
/*
 * Controller for getting all the goals
 * route: /api/goals
 * returns goals
 */
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find();

    res.status(200).json(goals);
});

/*
 * Controller for creating a new goal
 * route: /api/goals
 * creates and returns success message
 */
const postGoals = asyncHandler(async (req, res) => {
    if (!req.body.name) {
        res.status(400);
        throw new Error('"name" field is missing!!');
    }

    try {
        const goal = await Goal.create({
            name: req.body.name
        });
        res.status(201).json(goal);
    } catch(error) {
        throw new Error('Error on creating a goal');
    }

});

/*
 * Controller for updating a goal
 * route: /api/goals/:id
 * updates and returns success message
 */
const putGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
        res.status(400);
        throw new Error('Goal not found with the supplied id');
    }
    
    try {
        const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, {name: req.body.name}, {
            new: true,
        });
        
        res.status(200).json(updatedGoal);
    } catch {
        throw new Error('Error on updating a goal');
    }
});

/*
 * Controller for deleting a goal
 * route: /api/goals/:id
 * deletes and returns success message
 */
const deleteGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
        res.status(400);
        throw new Error('Goal not found with the supplied id');
    }
    
    try {
        await goal.remove();
        
        res.status(200).json({id: req.params.id});
    } catch {
        throw new Error('Error on deleting a goal');
    }
});

module.exports = {
    getGoals,
    postGoals,
    putGoal,
    deleteGoals,
};
