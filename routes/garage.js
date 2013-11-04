var garage_class = require("../models/garage_model.js");

exports.list = function(req, res) {
  res.send(garage_class.list);
};

exports.get = function(req, res) {
  res.send(garage_class.get(req.query.garage_id));
};

exports.put = function(req, res) {
  res.send(garage_class.put(req.body.garage_name, req.body.garage_location));
};

exports.post = function(req, res) {
  res.send(garage_class.post(req.body.garage_id, req.body.gargae_name, req.body.garage_location));
};

exports.del = function(req, res) {
  res.send(garage_class.del(req.body.garage_id));
};