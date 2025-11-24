require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');


exports.registerUser = async (req, res) => {
    try {
        const { email, username, password } = req.body;

        const existingUser = await User.findUserByEmail(email);
        if (existingUser) {
            return res.status(403).json({ message: 'Email is already registered!' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        await User.createUser(email.toLowerCase(), username, hashedPassword);
        return res.status(201).json({ message: 'User registered successfully!' });

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: 'Error registering user!' });
    }
};

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body);
        const existingUser = await User.findUserByEmail(email);
        if (!existingUser) {
            return res.status(401).json({ message: "Invalid email or password!" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ message: "Invalid email or password!" });
        }

        const payload = { id: existingUser.id, email: existingUser.email };
        const token = jwt.sign(payload, 'abcdef', { expiresIn: "1h" });

        return res.status(200).json({ message: "Login successful!", token });

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: 'Error logging in!' });
    }
};

exports.getbyuser = async (req, res) => {
    try {
        const k = parseInt(req.params.id);
        // const l = req.body.user_id ;
        console.log("User_ID:",req.params.id);
        const blogss = await User.getbyuser(k);
        console.log(blogss, k)// , l)
        return res.status(200).json(blogss);
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: 'Error fetching blogs!' });
    }
};
