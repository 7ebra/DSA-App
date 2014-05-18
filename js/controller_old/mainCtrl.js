app.controller('mainCtrl', function($scope) {

  $scope.gilion = Gilion();
  $scope.ohaia = Ohaia();
  // $scope.gilion = Jonas();

  $scope.currentHero = $scope.ohaia;

  console.log($scope.ohaia);


});