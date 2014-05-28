app.controller('TopbarCtrl', function($scope, HeroService) {
  // $scope.ohaia = HeroService.Ohaia();

  $scope.current = HeroService.Current();
  $scope.currentHero = $scope.current.currentHero;
  $scope.profile = $scope.currentHero.profile;
});