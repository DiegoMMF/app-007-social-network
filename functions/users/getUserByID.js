// const { ObjectID } = require('mongodb');
const ObjectID = require('mongodb').ObjectID;

const getDB = require('../../database/database').getDB;

module.exports = async (req, res) => {
  try {
    const db = getDB();
    const collection = db.collection("users");
    const query = { _id: ObjectID(req.params.userID) };
    const options = {};
    const user = await collection.findOne(query, options);
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error.");
  }
}