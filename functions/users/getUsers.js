const getDB = require('../../database/database').getDB;

module.exports = async (req, res) => {
    try {
        console.log("dentro del try de getUsers")
        const db = getDB();
        const collection = db.collection("users");
        const query = {};
        const options = {};
        const users = await collection.find(query, options).toArray();
        res.send(users);
    } catch (error) {
        console.log("dentro del catch de getUsers")
        console.error(error);
        res.status(500).send("Server error.");
    }
}