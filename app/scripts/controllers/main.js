'use strict';

angular.module('questionsApp')
  .controller('MainCtrl', function ($scope, $filter, Questions, Storage) {
  	$scope.categoryOption = "Light";
    $scope.randomQuestion = null;     
    $scope.approved = {approved: true};   
    $scope.favorite = false;

    $scope.modalOptions = {
      backdropFade: true,
      dialogFade: true
    };

    $scope.sortOption = "-created_at";

    var d = new Date();
    var today = d.toJSON();
    //angularFire(fbURL, $scope, 'remote', []).then(function() {
    
      $scope.questions = Questions;

      var localQuestionIDs = Storage.get();

      //?? $scope.questions = $filter('filter')(Questions, {approved: true});

    $scope.filterLike = function() {
      $scope.favorite ? false : true;
      if($scope.favorite) {
        $scope.myFavorite = function(question) {
          return localQuestionIDs.indexOf(question.$id) > -1; 
        };
      } else {
        $scope.myFavorite = null;
      }
    };

      $scope.addQuestion = function() {
        if(!$scope.newQuestion.length) {
          return;
        }

        Questions.add( {
          question: $scope.newQuestion,
          category: $scope.categoryOption,
          approved: false,
          popularity: 1,
          created_at: today
        }, function() {
          alert("Thank you for submitted the new question!");
        });
        
        $scope.newQuestion = null;
      };

      $scope.like = function (question) {
      	question.popularity++;
        localQuestionIDs.push(question.$id);
        //localQuestions.push(question);
        Storage.put(localQuestionIDs);
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
