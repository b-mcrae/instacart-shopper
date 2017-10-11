var app = angular.module('instacart', []);

app.controller('mainController', function($scope, $http) {
  $scope.showApplicationForm = false;

  /**
   * Toggles the display of the application form.
   */
  $scope.toggleApplicationForm = function() {
    $scope.showApplicationForm = !$scope.showApplicationForm;
  };

  /**
   * Submits the form data.
   * Returns the form data to the browser's console as an object.
   */
  $scope.submitApplicationForm = function(formData) {
    console.log(formData);
  };
});
