jQuery(document).ready(function(jQuery){
		$( ".tab-content" ).hide();		
		
		
		$("ul#home-nav li a").click(function () {

			var tab_id = $(this).parent().attr('data-tab');

			$('ul#home-nav li a').removeClass("active");
			 
			$(this).addClass("active");

			
			$('.menu-item-close.activeBtnDelete').removeClass("activeBtnDelete");

			if ($(this).hasClass('active')) {
				$(this).siblings('.menu-item-close').addClass('activeBtnDelete');
			} 

			$(".tab-content").removeClass('active').hide();

			$("#" + tab_id).addClass('active').show();
		
		});
	

	$(".menu-item-close").click("slow", function () {
		$('.tab-content.active').removeClass('active');


	});

});


