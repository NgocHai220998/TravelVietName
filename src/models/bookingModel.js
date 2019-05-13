let mongoose = require('../../config/mongodb/db.js');


let bookingSchema = mongoose.Schema;


let booking = bookingSchema({
    postID: String,
    hostID: String,
    time: String,
    guestNumber: String,
    guestEmail: String,
    approval: Boolean
});


module.exports = mongoose.model('booking',booking);