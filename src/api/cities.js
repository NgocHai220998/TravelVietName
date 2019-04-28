module.exports = function(app){
    app.get('/cities', (req,res) => {
        res.render('cities.ejs');
    });

}