const mongoose = require("mongoose");
var configValues = require("./config.json");
 
// mongoose.connect('mongodb://localhost/Travel', {useNewUrlParser: true});

mongoose.connect(
 `mongodb://${configValues.username}:${
   configValues.password
 }@ds227594.mlab.com:27594/vueexpress`,
 { useNewUrlParser: true }
);


module.exports = mongoose;
