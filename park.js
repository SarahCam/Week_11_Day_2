let Park = function(){
  this.enclosure = [];
};

Park.prototype.addDino = function (dino) {
  this.enclosure.push(dino);
};

Park.prototype.removeDinosOfType = function (type) {
  let updatedEnclosure = [];
  for (let dino of this.enclosure) {
    if (dino.type !== type) {
      updatedEnclosure.push(dino);
    };
  };
  this.enclosure = updatedEnclosure;
};

module.exports = Park;
