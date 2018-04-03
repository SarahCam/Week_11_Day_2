// John Hammond wants to be able to manage the dinosaurs at Jurassic Park. (uhoh)
//
// A dinosaur should have a type (e.g. "Tyrannosaurus", "Velociraptor", "Triceratops")
// and an number of offspring per year.
//
// A park should have an enclosure that can have dinosaurs added to it.
//
// Use TDD to write and make pass the following tests:
//
// Dinosaur:
//
// should have a type
// should have a number of offspring per year
// Park:
//
// enclosure should start empty
// should be able to add dinosaur
// should be able to remove all dinosaurs of a particular type
// should get all the dinosaurs with an offspring count of more than 2

var assert = require('assert');
var Dino = require('../dino.js');


describe('Dino', function(){

  let dino;

  beforeEach(function(){
    dino = new Dino('Velociraptor', 3);
  });

  it('should have a type', function(){
    assert.strictEqual(dino.type, 'Velociraptor');
  });

});
