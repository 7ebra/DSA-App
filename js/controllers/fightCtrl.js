app.controller('FightCtrl', function($scope, $state, HeroService, FightService, BaggageService) {

  // $scope.current = HeroService.Current();
  // $scope.currentHero = HeroService.Current().currentHero;

  $scope.lep = HeroService.Current().currentHero.basics.lebenspunkte;
  $scope.asp = HeroService.Current().currentHero.basics.astralenegrie;
  $scope.aus = HeroService.Current().currentHero.basics.ausdauer;

  $scope.goToFight = function() {
    $state.go('main.fight');
    FightService.addRound();
  };
  $scope.goToFightRounds = function() {
    $state.go('main.fightRounds');
    FightService.resetActions();
  };

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

  $scope.nkWeapons    = HeroService.Current().currentHero.baggage.weapons.nkWeapons;
  $scope.fkWeapons    = HeroService.Current().currentHero.baggage.weapons.fkWeapons;
  $scope.wlWeapons    = HeroService.Current().currentHero.baggage.weapons.wlWeapons;
  $scope.armory       = HeroService.Current().currentHero.baggage.armory;
  $scope.stuffBaggage = HeroService.Current().currentHero.baggage.stuffBaggage;
  $scope.money        = HeroService.Current().currentHero.baggage.money;
  console.log($scope.money);

$scope.currentHero = HeroService.Current().currentHero;

  $scope.weaponChoosed = $scope.nkWeapons.dolch;

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

  $scope.service = FightService.service;
  console.log($scope.service);

  $scope.chooseAttack =  function() {
    FightService.chooseAttack();
  }
  $scope.chooseParade =  function() {
    FightService.chooseParade();
  }
  $scope.iniSetup = function() {
    FightService.iniSetup();
  }

  $scope.orientaion = function() {
    FightService.orientaion();
    console.log($scope.service);
  }

});