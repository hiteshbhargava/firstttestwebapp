var express = require('express');
var Contact = require('../models/contactformdetail');

var route = express.Router();



route.get('/:id',function(req,res,next){


  res.render('pages'+req.params.id );
});





route.post('/contactfor',function(req,res,next){
  let contact = new Contact({
    Name: req.body.name,
    Email: req.body.email,
    Subject: req.body.subject,
    Comments: req.body.comments
  });

  contact.save(function(err){
    if(err){ throw(err);
    }
    else {
      res.redirect('/');

    }
  });

});














module.exports = route;
