var http   = require('http'),
    url    = require('url'),
    square = require('./getSquare.js'),
    port   = 1337;

function middleware (req, res) {
    var URL = url.parse(req.url, true);
    
    if (URL.pathname === '/magicnumber' || URL.pathname === '/magicnumber/') {
        if (!URL.query.x || !URL.query.y) {
            res.statusCode = 400;
            res.end('x and y are required parameters');
        } else {
            square.getSquare(+URL.query.x, +URL.query.y, function (err, result) {
                if (err) {
                    res.statusCode = 400;
                    res.end(err.message);
                } else {
                    res.statusCode = 200;
                    res.end(String(result));
                }
            });
        }
    } else {
        res.statusCode = 404;
        res.end('Route not found');
    }
}

http.createServer(middleware).listen(port);
console.log('Server is started at ' + port);