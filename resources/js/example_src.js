'use strict';

var ComponentTabs = require('../../index'),
	componentTab1;

var tabEvents = function () {
	componentTab1.on('tabsShowIndex', function (index) {
		console.log('tab show index', index);
	});
};

window.addEventListener('load', function () {
	var tabelement = document.getElementById('tabs');
	componentTab1 = new ComponentTabs(tabelement);
	tabEvents();

	window.componentTab1 = componentTab1;
}, false);
