var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'tumblr Likes', key: process.env.TUMBLR_CONSUMER });
  console.log(typeof process.env.TUMBLR_CONSUMER);
  console.log(process.env.TUMBLR_SECRET);
  console.log(process.env.TUMBLR_ACCESS_TOKEN);
  console.log(process.env.TUMBLR_ACCESS_SECRET);
});
module.exports = router;
