$(document).ready(function() {


    $.each($('[data-valign]').children('li'), function (index, val) {
      var heightBias = parseFloat($(val).closest('ul').data('valign')),
          getHeight = $(val).outerHeight(false),
          paddingTop = Math.floor((heightBias - getHeight) / 2);
      if(heightBias > getHeight) {
        $(val).css({ 'padding-top': paddingTop + 'px' });
      }
    });

	});