'use strict';

angular.module('questionsApp')
  .controller('AdminCtrl', function ($scope, Question) {
    $scope.pendingQuestions = Question.query({status:'pending'});
    $scope.approvedQuestions = Question.query({status:'approved'});
    $scope.approve = function(question) {
    	var index = $scope.pendingQuestions.indexOf(question);
    	question.status = 'approved';
    	$scope.approvedQuestions.unshift(question);
    	$scope.pendingQuestions.splice(index, 1);
    };

    $scope.submitQuestion = function() {
    	$scope.newQuestion.status = 'approved';
    	$scope.newQuestion.popularity = 1;
    	$scope.newQuestion.created_at = new Date();
    	$scope.approvedQuestions.unshift($scope.newQuestion);
    	$scope.newQuestion = null;
    };

    $scope.deleteQuestion = function(question) {
    	if(question.status === 'pending') {
    		var index = $scope.pendingQuestions.indexOf(question);
    		$scope.pendingQuestions.splice(index, 1);
    	} else {
    		var index = $scope.approvedQuestions.indexOf(question);
    		$scope.approvedQuestions.splice(index, 1);
    	}
    };

  });
