const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');
const methodOverride= require('method-override');
const app = express();

//importing whatever is being exported from tracklist.js from routes directory
const tracklistRoutes = require('./routes/tracklist');

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
console.log(`listening to favorite music on port ${PORT}`);
});

//setting the directory to get the views and declaring its a view engine and has the extention of ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//spoof foldername, gets style, etc other files from from here
app.use('/static', express.static(path.join(__dirname, 'public')));

//errors logger
app.use(logger('dev'));

//setting bodyparsers to see sensible stuff
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//setting up method override to do put and delete
app.use(methodOverride('_method'));

// starting the main root, telling it to render using views at folder views and using file index.ejs
app.get('/', function (req, res) {
  res.render('index', {
    mainheader: 'Welcome to favorite music list app thingy',
    documentTitle: 'My favorite music list storage app'
  });
});

// the /tracklist is referenced in index.ejs file line 4(href link)
//but whats the tracklistRoutes saying? is it saying go to that file in the main
//directory to get instructions for what to when user hits /tracklist?
//i think its being imported from line 
app.use('/tracklist', tracklistRoutes);

app.get('*', (req, res)=> {
  res.status(404).send({message: 'CANT FIND THE PAGE.'});
});