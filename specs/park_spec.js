// Park:
//
// enclosure should start empty
// should be able to add dinosaur
// should be able to remove all dinosaurs of a particular type
// should get all the dinosaurs with an offspring count of more than 2
//
// Extension
// John Hammond wants to be able to calculate how many dinosaurs there are going to be at
// Jurassic Park on any given year after opening, taking into consideration the number of
// offspring each dinosaur has annually.
//
// Dinosaurs can spontaneously reproduce by themselves, don't @ me
// Use TDD to write and make pass the following tests:
//
// Park:
//
// should be able to calculate number of dinosaurs after year one, starting with 1 dinosaur
// should be able to calculate number of dinosaurs after year two, starting with 1 dinosaur
// should be able to calculate number of dinosaurs after year two, starting with 2 dinosaurs

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

// MY OPTION:

  it('should be able to calculate number of dinosaurs after year one, starting with 1 dinosaur', function(){
    park.addDino(dino1);
    assert.strictEqual(park.countDinos(1), 4);
  });

  it('should be able to calculate number of dinosaurs after year two, starting with 1 dinosaur', function(){
    park.addDino(dino1);
    assert.strictEqual(park.countDinos(2), 16);
  });

  it('should be able to calculate number of dinosaurs after year two, starting with 2 dinosaurs', function(){
    park.addDino(dino1);
    park.addDino(dino2);
    assert.strictEqual(park.countDinos(2), 20);
  });

  it('should be able to calculate number of dinosaurs after year three, starting with 2 dinosaurs', function(){
    park.addDino(dino1);
    park.addDino(dino2);
    assert.strictEqual(park.countDinos(3), 72);
  });

  // COLIN's OPTION:

    it('(2) should be able to calculate number of dinosaurs after year one, starting with 1 dinosaur', function(){
      park.addDino(dino1);
      assert.strictEqual(park.calculateDinosaurs(1), 4);
    });

    it('(2) should be able to calculate number of dinosaurs after year two, starting with 1 dinosaur', function(){
      park.addDino(dino1);
      assert.strictEqual(park.calculateDinosaurs(2), 16);
    });

    it('(2) should be able to calculate number of dinosaurs after year two, starting with 2 dinosaurs', function(){
      park.addDino(dino1);
      park.addDino(dino2);
      assert.strictEqual(park.calculateDinosaurs(2), 20);
    });

    it('(2) should be able to calculate number of dinosaurs after year three, starting with 2 dinosaurs', function(){
      park.addDino(dino1);
      park.addDino(dino2);
      assert.strictEqual(park.calculateDinosaurs(3), 72);
    });

});
