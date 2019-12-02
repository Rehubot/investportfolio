
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const mongoose = require('mongoose');
const keys = require('../config/keys');
const userSchema = new mongoose.Schema({

  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true
  },

  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024
  }
});

userSchema.methods.generateAuthToken = function() { 
  const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, keys.jwtPrivateKey);
  return token;
}

const User = mongoose.model('User', userSchema);

function validateUser(user) {
  const schema = {
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required()
  };

  return Joi.validate(user, schema);
}

exports.User = User; 
exports.validateUser= validateUser;