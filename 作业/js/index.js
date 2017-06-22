window.onload=function(){
	var oAu=document.querySelector('audio');
	var aA=document.querySelectorAll('section ul li a');
	var oDiv1=document.querySelector('#d1');
	var oDiv2=document.querySelector('#bfsx');
	var aBtn=document.querySelectorAll('#d2 a');
	var aBtn2=document.querySelectorAll('#bfsx div');
	var aSpan=document.querySelectorAll('#d2 p span');
	
	var OK1=true;
	var OK2=true;
	var now=0;
	var now2=0;
	var arr=['mp3/Beyond - 真的爱你.mp3','mp3/阿木 - 有一种爱叫做放手.mp3','mp3/果味VC - 躁不完的青春.mp3','mp3/海龟先生 - 热血新纪录.mp3','mp3/黑鸭子、高安 - 红尘情歌.mp3','mp3/金南玲 - 逆流成河.mp3','mp3/冷漠、张冬玲 - 我在红尘中遇见你.mp3','mp3/李克勤 - 红日.mp3',
			'mp3/罗琦 - 让我自己来.mp3','mp3/马条 - 遥远的精彩.mp3','mp3/南征北战 - 骄傲的少年.mp3','mp3/誓言 - 求佛.mp3','mp3/铁风筝 - 新生.mp3','mp3/王童语 - 丫头.mp3','mp3/王洋 - 年轻就是不一样.mp3','mp3/许嵩、何曼婷 - 素颜.mp3',
			'mp3/庄心妍 - 以后的以后.mp3','mp3/左右乐队 - 我走在我的路.mp3']
	
	for(var i=0;i<arr.length;i++){
		console.log(arr[i]);
	}
	for(var i=0;i<aA.length;i++){
		aA[i].index=i;
		aA[i].onclick=function(){
			now=this.index;
			tab();
		}
	}
	
	function tab(){
		for(var i=0;i<aA.length;i++){
			aA[i].className='';
		}
		aA[now].className='on';
		oAu.src=arr[now];
		oAu.play();
		oDiv1.className='xuanzhuan';
		aBtn[1].style.background='url(img/bofang.png) no-repeat 0.1rem center';
		aSpan[0].innerHTML=aA[now].innerHTML.split('-')[1];
		aSpan[1].innerHTML=aA[now].innerHTML.split('-')[0];
		OK1=false;
	}
	function fnRnd(n,m){
		return Math.floor(Math.random()*(m-n)+n);
	}
	
//	播放按钮
	aBtn[1].onclick=function(){
		OK1=!OK1;
		if(OK1){
			oAu.pause();
			oDiv1.className='';
			aBtn[1].style.background='url(img/zhanting.png) no-repeat 0.1rem center';
		}else{
			oAu.play();
			oDiv1.className='xuanzhuan';
			aBtn[1].style.background='url(img/bofang.png) no-repeat 0.1rem center';
		}
	}
	
//	播放顺序按钮
	aBtn[3].onclick=function(){
		OK2=!OK2;
		if(OK2){
			oDiv2.style.display='none';
		}else{
			oDiv2.style.display='block';
		}
	}
	
	for(var i=0;i<aBtn2.length;i++){
		aBtn2[i].index=i;
		aBtn2[i].onclick=function(){
			now2=this.index;
			oDiv2.style.display='none';
			OK2=true;
			switch (now2){
				case 0:
					aBtn[3].style.background='url(img/sxbf.png) no-repeat 0.1rem center';
					break;
				case 1:
					aBtn[3].style.background='url(img/sjbf.png) no-repeat 0.1rem center';
					break;
				case 2:
					aBtn[3].style.background='url(img/dqxh.png) no-repeat 0.1rem center';
					break;
			}
		}
	}
	
//	下一曲
	aBtn[2].onclick=function(){
		if(now2==0){
			now++;
			if(now==aA.length){
				now=0;
			}
			tab();
		}
		if(now2==1){
			now=fnRnd(0,aA.length);
			tab();
		}
		if(now2==2){
			tab();
		}
	}
	
//	上一曲
	aBtn[0].onclick=function(){
		if(now2==0){
			now--;
			if(now==-1){
				now=aA.length-1;
			}
			tab();
		}
		if(now2==1){
			now=fnRnd(0,aA.length);
			tab();
		}
		if(now2==2){
			now=fnRnd(0,aA.length);
			tab();
		}
	}
	
//	自动下一曲
	setInterval(function(){
		oAu.onended=function (){
			if(now2==0){
				now++;
				if(now==aA.length){
					now=0;
				}
				tab();
			}
			if(now2==1){
				now=fnRnd(0,aA.length);
				tab();
			}
			if(now2==2){
				tab();
			}
		}
	},1000)
	
}
