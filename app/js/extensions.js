'use strict';

var masterView = require('./views/master.js');
var headerView = require('./views/header.js');
var searchBarView = require('./views/search-bar.js');
var breadcrumbsView = require('./views/breadcrumbs.js');

var rootView = require('./views/root.js');
var articleView = require('./views/article.js');
var articlesView = require('./views/articles.js');

var articlesCollection = require('./collections/articles.js');

var articleModel = require('./models/article.js');

// Making Backbone class extensions available through App.extensions
// Mainly for testing, but also keeps the app layout a little neater.

module.exports = { 

  views: {
    master          : masterView,
    header          : headerView,
  	root 						: rootView,
		article 				: articleView,
		articles				: articlesView,
    searchBar       : searchBarView,
    breadcrumbs     : breadcrumbsView
  },

  collections: {
  	articles 				: articlesCollection
  },

  models: {
  	article 				: articleModel
  }

};