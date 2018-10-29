// make this available to our users in our Node applications
module.exports = User;
const mongoose = require('mongoose'),
Schema = mongoose.Schema;

const user = new Schema({
    token: { type: String, default: null },
    token_secret: { type: String, default: null }
});

module.exports = user;
