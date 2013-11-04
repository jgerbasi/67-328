var garage_class = require("../models/garage_model.js");

exports.list = function(req, res) {
	/*
	 * Loop through to get all garages in data structure?
	 * there was a garage_class.list call here but I removed it to make the
	 * idea of listing garages present on the home page
	 */
  res.send("This list of all garages would be here. Find in routes/garage.js");
};

exports.get = function(req, res) {
  res.send(garage_class.get(req.query.garage_id));
};

exports.put = function(req, res) {
	// create a new garage
	var garage = new garage_class(req.body.garage_name, req.body.garage_location);
	// add it to some data structure?
  res.send("added a new garage with the name: " + garage.name + " and the location " + garage.location);
};

exports.post = function(req, res) {
  res.send(garage_class.post(req.body.garage_id, req.body.gargae_name, req.body.garage_location));
};

exports.del = function(req, res) {
  res.send(garage_class.del(req.body.garage_id));
};