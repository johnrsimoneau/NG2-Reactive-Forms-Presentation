/* https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const settings = require('./config.settings');
const port = process.env.PORT || 1313;
const apiRouter = require('./modules/api.router');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Configure app to handle CORS requests
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, \ Authorization');
    next();
  });

var mongoOptions = { 
    useMongoClient: true,
    autoIndex: false,
    reconnectTries: 3,
    reconnectInterval: 500
};

mongoose.connect(settings.configSettings.dbConnectionString, mongoOptions);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error.'));
db.once('open', function() {
    console.log('Connected to MongoLab DB.');
});

// Root routes
app.get('/', function (req, res) {
    res.send("API app home page");
});

app.use('/api', apiRouter);

app.listen(port);
console.log('App listening on port ' + port);