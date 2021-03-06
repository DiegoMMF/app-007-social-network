const getDB = require('../../database/database').getDB;

/** 
 * @param req.body.postID
 * @param res.body.commentDate
 */
module.exports = async (req, res) => {
  try {
    const db = getDB();
    const collection = db.collection("posts");
    const query = { _id: req.body.postID };
    const post = await collection.findOne(query);
    res.send(post.comments);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error.");
  }
};