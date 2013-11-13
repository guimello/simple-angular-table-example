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
   * @property {Object} mood that was filtered
   * @property {String} name that was filtered
   * @property {String} age that was filtered
   * @property {String} username that was filtered
   */
  app.controller("SimpleTable", ["$scope", function($scope) {
    $scope.users = [
      { "name": "Guilherme da Silva Mello", "age": 28, "username": "guimello", "mood": ":)" },
      { "name": "Gordon Freeman", "age": 40, "username": "freeman",  "mood": ":/" },
      { "name": "Rei do camarote", "age": 35, "username": "frei",  "mood": ":(" },
      { "name": "Bruce Dickinson", "age": 50, "username": "dick",  "mood": ":)" }
    ];


    $scope.availableMood = [
      { "emoticon": ":)" },
      { "emoticon": ":/" },
      { "emoticon": ":(" }
    ];

    // Those will be defined by the view. It's here just for documenting
    $scope.filteredUsers;
    $scope.filteredMood;
    $scope.filteredName;
    $scope.filteredAge;
    $scope.filteredUsername;
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

  /**
   * Filters the username
   *
   * It's implemented here this way as a contrast to the others that are
   * perform in the html.
   *
   * A way to avoid all those filters in the view is to use one filter there
   * and here in js apply all filters in sequency.
   *
   * @filter usernameFilter
   * @return {Array} filtered users by username
   */
  filters.filter("usernameFilter", ['$filter', function($filter) {
    return function usernameFilter(users, username) {
      if (!users || !username) return users;

      return $filter('filter')(users, { username: username });
    }
  }]);
})(angular);
