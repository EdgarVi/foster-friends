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
    // make reference to UserSchema
    owner: {
        type: Schema.Types.ObjectId,
        ref: "user"
    }

});

// export schema
module.exports = Friend = mongoose.model("friends", FriendSchema);