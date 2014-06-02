'use strict'

app.service('FightService', function FightService(HeroService) {


// Actions //
  this.service = {
    round: 1,
    actions: {
      number: 1,
      amount: 2,
      attack: 1,
      parade: 1,
      freeAction: 2
    },
    ini: {
      basic: HeroService.current.currentHero.basics.ini_basis.actual,
      currentValue: 0,
      checked: false
    }
  }

  this.addRound = function() {
    this.service.round += 1;
  }
  this.secondAction = function() {
    this.service.actions.number = 2;
  }

  this.chooseAttack = function() {
    this.service.actions.attack = 2;
    this.service.actions.parade = 0;
  }
  this.chooseParade = function() {
    this.service.actions.parade = 2;
    this.service.actions.attack = 0;
  }

  this.useActions = function() {
    this.service.actions.amount -= 2;
  }
  this.useAttack = function() {
    this.service.actions.attack -= 1;
    this.service.actions.amount -= 1;
  }
  this.useParade = function() {
    this.service.actions.parade -= 1;
    this.service.actions.amount -= 1;
  }
  this.useFreeAction = function() {
    this.service.actions.freeAction -= 1;
  }

  this.resetActions = function() {
    this.service.actions.number = 1;
    this.service.actions.amount = 2;
    this.service.actions.attack = 1;
    this.service.actions.parade = 1;
    this.service.actions.freeAction = 2;
  }

// Ini //
  
  this.iniSetup = function() {
    this.service.ini.currentValue = HeroService.current.currentHero.basics.ini_basis.actual + Math.floor(Math.random() * 6) + 1;
    this.service.ini.checked = true;
  }
  this.orientaion = function() {
    this.service.ini.currentValue = HeroService.current.currentHero.basics.ini_basis.actual + 6;
    this.useActions();
  }

})