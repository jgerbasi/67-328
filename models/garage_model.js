var gdb = []

function Garage(name, location) {
	this.name = name;
	this.location = location;
  gdb.append(this);
}

Garage.list = function() {
  return gdb;
}

Garage.get = function(id) {
  return gdb[id];
}

Garage.post = function(id, name, location) {
  var garage = gdb[id];
  garage.name = name;
  garage.location = location;
  gdb[id] = garage;
}

Garage.del = function(id) {
  gdb[id] = null;
}
 
 module.exports = Garage;
