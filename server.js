'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//routes
const index = require('./routes/index');




//view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');



//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//APIs
app.get('/', index.displayHomePage);


app.listen(3000, () => {
  console.log('Construction ongoing on port 3000.');
});
