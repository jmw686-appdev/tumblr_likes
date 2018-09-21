var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/tumblr/callback', function(req, res, next) {
  console.log(req)
});
/* GET  */
router.get('/get_likes', function(req, res, next) {
  // Authenticate via OAuth
  var tumblr = require('tumblr.js');
  var client = tumblr.createClient({
    consumer_key: process.env.TUMBLR_CONSUMER,
    consumer_secret: process.env.TUMBLR_SECRET,
    token: process.env.TUMBLR_ACCESS_TOKEN,
    token_secret: process.env.TUMBLR_ACCESS_SECRET
  });

  // Show user's blog likes
  client.userLikes(function(err, data) {
    console.log(data)
  });
  res.redirect('/')
});
module.exports = router;
