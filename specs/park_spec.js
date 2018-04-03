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
    dino2 = new Dino('Tyrannosaurus', 1);
    dino3 = new Dino('Velociraptor', 3);
    dino4 = new Dino('Triceratops', 2);
  });

  it('enclosure should start empty', function(){
    assert.strictEqual(park.enclosure.length, 0);
  });

  it('should be able to add dinosaur', function(){
    park.addDino(dino1);
    assert.strictEqual(park.enclosure.length, 1);
    assert.deepStrictEqual(park.enclosure, [dino1]);
  });

  it('should be able to remove all dinosaurs of a particular type', function(){
    park.addDino(dino1);
    park.addDino(dino2);
    park.addDino(dino3);
    park.addDino(dino4);
    assert.strictEqual(park.enclosure.length, 4);
    assert.deepStrictEqual(park.enclosure, [dino1, dino2, dino3, dino4]);
    park.removeType('Velociraptor');
    assert.strictEqual(park.enclosure.length, 2);
    assert.deepStrictEqual(park.enclosure, [dino2, dino4]);
  });

  it('should get all the dinosaurs with an offspring count of more than 2', function(){
    park.addDino(dino1);
    park.addDino(dino2);
    park.addDino(dino3);
    park.addDino(dino4);
    assert.deepStrictEqual(park.offspringGreaterThan(2), [dino1, dino3]);
  });

});
