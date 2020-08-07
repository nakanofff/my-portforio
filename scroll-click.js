// JavaScript Document
$('.first-text').textillate({
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