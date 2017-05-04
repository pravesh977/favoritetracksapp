const db = require('../db/config');


//this empty object is where retrieved stuff from database is going to be stored i think.
//is it stored there for one instance only?
const Fav = {};


//gettting all songs from database and saving it as property findAll in Fav object?
//change this into arrow function
Fav.findAll = () => {
  return db.query('SELECT * FROM favtracks ORDER BY id ASC');
};

Fav.findById = id => {
  return db.oneOrNone('SELECT * FROM favtracks WHERE id = $1', [id]);
};

Fav.addNew = asdf => {
  return db.one(
    `
    INSERT INTO favtracks
    (track, artist, album, genre_id)
    VALUES ($1, $2, $3, $4) RETURNING *
    `,
    [asdf.track, asdf.artist, asdf.album, asdf.genre_id]
  );
};

Fav.updater = (list, id) => {
  return db.none(
    `
    UPDATE favtracks SET
    track = $1,
    artist = $2,
    album = $3,
    genre_id = $4
    WHERE id = $5
    `,
    [list.track, list.artist, list.album, list.genre_id, id]
  );
};

Fav.deleteit = id => {
  return db.none(
    `
    DELETE FROM favtracks
    WHERE id = $1
    `, [id]
  );
};
//exporting Fav so that controllers can use it
module.exports = Fav;