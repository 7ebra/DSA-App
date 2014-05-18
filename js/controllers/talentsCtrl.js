app.controller('TalentsCtrl', function($scope) {
  $scope.talents = $scope.currentHero.talents;
  console.log($scope.talents);
});