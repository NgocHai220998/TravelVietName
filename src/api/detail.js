
let postModel = require('../models/postModel.js');


module.exports = function (app) {


    app.get('/detail/:id', (req, res) => {
        res.render('post.ejs');
    });


    app.get('/api/getDetailById/:id', (req, res) => {
        postModel.findOne({ _id: req.params.id }, (err, post) => {
            if (err) {
                console.log(err + '');
                throw err;
            } else {
                res.json(post);
            }
        });
    });






}