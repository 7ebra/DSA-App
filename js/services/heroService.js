'use strict';

app.service('HeroService', function HeroService(TalentService) {

  function Profile(name) {
    this.name = name;
    this.rasse = "";
    this.profession = "";
    this.kultur = "";
    this.geschlecht = "";
    this.alter = "";
    this.geburtstag = "";
    this.groesse = "";
    this.gewicht = "";
    this.augenfarbe = "";
    this.haarefarbe = "";
    this.geschlecht = "";
    this.aussehen = "";
    this.stand = "";
    this.titel = "";
    this.sozialstatus = "";
    this.hintergrund = "";
    this.vorteile = "";
    this.nachteile = "";
  }

  function Attribute(name, short) {
    this.value = 0;
    this.name = name;
    this.short = short;
  };

  function Attributes() {
    this.mut = new Attribute("Mut", "MU");
    this.charisma = new Attribute("Charisma", "CH");
    this.fingerfertigkeit = new Attribute("Fingerfertigkeit", "FF");
    this.gewandtheit = new Attribute("Gewandtheit", "GE");
    this.koerperkraft = new Attribute("Körperkraft", "KK");
    this.klugheit = new Attribute("Klugheit", "KL");
    this.intuition = new Attribute("Intuition", "IN");
    this.konstitution = new Attribute("Konstitution", "KO");
    this.geschwindigkeit = new Attribute("Geschwindigkeit", "GS");
  }

  function BasicValue(startfunc) {
    this.setupFunction = startfunc;

    this.setup = function(attr) {
      this.start = this.setupFunction(attr);
      this.actual = this.calcActual();
      this.currentValue = this.calcActual();
    };

    this.setMod = function(mod) {
      this.mod = mod;
      this.actual = this.calcActual();
      this.currentValue = this.calcActual();
    };

    this.calcActual = function() {
      return Math.round(this.start + this.mod);
    };

    this.mod = 0;
    this.start = 0;
    this.actual = this.calcActual();
    this.currentValue = this.calcActual();
  }

  function BasicValues() {
    this.setup = function(attr) {
      this.lebenspunkte.setup(attr);
      this.ausdauer.setup(attr);
      this.astralenegrie.setup(attr);
      this.magieresistenz.setup(attr);
      this.ini_basis.setup(attr);
      this.at_basis.setup(attr);
      this.pa_basis.setup(attr);
      this.fk_basis.setup(attr);
      this.behinderung.setup(attr);
      this.ausweichen.setup(attr);

    };
    this.lebenspunkte = new BasicValue(function(attr){
      return Math.round((attr.konstitution.value + attr.konstitution.value + attr.koerperkraft.value)/2);
    });

    this.ausdauer = new BasicValue(function(attr){
      return Math.round((attr.mut.value + attr.konstitution.value + attr.gewandtheit.value)/2);
    });

    this.astralenegrie = new BasicValue(function(attr){
      return Math.round((attr.mut.value + attr.intuition.value + attr.charisma.value)/2);
    });

    this.karmaenegrie = "";

    this.magieresistenz = new BasicValue(function(attr){
      return Math.round((attr.mut.value + attr.klugheit.value + attr.konstitution.value)/5);
    });

    this.ini_basis = new BasicValue(function(attr){
      return Math.round((attr.mut.value + attr.mut.value + attr.intuition.value + attr.gewandtheit.value)/5);
    });

    this.at_basis = new BasicValue(function(attr){
      return Math.round((attr.mut.value + attr.gewandtheit.value + attr.koerperkraft.value)/5);
    });

    this.pa_basis = new BasicValue(function(attr){
      return Math.round((attr.intuition.value + attr.gewandtheit.value + attr.koerperkraft.value)/5);
    });

    this.ausweichen = new BasicValue(function(attr){
      return Math.round((attr.intuition.value + attr.gewandtheit.value + attr.koerperkraft.value)/5);
    });

    this.fk_basis = new BasicValue(function(attr){
      return Math.round((attr.intuition.value + attr.fingerfertigkeit.value + attr.koerperkraft.value)/4);
    });

    this.behinderung = new BasicValue(function(attr){
      return 0;
    });


    // this.values = {
    //   lebenspunkte: this.lebenspunkte,
    //   ausdauer: this.ausdauer,
    //   astralenegrie: this.astralenegrie,
    //   magieresistenz: this.magieresistenz,
    //   ini_basis: this.ini_basis,
    //   at_basis: this.at_basis,
    //   pa_basis: this.pa_basis,
    //   fk_basis: this.fk_basis,
    //   behinderung: this.behinderung,
    //   ausweichen: this.ausweichen

    // }
  }

  // function HeroTalent(talent, value, category) {
  //   this.talent = talent,
  //   this.value = value,
  //   this.category = category
  // };

  function HeroTalents() {
    for (var key in TalentService.talentCategory) {
      this[key] = {};
    }

    this.setBasisTalents = function(talent_list){
      for (var talent in talent_list) {
        if (TalentService.talents[talent].talentType === TalentService.talentTypes.basisTalent) {
          this[TalentService.talents[talent].category.key][talent] = TalentService.talents[talent];
        }
      }
    }

  };


  function wlWeapon(name, x, y, z, at, pa, ini) {
    this.name = name;
    this.weaponType = "Waffenloser Kampf";
    this.damageFunc = [x, y, z];
    this.AT = at;
    this.PA = pa;
    this.DK = "NK";
    this.eINI = ini;
  }

  function nkWeapon(name, type, x, y, z, at, pa, dk, ebe, ini, bf) {
    this.name = name;
    this.weaponType = type;
    this.damageFunc = [x, y, z];
    this.AT = at;
    this.PA = pa;
    this.DK = dk;
    this.eBE = ebe;
    this.eINI = ini;
    this.BF = bf;
  }

  function fkWeapon(name, type, x, y, z, r1, r2, r3, r4, r5, d1, d2, d3, d4, d5, fk, be) {
    this.name = name;
    this.weaponType = type;
    this.damageFunc = [x, y, z];
    this.range = [r1, r2, r3, r4, r5];
    this.rangeDamage = [d1, d2, d3, d4, d5];
    this.FK = fk;
    this.DK = "FK";
    this.eBE = be;
    this.arrows = 0;
  }

  function wlWeapons() {
    this.raufen = new wlWeapon("Raufen", 1, 6, 0, 0, 0, 0);
    this.ringen = new wlWeapon("Ringen", 1, 6, 0, 0, 0, 0);
  }
  function fkWeapons() {
  }
  function nkWeapons() {
  }

  function Baggage() {
    this.wlWeapons = new wlWeapons();
    this.fkWeapons = new fkWeapons();
    this.nkWeapons = new nkWeapons();
  }

  function Hero(name) {
    this.profile = new Profile(name);
    this.attributes = new Attributes();
    this.basics = new BasicValues();
    this.talents = new HeroTalents();
    this.baggage = new Baggage();

    this.setup = function() {
      // first set all attributes
      this.basics.setup(this.attributes);
    }
  };

  // Gilion = function() {
  //   gilion = new Hero("Gilion Nebelsucher");    
  //   gilion.attributes.mut.value = 11;
  //   gilion.attributes.charisma.value = 9;
  //   gilion.attributes.fingerfertigkeit.value = 14;
  //   gilion.attributes.gewandtheit.value = 12;
  //   gilion.attributes.koerperkraft.value = 14;
  //   gilion.attributes.klugheit.value = 14;
  //   gilion.attributes.intuition.value = 10;
  //   gilion.attributes.konstitution.value = 11;
  //   gilion.attributes.geschwindigkeit.value = 9;

  //   gilion.setup();
  //   return gilion;
  // }

  this.Ohaia = function() {

    this.ohaia = new Hero("Ohaia Sternenreiterin");  

    
  //Profil (profile)

    this.ohaia.profile.rasse = "Auelfe";
    this.ohaia.profile.kultur = "Steppenelfische Sippe";
    this.ohaia.profile.profession = "Wildnisläuferin, Steppenreiterin";
    this.ohaia.profile.geschlecht = "weiblich";
    this.ohaia.profile.geburtstag = "5. Rondra 1003 BF";
    this.ohaia.profile.groesse = "102 Finger (204cm)";
    this.ohaia.profile.gewicht = "84 Stein";
    this.ohaia.profile.haarefarbe = "hellblond";
    this.ohaia.profile.augenfarbe = "goldgesprenkelt";
    this.ohaia.profile.sozialstatus = 4;
    this.ohaia.profile.vorteile = [
      "Altersresistenz", 
      "Dämmerungssicht", 
      "Flink: 1", 
      "Gutaussehend", 
      "Herausragender Sinn Gehör", 
      "Resistenz gegen Krankheiten",
      "Wohlklang" 
    ];
    this.ohaia.profile.nachteile = [
      "Arroganz: 5", 
      "Nahrungsrestiktion", 
      "Raumangst: 4", 
      "Sensibler Geruchssinn", 
      "Unfähingkeit für Talent: Zechen", 
      "Weldfremd bzgl. Adel/Hierarchien: 6",
      "Weldfremd bzgl. Geld/Besitz: 4",
      "Weldfremd bzgl. Götter/Religion: 6",
    ];

  //Eigenschaften (attributes)

    this.ohaia.attributes.mut.value = 11;
    this.ohaia.attributes.charisma.value = 10;
    this.ohaia.attributes.fingerfertigkeit.value = 11;
    this.ohaia.attributes.gewandtheit.value = 15;
    this.ohaia.attributes.koerperkraft.value = 11;
    this.ohaia.attributes.klugheit.value = 10;
    this.ohaia.attributes.intuition.value = 13;
    this.ohaia.attributes.konstitution.value = 12;
    this.ohaia.attributes.geschwindigkeit.value = 9;

  //Basiswerte (basic values)

    this.ohaia.basics.lebenspunkte.setMod(6);
    this.ohaia.basics.ausdauer.setMod(13);
    this.ohaia.basics.astralenegrie.setMod(13);
    this.ohaia.basics.magieresistenz.setMod(-2);
    this.ohaia.basics.ini_basis.setMod(0);
    this.ohaia.basics.at_basis.setMod(0);
    this.ohaia.basics.pa_basis.setMod(0);
    this.ohaia.basics.behinderung.setMod(0);
    this.ohaia.basics.ausweichen.setMod(7);


    this.ohaia.setup();
    this.ohaia.talents.setBasisTalents(TalentService.talents);

    //Talente (talents)
    
    this.ohaia.talents.kampf.bogen = TalentService.talents.bogen;
    this.ohaia.talents.kampf.fechtwaffen = TalentService.talents.fechtwaffen;
    this.ohaia.talents.kampf.speere = TalentService.talents.speere;
    
    this.ohaia.talents.kampf.dolche.value            = 4;
    this.ohaia.talents.kampf.bogen.value             = 14;  
    this.ohaia.talents.kampf.fechtwaffen.value       = 10;  
    this.ohaia.talents.kampf.speere.value            = 2;  


    this.ohaia.talents.koerper.reiten = TalentService.talents.reiten;
    this.ohaia.talents.koerper.stimmen_imitieren = TalentService.talents.stimmen_imitieren;
    this.ohaia.talents.koerper.zechen = TalentService.talents.zechen;
     
    this.ohaia.talents.koerper.athletik.value                    = 10; 
    this.ohaia.talents.koerper.klettern.value                    = 8; 
    this.ohaia.talents.koerper.koerperbeherrschung.value         = 10; 
    this.ohaia.talents.koerper.schleichen.value                  = 12; 
    this.ohaia.talents.koerper.schwimmen.value                   = 3; 
    this.ohaia.talents.koerper.selbstbeherrschung.value          = 2;   
    this.ohaia.talents.koerper.sich_verstecken.value             = 5; 
    this.ohaia.talents.koerper.singen.value                      = 7; 
    this.ohaia.talents.koerper.sinnenschaerfe.value              = 11; 
    this.ohaia.talents.koerper.tanzen.value                      = 3; 
    this.ohaia.talents.koerper.reiten.value                      = 11; 
    this.ohaia.talents.koerper.stimmen_imitieren.value           = 5; 
    this.ohaia.talents.koerper.zechen.value                      = 5; 


    this.ohaia.talents.gesellschaft.gassenwissen = TalentService.talents.gassenwissen;
     
    this.ohaia.talents.gesellschaft.menschenkenntnis.value        = 4; 
    this.ohaia.talents.gesellschaft.ueberreden.value              = 3; 
    this.ohaia.talents.gesellschaft.gassenwissen.value            = -2; 


    this.ohaia.talents.natur.fallenstellen = TalentService.talents.fallenstellen;
    this.ohaia.talents.natur.fesseln_entfesseln = TalentService.talents.fesseln_entfesseln;
    this.ohaia.talents.natur.fischen_angeln = TalentService.talents.fischen_angeln;
    this.ohaia.talents.natur.wettervorhersage = TalentService.talents.wettervorhersage;
     
    this.ohaia.talents.natur.faehrtensuchen.value           = 12; 
    this.ohaia.talents.natur.orientierung.value              = 9; 
    this.ohaia.talents.natur.wildnisleben.value              = 11;   
    this.ohaia.talents.natur.fallenstellen.value             = 5; 
    this.ohaia.talents.natur.fesseln_entfesseln.value        = 3; 
    this.ohaia.talents.natur.fischen_angeln.value            = 2; 
    this.ohaia.talents.natur.wettervorhersage.value          = 5; 


    this.ohaia.talents.wissen.magiekunde = TalentService.talents.magiekunde;
    this.ohaia.talents.wissen.pflanzenkunde = TalentService.talents.pflanzenkunde;
    this.ohaia.talents.wissen.rechtskunde = TalentService.talents.rechtskunde;
    this.ohaia.talents.wissen.sternkunde = TalentService.talents.sternkunde;
    this.ohaia.talents.wissen.tierkunde = TalentService.talents.tierkunde;
     
    this.ohaia.talents.wissen.goetter_kulte.value        = 0; 
    this.ohaia.talents.wissen.rechnen.value              = 0; 
    this.ohaia.talents.wissen.sagen_legenden.value       = 2; 
    this.ohaia.talents.wissen.magiekunde.value           = 5; 
    this.ohaia.talents.wissen.pflanzenkunde.value        = 11; 
    this.ohaia.talents.wissen.rechtskunde.value          = 0; 
    this.ohaia.talents.wissen.sternkunde.value           = 6; 
    this.ohaia.talents.wissen.tierkunde.value            = 12; 

    // this.ohaia.talents.sprache.sprachen_kennen_m.value             = 7;

    this.ohaia.talents.handwerk.abrichten = TalentService.talents.abrichten;
    this.ohaia.talents.handwerk.bogenbau = TalentService.talents.bogenbau;
    this.ohaia.talents.handwerk.heilkunde_gift = TalentService.talents.heilkunde_gift;
    this.ohaia.talents.handwerk.heilkunde_krankheiten = TalentService.talents.heilkunde_krankheiten;
    this.ohaia.talents.handwerk.musizieren = TalentService.talents.musizieren;

    this.ohaia.talents.handwerk.heilkunde_wunden.value       = 13;
    this.ohaia.talents.handwerk.holzbearbeitung.value        = 2;
    this.ohaia.talents.handwerk.kochen.value                 = 6;
    this.ohaia.talents.handwerk.lederarbeiten.value          = 6;
    this.ohaia.talents.handwerk.malen_zeichnen.value         = 0;
    this.ohaia.talents.handwerk.schneidern.value             = 2;
    this.ohaia.talents.handwerk.abrichten.value              = 5;
    this.ohaia.talents.handwerk.bogenbau.value               = 5;
    this.ohaia.talents.handwerk.heilkunde_gift.value         = 8;
    this.ohaia.talents.handwerk.heilkunde_krankheiten.value  = 7;
    this.ohaia.talents.handwerk.musizieren.value             = 9;


    //Gepäck (baggage)

    //Waffen (weapons)
    this.ohaia.baggage.wlWeapons.raufen          = new wlWeapon("Raufen", 1, 6, 0, 7, 8, 0);
    this.ohaia.baggage.wlWeapons.ringen          = new wlWeapon("Ringen", 1, 6, 0, 7, 8, 0);
    this.ohaia.baggage.nkWeapons.wolfsmesser     = new nkWeapon("Wolfsmesser (elf. Rapier)", "Fe", 1, 6, 3, 13, 12, "N", 1, 1, 1)
    this.ohaia.baggage.nkWeapons.dolch           = new nkWeapon("Dolch", "Do", 1, 6, 1, 10, 8, "H", 1, 0, 2)
    this.ohaia.baggage.fkWeapons.elfenbogen      = new fkWeapon("Elfenbogen", "Bo", 1, 6, 5, 10, 25, 50, 100, 200, 3, 2, 1, 1, 0, 23, -3);

    
    return this.ohaia;
  }

  this.Shanarion = function() {

    this.shanarion = new Hero("Shanarion Schattenreiter");  

    
  //Profil (profile)

    this.shanarion.profile.rasse = "Auelfe";
    this.shanarion.profile.kultur = "Steppenelfische Sippe";
    this.shanarion.profile.profession = "Wildnisläuferin, Steppenreiter";
    this.shanarion.profile.geschlecht = "männlich";
    this.shanarion.profile.geburtstag = "9. Travia 979 BF";
    this.shanarion.profile.groesse = "1.96 Schritt";
    this.shanarion.profile.gewicht = "76 Stein";
    this.shanarion.profile.haarefarbe = "silbern";
    this.shanarion.profile.augenfarbe = "bernstein";
    this.shanarion.profile.sozialstatus = 4;
    this.shanarion.profile.vorteile = [
      "Altersresistenz", 
      "Dämmerungssicht", 
      "Flink: 1", 
      "Gutaussehend", 
      "Herausragender Sinn Gehör", 
      "Resistenz gegen Krankheiten",
      "Wohlklang" 
    ];
    this.shanarion.profile.nachteile = [
      "Arroganz: 5", 
      "Nahrungsrestiktion", 
      "Raumangst: 10", 
      "Sensibler Geruchssinn: 6", 
      "Unfähingkeit für Talent: Zechen", 
      "Weldfremd bzgl. Adel/Hierarchien: 6",
      "Weldfremd bzgl. Geld/Besitz: 6",
      "Weldfremd bzgl. Götter/Religion: 6",
    ];

  //Eigenschaften (attributes)

    this.shanarion.attributes.mut.value = 12;
    this.shanarion.attributes.klugheit.value = 11;
    this.shanarion.attributes.intuition.value = 14;
    this.shanarion.attributes.charisma.value = 11;
    this.shanarion.attributes.fingerfertigkeit.value = 14;
    this.shanarion.attributes.gewandtheit.value = 15;
    this.shanarion.attributes.konstitution.value = 13;
    this.shanarion.attributes.koerperkraft.value = 12;
    this.shanarion.attributes.geschwindigkeit.value = 8;

  //Basiswerte (basic values)

    this.shanarion.basics.lebenspunkte.setMod(9);
    this.shanarion.basics.ausdauer.setMod(12);
    this.shanarion.basics.astralenegrie.setMod(17);
    this.shanarion.basics.magieresistenz.setMod(-2);
    this.shanarion.basics.ini_basis.setMod(0);
    this.shanarion.basics.at_basis.setMod(0);
    this.shanarion.basics.pa_basis.setMod(0);
    this.shanarion.basics.behinderung.setMod(0);
    this.shanarion.basics.ausweichen.setMod(7);


    this.shanarion.setup();
    this.shanarion.talents.setBasisTalents(TalentService.talents);

    //Talente (talents)
    
    this.shanarion.talents.kampf.bogen = TalentService.talents.bogen;
    this.shanarion.talents.kampf.fechtwaffen = TalentService.talents.fechtwaffen;
    this.shanarion.talents.kampf.speere = TalentService.talents.speere;
    
    this.shanarion.talents.kampf.dolche.value            = 4;
    this.shanarion.talents.kampf.bogen.value             = 15;  
    this.shanarion.talents.kampf.fechtwaffen.value       = 10;  
    this.shanarion.talents.kampf.speere.value            = 2;  


    this.shanarion.talents.koerper.reiten = TalentService.talents.reiten;
    this.shanarion.talents.koerper.stimmen_imitieren = TalentService.talents.stimmen_imitieren;
    this.shanarion.talents.koerper.zechen = TalentService.talents.zechen;
     
    this.shanarion.talents.koerper.athletik.value                    = 11; 
    this.shanarion.talents.koerper.klettern.value                    = 5; 
    this.shanarion.talents.koerper.koerperbeherrschung.value         = 10; 
    this.shanarion.talents.koerper.reiten.value                      = 12; 
    this.shanarion.talents.koerper.schleichen.value                  = 12; 
    this.shanarion.talents.koerper.schwimmen.value                   = 2; 
    this.shanarion.talents.koerper.selbstbeherrschung.value          = 4;   
    this.shanarion.talents.koerper.sich_verstecken.value             = 5; 
    this.shanarion.talents.koerper.singen.value                      = 8; 
    this.shanarion.talents.koerper.sinnenschaerfe.value              = 14; 
    this.shanarion.talents.koerper.stimmen_imitieren.value           = 3; 
    this.shanarion.talents.koerper.tanzen.value                      = 3; 
    this.shanarion.talents.koerper.zechen.value                      = -2; 


    this.shanarion.talents.gesellschaft.gassenwissen = TalentService.talents.gassenwissen;
     
    this.shanarion.talents.gesellschaft.gassenwissen.value            = -2; 
    this.shanarion.talents.gesellschaft.menschenkenntnis.value        = 1; 
    this.shanarion.talents.gesellschaft.ueberreden.value              = 0; 


    this.shanarion.talents.natur.fallenstellen = TalentService.talents.fallenstellen;
    this.shanarion.talents.natur.fesseln_entfesseln = TalentService.talents.fesseln_entfesseln;
    this.shanarion.talents.natur.fischen_angeln = TalentService.talents.fischen_angeln;
    this.shanarion.talents.natur.wettervorhersage = TalentService.talents.wettervorhersage;
     
    this.shanarion.talents.natur.faehrtensuchen.value           = 11; 
    this.shanarion.talents.natur.fallenstellen.value             = 6; 
    this.shanarion.talents.natur.fesseln_entfesseln.value        = 3; 
    this.shanarion.talents.natur.fischen_angeln.value            = 2; 
    this.shanarion.talents.natur.orientierung.value              = 9; 
    this.shanarion.talents.natur.wettervorhersage.value          = 5; 
    this.shanarion.talents.natur.wildnisleben.value              = 12;   


    this.shanarion.talents.wissen.magiekunde = TalentService.talents.magiekunde;
    this.shanarion.talents.wissen.pflanzenkunde = TalentService.talents.pflanzenkunde;
    this.shanarion.talents.wissen.rechtskunde = TalentService.talents.rechtskunde;
    this.shanarion.talents.wissen.sternkunde = TalentService.talents.sternkunde;
    this.shanarion.talents.wissen.tierkunde = TalentService.talents.tierkunde;
     
    this.shanarion.talents.wissen.goetter_kulte.value        = 0; 
    this.shanarion.talents.wissen.magiekunde.value           = 2; 
    this.shanarion.talents.wissen.pflanzenkunde.value        = 11; 
    this.shanarion.talents.wissen.rechnen.value              = 0; 
    this.shanarion.talents.wissen.rechtskunde.value          = -2; 
    this.shanarion.talents.wissen.sagen_legenden.value       = 2; 
    this.shanarion.talents.wissen.sternkunde.value           = 6; 
    this.shanarion.talents.wissen.tierkunde.value            = 9; 

    // this.shanarion.talents.sprache.sprachen_kennen_m.value             = 7;

    this.shanarion.talents.handwerk.abrichten = TalentService.talents.abrichten;
    this.shanarion.talents.handwerk.bogenbau = TalentService.talents.bogenbau;
    this.shanarion.talents.handwerk.heilkunde_gift = TalentService.talents.heilkunde_gift;
    this.shanarion.talents.handwerk.musizieren = TalentService.talents.musizieren;

    this.shanarion.talents.handwerk.abrichten.value              = 2;
    this.shanarion.talents.handwerk.bogenbau.value               = 6;
    this.shanarion.talents.handwerk.heilkunde_gift.value         = 7;
    this.shanarion.talents.handwerk.heilkunde_wunden.value       = 10;
    this.shanarion.talents.handwerk.holzbearbeitung.value        = 25;
    this.shanarion.talents.handwerk.kochen.value                 = 0;
    this.shanarion.talents.handwerk.lederarbeiten.value          = 3;
    this.shanarion.talents.handwerk.malen_zeichnen.value         = 0;
    this.shanarion.talents.handwerk.musizieren.value             = 9;
    this.shanarion.talents.handwerk.schneidern.value             = 2;


    //Gepäck (baggage)

    //Waffen (weapons)
    this.shanarion.baggage.wlWeapons.raufen          = new wlWeapon("Raufen", 1, 6, 0, 7, 8, 0);
    this.shanarion.baggage.wlWeapons.ringen          = new wlWeapon("Ringen", 1, 6, 0, 7, 8, 0);
    this.shanarion.baggage.nkWeapons.wolfsmesser     = new nkWeapon("Wolfsmesser (elf. Rapier)", "Fe", 1, 6, 3, 15, 11, "N", 1, 1, 1);
    this.shanarion.baggage.nkWeapons.dolch           = new nkWeapon("Elfisches Jagdmesser", "Do", 1, 6, 2, 11, 7, "H", 1, 0, 2);
    this.shanarion.baggage.fkWeapons.elfenbogen      = new fkWeapon("Elfenbogen", "Bo", 1, 6, 5, 10, 25, 50, 100, 200, 3, 2, 1, 1, 0, 25, -3);

    
    return this.shanarion;
  }

  this.Heros = function() {
    
    this.heros = {
      ohaia: this.Ohaia(),
      shanarion: this.Shanarion()
    }

    return this.heros;
  }

  this.Current = function() {

    this.current = {
      currentHero: this.Heros().shanarion
    }

    return this.current;
  }


})