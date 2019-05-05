let cityModel = require('../models/cityModel')
let postModel = require('../models/postModel')

module.exports = function (app) {


    app.get('/getCity/:name', (req, res) => {

        cityModel.findOne({ nameID: req.params.name }, (err, cityInfo) => {
            if (err) {
                console.log("ERROR GET /city/:name")
            }
            else {
                postModel.find({ city: req.params.name }, (err, posts) => {
                    if (err) {
                        console.log("ERROR GET /city/:name")
                    }
                    else {
                        let result = {
                            posts : posts,
                            cityInfo : cityInfo
                        }
                        res.json(result);
                    }
                });
            }
        })

    });

    app.get('/city/:name', (req, res) => {
        res.render('city.ejs');
    })





}