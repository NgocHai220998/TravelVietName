let bookingModel = require('../models/bookingModel');
let postModel = require('../models/postModel')

module.exports = function(app){
    app.get('/booking/:id', (req, res) => {
        res.render('bookings.ejs');
    })

    app.get('/getBooking/:id', (req, res) => {
        bookingModel.findOne({_id: req.params.id}, (err, data)=> {
            res.json(data);
        })
    })    
}