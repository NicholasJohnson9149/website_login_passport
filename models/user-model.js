const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    username: String,
    googleid: String,
    thumbnail: String,
    gender: String,
    provider: String,
    location: String
})

const User = mongoose.model('user', userSchema)

module.exports = User;
