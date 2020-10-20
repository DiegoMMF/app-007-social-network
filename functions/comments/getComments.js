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
    const query = { _id: "5f8c43320c5fdc16daee2748" };
    const options = {};
    const post = await posts.findOne(query, options);
    res.json(post);
  } finally {
    await client.close();
  }
};