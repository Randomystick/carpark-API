const mongoose = require('mongoose');
const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

const User = require('../models/user') //import user.js from models

router.post('/signup', (req, res, next) => {
    //construct a new user object
    const user = new User({
        _id: new mongoose.Types.ObjectId(), //instantiate new id to assign to _id attrib
        // assume the rest are within the request:
        firstName:  req.body.firstName,
        lastName:   req.body.lastName,
        email:      req.body.email,
        password:   req.body.password
        //contactNo:
    });

});

module.exports = router;