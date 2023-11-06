const express = require("express");
const { GetAllUsers } = require("./users.controllers");

const router = express.Router();

router.get("/users", GetAllUsers);

// const { signup, signin, getUsers } = require('./users.controllers');

// router.post('/signup', signup);
// router.post('/signin', signin);
// router.get('/users', getUsers);

module.exports = router;
