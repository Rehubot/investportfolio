const {Asset, validateAsset} = require('../models/asset');

exports.getAssets = async (req, res) => {
    const assets = await Asset.find().sort('name');
    res.send(assets);
  
};

exports.createAsset = async (req, res) => {
    const { error } = validateAsset(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
  
    let asset = new Asset({ 
        name: req.body.name,
        desc:req.body.desc 
    });
   asset = await asset.save();
    
    res.send(asset);
  
};
exports.updateAsset =async (req, res) => {
    const { error } =validateAsset(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
  
    const asset= await Asset.findByIdAndUpdate(req.params.id, { name: req.body.name, desc:req.body.desc  }, {
      new: true
    });
  
    if (!asset) return res.status(404).send('The Asset with the given ID was not found.');
    
    res.send(asset);
  
};

exports.deleteAsset=  async (req, res) => {
    const asset = await Asset.findByIdAndRemove(req.params.id);
  
    if (!asset) return res.status(404).send('The Asset with the given ID was not found.');
  
    res.send(asset);
  
};

exports.searchAsset = (req, res) => {
    var queryCond = {}
    var regex = new RegExp(req.query.name,'i'); 
    queryCond.name=regex;
    return Asset.find(queryCond)
     .sort(name)
     .limit(15)
     .skip(5)
    .exec(function(err,result){
        return res.send(result);
    }); 
};