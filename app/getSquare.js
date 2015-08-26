module.exports = {
	getSquare: function (x, y, call) {

		if (isNaN(x) || isNaN(y)) {
			return call({
				message: 'x and y must a numbers'
			});
		}

		call(null, Math.sqrt(x + y));
	}
};