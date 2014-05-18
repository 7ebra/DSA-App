app.controller('weaponsModalCtrl', function($scope, $modalInstance, weapons) {

  $scope.weapons = weapons;
  $scope.select = {
    weapon: $scope.weapons[0]
  };

  $scope.setWeapon = function(weapon) {
    $scope.select = weapon;
  };

  $scope.ok = function() {
    $modalInstance.close($scope.select); 

  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };
})