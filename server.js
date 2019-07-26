const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

// DB config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
/*
mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));
*/


const MongoClient = require(‘mongodb’).MongoClient;
const uri = "mongodb+srv://Edgar-Admin:zeusHOUSE@cluster0-lfj0g.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

const port = process.env.PORT || 5000; // process.env.port is Heroku's port 
app.listen(port, () => console.log(`Server up and running on ${port} !`));