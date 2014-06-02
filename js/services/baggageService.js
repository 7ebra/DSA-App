'use strict'

app.service('BaggageService', function BaggageService () {

  function wlWeapon(name, x, y, z, at, pa, ini) {
    this.name = name;
    this.weaponType = "Waffenloser Kampf";
    this.damageFunc = [x, y, z];
    this.AT = at;
    this.PA = pa;
    this.DK = "NK";
    this.eINI = ini;
  }

  function nkWeapon(name, type, x, y, z, at, pa, dk, ebe, ini, bf, weight) {
    this.name = name;
    this.weaponType = type;
    this.damageFunc = [x, y, z];
    this.AT = at;
    this.PA = pa;
    this.DK = dk;
    this.eBE = ebe;
    this.eINI = ini;
    this.BF = bf;
    this.weight = weight;
  }

  function fkWeapon(name, type, x, y, z, r1, r2, r3, r4, r5, d1, d2, d3, d4, d5, fk, be, weight) {
    this.name = name;
    this.weaponType = type;
    this.damageFunc = [x, y, z];
    this.range = [r1, r2, r3, r4, r5];
    this.rangeDamage = [d1, d2, d3, d4, d5];
    this.FK = fk;
    this.DK = "FK";
    this.eBE = be;
    this.arrows = 0;
    this.weight = weight;
  }

  this.weapons = {
    wlWeapons: {
      raufen:                   new wlWeapon("Raufen", 1, 6, 0, 0, 0, 0),
      ringen:                  new wlWeapon("Ringen", 1, 6, 0, 0, 0, 0)
    },
    fkWeapons: {
      elfenbogen:               new fkWeapon("Elfenbogen", "Bo", 1, 6, 5, 10, 25, 50, 100, 200, 3, 2, 1, 1, 0, 25, -3, 25)
    },
    nkWeapons: { 
      wolfsmesser:              new nkWeapon("Wolfsmesser (elf. Rapier)", "Fe", 1, 6, 3, 15, 11, "N", 1, 1, 1, 50),
      elfisches_jagtmesser:     new nkWeapon("Elfisches Jagdmesser", "Do", 1, 6, 2, 11, 7, "H", 1, 0, 2, 15)
    }
  }

  function Armor(name, weight, value, handicap, ko, br, rue, ba, la, ra, lb, rb) {
    this.name = name;
    this.weight = weight;
    this.value = value;
    this.handicap = handicap;
    this.region = {
      Ko: ko,
      Br: br,
      Rue: rue,
      Ba: ba,
      LA: la,
      RA: ra,
      LB: lb,
      RB: rb
    }
  }

  this.armory = {
    lederhose:                  new Armor('Lederhose', 80, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1),
    lederhelm:                  new Armor('Lederhelm', 60, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0),
  }

  function Stuff(name, weight, amount, type) {
    this.name   = name;
    this.weight = weight;
    this.amount = amount;
    this.type   = type;
  }

  function Money(dukaten, silber, heller, kreuzer) {
    this.dukaten = dukaten;
    this.silber  = silber;
    this.heller  = heller;
    this.kreuzer = kreuzer;
  }


  return {
    Stuff: Stuff,
    armory: this.armory,
    weapons: this.weapons,
    Money: Money 
  }
})