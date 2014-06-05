app.controller('TalentsCtrl', function($scope, $location, $anchorScroll, HeroService, RollService) {

  $scope.current = HeroService.Current();
  $scope.currentHero = $scope.current.currentHero;
  $scope.talents = $scope.currentHero.talents;

  $scope.talentProof = function() {

    $scope.rollOne = RollService.roll20();
    if($scope.rollOne > $scope.choosedTalent.proofAttr1.value) {
      $scope.resultOne = $scope.rollOne - $scope.choosedTalent.proofAttr1.value;
    } else {
      $scope.resultOne = 0;
    }
    $scope.rollTwo = RollService.roll20();
    if($scope.rollTwo > $scope.choosedTalent.proofAttr2.value) {
      $scope.resultTwo = $scope.rollTwo - $scope.choosedTalent.proofAttr2.value;
    } else {
      $scope.resultTwo = 0;
    }
    $scope.rollThree = RollService.roll20();
    if($scope.rollThree > $scope.choosedTalent.proofAttr3.value) {
      $scope.resultThree = $scope.rollThree - $scope.choosedTalent.proofAttr3.value;
    } else {
      $scope.resultThree = 0;
    }

    $scope.result = $scope.choosedTalent.value - $scope.resultOne - $scope.resultTwo - $scope.resultThree - $scope.buff;

  } 


  $scope.TalentChoose = function(talent) {
    $scope.choosedTalent = talent;
    $scope.rollOne = false;
    $scope.buff = 0;

    setTimeout(function() {
      $location.hash('proof');
      $anchorScroll();
    },100)
  } 

  $scope.buff = 0;  

  $scope.buffPlus = function() {
    $scope.buff++;
  }
  $scope.buffMinus = function() {
    $scope.buff--;
  }
});