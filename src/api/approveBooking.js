let bookingModel = require('../models/bookingModel')

module.exports = function (app) {
    app.get('/approve-booking/:postID', (req, res) => {
        res.render("approveBooking.ejs")
    })

    app.put('/approveBooking', (req, res) => {
        bookingModel.update({
            _id: req.body.bookingID
        },
        {
            approval: true
        },
        function (err, todo) {
            if (err) {
                res.status(500).json(err);
            }
            else {

            }
        })
    })
}