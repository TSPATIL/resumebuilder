const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const fetchuser = require('../middlewares/fetchuser');

const jwtsecret = 'ResumeBuilder';

router.post('/signup', [
    body('email', 'Enter valid email').isEmail(),
    body('password', 'Password must be of atleast 12 characters').isLength({ min: 12 }),
    body('cpassword', 'Confirm Password cannot be empty').exists()
], async (req, res) => {
    try {
        let success = false;
        const result = validationResult();
        if (!result.isEmpty()) {
            return res.status(400).json(result.array());
        }
        const { email, password, cpassword } = req.body;
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ success, error: "Email id already exits" });
        }
        if (password !== cpassword) {
            res.status(400).json({ success, error: "Password and Confirm Password mus be same" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashpass = await bcrypt.hash(password, salt);
        user = await User.create({
            email,
            password: hashpass
        });
        success = true;
        res.status(200).json({ success, message: "Signup Successful" });
    }
    catch (error) {
        res.status(500).json({ succeed: false, error: "Internal error occured", message: error.message });
    }
});

router.post('/login', [
    body('email', 'Enter valid email').isEmail(),
    body('password', 'Password cannot be empty').exists(),
], async (req, res) => {
    try {
        let success = false;
        const result = validationResult();
        if (!result.isEmpty()) {
            return res.status(400).json(result.array());
        }
        const { email, password } = req.body;
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ success, error: "Enter correct credentials" });
        }
        const checkpass = await bcrypt.compare(password, user.password);
        if(!checkpass){
            return res.status(401).json({ success, error: "Enter correct credentials" });
        }
        const data = {
            user:{
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({success, authToken, message: "Successful"});
    } catch (error) {
        res.status(500).json({ succeed: false, error: "Internal error occured", message: error.message });
    }
});

router.get('/getuserauthdetails', fetchuser, async (req, res)=>{
    try {
        const userID = req.user.id;
        const user = await User.findById(userID);
        res.json(user);
    } catch (error) {
        res.status(500).json({ succeed: false, error: "Internal error occured", message: error.message });
    }
});

router.get('/getuserID', fetchuser, async (req, res)=>{
    try {
        const userID = req.user.id;
        res.json(userID);
    } catch (error) {
        res.status(500).json({ succeed: false, error: "Internal error occured", message: error.message });
    }
});

module.exports = router;

