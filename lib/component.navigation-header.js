/*
 * component.navigation-header
 * http://github.amexpub.com/modules
 *
 * Copyright (c) 2014 Yaw Joseph Etse. All rights reserved.
 */
'use strict';

var classie = require('classie'),
	extend = require('util-extend'),
	events = require('events'),
	util = require('util');

var getEventTarget = function (e) {
	// e = e || window.event;
	return e.target || e.srcElement;
};

var navigationHeader = function (config) {
	events.EventEmitter.call(this);

	this.navStyles = ['ha-header-large', 'ha-header-small', 'ha-header-hide', 'ha-header-show', 'ha-header-subshow', 'ha-header-shrink', 'ha-header-rotate', 'ha-header-rotateBack', 'ha-header-color', 'ha-header-box', 'ha-header-fullscreen', 'ha-header-subfullscreen'];
	this.emit('navigationInitialized');
	this.subNavStyles = {
		0: 4,
		1: 4,
		2: 4,
		5: 6,
		7: 6,
		8: 11,
		9: 11,
		10: 11
	};

	this.init = function (options) {
		return this._init(options);
	};
	this.showNav = function (style) {
		return this._showNav(style);
	};
	this.showSubNav = function (subnavToShow) {
		return this._showSubNav(subnavToShow);
	};
	this.hideSubNav = function () {
		return this._hideSubNav();
	};

	this.init(config);
};

util.inherits(navigationHeader, events.EventEmitter);

navigationHeader.prototype._init = function (options) {
	var defaults = {
		idSelector: 'ha-header',
		navStyle: 7,
		subNavStyle: 6
	};
	options = options || {};
	this.options = extend(defaults, options);
	this.options.element = this.options.idSelector;
	this.$el = document.getElementById(this.options.element);
	this._initEvents();
	this.emit('navigationInitialized');
};
navigationHeader.prototype.getOptions = function () {
	return this.options;
};
navigationHeader.prototype._config = function () {
	// the list of items
	this.$list = this.$el.getElementsByTagName('ul')[0];
	this.$items = this.$list.getElementsByTagName('li');
	this.current = 0;
	this.old = 0;
};
navigationHeader.prototype._initEvents = function () {
	var self = this,
		openSubNav = function (event) {
			// console.log('moving on nav');
			var target = getEventTarget(event);
			if (classie.hasClass(target, 'has-sub-nav')) {
				self.showSubNav(target.getAttribute('data-navitr'));
				self.$navbar.removeEventListener('mousemove', openSubNav);
			}
		};
	this.$navbar = document.getElementById(this.options.element + '-nav-id');
	this.$subnavbar = document.getElementById(this.options.element + '-subnav-id');
	this.$navbar.addEventListener('mousemove', openSubNav);
	this.$subnavbar.addEventListener('mouseleave', function () {
		self.hideSubNav();
		self.$navbar.addEventListener('mousemove', openSubNav);
	});
};
navigationHeader.prototype._showNav = function (style) {
	if (typeof style === 'number') {
		this.$el.setAttribute('class', 'ha-header ' + this.navStyles[style]);
		this.options.navStyle = style;
		this.emit('navigationShowEvent');
	}
};
navigationHeader.prototype._showSubNav = function (subnavToShow) {
	var subNavItems = this.$subnavbar.getElementsByTagName('nav');
	for (var x in subNavItems) {
		if (subNavItems[x].style) {
			subNavItems[x].style.display = 'none';
			if (subNavItems[x].getAttribute('data-itr') === subnavToShow) {
				subNavItems[x].style.display = 'block';
			}
		}
	}
	var subnavid = this.subNavStyles[this.options.navStyle.toString()];
	this.$el.setAttribute('class', 'ha-header ' + this.navStyles[subnavid]);
	this.options.subNavStyle = subnavid;
	this.emit('navigationSubNavShowEvent');
};
navigationHeader.prototype._hideSubNav = function () {
	var navid = this.options.navStyle;
	this.$el.setAttribute('class', 'ha-header ' + this.navStyles[navid]);
	this.options.navStyle = navid;
	this.emit('navigationHideNavShowEvent');
};
module.exports = navigationHeader;
