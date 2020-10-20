const getDB = require('../../database/database').getDB;

module.exports = async (req, res) => {
    try {
        const db = getDB();
        const collection = db.collection("users");
        const query = {};
        const options = {};
        const users = await collection.find(query, options).toArray();
        res.send(users);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error.");
    }
}