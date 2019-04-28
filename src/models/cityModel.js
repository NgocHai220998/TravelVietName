let mongoose = require('../../config/mongodb/db.js');


let citySchema = mongoose.Schema;


let city = citySchema({
    name: String,
    title: String,
    images : [
        {
            src : String
        }
    ]
});


module.exports = mongoose.model('city',city);