
$(function() {
	$("#newGarage").submit(newGarage);
	$("#newCar").submit(newCar);
	listGarages();
	listCars();
	} );

/* 
 * This is the basic form for an Ajax POST
 */
 
function newGarage() {
	$.ajax({
			url: "garage",
			type: "put",
			data: {
				name: $("#newGarage input").val()
			},
			success: function(data) {
				$('#newGarageResponse').html(data);
			}
	});
	return false;	
}

/*
 * This is the basic form for an Ajax PUT. The only real difference
 * is the value of the type attribute.   Notice that instead of success
 * being defined within the object passed to $.ajax, this uses the alternative
 * form of defining success separately.
 */

function newCar() {
	var aj = $.ajax({
			url: "car",
			type: "put",
			data: {
				make: $("#make").val(),
				model: $("#model").val(),
				garage: $("#garage").val()
			}
	});

	aj.done(function(data) {
				$('#newCarResponse').html(data);
	});
	return false;	
}

// function to list all of the garages
function listGarages(){
	var aj = $.ajax({
		url: "cars",
		type: "get"
	});
	aj.done(function(data) {
		$("#garageList").html(data);
	});
}

// function to list all of the cars
function listCars(){
	var aj = $.ajax({
		url: "garages",
		type: "get"
	});
	aj.done(function(data) {
		$("#carList").html(data);
	});
}


