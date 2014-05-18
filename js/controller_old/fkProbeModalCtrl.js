app.controller('fkProbeModalCtrl', function($scope, $modalInstance, currentWeapon) {

  $scope.currentWeapon = currentWeapon; 
  $scope.mod = 0;

  $scope.fkProbe = function() {
    $scope.probe = Math.floor(Math.random() * 20) + 1;
    // $scope.probe = 20;

    if($scope.probe === 1) {
      $scope.probeResult = $scope.probe + parseInt($scope.mod);
      $scope.probeResultString = "Meisterschuß! Schaden x2";
      $scope.success = true;
      $scope.meister = true;
    }else if($scope.probe + parseInt($scope.mod) <= currentWeapon.FK && $scope.probe !== 20) {
      $scope.probeResult = $scope.probe + parseInt($scope.mod);
      $scope.probeResultString = "Du triffst!";
      $scope.success = true;
      $scope.meister = false;
    }else if($scope.probe === 20) {
      $scope.probeResult = $scope.probe + parseInt($scope.mod);
      $scope.probeResultString = "Patzer!";
      $scope.result = 0;
      $scope.patzer = true;
    }else {
      $scope.probeResult = $scope.probe + parseInt($scope.mod);
      $scope.probeResultString = "Du hast dein Ziel verfehlt!";
      $scope.result = 0;
      $scope.fail = true; 
      console.log($scope.result);
    }
  }

  $scope.fkSchaden = function() {
    if($scope.meister === true) {
      $scope.result = 2 * ((currentWeapon.damageFunc[0] * (Math.floor(Math.random() * currentWeapon.damageFunc[1]) + 1)) + currentWeapon.damageFunc[2]);
      $scope.success = false;
      $scope.fail = true;
      console.log($scope.result);
    }else {
      $scope.result = (currentWeapon.damageFunc[0] * (Math.floor(Math.random() * currentWeapon.damageFunc[1]) + 1)) + currentWeapon.damageFunc[2];
      $scope.success = false;
      $scope.fail = true;
      console.log($scope.result);
    }
  };

  $scope.fkPatzer = function() {
    $scope.patzerWurf = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
    console.log($scope.patzerWurf);

    $scope.patzerHeader= "";
    $scope.patzerText= "";

    switch($scope.patzerWurf) {
      case 2: 
        $scope.patzerHeader = "2, Waffe zerstört: ";
        $scope.patzerText = "INI-4; der Schuss geht ungezielt daneben, und von irgendwo hört man ein hässliches ‚Krack’. \
          Bogen, Armbrust oder Speer sind so schwer beschädigt, dass eine Reparatur nicht lohnt. Der Schütze verliert alle verbleibenden \
          Aktionen und Reaktionen dieser Runde."
        console.log($scope.patzerHeader)
        $scope.patzer = false;
        $scope.patzerResult = true;
        $scope.fail = true;
        break;
      case 3:
        $scope.patzerHeader = "3, Waffe beschädigt: "
        $scope.patzerText = "INI -3; der Schuss geht ungezielt daneben, das Projektil landet vor den Füßen des Schützen. \
          Die Sehne des Bogens ist gerissen, die Mechanik der Armbrust ernsthaft verklemmt – es sind mindestens 30 Aktionen nötig, um die Waffe \
          wieder schussfähig zu machen. Bei einer Wurfwaffe bedeutet dieses Resultat dasselbe wie eine 2– Messer, Diskus oder Speer sind zerbrochen. \
          Der Schütze verliert alle verbleibenden Aktionen und Reaktionen dieser Runde."
        console.log($scope.patzerHeader)
        $scope.patzer = false;
        $scope.patzerResult = true;
        $scope.fail = true;
        break;
      case 4: case 5: case 6: case 7: case 8: case 9: case 10:
        $scope.patzerHeader = "4-10, Fehlschuss: "
        $scope.patzerText = "INI -2; der Schuss geht ungezielt daneben, das Projektil ist verloren; die \
          Mechanik der Armbrust blockiert oder die Sehne droht vom Bogen zu rutschen – der Schütze \
          benötigt zwei Aktionen, um die Waffe wieder schussfähig zu machen. Bei Wurfwaffen gilt, \
          dass das Projektil ebenfalls verloren ist und der Werfer zwei Aktionen benötigt, um sein \
          verlorenes Gleichgewicht wieder zu finden. "
        console.log($scope.patzerHeader)
        $scope.patzer = false;
        $scope.patzerResult = true;
        $scope.fail = true;
        break;
      case 11: case 12:
        $scope.patzerHeader = "11-12, Freund getroffen: "
        $scope.patzerText = "INI -3; der Schuss löst sich unbeabsichtigt und trifft den am nächsten an der geplanten Flugbahn stehenden \
          befreundeten Charakter. Würfeln Sie für diesen Trefferpunkte gemäß der Entfernung aus; Ansagen kommen jedoch nicht zum Tragen. Ist \
          kein Kamerad in der Nähe, der getroffen werden könnte, hat der Schütze sich selbst verletzt."
        console.log($scope.patzerHeader)
        $scope.patzer = false;
        $scope.patzerResult = true;
        $scope.success = true;
        break;
    };
  }

  $scope.ok = function() {
    $modalInstance.close($scope.result);  
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };
})