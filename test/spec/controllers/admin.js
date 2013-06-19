'use strict';
var PENDING_QUESTIONS = [
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
  },
  {
    question: "If you could ask God a question what would it be?",
    status: "pending",
    category: "thought provoking",
    popularity: 1,
    created_at: "2013-06-05"
  }
];

var APPROVED_QUESTIONS = [
  {
    question: "What is your favorite color?",
    status: "approved",
    category: "ice breaker",
    popularity: 1,
    created_at: "2013-06-04"
  }
];

describe('Controller: AdminCtrl', function () {

  // load the controller's module
  beforeEach(module('questionsApp'));

  var AdminCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    scope = $rootScope.$new();
    $httpBackend.whenGET('/api/questions/pending').respond(PENDING_QUESTIONS);
    $httpBackend.whenGET('/api/questions/approved').respond(APPROVED_QUESTIONS);
    AdminCtrl = $controller('AdminCtrl', {
      $scope: scope
    });
    $httpBackend.flush();
  }));


  it('should attach a list of questions to the scope', function () {
    expect(scope.pendingQuestions.length).toBe(3);
    expect(scope.approvedQuestions.length).toBe(1);
  });
/*
  it('should search questions', function() {

  });

  it('should edit a question', function() {

  });
*/
/*TODO: write test for backend? */
  
  it('should approve a pending question', function() {
    var question = scope.pendingQuestions[0];
    scope.approve(question);
    expect(scope.pendingQuestions.length).toBe(2);
    expect(scope.approvedQuestions.length).toBe(2);
    expect(question.status).toBe('approved');
  });

  it('should add question without approval', function() {
    scope.newQuestion = {
      question: "What is the scariest thing you have ever done for fun?",
      category: "ice breaker",
      created_at: "2013-06-06"
    };
    scope.submitQuestion();
    expect(scope.pendingQuestions.length).toBe(3);
    expect(scope.approvedQuestions.length).toBe(2);
    expect(scope.approvedQuestions[0].status).toBe('approved');
    expect(scope.approvedQuestions[0].popularity).toBe(1);
    expect(scope.newQuestion).toBeNull();
  });

  it('should delete a question', function() {
    var pendingQuestion = scope.pendingQuestions[0];
    scope.deleteQuestion(pendingQuestion);
    expect(scope.pendingQuestions.length).toBe(2);
    var approvedQuestion = scope.approvedQuestions[0];
    scope.deleteQuestion(approvedQuestion);
    expect(scope.approvedQuestions.length).toBe(0);
  });

/*
  it('should login as admin to see this page', function() {

  });
  */

});
