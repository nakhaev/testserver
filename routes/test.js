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

/* GET options with multilang titles listing. */
router.get('/options-multilang', function(req, res, next) {
  res.send({
    result: {
      "FIRST": {
        "title": {
          "ENGLISH": "title 1 en",
          "HEBREW": "title 1 he",
          "CHINESE": "title 1 zh",
          "GERMAN": "title 1 de",
          "FRENCH": "title 1 fr",
          "SPANISH": "title 1 es",
          "ARABIC": "title 1 ar",
          "RUSSIAN": "title 1 ru",
          "HINDI": "title 1 hi"
        },
        "value": "0"
      }, 
      "SECOND": {
        "title": {
          "ENGLISH": "title 2 en",
          "HEBREW": "title 2 he",
          "CHINESE": "title 2 zh",
          "GERMAN": "title 2 de",
          "FRENCH": "title 2 fr",
          "SPANISH": "title 2 es",
          "ARABIC": "title 2 ar",
          "RUSSIAN": "title 2 ru",
          "HINDI": "title 2 hi"
        },
        "value": "1"
      }, 
      "THIRD": {
        "title": {
          "ENGLISH": "title 3 en",
          "HEBREW": "title 3 he",
          "CHINESE": "title 3 zh",
          "GERMAN": "title 3 de",
          "FRENCH": "title 3 fr",
          "SPANISH": "title 3 es",
          "ARABIC": "title 3 ar",
          "RUSSIAN": "title 3 ru",
          "HINDI": "title 3 hi"
        },
        "value": "3"
      }, 
      "ELSE_ONE": {
        "title": {
          "ENGLISH": "title 4 en",
          "HEBREW": "title 4 he",
          "CHINESE": "title 4 zh",
          "GERMAN": "title 4 de",
          "FRENCH": "title 4 fr",
          "SPANISH": "title 4 es",
          "ARABIC": "title 4 ar",
          "RUSSIAN": "title 4 ru",
          "HINDI": "title 4 hi"
        },
        "value": "4"
      }
    }
  });
});

/* GET options with duplicate values and multilang title listing. */
router.get('/options-multilang-duplicate', function(req, res, next) {
  res.send({
    result: {
      "FIRST": {
        "title": {
          "ENGLISH": "title 1 en",
          "HEBREW": "title 1 he",
          "CHINESE": "title 1 zh",
          "GERMAN": "title 1 de",
          "FRENCH": "title 1 fr",
          "SPANISH": "title 1 es",
          "ARABIC": "title 1 ar",
          "RUSSIAN": "title 1 ru",
          "HINDI": "title 1 hi"
        },
        "value": "0"
      }, 
      "SECOND": {
        "title": {
          "ENGLISH": "title 2 en",
          "HEBREW": "title 2 he",
          "CHINESE": "title 2 zh",
          "GERMAN": "title 2 de",
          "FRENCH": "title 2 fr",
          "SPANISH": "title 2 es",
          "ARABIC": "title 2 ar",
          "RUSSIAN": "title 2 ru",
          "HINDI": "title 2 hi"
        },
        "value": "1"
      }, 
      "THIRD": {
        "title": {
          "ENGLISH": "title 3 en",
          "HEBREW": "title 3 he",
          "CHINESE": "title 3 zh",
          "GERMAN": "title 3 de",
          "FRENCH": "title 3 fr",
          "SPANISH": "title 3 es",
          "ARABIC": "title 3 ar",
          "RUSSIAN": "title 3 ru",
          "HINDI": "title 3 hi"
        },
        "value": "1"
      }, 
      "ELSE_ONE": {
        "title": {
          "ENGLISH": "title 4 en",
          "HEBREW": "title 4 he",
          "CHINESE": "title 4 zh",
          "GERMAN": "title 4 de",
          "FRENCH": "title 4 fr",
          "SPANISH": "title 4 es",
          "ARABIC": "title 4 ar",
          "RUSSIAN": "title 4 ru",
          "HINDI": "title 4 hi"
        },
        "value": "4"
      }
    }
  });
});

module.exports = router;
