


let userModel = require('../models/userModel.js');
let multer = require('multer');


let storage = multer.diskStorage({  
  destination: (req, file, cb) => {
    cb(null, 'public/images/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});
let upload = multer({storage: storage});


module.exports = function(app){


  app.get('/api/ngochai220998/adddetail',(req,res)=>{
    res.render('addDetail');
  });

  app.post('/api/adddetail',upload.array('file',20),(req,res)=>{
    console.log(req.body);
    console.log(req.files[0]);
    res.send(req.body);
  });




}