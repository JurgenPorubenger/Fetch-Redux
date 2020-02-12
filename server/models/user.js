const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        first: { type: String, trim: true, required:true },
        last: { type: String, trim: true, required:true }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    chat: {
        id: ObjectId,
    },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;

