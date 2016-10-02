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
		setTimeout(hidden,2000);
	}
	function hidden(){
		hid.style.display="none";
		return false;
	}
}(window))