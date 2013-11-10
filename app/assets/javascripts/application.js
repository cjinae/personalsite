// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks


jQuery(function($){
	// $('.tile__quarter--live').hover(function() {
	// 	$(this).removeClass('desaturate');
	// }, function(){
	// 	$(this).addClass('desaturate');
	// });

	(function(e){
			var tileone = $('#one')
			var tiletwo = $('#two')
			var tilethree = $('#three')
			var tilefour = $('#four')
			$('.reveal-image--one').click(function(e) {
				$(tileone).removeClass('img-first');
				FadeIn();
			});

			function FadeIn(){
				// setTimeout(function(){
				$(tileone).addClass('reveal-background');
				// }, 2000);
			}
	})();

	// (function(){
	// 	$('#fill-skill').click(function(){
	// 		$('.fill').animate({height:'520px'},500);
	// 		$('.fill').animate({height:'390px'},1600);
	// 		$('.fill').animate({height:'260px'},1200);
	// 		$('.fill').animate({height:'130px'},1000);
	// 		$('.fill').animate({height:'0px'},1000);
	// 	})
	// 	$('#unfill-skill').click(function(){
	// 		$('.fill').animate({height:'520px'},500);
	// 	})
	// })();

	(function(){
		var t = $("#activate-fill").offset().top;

		$(document).scroll(function(){
			if($(this).scrollTop() > t)
			{	
				$('.fill').stop().animate({height:'520px'},6000);
				$('.fill').stop().animate({height:'390px'},6000);
				$('.fill').stop().animate({height:'260px'},6000);
				$('.fill').stop().animate({height:'130px'},6000);
				$('.fill').stop().animate({height:'0px'},6000);
			}
		});

	})();


//global end
});
