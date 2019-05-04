
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


app.get("/book", (req, res)=>{
    res.render("book.ejs")
})
app.get("/bookings", (req, res)=>{
    res.render("bookings.ejs")
})

// API
let Admin = require('./src/api/admin.js');
Admin(app);
let APILogin = require('./src/api/login.js');
APILogin(app);
let APISignup = require('./src/api/signup.js');
APISignup(app);
let APIUser = require('./src/api/user.js');
APIUser(app);
let Home = require('./src/api/home.js');
Home(app);
let Detail = require('./src/api/detail.js');
Detail(app);
let City = require('./src/api/city.js');
City(app);
let Cities = require('./src/api/cities.js');
Cities(app);
let Host = require('./src/api/host.js');
Host(app);
let Top = require('./src/api/top.js');
Top(app);
let AddDetail = require('./src/api/addDetail.js')
AddDetail(app);
let AddCityInfo = require('./src/api/addCityInfo.js')
AddCityInfo(app);

// END API















app.listen(PORT, function(){
    console.log("Application listenning on port: " + PORT);
})
