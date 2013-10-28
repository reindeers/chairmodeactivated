var http = require('http');
var number = 0;

http.createServer(function (req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/plain',
		'Access-Control-Allow-Origin': '*',
		'Cache-Control': 'no-cache'
	});
	number++;
	res.end(number+'');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
