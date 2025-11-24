const express = require('express');
const authRouter = express.Router();
const authController = require('../controllers/authController');
// const blogController = require("../controllers/blogController");


authRouter.post('/register', authController.registerUser)

authRouter.post('/login', authController.loginUser)

authRouter.get('/:id', authController.getbyuser);

module.exports = authRouter;