/*
 * Formerly was routes/updates
 */

  //var car_class = require("../models/car_model.js");

exports.put = function(req, res){
  res.send('This is in garage.js, the name you chose is ' + req.body.name);
};

exports.doPost = function(req, res){
  res.render('verbs', { verb: 'POST', message: req.body.testString});
};

exports.list = function(req, res){
	res.send('This response is in garage.js');
}

exports.get_garage = function(req, res){
	res.render('garageShow', {garage: "The garage chosen would go here"});
}