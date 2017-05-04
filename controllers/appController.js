const Fav = require('../models/appModels')

const controller = {};


controller.index = (req, res) => {
  //calling the findAll function (which gets data from the database in appModels) and getting the json object.. just like fetch
  Fav.findAll()
    .then(jsn => {
  //render using favSongsViews folder's favsongslist-index.ejs
    res.render('favSongsViews/favsongslist-index', {
    documentTitle: 'Complete List',
    fullListData: jsn,
  });
})
.catch(err => {
  res.status(400).json(err);
})
};


 //calling the findOne function for url/add
controller.singleShow = function(req, res) {
 Fav.findById(req.params.id)
  .then(resSingle => {
    res.render('favSongsViews/favsongsinglefile', {
      documentTitle: 'Single View Title',
      singleData: resSingle,
    })
  })
  .catch(err => {
  res.status(400).json(err);
})
};

//dont understand this at all
controller.addNew = (req, res) => {
  Fav.addNew({
    track: req.body.track,
    artist: req.body.artist,
    album: req.body.album,
    genre_id: req.body.genre_id,
  })
  .then(star => {
    res.redirect('/tracklist');
  })
 .catch(err => {
      res.status(400).json(err);
    });
};

controller.editthis = (req, res) => {
  Fav.findById(req.params.id)
    .then(list => {
      console.log(list);
      
      res.render('favSongsViews/favsongs-edit', {
        documentTitle: 'Edit Info',
        list: list,
        id: req.params.id,
  });
    })
  .catch(err => {
      res.status(400).json(err);
    });
};

controller.updater = (req, res) => {
  Fav.updater({
    track: req.body.track,
    artist: req.body.artist,
    album: req.body.album,
    genre_id: req.body.genre_id,
  }, req.params.id)
    .then(editresp => {
      res.redirect('/tracklist');
    })
  .catch(err => {
      res.status(400).json(err);
    });
};

controller.deleteit = (req, res) => {
  Fav.deleteit(req.params.id)
    .then(() => {
      res.redirect('/tracklist');
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

module.exports = controller;



