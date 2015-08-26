var should = require('should'),
	square = require('./app/getSquare.js');

describe('getSquare', function () {
    it('should throw an error if x is not a number', function (done) {
        square.getSquare('abc', 4, function (err, result) {
            should.exist(err);
            should.not.exist(result);
            done();
        });
    });
    it('should throw an error if y is not a number', function (done) {
        square.getSquare(6, 'abc', function (err, result) {
            should.exist(err);
            should.not.exist(result);
            done();
        });
    });
    it('should throw an error if both parameters are not number', function (done) {
        square.getSquare('abc', 'abc', function (err, result) {
            should.exist(err);
            should.not.exist(result);
            done();
        });
    });
    it('should return calculate the square root correctly', function (done) {
        square.getSquare(10, 6, function (err, result) {
            should.not.exist(err);
            should.exist(result);
            done();
        });
    });
});