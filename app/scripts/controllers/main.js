'use strict';

angular.module('questionsApp')
  .controller('MainCtrl', function ($scope, Question) {
  	$scope.randomQuestion = null;
    $scope.questions = Question.query({status:'approved'});
    $scope.like = function (question) {
    	question.popularity++;
    };
    $scope.randomize = function() {
    	var randomIndex = Math.floor(Math.random() * $scope.questions.length);
    	$scope.randomQuestion = $scope.questions[randomIndex];
    };
    $scope.exitRandomMode = function() {
		$scope.randomQuestion = null;
    };
  });
