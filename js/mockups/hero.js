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

// attributes = {
//   mut: "mut",
//   charisma: "charisma",
//   fingerfertigkeit: "fingerfertigkeit",
//   gewandtheit: "gewandtheit",
//   koerperkraft: "koerperkraft",
//   klugheit: "klugheit",
//   intuition: "intuition",
//   konstitution: "konstitution",
//   geschwindigkeit: "gewandtheit"
// };

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

  this.fk_basis = new BasicValue(function(attr){
    return Math.round((attr.intuition.value + attr.fingerfertigkeit.value + attr.koerperkraft.value)/4);
  });

  this.behinderung = new BasicValue(function(attr){
    return 0;
  });


  this.values = {
    lebenspunkte: this.lebenspunkte,
    ausdauer: this.ausdauer,
    astralenegrie: this.astralenegrie,
    magieresistenz: this.magieresistenz,
    ini_basis: this.ini_basis,
    at_basis: this.at_basis,
    pa_basis: this.pa_basis,
    fk_basis: this.fk_basis,
    behinderung: this.behinderung

  }
}

// function HeroTalent(talent, value, category) {
//   this.talent = talent,
//   this.value = value,
//   this.category = category
// };

function HeroTalents() {
  for (var key in talentCategory) {
    this[key] = {};
  }

  this.setBasisTalents = function(talent_list){
    for (var talent in talent_list) {
      if (talents[talent].talentType === talentTypes.basisTalent) {
        this[talents[talent].category.key][talent] = talents[talent];
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

function Weapons() {
  this.raufen = new wlWeapon("Raufen", 1, 6, 0, 0, 0, 0);
  this.ringen = new wlWeapon("Ringen", 1, 6, 0, 0, 0, 0);
}

function Baggage() {
  this.weapons = new Weapons();
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

Gilion = function() {
  gilion = new Hero("Gilion Nebelsucher");    
  gilion.attributes.mut.value = 11;
  gilion.attributes.charisma.value = 9;
  gilion.attributes.fingerfertigkeit.value = 14;
  gilion.attributes.gewandtheit.value = 12;
  gilion.attributes.koerperkraft.value = 14;
  gilion.attributes.klugheit.value = 14;
  gilion.attributes.intuition.value = 10;
  gilion.attributes.konstitution.value = 11;
  gilion.attributes.geschwindigkeit.value = 9;

  gilion.setup();
  return gilion;
}

Ohaia = function() {

  ohaia = new Hero("Ohaia Sternenreiterin");  

  
//Profil (profile)

  ohaia.profile.rasse = "Auelfe";
  ohaia.profile.kultur = "Steppenelfische Sippe";
  ohaia.profile.profession = "Wildnisläuferin, Steppenreiterin";
  ohaia.profile.geschlecht = "weiblich";
  ohaia.profile.geburtstag = "5. Rondra 1003 BF";
  ohaia.profile.groesse = "102 Finger (204cm)";
  ohaia.profile.gewicht = "84 Stein";
  ohaia.profile.haarefarbe = "hellblond";
  ohaia.profile.augenfarbe = "goldgesprenkelt";
  ohaia.profile.sozialstatus = 4;
  ohaia.profile.vorteile = [
    "Altersresistenz", 
    "Dämmerungssicht", 
    "Flink: 1", 
    "Gutaussehend", 
    "Herausragender Sinn Gehör", 
    "Resistenz gegen Krankheiten",
    "Wohlklang" 
  ];
  ohaia.profile.nachteile = [
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

  ohaia.attributes.mut.value = 11;
  ohaia.attributes.charisma.value = 10;
  ohaia.attributes.fingerfertigkeit.value = 11;
  ohaia.attributes.gewandtheit.value = 15;
  ohaia.attributes.koerperkraft.value = 11;
  ohaia.attributes.klugheit.value = 10;
  ohaia.attributes.intuition.value = 13;
  ohaia.attributes.konstitution.value = 12;
  ohaia.attributes.geschwindigkeit.value = 9;

//Basiswerte (basic values)

  ohaia.basics.lebenspunkte.setMod(6);
  ohaia.basics.ausdauer.setMod(13);
  ohaia.basics.astralenegrie.setMod(13);
  ohaia.basics.magieresistenz.setMod(-2);
  ohaia.basics.ini_basis.setMod(0);
  ohaia.basics.at_basis.setMod(0);
  ohaia.basics.pa_basis.setMod(0);
  ohaia.basics.behinderung.setMod(0);


  ohaia.setup();
  ohaia.talents.setBasisTalents(talents);

  //Talente (talents)
  
  ohaia.talents.kampf.bogen = talents.bogen;
  ohaia.talents.kampf.fechtwaffen = talents.fechtwaffen;
  ohaia.talents.kampf.speere = talents.speere;
  
  ohaia.talents.kampf.dolche.value            = 4;
  ohaia.talents.kampf.bogen.value             = 14;  
  ohaia.talents.kampf.fechtwaffen.value       = 10;  
  ohaia.talents.kampf.speere.value            = 2;  


  ohaia.talents.koerper.reiten = talents.reiten;
  ohaia.talents.koerper.stimmen_imitieren = talents.stimmen_imitieren;
  ohaia.talents.koerper.zechen = talents.zechen;
   
  ohaia.talents.koerper.athletik.value                    = 10; 
  ohaia.talents.koerper.klettern.value                    = 8; 
  ohaia.talents.koerper.koerperbeherrschung.value         = 10; 
  ohaia.talents.koerper.schleichen.value                  = 12; 
  ohaia.talents.koerper.schwimmen.value                   = 3; 
  ohaia.talents.koerper.selbstbeherrschung.value          = 2;   
  ohaia.talents.koerper.sich_verstecken.value             = 5; 
  ohaia.talents.koerper.singen.value                      = 7; 
  ohaia.talents.koerper.sinnenschaerfe.value              = 11; 
  ohaia.talents.koerper.tanzen.value                      = 3; 
  ohaia.talents.koerper.reiten.value                      = 11; 
  ohaia.talents.koerper.stimmen_imitieren.value           = 5; 
  ohaia.talents.koerper.zechen.value                      = 5; 


  ohaia.talents.gesellschaft.gassenwissen = talents.gassenwissen;
   
  ohaia.talents.gesellschaft.menschenkenntnis.value        = 4; 
  ohaia.talents.gesellschaft.ueberreden.value              = 3; 
  ohaia.talents.gesellschaft.gassenwissen.value            = -2; 


  ohaia.talents.natur.fallenstellen = talents.fallenstellen;
  ohaia.talents.natur.fesseln_entfesseln = talents.fesseln_entfesseln;
  ohaia.talents.natur.fischen_angeln = talents.fischen_angeln;
  ohaia.talents.natur.wettervorhersage = talents.wettervorhersage;
   
  ohaia.talents.natur.faehrtensuchen.value           = 12; 
  ohaia.talents.natur.orientierung.value              = 9; 
  ohaia.talents.natur.wildnisleben.value              = 11;   
  ohaia.talents.natur.fallenstellen.value             = 5; 
  ohaia.talents.natur.fesseln_entfesseln.value        = 3; 
  ohaia.talents.natur.fischen_angeln.value            = 2; 
  ohaia.talents.natur.wettervorhersage.value          = 5; 


  ohaia.talents.wissen.magiekunde = talents.magiekunde;
  ohaia.talents.wissen.pflanzenkunde = talents.pflanzenkunde;
  ohaia.talents.wissen.rechtskunde = talents.rechtskunde;
  ohaia.talents.wissen.sternkunde = talents.sternkunde;
  ohaia.talents.wissen.tierkunde = talents.tierkunde;
   
  ohaia.talents.wissen.goetter_kulte.value        = 0; 
  ohaia.talents.wissen.rechnen.value              = 0; 
  ohaia.talents.wissen.sagen_legenden.value       = 2; 
  ohaia.talents.wissen.magiekunde.value           = 5; 
  ohaia.talents.wissen.pflanzenkunde.value        = 11; 
  ohaia.talents.wissen.rechtskunde.value          = 0; 
  ohaia.talents.wissen.sternkunde.value           = 6; 
  ohaia.talents.wissen.tierkunde.value            = 12; 

  // ohaia.talents.sprache.sprachen_kennen_m.value             = 7;

  ohaia.talents.handwerk.abrichten = talents.abrichten;
  ohaia.talents.handwerk.bogenbau = talents.bogenbau;
  ohaia.talents.handwerk.heilkunde_gift = talents.heilkunde_gift;
  ohaia.talents.handwerk.heilkunde_krankheiten = talents.heilkunde_krankheiten;
  ohaia.talents.handwerk.musizieren = talents.musizieren;

  ohaia.talents.handwerk.heilkunde_wunden.value       = 13;
  ohaia.talents.handwerk.holzbearbeitung.value        = 2;
  ohaia.talents.handwerk.kochen.value                 = 6;
  ohaia.talents.handwerk.lederarbeiten.value          = 6;
  ohaia.talents.handwerk.malen_zeichnen.value         = 0;
  ohaia.talents.handwerk.schneidern.value             = 2;
  ohaia.talents.handwerk.abrichten.value              = 5;
  ohaia.talents.handwerk.bogenbau.value               = 5;
  ohaia.talents.handwerk.heilkunde_gift.value         = 8;
  ohaia.talents.handwerk.heilkunde_krankheiten.value  = 7;
  ohaia.talents.handwerk.musizieren.value             = 9;


  //Gepäck (baggage)

    //Waffen (weapons)
  ohaia.baggage.weapons.raufen          = new wlWeapon("Raufen", 1, 6, 0, 7, 8, 0);
  ohaia.baggage.weapons.ringen          = new wlWeapon("Ringen", 1, 6, 0, 7, 8, 0);
  ohaia.baggage.weapons.wolfsmesser     = new nkWeapon("Wolfsmesser (elf. Rapier)", "Fe", 1, 6, 3, 13, 12, "N", 1, 1, 1)
  ohaia.baggage.weapons.dolch           = new nkWeapon("Dolch", "Do", 1, 6, 1, 10, 8, "H", 1, 0, 2)
  ohaia.baggage.weapons.elfenbogen      = new fkWeapon("Elfenbogen", "Bo", 1, 6, 5, 10, 25, 50, 100, 200, 3, 2, 1, 1, 0, 23, -3);

  return ohaia;

}
