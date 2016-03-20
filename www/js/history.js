angular.module('starter.controllers')
  .controller('HistoryCtrl', function($scope) {

    $scope.history = [
      { label: "Today, 10am-11am", min: 60, max: 87, color: "orange" },
      { label: "Today, 9am-10am", min: 62, max: 93, color: "" }
    ]

  });
