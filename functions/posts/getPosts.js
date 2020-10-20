const getDB = require('../../database/database').getDB;

module.exports = async (req, res) => {
    try {
        const db = getDB();
        const collection = db.collection("posts");
        const query = {};
        const options = {};
        const posts = await collection.find(query, options).toArray();
        res.send(posts);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error.");
    }
}