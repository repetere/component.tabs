'use strict';

var navigationHeader = require('../../index'),
	periodicalNavigation;

var navEvents = function () {
	periodicalNavigation.on('navigationInitialized', function () {
		console.log('nav loaded');
	});
	periodicalNavigation.on('navigationShowEvent', function () {
		console.log('nav shown');
	});
	periodicalNavigation.on('navigationSubNavShowEvent', function () {
		console.log('nav sub nav shown');
	});
	periodicalNavigation.on('navigationHideNavShowEvent', function () {
		console.log('nav hide sub nav');
	});
};

window.addEventListener('load', function () {
	periodicalNavigation = new navigationHeader({
		idSelector: 'ha-header'
	});
	navEvents();
	window.periodicalNavigation = periodicalNavigation;
}, false);
