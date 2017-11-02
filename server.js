//require express and bodyParser

var express = require("express");
var bodyParser = require("body-parser");

//define app and port
var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//require route files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//listen port
app.listen(port, function() {
	console.log("Express listening on port: " + port)
});