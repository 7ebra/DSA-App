app.controller('MainCtrl', function($scope) {

  // $scope.gilion = Gilion();
  $scope.ohaia = Ohaia();

  $scope.currentHero = $scope.ohaia;
  console.log($scope.currentHero);

});