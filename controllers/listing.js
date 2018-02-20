var express = require('express');

var route = express.Router();




route.get('/:id',function(req,res,next){


  res.render('listing/listings'+req.params.id );
});







module.exports = route;
