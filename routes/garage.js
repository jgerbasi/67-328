/*
 * Formerly was routes/updates
 */

  //var car_class = require("../models/car_model.js");

exports.doPut = function(req, res){
  res.render('verbs', { verb: 'PUT', message: req.body.testString});
};

exports.doPost = function(req, res){
  res.render('verbs', { verb: 'POST', message: req.body.testString});
};

exports.list = function(req, res){
	res.render('garages', {garageList: "This list of garages should go here"});
}

exports.get_garage = function(req, res){
	res.render('garageShow', {garage: "The garage chosen would go here"});
}