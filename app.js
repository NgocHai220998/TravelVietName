
let express = require('express');
let morgan = require('morgan');
let bodyParser = require('body-parser');
let app = express();
let PORT = process.env.PORT || 3000;
let cookieParser = require('cookie-parser');


app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine','ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(morgan('dev'));
app.use(cookieParser());


// API
let APILogin = require('./src/api/login.js');
APILogin(app);
let APISignup = require('./src/api/signup.js');
APISignup(app);
let APIUser = require('./src/api/user.js');
APIUser(app);
let Home = require('./src/api/home.js');
Home(app);

// END API




app.get('/',(req,res) => {
    res.render('home.ejs');
});

app.get('/chitiet', (req,res) => {
    res.render('post.ejs');
});

app.get('/cities',(req,res) => {
    res.render('cities.ejs');
});
app.get('/host',(req,res) => {
    res.render('host.ejs');
});







app.listen(PORT, function(){
    console.log("Application listenning on port: " + PORT);
})
