const db = require("../db-config.js");


module.exports = {
  getUsers,
  addUser,
  updateUser,
  deleteUser
};


function getUsers() {
  return db("users");
}

function addUser(newUser) {
  return db("users").insert(newUser, "id");
}

function updateUser(changes, id) {
  return db("users")
    .update(changes)
    .where({ id });
}

function deleteUser(id) {
  return db("users")
    .del()
    .where({ id });
}