app.controller('FkDetailCtrl', function($scope, $state) {


  $scope.buff = 0;
  $scope.rangeBuff = 0;
  $scope.sizeBuff = 0;
  $scope.moveBuff = 0;

  $scope.buffPlus = function() {
    $scope.buff++;
  }
  $scope.buffMinus = function() {
    $scope.buff--;
  }
  $scope.chooseRange = function(range) {

    $scope.buff = $scope.buff - $scope.rangeBuff;

    switch(range) {
      case 1:
        $scope.range = 1;
        $scope.rangeBuff = -2;
        break;
      case 2:
        $scope.range = 2;
        $scope.rangeBuff = 0;
        break;
      case 3:
        $scope.range = 3;
        $scope.rangeBuff = 4;
        break;
      case 4:
        $scope.range = 4;
        $scope.rangeBuff = 8;
        break;
      case 5:
        $scope.range = 5;
        $scope.rangeBuff = 12;
        break;
      default: 
        $scope.rangeBuff = 0;
    }
    $scope.buff = $scope.buff + $scope.rangeBuff;
  }

  $scope.chooseSize = function(size) {

    $scope.buff = $scope.buff - $scope.sizeBuff;

    switch(size) {
      case 1:
        $scope.size = 1;
        $scope.sizeBuff = 6;
        break;
      case 2:
        $scope.size = 2;
        $scope.sizeBuff = 4;
        break;
      case 3:
        $scope.size = 3;
        $scope.sizeBuff = 2;
        break;
      case 4:
        $scope.size = 4;
        $scope.sizeBuff = 0;
        break;
      case 5:
        $scope.size = 5;
        $scope.sizeBuff = -2;
        break;
      default: 
        $scope.sizeBuff = 0;
    }
    $scope.buff = $scope.buff + $scope.sizeBuff;
  }


  $scope.chooseMove = function(move) {

    $scope.buff = $scope.buff - $scope.moveBuff;

    switch(move) {
      case 1:
        $scope.move = 1;
        $scope.moveBuff = 4;
        break;
      case 2:
        $scope.move = 2;
        $scope.moveBuff = 2;
        break;
      case 3:
        $scope.move = 3;
        $scope.moveBuff = -2;
        break;
      case 4:
        $scope.move = 4;
        $scope.moveBuff = -4;
        break;
      default: 
        $scope.moveBuff = 0;
    }
    $scope.buff = $scope.buff + $scope.moveBuff;
  }

  $scope.fkTest = function() {

    $scope.roll = Math.floor(Math.random() * 20) + 1;
    $scope.result = $scope.roll + $scope.buff;
    console.log($scope.weaponChoosed.FK);

    if($scope.roll === 1) {
      $scope.string = "Meisterschuß! Schaden x2";
      $scope.meister = true;
    }else if($scope.result <= $scope.weaponChoosed.FK && $scope.roll !== 20) {
      $scope.string = "Du triffst!";
      $scope.hit = true;
    }else if($scope.roll === 20) {
      $scope.string = "Patzer!";
      $scope.patzer = true;
    }else {
      $scope.string = "Du hast dein Ziel verfehlt!";
    }
  }
  $scope.fkDamage = function() {
    $scope.damage = $scope.weaponChoosed.damageFunc[0] * (Math.floor(Math.random() * $scope.weaponChoosed.damageFunc[1]) + 1) + $scope.weaponChoosed.damageFunc[2];
  }
  $scope.Ok = function() {
    $scope.roll = false;
    $scope.damage = false;
  }

});