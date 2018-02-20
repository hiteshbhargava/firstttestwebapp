var express = require('express');
var router = express.Router();
var User = require('../models/users');


router.post('/register',function(req,res,next){

  req.assert('username', 'Name is required').notEmpty()           //Validate name
      req.assert('password1', 'Password is required').notEmpty().len(8, 30)             //Validate password
      req.assert('email', 'A valid email is required').notEmpty().isEmail()  //Validate email
   	req.assert('phone', 'A valid Phone is required').notEmpty().len(10, 12).isNumeric()  //Validate phone
  	req.assert('password2', 'Confirm Password must match with password').notEmpty().equals(req.body.password1);
      var errors = req.validationErrors()

      if(!errors ) {
        let user1 = new User({
                Name: req.body.username,
                Phone: req.body.phone,
                Email: req.body.email,
                Password: req.body.password1,
                User_role: req.body.role
                  });



           User.find({Email:req.body.email } ,function(err, result) {
           	if(result.length<=0)
           	{
              user1.save(function(err){
                if(err){
                  req.flash('error','Something went wrong. Please try again.');
  						    var error={};
  				        res.render('index',{errors:error})
  		            }else {

    		          req.flash('success', 'Data added successfully. Please login for further Progress')
                  res.redirect('/dashboard');
                  console.log('User Saved');
                }


  		        });
           	}
           	else
           	{
           		req.flash('error','User Already Exist. Please with login with your login credentials.');
  				        res.render('index')
           	}
           });

      }
      else
      {
        res.redirect('/pages/-404');
      	//Display errors to user
  		/*var error={};
          errors.forEach(function(err) {
  			error[err.param]=err.msg;
          })
  		var user = {
              name: req.sanitize('name').escape().trim(),
              password: req.sanitize('password').escape().trim(),
              phone: req.sanitize('phone').escape().trim(),
              email: req.sanitize('email').escape().trim(),
              userrole:req.sanitize('role').escape().trim()
          }
          req.flash('error','Please Fill All mandatory Fields');
          res.render('register',{
          	title: 'Property | Register',
              session:req.session,
              form:user,
  			errors:error
      })*/
      }


});



router.post('/login', function(req, res, next){
	req.assert('username', 'Username is required').notEmpty()             //Validate password
    req.assert('password', 'Password is required').notEmpty()  //Validate email
     var errors = req.validationErrors()

     if( !errors )
     {
     	var user = {
     		    Name: req.body.username,
            Password: req.body.password
        }

	    User.find(user , function(err, result) {
	        if(err) return console.log(err)
	        if(result.length>0)
        	{
        		req.flash('success','Login successfull');
        		req.session.email = result[0].Email;
        		req.session.name = result[0].Name;
        		req.session.userid = result[0]._id;
        		req.session.role=result[0].User_role;
        		if(result[0].User_role =='2')
        		{
        			res.redirect('/');
        		}
        		else
        		{

                    res.redirect('/dashboard');


        		}
        	}
        	else
        	{
        		req.flash('error', 'Login Failed .User not found with these credentials.');
                res.redirect('/pages/-404');
        	}

	    }) ;
    }
    else
    {
        errors.forEach(function(error) {
             req.flash(error.param, error.msg);
        })
        req.flash('error', 'Please Fill all mandatory Fields');
        res.redirect('back');
    }
});



















module.exports = router;
