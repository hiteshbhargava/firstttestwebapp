var mongoose = require('mongoose');

var schema = mongoose.Schema({"Name":String,"Description":String,"Duration":String,"Timings":String,"Next_Batch":String,"Fees":Number,"No_Of_Seats":String,"Broucher_Link":String});


module.exports = mongoose.model('courses',schema);
