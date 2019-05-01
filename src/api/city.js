let cityModel = require('../models/cityModel')


module.exports = function(app){
    

    app.get('/city', (req,res) => {
        cityModel.findOne({_id: req.cookies.cityID}, (err, cityInfo) => {
            if(err){
                console.log("ERROR GET /city")
            }
            else{
                res.render('city.ejs',{
                    cityInfo: cityInfo
                });
                // res.json(req.cookies.cityID);
            }
        })
        //res.redirect('/city');
        
        //res.json(req.cookies.cityID);
    });
    
    app.post('/city', (req, res) => {
        console.log(req.body.cityID);
        res.clearCookie('cityID');
        res.cookie('cityID', req.body.cityID);
        
        res.redirect('/city');
    })





}