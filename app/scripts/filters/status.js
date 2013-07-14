'use strict';

angular.module('questionsApp')
  .filter('status', function () {
    return function (input, status) {
    	if(!status) return input;
      var result = [];
      angular.forEach(input, function(question) {
      	if(question.status === status)
      		result.push(question);
      });
      return result;
    };
  });
