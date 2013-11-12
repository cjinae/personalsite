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
				$(tileone).removeClass('img-face');
				FadeIn();
			});

			function FadeIn(){
				// setTimeout(function(){
				$(tileone).addClass('reveal-background');
				// }, 2000);
			}
	})();

	(function(){
		$('#fill-skill').click(function(){
			$('.fill').animate({height:'520px'},500);
			$('.fill').animate({height:'390px'},1600);
			$('.fill').animate({height:'260px'},1200);
			$('.fill').animate({height:'130px'},1000);
			$('.fill').animate({height:'0px'},1000);
		})
	})();

	(function(){
		var t = $("#activate-fill").offset().top;

		$(document).one("scroll",function(){
			if($(this).scrollTop() > t)
			{	
				$('.fill').animate({height:'520px'},500)
				$('.fill').animate({height:'390px'},1600)
				$('.fill').animate({height:'260px'},1200)
				$('.fill').animate({height:'130px'},1000)
				$('.fill').animate({height:'0px'},1000)
			}
		});

	})();

  (function ($) {
    // writes the string
    //
    // @param jQuery $target
    // @param String str
    // @param Numeric cursor
    // @param Numeric delay
    // @param Function cb
    // @return void
    function typeString($target, str, cursor, delay, cb) {
      $target.html(function (_, html) {
        return html + str[cursor];
      });

      if (cursor < str.length - 1) {
        setTimeout(function () {
          typeString($target, str, cursor + 1, delay, cb);
        }, delay);
      }
      else {
        cb();
      }
    }

    // clears the string
    //
    // @param jQuery $target
    // @param Numeric delay
    // @param Function cb
    // @return void
    function deleteString($target, delay, cb) {
      var length;

      $target.html(function (_, html) {
        length = html.length;
        return html.substr(0, length - 1);
      });

      if (length > 1) {
        setTimeout(function () {
          deleteString($target, delay, cb);
        }, delay);
      }
      else {
        cb();
      }
    }

    // jQuery hook
    $.fn.extend({
      teletype: function (opts) {
        var settings = $.extend({}, $.teletype.defaults, opts);

        return $(this).each(function () {
          (function loop($tar, idx) {
            // type
            typeString($tar, settings.text[idx], 0, settings.delay, function () {
              // delete
              // setTimeout(function () {
              //   deleteString($tar, settings.delay, function () {
              //     loop($tar, (idx + 1) % settings.text.length);
              //   });
              // }, settings.pause);
            });

          }($(this), 0));
        });
      }
    });

    // plugin defaults  
    $.extend({
      teletype: {
        defaults: {
          delay: 100,
          pause: 5000,
          text: []
        }
      }
    });
  }(jQuery));

  //init
  $('#target').teletype({
    text: [
      'planning / user stories / training / adoption',
     ]
  });

  $('#cursor').teletype({
    text: ['_', ' '],
    delay: 0,
    pause: 500
  });

  $('#target2').teletype({
    text: [
      'alternative solutions / thinking ouside the box'
      
     ]
  });

  $('#target3').teletype({
    text: [
      'analytics driven / budgeting / metrics '
     ]
  });

  $('#target4').teletype({
    text: [
      'html / css / javascript / ruby on rails'
     ]
  });

//global end
});
