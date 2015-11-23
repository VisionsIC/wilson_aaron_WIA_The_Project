// JavaScript Document
// Coded by Aaron Wilson
// for WIA - Full Sail University

$(document).ready(function() {
// begin Ready

	//...................................................
	// When the form changes
	$('#storemap_form').change(function() {
	
		var selected_goods = $('#storemap_form option:selected').val();
		if (selected_goods == 'ALL'){
			$('a.star').slideDown(1000);
		}else{
			$('a.star[goods = "'+selected_goods+'"]').slideDown(1000);
			$('a.star[goods != "'+selected_goods+'"]').slideUp(1000);
		}
		
	});
	
	//...................................................
	// When a star is clicked
	$('a.star').click(function(){

		$('a.star').removeClass('selected');
		$(this).addClass('selected');

		var store = '.store_detail#' + $(this).attr('store');
		var htmlCode = $(store).html();

		$('.detail_content').fadeOut(500, function(){
			$('.detail_content .store_detail').html(htmlCode);
			$('.detail_content').fadeIn(500);
		});

	});

// end Ready
});