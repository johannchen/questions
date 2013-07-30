'use strict';

angular.module('questionsApp')
  .service('Storage', function Storage() {
    var STORAGE_ID = 'questions';
    return {
    	get: function() {
    		return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
    	},
    	put: function(questions) {
    		localStorage.setItem(STORAGE_ID, JSON.stringify(questions));
    	}
    };
  });
