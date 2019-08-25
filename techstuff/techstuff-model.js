const db = require("../db-config.js");


module.exports = {
  getStuff,
  addStuff,
  updateStuff
};


function getStuff() {
  return db("stuff");
}

function addStuff(stuff) {
  return db("stuff").insert(stuff, "id");
}

function updateStuff(changes, id) {
  return db("stuff")
    .update(changes)
    .where({ id });
}

