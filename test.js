/**
 * This is the test
 */
var http = require('http'),
	url  = require('url'),
	port = 1337;

http.createServer(function (req, res) {
	var urlParts = url.parse(req.url, true),
		query 	 = urlParts.query,
		x  		 = +(query.x),
		y  		 = +(query.y);

	res.writeHead(200, { 'Content-Type': 'text/plain' });
	
	if ( isParamsAvailable(x, y) ) {
		res.end( Math.sqrt(x + y) + '');
	} else {
		res.end('Please send avail params');
	}
	
}).listen(port);

console.log('Application is started at ' + port);

function isParamsAvailable (x, y) {
	return !isNaN(x) && !isNaN(y);
}