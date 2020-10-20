const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT;
const express = require('express');
// const path = require('path');
const app = express();
const comments = require("./routes/comments");
const users = require("./routes/users");
const posts = require("./routes/posts");
const cors = require('cors');
const mongoConnect = require('./database/database').mongoConnect;

app.use(cors());
app.use(express.json());
app.use("/api/comments", comments);
app.use("/api/posts", posts);
app.use("/api/users", users);

// app.use(express.static(path.join(__dirname, 'public')));
// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

mongoConnect(() => {
    app.listen(port, () => console.log(`Node->Express app ready in port ${port}`))
});

// Testing the mongoClient...
// require("./dbExamples/findOneDocument")().catch(console.dir);
// require("./dbExamples/findMultipleDocuments")().catch(console.dir);