const db = require('../db/config');


//this empty object is where retrieved stuff from database is going to be stored i think.
//is it stored there for one instance only?
const Fav = {};


//gettting all songs from database and saving it as property findAll in Fav object?
//change this into arrow function
Fav.findAll = () => {
  return db.query('SELECT * FROM favtracks ORDER BY id ASC');
};


//exporting Fav so that controllers can use it
module.exports = Fav;