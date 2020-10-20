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
 * const getPosts = require('../functions/posts/getPosts');
 * const addPost = require('../functions/posts/addPost');
 * const updatePost = require('../functions/posts/updatePost');
 * const deletePost = require('../functions/posts/deletePost');
 * const validation = require('../helpers/validation');
 * const authorization = require('../helpers/authorization');
 * router.get("/posts", getPosts)
 * router.post("/add-post", addPost);
 * router.put("/update-post", updatePost);
 * router.delete("/delete-post", deletePost);
 */