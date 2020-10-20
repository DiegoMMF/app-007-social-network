const { ObjectID } = require('mongodb');
const getDB = require('../../database/database').getDB;

module.exports = async (req, res) => {
  try {
    const db = getDB();
    const collection = db.collection("users");
    const filter = { _id: ObjectID(req.body.currentUserID) };
    const currentUser = await collection.findOne(filter);
    
    const friendsArray = currentUser.friends;
    const friendIndex = friendsArray.indexOf(req.body.friendToAddID);    
    if (friendIndex === -1) {
      friendsArray.unshift(req.body.friendToAddID);
      const updateDoc = { $set: { friends: friendsArray } };
      const result = await collection.updateOne(filter, updateDoc);
      res.send(`${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`);
    } else {
      res.send("Friend already exists in list of Friends");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error.");
  }
}