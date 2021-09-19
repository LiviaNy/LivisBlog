"use strict";
var bcrypt = require("bcryptjs");

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db) {
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync("password", salt);
  return db.insert("users", ["username", "password"], ["Sanyi", hash]);
};

exports.down = function (db) {
  return db.runSql("TRUNCATE TABLE users;");
};

exports._meta = {
  version: 1,
};
