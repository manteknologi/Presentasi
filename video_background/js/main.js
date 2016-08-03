$(function() {
    
  'use strict';
 
/* =======================================
    cool Achieve Count
======================================= */
		function count($this){
		var current = parseInt($this.html(), 10);
		current = current + 1; /* Where 50 is increment */	
		$this.html(++current);
			if(current > $this.data('count')){
				$this.html($this.data('count'));
			} else {    
				setTimeout(function(){count($this)}, 50);
			}
		}        	
		$(".stat-count").each(function() {
		  $(this).data('count', parseInt($(this).html(), 10));
		  $(this).html('0');
		  count($(this));
		});
 
 

 
/* =======================================
         single Page Nav
=======================================*/
	// Prevent console.log from generating errors in IE for the purposes of the demo
	if ( ! window.console ) console = { log: function(){} };

	// The actual plugin
	$('.single-page-nav').singlePageNav({
		offset: $('.single-page-nav').outerHeight(),
		filter: ':not(.external)',
		updateHash: true,
		beforeStart: function() {
			console.log('begin scrolling');
		},
		onComplete: function() {
			console.log('done scrolling');
		}
	});

/* =======================================
     PRELOADER                     
======================================= */
  // makes sure the whole site is loaded
  $(window).on('load', function() {
    // will first fade out the loading animation
    $("#loader").fadeOut();
    //then background color will fade out slowly
    $("#loader-wrapper").delay(200).fadeOut("slow");

  }); 
  
  
/* =======================================
		WOW ANIMATION
======================================= */
    var wow = new WOW({ mobile: false });
    wow.init();

	
/* =======================================
          How Work Tab
=======================================*/
$(document).ready(function() {
	$("div.bhoechie-tab-menu>div.list-group>a").on('click', function(e) {
		e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
        $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");	
	});
});

/* =======================================
      Gallery Section : mixItUp jQuery 
=======================================*/
$('.project-list').mixItUp({
	animation: {
		effects: 'fade stagger(50ms)',
		reverseOut: true,
		staggerSequence: function(i){
			return (2*i) - (5*((i/3) - ((1/3) * (i%3))));
		}
	}
});

		
/* =======================================
     Client Section  
=======================================*/
  $("#client").owlCarousel({
    autoPlay: true, //Set AutoPlay to 3 seconds
    items : 5,
	loop:true,
	margin:10,
	touchDrag: true,
	mouseDrag: true,
	pagination:false,
	nav:true,
	dots: true,
  });	
  
		
/* =======================================
        Testimonial Section 
=======================================*/
  $("#testimonial").owlCarousel({
    autoPlay: 6000, //Set AutoPlay to 3 seconds
    items : 1,
	loop:true,
	margin:10,
	singleItem:true,
	touchDrag: true,
	mouseDrag: true,
	pagination:true,
	nav:true,
	dots: true,
  });	
 
/* =======================================
    collapse the navbar on scroll
=======================================*/
// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

 

/* =======================================
	  Google map
=======================================*/
	$(function() {
		new Maplace({						
			locations: [{
			lat: 45.9, 
			lon: 10.9,
			zoom: 8
		}],
		styles: {
			'Night': [{
				featureType: 'all',
				stylers: [
					{ invert_lightness: 'true' }
				]
			}]
		 
		},
	 
		}).Load();	
	});
	
		
	
});		