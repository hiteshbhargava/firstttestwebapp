var mongoose = require('mongoose');

var schema = mongoose.Schema({"Name":String,"Email":String,"Subject":String,"Comments":String});


module.exports = mongoose.model('contactformdetails',schema);
