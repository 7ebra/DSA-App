'use strict';

app.service('SpellService', function SpellService() {

  function Spell(name, range) {
    this.name = name;
    this.range = range;
    this.castDuration = "";
    this.spellDuration = "";
    this.representation = "";
    this.value = 0;
    this.proof = "";
    this.technic = "";
    this.effect = "";
    this.costs = "";
    this.target = "";
    this.modivications = "";
    this.reversalis = "";
    this.antiMagic = "";
    this.element = "";
    this.complexity = "";
  };


  this.spells = {

    balsam: new Spell('Balsam Salabunde', 'selbst, Berührung'),
    seidenzunge: new Spell('Seidenzunge Elfenwort', '1 Schritt')


  }

  // Balsam Salabunde //////
  this.spells.balsam.castDuration = 'min 5 Aktionen bis zum langsamen Einsetzten der ersten Heilwirkung. 1 Spielrunde insgesamt';
  this.spells.balsam.spellDuration = 'augenblicklich';
  this.spells.balsam.representation = '(Elf, Mag) 7, (Ach, Geo) 5, Dru 4, Hex 3';
  this.spells.balsam.proof = 'KL/ IN/ CH +Mod';
  this.spells.balsam.technic = "Du legst dem/der Verlezten sanft eine Hand aud die Verletzung (bei großflächigen oder inneren \
        Verletzungen aufs Herz) und wiederholt die Melodie des bha'sama sala biam da'o so lange bis doe heiende Wirkung eintritt.";
  this.spells.balsam.effect = 'Diese mächtige Zauberei heilt, je nach AsP-Einsatz, sämtliche Wunden und inneren Verletzungen des Verzauberen. \
        Man kann der heilenden Wirkung eines mächtigen BALSAM SALABUNDE förmlich zusehen: Offene Wunden überziehen sich \
        mit frisehtr Haut, Blutungen halten ein, zersplitterte Knochen finden wieder zusammen. Fur jeden Asp, der Zaubernde einsetzt, bekommt \
        ein Verwundeter, Kranker oder Vergifteter einen Lebenspunkt zurück (maximal jedoch ZfW x 2 LeP). Der Zauberer kann sich mit diesem \
        Spruch auch selbst heilen (solange er nicht bewusstlos ist; es gelten die üblichen Zusschläge für Wunden und niedriger LE). Die \
        schädliche Wirkung von Krankheiten und Gift wird mit diesem Zauber nicht gestoppt.';
  this.spells.balsam.costs = "1 Asp pro LeP, mindestens aber 5 Asp";
  this.spells.balsam.target = "Einzelwesen, freiwillig"
  this.spells.balsam.modivications = [
    {
      name: 'Lebenskraft stärken',
      mod: 5,
      minValue: 11,
      description: "Die Lebensaura des Nutznießers wird für einige Zeit über das gewöhnliche Maß hinaus gestärkt. \
        Für je 3 AsP kann die LE des Verzauberen um 1 LeP über den LE-Grundwert angehoben werden. Maximal können so \
        vorübergehend ZfW LeP hinzugewonnen werden. Nach ZfP. Stunden baut sich dieses Übermaß an Lebensaura jedoch wieder ab \
        und der Verzauberte verliert die entsprechenden LeP wieder (dadurch kann er sogar zu Tode kommen, \
        wenn er zwischen Zeitlich zu viele LeP verloren hat)."
    }
  ];
  this.spells.balsam.reversalis = "ein schleichender Schadenszauber, bei dem das Opfer je eingesetzten AsP einen LeP verliehrt.";
  this.spells.balsam.antiMagic = "Währed der Zauber gewirkt wird, kann er mit HEILKRAFT BANNEN und VERWANDLUNG BEENDEN zum Scheitern \
    gebracht werden: er wirkt nur erschwert in entsprechenden Zonen.";
  this.spells.balsam.element = "Heilung, Form";
  this.spells.balsam.complexity = "C";

  // Seidenzunge Elfenwort //////
  this.spells.seidenzunge.castDuration = '6 Aktionen';
  this.spells.seidenzunge.spellDuration = 'ZfP Spielrunden (A)';
  this.spells.seidenzunge.representation = 'Elf 3, Sch2';
  this.spells.seidenzunge.proof = 'KL/ IN/ CH (+MR)';
  this.spells.seidenzunge.technic = 'Du blickst deinem Opfer in die Augen und konsentrierst dich auf die Melodie von saya uida za eo gra efey var.'
  this.spells.seidenzunge.effect = 'Dieser Zauber hindert das Opfer dann, allzu genau über Aussagen diS ml/bemden Elfen nachzudenken. \
    Es ist wesentlich eher bereit, einer Lüge (allgemein: einer auch noch so seltsamen Aussage) Glaubtn zu schenken, \
    obwohl es bei näherer Betrachtung eigentlich darauf kommen würde, dass das nicht stimmen kann, Dadurch kann der Meister \
    alle Überreden-Proben des Elfen (gleich, in welchem Bereich des Übermiens) um die ZfPo erleichtern und sogar auf manche \
    solche Probtn verzichten. Wenn der Elfjedoch allzu dick aufträgt. die Aussagen dem gesunden \
    Menschenverstand des Opfers allzu sehr zuwiderlaufen oder aber es von Außenstehenden auf offrnsichtlicht Unstimmigkeiten aufmerksam \
    grrnacllt wird. dann kann der MeistCT weitere Überredrn-Proben natürlich rntsprrchtnd erschwmn. \
    Aber auch wenn das Opfer dem Elfen einulne Aussagrn nicht glaubt, \
    wird es zwar insgesamt misstrauischer. der Zauber wrlitrt dtswegrn aha noch nicht an Wirkung. Mit entsprechmdgeschickten Erklärungen \
    kann der Elf dieses Misstrauen also auch wilder entkräften. Auch nach Ablauf der Wirkungsdauer wird das opfn keineswegs \
    sofort erkennen, dass es belogen worden ist. Erst, wenn es einen Anlass bekommt, noch einmal über die Aussagen nachzudenktn. wird es all die \
    kritischen Fragen stellen. die ihm vorher nicht in den Sinn gekommen sind. Aber selbst in diesem Fall wird es nur dann erkennen. dass es \
    l, TI vorher einem Zauber unteriegrn ist. wenn ihm eine Magiekunde-Probt gelingt (erschwtrf um \
    7 Punkte. wenn es diesen Zauber nicht kennt).';
  this.spells.seidenzunge.costs = '6 Asp';
  this.spells.seidenzunge.target = 'Einzelperson';
  this.spells.seidenzunge.modivications = [];
  this.spells.seidenzunge.reversalis = 'Das Opfer ist nicht bereit dir irgendeine Ausage zuglauben, seien sie auch noch so offensichtlich wahr.';
  this.spells.seidenzunge.antiMagic = 'EINFLUSS BANNEN beendet diesen Zauber: kann in der entsprechenden Zone nur erschwert gewirkt werden.';
  this.spells.seidenzunge.element = 'Einfluss';
  this.spells.seidenzunge.complexity = "B";

})




