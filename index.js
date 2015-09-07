'use strict';

var mini = require('react-mini');

module.exports = function() {
	var args = Array.prototype.slice.call(arguments);
	return mini.apply(null, [this].concat(args));
};
