\connect favoritetracks_db

CREATE TABLE IF NOT EXISTS genre (
  id BIGSERIAL PRIMARY KEY,
  genre_type VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS favtracks (
  id BIGSERIAL PRIMARY KEY,
  track VARCHAR(255),
  artist VARCHAR(255),
  album VARCHAR(255),
  genre_id INTEGER REFERENCES genre(id)
);