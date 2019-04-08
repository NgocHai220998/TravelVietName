let userModel = require('../models/userModel.js');



module.exports = function(app){

    /**
     * API GET USERS
     */
    app.get('/api/getUsers',(req,res)=>{
        userModel.find((err,users)=>{
            if(err){
                console.log('Error :) -> API: Get users');
                throw err;
            }else{
                res.json(users);
            }
        });
    });
}