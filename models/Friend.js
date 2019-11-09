const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

// Embedded schema
var FriendInfoSchema = new Schema({
    about: {
        type: String, 
        required: false
    }
})

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
    }, 
    friend_info: FriendInfoSchema

});

// export schema
module.exports = FriendInfoSchema = mongoose.model("friend_info", FriendInfoSchema);
module.exports = Friend = mongoose.model("friends", FriendSchema);