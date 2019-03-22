const mongoose = require('mongoose')
var configValues = require("./config.json");

mongoose.connect('mongodb://localhost/Travel', {useNewUrlParser: true});
//mongoose.connect(`mongodb://${configValues.username}:${configValues.password}@ds161475.mlab.com:61475/node-todos1998`,{useNewUrlParser: true});

module.exports = mongoose;