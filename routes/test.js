var express = require('express');
var router = express.Router();

/* GET base listing. */
router.get('/', function(req, res, next) {
  res.send('base response');
});

/* GET string listing. */
router.get('/string', function(req, res, next) {
  res.send({result: 'test string'});
});

/* GET number listing. */
router.get('/number', function(req, res, next) {
  res.send({result: 42});
});

/* GET bipolar number listing. */
router.get('/bipolar-number', function(req, res, next) {
  res.send({result: {0: 42, 1: 58}});
});

/* GET date listing. */
router.get('/date', function(req, res, next) {
  res.send({result: new Date()});
});

/* GET bipolar date listing. */
router.get('/bipolar-date', function(req, res, next) {
  res.send({result: {0: new Date(), 1: new Date}});
});


module.exports = router;
