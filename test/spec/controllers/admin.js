'use strict';
var QUESTIONS = [
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

describe('Controller: AdminCtrl', function () {

  // load the controller's module
  beforeEach(module('questionsApp'));

  var AdminCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    scope = $rootScope.$new();
    $httpBackend.whenGET('/api/questions/pending').respond(QUESTIONS);
    AdminCtrl = $controller('AdminCtrl', {
      $scope: scope
    });
    $httpBackend.flush();
  }));


  it('should attach a list of pending questions to the scope', function () {
    expect(scope.pendingQuestions.length).toBe(3);
  });

  it('should search questions', function() {

  });

  it('should edit a question', function() {

  });

  it('should approve a pending question', function() {

  });

  it('should add question without approval', function() {

  });

  it('should delete a question', function() {

  });

  it('should login as admin to see this page', function() {

  });
  

});
