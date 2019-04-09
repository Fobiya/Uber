$(document).ready(function() {
	
	redrawDotNav();
	
	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
		redrawDotNav();
    });
    
	/* Next/prev and primary nav btn click handlers */
	$('a.manned-flight').click(function(){
    	$('html, body').animate({
    		scrollTop:0
    	}, 650, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
	});
    $('a.frameless-parachute').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#frameless-parachute').offset().top
    	}, 1200, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.english-channel').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#english-channel').offset().top
    	}, 1050, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.Our-founders').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#Our-founders').offset().top
    	}, 1080, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	
	$('a.Why-Rabulus').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#Why-Rabulus').offset().top
    	}, 1100, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	
	
	$('a.about').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#about').offset().top
    	}, 1120, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    
    $('a.sem').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#sem').offset().top
    	}, 1140, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    
    $('a.vosem').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#vosem').offset().top
    	}, 1160, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    
    $('a.devyat').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#devyat').offset().top
    	}, 1180, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    
    /* Show/hide dot lav labels on hover */
    $('nav#primary a').hover(
    	function () {
			$(this).prev('h3').show();
		},
		function () {
			$(this).prev('h3').hide();
		}
    );
    
});

/* Scroll the background layers */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#parallax-bg1').css('top',(0-(scrolled*.25))+'px');
	$('#parallax-bg2').css('top',(0-(scrolled*.5))+'px');
	$('#parallax-bg3').css('top',(0-(scrolled*.75))+'px');
}

/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav(){
	var section1Top =  0;
	// The top of each section is offset by half the distance to the previous section.
	var section2Top =  $('#frameless-parachute').offset().top - (($('#english-channel').offset().top - $('#frameless-parachute').offset().top) / 2);
	var section3Top =  $('#english-channel').offset().top - (($('#Our-founders').offset().top - $('#english-channel').offset().top) / 2);
	var section4Top =  $('#Our-founders').offset().top - (($('#Why-Rabulus').offset().top - $('#Our-founders').offset().top) / 2);
	var section5Top =  $('#Why-Rabulus').offset().top - (($('#about').offset().top - $('#Why-Rabulus').offset().top) / 2);
	var section6Top =  $('#about').offset().top - (($('#sem').offset().top - $('#about').offset().top) / 2);
    var section7Top =  $('#sem').offset().top - (($('#vosem').offset().top - $('#sem').offset().top) / 2);
    var section8Top =  $('#vosem').offset().top - (($('#devyat').offset().top - $('#vosem').offset().top) / 2);
     var section9Top =  $('#devyat').offset().top - (($('#primary').offset().top) / 2);
    
    
    
    
	$('nav#primary a').removeClass('active');
	if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
		$('nav#primary a.manned-flight').addClass('active');
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
		$('nav#primary a.frameless-parachute').addClass('active');
	} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
		$('nav#primary a.english-channel').addClass('active');
		
	} else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top){
		$('nav#primary a.Our-founders').addClass('active');
		
	} else if ($(document).scrollTop() >= section5Top && $(document).scrollTop() < section6Top){
		$('nav#primary a.Why-Rabulus').addClass('active');
		
	} else if ($(document).scrollTop() >= section6Top && $(document).scrollTop() < section7Top){
		$('nav#primary a.about').addClass('active');
        
	} else if ($(document).scrollTop() >= section7Top && $(document).scrollTop() < section8Top){
		$('nav#primary a.sem').addClass('active');
        
	} else if ($(document).scrollTop() >= section8Top && $(document).scrollTop() < section9Top){
		$('nav#primary a.vosem').addClass('active');

    } else if ($(document).scrollTop() >= section6Top){
		$('nav#primary a.devyat').addClass('active');
	}
	
}
