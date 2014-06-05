'use strict';

app.service('TalentService', function TalentService() {

  // probe = [
  //   {
  //   {
  //     attribute: "dfgh",
  //     value: 5,
  //   }
  // ]

  function Talent(name) {
    this.name = name;
    this.setProofAttrs = function(attr1, attr2, attr3){
      this.proofAttr1 = attr1;
      this.proofAttr2 = attr2;
      this.proofAttr3 = attr3;
    };
    this.category = "";
    this.talentType = "";
    this.value = 0;
    this.leittalent = false;
  };

  this.talents = {
    dolche: new Talent("Dolche"), 
    hiebwaffen: new Talent("Hiebwaffen"),
    raufen: new Talent("Raufen"),
    ringen: new Talent("Ringen"),
    saebel: new Talent("Säbel"),
    wurfmesser: new Talent("Wurfmesser"),
    anderthalbhaender: new Talent("Anderthalbhaender"),
    armbrust: new Talent("Armbrust"),
    belagerungswaffen: new Talent("Belagerungswaffen"),
    blasrohr: new Talent("Blasrohr"),
    bogen: new Talent("Bogen"),
    diskus: new Talent("Diskus"),
    fechtwaffen: new Talent("Fechtwaffen"),
    infanteriewaffen: new Talent("Infanteriewaffen"),
    kettenstaebe: new Talent("Kettenstäbe"),
    kettenwaffen: new Talent("Kettenwaffen"),
    lanzenreiten: new Talent("Lanzenreiten"),
    peitsche: new Talent("Peitsche"),
    schleuder: new Talent("Schleuder"),
    schwerter: new Talent("Schwerter"),
    speere: new Talent("Speere"),
    staebe: new Talent("Stäbe"),
    wurfbeile: new Talent("Wurfbeiler"),
    wurfspeere: new Talent("Wurfspeere"),
    zweihandflegel: new Talent("Zweihandflegel"),
    zweihand_hiebwaffen: new Talent("Zweihand Hiebwaffen"),
    zweihandschwerter_saebel: new Talent("Zweihandschwerter Säbel"),

    athletik: new Talent("Athletik"),
    klettern: new Talent("Klettern"),
    koerperbeherrschung: new Talent("Körperbeherrschung"),
    schleichen: new Talent("Schleichen"),
    schwimmen: new Talent("Schwimmen"),
    selbstbeherrschung: new Talent("Selbstbeherrschung"),
    sich_verstecken: new Talent("Sich Verstecken"),
    singen: new Talent("Singen"),
    sinnenschaerfe: new Talent("Sinnesschärfe"),
    tanzen: new Talent("Tanzen"),
    zechen: new Talent("Zechen"),
    akrobatik: new Talent("Akrobatik"),
    fliegen: new Talent("Fliegen"),
    gaukeleien: new Talent("Gaukeleien"),
    reiten: new Talent("Reiten"),
    skifahren: new Talent("Skifahren"),
    stimmen_imitieren: new Talent("Stimmen Imitieren"),
    taschendiebstahl: new Talent("Taschendiebstahl"),

    menschenkenntnis: new Talent("Menschenkenntnis"),
    ueberreden: new Talent("Überreden"),
    betoeren: new Talent("Betören"),
    etikette: new Talent("Etiekette"),
    gassenwissen: new Talent("Gassenwissen"),
    lehren: new Talent("Lehren"),
    schauspielerei: new Talent("Schauspielerei"),
    schriftlicher_ausdruck: new Talent("Schriftlicher Ausdruck"),
    sich_verkleiden: new Talent("Sich Verkleiden"),
    ueberzeugen: new Talent("Überzeugen"),

    faehrtensuchen: new Talent("Fährtensuchen"),
    orientierung: new Talent("Orientierung"),
    wildnisleben: new Talent("Wildnisleben"),
    fallenstellen: new Talent("Fallenstellen"),
    fesseln_entfesseln: new Talent("Fesseln/ Entfesseln"),
    fischen_angeln: new Talent("Fischen/ Angeln"),
    wettervorhersage: new Talent("Wettervorhersage"),

    goetter_kulte: new Talent("Götter/ Kulte"),
    rechnen: new Talent("Rechnen"),
    sagen_legenden: new Talent("Sagen/ Legenden"),
    anatomie: new Talent("Anatomie"),
    baukunst: new Talent("Baukunst"),
    brettspiel: new Talent("Brettspiel"),
    geographie: new Talent("Geographie"),
    geschichtswissen: new Talent("Geschichtswissen"),
    gesteinskunde: new Talent("Gesteinskunde"),
    heraldik: new Talent("Heraldik"),
    huettenkunde: new Talent("Hüttenkunde"),
    kriegskunst: new Talent("Kriegskunst"),
    kryptographie: new Talent("Kryptographie"),
    magiekunde: new Talent("Magiekunde"),
    mechanik: new Talent("Mechanik"),
    pflanzenkunde: new Talent("Pfalnzenkunde"),
    philosophie: new Talent("Philosophie"),
    rechtskunde: new Talent("Rechtskunde"),
    schaetzen: new Talent("Schätzen"),
    sprachenkunde: new Talent("Sprachenkunde"),
    staatskunst: new Talent("Staatskunst"),
    sternkunde: new Talent("Sternkunde"),
    tierkunde: new Talent("Tierkunde"),

    sprachen_kennen_m: new Talent("Sprachen kennen: Muttersprache"),
    lesen_schreiben_s: new Talent("Lesen Schreiben: Schrift"),
    sprachen_kennen_f: new Talent("Sprachen kennen: Fremdsprache"),

    heilkunde_wunden: new Talent("Heilkunde: Wunden"),
    holzbearbeitung: new Talent("Holzbearbeitung"),
    kochen: new Talent("Kochen"),
    lederarbeiten: new Talent("Lederarbeiten"),
    malen_zeichnen: new Talent("Malen/ Zeichnen"),
    schneidern: new Talent("Schneidern"),
    abrichten: new Talent("Abrichten"),
    ackerbau: new Talent("Ackerbau"),
    alchimie: new Talent("Alchemie"),
    bergbau: new Talent("Bergbau"),
    bogenbau: new Talent("Bogenbau"),
    boote_fahren: new Talent("Boote Fahren"),
    brauer: new Talent("Bauer"),
    drucker: new Talent("Drucker"),
    fahrzeug_lenken: new Talent("Fahrzeug Lenken"),
    falschspiel: new Talent("Falschspiel"),
    feinmechanik: new Talent("Feinmechanik"),
    feuersteinbearbeitung: new Talent("Feuersteinbearbeitung"),
    fleischer: new Talent("Fleischer"),
    gerber_kuerschner: new Talent("Gerber/ Kürschner"),
    glaskunst: new Talent("Glaskust"),
    grobschmied: new Talent("Grobschmied"),
    handel: new Talent("Handel"),
    hauswirtschaft: new Talent("Hauswirtschaft"),
    heilkunde_gift: new Talent("Heilkunde: Gift"),
    heilkunde_krankheiten: new Talent("Heilkunde: Krankheiten"),
    heilkunde_seele: new Talent("Heilkunde: Seele"),
    instrumentenbauer: new Talent("Instrumentenbauer"),
    kartographie: new Talent("Kartographie"),
    kristallzucht: new Talent("Kristallzucht"),
    maurer: new Talent("Maurer"),
    metallguss: new Talent("Metallguss"),
    musizieren: new Talent("Musizieren"),
    schloesser_knacken: new Talent("Schlösser Knacken"),
    schnaps_brennen: new Talent("Schnaps Brennen"),
    seefahrt: new Talent("Seefahrt"),
    seiler: new Talent("Seiler"),
    steinmetz: new Talent("Steinmetz"),
    steinschneider_juwelier: new Talent("Steinschneider: Juwelier"),
    stellmacher: new Talent("Stellmacher"),
    stoffe_faerben: new Talent("Stoffe Färben"),
    taetowieren: new Talent("Tätowieren"),
    toepfern: new Talent("Töpfern"),
    viehzucht: new Talent("Viehzucht"),
    webkunst: new Talent("Webkunst"),
    winzer: new Talent("Winzer"),
    zimmermann: new Talent("Zimmermann"),
  }

  //category

  this.talentCategory = {
    kampf: {
      name: "Kampf",
      key: "kampf"
    },
    koerper: {
      name: "Körper",
      key: "koerper"
    },
    gesellschaft: {
      name: "Gesellschaft",
      key: "gesellschaft"
    },
    natur: {
      name: "Natur",
      key: "natur"
    },
    wissen: {
      name: "Wissen",
      key: "wissen"
    },
    sprache: {
      name:"Sprache",
      key: "sprache"
    },
    handwerk: {
      name: "Handwerk",
      key: "handwerk"
    }
  };

  this.talents.dolche.category                     = this.talentCategory.kampf;
  this.talents.hiebwaffen.category                 = this.talentCategory.kampf;
  this.talents.raufen.category                     = this.talentCategory.kampf;
  this.talents.ringen.category                     = this.talentCategory.kampf;
  this.talents.saebel.category                     = this.talentCategory.kampf;
  this.talents.wurfmesser.category                 = this.talentCategory.kampf;

  this.talents.anderthalbhaender.category          = this.talentCategory.Kampf;
  this.talents.armbrust.category                   = this.talentCategory.kampf;
  this.talents.belagerungswaffen.category          = this.talentCategory.kampf;
  this.talents.blasrohr.category                   = this.talentCategory.kampf;
  this.talents.bogen.category                      = this.talentCategory.kampf;
  this.talents.diskus.category                     = this.talentCategory.kampf;
  this.talents.fechtwaffen.category                = this.talentCategory.kampf;
  this.talents.infanteriewaffen.category           = this.talentCategory.Kampf;
  this.talents.kettenstaebe.category               = this.talentCategory.kampf;
  this.talents.kettenwaffen.category               = this.talentCategory.kampf;
  this.talents.lanzenreiten.category               = this.talentCategory.kampf;
  this.talents.peitsche.category                   = this.talentCategory.kampf;
  this.talents.schleuder.category                  = this.talentCategory.kampf;
  this.talents.schwerter.category                  = this.talentCategory.kampf;
  this.talents.speere.category                     = this.talentCategory.kampf;
  this.talents.staebe.category                     = this.talentCategory.kampf;
  this.talents.wurfbeile.category                  = this.talentCategory.kampf;
  this.talents.wurfspeere.category                 = this.talentCategory.kampf;
  this.talents.zweihandflegel.category             = this.talentCategory.kampf;
  this.talents.zweihand_hiebwaffen.category        = this.talentCategory.kampf;
  this.talents.zweihandschwerter_saebel.category   = this.talentCategory.kampf;


  this.talents.athletik.category                   = this.talentCategory.koerper;
  this.talents.klettern.category                   = this.talentCategory.koerper;
  this.talents.koerperbeherrschung.category        = this.talentCategory.koerper;
  this.talents.schleichen.category                 = this.talentCategory.koerper;
  this.talents.schwimmen.category                  = this.talentCategory.koerper;
  this.talents.selbstbeherrschung.category         = this.talentCategory.koerper;
  this.talents.sich_verstecken.category            = this.talentCategory.koerper;
  this.talents.singen.category                     = this.talentCategory.koerper;
  this.talents.sinnenschaerfe.category             = this.talentCategory.koerper;
  this.talents.tanzen.category                     = this.talentCategory.koerper;

  this.talents.zechen.category                     = this.talentCategory.koerper;
  this.talents.akrobatik.category                  = this.talentCategory.koerper;
  this.talents.fliegen.category                    = this.talentCategory.koerper;
  this.talents.gaukeleien.category                 = this.talentCategory.koerper;
  this.talents.reiten.category                     = this.talentCategory.koerper;
  this.talents.skifahren.category                  = this.talentCategory.koerper;
  this.talents.stimmen_imitieren.category          = this.talentCategory.koerper;
  this.talents.taschendiebstahl.category           = this.talentCategory.koerper;


  this.talents.menschenkenntnis.category           = this.talentCategory.gesellschaft;
  this.talents.ueberreden.category                 = this.talentCategory.gesellschaft;

  this.talents.etikette.category                   = this.talentCategory.gesellschaft;
  this.talents.betoeren.category                   = this.talentCategory.gesellschaft;
  this.talents.taschendiebstahl.category           = this.talentCategory.gesellschaft;
  this.talents.gassenwissen.category               = this.talentCategory.gesellschaft;
  this.talents.lehren.category                     = this.talentCategory.gesellschaft;
  this.talents.schauspielerei.category             = this.talentCategory.gesellschaft;
  this.talents.schriftlicher_ausdruck.category     = this.talentCategory.gesellschaft;
  this.talents.sich_verkleiden.category            = this.talentCategory.gesellschaft;
  this.talents.ueberzeugen.category                = this.talentCategory.gesellschaft;


  this.talents.faehrtensuchen.category             = this.talentCategory.natur;
  this.talents.orientierung.category               = this.talentCategory.natur;
  this.talents.wildnisleben.category               = this.talentCategory.natur;

  this.talents.fallenstellen.category              = this.talentCategory.natur;
  this.talents.fesseln_entfesseln.category         = this.talentCategory.natur;
  this.talents.fischen_angeln.category             = this.talentCategory.natur;
  this.talents.wettervorhersage.category           = this.talentCategory.natur;


  this.talents.goetter_kulte.category              = this.talentCategory.wissen;
  this.talents.rechnen.category                    = this.talentCategory.wissen;
  this.talents.sagen_legenden.category             = this.talentCategory.wissen;

  this.talents.anatomie.category                   = this.talentCategory.wissen;
  this.talents.baukunst.category                   = this.talentCategory.wissen;
  this.talents.brettspiel.category                 = this.talentCategory.wissen;
  this.talents.geographie.category                 = this.talentCategory.wissen;
  this.talents.geschichtswissen.category           = this.talentCategory.wissen;
  this.talents.gesteinskunde.category              = this.talentCategory.wissen;
  this.talents.heraldik.category                   = this.talentCategory.wissen;
  this.talents.huettenkunde.category               = this.talentCategory.wissen;
  this.talents.kriegskunst.category                = this.talentCategory.wissen;
  this.talents.kryptographie.category              = this.talentCategory.wissen;
  this.talents.magiekunde.category                 = this.talentCategory.wissen;
  this.talents.mechanik.category                   = this.talentCategory.wissen;
  this.talents.pflanzenkunde.category              = this.talentCategory.wissen;
  this.talents.philosophie.category                = this.talentCategory.wissen;
  this.talents.rechtskunde.category                = this.talentCategory.wissen;
  this.talents.schaetzen.category                  = this.talentCategory.wissen;
  this.talents.sprachenkunde.category              = this.talentCategory.wissen;
  this.talents.staatskunst.category                = this.talentCategory.wissen;
  this.talents.sternkunde.category                 = this.talentCategory.wissen;
  this.talents.tierkunde.category                  = this.talentCategory.wissen;


  this.talents.sprachen_kennen_m.category          = this.talentCategory.sprache;

  this.talents.lesen_schreiben_s.category          = this.talentCategory.sprache;
  this.talents.sprachen_kennen_f.category          = this.talentCategory.sprache;


  this.talents.heilkunde_wunden.category           = this.talentCategory.handwerk;
  this.talents.holzbearbeitung.category            = this.talentCategory.handwerk;
  this.talents.kochen.category                     = this.talentCategory.handwerk;
  this.talents.lederarbeiten.category              = this.talentCategory.handwerk;
  this.talents.malen_zeichnen.category             = this.talentCategory.handwerk;
  this.talents.schneidern.category                 = this.talentCategory.handwerk;

  this.talents.abrichten.category                  = this.talentCategory.handwerk;
  this.talents.ackerbau.category                   = this.talentCategory.handwerk;
  this.talents.alchimie.category                   = this.talentCategory.handwerk;
  this.talents.bergbau.category                    = this.talentCategory.handwerk;
  this.talents.bogenbau.category                   = this.talentCategory.handwerk;
  this.talents.boote_fahren.category               = this.talentCategory.handwerk;
  this.talents.brauer.category                     = this.talentCategory.handwerk;
  this.talents.drucker.category                    = this.talentCategory.handwerk;
  this.talents.fahrzeug_lenken.category            = this.talentCategory.handwerk;
  this.talents.falschspiel.category                = this.talentCategory.handwerk;
  this.talents.feinmechanik.category               = this.talentCategory.handwerk;
  this.talents.feuersteinbearbeitung.category      = this.talentCategory.handwerk;
  this.talents.fleischer.category                  = this.talentCategory.handwerk;
  this.talents.gerber_kuerschner.category          = this.talentCategory.handwerk;
  this.talents.glaskunst.category                  = this.talentCategory.handwerk;
  this.talents.grobschmied.category                = this.talentCategory.handwerk;
  this.talents.handel.category                     = this.talentCategory.handwerk;
  this.talents.hauswirtschaft.category             = this.talentCategory.handwerk;
  this.talents.heilkunde_gift.category             = this.talentCategory.handwerk;
  this.talents.heilkunde_krankheiten.category      = this.talentCategory.handwerk;
  this.talents.heilkunde_seele.category            = this.talentCategory.handwerk;
  this.talents.instrumentenbauer.category          = this.talentCategory.handwerk;
  this.talents.kartographie.category               = this.talentCategory.handwerk;
  this.talents.kristallzucht.category              = this.talentCategory.handwerk;
  this.talents.maurer.category                     = this.talentCategory.handwerk;
  this.talents.metallguss.category                 = this.talentCategory.handwerk;
  this.talents.musizieren.category                 = this.talentCategory.handwerk;
  this.talents.schloesser_knacken.category         = this.talentCategory.handwerk;
  this.talents.schnaps_brennen.category            = this.talentCategory.handwerk;
  this.talents.seefahrt.category                   = this.talentCategory.handwerk;
  this.talents.seiler.category                     = this.talentCategory.handwerk;
  this.talents.steinmetz.category                  = this.talentCategory.handwerk;
  this.talents.steinschneider_juwelier.category    = this.talentCategory.handwerk;
  this.talents.stellmacher.category                = this.talentCategory.handwerk;
  this.talents.stoffe_faerben.category             = this.talentCategory.handwerk;
  this.talents.taetowieren.category                = this.talentCategory.handwerk;
  this.talents.toepfern.category                   = this.talentCategory.handwerk;
  this.talents.viehzucht.category                  = this.talentCategory.handwerk;
  this.talents.webkunst.category                   = this.talentCategory.handwerk;
  this.talents.winzer.category                     = this.talentCategory.handwerk;
  this.talents.zimmermann.category                 = this.talentCategory.handwerk;


  //talentType

  this.talentTypes = {
      basisTalent: "BasisTalent",
      spezialTalent: "Spezialtalent"
  };

  this.talents.dolche.talentType                       = this.talentTypes.basisTalent;
  this.talents.hiebwaffen.talentType                   = this.talentTypes.basisTalent;
  this.talents.raufen.talentType                       = this.talentTypes.basisTalent;
  this.talents.ringen.talentType                       = this.talentTypes.basisTalent;
  this.talents.saebel.talentType                       = this.talentTypes.basisTalent;
  this.talents.wurfmesser.talentType                   = this.talentTypes.basisTalent;
  this.talents.athletik.talentType                     = this.talentTypes.basisTalent;
  this.talents.klettern.talentType                     = this.talentTypes.basisTalent;
  this.talents.koerperbeherrschung.talentType          = this.talentTypes.basisTalent;
  this.talents.schleichen.talentType                   = this.talentTypes.basisTalent;
  this.talents.schwimmen.talentType                    = this.talentTypes.basisTalent;
  this.talents.selbstbeherrschung.talentType           = this.talentTypes.basisTalent;
  this.talents.sich_verstecken.talentType              = this.talentTypes.basisTalent;
  this.talents.singen.talentType                       = this.talentTypes.basisTalent;
  this.talents.sinnenschaerfe.talentType               = this.talentTypes.basisTalent;
  this.talents.tanzen.talentType                       = this.talentTypes.basisTalent;
  this.talents.menschenkenntnis.talentType             = this.talentTypes.basisTalent;
  this.talents.ueberreden.talentType                   = this.talentTypes.basisTalent;
  this.talents.faehrtensuchen.talentType               = this.talentTypes.basisTalent;
  this.talents.orientierung.talentType                 = this.talentTypes.basisTalent;
  this.talents.wildnisleben.talentType                 = this.talentTypes.basisTalent;
  this.talents.goetter_kulte.talentType                = this.talentTypes.basisTalent;
  this.talents.rechnen.talentType                      = this.talentTypes.basisTalent;
  this.talents.sagen_legenden.talentType               = this.talentTypes.basisTalent;
  this.talents.sprachen_kennen_m.talentType            = this.talentTypes.basisTalent;
  this.talents.heilkunde_wunden.talentType             = this.talentTypes.basisTalent;
  this.talents.holzbearbeitung.talentType              = this.talentTypes.basisTalent;
  this.talents.kochen.talentType                       = this.talentTypes.basisTalent;
  this.talents.lederarbeiten.talentType                = this.talentTypes.basisTalent;
  this.talents.malen_zeichnen.talentType               = this.talentTypes.basisTalent;
  this.talents.schneidern.talentType                   = this.talentTypes.basisTalent;

  this.talents.anderthalbhaender.talentType            = this.talentTypes.spezialTalent;
  this.talents.armbrust.talentType                     = this.talentTypes.spezialTalent;
  this.talents.belagerungswaffen.talentType            = this.talentTypes.spezialTalent;
  this.talents.blasrohr.talentType                     = this.talentTypes.spezialTalent;
  this.talents.bogen.talentType                        = this.talentTypes.spezialTalent;
  this.talents.diskus.talentType                       = this.talentTypes.spezialTalent;
  this.talents.fechtwaffen.talentType                  = this.talentTypes.spezialTalent;
  this.talents.infanteriewaffen.talentType             = this.talentTypes.spezialTalent;
  this.talents.kettenstaebe.talentType                 = this.talentTypes.spezialTalent;
  this.talents.kettenwaffen.talentType                 = this.talentTypes.spezialTalent;
  this.talents.lanzenreiten.talentType                 = this.talentTypes.spezialTalent;
  this.talents.peitsche.talentType                     = this.talentTypes.spezialTalent;
  this.talents.schleuder.talentType                    = this.talentTypes.spezialTalent;
  this.talents.schwerter.talentType                    = this.talentTypes.spezialTalent;
  this.talents.speere.talentType                       = this.talentTypes.spezialTalent;
  this.talents.staebe.talentType                       = this.talentTypes.spezialTalent;
  this.talents.wurfbeile.talentType                    = this.talentTypes.spezialTalent;
  this.talents.wurfspeere.talentType                   = this.talentTypes.spezialTalent;
  this.talents.zweihandflegel.talentType               = this.talentTypes.spezialTalent;
  this.talents.zweihand_hiebwaffen.talentType          = this.talentTypes.spezialTalent;
  this.talents.zweihandschwerter_saebel.talentType     = this.talentTypes.spezialTalent;
  this.talents.zechen.talentType                       = this.talentTypes.spezialTalent;
  this.talents.akrobatik.talentType                    = this.talentTypes.spezialTalent;
  this.talents.fliegen.talentType                      = this.talentTypes.spezialTalent;
  this.talents.gaukeleien.talentType                   = this.talentTypes.spezialTalent;
  this.talents.reiten.talentType                       = this.talentTypes.spezialTalent;
  this.talents.skifahren.talentType                    = this.talentTypes.spezialTalent;
  this.talents.stimmen_imitieren.talentType            = this.talentTypes.spezialTalent;
  this.talents.taschendiebstahl.talentType             = this.talentTypes.spezialTalent;
  this.talents.etikette.talentType                     = this.talentTypes.spezialTalent;
  this.talents.betoeren.talentType                     = this.talentTypes.spezialTalent;
  this.talents.taschendiebstahl.talentType             = this.talentTypes.spezialTalent;
  this.talents.gassenwissen.talentType                 = this.talentTypes.spezialTalent;
  this.talents.lehren.talentType                       = this.talentTypes.spezialTalent;
  this.talents.schauspielerei.talentType               = this.talentTypes.spezialTalent;
  this.talents.schriftlicher_ausdruck.talentType       = this.talentTypes.spezialTalent;
  this.talents.sich_verkleiden.talentType              = this.talentTypes.spezialTalent;
  this.talents.ueberzeugen.talentType                  = this.talentTypes.spezialTalent;
  this.talents.fallenstellen.talentType                = this.talentTypes.spezialTalent;
  this.talents.fesseln_entfesseln.talentType           = this.talentTypes.spezialTalent;
  this.talents.fischen_angeln.talentType               = this.talentTypes.spezialTalent;
  this.talents.wettervorhersage.talentType             = this.talentTypes.spezialTalent;
  this.talents.anatomie.talentType                     = this.talentTypes.spezialTalent;
  this.talents.baukunst.talentType                     = this.talentTypes.spezialTalent;
  this.talents.brettspiel.talentType                   = this.talentTypes.spezialTalent;
  this.talents.geographie.talentType                   = this.talentTypes.spezialTalent;
  this.talents.geschichtswissen.talentType             = this.talentTypes.spezialTalent;
  this.talents.gesteinskunde.talentType                = this.talentTypes.spezialTalent;
  this.talents.heraldik.talentType                     = this.talentTypes.spezialTalent;
  this.talents.huettenkunde.talentType                 = this.talentTypes.spezialTalent;
  this.talents.kriegskunst.talentType                  = this.talentTypes.spezialTalent;
  this.talents.kryptographie.talentType                = this.talentTypes.spezialTalent;
  this.talents.magiekunde.talentType                   = this.talentTypes.spezialTalent;
  this.talents.mechanik.talentType                     = this.talentTypes.spezialTalent;
  this.talents.pflanzenkunde.talentType                = this.talentTypes.spezialTalent;
  this.talents.philosophie.talentType                  = this.talentTypes.spezialTalent;
  this.talents.rechtskunde.talentType                  = this.talentTypes.spezialTalent;
  this.talents.schaetzen.talentType                    = this.talentTypes.spezialTalent;
  this.talents.sprachenkunde.talentType                = this.talentTypes.spezialTalent;
  this.talents.staatskunst.talentType                  = this.talentTypes.spezialTalent;
  this.talents.sternkunde.talentType                   = this.talentTypes.spezialTalent;
  this.talents.tierkunde.talentType                    = this.talentTypes.spezialTalent;
  this.talents.lesen_schreiben_s.talentType            = this.talentTypes.spezialTalent;
  this.talents.sprachen_kennen_f.talentType            = this.talentTypes.spezialTalent;
  this.talents.abrichten.talentType                    = this.talentTypes.spezialTalent;
  this.talents.ackerbau.talentType                     = this.talentTypes.spezialTalent;
  this.talents.alchimie.talentType                     = this.talentTypes.spezialTalent;
  this.talents.bergbau.talentType                      = this.talentTypes.spezialTalent;
  this.talents.bogenbau.talentType                     = this.talentTypes.spezialTalent;
  this.talents.boote_fahren.talentType                 = this.talentTypes.spezialTalent;
  this.talents.brauer.talentType                       = this.talentTypes.spezialTalent;
  this.talents.drucker.talentType                      = this.talentTypes.spezialTalent;
  this.talents.fahrzeug_lenken.talentType              = this.talentTypes.spezialTalent;
  this.talents.falschspiel.talentType                  = this.talentTypes.spezialTalent;
  this.talents.feinmechanik.talentType                 = this.talentTypes.spezialTalent;
  this.talents.feuersteinbearbeitung.talentType        = this.talentTypes.spezialTalent;
  this.talents.fleischer.talentType                    = this.talentTypes.spezialTalent;
  this.talents.gerber_kuerschner.talentType            = this.talentTypes.spezialTalent;
  this.talents.glaskunst.talentType                    = this.talentTypes.spezialTalent;
  this.talents.grobschmied.talentType                  = this.talentTypes.spezialTalent;
  this.talents.handel.talentType                       = this.talentTypes.spezialTalent;
  this.talents.hauswirtschaft.talentType               = this.talentTypes.spezialTalent;
  this.talents.heilkunde_gift.talentType               = this.talentTypes.spezialTalent;
  this.talents.heilkunde_krankheiten.talentType        = this.talentTypes.spezialTalent;
  this.talents.heilkunde_seele.talentType              = this.talentTypes.spezialTalent;
  this.talents.instrumentenbauer.talentType            = this.talentTypes.spezialTalent;
  this.talents.kartographie.talentType                 = this.talentTypes.spezialTalent;
  this.talents.kristallzucht.talentType                = this.talentTypes.spezialTalent;
  this.talents.maurer.talentType                       = this.talentTypes.spezialTalent;
  this.talents.metallguss.talentType                   = this.talentTypes.spezialTalent;
  this.talents.musizieren.talentType                   = this.talentTypes.spezialTalent;
  this.talents.schloesser_knacken.talentType           = this.talentTypes.spezialTalent;
  this.talents.schnaps_brennen.talentType              = this.talentTypes.spezialTalent;
  this.talents.seefahrt.talentType                     = this.talentTypes.spezialTalent;
  this.talents.seiler.talentType                       = this.talentTypes.spezialTalent;
  this.talents.steinmetz.talentType                    = this.talentTypes.spezialTalent;
  this.talents.steinschneider_juwelier.talentType      = this.talentTypes.spezialTalent;
  this.talents.stellmacher.talentType                  = this.talentTypes.spezialTalent;
  this.talents.stoffe_faerben.talentType               = this.talentTypes.spezialTalent;
  this.talents.taetowieren.talentType                  = this.talentTypes.spezialTalent;
  this.talents.toepfern.talentType                     = this.talentTypes.spezialTalent;
  this.talents.viehzucht.talentType                    = this.talentTypes.spezialTalent;
  this.talents.webkunst.talentType                     = this.talentTypes.spezialTalent;
  this.talents.winzer.talentType                       = this.talentTypes.spezialTalent;
  this.talents.zimmermann.talentType                   = this.talentTypes.spezialTalent;  
})