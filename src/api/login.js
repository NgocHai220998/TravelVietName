
let bcrypt = require('bcrypt-nodejs');
let userModel = require('../models/userModel.js');

module.exports = function(app){
    
    // GET PAGE LOGIN
    
    app.get('/login',(req,res)=>{
        res.clearCookie('email');
        res.render('login.ejs');
    });

    app.get('/login/getUser',(req,res)=>{
        res.json(req.cookies);
    });
    app.post('/login/checkInfo',(req,res)=>{

        userModel.findOne({email : req.body.email},(err,user)=>{
            console.log(user);
            if(err){
                console.log('Error :) -> API: Check an user');
                throw err;
            }else{
                if(bcrypt.compareSync(req.body.password, user.password)){
                    res.send("1");
                }else{
                    res.send("0");
                }
            }
        });
    });
    






}


