var car_class = require("../models/car_model.js");

exports.list = function(req, res) {
  res.send(car_class.list());
};

exports.get = function(req, res) {
  res.send(car_class.get(req.params.car_id));
};

exports.all = function(req, res) {
	//go through cars data structure to list all cars
	res.send("The whole list of cars will be here if we decide. Find in routes/car.js");
}

exports.put = function(req, res) {
	// create new car
	var car = new car_class(req.body.make, req.body.model);
	// add to data structure? 
  res.send("created new car of type " + car.make + " " + car.model + " for garage " + car.garage_id);
};

exports.post = function(req, res) {
  res.send(car_class.post(req.body.car_id, req.body.make, req.body.model));
};

exports.del = function(req, res) {
  res.send(car_class.del(req.body.car_id));
};
