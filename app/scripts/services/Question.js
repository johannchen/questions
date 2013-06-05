'use strict';

angular.module('questionsApp')
  .factory('Question', function ($resource) {
    return $resource('/api/questions/:id', {id:'@id'});
  });
