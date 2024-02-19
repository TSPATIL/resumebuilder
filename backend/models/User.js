const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        min: 12,
        trim: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const user = mongoose.model('user', userSchema);
module.exports = user;