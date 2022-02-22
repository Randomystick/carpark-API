/*
a. Mandatory fields: First name, Last name, email, password
b. Optional fields: Contact number
*/

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName:  { type: String, required: true},
    lastName:   { type: String, required: true},
    email:      { type: String, required: true},
    password:   { type: String, required: true},
    //contactNo:  { type: Number, required: false}
});

module.exports = mongoose.model('User', userSchema);