const express = require('express');
const app = express();
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');
 port = process.env.PORT || 3000;
// Enable CORS
app.use(cors());

// Enable the use of request body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Create timesheets API endpoint
app.post('/timesheets', function(req, res){
  res.status(201).send({message: "This is the POST /timesheets endpoint"});
})

// Launch the API Server at localhost:8080
app.listen(port);
console.log('todo list RESTful API server started on: ' + port);
