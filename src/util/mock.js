import Mock from 'mockjs';

export banner Mock.mock('http://taoa.com?banner', {
		'list|3': [{
    'id|+1': 1,
    'src': '@image()',
    }]

});