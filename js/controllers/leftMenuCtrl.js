app.controller('LeftMenuCtrl', function($scope, $state) {

  $scope.goToProfile = function() {
    $state.go('main.profile');
  };
  $scope.goToTalents = function() {
    $state.go('main.talents');
  };
  $scope.goToFight = function() {
    $state.go('main.fight');
  };
  $scope.goToBagage = function() {
    $state.go('main.bagage');
  };
  $scope.goToSpells = function() {
    $state.go('main.spells');
  };


  // $scope.lep = $scope.currentHero.basics.lebenspunkte;
  // $scope.asp = $scope.currentHero.basics.astralenegrie;
  // $scope.aus = $scope.currentHero.basics.ausdauer;

  // $scope.lepCent = $scope.lep.currentValue / ( $scope.lep.actual / 100);
  // console.log($scope.lepCent);

});