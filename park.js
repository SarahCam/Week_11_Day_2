let Park = function(){
  this.enclosure = [];
};

Park.prototype.addDino = function (dino) {
  this.enclosure.push(dino);
};

Park.prototype.removeType = function (type) {
  let updatedEnclosure = [];
  for (let dino of this.enclosure) {
    if (dino.type !== type) {
      updatedEnclosure.push(dino);
    };
  };
  this.enclosure = updatedEnclosure;
};

Park.prototype.offspringGreaterThan = function (offspring) {
  let dinos = [];
  for (let dino of this.enclosure) {
    if (dino.offspring > 2) {
      dinos.push(dino);
    };
  };
  return dinos;
};

Park.prototype.countDinosAfterYear = function (numYears) {
  let dinos = [];
  for (let dino of this.enclosure) {
    dinos.push(dino);                 // This Dinosaur
    for (let i = 1; i <= dino.offspring; i++){
      dinos.push(dino);               // This Dinosaur's offspring
    };
  };
  return dinos.length;
};

module.exports = Park;
