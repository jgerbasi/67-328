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