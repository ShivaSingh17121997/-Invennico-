// routes/userRoutes.js

const express = require('express');
const router = express.Router();

const UserModel = require('../Models/UserForm');

// POST request to create a new user
router.post('/post', async (req, res) => {
    try {
        // Extract data from request body
        const { firstName, lastName, email, status, phoneNo, address } = req.body;

        // Create a new user instance
        const newUser = new UserModel({
            firstName,
            lastName,
            email,
            status,
            phoneNo,
            address
        });

        // Save the new user to the database
        const savedUser = await newUser.save();

        res.status(201).json(savedUser); // Return the saved user as response
    } catch (error) {
        res.status(500).json({ error: error.message }); // Handle any errors
    }
});

// GET request to fetch all users
router.get('/get', async (req, res) => {
    try {
        const users = await UserModel.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = {router};
