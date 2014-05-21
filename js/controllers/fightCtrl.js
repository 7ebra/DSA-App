app.controller('FightCtrl', function($scope, $state) {

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

  $scope.nkWeapons = $scope.currentHero.baggage.nkWeapons
  $scope.fkWeapons = $scope.currentHero.baggage.fkWeapons
  $scope.wlWeapons = $scope.currentHero.baggage.wlWeapons

  // $scope.weaponChoosed = $scope.fkWeapons.dolch;

  $scope.openWeapon = function(weapon) {
    $scope.weaponChoosed = weapon;
    console.log($scope.weaponChoosed);
    $state.go('main.fight.weaponDefault');
  }
  
  $scope.fkShut = function() {
    $state.go('^.fkDetail');
  }
  $scope.nkAttack = function() {
    $state.go('^.nkAttack'); 
  }
  $scope.nkParade = function() {
    $state.go('^.nkParade'); 
  }

  $scope.disableWeaponChoose = function() {
    $scope.disabled = true; 
  }
  $scope.ableWeaponChoose = function() {
    $scope.disabled = false; 
  }
  console.log($scope.weaponChoosed);
});