'use strict';

angular.module('questionsApp')
  .controller('AdminCtrl', function ($scope, Question) {
    //$scope.pendingQuestions = Question.query({status:'pending'});
    //$scope.approvedQuestions = Question.query({status:'approved'});
    $scope.pendingQuestions = [
 {
    question: "What was the best thing that happened to you this weekend?",
    status: "pending",
    category: "ice breaker",
    popularity: 1,
    created_at: "2013-06-07"
  },
  {
    question: "If you could have any job in the world, which one would you want?",
    status: "pending",
    category: "ice breaker",
    popularity: 1,
    created_at: "2013-06-06"
  }
    ];
    $scope.approvedQuestions = [];
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
