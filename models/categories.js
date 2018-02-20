var mongoose = require('mongoose');

var schema = mongoose.Schema({"Name":String,"Description":String});


module.exports = mongoose.model('categories',schema);
