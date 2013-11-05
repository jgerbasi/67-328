
$(function() {
	$("#newGarage").submit(newGarage);
	$("#newCar").submit(newCar);
	listGarages();
	listCars();
	} );

/*
 * Creates a new garage (put)
 */
 
function newGarage() {
	$.ajax({
			url: "garages",
			type: "put",
			data: {
				garage_name: $("#name").val(),
				garage_location: $("#location").val()
			},
			success: function(data) {
				$('#newGarageResponse').html(data);
				// after the garage is created, clear the text boxes
				$("#name").val("");
				$("#location").val("");
				listGarages();
			}
	});
	return false;	
}

/*
 * Creates a new car (put)
 */

function newCar() {
	var garageID = $("#garage").val();
	var URLString = "garages/" + garageID + "/cars";
	var aj = $.ajax({
			url: URLString,
			type: "put",
			data: {
				make: $("#make").val(),
				model: $("#model").val(),
				garage_id: garageID
			}
	});

	aj.done(function(data) {
				$('#newCarResponse').html(data);
				$("#make").val("");
				$("#model").val("");
				$("#garage").val("");
				listCars();
	});
	return false;	
}

// function to list all of the garages (get)
function listGarages(){
	var aj = $.ajax({
		url: "garages",
		type: "get"
	});
	aj.done(function(data) {
		var ul = $("#garageUL");
		ul.html("");
		data.forEach(function(garage, index){
			if(garage != null) {
				var t = $("<li> Name: " + garage.name + " Location: " + garage.location + "</li>");
				t.click(function(){
					deleteGarage(index);
				});
				ul.append(t); 
			}
		});
	});
}

//deletes a garage (delete)
function deleteGarage(index) {
	var url = "/garages/" + index;
	var aj = $.ajax({
		url: url,
		type: "delete",
		data: {
			garage_id: index
		}
	});
	aj.done(function(){
		listGarages();
	});
}

// function to list all of the cars (get)
function listCars(){
	var aj = $.ajax({
		url: "cars",
		type: "get"
	});
	aj.done(function(data) {
		var ul = $("#carUL");
		ul.html("");
		data.forEach(function(car, index){
			var t = $("<li>Make: " + car.make + " Model: " + car.model + "</li>");
			t.click(function(){
				postCar(index);
			});
			ul.append(t);
		});
	});
}

// performs a post to update a car (post)
function postCar(index, make, model) {
	var aj = $.ajax({
		url: "/garages/0/cars/" + index,
		type: "post",
		data: {
			car_id: index,
			make: "post",
			model: "example"
		}
	});
	aj.done(function(){
		listCars();
	});
}


