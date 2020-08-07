// JavaScript Document
$(function(){
    setTimeout(function(){
         $('.first-view').fadeOut(500,'swing');
         $('.title-en,.title-jp').textillate({
	loop: false,
    minDisplayTime: 1000,
    initialDelay: 0,
    autoStart: true,
		
    in: {
         effect: 'fadeInRight',
         delayScale: 1.5,
         delay: 50,
         sync: false,
         shuffle: true,
        },
    out: {
		effect: 'hinge',
		delayScale: 1.5,
            delay: 50,
               sync: false,
               shuffle: false
               }
		
      });
		
    },3000);
	$('.first-text , .message').textillate({
	loop: false,
    minDisplayTime: 1000,
    initialDelay: 0,
    autoStart: true,
		
    in: {
         effect: 'fadeInRight',
         delayScale: 1.5,
         delay: 50,
         sync: false,
         shuffle: true,
        },
    out: {
		effect: 'hinge',
		delayScale: 1.5,
            delay: 50,
               sync: false,
               shuffle: false
               }
		
      });
	$('.menu-bottun').click(function(){
		$('.menu').css('display','flex');
	});
});