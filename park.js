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

module.exports = Park;
