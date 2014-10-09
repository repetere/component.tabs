# component.navigation-header

The header is composed of various effects. It has a perspective wrapper, a front and a bottom (for the 3d rotation). Inspired by [On scroll header effects from codrops](http://tympanus.net/codrops/2013/07/16/on-scroll-header-effects/)

## Example

Check out `example/index.html`, the example javascript for the example page is `resources/js/example_src.js`

## Installation

```
$ npm install periodicjs.theme-component.navigation-header
```

The navigation component is a browserify javascript module.

## Usage

*JavaScript*
```javascript
var navComponent = require('periodicjs.theme-component.navigation-header'),
	myNav;
//initialize nav component after the dom has loaded
window.addEventListener('load',function(){
	myNav = new navComponent({
		idSelector: 'ha-header',
		navStyle: 7,
		subNavStyle: 6
	});
	//expose your nav component to the window global namespace
	window.myNav = myNav;
});
```

*HTML*
```html
<html>
	<head>
  	<title>Your Page</title>
  	<link rel="stylesheet" type="text/css" href="[path/to]/component.navigation-header.css">
  	<script src='[path/to/browserify/bundle].js'></script>
	</head>
	<body>
		<div class="header-container">
    	<header id="ha-header" class="ha-header ha-header-rotateBack">
			  <div class="ha-header-perspective">
			    <div class="ha-header-front">
			      <h1>
			        <a href="/">
			          <img src="http://getperiodic.org/assets/img/periodic-favicon.png">
			        </a>
			      </h1>
			      <nav id="ha-header-nav-id">
			        <a href="/items" data-navitr="0">items</a>
			        <a href="/collections" data-navitr="1" class="">collections</a>
			        <a href="/browse/contenttypes" data-navitr="2" class="has-sub-nav">browse</a>
			        <a class="search-nav">
			          <form action="/search" method="get" class="_pea-form">
			            <input type="text">
			          </form>
			        </a>
			      </nav>
			    </div>
			    <div id="ha-header-subnav-id" class="ha-header-bottom">
			      <nav data-itr="2" style="display: none;">
			        <a href="/browse/authors" data-navitr="0" class="">Authors</a>
			        <a href="/browse/contenttypes" data-navitr="1" class="">Content Types</a>
			        <a href="/browse/categories" data-navitr="2" class="">Categories</a>
			        <a href="/browse/tags" data-navitr="3" class="">Tags</a>
			      </nav>
			    </div>
			  </div>
			</header>
  	</div>
  	<div class="container">
  		your page content
  	</div>
	</body>
</html>
```

##API

```javascript
myNav.showNav(1); //show nav with "ha-header-large" style
myNav.showSubNav(6); //show sub nav with "ha-header-subshow" style
myNav.hideSubNav(); //hide sub nav
```
##Development
*Make sure you have grunt installed*
```
$ npm install -g grunt-cli
```

Then run grunt watch
```
$ grunt watch
```

##Notes
* The Navigation Module uses Node's event Emitter for event handling.
* The Template Generator uses EJS, but you can generate your own mark up
* The less file is located in `resources/stylesheets`