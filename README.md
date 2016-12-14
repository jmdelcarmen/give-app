## GiveitApp

A simple charity website for individuals residing in the RGV that would like to give back to their communities.

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
## Connecting to a database
### Prerequisites
* an Mlab account
* create a new deployment(database)
* add a database user and remember username and password
* add two collections (donations, volunteers)
* populate collections with the corresponding JSON files from the data folder in the give-it-app directory

```sh
$ touch .env
$ nano .env
```
Edit the .env file to contain the API keys and Mlab URI
```
MAP_KEY=<YOUR_GOOGLE_MAPS_API_KEY>
WEATHER_KEY=<YOUR_WUNDERGROUND_API_KEY>
MONGO_URI=<YOUR_MLAB_URI>
```

## CodeRGV (boot)
This project is the 3rd of 4 main projects assigned in the bootcamp.

## APIs
* Wunderground API -- for weather forecasting.
* Google Maps API -- for mapping and road routing.

# Technologies used
* Express
* Node
* MongoDB
* EJS
