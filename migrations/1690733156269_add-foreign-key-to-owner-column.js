/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql("INSERT INTO users(id, username, password, fullname) VALUES ('old_playlists', 'old_playlists', 'old_playlists', 'old_playlists')");
  pgm.addConstraint('playlists', 'fk_playlists.owner_users.id', 'FOREIGN KEY(owner) REFERENCES users(id) ON DELETE CASCADE');
};

exports.down = (pgm) => {
  pgm.dropConstraint('playlists', 'fk_playlists.owner_users.id');
  pgm.sql("UPDATE playlists SET owner = NULL WHERE owner = 'old_playlists'");
};
