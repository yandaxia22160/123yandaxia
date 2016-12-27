//===============城市切换=============================
$('.head1-left-d').mouseover(function  () {
	$('.list1').css({display:'block'});
	$('.list').css({display:'block'});
	$('.head1-left-d').css({background:'#fff url(images/捕获_03.png) 0px 6px no-repeat',border:'1px solid #cccccc',borderBottom:'none',borderTop:'none'});
})
$('.head1-left-d').mouseout(function  () {
	$('.list1').css({display:'none'});
	$('.list').css({display:'none'});
	$('.head1-left-d').css({background:'#E3E4E5 url(images/定位.png) 0px 6px no-repeat',border:'none'});
})
$('.list1 li').click(function(){
	$('.list1 li').css({background:'#fff',color:'#9d9d9d'});
	$(this).css({background:'#EF0413',color:'#fff'});
	$('.head1-left-d span').html($(this).html());
})
//======================城市切换结束=============================
//===============我的京东，客户服务，网站导航====================
	function mousehover(obj1,obj2,obj3){
		obj1.hover(function(){
			$(this).css({background:'#fff url(images/233.png) 60px 10px no-repeat',
				border:'1px solid #cccccc',borderBottom:'none',borderTop:'none'});
			obj2.css('display','block');
			obj3.css('display','block');
		},function(){
			$(this).css({background:'#e3e4e5 url(images/下拉.png) 60px 10px no-repeat',
				border:'1px solid rgba(255,255,255,0)',borderBottom:'none'});
			obj2.css('display','none');
			obj3.css('display','none');
		})
	}
	mousehover($('.head1-right-3'),$('.wdjd'),$('.whiteline1'));
    mousehover($('.head1-right-6'),$('.wdjd-k'),$('.whiteline1'));
    mousehover($('.head1-right-7'),$('.wzdh'),$('.whiteline1'));

//===============我的京东，客户服务，网站导航结束==================
// ===============大图滚动部分开始==================================
var a=0,time2=null,b=1;
var flag=false;
$('.con1-2-1-inner').scrollLeft($('.con1-2-1-tu img').eq(0).width());
function autoMove(){
    a++;
	if (a>=$('#num li').length) {
		a=0;
	};
	b++;
	if (b>=$('.con1-2-1-tu img').length){                           
		b=2;
	$('.con1-2-1-inner').scrollLeft($('.con1-2-1-tu img').eq(0).width());
	};
	move();
}
time2=setInterval(autoMove,2000);
function move(){
	   $('.con1-2-1-inner').animate({
			scrollLeft:$('.con1-2-1-tu img').eq(0).width()*b,
		},function(){
			flag=true;
		})
	     $('#num li').eq(a).addClass('select').siblings().removeClass('select'); 
}move();
// $('#left').click(function (){
	
// 	if (flag) {
// 		clearInterval(time2);
// 		flag=false;
// 	a-- ;
// 	if (a<0) {
// 		a=$('#num li').length-1;
// 	};
// 	b--;
// 	if (b<0) {
// 		b=$('#con img').length-3;
// 		$('.con1-2-1-inner').scrollLeft($('img').eq(0).width()*(b+1));
// 	};
// 	move();
// 	time2=setInterval(autoMove,2000);
// 	}
// })
//================大图滚动部分结束==================================
//=================右边tab切换开始==================================
$('.cuxiao span').eq(0).mouseover(function(){
	$('.cuxiao span').eq(0).css({borderBottom:'2px solid red'})
	$('#neirong1').css({display:'block'})
})
$('.cuxiao span').eq(1).mouseover(function(){
	$('.cuxiao span').eq(1).css({borderBottom:'2px solid red'})
	$('#neirong2').css({display:'block'})
})
$('.cuxiao span').eq(0).mouseout(function(){
	$('.cuxiao span').eq(0).css({borderBottom:'none'})
	$('#neirong1').css({display:'none'})
})
$('.cuxiao span').eq(1).mouseout(function(){
	$('.cuxiao span').eq(1).css({borderBottom:'none'})
	$('#neirong2').css({display:'none'})
})
//==============tab切换结束=========================================
//===============头部菜单选择开始====================================
$('.con1-1 p').mouseover(function(){
	var i=$('.con1-1 p').index(this);
	$('.con1-1 p').eq(i).css({background:'gray'})
	$('.con1-4').css({display:'block'});
	})
	
$('.con1-1 p').mouseout(function(){
	var i=$('.con1-1 p').index(this);
	$('.con1-1 p').eq(i).css({background:'#6E6568'})
	$('.con1-4').css({display:'none'});
})

//===============头部菜单选择结束=========================================
//================tab切换开始=============================================
$('.ipt input').focus(function(){
	$('.ipt input').val('con1-3-5-2-middle');
})
$('.con1-3-5-2-top2 span').mouseover(function(){
	var i=$('.con1-3-5-2-top2 span').index(this);
	$('.con1-3-5-2-top2 span').eq(i).addClass('select').siblings().removeClass('select');
	$('.con1-3-5-2-top2 span').eq(i).css({color:'white'}).siblings().css({color:'gray'});
    $('.con1-3-5-2-middle').eq(i).css({display:'block'}).siblings().css({display:'none'});
})
//================tab切换结束=============================================