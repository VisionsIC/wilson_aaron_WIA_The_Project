// DOM Ready
$(function() {

    var $el, leftPos, newWidth;
        
    
    /*
        Main Navigation JavaScript
    */
    
    /* Add underline_fx markup w/ JavaScript */
    $("#nav_menu").append("<li id='underline_fx'></li>");
    
    /* Cache it */
    var $underline_effx = $("#underline_fx");
    
    $underline_effx
        .width($(".selected").width())
        .css("left", $(".selected a").position().left)
        .data("origLeft", $underline_effx.position().left)
        .data("origWidth", $underline_effx.width());
        
    $("#nav_menu li").find("a").hover(function() {
        $el = $(this);
        leftPos = $el.position().left;
        newWidth = $el.parent().width();
        
        $underline_effx.stop().animate({
            left: leftPos,
            width: newWidth
        });
    }, function() {
        $underline_effx.stop().animate({
            left: $underline_effx.data("origLeft"),
            width: $underline_effx.data("origWidth")
        });    
    });
	
	// When menu item is clicked
	$('ul.nav_item').click(function(){

		$('ul.nav_item').removeClass('selected');
		$(this).addClass('selected');

		
		});
	
});