var elem = document.getElementById('primary-nav');
if(elem){
  var nav = responsiveNav("#primary-nav", { // Selector
    animate: true, // Boolean: Use CSS3 transitions, true or false
    transition: 284, // Integer: Speed of the transition, in milliseconds
    label: "menu", // String: Label for the navigation toggle
    insert: "before", // String: Insert the toggle before or after the navigation
    customToggle: "", // Selector: Specify the ID of a custom toggle
    closeOnNavClick: false, // Boolean: Close the navigation when one of the links are clicked
    openPos: "relative", // String: Position of the opened nav, relative or static
    navClass: "nav-collapse", // String: Default CSS class. If changed, you need to edit the CSS too!
    navActiveClass: "js-nav-active", // String: Class that is added to  element when nav is active
    jsClass: "js", // String: 'JS enabled' class which is added to  element
    init: function(){}, // Function: Init callback
    open: function(){}, // Function: Open callback
    close: function(){} // Function: Close callback
  });
}

(function($){

  $(function(){


  	// owl carousel
    $(".slider, .slider1").owlCarousel({
      items: 1,
      autoplay: true,
      loop: true,
      animateOut: 'fadeOut'
    });




  });  // document ready ends

}(jQuery));


$(document).ready(function() {
		$(".fancybox").fancybox({


		});
	});