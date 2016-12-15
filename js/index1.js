
	var album=document.getElementById('album');
	var ablum_back = document.getElementById('album_back');
	var player_btn =document.getElementById('player_btn');
	album.onmouseover = function(){
		ablum_back.style.visibility="visible";
	}
	ablum_back.onmouseout = function(){
		ablum_back.style.visibility="hidden";
	}
	
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
		if(mymusic.currentTime==mymusic.duration){
				next_music();
		}
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
		var src = love.getAttribute('src');
		if (src=='img/love_red.png') {
			return false;
		}
		else{
			love.src = 'img/love_hover.png';
		}
	}
	love.onmouseout=function out1(){
		var src = love.getAttribute('src');
		if (src=='img/love_red.png') {
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
		var src = love.getAttribute('src');
		if (src=='img/love_red.png') {
			love.src='img/love.png';
		}else{
			love.src ='img/love_red.png';
		}
		
	}
	var music_times = 0;
	next.onclick = next_music;
	function next_music(){
		music_times=music_times%2;
		if (music_times==0) {
			album.src="img/music.jpg";
			mymusic.src="music/youth.mp3"
			mymusic.play();
		}else{
			album.src="img/music2.jpg";
			mymusic.src="music/fun.mp3"
			mymusic.play();
		}
		music_times++;
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
	 		left_btn.src='img/sidebar_icon1.png';
	 	}
	 	else {
	 		left_class.className='left';
	 		sroll.className='sroll1';
	 		last_p.className='db_fixed';
	 		left_btn.src='img/sidebar_icon11.png';
	 	}

	}
	left_btn.onmouseover = function(){
		if (left_class.className=='left') {
			left_btn.src='img/sidebar_icon2.png';
		}else{
			left_btn.src='img/sidebar_icon22.png';
		}
		
	}
	left_btn.onmouseout = function(){
		if (left_class.className=='left') {
			left_btn.src='img/sidebar_icon1.png';
		}else{
			left_btn.src='img/sidebar_icon11.png';
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
    
  	var all_mhz =document.getElementsByClassName('all_mhz');
  	function addHideClass(num){
  		for (var i = 0; i < all_mhz.length; i++) {
  			all_mhz[i].style.display='none';  	
  		}
  		all_mhz[num].style.display='block';
  	}
  	var num =document.getElementsByClassName('num');
  	for (var i = 0; i < num.length; i++) {
  		num[i].onmouseover = (function(i){
  			return function(){
  				addHideClass(i);
  				left_img.src=imgs[i];
  				changeBack(i);
  				num_i=i;
  			}
  		})(i)
  	}
	function changeBack(n){
		for (var i = 0; i < num.length; i++) {
			num[i].style.backgroundColor='#ddd';
		}
		num[n].style.backgroundColor='#9dd6c5';

	}
	var num_i =0 ;
	var left_img =document.getElementById('left_img');
	var imgs=['img/ad_top1.jpg','img/ad_top2.jpg','img/ad_top3.jpg','img/ad_top4.jpg','img/ad_top5.jpg','img/ad_top6.jpg'];
	setInterval(puls,3000);
	function puls() {
		 num_i=num_i%6
		 left_img.src=imgs[num_i];
		 changeBack(num_i);
		 addHideClass(num_i);
		  num_i++;
	}
	addHideClass(0);
	changeBack(0);
	mymusic.play();