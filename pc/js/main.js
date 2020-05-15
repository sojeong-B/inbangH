var inbang_m={
	navigator : function(){
		$("#navi").hover(
			function(){
				$("#navi").addClass("active");
			},
			function(){
				$("#navi").removeClass("active");
			}
		);
		$("#navi > ul > li").hover(
			function(){
				$(this).addClass("active");
			},
			function(){
				$("#navi > ul > li").removeClass("active");
			}
		);
	},
	owl : function(){
		$('.owl-carousel').owlCarousel({
			loop:true,	
			margin:10,		
			nav:true,		
			responsive: {		
				0:{
					items:1
				}
			}
		});

		$(".owl-carousel").trigger("refresh.owl.carousel");
	}
}
	
	
	
