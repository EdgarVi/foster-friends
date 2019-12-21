const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const users = require("./routes/api/users");
const app = express();
//const fs = require("fs-extra");
//const multer = require("multer");

// CORS
app.use(cors());

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
mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Multer config
/*app.use(multer({ dest: './uploads/',
    rename: function (fieldname, filename) {
      return filename;
    },
}));*/

// Routes
app.use("/api/users", users);

const port = process.env.PORT || 5000; // process.env.port is Heroku's port 
app.listen(port, () => console.log(`Server up and running on port ${port} !`));