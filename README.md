## GiveitApp

A simple charity website for individuals residing in the RGV that would like to give back to their communities.

## CodeRGV (boot)
This project is the 3rd of 4 main projects assigned in the CodeRGV (boot) bootcamp.

## APIs
* Wunderground API -- for weather forecasting.
* Google Maps API -- for mapping and road routing.

# Technologies used
* Node JS
* Express
* MongoDB
* Templating Engine: EJS

---

## Getting Started
If you want to make your own copy this project, go ahead and enter these commands into your command prompt.

**Note: git, mongodb and node must be installed into you machine.**

```sh
$ cd Desktop
$ git clone https://github.com/jmdelcarmen/give-it-app.git
$ cd give-it-app
$ npm install
```
## Connecting to a remote database
### Setup steps
1. create an Mlab account
2. create a new deployment(database)
3. add a database user and remember username and password
4. add two collections (donations, volunteers)
5. populate collections with the corresponding JSON files from the data folder in the give-it-app directory
6. create a .env file
```sh
$ touch .env
```
7. Edit the .env file to add the Mlab URI
```sh
$ nano .env
```
```
MONGO_URI=<YOUR_MLAB_URI>
```

## Getting a Google Maps API key
### Setup steps
1. Go to: https://console.developers.google.com/
2. Create or select a project
3. On the Credentials page, get an API key
4. Edit the .env file to add the Google Maps API key
```sh
$ nano .env
```
```
MONGO_URI=<YOUR_MLAB_URI>
MAP_KEY=<YOUR_GOOGLE_MAPS_API_KEY>
```

## Getting a Wunderground API key
### Setup steps
1. Go to: https://www.wunderground.com
2. Create an account
3. Navigate to More > Weather API for Developers
4. Navigate to Pricing
5. Purchase key  
6. Fill out form
7. Edit the .env file to add the Wunderground API key
```sh
$ nano .env
```
```
MONGO_URI=<YOUR_MLAB_URI>
MAP_KEY=<YOUR_GOOGLE_MAPS_API_KEY>
WEATHER_KEY=<YOUR_WUNDERGROUND_API_KEY>
```

---

## Starting the server
```sh
$ nodemon server
or
$ npm start
```

**The app should be running on http://127.0.0.1:3000 or http://localhost:3000**


The completed app is deployed on https://giveitapp.herokuapp.com/
