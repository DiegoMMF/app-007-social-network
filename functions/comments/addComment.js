const { ObjectID } = require('mongodb');
const getDB = require('../../database/database').getDB;

/** 
 * @param req.body.currentPostID
 * @param res.body.newComment
 */
module.exports = async (req, res) => {
  try {
    const db = getDB();
    const collection = db.collection("posts");
    const filter = { _id: ObjectID(req.body.currentPostID) };
    const currentPost = await collection.findOne(filter);

    const commentsArray = currentPost.comments;
    commentsArray.unshift(req.body.newComment);
    const updateDoc = { $set: { comments: commentsArray } };
    const result = await collection.updateOne(filter, updateDoc);
    res.send(`${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error.");
  }
};