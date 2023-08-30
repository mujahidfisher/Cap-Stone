const Users = require("./users");
const Merch = require("./merch");

module.exports = {
  users: new Users(),
  merch: new Merch(),
};