var express = require('express');
var router = express.Router();

router.get('/form', function(req, res, next) {
    res.render('form');
});

module.exports = router;