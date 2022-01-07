const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String
    }
});

const main = mongoose.model("otp", otpSchema);

module.exports = main;