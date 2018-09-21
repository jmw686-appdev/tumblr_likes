var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'tumblr Likes', key: process.env.TUMBLR_CONSUMER });

});
module.exports = router;
