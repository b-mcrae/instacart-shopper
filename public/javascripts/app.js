var app = angular.module('instacart', []);

app.controller('mainController', function($scope, $http) {
  $scope.showApplicationForm = false;

  $scope.toggleApplicationForm = function() {
    $scope.showApplicationForm = !$scope.showApplicationForm;
  };
});
