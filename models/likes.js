const mongoose = require('mongoose'),
Schema = mongoose.Schema;

const like = new Schema({

    type: { type: String, default: null },
    token_secret: { type: String, default: null }
});

module.exports = like;
