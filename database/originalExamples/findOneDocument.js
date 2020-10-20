const { MongoClient } = require("mongodb");
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useUnifiedTopology: true });

async function run() {
  try {
    await client.connect();
    const database = client.db("sample_mflix");
    const collection = database.collection("movies");
    const query = { title: "The Room" };
    const options = {
      sort: { rating: -1 },
      projection: { _id: 0, title: 1, imdb: 1 },
    };
    const movie = await collection.findOne(query, options);
    console.log(movie);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);