'use strict';

angular.module('questionsApp')
  .controller('MainCtrl', function ($scope, $filter, Questions) {
  	$scope.categoryOption = "Light";
    $scope.randomQuestion = null;        

    $scope.modalOptions = {
      backdropFade: true,
      dialogFade: true
    };

    $scope.sortOption = "-created_at";

    //angularFire(fbURL, $scope, 'remote', []).then(function() {
    
      $scope.questions = Questions;
      //$scope.questions = $filter("approved")($scope.questions);

      $scope.addQuestion = function() {
        if(!$scope.newQuestion.length) {
          return;
        }

        $scope.questions.push( {
          question: $scope.newQuestion,
          category: $scope.categoryOption,
          approved: false,
          popularity: 1,
          created_at: new Date(),
        })
        
        $scope.newQuestion = null;
      };
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
    //});
  });
