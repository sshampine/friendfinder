var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var survey = [
	{
		name: "John Jacob",
		photo: "blah/com",
		scores: ["2", "1", "3", "5", "1", "2", "4", "3", "1", "5"]
	},
	{
		name: "Mary Ploppins",
		photo: "plop/plop.com",
		scores: ["5", "3", "2", "1", "3", "3", "3", "1", "2", "4"]
	}
];


app.get("/", function(request, response) {
	response.sendFile(path.join(__dirname, "home.html"))
});

app.get("/survey", function(request, response) {
	response.sendFile(path.join(__dirname, "survey.html"))
});

app.get("/api/friends", function(request, response) {
	response.json(survey);
});

app.post("/api/friends", function(req, res) {
	//var newsurvey = request.body;
	//newsurvey.routeName = newsurvey.name.replace(/s+/g, "").toLowerCase
	//console.log(newsurvey)
	//survey.push(req.body)
	//res.json(true)
	//console.log(survey)
	//results.json(newsurvey)
	var match = {
		name: "",
		photo: "",
		friendDiff: Infinity
	};

	var userData = req.body;
	var userScores = userData.scores;
	var totalDiff;

	for (var i = 0; i < survey.length; i++) {
		var currentFriend = survey[i];
		totalDiff = 0;
		console.log(currentFriend.name)
		for (var j = 0; j < currentFriend.scores.length; j++) {
			var currentFriendScore = currentFriend.scores[j];
			var currentUserScore = userScores[j]

			totalDiff += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
		}

		if (totalDiff <= match.friendDiff) {
			match.name = currentFriend.name;
			match.photo = currentFriend.photo;
			match.friendDif = totalDiff;
		}
	}

	survey.push(userData)
	res.json(match)

})


app.listen(PORT, function() {
	console.log("Express listening on port: " + PORT)
});