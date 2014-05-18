app.controller('nkParadeModalCtrl', function($scope, $modalInstance, currentWeapon) {

  $scope.currentWeapon = currentWeapon; 
  $scope.mod = 0;

  $scope.nkParade = function() {
    $scope.probe = Math.floor(Math.random() * 20) + 1;
    // $scope.probe = 20;
    // $scope.probe = 1;

    if($scope.probe === 1) {
      $scope.probeResult = $scope.probe + parseInt($scope.mod);
      $scope.probeResultString = "Glücksparade! Du parierst und verbrauchst dafür keine Aktion!";
      $scope.success = true;
      $scope.meister = true;
    }else if($scope.probe + parseInt($scope.mod) <= currentWeapon.AT && $scope.probe !== 20) {
      $scope.probeResult = $scope.probe + parseInt($scope.mod);
      $scope.probeResultString = "Du parierst!";
      $scope.success = true;
      $scope.meister = false;
    }else if($scope.probe === 20) {
      $scope.probeResult = $scope.probe + parseInt($scope.mod);
      $scope.probeResultString = "Patzer!";
      $scope.patzer = true;
    }else {
      $scope.probeResult = $scope.probe + parseInt($scope.mod);
      $scope.probeResultString = "Du wirst getroffen";
      $scope.result = 0;
      $scope.success = true; 
      console.log($scope.result);
    }
  }

  $scope.nkPatzer = function() {
    $scope.patzerWurf = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
    console.log($scope.patzerWurf);

    $scope.patzerHeader= "";
    $scope.patzerText= "";

    switch($scope.patzerWurf) {
      case 2: 
        $scope.patzerHeader = "2, Waffe zerstört: ";
        $scope.patzerText = "INI -4; Patzender muss in der Folgenden Runde Aktionen aufwenden, um \
          eine Neue Waffe zu ziehen. Handelt es sich bei der Waffe um eine sehr stabile Waffe mit einem BF von 0 oder weniger, \
          so wird dieses Ergebnis als 9-10 (Waffe verloren) gewertet und der BF der Waffe steigt um 2; eine unzerstörbare Waffe \
          ist einfach nur verloren. \
          \r\n \
          Handelt es sich um eine natürliche Waffe(also Faust oder Fuß), so wird dieser Patzergewertet wie eine 12 (Schwerer Eigentreffer)."
        console.log($scope.patzerHeader)
        $scope.patzer = false;
        $scope.patzerResult = true;
        $scope.fail = true;
        break;
      case 3: case 4: case 5:
        $scope.patzerHeader = "3-5, Sturz: "
        $scope.patzerText = "INI -3; der Schuss geht ungezielt daneben, das Projektil landet vor den Füßen des Schützen. \
          Die Sehne des Bogens ist gerissen, die Mechanik der Armbrust ernsthaft verklemmt – es sind mindestens 30 Aktionen nötig, um die Waffe \
          wieder schussfähig zu machen. Bei einer Wurfwaffe bedeutet dieses Resultat dasselbe wie eine 2– Messer, Diskus oder Speer sind zerbrochen. \
          Der Schütze verliert alle verbleibenden Aktionen und Reaktionen dieser Runde. \r\n \
          Ein Held mit Balance oder Herausragender Balance kann einen Sturz in ein Stolpern verwandeln, wenn ihm eine GE-Probe (bei \
          Herausragender Balance: GE-4), erschwert um die BE, gelingt."
        console.log($scope.patzerHeader)
        $scope.patzer = false;
        $scope.patzerResult = true;
        $scope.fail = true;
        break;
      case 6: case 7: case 8:
        $scope.patzerHeader = "6-8, Stolpern: "
        $scope.patzerText = "INI -2;"
        console.log($scope.patzerHeader)
        $scope.patzer = false;
        $scope.patzerResult = true;
        $scope.fail = true;
        break;
      case 9: case 10:
        $scope.patzerHeader = "9-10, Waffe verlohren: "
        $scope.patzerText = "INI-2. Der Patzende kann in der Folgenden Runde eine Aktion nur \
          darauf verwenden, um mittelseiner GE-Probe an die Waffe zu gelangen; oder aber er wechselt die Waffe oder flieht. \r\n \
          Handelt es sich beider Waffe um eine natürliche (angewachsene), so wird das Ergebnis als 3– 5 (Sturz) gewertet."
        console.log($scope.patzerHeader)
        $scope.patzer = false;
        $scope.patzerResult = true;
        $scope.fail = true;
        break;
      case 11:
        $scope.patzerHeader = "11, an eigener Waffe verletzt: "
        $scope.patzerText = "An eigener Waffeverletzt: INI-3. Der Betroffene erleidet Waffenschaden durch eigene \
          Waffe (TP auswürfeln, wobei zusätzliche TP durch hohe KK nicht gewertet werden)."
        console.log($scope.patzerHeader)
        $scope.patzer = false;
        $scope.patzerResult = true;
        $scope.success = true;
        break;
      case 12:
        $scope.patzerHeader = "12, schwerer Eigentreffer: "
        $scope.patzerText = "INI -4. Der Betroffene Erleidet schweren Schaden durch \
          eigene Waffe (TP auswürfeln, aber als SP direkt von der LE abziehen, höhere TP durch KK \
          werden angerechnet) und eventuell auch eine Wunde (bei mehr als KO SP) mit den dort genannten Folgen."
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