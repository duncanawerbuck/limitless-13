(function() {
	"use strict";

	var util = {
		make: function(elType, className) {
			var ele = document.createElement(elType);
			ele.className = className;

			return ele;
		}
	};

	module.exports = util;

})();