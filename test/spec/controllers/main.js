'use strict';

var QUESTIONS = [
  {
    question: "What was the best thing that happened to you this weekend?",
    status: "approved",
    category: "ice breaker",
    popularity: 1,
    created_at: "2013-06-07"
  },
  {
    question: "If you could have any job in the world, which one would you want?",
    status: "approved",
    category: "ice breaker",
    popularity: 10,
    created_at: "2013-06-06"
  },
  {
    question: "If you could ask God a question what would it be?",
    status: "approved",
    category: "thought provoking",
    popularity: 5,
    created_at: "2013-06-05"
  }
];

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('questionsApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    scope = $rootScope.$new();
    $httpBackend.whenGET('/api/questions/approved').respond(QUESTIONS);
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
    $httpBackend.flush();
  }));

  it('should attach a list of approved questions to the scope', function () {
    expect(scope.questions.length).toBe(3);
  });

  it('should increase popularity of a question', function() {
    var question = scope.questions[0];
    scope.like(question);
    expect(question.popularity).toBe(2);
  });

  it('should randomize questions', function() {
    scope.randomQuestion = null;
    scope.randomize();
    expect(scope.questions).toContain(scope.randomQuestion);
    scope.exitRandomMode();
    expect(scope.randomQuestion).toBeNull();
  });

/*
  it('should submit new question to admin', function(questionService) {
    var newQuestion = {
      question: "What is the scariest thing you have ever done for fun?",
      status: "pending",
      category: "ice breaker",
      popularity: 1,
      created_at: "2013-06-06"
    };
    scope.submitQuestion(newQuestion);
    expect(scope.questions.length).toBe(3);
    expect(questionService.pending.length).toBe(2);
  });
*/
});
