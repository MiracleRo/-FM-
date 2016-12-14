(function(){
	var album=document.getElementById('album');
	var ablum_back = document.getElementById('album_back');
	album.onmouseover = function(){
		ablum_back.style.visibility="visible";
	}
	ablum_back.onmouseout = function(){
		ablum_back.style.visibility="hidden";
	}
	var player_btn =document.getElementById('player_btn');
	player_btn.onmouseover = function(){
		player_btn.src="img/player_btn_hover.png";
	}
	player_btn.onmouseout =function(){
		player_btn.src='img/player_btn.png';
	}
	var mymusic =document.getElementById('my_music');
	var con_back = document.getElementById('con_back');
	player_btn.onclick = function(){
			mymusic.pause();
			con_back.style.visibility="visible";
			player_btn.style.visibility='hidden';
	}
	con_back.onclick =function(){
			mymusic.play();
			con_back.style.visibility='hidden';
			player_btn.style.visibility='visible';
	}
	mymusic.ontimeupdate =function(){
		var dur =mymusic.duration-mymusic.currentTime;
		var time_div=document.getElementById('time_div');
		var time_min = Math.floor(dur/60);
		var time_sec = parseInt(dur%60);
		time_div.innerHTML="-"+zero(time_min)+":"+zero(time_sec);
		var cur_div =document.getElementById('cur_div');
		var dur_div = document.getElementById('dur_div');
		cur_div.style.width=mymusic.currentTime/mymusic.duration*220+"px";
	}
	function zero(a){
		if (a<10) {
			return '0'+a;
		}else{
			return a;
		}
	}
	var love = document.getElementById('love_icon') ;
	var del= document.getElementById('del_icon') ;
	var next= document.getElementById('next_icon') ;
	love.onmouseover=function over1(){
		if (love.src=='file:///D:/fm/img/love_red.png') {
			return false;
		}
		else{
			love.src = 'img/love_hover.png';
		}
	}
	love.onmouseout=function out1(){
		if (love.src=='file:///D:/fm/img/love_red.png') {
			return false;
		}
		else{love.src = 'img/love.png';
		}
	}
	del.onmouseover=function(){
		del.src = 'img/del_hover.png';
	}
	del.onmouseout=function(){
		del.src = 'img/del.png';
	}
	next.onmouseover=function(){
		next.src = 'img/next_hover.png';
	}
	next.onmouseout=function(){
		next.src = 'img/next.png';
	}
	love.onclick=function(){
		if (love.src=='file:///D:/fm/img/love_red.png') {
			love.src='img/love.png';
		}else{
			love.src ='img/love_red.png';
		}
		
	}
	var like =document.getElementById('like');
	var listen_like =document.getElementsByClassName('listen_like')[0];
	listen_like.onmouseover = function(){
		like.src = 'img/like_hover.png';
	}
	listen_like.onmouseout=function(){
		like.src = 'img/like.png';
	}
	var douban =document.getElementById('douban');
	var weibo=document.getElementById('weibo');
	var wechat=document.getElementById('wechat');
	var qq=document.getElementById('qq');
	var txweibo=document.getElementById('txweibo');
	var renren=document.getElementById('renren');
	douban.onmouseover =function(){
		douban.src ='img/douban_hover.png';
	}
	douban.onmouseout = function(){
		douban.src ='img/douban.png';
	}
	weibo.onmouseover =function(){
		weibo.src ='img/weibo_hover.png';
	}
	weibo.onmouseout = function(){
		weibo.src ='img/weibo.png';
	}
	wechat.onmouseover =function(){
		wechat.src ='img/wechat_hover.png';
	}
	wechat.onmouseout = function(){
		wechat.src ='img/wechat_hover.png';
	}
	qq.onmouseover =function(){
		qq.src ='img/qq_hover.png';
	}
	qq.onmouseout = function(){
		qq.src ='img/qq.png';
	}
	txweibo.onmouseover =function(){
		txweibo.src ='img/txweibo_hover.png';
	}
	txweibo.onmouseout = function(){
		txweibo.src ='img/txweibo.png';
	}
	renren.onmouseover =function(){
		renren.src ='img/renren_hover.png';
	}
	renren.onmouseout = function(){
		renren.src ='img/renren.png';
	}
	var share =document.getElementsByClassName('share')[0];
	var hid =document.getElementsByClassName('hid_icon')[0];
	share.onmouseover =function(){
		hid.style.display='inline';
	}
	share.onmouseout =function(){
		var time = setTimeout(hidden,2000);
	}
	function hidden(){
		hid.style.display="none";
		return false;
	}
	var down =document.getElementById('down');
	down.onmouseover =function(){
		down.src = 'img/down_hover.png';
	}
	down.onmouseout =function(){
		down.src ='img/down.png';
	}
	var mhz_b = document.getElementsByClassName('mhz_b');
	for(var i =0 ; i<mhz_b.length;i++){
		mhz_b[i].onclick=function(){
			for(var j =0; j<mhz_b.length;j++){
				mhz_b[j].style.backgroundColor = 'rgb(212, 222, 217)';
			}
			this.style.backgroundColor = '#9dd6c5';
		}
	}
	var left_class = document.getElementById('left');
	var left_btn =document.getElementById('left_btn');
	var sroll = document.getElementById('sroll');
	var last_p = document.getElementById('last_p');
	 left_btn.onclick=function(){
	 	if (left_class.className=='left') {
	 		left_class.className="left1";
	 		sroll.className='sroll';
	 		last_p.className='db';
	 		
	 	}
	 	else {
	 		left_class.className='left';
	 		sroll.className='sroll1';
	 		last_p.className='db_fixed';
	 		
	 	}

	}
	var num =document.getElementsByClassName('num');
	for (var i =0;i<num.length;i++){
		num[i].onmouseover = function () {
			this.style.backgroundColor='#9dd6c5';
		}
		num[i].onmouseout=function () {
			this.style.backgroundColor='#ddd';
		}
	}
	var mhz_div=document.getElementsByClassName('mhz_div');
    var ad_hid =document.getElementsByClassName('hid_ad');
    for (var i =0 ;i<mhz_div.length;i++){
		mhz_div[i].onmouseover=(function (i) {
			return function () {
				ad_hid[i].style.visibility = 'visible';
			}
		})(i)
		mhz_div[i].onmouseout=(function (i) {
			return function () {
				ad_hid[i].style.visibility = 'hidden';
			}
		})(i)
    }
	// var left_img =document.getElementById('left_img');
	// var imgs = ['img/left1.jpg','img/left2.jpg','img/left3.jpg','img/left4.jpg','img/left5.jpg'];
	// 	setInterval(puls,2000);
	// function puls() {
	// 	 i++;
	// 	 left_img.src=imgs[i%5];
	// }
}(window))