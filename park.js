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
    this.enclosure = this.enclosure.concat(extraDinos);
    for (let dino of this.enclosure){
      numDinos += dino.offspring;
      for (let i = 1; i <= dino.offspring; i++){
        extraDinos.push(dino);
      };
    };
    years --;
  };
  return numDinos;
};

Park.prototype.calculateDinosaurs = function (years) {
  var total = 0;
  for (dinosaur of this.enclosure) {
    var count = 1;
    for (var i = 0; i < years; i++) {
      count += dinosaur.offspring * count;
    }
    total += count;
  }
  return total;
}

module.exports = Park;
