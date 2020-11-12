const express = require('express');
const router = express.Router();

const addUser = require('../functions/users/addUser');

router.post("/add-user", addUser);





const getUserByID = require('../functions/users/getUserByID');
const getUsers = require('../functions/users/getUsers');
const deleteUser = require('../functions/users/deleteUser');
const deleteFriend = require('./../functions/users/deleteFriend');
const addFriend = require('./../functions/users/addFriend');

router.post("/add-friend", addFriend);
router.delete("/delete-friend", deleteFriend);
router.delete("/delete-user/:userID", deleteUser);

router.get("/list", getUsers);
router.get("/:userID", getUserByID);

module.exports = router;

/**
 * const userLogin = require('../functions/users/userLogin');
 * router.post("/login", userLogin);
 * 
 * const userSignup = require('../functions/users/userSignup');
 * router.post("/signup", userSignup);
 * 
 * const validation = require('validation');
 * const authorization = require('authorization'); 
 */