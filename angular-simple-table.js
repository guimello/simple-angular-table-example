(function(angular) {
  'use strict';

  var app = angular.module('App', ['App.filters']);
  var filters = angular.module('App.filters', []);

  /**
   * Represents the simple table view model
   * @controller SimpleTable
   * @property {Array} users data
   * @property {Array} filtered users data
   * @property {Array} moods that are available
   * @property {Object} mood that is selected in the filter
   */
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

  /**
   * Custom mood filter that selects the users by mood
   * @filter moodFilter
   * @return {Array} filtered users by mood
   */
  filters.filter('moodFilter', [function() {
    return function(users, mood) {
      if (!users || !mood) {
        return users;
      } else {
        return users.filter(function(user) {
          return user.mood === mood.emoticon;
        });
      }
    }
  }]);
})(angular);
