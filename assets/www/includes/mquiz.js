
function init(){
	var opts = {
			'menu':[{'title':'Search','link':'#select'},
			        {'title':'Results','link':'#results'}],
			'allowregister': true,
			'finallinks': [{'title':'Try another quiz','link':'#select'},
			               {'title':'View all recent results','link':'#results'}],
			'url':'http://mquiz.org/api/v1/',
			'home':'index.html#home'};
	mQ.init(opts);
	mQ.onLogin = function(){
		mQ.dataUpdate();
	}
	
	if($(location).attr('hash')){
		mQ.showPage($(location).attr('hash'));
	} else {
		mQ.showPage('#home');
	}
}
