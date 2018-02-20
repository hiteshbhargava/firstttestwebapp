var express = require('express');
var router = express.Router();



router.get('/',function(req,res,next){
  res.render('index');
});


/*router.get('/:id',function(req,res,next){
  res.render('index'+req.params.id);
});*/


router.get('/pages-pricing', function(req,res){
	res.render('general_pages/pages-pricing');
});

router.get('/listings-single-page', function(req,res){
	res.render('listings/listings-single-page');
});


router.get('/listings-half-screen-map-list', function(req,res){
	res.render('listings/listings-half-screen-map-list');
});


/*router.post('/skilldostisearch',function(req,res,next){

  let user = new search({
    Subject: req.body.subject,
    Locations: req.body.location,
    Categories: req.body.categories
  });

  user.save(function(err){
    if(err){ throw(err);
    }
    else {
      console.log('saved');
      res.redirect('/');

    }
  });

});

*/






module.exports = router;
