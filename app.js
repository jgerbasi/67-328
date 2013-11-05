var express = require('express'),
    routes = require('./routes/home'),
    garage = require('./routes/garage'),
    car = require('./routes/car'),
    update = require('./routes/update'),
    http = require('http'),
    path = require('path');

var app = express();

app.configure(function(){
  app.set('views', __dirname + '/views');	// Set the directory for views
  app.set('view engine', 'ejs');	// Set the view engine to EJS
  app.use(express.favicon());	// Return a favicon if requested
  app.use(express.logger('tiny'));	// Log requests to the console.log
  app.use(express.bodyParser());	// Parse the request body into req.body object
  app.use(express.methodOverride()); // Allows you to override HTTP methods on old browsers
  app.use(app.router); // Do the routes defined below
  app.use(express.static(path.join(__dirname, 'public')));	// Process static files
});

// home page path
app.get('/', routes.pathless);

// ============= Car Paths =============

// Read
app.get('/cars', car.list);
app.get('/cars/:car_id', car.get)
app.get('/garages/:garage_id/cars', car.list);
app.get('/garages/:garage_id/cars/:car_id', car.get);

// Create
app.put('/garages/:garage_id/cars', car.put);

// Update
app.post('/garages/:garage_id/cars/:car_id', car.post);

// Destroy
app.delete('/garages/:garage_id/cars/:car_id', update.del);

// ============= Garage Paths =============

// Read
app.get('/garages', garage.list);
app.get('/garages/:garage_id', garage.get);

// Create
app.put('/garages', garage.put);

// Update
app.post('/garages/:garage_id', garage.post);

// Destroy
app.delete('/garages/:garage_id', garage.del); 


app.listen(44444);
console.log("Express server listening on port 44444");
