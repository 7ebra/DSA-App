app.controller('TalentsCtrl', function($scope, HeroService) {

  $scope.current = HeroService.Current();
  $scope.currentHero = $scope.current.currentHero;
  $scope.talents = $scope.currentHero.talents;
  console.log(HeroService);
});