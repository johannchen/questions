'use strict';

angular.module('questionsApp')
  .controller('MainCtrl', function ($scope, $filter, angularFire, fbURL) {
  	$scope.randomQuestion = null;
    //$scope.questions = Question.query({status:'approved'});

    

    $scope.modalOptions = {
      backdropFade: true,
      dialogFade: true
    };

    $scope.sortOption = "-created_at";

    angularFire(fbURL, $scope, 'questions', []).then(function() {
      $scope.questions = $filter("approved")($scope.questions);
      $scope.like = function (question) {
      	question.popularity++;
      };
      $scope.randomize = function() {
        var questions = $filter("category")($scope.questions, $scope.category);
      	var randomIndex = Math.floor(Math.random() * questions.length);
      	$scope.randomQuestion = questions[randomIndex];
        $scope.randomMode = true;
      };
      $scope.exitRandomMode = function() {
  		  $scope.randomQuestion = null;
        $scope.randomMode = false;
      };
      $scope.openNewQuestion = function() {
        $scope.isNewQuestion = true;
      };
      $scope.cancelNewQuestion = function() {
        $scope.isNewQuestion = false;
      };
    });
  });
