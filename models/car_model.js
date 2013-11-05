var db = [];

function Car(make, model) {
	this.make = make;
	this.model = model;
  db.push(this);
}


Car.list = function() {
  return db;
};

Car.get = function(id) {
  return db[id];
}

Car.post = function(id, make, model) {
  var car = db[id];
  car.make = make;
  car.model = model;
  db[id] = car;
}

Car.del = function(id) {
  db[id] = null;
}

 
 module.exports = Car;
