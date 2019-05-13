let bookingModel = require('../models/bookingModel');
let postModel = require('../models/postModel')

module.exports = function(app){
    app.get('/your-posts-bookings', (req, res) => {
        res.render('posts-bookings.ejs');
    })

    app.get('/getYoursBookings', (req, res) => {
        postModel.find({host: req.cookies.email}, (err, post) => {
 
            bookingModel.find({guestEmail: req.cookies.email}, (err, booking) => {
                let bookings = {
                    post: post,
                    booking: booking
                }
                res.json(bookings);
            })
        })
    })    
    app.get('/getBookingsOfPost/:postID', (req, res) => {
        bookingModel.find({postID: req.params.postID}, (err, data) => {
            res.json(data);
        })
    })
}