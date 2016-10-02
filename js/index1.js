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
}(window))