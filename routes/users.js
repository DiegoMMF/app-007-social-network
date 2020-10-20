const express = require('express');
const router = express.Router();

const getUserByID = require('../functions/users/getUserByID');
const getUsers = require('../functions/users/getUsers');
const addUser = require('../functions/users/addUser');
const deleteUser = require('../functions/users/deleteUser');
const deleteFriend = require('./../functions/users/deleteFriend');
const addFriend = require('./../functions/users/addFriend');

router.post("/add-friend", addFriend);
router.delete("/delete-friend", deleteFriend);
router.delete("/delete-user/:userID", deleteUser);
router.post("/add-user", addUser);
router.get("/list", getUsers);
router.get("/:userID", getUserByID);

module.exports = router;

/**
 * middleware test --> (req, res, next) => {console.log("middleware"); next()},
 * 
 * const userLogin = require('../functions/users/userLogin');
 * const addFriend = require('../functions/users/addFriend');
 * const userSignup = require('../functions/users/userSignup');
 * const validation = require('validation');
 * const authorization = require('authorization');
 * router.post("/signup", userSignup);
 * router.post("/login", userLogin);
 * router.post("/add-friend", addFriend);
 */