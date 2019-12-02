const {User, validateUser} = require('../models/user');

exports.getUser = async (req, res) => {
    const users = await User.find().sort('name');
    res.send(users);
  
};

exports.createUser = async (req, res) => {
    const { error } = validateUser(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
  
    let user = new User({ 
        name: req.body.name,
        password:req.body.password
    });
   user = await user.save();
    
    res.send(user);
  
};
exports.updateUser =async (req, res) => {
    const { error } =validateUser(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
  
    const user= await User.findByIdAndUpdate(req.params.id, { name: req.body.name, password:req.body.password  }, {
      new: true
    });
  
    if (!user) return res.status(404).send('The User with the given ID was not found.');
    
    res.send(user);
  
};

exports.deleteUser=  async (req, res) => {
    const user = await User.findByIdAndRemove(req.params.id);
  
    if (!user) return res.status(404).send('The User with the given ID was not found.');
  
    res.send(user);
  
};

exports.searchUser = (req, res) => {
    var queryCond = {}
    var regex = new RegExp(req.query.name,'i'); 
    queryCond.name=regex;
    return User.find(queryCond)
     .sort(name)
     .limit(15)
     .skip(5)
    .exec(function(err,result){
        return res.send(result);
    }); 
};