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
app.get('/home/shoplist', function (req, res) {
	var Random = Mock.Random,
	    data = Mock.mock({
	    	retcode: 1,
	        retmsg: '查询成功',
	        data: {
	            'total': 20,//一共20页
	            'records': 10,//每页10条记录
	            'page': 1,
	            'rows|10': [{
	                'id|+1': 1,
	                'sid|+1': 1,
	                'price': '@natural(1, 500)',
	                'sell': '@natural(0,500)',
	                'time': Random.date('T'),
	                'remainmember': '@natural(100, 1000)',
	                'joinedmember': '@natural(100, 1000)',
	                'totalmember': '@natural(100, 1000)',
	                'title': '@title(6, 15)',
	                'cover|1': ['http://scimg.jb51.net/allimg/150819/14-150QZ9194K27.jpg',
                        'http://pic15.photophoto.cn/20100615/0006019058815826_b.jpg',
                        'http://img15.3lian.com/2016/h1/124/171.jpg',
                        'http://pic15.photophoto.cn/20100615/0006019058815826_b.jpg',
                        'http://pic16.photophoto.cn/20100727/0006019030380410_b.jpg'
                       ]
	            }]
	        }
	    })
	    res.send( JSON.stringify(data, null, 4) );
});
// 生成商品列数据
app.get('/goods/detail', function (req, res) {
	var Random = Mock.Random,
        data=Mock.mock({
		      "retcode": 1,
		      "retmsg": "查询成功",
		      "data": {
		          'id|+1': 1,
	              'sid|+1': 1,
		          "step": 1,
		          "periods|+1": 100000001,
		          "title": "@title(6, 15)",
		          "totalmember": "@natural(100, 1000)",
		          "joinedmember": "@natural(100, 1000)",
		          "remainmember": "@natural(100, 1000)",
		          "downtime": "@natural(1, 100)",
		          "publishtime": Random.date('T'),
		          "perprice": "@natural(1, 100)",
		          "isshow": "@natural(0, 2)",
		          "caipiaotype": "100",
		          "wuser": "{ \"buycount\": 119,\"bingocode\": \"10000069\", \"nickname\": \"抽奖小王子\",\"mid\": 100000, \"areaip\": \"局域网,10.1.1.51\", \"portrait\":\"/upload/igame/images/portrait/2016-03-23/8c714e38-e5a9-4117-81e1-4e3a162727f2.jpg\" }",
		          "buyInfo": {
		              "oid": 2,
		              "buycount": 2,
		              "buycodes": "10000021, 10000024"
		          },
		          "buyuser|5":[{
		              "name":Random.cname(),
		              "ip":Random.ip(),
		              "times":"@natural(1, 5)",
		              'src|1': ['http://scimg.jb51.net/allimg/150819/14-150QZ9194K27.jpg',
                        'http://pic15.photophoto.cn/20100615/0006019058815826_b.jpg',
                        'http://img15.3lian.com/2016/h1/124/171.jpg',
                        'http://pic15.photophoto.cn/20100615/0006019058815826_b.jpg',
                        'http://pic16.photophoto.cn/20100727/0006019030380410_b.jpg'
                       ]
		          }],
		          "images": [
		              "http://dummyimage.com/640x400/339966/333&text=Banner1",
		              "http://dummyimage.com/640x400/337ab7/333&text=Baner2",
		              "http://dummyimage.com/640x400/ffcc33/333&text=Banner3"
		          ],
		          "content": "<p><img src=\"http:\/\/bs.baidu.com\/dulife\/56cc259892e35.jpg\"><\/p>\n<p><img src=\"http:\/\/bs.baidu.com\/dulife\/56cc2598ac0d4.jpg\"><\/p>\n<p><img src=\"http:\/\/bs.baidu.com\/dulife\/56cc2598a3d73.jpg\"><\/p>\n<p><img src=\"http:\/\/bs.baidu.com\/dulife\/56cc2598b07d3.jpg\"><\/p>\n<p><img src=\"http:\/\/bs.baidu.com\/dulife\/56cc2598af7ab.jpg\"><\/p>\n<p><img src=\"http:\/\/bs.baidu.com\/dulife\/56cc2598ad690.jpg\"><\/p>\n<p><img src=\"http:\/\/bs.baidu.com\/dulife\/56cc2598c7a1a.jpg\"><\/p>\n<p><img src=\"http:\/\/bs.baidu.com\/dulife\/56cc25b18582d.jpg\"><\/p>\n<p><img src=\"http:\/\/bs.baidu.com\/dulife\/56cc259904e93.jpg\"><\/p>\n<p><img src=\"http:\/\/bs.baidu.com\/dulife\/56cc25993e6b3.jpg\"><\/p>\n<p><img src=\"http:\/\/bs.baidu.com\/dulife\/56cc25994a2b1.jpg\"><\/p>\n<p><img src=\"http:\/\/bs.baidu.com\/dulife\/56cc25995eb24.jpg\"><\/p>"
		      }
        })
	res.send( JSON.stringify(data, null, 4) );
});
//登录
app.post('/user/login', function (req, res) {
	let data = {
		res:''
	}
	if(res.name == 'admin'&&res.password == '123456'){
		data.res = true;
	} else{
		data.res =false
	}
    res.send( JSON.stringify(data, null, 4) );
});
module.exports = app;