'use strict';

angular.module('questionsApp')
  .filter('category', function () {
    return function (input, cat) {
    	if(!cat) return input;
      var result = [];
      angular.forEach(input, function(question) {
      	if(question.category === cat)
      		result.push(question);
      });
      return result;
    };
  });
