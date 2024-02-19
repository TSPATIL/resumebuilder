const express = require('express');
const jwt = require('jsonwebtoken');
const jwt_secret = "ResumeBuilder";

const fetchuser = async (req, res, async) =>{
    try {
        const token = req.header('auth-token');
        if(!token){
            res.status(400).json({success: false, error: "Please authenticate using valid token"})
        }
        const data = await jwt.verify(token, jwt_secret);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(500).json({ succeed: false, error: "Internal error occured", message: error.message });
    }
}

module.exports = fetchuser;