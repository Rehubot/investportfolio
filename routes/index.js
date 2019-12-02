const express=require('express');
const router = express.Router();
const userRouter=require('./user');
const portfolioRouter=require('./portfolio');
const assetRouter=require('./asset');
const error=require('../middleware/error-middleware');


module.exports=function(app){
    app.use(express.json());
    app.use('/users', userRouter);
    app.use('/portfolios', portfolioRouter);
    
    app.use('/assets', assetRouter);

    app.use(error);
}