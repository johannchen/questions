'use strict';

angular.module('questionsApp')
  .factory('Question', function ($resource) {
    return $resource('/api/questions/:status/:id', {status:'@status', id:'@id'});
  });
