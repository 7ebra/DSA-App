app.controller('kampfCtrl', function($scope, $modal, $log) {

  $scope.ausweichen_mod = 0;
  $scope.ausweichen = $scope.currentHero.basics.pa_basis.actual - $scope.currentHero.basics.behinderung.currentValue + $scope.ausweichen_mod;

  $scope.animate = true;
  $scope.currentWeapon = $scope.currentHero.baggage.weapons.raufen;
  console.log($scope.currentWeapon);

  var weapons = $scope.currentHero.baggage.weapons;

  $scope.openWeapon = function() {

    var modalInstance = $modal.open({
      templateUrl: 'templates/modals/chooseWeapon.html',
      controller: "weaponsModalCtrl",
      resolve: {
        weapons: function() {
          return weapons;
        }
      }
    });

    modalInstance.result.then(function(selectedWeapon) {
      $scope.currentWeapon = selectedWeapon;

    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.openFkProbe = function() {

    var modalInstance = $modal.open({
      templateUrl: 'templates/modals/fkProbe.html',
      controller: "fkProbeModalCtrl",
      resolve: {
        currentWeapon: function() {
          return $scope.currentWeapon;
        }
      }
    });

    modalInstance.result.then(function(result) {
      $scope.result = result;

    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.openNkAttacke = function() {

    var modalInstance = $modal.open({
      templateUrl: 'templates/modals/nkAttacke.html',
      controller: "nkAttackeModalCtrl",
      resolve: {
        currentWeapon: function() {
          return $scope.currentWeapon;
        }
      }
    });

    modalInstance.result.then(function(result) {
      $scope.result = result;

    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.openNkParade = function() {

    var modalInstance = $modal.open({
      templateUrl: 'templates/modals/nkParade.html',
      controller: "nkParadeModalCtrl",
      resolve: {
        currentWeapon: function() {
          return $scope.currentWeapon;
        }
      }
    });

    modalInstance.result.then(function(result) {
      $scope.result = result;

    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.openWlAttacke = function() {

    var modalInstance = $modal.open({
      templateUrl: 'templates/modals/wlAttacke.html',
      controller: "wlAttackeModalCtrl",
      resolve: {
        currentWeapon: function() {
          return $scope.currentWeapon;
        }
      }
    });

    modalInstance.result.then(function(result) {
      $scope.result = result;

    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.openWlParade = function() {

    var modalInstance = $modal.open({
      templateUrl: 'templates/modals/wlParade.html',
      controller: "wlParadeModalCtrl",
      resolve: {
        currentWeapon: function() {
          return $scope.currentWeapon;
        }
      }
    });

    modalInstance.result.then(function(result) {
      $scope.result = result;

    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.rollIni = function() {
    $scope.currentHero.basics.ini_basis.currentValue = $scope.currentHero.basics.ini_basis.actual + (Math.floor(Math.random() * 6) + 1);
    $scope.ini = true;
  }
});

