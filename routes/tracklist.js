const express = require('express');


//importing appController file from controllers folder and assigning it to variable controller
const controller = require('../controllers/appController');

//this tracklistRoutes variable will be exported to app.js
const tracklistRoutes = express.Router();

//when the user hits localho.../tracklist do whatever controller.index does in the controller file from controllers folder
//but before this, we have to import it
tracklistRoutes.get('/', controller.index);




//exporting so that appController.js and app.js can use it
module.exports = tracklistRoutes;
