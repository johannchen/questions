'use strict';

angular.module('questionsApp')
  .controller('AdminCtrl', function ($scope, $filter, $timeout, $location, angularFire, fbURL) {
    //$scope.pendingQuestions = Question.query({status:'pending'});
    //$scope.approvedQuestions = Question.query({status:'approved'});
    $scope.category = "Light";
    $scope.statusFilter = {approved: false};
    //$scope.editedQuestion = null;
    angularFire(fbURL, $scope, 'questions', []).then(function() {

//$scope.approvedQuestions = $filter("status")(questions, "approved");
 
      $scope.approve = function(question) {
        var index = $scope.pendingQuestions.indexOf(question);
        question.status = 'approved';
        $scope.approvedQuestions.unshift(question);
        $scope.pendingQuestions.splice(index, 1);
      };

      $scope.filterApproved = function () {
        $scope.statusFilter = ($scope.approved) ?
          {approved: true} : {approved: false};
      }

      $scope.addQuestion = function() {
        if(!$scope.newQuestion.length) {
          return;
        }

        $scope.questions.push( {
          question: $scope.newQuestion,
          category: $scope.category,
          approved: true,
          popularity: 1,
          created_at: new Date(),
        })
        
        $scope.newQuestion = null;
      };

      $scope.removeQuestion = function(question) {       
        var index = $scope.questions.indexOf(question);
        $scope.questions.splice(index, 1);
      };

      $scope.doneEditing = function(question) {
        this.isEditing = false;
        if(!question.question) {
          $scope.removeQuestion(question);
        }
      };

    });
    
    

  });
