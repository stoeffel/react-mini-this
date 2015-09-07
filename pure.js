'use strict';

var pure = require('react-mini/pure');

module.exports = function() {
	var args = Array.prototype.slice.call(arguments);
	return pure.apply(null, [this].concat(args));
};
