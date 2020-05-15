var inbang_m={
	keyvisual : function(){
		$(".keyvisual").mobileDragEvent({total:3});
	},
	tab : function(){
		var menuOpen=false;

		$(".tab").click(function(e){
			e.preventDefault();

			if(menuOpen == false){
				$("body").addClass("fixed");
				$(".menu").animate({right:0}, 300, function(){
					menuOpen=true;
					$(".tab").addClass("open");
				});
			}
			else{
				$("body").removeClass("fixed");
				$(".menu").animate({right:"-100%"}, 300, function(){
					menuOpen=false;
					$(".tab").removeClass("open");
					$("#gnb > ul > li").removeClass("active");
					$("#gnb ul ul").slideUp(300);
				});
			}
		});
	},
	gnb : function(){
		$("#gnb > ul > li").click(function(e){
			e.preventDefault();

			if($(this).hasClass("active") == false){
				$("#gnb > ul > li").removeClass("active");
				$(this).addClass("active");
				$("#gnb ul ul").slideUp(300);
				$(this).find("ul").slideDown(300);
			}
			else{
				$(this).removeClass("active");
				$(this).find("ul").slideUp(300);
			}
		});
	},
	content2 : function(){
		$(".content2 li").click(function(e){
			e.preventDefault();
			$(".content2 li").removeClass("active");
			$(this).addClass("active");
		});
	},
	swiper : function(){
		var swiper = new Swiper('.content_slider .swiper-container', {
			pagination: {
				el: '.swiper-pagination',
			},
		});
	}
}
	

	
	
	
	
	
