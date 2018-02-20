var express = require('express');

var route = express.Router();



route.get('/',function(req,res,next){
  res.render('dashboard/dashboard');
});


route.get('/:id',function(req,res,next){



  res.render('dashboard/dashboard'+req.params.id );
});














module.exports = route;
