let cityModel = require("../models/cityModel");
let multer = require('multer');

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/me/citiesImage');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
let upload = multer({ storage: storage });


module.exports = function (app) {
    app.get("/admin/addCityInfo", function (req, res) {
        res.render("addCityInfo.ejs");
    })
    app.post("/api/addCityInfo", upload.array('file', 30), (req, res) => {

        let imageTemp = [{}];

        if (req.files) {
            let i = 0;
            for (file in req.files) {
                //console.log(req.files[i].filename);
                src = {
                    src: '/assets/images/me/citiesImage/' + req.files[i].filename
                }
                imageTemp[i++] = src;
            }
        }

        let cityInfo = {
            nameID: req.body.city.split(' ').join(''),
            name: req.body.city,
            title: req.body.title,
            images: imageTemp
        }
        cityModel.create(cityInfo, (err, cityInfo) => {
            if (err) {
                console.log(err + '');
                throw err;
            } else {
                res.json(cityInfo);
            }
        })
    }),
    app.get('/api/getCitiesInfo',(req,res)=>{
        cityModel.find((err,cities)=>{
          if(err){
            console.log(err + '');
            throw err;
          }else{
            res.json(cities);
          }
        });
      });
}
