var express = require('express'),
	app     = express(),
	Mock    = require('mockjs');
/* 学校 */
app.get('/home/banner', function (req, res) {
	var Random = Mock.Random,
		data   = Mock.mock({
			'result|3': [{
			  'id|+1': 1,
              'src|1': ['http://scimg.jb51.net/allimg/150819/14-150QZ9194K27.jpg',
                        'http://pic15.photophoto.cn/20100615/0006019058815826_b.jpg',
                        'http://img15.3lian.com/2016/h1/124/171.jpg',
                        'http://pic15.photophoto.cn/20100615/0006019058815826_b.jpg',
                        'http://pic16.photophoto.cn/20100727/0006019030380410_b.jpg'
                       ]
			}],
			'success': '@integer(0, 1)'
		});

	res.send( JSON.stringify(data, null, 4) );
});
module.exports = app;