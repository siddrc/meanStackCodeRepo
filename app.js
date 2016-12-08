
console.log("Starting first app web server...");
console.log("Initiate URL mapping....");
var express = require('express');
var bodyParser = require('body-parser');//TODO: why do we need body parse
var indexPageAction = require("./server/actions/indexPageAction");
var userAction = require("./server/actions/userAction");
var app = express();
var session = require('express-session');
app.use(session({
    secret: '123456secretkey',
    resave: false,
    saveUninitialized: true
}));
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/public'));
app.use('/user',userAction);
app.listen(9000);
app.use('/', indexPageAction);
console.log("Application now ready to receive requests....");
console.log("Server started at " + new Date());
console.log("Press Ctrl+C to stop the server....");
