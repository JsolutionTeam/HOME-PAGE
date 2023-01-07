/* 포트폴리오 */
$(window).load(function() {								
	var $pf_sel = $(".cate ul li a");					
	if($pf_sel.length){
		var $portfolio = $(".p_list");
		$portfolio.isotope({
			itemSelector : ".product-grid-item",
			layoutMode : "masonry"
		});
	}
	$pf_sel.on('click',function(){						
		$pf_sel.removeClass("active");
		$(this).addClass("active");
		var selector = $(this).attr("data-filter");
		$portfolio.isotope({filter:selector});
		return false;
	});
});

$(window).scroll(function() {
	if($(window).scrollTop()>=$("#header").height()){
		$("#header").addClass("on");
	}else{
		$("#header").removeClass("on");
	}
})

$(document).ready(function() {
	/* 모바일 메뉴 */
	$(".gnb_btns").click(function(){
		if($(this).hasClass("on")){			
			$(this).removeClass("on");
			$(".gnb_m").hide();
		}else{
			$(this).addClass("on");
			$(".gnb_m").show();
		}		
	});
	$(".gnb_m li a").click(function() {
		$(".gnb_m").hide();
		$(".gnb_btns").removeClass("on");
	});
	
	
	
	/* what i do */
	var $accordion = $(".accordion");
	var $acc_btn = $accordion.find("dt>a");
	var $acc_con = $accordion.find("dd");
	$(".first").parents().next().show();
	 
	$acc_btn.click(function(e){							
		t=$(this);							
		if (t.hasClass('active')) {
//			t.removeClass('active');
//			t.parents().next().slideUp('fast');
		}else{
			$acc_con.slideUp("fast");
			$acc_btn.removeClass("active");
			t.addClass("active");
			t.parents().next().slideDown('fast');
		}					
		return false;							
	});	
	
	var Pheight = $(window).innerHeight();
	$(".h_responsive").height(Pheight);
	$(window).resize(function() {
		var Pheight = $(window).innerHeight();
		$(".h_responsive").height(Pheight);
	}).resize();		
	
});

function go_to_top(){
	$("html, body").stop().animate({scrollTop:0},600);	
}

function fnMove(seq,e){	
	$("#header").addClass("on");	
    var offset = $("#fnMove" + seq).offset();
    $('html, body').stop().animate({scrollTop : offset.top - $("#header").height()+1}, 700);	               
}


if (!Event.prototype.stopPropagation) {Event.prototype.stopPropagation=function() {this.cancelBubble=true;};}



