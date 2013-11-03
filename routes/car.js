
/*
 * Formerly the routes/users
 */

 //var garage_class = require("../models/garage_model.js");


exports.list = function(req, res){
  // This placeholder directly responds, and does not use the view engine
  res.render('cars', { carList: "The list of cars would be here? "});
};

exports.get_car = function(req, res){
	res.render('carShow', {car: "The car chosen would go here"});
}

