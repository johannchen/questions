'use strict';

angular.module('questionsApp')
  .controller('AdminCtrl', function ($scope, $filter, angularFire, fbURL) {
    $scope.category = "Light";
    $scope.statusFilter = {approved: false};
    //$scope.editedQuestion = null;
    angularFire(fbURL, $scope, 'questions', []).then(function() {

//$scope.approvedQuestions = $filter("status")(questions, "approved");
 
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
