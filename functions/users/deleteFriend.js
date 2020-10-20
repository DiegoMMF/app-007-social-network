// const { ObjectID } = require('mongodb');
const ObjectID = require('mongodb').ObjectID;

const getDB = require('../../database/database').getDB;

/* 
{
    "currentUserID": "5f8c3fc90c5fdc16daee2746",
    "friendToDeleteID": "5f8c3fc90c5fdc16daee2747"
}
*/

module.exports = async (req, res) => {
  try {
    const db = getDB();
    const collection = db.collection("users");
    const filter = { _id: ObjectID(req.body.currentUserID) };
    const currentUser = await collection.findOne(filter);

    const friendsArray = currentUser.friends;
    const friendIndex = friendsArray.indexOf(req.body.friendToDeleteID);
    friendsArray.splice(friendIndex, 1);

    const updateDoc = { $set: { friends: friendsArray } };
    const result = await collection.updateOne(filter, updateDoc);    
    res.send(`${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`);
    /* if (result.matchedCount === 1) {
      res.send("Successfully deleted one document.");
    } else {
      res.send("No documents matched the query. Deleted 0 documents.");
    } */

  } catch (error) {
    console.error(error);
    res.status(500).send("Server error.");
  }
}