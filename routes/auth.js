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
    consumer_secret: process.env.TUMBLR_SERCRET,
    token: process.env.TUMBLR_ACCESS_TOKEN,
    token_secret: process.env.TUMBLR_ACCESS_SECRET
  });

  // Show user's blog names
  client.userInfo(function(err, data) {
    data.user.blogs.forEach(function(blog) {
      console.log(blog.name);
    });
  });
});
module.exports = router;
