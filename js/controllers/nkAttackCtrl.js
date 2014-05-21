app.controller('NkAttackCtrl', function($scope, $state) {


  $scope.buff = 0 ;
  $scope.damageBuff = 0;
  $scope.heavyBuff = 0; 

  $scope.buffPlus = function() {
    $scope.buff++;
  }
  $scope.buffMinus = function() {
    $scope.buff--;
  }
  $scope.damageBuffPlus = function() {
    $scope.buff = $scope.buff - $scope.heavyBuff;
    $scope.damageBuff++;
    $scope.heavyBuff = $scope.damageBuff * 2;
    $scope.buff = $scope.buff + $scope.heavyBuff
  }
  $scope.damageBuffMinus = function() {
    $scope.damageBuff--;
  }

  $scope.nkTest = function() {

    $scope.disableWeaponChoose();

    $scope.roll = Math.floor(Math.random() * 20) + 1;

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
      if($scope.secondResult <= $scope.weaponChoosed.AT) {
        $scope.string = "Volltreffer!";
        $scope.meister = true;
        $scope.hit = true;
      }else {
        $scope.string = "Du triffst!";
        $scope.hit = true;
      }
    }else if($scope.result <= $scope.weaponChoosed.AT && $scope.roll !== 20) {
      $scope.string = "Du triffst!";
      $scope.hit = true;
    }else if($scope.roll === 20) {
      $scope.secondRoll = Math.floor(Math.random() * 20) + 1;  
      $scope.secondResult = $scope.secondRoll + $scope.buff;    
      if($scope.secondResult <= $scope.weaponChoosed.AT) {
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
  $scope.nkDamage = function() {
    if($scope.meister) {
      $scope.damage = 2 * ($scope.weaponChoosed.damageFunc[0] * (Math.floor(Math.random() * $scope.weaponChoosed.damageFunc[1]) + 1) + $scope.weaponChoosed.damageFunc[2] + $scope.damageBuff);
    }else {
      $scope.damage = $scope.weaponChoosed.damageFunc[0] * (Math.floor(Math.random() * $scope.weaponChoosed.damageFunc[1]) + 1) + $scope.weaponChoosed.damageFunc[2] + $scope.damageBuff;
    }
  }
  $scope.patzerTest = function() {
    $scope.patzerRoll = 2 * (Math.floor(Math.random() * 6) + 1);
    console.log($scope.patzerRoll); 

    switch($scope.patzerRoll) {
      case 2: 
        $scope.string = "2, Waffe zerstört: ";
        $scope.patzerText = "INI -4; Patzender muss in der Folgenden Runde Aktionen aufwenden, um \
          eine Neue Waffe zu ziehen. Handelt es sich bei der Waffe um eine sehr stabile Waffe mit einem BF von 0 oder weniger, \
          so wird dieses Ergebnis als 9-10 (Waffe verloren) gewertet und der BF der Waffe steigt um 2; eine unzerstörbare Waffe \
          ist einfach nur verloren. \
          \r\n \
          Handelt es sich um eine natürliche Waffe(also Faust oder Fuß), so wird dieser Patzergewertet wie eine 12 (Schwerer Eigentreffer)."
        break;
      case 3: case 4: case 5:
        $scope.string = "3-5, Sturz: "
        $scope.patzerText = "INI -3; der Schuss geht ungezielt daneben, das Projektil landet vor den Füßen des Schützen. \
          Die Sehne des Bogens ist gerissen, die Mechanik der Armbrust ernsthaft verklemmt – es sind mindestens 30 Aktionen nötig, um die Waffe \
          wieder schussfähig zu machen. Bei einer Wurfwaffe bedeutet dieses Resultat dasselbe wie eine 2– Messer, Diskus oder Speer sind zerbrochen. \
          Der Schütze verliert alle verbleibenden Aktionen und Reaktionen dieser Runde. \r\n \
          Ein Held mit Balance oder Herausragender Balance kann einen Sturz in ein Stolpern verwandeln, wenn ihm eine GE-Probe (bei \
          Herausragender Balance: GE-4), erschwert um die BE, gelingt."
        break;
      case 6: case 7: case 8:
        $scope.string = "6-8, Stolpern: "
        $scope.patzerText = "INI -2;"
        break;
      case 9: case 10:
        $scope.string = "9-10, Waffe verlohren: "
        $scope.patzerText = "INI-2. Der Patzende kann in der Folgenden Runde eine Aktion nur \
          darauf verwenden, um mittelseiner GE-Probe an die Waffe zu gelangen; oder aber er wechselt die Waffe oder flieht. \r\n \
          Handelt es sich beider Waffe um eine natürliche (angewachsene), so wird das Ergebnis als 3– 5 (Sturz) gewertet."
        break;
      case 11:
        $scope.string = "11, an eigener Waffe verletzt: "
        $scope.patzerText = "An eigener Waffeverletzt: INI-3. Der Betroffene erleidet Waffenschaden durch eigene \
          Waffe (TP auswürfeln, wobei zusätzliche TP durch hohe KK nicht gewertet werden)."
        break;
      case 12:
        $scope.string = "12, schwerer Eigentreffer: "
        $scope.patzerText = "INI -4. Der Betroffene Erleidet schweren Schaden durch \
          eigene Waffe (TP auswürfeln, aber als SP direkt von der LE abziehen, höhere TP durch KK \
          werden angerechnet) und eventuell auch eine Wunde (bei mehr als KO SP) mit den dort genannten Folgen."
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