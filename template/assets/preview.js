( function( $ ){

	$("body").css({position:"relative"});

	// .preview-toggle-btn
	$("<div></div>",{
		class: "preview-toggle-btn",
		"style": "position: fixed; z-index: 99999; top: 150px; right: 10px; width: 40px; height: 37px; background: url(assets/preview-toggle-bg.png) no-repeat center top; cursor: pointer;"
	}).prependTo("body");

	// .preview-container
	$("<div></div>",{
		class: "preview-container",
		"style": "position: absolute; z-index: 9999;top: 0; bottom: 0; left: 0; display: none; width: 100%; height: 100%; background: rgba(0,0,0,0.5) url(assets/preview.jpg) no-repeat center top; border-left: 2px solid red; border-right: 2px solid red;"
	}).prependTo("body");

	// event handler
	$( ".preview-toggle-btn, .preview-container" ).on("click", function(){ $(".preview-container").fadeToggle(500); });

})( jQuery );