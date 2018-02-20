var mongoose = require('mongoose');

var schema = mongoose.Schema({"Name":String,"Phone":Number,"Email":String,"Address_Prefix":String,"Location":String,"City":String,"State":String,"Country":String,"Pin_Code":Number,"Latitude":Number,"Longitude":Number,"Skills":String,"Description":String,"Courses":String,"Images":String,"Upload_at":String});


module.exports = mongoose.model('institutes',schema);
