// pull in required dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    friends: [{
        type: Schema.Types.ObjectId,
        ref: "FriendSchema"
    }],
    userType: {
        type: String,
        enum: ["Rescue Organization", "Shelter", "Individual"]
    },
    profileImg: {
        type: String,
        data: Buffer
    }
});

// export schema
module.exports = User = mongoose.model("users", UserSchema);