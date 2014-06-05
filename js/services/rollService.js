'use strict'

app.service('RollService', function RollService() {

  this.roll20 = function() {
    return Math.floor(Math.random() * 20) + 1;
  }

})