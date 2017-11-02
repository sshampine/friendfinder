//requires path to access html files from folder structure
var path = require("path");

module.exports = function(app) {
	//default route
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"))
	});

	//route to survey
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"))
	});
};

