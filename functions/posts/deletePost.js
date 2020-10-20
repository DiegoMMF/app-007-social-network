const { ObjectID } = require('mongodb');
const getDB = require('../../database/database').getDB;

module.exports = async (req, res) => {
  try {
    const db = getDB();
    const collection = db.collection("posts");
    const query = { _id: ObjectID(req.params.userID) };
    const result = await collection.deleteOne(query);
    if (result.deletedCount === 1) {
        res.send("Successfully deleted one document.");
    } else {
        res.send("No documents matched the query. Deleted 0 documents.");
    }
    
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error.");
  }
}