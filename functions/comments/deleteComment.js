const { ObjectID } = require('mongodb');
const getDB = require('../../database/database').getDB;

/** 
 * @param req.body.currentPostID
 * @param res.body.commentCreatedAt
 */
module.exports = async (req, res) => {
  try {
    const db = getDB();
    const collection = db.collection("post");
    const filter = { _id: ObjectID(req.body.currentPostID) };
    const currentPost = await collection.findOne(filter);

    const commentsArray = currentPost.comments;
    const commentIndex = commentsArray.indexOf(req.body.commentCreatedAt);
    commentsArray.splice(commentIndex, 1);

    const updateDoc = { $set: { comments: commentsArray } };
    const result = await collection.updateOne(filter, updateDoc);    
    res.send(`${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error.");
  }
};