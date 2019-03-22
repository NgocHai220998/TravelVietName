let mongoose = require('../../config/mongodb/db.js');


let userSchema = mongoose.Schema;


let Users = userSchema({
    fullName : String,
    email : String,
    password : String,
    avatar : String
});


module.exports = mongoose.model('Users',Users);