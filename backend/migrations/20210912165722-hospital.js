"use strict";

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

exports.up = function (db, callback) {
  db.createTable(
    "hospital",
    {
      id: { type: "int", primaryKey: true, autoIncrement: true },
      title: { type: "string", notNull: true },
      content: { type: "text", notNull: true },
      type: { type: "string", defaultValue: "hospital", notNull: true },

      userid: {
        type: "int",
        notNull: true,
        foreignKey: {
          name: "hospital_user_id_livisblog_fk",
          table: "users",
          mapping: "id",
          rules: {
            onDelete: "CASCADE",
          },
        },
      },
    },
    callback
  );
};

exports.down = function (db) {
  db.dropTable("hospital", callback);
};

exports._meta = {
  version: 1,
};
