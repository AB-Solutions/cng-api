const asyncHandler = require('express-async-handler');
const User = require('../models/user');
/*
 * Controller for creating a user
 * route: /api/users
 * returns newly created user
 */
const registerUser = asyncHandler(async (req, res) => {
    if (!req.body.id ||
        !req.body.firstname ||
        !req.body.lastname ||
        !req.body.phoneNumber ||
        !req.body.sex ||
        !req.body.address ||
        !req.body.profile ||
        !req.body.isAW80D ||
        !req.body.userType
    ) {
        res.status(400);
        throw new Error('mandatory fields are missing!!');
    }

    try {
        const user = await User.create({
            id: req.body.id,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            phoneNumber: req.body.phoneNumber,
            sex: req.body.sex,
            address: req.body.address,
            profile: req.body.profile,
            isAW80D: req.body.isAW80D,
            userType: req.body.userType,
        });
        res.status(201).json(user);
    } catch(error) {
        console.log(error);
        throw new Error('Error on creating a user');
    }
});


/*
 * Controller for getting all the users
 * route: /api/users
 * returns users
 */
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find();

    res.status(200).json(users);
});

/*
 * Controller for validating user existence
 * route: /api/users/exists
 * returns users
 */
const userExists = asyncHandler(async (req, res) => {
    const {
        phoneNumber,
        id,
    } = req.body;

    let queryParams = {};

    if (phoneNumber) {
        queryParams.phoneNumber = phoneNumber
    }
    if (id) {
        queryParams.id = id
    }

    if (!queryParams.id && !queryParams.phoneNumber) {
        res.status(400);
        throw new Error('phoneNumber or id is missing in the body');
    }

    console.log('queryParams is : ', JSON.stringify(queryParams));

    const user = await User.find(queryParams);

    res.status(200).json(user);
});


module.exports = {
    registerUser,
    getUsers,
    userExists,
};
