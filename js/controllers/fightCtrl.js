app.controller('FightCtrl', function($scope) {

  $scope.lep = $scope.currentHero.basics.lebenspunkte;
  $scope.asp = $scope.currentHero.basics.astralenegrie;
  $scope.aus = $scope.currentHero.basics.ausdauer;

  $scope.lepPlus = function() {
    $scope.lep.currentValue = $scope.lep.currentValue + 1; 
  }
  $scope.lepMinus = function() {
    $scope.lep.currentValue = $scope.lep.currentValue - 1; 
  }
  $scope.aspPlus = function() {
    $scope.asp.currentValue = $scope.asp.currentValue + 1; 
  }
  $scope.aspMinus = function() {
    $scope.asp.currentValue = $scope.asp.currentValue - 1; 
  }
  $scope.ausPlus = function() {
    $scope.aus.currentValue = $scope.aus.currentValue + 1; 
  }
  $scope.ausMinus = function() {
    $scope.aus.currentValue = $scope.aus.currentValue - 1; 
  }

  $scope.weapons = $scope.currentHero.baggage.weapons

  $scope.weaponChoosed = $scope.weapons.raufen;

  $scope.openWeapon = function(weapon) {
    $scope.weaponChoosed = weapon;
  }

  console.log($scope.weaponChoosed);
  console.log($scope.weapons.dolch);
});