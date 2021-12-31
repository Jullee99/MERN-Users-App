const { Module } = require("module");
const mongoose = require("mongoose");

const registerSchema = mongoose.Schema({
    username:String,
    age:Number,
    email:String,
    password:String,
});

const registerModel = mongoose.model('register',registerSchema,'register');
module.exports = registerModel;