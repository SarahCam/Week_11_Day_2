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

Park.prototype.countDinos = function (years) {
  let numDinos = this.enclosure.length;
  let extraDinos = [];
  while(years > 0){
    for (let dino of this.enclosure){
      numDinos += dino.offspring;
      for (let i = 1; i <= dino.offspring; i++){
        extraDinos.push(dino);
      };
    };
    this.enclosure = this.enclosure.concat(extraDinos);
    years --;
  };
  return numDinos;
};

module.exports = Park;
