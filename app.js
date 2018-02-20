var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var ejs = require('ejs');



var session = require('express-session');
app.use(session({
   secret : 'myproperty',
   resave : false,
   saveUninitialized : false,
}));


var mongoose = require('mongoose');


var flash = require('express-flash');
//flash middleware
app.use(flash());


var cookieParser = require('cookie-parser');
app.use(cookieParser('keyboard cat'));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));



var expressValidator = require('express-validator');
app.use(expressValidator());




var home = require('./controllers/index');
var post_routes = require('./controllers/post_routes');
var listings = require('./controllers/listing');
var dashboard = require('./controllers/dashboard');
var pages = require('./controllers/pages');




//setting public folder
app.use(express.static(__dirname + '/public'));

//setting view engine
app.set('view engine', 'ejs');


app.set('views',path.join(__dirname ,'views'));




//setting expressMongoDb
mongoose.connect('mongodb://root:root@ds041678.mlab.com:41678/skilldosti');

var db = mongoose.connection;



db.once('open',function(){
  console.log('connected db');
});


db.on('error',function(err){
  if(err) console.log(err);

});


//bodyparser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




app.use('/',home);
app.use('/users',post_routes);
app.use('/listings',listings);
app.use('/dashboard',dashboard);
app.use('/pages',pages);










//starting server
app.listen(process.env.PORT || 8083, function(){
    console.log('Server running at port 8083: http://127.0.0.1:8083')
});
