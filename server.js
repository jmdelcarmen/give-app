'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const engine = require('ejs-locals');
const app = express();

//routes
const index = require('./routes/index');




//view engine
app.engine('ejs', engine);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');



//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/public')));


//APIs
app.get('/', index.displayHomePage);


app.listen(3000, () => {
  console.log('Construction ongoing on port 3000.');
});
