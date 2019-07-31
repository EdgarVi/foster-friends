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
    /*age: {
        type: Number,
        required: true
    },*/
    gender: {
        type: String,
        enum: ["male", "female"],
        required: true
    },
    /*breed: {
        type: String,
        required: false
    },*/
    neutered: {
        type: Boolean,
        required: true
    },
    // make reference to UserSchema
    /*foster: {
        type: Schema.Types.ObjectId,
        ref: "UserSchema"
    }*/

});

// export schema
module.exports = Friend = mongoose.model("friends", FriendSchema);