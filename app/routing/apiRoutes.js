//require survey from file
var survey = require("../data/friends");

//exports routes as function
module.exports = function(app) {
	//api route to return json data
	app.get("/api/friends", function(req, res) {
		res.json(survey);
	});

	//api route to determine best friend match
	app.post("/api/friends", function(req, res) {
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

}