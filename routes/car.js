var car_class = require("../models/car_model.js");

exports.list = function(req, res) {
  res.send(car_class.list);
};

exports.get = function(req, res) {
  res.send(car_class.get(req.query.garage_id, req.query.car_id));
};

exports.put = function(req, res) {
  res.send(car_class.put(req.body.garage_id, req.body.make, req.body.model));
};

exports.post = function(req, res) {
  res.send(car_class.post(req.body.garage_id, req.body.car_id, req.body.make, req.body.model));
};

exports.del = function(req, res) {
  res.send(car_class.del(req.body.garage_id, req.body.car_id));
};