const { MongoClient } = require("mongodb");
const uri = process.env.MONGODB_URI;
const database = process.env.MONGODB_DB;

let _db;

const mongoConnect = function(callback) {
    MongoClient.connect(uri, { useUnifiedTopology: true })
        .then(client => {
            console.log("mongoDB connection successful");
            _db = client.db(database);
            callback();
        })
        .catch(error => {
            console.log(err);
            throw new Error('DB connection failed...');
        });
}

const getDB = () => {
    if (_db) {
        return _db;
    } else {
        throw new Error('DB connect failed');
    }
}

// const mongoConnect = async callback => {
//     try {
//         await client.connect();
//         console.log("mongoDB connection successful");
//         _db = client.db(database);
//         callback();
//     } catch (error) {
//         console.log(err);
//         throw new Error('DB connection failed...');
//     };
// };
// 
// const getDB = () => _db ? _db : new Error('DB connect failed');

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;