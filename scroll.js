// JavaScript Document
		
	var option = {
  section : '.js-section', // 対象を指定
  easing: "swing", // イージングをしてい(jQueryのanimation)
  scrollSpeed: 600, // スクロール時の速度
  scrollbars: false, // スクロールバーを表示するか
};

$(function() {
	$('.shimano').click(function(){
		$('.shimano-shift-lever').css('display','flex');
		$('.campagnolo-shift-lever').css('display','none');
		$('.sram-shift-lever').css('display','none');
	});
	$('.campanolo').click(function(){
		$('.campagnolo-shift-lever').css('display','flex');
		$('.shimano-shift-lever').css('display','none');
		$('.sram-shift-lever').css('display','none');
	});
	$('.sram').click(function(){
		$('.sram-shift-lever').css('display','flex');
		$('.shimano-shift-lever').css('display','none');
		$('.campagnolo-shift-lever').css('display','none');
	});
	
	
	
	
	
$('.campagnolo-lever').css('background-image','url("record.png")');
  $.scrollify(option); 
  $('.campagnolo-shiftdown').click(function(){
  $.scrollify.next();
     $(".campagnolo-lever").css('background-image','url("recorddown.png")');
     setTimeout(function(){
        $('.campagnolo-lever').css('background-image','url("record.png")');
    },1000);
 });
     

  $('.campagnolo-shiftup').click(function(){
  $.scrollify.previous();
	$(".campagnolo-lever").css('background-image','url("recordup.png")');
	setTimeout(function(){
        $('.campagnolo-lever').css('background-image','url("record.png")');
    },1000); 
});

	$('.shimano-lever').css('background-image','url("duraace.png")');
  $.scrollify(option); 
  $('.shimano-shiftdown').click(function(){
  $.scrollify.next();
     $(".shimano-lever").css('background-image','url("duraacedown.png")');
     setTimeout(function(){
        $('.shimano-lever').css('background-image','url("duraace.png")');
    },1000);
 });
     

  $('.shimano-shiftup').click(function(){
  $.scrollify.previous();
	$(".shimano-lever").css('background-image','url("duraaceup.png")');
	setTimeout(function(){
        $('.shimano-lever').css('background-image','url("duraace.png")');
    },1000); 
});
	
	
});


		//スクロール関係↑