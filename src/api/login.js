


module.exports = function(app){

    // GET PAGE LOGIN
    app.get('/login',(req,res)=>{
        res.render('login.ejs');
    });

    app.get('login/getUser',(req,res)=>{
        res.json(req.cookies);
    });






}