(function($) {
/* CONSOLE WELCOME MESSAGE */
var today = new Date()
var curHr = today.getHours()
if (curHr < 12) {
	console.log('Good morning from Ideal Positions! (^_^) Like to code cool stuff? Email us your resume.')
} else if (curHr < 17) {
	console.log('Buenas tardes de Ideal Positions! (^_^) Like to code cool stuff? Email us your resume.')
} else {
	console.log('Guten Abend von Ideal Positions! (^_^) Like to code cool stuff? Email us your resume.')
}

/*Nanobar*/
var colorbar = new Nanobar({target: document.getElementById('color')});
colorbar.go(100);

/*Loading Cursor*/
(function($) {
	$(function() {
		var	$window = $(window),
			$body = $('body');
		$body.addClass('is-loading');
		$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});
	});
})(jQuery);

// Check if JQuery has loaded
(function() {
if (window.jQuery) {
	console.log("jQuery "+window.jQuery.fn.jquery+" is in this Castle ヽ(´ー｀)ノ");
} else{
	console.log("jQuery is in another Castle ¯\\_(ツ)_/¯")
}
}());

//PAGE SCROLL INDICATOR
(function() {
//THIS IS WHERE WE APPLY OPACITY TO THE ARROW
	$(window).scroll( function(){
		//get scroll position
		var topWindow = $(window).scrollTop();
		//MULTIPLY BY 1.5 SO THE ARROW WILL BECOME TRANSPARENT HALF-WAY UP THE PAGE
		var topWindow = topWindow * 1.5;
		//GET HEIGHT OF WINDOW
		var windowHeight = $(window).height();
		//SET POSITION AS PERCENTAGE OF HOW FAR THE USER HAS SCROLLED
		var position = topWindow / windowHeight;
		//invert the percentage
		position = 1 - position;
		//DEFINE ARROW OPACITY AS BASED ON HOW FAR UP THE PAGE THE USER HAS SCROLLED
		//NO SCROLLING = 1, HALF-WAY UP THE PAGE = 0
		$('.arrow-wrap').css('opacity', position);
	});
}());

//Smooth Scroll to content when click Page Scroll Indicator
// $(".arrow-wrap").click(function() {
// 	$('html, body').animate({
// 		scrollTop: $("#one").offset().top
// 	}, 1000);
// });


// MODAL
//$('.inline').modaal();

//PAGE LENGTH INDICATOR
// http://alssndro.github.io/page-scroll-indicator/jquery-example.html
(function() {
	var PageScrollIndicator = PageScrollIndicator || {};

	PageScrollIndicator.createProgressBar = function(progressBarLocation, contentToTrack) {

	// CREATE THE CONTAINER DIV
	var $progressContElement = $("<div class='progresscont'></div>");

	// CREATE THE PROGRESS BAR ITSELF
	var $progressBarElement = $("<div class='progressbar'></div>");
	$progressBarElement.css("width", "0%");

	$progressContElement.append($progressBarElement);

	var $locationObject = $(progressBarLocation);
	$locationObject.prepend($progressContElement);

	// EVENT HANDLER THAT UPDATES THE WIDTH OF THE PROGRESS BAR BASED
	// ON HOW FAR THE CONTENTTOTRACK ELEMT HAS BEEN SCROLLED
	$(window).scroll(function(e){
		var pageHeight = $(window).height();
		var $container = $(contentToTrack);

	// ADJUSTED HEIGHT
	var adjustedHeight = $container.innerHeight() - pageHeight;
	var progress = (($(window).scrollTop() / adjustedHeight) * 100);
	$progressBarElement.css("width", progress + "%");
	});
}
PageScrollIndicator.createProgressBar("body", "#page");
}());

jQuery(document).ready(function($){
	// BROWSER WINDOW SCROLL (IN PIXELS) AFTER WHICH THE "BACK TO TOP" LINK IS SHOWN
	var offset = 300,
		//BROWSER WINDOW SCROLL (IN PIXELS) AFTER WHICH THE "BACK TO TOP" LINK OPACITY IS REDUCED
		offset_opacity = 1200,
		//DURATION OF THE TOP SCROLLING ANIMATION (IN MS)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.top');

	//HIDE OR SHOW THE "BACK TO TOP" LINK
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('is-visible') : $back_to_top.removeClass('is-visible fade-out');
		if( $(this).scrollTop() > offset_opacity ) {
			$back_to_top.addClass('fade-out');
		}
	});

	//SMOOTH SCROLL TO TOP
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
			}, scroll_top_duration
		);
	});

});


//Lightbox
var lightbox = $('.gallery a').simpleLightbox();

//Shave
// $(".hero__copy p").shave(70)

//Owl Carousel
// // $(".owl-carousel").owlCarousel({
// // 	navigation : true, // Show next and prev buttons
// // 	slideSpeed : 300,
// // 	paginationSpeed : 400,
// // 	singleItem:true,
// // 	lazyLoad : true
// // });



})(jQuery);