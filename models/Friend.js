const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

// Schema
const FriendSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    species: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: true
    },
    neutered: {
        type: String,
        enum: ["true", "false"],
        required: true
    },
    care:  {
        type: String,
        enum: ["foster", "adopt"],
        required: true
    }, 
    about: {
        type: String,
        required: true
    },
    // make reference to UserSchema
    owner: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    // string which holds ref to image hosted on Cloudinary
    imagePath: { 
        type: String,
        required: false
    }
});

// export schema
module.exports = Friend = mongoose.model("friends", FriendSchema);