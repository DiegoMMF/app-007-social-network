const getDB = require('../../database/database').getDB;

module.exports = async (req, res) => {
  try {
    const db = getDB();
    const collection = db.collection("posts");
    const result = await collection.insertOne(req.body.newPost);
    res.send(`${result.insertedCount} document(s) were inserted with the _id: ${result.insertedId}`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error.");
  }
}