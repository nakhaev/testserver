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

/* GET object string listing. */
router.get('/object-string', function(req, res, next) {
  res.send({result: {0: 'test1', 1: 'test2'}});
});

/* GET number listing. */
router.get('/number', function(req, res, next) {
  res.send({result: 42});
});

/* GET object number listing. */
router.get('/object-number', function(req, res, next) {
  res.send({result: {0: 42, 1: 58}});
});

/* GET date listing. */
router.get('/date', function(req, res, next) {
  res.send({result: new Date()});
});

/* GET object date listing. */
router.get('/object-date', function(req, res, next) {
  res.send({result: {0: new Date(), 1: new Date}});
});

/* GET boolean true listing. */
router.get('/boolean-true', function(req, res, next) {
  res.send({result: true});
});

/* GET boolean false listing. */
router.get('/boolean-false', function(req, res, next) {
  res.send({result: false});
});

/* GET empty array listing. */
router.get('/array-empty', function(req, res, next) {
  res.send({result: []});
});

/* GET array listing. */
router.get('/array', function(req, res, next) {
  res.send({result: ['api-first', 'api-second', 'api-third']});
});

/* GET empty object listing. */
router.get('/object-empty', function(req, res, next) {
  res.send({result: {}});
});

/* GET object listing. */
router.get('/object', function(req, res, next) {
  res.send({result: {"FIRST": "first", "SECOND": "second", "THIRD": "third", "ELSE_ONE": "else one",}});
});

/* GET api error listing. */
router.get('/api-error', function(req, res, next) {
    res.status(500).send('API error');
});

/* GET options listing. */
router.get('/options', function(req, res, next) {
  res.send({result: {"FIRST": "0", "SECOND": "1", "THIRD": "2", "ELSE_ONE": "3",}});
});

/* GET options with duplicate values listing. */
router.get('/options-duplicate', function(req, res, next) {
  res.send({result: {"FIRST": "0", "SECOND": "1", "THIRD": "1", "ELSE_ONE": "2",}});
});

module.exports = router;
