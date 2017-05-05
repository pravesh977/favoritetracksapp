const express = require('express');


//importing appController file from controllers folder and assigning it to variable controller
const controller = require('../controllers/appController');

const sayHello = require('./services/routehelpers/musichelpers');

//this tracklistRoutes variable will be exported to app.js
const tracklistRoutes = express.Router();

//when the user hits localho.../tracklist do whatever controller.index does in the controller file from controllers folder
//but before this, we have to import it
tracklistRoutes.get('/', controller.index);


//i think this /add doesnt need to be sent to the controller because
//we are just creating a form using ... ejs file and in the controller,
//other controller.index and singleShow need to go because they are in the database
//and we need to get their data in jason form which is not required here.

//it didnt work when i put /add under /:id but why? order mattered?
tracklistRoutes.get('/add', (req, res) => {
  res.render('favSongsViews/favsong-add', {
    documentTitle: 'Add your Favorite Track',
  })
});

//can this be rendered here just like /add instead of sending this to controller?
tracklistRoutes.get('/updatelist/:id', controller.editthis);

tracklistRoutes.get('/:id', controller.singleShow);
tracklistRoutes.post('/', controller.addNew);


tracklistRoutes.put('/:id', controller.updater);
tracklistRoutes.delete('/:id', controller.deleteit);


//exporting so that appController.js and app.js can use it
module.exports = tracklistRoutes;
