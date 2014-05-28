app.controller('ProfileCtrl', function($scope, HeroService) {
  $scope.current = HeroService.Current();
  $scope.currentHero = $scope.current.currentHero;
  $scope.profile = $scope.currentHero.profile;
});