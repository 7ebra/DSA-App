app.controller('MainCtrl', function($scope, HeroService) {

  
  $scope.spells = HeroService.Current().currentHero.spells;

});