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




//all the second arguments are calls to functions in the routes folder that handle request/response

//home page path
app.get('/', routes.pathless);

//full list paths(optional)
app.get('/garages', garage.list)
app.get('/cars', car.list);

//specific object paths  (you can rename them to whatever you want)
app.get('/garage/:garage_id', garage.get_garage);
app.get('/car/:car_id', car.get_car);
//app.get('/garage/:garage_id/car/:car_id', garage.get_car) //don't know if we need this

//create
app.put('/garage', garage.put);
app.put('/car', car.put);

//update
app.post('/garage/:garage_id', garage.post); //not positive if these are the correct format
app.post('/car/:car_id', update.post);

//delete
app.delete('/garage/:garage_id', garage.delete); 
app.delete('/car/:car_id', update.delete);


app.listen(44444);
console.log("Express server listening on port 44444");
