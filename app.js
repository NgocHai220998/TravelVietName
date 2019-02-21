
let express = require('express');
let morgan = require('morgan');
let bodyParser = require('body-parser');
let app = express();
let PORT = process.env.PORT || 3000;


app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine','ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(morgan('dev'));




app.get('/',(req,res) => {
    res.render('home.ejs');
});



app.listen(PORT, function(){
    console.log("Application listenning on port: " + PORT);
})
