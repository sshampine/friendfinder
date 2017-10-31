var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

var survey = [
	{
		name: "John Jacob",
		photo: "",
		scores: []
	},
	{
		name: "Mary Poppins",
		photo: "",
		scores: []
	}
];


app.get("/", function(request, response) {
	response.sendFile(path.join(__dirname, "root.html"))
});

app.get("/add", function(request, response) {
	response.sendFile(path.join(__dirname, "survey.html"))
});

app.get("/api/friends", function(request, response) {
	response.json(survey);
});

app.post("/api/new", function(reqeust, response) {
	var newsurvey = req.body;
	newsurvey.routeName = newsurvey.name.replace(/s+/g, "").toLowerCase
	console.log(newsurvey)
	survey.push(newsurvey)
	results.json(newsurvey)
})


app.listen(PORT, function() {
	console.log("Express listening on port: " + PORT)
});