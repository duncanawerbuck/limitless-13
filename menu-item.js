(function() {
	"use strict";

	var util = require("./util.js");

	console.log("menu item is included");

	function menuItem() {
		var o = {
			ele: null,
			data: null,
			init: function() {
				this.initEle();
				this.initEvent();
			},
			initEle: function() {
				this.ele = util.make("div", "app__menu-item");
				this.ele.innerHTML = this.data;

			},
			initEvent: function() {}
		};

		o.init();
		return o;
	}

	module.exports = menuItem;

})();