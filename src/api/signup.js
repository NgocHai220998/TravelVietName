

let userModel = require('../models/userModel.js');
let multer = require('multer');
let bcrypt = require('bcrypt-nodejs');

module.exports = function(app){

    /**
     * API Create an user
     */
    let storage = multer.diskStorage({  
        destination: (req, file, cb) => {
          cb(null, 'public/images/uploads');
        },
        filename: (req, file, cb) => {
          cb(null, file.originalname);
        }
    });
    let upload = multer({storage: storage});
    app.post('/signup/createUser',upload.single("file"),(req,res)=>{
      let avatar = '/assets/images/uploads/user.png';
      if(req.file){
        avatar = '/assets/images/uploads/' + req.file.filename;
      }

      let hashPassword = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8), null);
      let newUser = {
        fullName : req.body.fullname,
        email : req.body.email,
        password : hashPassword,
        avatar : avatar
      }  
      let isSignup = true;
      userModel.find((err,users)=>{
        if(err){
          console.log('Error :) -> API: Create an user');
          throw err;
        }else{
          for (let i = 0 ; i < users.length ; ++i){
            if(req.body.email === users[i].email){
              isSignup = false;
            }
          }
          if(isSignup){
            userModel.create(newUser,(err,user)=>{
              if(err){
                console.log('Error :) -> API: Create an user');
                throw err;
              }else{
                console.log("Ahihi do ngoc")
                res.render('successSignup.ejs');
              }
            });
          }else{
            res.send("Đăng ký thành công!");
          }
        }
      });

    });





    






}