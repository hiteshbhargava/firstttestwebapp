var mongoose = require('mongoose');

var schema = mongoose.Schema({"Name":String,"Phone":String,"Email":String,"Password":String,"User_role":String});


module.exports = mongoose.model('users',schema);
