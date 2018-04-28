// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");
app.set( 'port', ( process.env.PORT || 5000 ));

// Sets up the Express App
// =============================================================


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/',htmlRoutes.getHome);
app.get('/survey',htmlRoutes.getSurvey);
app.get('/api/friends',apiRoutes.getFriends);
app.post('/api/friends',apiRoutes.postFriends);


app.listen( app.get( 'port' ), function() {
    console.log( 'Node server is running on port ' + app.get( 'port' ));
});

module.exports = app;