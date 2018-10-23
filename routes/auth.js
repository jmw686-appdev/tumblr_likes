var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/tumblr/callback', function(req, res, next) {
  console.log(req)
});
/* GET  */
router.get('/get_likes/:offset', function(req, res, next) {
  // Authenticate via OAuth
  offset = req.params.offset
  var tumblr = require('tumblr.js');
  var client = tumblr.createClient({
    consumer_key: process.env.TUMBLR_CONSUMER,
    consumer_secret: process.env.TUMBLR_SECRET,
    token: process.env.TUMBLR_ACCESS_TOKEN,
    token_secret: process.env.TUMBLR_ACCESS_SECRET
  });

  likes = []
  // Show user's blog likes

  client.userLikes({offset: offset}, function(err, data) {
    // console.log(data.liked_posts)
    likes = [...data.liked_posts]
    res.render("user_likes", {likes: likes, offset: (parseInt(offset) + 20) });
  });
  console.log(likes)
  // res.redirect('/')
});
/* GET  */
router.get('/get_likes/', function(req, res, next) {
  // Authenticate via OAuth
  var tumblr = require('tumblr.js');
  var client = tumblr.createClient({
    consumer_key: process.env.TUMBLR_CONSUMER,
    consumer_secret: process.env.TUMBLR_SECRET,
    token: process.env.TUMBLR_ACCESS_TOKEN,
    token_secret: process.env.TUMBLR_ACCESS_SECRET
  });

  likes = []
  // Show user's blog likes

  client.userLikes(function(err, data) {
    // console.log(data.liked_posts)
    likes = [...data.liked_posts]
    res.render("user_likes", {likes: likes, offset: 20});
  });
  console.log(likes)
  // res.redirect('/')
});
module.exports = router;
