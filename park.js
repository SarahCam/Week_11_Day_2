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
  let totalDinos = 0;
  for (let dino of this.enclosure) {
    totalDinos += 1;                // This Dinosaur
    totalDinos += dino.offspring;   // This Dinosaur's offspring
  };
  return totalDinos;
};

module.exports = Park;
