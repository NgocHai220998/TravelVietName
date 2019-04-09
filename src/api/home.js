

let Users = require('../models/userModel.js');


module.exports = function(app){


    app.get('/',(req,res) => {
        res.render('home.ejs');
    });
    app.post('/',(req,res)=>{
        res.cookie('email',req.body.email).render('home.ejs');
    });

    app.get('/home/getCookie',(req,res)=>{
        res.json(req.cookies);
    });

    app.get('/home/getUserMain/:email',(req,res)=>{
        Users.findOne({email : req.params.email},(err,user)=>{
            if(err){
                console.log("Có biến rồi đại ca ơi! API : getUserMain");
                throw err;
            }else{
                res.json(user);
            }
        })
        
    });


}