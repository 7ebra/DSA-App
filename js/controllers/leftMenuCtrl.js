app.controller('LeftMenuCtrl', function($scope, $state) {

  $scope.goToProfile = function() {
    $state.go('main.profile');
  };
  $scope.goToTalents = function() {
    $state.go('main.talents');
  };
  $scope.goToFight = function() {
    $state.go('main.fight.weaponDefault');
  };
});