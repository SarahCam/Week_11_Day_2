// Park:
//
// enclosure should start empty
// should be able to add dinosaur
// should be able to remove all dinosaurs of a particular type
// should get all the dinosaurs with an offspring count of more than 2

let assert = require('assert');
let Park = require('../park.js');
let Dino = require('../dino.js');


describe('Park', function(){

  let park;

  beforeEach(function(){
    park = new Park();
    dino1 = new Dino('Velociraptor', 3);
  });

  it('enclosure should start empty', function(){
    assert.strictEqual(park.enclosure.length, 0);
  });

  it('should be able to add dinosaur', function(){
    park.addDino(dino1);
    assert.strictEqual(park.enclosure.length, 1);
  });

});
