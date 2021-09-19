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

exports.up = function (db) {
  const rows = ["title", "content", "userid"];
  const tables = { hospital: "hospital", room: "room", nursery: "nursery" };
  const comment1 = {
    rows,
    content: [
      "What is Lorem Ipsum?",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      2,
    ],
  };
  const comment2 = {
    rows,
    content: [
      "Why do we use it?",
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      2,
    ],
  };
  const comment3 = {
    rows,
    content: [
      "Where can I get some?",
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      2,
    ],
  };
  const comment4 = {
    rows,
    content: [
      "Where does it come from??",
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      2,
    ],
  };

  return (
    db.insert(tables.hospital, [...comment1.rows], [...comment1.content]),
    db.insert(tables.hospital, [...comment2.rows], [...comment2.content]),
    db.insert(tables.hospital, [...comment3.rows], [...comment3.content]),
    db.insert(tables.hospital, [...comment4.rows], [...comment4.content]),
    db.insert(tables.room, [...comment1.rows], [...comment1.content]),
    db.insert(tables.room, [...comment2.rows], [...comment2.content]),
    db.insert(tables.room, [...comment3.rows], [...comment3.content]),
    db.insert(tables.room, [...comment4.rows], [...comment4.content]),
    db.insert(tables.nursery, [...comment1.rows], [...comment1.content]),
    db.insert(tables.nursery, [...comment2.rows], [...comment2.content]),
    db.insert(tables.nursery, [...comment3.rows], [...comment3.content]),
    db.insert(tables.nursery, [...comment4.rows], [...comment4.content])
  );
};

exports.down = function (db) {
  return db.runSql("TRUNCATE TABLE hospital;");
};

exports._meta = {
  version: 1,
};
