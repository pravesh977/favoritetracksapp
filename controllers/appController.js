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


module.exports = controller;



