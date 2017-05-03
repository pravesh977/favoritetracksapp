const pgp = require('pg-promise')();

let db;

if (process.env.NODE.ENV === 'development' || !process.env.NODE_ENV) {
  db = pgp ({
    database: 'favoritetracks_db',
    port: 5432,
    host: 'localhost'
  });
} else if (process.env.NODE_ENV === 'production') {
  db = pgp({
    database: 'favoritetracks_db_production',
    port: 5432,
    host: 'localhost'
  });
};


//this db will be used at module folder's appModule file
module.exports = db;