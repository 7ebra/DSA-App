app.controller('DodgeCtrl', function($scope, $state, FightService) {

  $scope.ausweichen = $scope.currentHero.basics.ausweichen; 

  $scope.numberBuff = 0;
  $scope.buff = 0;  

  $scope.buffPlus = function() {
    $scope.buff++;
  }
  $scope.buffMinus = function() {
    $scope.buff--;
  }
  $scope.chooseNumber = function(number) {

    $scope.buff = $scope.buff - $scope.numberBuff;

    switch(number) {
      case 1:
        $scope.numberBuff = 0;
        $scope.number = 1
        break;
      case 2:
        $scope.numberBuff = 2;
        $scope.number = 2
        break;
      case 3:
        $scope.numberBuff = 4;
        $scope.number = 3
        break;
      case 4:
        $scope.numberBuff = 6;
        $scope.number = 4
        break;
      default: 
        $scope.numberBuff = 0;
    }
    $scope.buff = $scope.buff + $scope.numberBuff;
  }

  $scope.dodgeTest = function(geziehlt) {
    FightService.useFreeAction();

    $scope.roll = Math.floor(Math.random() * 20) + 1;

    $scope.result = $scope.roll + $scope.buff;
    if(geziehlt != true) {
      $scope.currentHero.basics.ini_basis.currentValue = $scope.currentHero.basics.ini_basis.currentValue - 4;
      console.log(geziehlt);
    } else {
      console.log(geziehlt);
    }
    console.log($scope.result);
  }

  $scope.Ok = function() {

    $scope.ableWeaponChoose();
    $scope.ableDodgeAction();

    $state.go('^');
  }
});