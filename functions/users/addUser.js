const getDB = require('../../database/database').getDB;
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  try {
    const wannabeUSR = req.body.newUser;    
    const db = getDB();
    const collection = db.collection("users");
    const query = { "email": wannabeUSR.email };
    const user = await collection.findOne(query);
    
    // validation missing ...like... if (!user) res.send("Usuario inexistente y gay");
    
    // all OK, we proceed to encrypt password and save the new user
    const salt = await bcryptjs.genSalt(10);
    let hashedPassword = await bcryptjs.hash(wannabeUSR.password, salt);
    wannabeUSR.password = hashedPassword;

    wannabeUSR.createdAt = Date();
    const newUSR = await collection.insertOne(wannabeUSR);

    const payload = {
      user: {
        createdAt: wannabeUSR.createdAt,
      },
    };

    jwt.sign(
      payload,
      process.env.JWTSECRET,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.send(
          `${newUSR.insertedCount} document(s) were inserted
          with the _id: ${newUSR.insertedId} and the token
          ${token}`);
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error.");
  }
}