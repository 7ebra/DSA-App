app.controller('FkDetailCtrl', function($scope, $state) {


  $scope.buff = 0;
  $scope.rangeBuff = 0;
  $scope.sizeBuff = 0;
  $scope.moveBuff = 0;
  $scope.rangeDamage = 0;

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
        $scope.rangeDamage = $scope.weaponChoosed.rangeDamage[0];
        $scope.rangeBuff = -2;
        console.log($scope.rangeDamage);  
        break;
      case 2:
        $scope.range = 2;
        $scope.rangeDamage = $scope.weaponChoosed.rangeDamage[1];
        $scope.rangeBuff = 0;
        console.log($scope.rangeDamage);
        break;
      case 3:
        $scope.range = 3;
        $scope.rangeDamage = $scope.weaponChoosed.rangeDamage[2];
        $scope.rangeBuff = 4;
        console.log($scope.rangeDamage);
        break;
      case 4:
        $scope.range = 4;
        $scope.rangeDamage = $scope.weaponChoosed.rangeDamage[3];
        $scope.rangeBuff = 8;
        console.log($scope.rangeDamage);
        break;
      case 5:
        $scope.range = 5;
        $scope.rangeDamage = $scope.weaponChoosed.rangeDamage[4];
        $scope.rangeBuff = 12;
        console.log($scope.rangeDamage);
        break;
      default: 
        $scope.rangeBuff = 0;
        $scope.rangeDamage = $scope.weaponChoosed.rangeDamage[1];
    }
    console.log($scope.rangeDamage);
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

    $scope.disableWeaponChoose();

    $scope.roll = Math.floor(Math.random() * 20) + 1;
    // $scope.roll = 20;

    $scope.result = $scope.roll + $scope.buff;

    $scope.meister = false;
    $scope.hit = false;
    $scope.patzer = false;
    $scope.patzerText = false;
    $scope.fail = false;

    console.log($scope.roll);

    if($scope.roll === 1) {
      $scope.secondRoll = Math.floor(Math.random() * 20) + 1;
      $scope.secondResult = $scope.secondRoll + $scope.buff;   
      if($scope.secondResult <= $scope.weaponChoosed.FK) {
        $scope.string = "Volltreffer!";
        $scope.meister = true;
        $scope.hit = true;
      }else {
        $scope.string = "Du triffst!";
        $scope.hit = true;
      }
    }else if($scope.result <= $scope.weaponChoosed.FK && $scope.roll !== 20) {
      $scope.string = "Du triffst!";
      $scope.hit = true;
    }else if($scope.roll === 20) {
      $scope.secondRoll = Math.floor(Math.random() * 20) + 1;  
      $scope.secondResult = $scope.secondRoll + $scope.buff;    
      if($scope.secondResult <= $scope.weaponChoosed.FK) {
        $scope.string = "Du hast dein Ziel verfehlt!";
        $scope.fail = true;
      }else {
        $scope.string = "Patzer!";
        $scope.patzer = true;
      }
    }else {
      $scope.string = "Du hast dein Ziel verfehlt!";
      $scope.fail = true;
      console.log($scope.hit);
    }
  }
  $scope.fkDamage = function() {
    if($scope.meister) {
      $scope.damage = 2 * ($scope.weaponChoosed.damageFunc[0] * (Math.floor(Math.random() * $scope.weaponChoosed.damageFunc[1]) + 1) + $scope.weaponChoosed.damageFunc[2] + $scope.rangeDamage);
    }else {
      $scope.damage = $scope.weaponChoosed.damageFunc[0] * (Math.floor(Math.random() * $scope.weaponChoosed.damageFunc[1]) + 1) + $scope.weaponChoosed.damageFunc[2] + $scope.rangeDamage;
    }
  }
  $scope.patzerTest = function() {
    $scope.patzerRoll = 2 * (Math.floor(Math.random() * 6) + 1);
    console.log($scope.patzerRoll); 

    switch($scope.patzerRoll) {
      case 2: 
        $scope.string = "Waffe zerstört: ";
        $scope.patzerText = "INI-4; der Schuss geht ungezielt daneben, und von irgendwo hört man ein hässliches ‚Krack’. \
          Bogen, Armbrust oder Speer sind so schwer beschädigt, dass eine Reparatur nicht lohnt. Der Schütze verliert alle verbleibenden \
          Aktionen und Reaktionen dieser Runde."
        break;
      case 3:
        $scope.string = "Waffe beschädigt: "
        $scope.patzerText = "INI -3; der Schuss geht ungezielt daneben, das Projektil landet vor den Füßen des Schützen. \
          Die Sehne des Bogens ist gerissen, die Mechanik der Armbrust ernsthaft verklemmt – es sind mindestens 30 Aktionen nötig, um die Waffe \
          wieder schussfähig zu machen. Bei einer Wurfwaffe bedeutet dieses Resultat dasselbe wie eine 2– Messer, Diskus oder Speer sind zerbrochen. \
          Der Schütze verliert alle verbleibenden Aktionen und Reaktionen dieser Runde."
        break;
      case 4: case 5: case 6: case 7: case 8: case 9: case 10:
        $scope.string = "Fehlschuss: "
        $scope.patzerText = "INI -2; der Schuss geht ungezielt daneben, das Projektil ist verloren; die \
          Mechanik der Armbrust blockiert oder die Sehne droht vom Bogen zu rutschen – der Schütze \
          benötigt zwei Aktionen, um die Waffe wieder schussfähig zu machen. Bei Wurfwaffen gilt, \
          dass das Projektil ebenfalls verloren ist und der Werfer zwei Aktionen benötigt, um sein \
          verlorenes Gleichgewicht wieder zu finden. "
        break;
      case 11: case 12:
        $scope.string = "Freund getroffen: "
        $scope.patzerText = "INI -3; der Schuss löst sich unbeabsichtigt und trifft den am nächsten an der geplanten Flugbahn stehenden \
          befreundeten Charakter. Würfeln Sie für diesen Trefferpunkte gemäß der Entfernung aus; Ansagen kommen jedoch nicht zum Tragen. Ist \
          kein Kamerad in der Nähe, der getroffen werden könnte, hat der Schütze sich selbst verletzt."
        break;
    };
  }
  $scope.Ok = function() {

    $scope.ableWeaponChoose();
    $scope.ableWeaponAction();

    $scope.roll = false;
    $scope.damage = false;
    $scope.meister = false;
    $scope.hit = false;
    $scope.patzer = false;
    $scope.patzerText = false;
    $scope.patzerRoll = false;
    $scope.fail = false;
    $scope.string = false;

    $state.go('^');
  }
});