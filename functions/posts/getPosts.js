const { MongoClient } = require("mongodb");
const uri = process.env.MONGODB_URI;
const database = process.env.MONGODB_DB;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = async (req, res) => {
  try {
    await client.connect();
    const posts = client.db(database).collection("posts");
    const query = {};
    const options = { sort: { date: 1 } };
    const cursor = posts.find(query, options);
    const arrayOfPosts = [];
    await cursor.forEach(object => arrayOfPosts.push(object));
    res.json(arrayOfPosts);
  } finally {
    await client.close();
  }
};