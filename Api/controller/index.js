const express = require("express");
const bodyParser = require("body-parser");
const routes = express.Router();
const { verifyAToken } = require("../middleware/AuthenticateUser");
const { users, merch } = require("../model");

routes.get("/users", (req, res) => {
  users.fetchUsers(req, res);
});
routes.get("/user/:id", (req, res) => {
  users.fetchUsers(req, res);
});
routes.post("/user", bodyParser.json(), (req, res) => {
  users.register(req, res);
});
routes.put("/user/:id", bodyParser.json(), (req, res) => {
  users.updateUser(req, res);
});
routes.patch("/user/:id", bodyParser.json(), (req, res) => {
  users.updateUser(req, res);
});
routes.delete("/user/:id", (req, res) => {
  users.deleteUser(req, res);
});
routes.post("/login", bodyParser.json(), (req, res) => {
  users.login(req, res);
});

/////////////////////////////////////

routes.get("/merch", (req, res) => {
  merch.fetchMerchs(req, res);
});
routes.get("/merch/:id", (req, res) => {
  merch.fetchMerch(req, res);
});
routes.post("/registerM", bodyParser.json(), (req, res) => {
  merch.register(req, res);
});
routes.put("/merch/:id", bodyParser.json(), (req, res) => {
  merch.updateMerch(req, res);
});
routes.patch("/merch/:id", bodyParser.json(), (req, res) => {
  merch.updateMerch(req, res);
});
routes.delete("/merch/:id", (req, res) => {
  merch.deleteMerch(req, res);
});

module.exports = {
  express,
  routes,
};