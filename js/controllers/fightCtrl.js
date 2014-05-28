app.controller('FightCtrl', function($scope, $state, HeroService) {

  $scope.current = HeroService.Current();
  $scope.currentHero = $scope.current.currentHero;

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

  $scope.weaponChoosed = $scope.nkWeapons.dolch;

  $scope.ini = function() {
    $scope.currentHero.basics.ini_basis.currentValue = $scope.currentHero.basics.ini_basis.actual + Math.floor(Math.random() * 6) + 1;
    $scope.iniValue = true;
  }
  $scope.orientaion = function() {
    $scope.currentHero.basics.ini_basis.currentValue = $scope.currentHero.basics.ini_basis.actual + 6;
  }
  $scope.dodge = function() {
    $state.go('.dodge');
    $scope.dodgeAction = true;
    $scope.disabled = true;
  }

  $scope.openWeapon = function(weapon) {
    $scope.weaponChoosed = weapon;
    $scope.weaponAction = false;
    console.log($scope.weaponChoosed);
    $state.go('main.fight');
  }
    
  $scope.fkShut = function() {
    $state.go('.fkDetail');
    $scope.weaponAction = true;
  }
  $scope.nkAttack = function() {
    $state.go('.nkAttack'); 
    $scope.weaponAction = true;
  }
  $scope.nkParade = function() {
    $state.go('.nkParade'); 
    $scope.weaponAction = true;
  }

  $scope.disableWeaponChoose = function() {
    $scope.disabled = true; 
  }
  $scope.ableWeaponChoose = function() {
    $scope.disabled = false; 
  }
  $scope.disableWeaponAction = function() { 
    $scope.weaponAction = true; 
  }
  $scope.ableWeaponAction = function() {
    $scope.weaponAction = false; 
  }
  $scope.disableDodgeAction = function() { 
    $scope.dodgeAction = true; 
  }
  $scope.ableDodgeAction = function() {
    $scope.dodgeAction = false; 
  }
  console.log($scope.weaponChoosed);
});