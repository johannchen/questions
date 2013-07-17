'use strict';

angular.module('questionsApp')
  .filter('approved', function () {
    return function (input) {
      var result = [];
      angular.forEach(input, function(question) {
      	if(question.approved)
      		result.push(question);
      });
      return result;
    };
  });
