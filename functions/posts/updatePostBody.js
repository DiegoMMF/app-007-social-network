const { ObjectID } = require('mongodb');
const getDB = require('../../database/database').getDB;

/**
 * 
 * @param {*} req.body.postID
 * @param {*} req.body.newBody
 */

module.exports = async (req, res) => {
  try {
    const db = getDB();
    const collection = db.collection("posts");

    const filter = { _id: ObjectID(req.body.postID) };
    const updateDoc = { $set: { postBody: req.body.newBody } };
    const result = await collection.updateOne(filter, updateDoc);

    res.send(`${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error.");
  }
}