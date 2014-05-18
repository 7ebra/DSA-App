// probe = [
//   {
//     attribute: "dfgh",
//     value: 5,
//   }
// ]

function Talent(name) {
  this.name = name;
  this.category = "";
  this.talentType = "";
  this.value = 0;
  this.leittalent = false;
};

talents = {
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

talentCategory = {
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

talents.dolche.category                     = talentCategory.kampf;
talents.hiebwaffen.category                 = talentCategory.kampf;
talents.raufen.category                     = talentCategory.kampf;
talents.ringen.category                     = talentCategory.kampf;
talents.saebel.category                     = talentCategory.kampf;
talents.wurfmesser.category                 = talentCategory.kampf;

talents.anderthalbhaender.category          = talentCategory.Kampf;
talents.armbrust.category                   = talentCategory.kampf;
talents.belagerungswaffen.category          = talentCategory.kampf;
talents.blasrohr.category                   = talentCategory.kampf;
talents.bogen.category                      = talentCategory.kampf;
talents.diskus.category                     = talentCategory.kampf;
talents.fechtwaffen.category                = talentCategory.kampf;
talents.infanteriewaffen.category           = talentCategory.Kampf;
talents.kettenstaebe.category               = talentCategory.kampf;
talents.kettenwaffen.category               = talentCategory.kampf;
talents.lanzenreiten.category               = talentCategory.kampf;
talents.peitsche.category                   = talentCategory.kampf;
talents.schleuder.category                  = talentCategory.kampf;
talents.schwerter.category                  = talentCategory.kampf;
talents.speere.category                     = talentCategory.kampf;
talents.staebe.category                     = talentCategory.kampf;
talents.wurfbeile.category                  = talentCategory.kampf;
talents.wurfspeere.category                 = talentCategory.kampf;
talents.zweihandflegel.category             = talentCategory.kampf;
talents.zweihand_hiebwaffen.category        = talentCategory.kampf;
talents.zweihandschwerter_saebel.category   = talentCategory.kampf;


talents.athletik.category                   = talentCategory.koerper;
talents.klettern.category                   = talentCategory.koerper;
talents.koerperbeherrschung.category        = talentCategory.koerper;
talents.schleichen.category                 = talentCategory.koerper;
talents.schwimmen.category                  = talentCategory.koerper;
talents.selbstbeherrschung.category         = talentCategory.koerper;
talents.sich_verstecken.category            = talentCategory.koerper;
talents.singen.category                     = talentCategory.koerper;
talents.sinnenschaerfe.category             = talentCategory.koerper;
talents.tanzen.category                     = talentCategory.koerper;

talents.zechen.category                     = talentCategory.koerper;
talents.akrobatik.category                  = talentCategory.koerper;
talents.fliegen.category                    = talentCategory.koerper;
talents.gaukeleien.category                 = talentCategory.koerper;
talents.reiten.category                     = talentCategory.koerper;
talents.skifahren.category                  = talentCategory.koerper;
talents.stimmen_imitieren.category          = talentCategory.koerper;
talents.taschendiebstahl.category           = talentCategory.koerper;


talents.menschenkenntnis.category           = talentCategory.gesellschaft;
talents.ueberreden.category                 = talentCategory.gesellschaft;

talents.etikette.category                   = talentCategory.gesellschaft;
talents.betoeren.category                   = talentCategory.gesellschaft;
talents.taschendiebstahl.category           = talentCategory.gesellschaft;
talents.gassenwissen.category               = talentCategory.gesellschaft;
talents.lehren.category                     = talentCategory.gesellschaft;
talents.schauspielerei.category             = talentCategory.gesellschaft;
talents.schriftlicher_ausdruck.category     = talentCategory.gesellschaft;
talents.sich_verkleiden.category            = talentCategory.gesellschaft;
talents.ueberzeugen.category                = talentCategory.gesellschaft;


talents.faehrtensuchen.category             = talentCategory.natur;
talents.orientierung.category               = talentCategory.natur;
talents.wildnisleben.category               = talentCategory.natur;

talents.fallenstellen.category              = talentCategory.natur;
talents.fesseln_entfesseln.category         = talentCategory.natur;
talents.fischen_angeln.category             = talentCategory.natur;
talents.wettervorhersage.category           = talentCategory.natur;


talents.goetter_kulte.category              = talentCategory.wissen;
talents.rechnen.category                    = talentCategory.wissen;
talents.sagen_legenden.category             = talentCategory.wissen;

talents.anatomie.category                   = talentCategory.wissen;
talents.baukunst.category                   = talentCategory.wissen;
talents.brettspiel.category                 = talentCategory.wissen;
talents.geographie.category                 = talentCategory.wissen;
talents.geschichtswissen.category           = talentCategory.wissen;
talents.gesteinskunde.category              = talentCategory.wissen;
talents.heraldik.category                   = talentCategory.wissen;
talents.huettenkunde.category               = talentCategory.wissen;
talents.kriegskunst.category                = talentCategory.wissen;
talents.kryptographie.category              = talentCategory.wissen;
talents.magiekunde.category                 = talentCategory.wissen;
talents.mechanik.category                   = talentCategory.wissen;
talents.pflanzenkunde.category              = talentCategory.wissen;
talents.philosophie.category                = talentCategory.wissen;
talents.rechtskunde.category                = talentCategory.wissen;
talents.schaetzen.category                  = talentCategory.wissen;
talents.sprachenkunde.category              = talentCategory.wissen;
talents.staatskunst.category                = talentCategory.wissen;
talents.sternkunde.category                 = talentCategory.wissen;
talents.tierkunde.category                  = talentCategory.wissen;


talents.sprachen_kennen_m.category          = talentCategory.sprache;

talents.lesen_schreiben_s.category          = talentCategory.sprache;
talents.sprachen_kennen_f.category          = talentCategory.sprache;


talents.heilkunde_wunden.category           = talentCategory.handwerk;
talents.holzbearbeitung.category            = talentCategory.handwerk;
talents.kochen.category                     = talentCategory.handwerk;
talents.lederarbeiten.category              = talentCategory.handwerk;
talents.malen_zeichnen.category             = talentCategory.handwerk;
talents.schneidern.category                 = talentCategory.handwerk;

talents.abrichten.category                  = talentCategory.handwerk;
talents.ackerbau.category                   = talentCategory.handwerk;
talents.alchimie.category                   = talentCategory.handwerk;
talents.bergbau.category                    = talentCategory.handwerk;
talents.bogenbau.category                   = talentCategory.handwerk;
talents.boote_fahren.category               = talentCategory.handwerk;
talents.brauer.category                     = talentCategory.handwerk;
talents.drucker.category                    = talentCategory.handwerk;
talents.fahrzeug_lenken.category            = talentCategory.handwerk;
talents.falschspiel.category                = talentCategory.handwerk;
talents.feinmechanik.category               = talentCategory.handwerk;
talents.feuersteinbearbeitung.category      = talentCategory.handwerk;
talents.fleischer.category                  = talentCategory.handwerk;
talents.gerber_kuerschner.category          = talentCategory.handwerk;
talents.glaskunst.category                  = talentCategory.handwerk;
talents.grobschmied.category                = talentCategory.handwerk;
talents.handel.category                     = talentCategory.handwerk;
talents.hauswirtschaft.category             = talentCategory.handwerk;
talents.heilkunde_gift.category             = talentCategory.handwerk;
talents.heilkunde_krankheiten.category      = talentCategory.handwerk;
talents.heilkunde_seele.category            = talentCategory.handwerk;
talents.instrumentenbauer.category          = talentCategory.handwerk;
talents.kartographie.category               = talentCategory.handwerk;
talents.kristallzucht.category              = talentCategory.handwerk;
talents.maurer.category                     = talentCategory.handwerk;
talents.metallguss.category                 = talentCategory.handwerk;
talents.musizieren.category                 = talentCategory.handwerk;
talents.schloesser_knacken.category         = talentCategory.handwerk;
talents.schnaps_brennen.category            = talentCategory.handwerk;
talents.seefahrt.category                   = talentCategory.handwerk;
talents.seiler.category                     = talentCategory.handwerk;
talents.steinmetz.category                  = talentCategory.handwerk;
talents.steinschneider_juwelier.category    = talentCategory.handwerk;
talents.stellmacher.category                = talentCategory.handwerk;
talents.stoffe_faerben.category             = talentCategory.handwerk;
talents.taetowieren.category                = talentCategory.handwerk;
talents.toepfern.category                   = talentCategory.handwerk;
talents.viehzucht.category                  = talentCategory.handwerk;
talents.webkunst.category                   = talentCategory.handwerk;
talents.winzer.category                     = talentCategory.handwerk;
talents.zimmermann.category                 = talentCategory.handwerk;


//talentType

talentTypes = {
    basisTalent: "BasisTalent",
    spezialTalent: "Spezialtalent"
};

talents.dolche.talentType                       = talentTypes.basisTalent;
talents.hiebwaffen.talentType                   = talentTypes.basisTalent;
talents.raufen.talentType                       = talentTypes.basisTalent;
talents.ringen.talentType                       = talentTypes.basisTalent;
talents.saebel.talentType                       = talentTypes.basisTalent;
talents.wurfmesser.talentType                   = talentTypes.basisTalent;
talents.athletik.talentType                     = talentTypes.basisTalent;
talents.klettern.talentType                     = talentTypes.basisTalent;
talents.koerperbeherrschung.talentType          = talentTypes.basisTalent;
talents.schleichen.talentType                   = talentTypes.basisTalent;
talents.schwimmen.talentType                    = talentTypes.basisTalent;
talents.selbstbeherrschung.talentType           = talentTypes.basisTalent;
talents.sich_verstecken.talentType              = talentTypes.basisTalent;
talents.singen.talentType                       = talentTypes.basisTalent;
talents.sinnenschaerfe.talentType               = talentTypes.basisTalent;
talents.tanzen.talentType                       = talentTypes.basisTalent;
talents.menschenkenntnis.talentType             = talentTypes.basisTalent;
talents.ueberreden.talentType                   = talentTypes.basisTalent;
talents.faehrtensuchen.talentType               = talentTypes.basisTalent;
talents.orientierung.talentType                 = talentTypes.basisTalent;
talents.wildnisleben.talentType                 = talentTypes.basisTalent;
talents.goetter_kulte.talentType                = talentTypes.basisTalent;
talents.rechnen.talentType                      = talentTypes.basisTalent;
talents.sagen_legenden.talentType               = talentTypes.basisTalent;
talents.sprachen_kennen_m.talentType            = talentTypes.basisTalent;
talents.heilkunde_wunden.talentType             = talentTypes.basisTalent;
talents.holzbearbeitung.talentType              = talentTypes.basisTalent;
talents.kochen.talentType                       = talentTypes.basisTalent;
talents.lederarbeiten.talentType                = talentTypes.basisTalent;
talents.malen_zeichnen.talentType               = talentTypes.basisTalent;
talents.schneidern.talentType                   = talentTypes.basisTalent;

talents.anderthalbhaender.talentType            = talentTypes.spezialTalent;
talents.armbrust.talentType                     = talentTypes.spezialTalent;
talents.belagerungswaffen.talentType            = talentTypes.spezialTalent;
talents.blasrohr.talentType                     = talentTypes.spezialTalent;
talents.bogen.talentType                        = talentTypes.spezialTalent;
talents.diskus.talentType                       = talentTypes.spezialTalent;
talents.fechtwaffen.talentType                  = talentTypes.spezialTalent;
talents.infanteriewaffen.talentType             = talentTypes.spezialTalent;
talents.kettenstaebe.talentType                 = talentTypes.spezialTalent;
talents.kettenwaffen.talentType                 = talentTypes.spezialTalent;
talents.lanzenreiten.talentType                 = talentTypes.spezialTalent;
talents.peitsche.talentType                     = talentTypes.spezialTalent;
talents.schleuder.talentType                    = talentTypes.spezialTalent;
talents.schwerter.talentType                    = talentTypes.spezialTalent;
talents.speere.talentType                       = talentTypes.spezialTalent;
talents.staebe.talentType                       = talentTypes.spezialTalent;
talents.wurfbeile.talentType                    = talentTypes.spezialTalent;
talents.wurfspeere.talentType                   = talentTypes.spezialTalent;
talents.zweihandflegel.talentType               = talentTypes.spezialTalent;
talents.zweihand_hiebwaffen.talentType          = talentTypes.spezialTalent;
talents.zweihandschwerter_saebel.talentType     = talentTypes.spezialTalent;
talents.zechen.talentType                       = talentTypes.spezialTalent;
talents.akrobatik.talentType                    = talentTypes.spezialTalent;
talents.fliegen.talentType                      = talentTypes.spezialTalent;
talents.gaukeleien.talentType                   = talentTypes.spezialTalent;
talents.reiten.talentType                       = talentTypes.spezialTalent;
talents.skifahren.talentType                    = talentTypes.spezialTalent;
talents.stimmen_imitieren.talentType            = talentTypes.spezialTalent;
talents.taschendiebstahl.talentType             = talentTypes.spezialTalent;
talents.etikette.talentType                     = talentTypes.spezialTalent;
talents.betoeren.talentType                     = talentTypes.spezialTalent;
talents.taschendiebstahl.talentType             = talentTypes.spezialTalent;
talents.gassenwissen.talentType                 = talentTypes.spezialTalent;
talents.lehren.talentType                       = talentTypes.spezialTalent;
talents.schauspielerei.talentType               = talentTypes.spezialTalent;
talents.schriftlicher_ausdruck.talentType       = talentTypes.spezialTalent;
talents.sich_verkleiden.talentType              = talentTypes.spezialTalent;
talents.ueberzeugen.talentType                  = talentTypes.spezialTalent;
talents.fallenstellen.talentType                = talentTypes.spezialTalent;
talents.fesseln_entfesseln.talentType           = talentTypes.spezialTalent;
talents.fischen_angeln.talentType               = talentTypes.spezialTalent;
talents.wettervorhersage.talentType             = talentTypes.spezialTalent;
talents.anatomie.talentType                     = talentTypes.spezialTalent;
talents.baukunst.talentType                     = talentTypes.spezialTalent;
talents.brettspiel.talentType                   = talentTypes.spezialTalent;
talents.geographie.talentType                   = talentTypes.spezialTalent;
talents.geschichtswissen.talentType             = talentTypes.spezialTalent;
talents.gesteinskunde.talentType                = talentTypes.spezialTalent;
talents.heraldik.talentType                     = talentTypes.spezialTalent;
talents.huettenkunde.talentType                 = talentTypes.spezialTalent;
talents.kriegskunst.talentType                  = talentTypes.spezialTalent;
talents.kryptographie.talentType                = talentTypes.spezialTalent;
talents.magiekunde.talentType                   = talentTypes.spezialTalent;
talents.mechanik.talentType                     = talentTypes.spezialTalent;
talents.pflanzenkunde.talentType                = talentTypes.spezialTalent;
talents.philosophie.talentType                  = talentTypes.spezialTalent;
talents.rechtskunde.talentType                  = talentTypes.spezialTalent;
talents.schaetzen.talentType                    = talentTypes.spezialTalent;
talents.sprachenkunde.talentType                = talentTypes.spezialTalent;
talents.staatskunst.talentType                  = talentTypes.spezialTalent;
talents.sternkunde.talentType                   = talentTypes.spezialTalent;
talents.tierkunde.talentType                    = talentTypes.spezialTalent;
talents.lesen_schreiben_s.talentType            = talentTypes.spezialTalent;
talents.sprachen_kennen_f.talentType            = talentTypes.spezialTalent;
talents.abrichten.talentType                    = talentTypes.spezialTalent;
talents.ackerbau.talentType                     = talentTypes.spezialTalent;
talents.alchimie.talentType                     = talentTypes.spezialTalent;
talents.bergbau.talentType                      = talentTypes.spezialTalent;
talents.bogenbau.talentType                     = talentTypes.spezialTalent;
talents.boote_fahren.talentType                 = talentTypes.spezialTalent;
talents.brauer.talentType                       = talentTypes.spezialTalent;
talents.drucker.talentType                      = talentTypes.spezialTalent;
talents.fahrzeug_lenken.talentType              = talentTypes.spezialTalent;
talents.falschspiel.talentType                  = talentTypes.spezialTalent;
talents.feinmechanik.talentType                 = talentTypes.spezialTalent;
talents.feuersteinbearbeitung.talentType        = talentTypes.spezialTalent;
talents.fleischer.talentType                    = talentTypes.spezialTalent;
talents.gerber_kuerschner.talentType            = talentTypes.spezialTalent;
talents.glaskunst.talentType                    = talentTypes.spezialTalent;
talents.grobschmied.talentType                  = talentTypes.spezialTalent;
talents.handel.talentType                       = talentTypes.spezialTalent;
talents.hauswirtschaft.talentType               = talentTypes.spezialTalent;
talents.heilkunde_gift.talentType               = talentTypes.spezialTalent;
talents.heilkunde_krankheiten.talentType        = talentTypes.spezialTalent;
talents.heilkunde_seele.talentType              = talentTypes.spezialTalent;
talents.instrumentenbauer.talentType            = talentTypes.spezialTalent;
talents.kartographie.talentType                 = talentTypes.spezialTalent;
talents.kristallzucht.talentType                = talentTypes.spezialTalent;
talents.maurer.talentType                       = talentTypes.spezialTalent;
talents.metallguss.talentType                   = talentTypes.spezialTalent;
talents.musizieren.talentType                   = talentTypes.spezialTalent;
talents.schloesser_knacken.talentType           = talentTypes.spezialTalent;
talents.schnaps_brennen.talentType              = talentTypes.spezialTalent;
talents.seefahrt.talentType                     = talentTypes.spezialTalent;
talents.seiler.talentType                       = talentTypes.spezialTalent;
talents.steinmetz.talentType                    = talentTypes.spezialTalent;
talents.steinschneider_juwelier.talentType      = talentTypes.spezialTalent;
talents.stellmacher.talentType                  = talentTypes.spezialTalent;
talents.stoffe_faerben.talentType               = talentTypes.spezialTalent;
talents.taetowieren.talentType                  = talentTypes.spezialTalent;
talents.toepfern.talentType                     = talentTypes.spezialTalent;
talents.viehzucht.talentType                    = talentTypes.spezialTalent;
talents.webkunst.talentType                     = talentTypes.spezialTalent;
talents.winzer.talentType                       = talentTypes.spezialTalent;
talents.zimmermann.talentType                   = talentTypes.spezialTalent;


