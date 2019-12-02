const Joi = require('joi');
const mongoose = require('mongoose');

const portfolioSchema= new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique:true,
    minlength: 5,
    maxlength: 50
  },
  desc:{
    type: String,
    required: true,
    minlength: 10,
    maxlength: 255  
  },
  asset:{
    type:mongoose.Schema.Types.ObjectId,  
    unique:true,
    ref:'Asset',
    required:true
  }
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

function validatePortfolio(portfolio) {
  const schema = {
    name: Joi.string().min(5).required(),
    desc:Joi.string().min(10).required(),
    asset:Joi.string()
  };                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
  return Joi.validate(portfolio, schema);
}

exports.portfolioSchema = portfolioSchema;
exports.Portfolio = Portfolio; 
exports.validatePortfolio= validatePortfolio;