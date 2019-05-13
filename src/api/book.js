let bookingModel = require('../models/bookingModel')

module.exports = function (app) {
    app.get('/book/:postID', (req, res) => {
        res.render('book.ejs');
    })

    app.post('/book/:postID', (req, res) => {
        console.log(req.body);
        let booking = {
            postID: req.params.postID,
            hostID: req.body.hostID,
            time: req.body.time,
            guestNumber: req.body.guestNumber,
            guestEmail: req.cookies.email,
            approval: false
        }

        console.log(booking);

        bookingModel.create(booking, (err, booking) => {
            if(err){

            }
            else{
                res.json(booking);
            }
        })
    })
}