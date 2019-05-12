let bookingModel = require('../models/bookingModel');
let postModel = require('../models/postModel')

module.exports = function(app){
    app.get('/booking/:id', (req, res) => {
        res.render('bookings.ejs');
    })

    app.get('/getBookingDetail/:bookingID', (req, res) => {
        bookingModel.findOne({_id: req.params.bookingID}, (err, data)=> {
            res.json(data);
        })
    }) 

    
}