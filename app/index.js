var square  = require('./getSquare.js'),
    request = require('request'),
    params  = generateParams();

square.getSquare(params.x, params.y, function (err, num) { console.log(num); });

function generateParams () {
    return {
        'x' : generNumber(),
        'y' : generNumber()
    };
}

function generNumber () {
    return parseInt(Math.random() * 100, 0);
}