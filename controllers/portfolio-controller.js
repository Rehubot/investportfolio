const {Portfolio, validatePortfolio} = require('../models/portfolio');

exports.getPortfolios = async (req, res) => {
    const portfolios = await Portfolio.find().sort('name');
    res.send(portfolios);
  
};

exports.createPortfolio = async (req, res) => {
    const { error } = validatePortfolio(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
  
    let portfolio = new Portfolio({ 
        name: req.body.name,
        desc:req.body.desc,
        asset:req.body.asset 
    });
    portfolio = await portfolio.save();
    
    res.send(portfolio);
  
};
exports.updatePortfolio =async (req, res) => {
    const { error } =validatePortfolio(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
  
    const portfolio = await Portfolio.findByIdAndUpdate(req.params.id, { name: req.body.name, desc:req.body.desc,asset:req.body.asset }, {
      new: true
    });
  
    if (!portfolio) return res.status(404).send('The Portfolio with the given ID was not found.');
    
    res.send(portfolio);
  
};

exports.deletePotfolio=  async (req, res) => {
    const portfolio = await Portfolio.findByIdAndRemove(req.params.id);
  
    if (!portfolio) return res.status(404).send('The portfolio with the given ID was not found.');
  
    res.send(portfolio);
  
};

exports.searchPortfolio = (req, res) => {
    var queryCond = {}
    var regex = new RegExp(req.query.name,'i'); 
    queryCond.name=regex;
    return Portfolio.find(queryCond)
     .sort(name)
     .limit(15)
     .skip(5)
    .exec(function(err,result){
        return res.send(result);
    }); 
};