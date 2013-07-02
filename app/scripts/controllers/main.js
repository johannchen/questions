'use strict';

angular.module('questionsApp')
  .controller('MainCtrl', function ($scope, Question) {
  	$scope.randomQuestion = null;
    //$scope.questions = Question.query({status:'approved'});
    $scope.questions = [
      {
        question: "What was the best thing that happened to you this weekend?",
        status: "approved",
        category: "Light",
        popularity: 2,
        created_at: "2013-06-07"
      },
          {
        question: "What is your favorite color?",
        status: "approved",
        category: "Light",
        popularity: 1,
        created_at: "2013-06-07"
      },
      {
        question: "If you could have any job in the world, which one would you want?",
        status: "approved",
        category: "Thoughtful",
        popularity: 3,
        created_at: "2013-06-06"
      }];

    $scope.modalOpts = {
      backdropFade: true,
      dialogFade: true
    };

    $scope.like = function (question) {
    	question.popularity++;
    };
    $scope.randomize = function() {
    	var randomIndex = Math.floor(Math.random() * $scope.questions.length);
    	$scope.randomQuestion = $scope.questions[randomIndex];
      $scope.randomMode = true;
    };
    $scope.exitRandomMode = function() {
		  $scope.randomQuestion = null;
      $scope.randomMode = false;
    };
    
  });
