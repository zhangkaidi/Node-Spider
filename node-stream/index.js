var url = 'http://img.taopic.com/uploads/allimg/120727/201995-120HG1030762.jpg';
var request = require('request'),
fs = require('fs');
request(url).pipe(fs.createWriteStream('test.jpg'));
