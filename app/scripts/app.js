'use strict';

angular.module('questionsApp', ['ngResource', 'ui.bootstrap', 'firebase'])
  .value('fbURL', 'https://questions.firebaseio.com/questions')
  .factory('Questions', function(angularFireCollection, fbURL) {
    return angularFireCollection(fbURL);
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
