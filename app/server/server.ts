var express = require("express");
var mongo = require("mongodb").MongoClient;

var MONGO_URL = "mongodb://127.0.0.1:27017/eun";

mongo.connect(MONGO_URL, (err, db) => {

	if (err) throw err;
	console.log("Connected to " + MONGO_URL);

	var app = express();

	app.use((req, res, next) => {
		console.log('%s\t%s %s', req.ip, req.method, req.url);
		next();
	});

	app.post("/submit/:id", express.bodyParser(), (req, res) => {
		console.log("Post : %s=%s", req.params.id, JSON.stringify(req.body));
		var id = req.params.id;

		req.body["ip"] = req.ip;
		req.body["updated"] = Date.now();

		db.collection('data').update({_id: id}, {$set: req.body}, {upsert: true}, err => {
			if (err) {
				res.send(500, {error: err.toString()});
				throw err;
			}

			res.send(200);
		});
	});

	app.get("/data/:hostname", (req, res) => {
		db.collection('data').find({hostname: req.params.hostname}).sort({updated: -1}).limit(10000).toArray((err, data) => {
			if (err) throw err;
			res.set({
				'Content-Type': 'application/json; charset=utf-8',
				"Access-Control-Allow-Origin": "*"
			});
			res.send(JSON.stringify(data, null, 2));
		});
	});


	app.use("/", express.static(__dirname + "/.."));


	app.listen(80);
	/*
	http.createServer((req, res) => {
		res.writeHead(200, {"Content-Type": "text/plain", "Access-Control-Allow-Origin": "*"});
		res.end("wow, very website");
	}).listen(9615);

	http.createServer((req, res) => {
		res.writeHead(200, {"Content-Type": "text/plain", "Access-Control-Allow-Origin": "*"});
		res.end("wow, very website");
	}).listen(9616);
*/
})
