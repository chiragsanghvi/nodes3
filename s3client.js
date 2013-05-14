var AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json');

var s3 = new AWS.S3();

var server = require('http').createServer(function(req, res) {

	var key = 'mykey' + new Date().getTime();
	console.log(key);
	var params = {Bucket: 'testgossamer', Key: key, Body: 'Appacitive.session.environment="sandbox";Appacitive.facebook.initialize("123832777803421","16a2ce403a4736ac5c6beda507aeb243");completed(message);'};
	s3.putObject(params, function(err, data) {
		if (err) {
		  console.log(err);
		  res.end(err);
		}
		else {
		  console.log("Successfully uploaded data to testgossamer/" + key);
		  res.end("Successfully uploaded data to testgossamer/" + key);
		}
	});

});

server.listen('8089');
console.log("Listening on port 8089");