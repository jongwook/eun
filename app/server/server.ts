var http = require("http");
var mongo = require("mongodb").MongoClient;

var MONGO_URL = "mongodb://127.0.0.1:27017/eun";

mongo.connect(MONGO_URL, (err, db) => {

	if (err) throw err;
	console.log("Connected to " + MONGO_URL);

	http.createServer(function (req, res) {

		res.writeHead(200, {"Content-Type": "text/plain"});
		res.end("wow, very website");
	}).listen(9615);

})
