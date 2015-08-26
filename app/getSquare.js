request = require('request');

module.exports = {
	getSquare: function (x, y, next) {
		var reqParams = {
			'x': x,
			'y': y
		}

		if (isNaN(+reqParams.x) || isNaN(+reqParams.y)) {
			return next({
				message: 'x and y must be a numbers'
			});
		}

		request.get('http://apps.wavana.com/magicnumber/', reqParams, function (error, response, num) {

		    if (!error && response.statusCode == 200) {
	        	next(null, Math.sqrt(num));
		    } else {
		    	next({
		    		message: 'Error while requesting'
		    	});
		    }
		});
	}
};