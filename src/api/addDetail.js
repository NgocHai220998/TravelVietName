


let postModel = require('../models/postModel.js');
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


  app.get('/adddetail',(req,res)=>{
    res.render('addDetail');
  });

  app.post('/adddetail',upload.array('file',30),(req,res)=>{
    // console.log(req.body);
    // console.log(req.files);
    let imageTemp = [{}];
  
    if(req.files){
      let i = 0;
      for (file in req.files){
        //console.log(req.files[i].filename);
        src = {
          src : '/assets/images/uploads/' +  req.files[i].filename
        }
        imageTemp[i++] = src;
      }
    }
    let cityCustom = req.body.city.split(' ').join('');

    let newPost = {
      city : cityCustom,
      host : req.body.email,
      aboutHost : req.body.aboutHost,
      dola : {
        value : req.body.value,
        time : req.body.time
      },
      star : req.body.star,
      post : {
        title : req.body.title,
        about : req.body.about,
        images : imageTemp,
        toDo : req.body.toDo,
        provide : req.body.provide,
        who : req.body.who,
        why : req.body.why,
        where : {
          city : req.body.city,
          image : req.body.image
        }
      },
      approval: false
    }

    postModel.create(newPost,(err,post)=>{
      if(err){
        console.log(err + '');
        throw err;
      }else{
        res.json(post);
      }
    })


    // console.log(newPost);
    console.log(newPost.post.image);




  });



  
  app.get('/api/getPosts',(req,res)=>{
    postModel.find((err,posts)=>{
      if(err){
        console.log(err + '');
        throw err;
      }else{
        res.json(posts);
      }
    });
  });



}