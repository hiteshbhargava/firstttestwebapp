var mongoose = require('mongoose');

var schema = mongoose.Schema({"Broad_Category":String,"Skill":String,"Description":String});


module.exports = mongoose.model('skills',schema);
