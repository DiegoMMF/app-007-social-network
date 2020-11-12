const express = require('express');
const router = express.Router();

const getPosts = require('../functions/posts/getPosts');
const getPostByID = require('../functions/posts/getPostByID');
const addPost = require('../functions/posts/addPost');
const deletePost = require('../functions/posts/deletePost');
// const deleteFriend = require('./../functions/posts/deleteFriend');
// const addFriend = require('./../functions/posts/addFriend');

router.get("/list", getPosts);
router.get("/:postID", getPostByID);

// router.post("/add-friend", addFriend);
// router.delete("/delete-friend", deleteFriend);
router.delete("/delete-post/:postID", deletePost);
router.post("/add-post", addPost);



module.exports = router;

/**
 * 
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