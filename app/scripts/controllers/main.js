'use strict';

angular.module('questionsApp')
  .controller('MainCtrl', function ($scope, Question) {
    $scope.questions = Question.query();
  });
