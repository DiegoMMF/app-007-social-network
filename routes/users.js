const express = require('express');
const router = express.Router();
// GETs
const getUsers = require('../functions/users/getUsers');
const getUserByID = require('../functions/users/getUserByID');
// POSTs
const userLogin = require('../functions/users/userLogin');
const addUser = require('../functions/users/addUser');
const addFriend = require('./../functions/users/addFriend');
// DELETEs
const deleteUser = require('../functions/users/deleteUser');
const deleteFriend = require('./../functions/users/deleteFriend');

// router.post("/login", userLogin);
router.get("/list", getUsers);
router.get("/:userID", getUserByID);

router.post("/add-user", addUser);
router.post("/add-friend", addFriend);

router.delete("/delete-friend", deleteFriend);
router.delete("/delete-user/:userID", deleteUser);


module.exports = router;