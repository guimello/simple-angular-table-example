(function(angular) {
  'use strict';

  var app = angular.module('leApp', ['leApp.filters']);
  var filters = angular.module('leApp.filters', []);

  /**
   * Represents the simple table view model
   * @controller SimpleTable
   * @property {Array} users data
   * @property {Array} filtered users data
   * @property {Array} moods that are available
   * @property {Object} mood that is selected in the filter
   * @property {String} name that was filtered
   * @property {String} age that was filtered
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

    // Will be defined by the view. It's here just for documenting
    $scope.selectedMood;
    $scope.filteredName;
    $scope.filteredAge;
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
