'use strict';

app.service('AttributeService', function AttributeService() {

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

  return Attributes
})