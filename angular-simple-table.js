'use strict';
var app = angular.module('App', ['App.filters']);

app.controller('SimpleTable', ["$scope", function($scope) {
  $scope.users = [
    { "name": "Guilherme da Silva Mello", "age": 28, "mood": ":)" },
    { "name": "Gordon Freeman", "age": 40, "mood": ":/" },
    { "name": "Rei do camarote", "age": 35, "mood": ":(" },
    { "name": "Bruce Dickinson", "age": 50, "mood": ":)" }
  ];

  $scope.filteredUsers = [];

  $scope.availableMood = [
    { "emoticon": ":)" },
    { "emoticon": ":/" },
    { "emoticon": ":(" }
  ];

  $scope.selectedMood;
}]);

angular.module('App.filters', []).filter('moodFilter', [function() {
  return function(users, mood) {
    if (!users || !mood) {
      return users;
    } else {
      var filteredUsers = [];

      angular.forEach(users, function(user) {
        if (angular.equals(user.mood, mood.emoticon)) {
          filteredUsers.push(user);
        }
      });

      return filteredUsers;
    }
  }
}]);
