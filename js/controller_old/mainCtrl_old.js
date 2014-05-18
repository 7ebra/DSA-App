var app = angular.module('DSA', ['ui.slider', 'ui.bootstrap', 'ngRoute', 'xml2json']);

angular.module('xml2json',[]).
    factory('DataSource', ['$http',function($http){
       return {
           get: function(callback){
                $http.get(
                    'xmls/gilion-nebelsucher.xml',
                    {transformResponse:function(data) {
                      // convert the data to JSON and provide
                      // it to the success function below
                        var x2js = new X2JS();
                        var json = x2js.xml_str2json( data );
                        return json;
                        }
                    }
                ).
                success(function(data, status) {
                    // send the converted data back
                    // to the callback function
                    callback(data);
                })
           }
       }
    }]);


app.config(function($routeProvider, $anchorScrollProvider){
  $routeProvider.when('/', {
    templateUrl: 'templates/profil.html'
  }).when('/talent', {
    templateUrl: 'templates/talent.html',
  }).when('/kampf', {
    templateUrl: 'templates/kampf.html',
  });
});

app.controller('mainCtrl', function($scope, DataSource) {

  //This is the callback function
  setData = function(data) {
      $scope.dataSet = data;
      console.log(data);

      //
      $scope.name = data.helden.held._name;

      //Eigenschaften (._name or ._value or ._mod or ._startwert)
      $scope.basisWerte = {
        MU: data.helden.held.eigenschaften.eigenschaft[0],
        KL: data.helden.held.eigenschaften.eigenschaft[1],
        IN: data.helden.held.eigenschaften.eigenschaft[2],
        CH: data.helden.held.eigenschaften.eigenschaft[3],
        FF: data.helden.held.eigenschaften.eigenschaft[4],
        GE: data.helden.held.eigenschaften.eigenschaft[5],
        KO: data.helden.held.eigenschaften.eigenschaft[6],
        KK: data.helden.held.eigenschaften.eigenschaft[7],
      };
      var basisWerte = $scope.basisWerte;

      $scope.kampfwerte = data.helden.held.kampf.kampfwerte;
      var kampfwerte = $scope.kampfwerte;
      console.log(kampfwerte);

      $scope.SO = data.helden.held.eigenschaften.eigenschaft[8];

      $scope.lep = data.helden.held.eigenschaften.eigenschaft[9];
      $scope.lep.max = (parseInt(basisWerte.KO._value) + parseInt(basisWerte.KO._value) + parseInt(basisWerte.KK._value))/2 + parseInt($scope.lep._mod);
      $scope.lep._value = $scope.lep.max;
      $scope.aup = data.helden.held.eigenschaften.eigenschaft[10];
      $scope.aup.max = (parseInt(basisWerte.MU._value) + parseInt(basisWerte.KO._value) + parseInt(basisWerte.GE._value))/2 + parseInt($scope.aup._mod);
      $scope.aup._value = $scope.aup.max;
      $scope.aup._value = $scope.aup.max;
      $scope.asp = data.helden.held.eigenschaften.eigenschaft[11];
      $scope.asp.max = (parseInt(basisWerte.MU._value) + parseInt(basisWerte.IN._value) + parseInt(basisWerte.CH._value))/2 + parseInt($scope.asp._mod);
      $scope.asp._value = $scope.asp.max;
      $scope.krm = data.helden.held.eigenschaften.eigenschaft[12];

      $scope.mr = data.helden.held.eigenschaften.eigenschaft[13];
      $scope.iniBase = data.helden.held.eigenschaften.eigenschaft[14];
      $scope.atBase = data.helden.held.eigenschaften.eigenschaft[15];
      $scope.paBase = data.helden.held.eigenschaften.eigenschaft[16];
      $scope.fkBase = data.helden.held.eigenschaften.eigenschaft[17];

      //Ausrüstung
      $scope.weapons = data.helden.held.ausruestungen.heldenausruestung  
      console.log($scope.weapons);
      //Talente
      var talente = data.helden.held.talentliste.talent;

      $scope.talentgruppen = {
      };
      var groups = ["Kampf", "Körper", "Gesellschaft", "Natur", "Wissen", "Sprachen", "Lesen/Schreiben", "Handwerk"];
      console.log(groups);
      var current = talente[0];
      var currentGroup = 0; 
      $scope.talentgruppen[groups[currentGroup]] = [];
      $scope.talentgruppen[groups[currentGroup]].push(current);
      for (var i = 1; i <= talente.length - 1; i++) {
        last = current;
        current = talente[i];
        // console.log("   " + last._name);
        if (last._name > current._name) {
          currentGroup++;
          // console.log(groups[currentGroup]);
          $scope.talentgruppen[groups[currentGroup]] = [];
        };

        $scope.talentgruppen[groups[currentGroup]].push(current);
      };

      console.log($scope.talentgruppen);


      //basis
      var ausbildung = {
        value: data.helden.held.basis.ausbildungen.ausbildung._string,
        string: "Profession"
      };
      var rasse = {
        value: data.helden.held.basis.rasse._string,
        string: "Rasse"
      };
      var kultur = {
        value: data.helden.held.basis.kultur._string,
        string: "Kultur"
      };

      $scope.basis = [
        ausbildung, rasse, kultur
      ]

      //Aussehen
      var geburtstag = { 
        value: data.helden.held.basis.rasse.aussehen._gbtag + "." + data.helden.held.basis.rasse.aussehen._gbmonat + "." + data.helden.held.basis.rasse.aussehen._gbjahr + " nach " + data.helden.held.basis.rasse.aussehen._kalender,
        string: "Geburtstag"
      };
      var groesse = { 
        value: data.helden.held.basis.rasse.groesse._value.slice(0,1) + "," + data.helden.held.basis.rasse.groesse._value.slice(1,3) + " Schritt",
        string: "Gr\u00f6\u00dfe"
      };
      var gewicht = {
        value: data.helden.held.basis.rasse.groesse._gewicht + " Stein",
        string: "Gewicht"
      };
      var augen = {
        value: data.helden.held.basis.rasse.aussehen._augenfarbe,
        string: "Augenfarbe"
      };
      var haar = {
        value: data.helden.held.basis.rasse.aussehen._haarfarbe,
        string: "Haarfarbe"
      };
      var alter = {
        value: data.helden.held.basis.rasse.aussehen._alter + " Sonnenr\u00e4der",
        string: "Alter"
      };

      $scope.aussehen = [
        geburtstag, groesse, gewicht, augen, haar, alter
      ]
  }
       
  DataSource.get(setData);

  $scope.animate = true;
});



app.controller('profilCtrl', function($scope) {

});

app.controller('kampfCtrl', function($scope) {

  $scope.getTalentValues = function(weaponName) {
    var interAtt = -1, interPa = -1;

    for(var i = 0; i < $scope.kampfwerte.length; i++ ) {
      if($scope.kampfwerte[i]._name == weaponName) {
        interAtt = $scope.kampfwerte[i].attacke._value;
        interPa = $scope.kampfwerte[i].parade._value;
      }
    }

    return {
      att: interAtt,
      pa: interPa
    };
  };

  $scope.lepMinus = function() {

    if ($scope.lep._value > -10)
    {
      $scope.lep._value--;
    }else {
      alert("Deine Lebensenergie kann nicht weiter sinken");
    }
  };

  $scope.lepPlus = function() {

    if ($scope.lep._value < $scope.lep.max)
    {
      $scope.lep._value++;
    }else {
      alert("Deine Lebensenergie ist bereits voll");
    }
  };

  $scope.aspMinus = function() {
    if ($scope.asp._value > 0)
    {
      $scope.asp._value--;
    }else {
      alert("your Asp is at it's lowest point");
    }
  };

  $scope.aspPlus = function() {
    
    if ($scope.asp._value < $scope.asp.max)
    {
      $scope.asp._value++;
    }else {
      alert("your Asp is at it's highest point");
    }
  };

  $scope.aupMinus = function() {
    if ($scope.aup._value > 0)
    {
      $scope.aup._value--;
    }else {
      alert("your Aup is at it's lowest point");
    }
  };

  $scope.aupPlus = function() {
    
    if ($scope.aup._value < $scope.aup.max)
    {
      $scope.aup._value++;
    }else {
      alert("your Aup is at it's highest point");
    }
  };

  $scope.sliderMousedown = function() {
    $scope.animate = false;
  };

  $scope.sliderMouseup = function() {
    $scope.animate = true;
  };

  $scope.currentWeapon = {
    waffenname: "unbewaffnet",
    talent: undefined
  };

  $scope.selectWeapon = function(name, talent) {
  
  };
});


app.controller('talentCtrl', function($scope, $location, $anchorScroll) {

  $scope.probe = function(talent) {

    $scope.erfolg = false;
    $scope.misserfolg = false;

    var proben = [
      talent._probe.slice(2,4), 
      talent._probe.slice(5,7), 
      talent._probe.slice(8,10)
    ];   

    var x = $scope.basisWerte[proben[0]]._value;
    var y = $scope.basisWerte[proben[1]]._value;
    var z = $scope.basisWerte[proben[2]]._value;

    var firstRoll = Math.floor(Math.random() * 20) + 1;
    console.log(firstRoll);
    if (firstRoll <= x)
    {
      firstRoll = 0;
    }else {
      firstRoll = firstRoll - x;
    }
    console.log(firstRoll);

    var secondRoll = Math.floor(Math.random() * 20) + 1;
    console.log(secondRoll);
    if (secondRoll <= y)
    {
      secondRoll = 0;
    }else {
      secondRoll = secondRoll - y;
    }
    console.log(secondRoll);

    var thirdRoll = Math.floor(Math.random() * 20) + 1;
    console.log(thirdRoll);
    if (thirdRoll <= z)
    {
      thirdRoll = 0;
    }else {
      thirdRoll = thirdRoll - z;
    }
    console.log(thirdRoll);

    talent.result = talent._value - firstRoll - secondRoll - thirdRoll;

    clearTimeout($scope.hideResultTimeout);

    if (talent.result >= 0)
    {
      $scope.hideResultTimeout = setTimeout(function() {
        $scope.$apply(function () {
          talent.result = undefined;
        }); 
      }, 5000);

    } else {
      $scope.hideResultTimeout = setTimeout(function() {
        $scope.$apply(function () {
          talent.result = undefined;
        });
      }, 5000);
    }
  };

});

