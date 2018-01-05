var fs = require('fs');
var cheerio = require('cheerio');
var http = require('http');
var request = require('request');

fs.readFile('herolist.json', 'utf-8',function (err, data) {
	if (err) {
		return console.error(err);
		}else{
			var data = JSON.parse(data),
			img_filename,
			_ename,
			imgUrl;
			data.forEach(function(item, index){
				_ename = item.ename,
				_cname = item.cname, 
				img_filename= _cname + '.jpg',
				imgUrl = 'http://game.gtimg.cn/images/yxzj/img201606/heroimg/'+_ename+'/'+_ename+'.jpg';
				request(imgUrl).pipe(fs.createWriteStream('./image/'+img_filename));
			})
		}
});

