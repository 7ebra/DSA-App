'use strict';

app.service('HeroService', function HeroService(TalentService, BaggageService, AttributeService, SpellService) {

  console.log(BaggageService);
  console.log(TalentService);

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
    this.vorteile = [];
    this.nachteile = [];
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

  function HeroWeapons() {
    this.wlWeapons = {};
    this.nkWeapons = {};
    this.fkWeapons = {};
  }
  function HeroArmory() {
    this.shields = {};
    this.components = {};
    this.overall = 0;
  }


  function HeroBaggage() {
    this.weapons      = new HeroWeapons();
    this.armory       = new HeroArmory();
    this.stuffBaggage = {};
    this.money        = new BaggageService.Money(0, 0, 0, 0)
  }

  function Hero(name) {
    this.profile    = new Profile(name);
    this.attributes = new AttributeService;
    this.basics     = new BasicValues();
    this.talents    = new HeroTalents();
    this.baggage    = new HeroBaggage();
    this.spells     = {};

    this.setup = function() {
      // first set all attributes
      this.basics.setup(this.attributes);
    }
  };

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


  // Gepäck (baggage)

    // Waffen (weapons)
    this.shanarion.baggage.weapons.wlWeapons.raufen          = BaggageService.weapons.wlWeapons.raufen;
    this.shanarion.baggage.weapons.wlWeapons.ringen          = BaggageService.weapons.wlWeapons.ringen;
    this.shanarion.baggage.weapons.nkWeapons.wolfsmesser     = BaggageService.weapons.nkWeapons.wolfsmesser;
    this.shanarion.baggage.weapons.nkWeapons.dolch           = BaggageService.weapons.nkWeapons.elfisches_jagtmesser;
    this.shanarion.baggage.weapons.fkWeapons.elfenbogen      = BaggageService.weapons.fkWeapons.elfenbogen;

    // Rüstung (armory)
    this.shanarion.baggage.armory.components.lederhose                  = BaggageService.armory.lederhose;
    this.shanarion.baggage.armory.components.lederhelm                  = BaggageService.armory.lederhelm;

    var self = this;
    angular.forEach(self.shanarion.baggage.armory.components, function(armory){
      self.shanarion.baggage.armory.overall += armory.value;
    })

    // Zeug (stuff)
    this.shanarion.baggage.stuffBaggage.alraune                         = new BaggageService.Stuff('Alraune', 10, 2, 'Pflanze');
    this.shanarion.baggage.stuffBaggage.fesselseil                      = new BaggageService.Stuff('Fesselseil, Leder (1 Schritt)', 10, 1, 'Seil');
    this.shanarion.baggage.stuffBaggage.halskette                       = new BaggageService.Stuff('Halskette', 1, 1, 'Schmuck');
    this.shanarion.baggage.stuffBaggage.holzflöte                       = new BaggageService.Stuff('Holzflöte', 8, 1, 'Musikintrument');
    this.shanarion.baggage.stuffBaggage.kaputzenumhang                  = new BaggageService.Stuff('Kaputzenumhang', 80, 1, 'Kleidung');
    this.shanarion.baggage.stuffBaggage.lederschuhe                     = new BaggageService.Stuff('Lederschuhe', 40, 1, 'Kleidung');
    this.shanarion.baggage.stuffBaggage.pfeile                          = new BaggageService.Stuff('Pfeile', 60, 20, 'Munition');

    // Geld (money)
    this.shanarion.baggage.money                                        = new BaggageService.Money(6, 4, 9, 3);

  // Zauber (spells)
    this.shanarion.spells.balsam                   = SpellService.spells.balsam;
    this.shanarion.spells.balsam.value             = 9;
    this.shanarion.spells.seidenzunge              = SpellService.spells.seidenzunge;
    this.shanarion.spells.seidenzunge.value        = 6;


    return this.shanarion;
  }

  this.Heros = function() {
    
    this.heros = {
      // ohaia: this.Ohaia(),
      shanarion: this.Shanarion()
    }

    return this.heros;
  }

  this.Current = function() {

    this.current = {
      currentHero: this.Heros().shanarion
    }

    console.log(this.current);
    return this.current;
  }


})