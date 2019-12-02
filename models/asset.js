const Joi = require('joi');
const mongoose = require('mongoose');

const assetSchema= new mongoose.Schema({
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
  }
});

const Asset = mongoose.model('Asset', assetSchema);

function validateAsset(asset) {
  const schema = {
    name: Joi.string().min(5).required(),
    desc:Joi.string().min(10).required()
  };                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
  return Joi.validate(asset, schema);
}

exports.assetSchema = assetSchema;
exports.Asset = Asset; 
exports.validateAsset= validateAsset;