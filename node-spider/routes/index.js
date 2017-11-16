var express = require('express');
var fs = require('fs');
var http = require('http');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('index', { title: '一个实验小爬虫' });
});
module.exports = router;
