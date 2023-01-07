

var dc = function() {
	var common = {
		init : function() {
			common.upgradeBrowser();
			common.setGNB();
			common.setFooter();
			common.selectBox();
			common.cardList();
			//common.tabMenu();
			//common.ellipsis();
			common.ctrlPopup();
			common.inputFile();
			common.headerLang();
			common.topBtn();
			common.sticky();
			common.fileFilter();
		},
		fileFilter : function(){
			$('.fileFilter').change(function(){
				
				//파일 선택시 취소 선택시 기능처리 안함
				if($(this).val() != '') {
					var ext = $(this).val().split('.').pop().toLowerCase();
					//파일 용량 크기제한
					var fileSize = this.files[0].size;
					var maxSize = 10485760;	//10MB
					
					//파일확장자 제한
					if($.inArray(ext, ['xls','xlsx','doc','docx','ppt','pptx','hwp','pdf','jpg','jpeg','png','bmp','gif']) == -1) {

						alert('해당 파일 확장자를 업로드 할 수 없습니다.');

						$(this).val("");
						$(this).parent().find(".file_input_tb").val("");

					}else if(fileSize > maxSize) {
						  
						alert('선택한 파일의 크기가 10MB를 초과합니다.');
						  
						$(this).val("");
						$(this).parent().find(".file_input_tb").val("");
						  
					}
				}
			});			
		},
		sticky : function() {
			if ($('.wrap .header.sub .wrap_nav').get(0) != undefined) {
				$(window).scroll(function() {
					if ($(this).scrollTop() >= $('.wrap .header.sub').height()) {
						$('.wrap .header.sub .wrap_nav').addClass('fixed');
					} else {
						$('.wrap .header.sub .wrap_nav').removeClass('fixed');
					}
				});
			}
		},
		upgradeBrowser : function() {
			$("body").outdatedIeAlert({
				support : "ie8",
				overlayClose : false,
				closeBtn : true,
				title : '인터넷 브라우저 업그레이드 안내',
				text : 'Internet Explorer 8 이하 버전의 브라우저는 업그레이드가 필요합니다.',
				upgradeTitle : '인터넷 브라우저 업그레이드 하기',
				upgradeLink : 'http://windows.microsoft.com/ie'
			});
		},
		setGNB : function() {
			var urlPath2 = window.location.pathname;
			
			//alert(urlPath2);
			var selectedDepth2 = "";
			var selectedDepth1 = "";
			//3depth ymjung 0824 S
			var selectedDepth3 = "";
			//3depth ymjung 0824 E
			if(urlPath2 != null) {
				if(urlPath2.match("/company")) {
					selectedDepth2 = $("#dev2Nav_company");
					selectedDepth1 = ".gnb_company";

				}else if(urlPath2.match("/ict")) {
					selectedDepth2 = $("#dev2Nav_ict");
					selectedDepth1 = ".gnb_ict";

				}else if(urlPath2.match("/tong")) {
					selectedDepth2 = $("#dev2Nav_tong");
					selectedDepth1 = ".gnb_tong";

				}else if(urlPath2.match("/elec")) {
					selectedDepth2 = $("#dev2Nav_elec");
					selectedDepth1 = ".gnb_elec";

				}else if(urlPath2.match("/consult")) {
					selectedDepth2 = $("#dev2Nav_consult");
					selectedDepth1 = ".gnb_consult";

				}else if(urlPath2.match("/guest")) {
					selectedDepth2 = $("#dev2Nav_guest");
					selectedDepth1 = ".gnb_guest";


				}else if(urlPath2.match("/company")) {
					selectedDepth2 = $("#dev2Nav_company");

				}else if(urlPath2.match("/search")) {
					selectedDepth2 = $("#dev2search");
					$("#dev1_index").hide();

				}else if(urlPath2.match("sitemap")) {
					selectedDepth2 = $("#dev2siteMap");
					$("#dev1_index").hide();

				}else if(urlPath2.match("privacy-policy")) {
					selectedDepth2 = $("#dev2privacy");
					$("#dev1_index").hide();

				}else if(urlPath2.match("imagery-policy")) {
					selectedDepth2 = $("#dev2imagery");
					$("#dev1_index").hide();
					
				}else{
					$("header.header.sub [id^='dev']").hide();
				}
				//gnb 선택된 페이지 네비
				$(selectedDepth1).addClass("active");
				
				if(selectedDepth2 != "") {
					
					selectedDepth2.show();
					
					$("#dev1_index").find('li').each(function(i,e){

						if($(this).find("a").data("groupname") != null) {
							if(window.location.pathname.match($(this).find("a").data("groupname"))) {
								$(this).addClass('select');
								$('#selectName').text($(this).find(" a").text());
							}
						}else if($(this).find("a").data("groupnames") != null){
							var groupnames = $(this).find("a").data("groupnames").split(",");
							for(var i=0;i<groupnames.length;i++) {
								if(window.location.pathname.match(groupnames[i])) {
									//console.log("groupname2"+$(this).find(" a").text());
									//debugger;
									$(this).addClass('select');
									$('#selectName').text($(this).find(" a").text());
								}
							}
						}else {
							if($(this).find("a").attr("href").match(window.location.pathname)) {
								$(this).addClass('select');
								$('#selectName').text($(this).find(" a").text());
							}
						} 
					});
					
					//해당 항목에 active class 추가
					selectedDepth2.find('li').each(function(i, e){
						
						if($(this).find("a").data("groupname") != null) {
							if(window.location.pathname.match($(this).find("a").data("groupname"))) {
								$(this).addClass('select');
								//$('#selectName2').text($(this).find(" a").text());
								selectedDepth2.find('.selectName2').text($(this).find(" a").text());
							}
						}else if($(this).find("a").data("groupnames") != null){
							var groupnames = $(this).find("a").data("groupnames").split(",");
							for(var i=0;i<groupnames.length;i++) {
								if(window.location.pathname.match(groupnames[i])) {
									$(this).addClass('select');
									//$('#selectName2').text($(this).find(" a").text());
									selectedDepth2.find('.selectName2').text($(this).find(" a").text());
								}
							}
						}else {
							if($(this).find("a").attr("href").match(window.location.pathname)) {
								$(this).addClass('select');
								//$('#selectName2').text($(this).find(" a").text());
								selectedDepth2.find('.selectName2').text($(this).find(" a").text());
							}
						}
					});
					
					//3depth ymjung 0824 S
					//works only on business area part
					if(("") != selectedDepth3) {
						$("[id^='"+selectedDepth3+"']").find("li").each(function(i, e){
							
							if($(this).find("a").data("groupname") != null) {
								if(window.location.pathname.match($(this).find("a").data("groupname"))) {
									$(this).addClass('select');
									$(this).parent().parent().find('.selectName3').text($(this).find(" a").text());
									$(this).parent().parent().parent().parent().show();
								}
							}
							
						});
					}
					//3depth ymjung 0824 E
				}
				
			}

			var thisActive;
			var depth2 = $('.gnb > ul > li > ul');

			$('.gnb > ul > li > a').each(function() {
				if ($(this).hasClass('active')) {
					thisActive = $(this);
				}
			});

			$('.gnb > ul > li > a').on('focus mouseover', function() {
				depth2 = $(this).parents('ul').find('li > ul');
				depth2.stop().slideDown();
			});

			$(depth2).find('> li > a').on('focus mouseover', function() {
				var depth2_a = $(this);
				var depth1_a = depth2_a.parents('ul').prev();

				$('.gnb > ul > li > a').removeClass('active');
				depth1_a.addClass('active');
			});

			$(depth2).find('> li > a').on('focusout mouseout', function() {
				$('.gnb > ul > li > a').removeClass('active');
				if ($(this).closest("header").hasClass("sub")){
					thisActive.addClass('active');
				}
			});

			$('.btn_all_menu').on('focusout mouseout', function() {
				$('.header').trigger('mouseleave');
			});

			$('.header').on('mouseleave', function() {
				depth2.stop().slideUp();
			});


			//셀렉트 박스 라이브러리 버그 수정 스크립트

			var readyAllMenu = false;
			$('.header > .inner_wrap > button.btn_all_menu').on('click', function(e) {
				if(readyAllMenu == true){
					$('.header .wrap_all_menu').fadeIn();
				}
			}).on('mouseenter mouseleave focus focusout', function(e) {
				switch(e.type){
					case 'mouseenter': case 'focus':
						readyAllMenu = true;
						break;
					case 'mouseleave': case 'focusout':
						readyAllMenu = false;
						break;
				}
			});

			$('.header .wrap_all_menu').on('mouseup', function(e) {
				if ($('.header .wrap_all_menu').has(e.target).length === 0) {
					$('.wrap_all_menu .btn_close').trigger('click');
				}
			});

			$(document).on('keydown', 'a.selectBox, input', function(e) {
				if(e.keyCode == 13){
					e.preventDefault();
				}
			});

			//셀렉트 박스 라이브러리 버그 수정 스크립트

			$('.wrap_all_menu .btn_close').on('click', function() {
				$('.header .wrap_all_menu').fadeOut(function() {
					$(this).removeAttr('style');
				});
				$('.header .btn_all_menu').focus();
			});

			$('.wrap_all_menu .btn_close').on('keydown', function(e) {
				if (e.keyCode == 9 && e.shiftKey) {
					e.preventDefault();
					$('.wrap_all_menu .focus_loop').focus();
				}
			});

			$('.wrap_all_menu .focus_loop').on('keydown', function(e) {
				if (e.keyCode == 9) {
					if (e.shiftKey) {
						$(this).prev().focus();
					} else {
						e.preventDefault();
						$('.wrap_all_menu .btn_close').focus();
					}
				}
			});


		},
		setFooter : function() {
			$('.btn_family_site').on('click', function() {
				$('.wrap_family_site').fadeIn();
			});

			$('.wrap_family_site a').each(function(i) {
				$(this).get(0).idx = i;
			});

			$('.wrap_family_site a').on('focusout', function() {
				var length = $('.wrap_family_site a').length - 1;
				var idx = $(this).get(0).idx;
				if (length == idx) {
					$('.wrap_family_site').fadeOut();
				}
			});

			$(document).on('mouseup', function(e) {
				if ($('.wrap_family_site').has(e.target).length === 0) {
					$('.wrap_family_site').trigger('mouseleave');
				}
			});

			$('.wrap_family_site').on('mouseleave', function() {
				$(this).fadeOut();
			});
		},
		selectBox : function() {
			if ($(".select").get(0) != undefined) {
				$('.select > a').on('click', function(e) {
					e.preventDefault();
					if ($(this).next("ul").length){
						$('.select ul').stop().slideUp();
						$(this).next().stop().slideToggle(function() {
							$(this).parents('.select').find('> a').toggleClass('open');
						});
					}
				});

				$('.select ul li a').on('click', function() {
					var thisTxt = $(this).text();
					var thisLabel = $(this).closest('div.select').find('> a');
					thisLabel.text(thisTxt);
					thisLabel.trigger('click');
					thisLabel.focus();
				});


				$(".select select").selectBox();

				$(".select select").each(function(i) {
					if ($(this).parents('.nav').length != 0) {
						$('.selectBox-dropdown-menu').eq(i).addClass('nav');
					}
				});

				$(".select-tab").on("change", function(){
					var cont = $(this).find("option:selected").attr("data-val");
					$("#"+cont).show().siblings(".imagery_cont").hide();
				});

			}
		},
		tabMenu : function() {
			if ($(".tab_menu").get(0) != undefined) {
				$(".tab_menu").pignoseTab({
					animation: false,
					children: '.tab_menu'
				});
			}
		},
		cardList : function() {
			if ($(".card_grid").get(0) != undefined) {
				$(".card_grid").each(function() {
					$(this).infiniteGrid({
						itemSelector: ".item"
					});
				});
			}
		},
		ellipsis : function() {
			if ($(".ellipsis").get(0) != undefined) {
				var _h;
				$.each($(".ellipsis").attr("class").split(/[\ellipsis, ]+/), function() {
					var checkNumber = this * 1;

					if (!isNaN(checkNumber) && checkNumber != 0) {
						_h = checkNumber;
					}
				});

				$(".ellipsis").shave(_h, {spaces: false});

			}
		},
		inputFile : function() {
			if ($('.file_input_div').get(0) != undefined) {
				$(".file_input_button").on("click", function() {
					$(".file_input_hidden").trigger("click");
				});

				$("#bn_file").on("change", function() {
					var thisValue = $(this).val();
					$("#fileName").val(thisValue);
				});

				// $("#fileName").on("click", function() {
				// 	$(".file_input_hidden").trigger("click");
				// });
			}
		},
		ctrlPopup : function() {
			if ($('.wrap_popup').get(0) != undefined ) {
				$('html').delegate('*[data-popup]', 'click',function(){
					var chkPopup = $(this).attr('data-popup');

					switch (chkPopup) {
						case 'call' :
							var _target = $(this).attr('href');
							$(_target).addClass('active');
							if ( $(_target).find(".box_popup").height() > $(window).height() - 40  ){
								$(_target).find(".box_popup").height( $(window).height() - 40 );
							} else {
								$(_target).find(".box_popup").removeAttr("style");
							}
							setTimeout(function() {
								$(_target).find('.btn_close').focus();
							}, 60);
							$("body").css({"overflow":"hidden"});
							break;
						case 'close':
							$(this).closest('.wrap_popup').removeClass('active').find(".vdo_frame")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
							$("body").css({"overflow":"visible"});
							break;
						default :
							break;
					}
				})
			}

			$('.box_popup .btn_close').on('keydown', function(e) {
				if (e.keyCode == 9 && e.shiftKey) {
					e.preventDefault();
					$('.box_popup .focus_loop').focus();
				}
			});

			$('.box_popup .focus_loop').on('keydown', function(e) {
				if (e.keyCode == 9) {
					if (e.shiftKey) {
						$(this).prev().focus();
						console.log("prev")
					} else {
						e.preventDefault();
						$('.box_popup .btn_close').focus();
						console.log("close")
					}
				}
			});


			// $('.box_popup_t1 .focus_loop').on('keydown', function(e) {
			// 	if (e.keyCode == 9) {
			// 		e.preventDefault();
			// 		if (e.shiftKey) {
			// 			$(this).prev().focus();
			// 			console.log("prev")
			// 		} else {
			// 			$('.box_popup .btn_close').focus();
			// 			console.log("close")
			// 		}
			// 	}
			// });


			$("#chkPop").blur(function(){
				console.log("111")
			})
		},
		headerLang : function(){
			$(document).on({
				'focus mouseover' : function(){
					$(this).parents('.wrap_lang').addClass("hover").find('.after_btn').css('transform','rotate(-135deg)');
					$(".header .wrap_lang .lang li").eq(0).siblings().stop().slideDown(300);
				},
				'focusout mouseout' : function(){
					$(this).parents('.wrap_lang').removeClass("hover").find('.after_btn').css('transform','rotate(45deg)');
					$(".header .wrap_lang .lang li").eq(0).siblings().stop().slideUp(300);
				}
			}, '.header .wrap_lang .lang li a');

		},
		print : function(id) {

			var printContents = document.getElementById(id).innerHTML;
			var originalContents = document.body.innerHTML;

			document.body.innerHTML = printContents;
			window.print();
			document.body.innerHTML = originalContents;
		},
		topBtn : function(){
			var top= 0;
			$(".footer .top_btn").hide();
			$(window).on('scroll',function(){
				top=$(window).scrollTop();
				if(top>=250){
					$('.footer .top_btn').fadeIn()
				}else{
					$('.footer .top_btn').fadeOut()
				}
			});
			$(".footer .top_btn").on("click",function(){
				$("html,body").stop().animate({scrollTop:0});
				$('#contentWrapMain').focus();
			})
		}
	};

	var main = {
		init : function() {
			main.setVisual();
            main.maskBgVisual();
		},
		setVisual : function() {
			if ($('.main .visual').get(0) != undefined) {
				/*var sp = 15000;
				var distance = 100;*/

				$('.main .visual').slick({
					dots: true,
					infinite: true,
					/*speed: sp,*/
					speed: 2000,
					slidesToShow: 1,
					adaptiveHeight: true,
					fade: true,
					autoplay: true,
					/*autoplaySpeed: 1,*/
					autoplaySpeed: 1000,
				});

				$('.slick-next, .slick-prev').hide();

				var slide_conts = $('.visual .slide');
                var slide_left = $('.visual .slide').offset();

				/*$('.main .visual').on('beforeChange', function(event, slick, currentSlide, nextSlide){
					slide_conts.eq(currentSlide).find('img').stop().animate({'left': ((distance*2) * -1)+'px'}, sp);
                    slide_conts.eq(nextSlide).find('img').stop().css({'left': 0}).animate({'left' : -100+'px'}, sp);
				});*/
                $('.main .visual').on('beforeChange', function(event, slick, currentSlide, nextSlide){
					slide_conts.eq(currentSlide).find('img').stop().animate({'left': -300+'px'}, 1000);
                    slide_conts.eq(nextSlide).find('img').stop().css({'left': 0}).animate({'left' : -100+'px'}, 1000);
				});

				var html = '<div class="btn_visual_play">';
                	html += 	'<button class="pause">Pause</button>';
                	html += 	'<button class="play">Play</button>';
                	html += '</div>';

                $('.main .visual').append(html);

                $('.play').hide();

                $('.pause').on('click', function() {
                	$(this).hide().siblings().show();
                    $('.main .visual').slick('slickPause');
                });

                $('.play').on('click', function() {
                    $(this).hide().siblings().show();
                    $('.main .visual').slick('slickPlay');
				});
			}
		},
        maskBgVisual : function() {
            if ($('.main .visual_mask_bg').get(0) != undefined) {
                var slider = $('.main .visual_mask_bg').slick({
                    dots: false,
                    infinite: true,
                    speed: 1000,
                    slidesToShow: 1,
                    adaptiveHeight: true,
                    fade: true,
                });

                $('.slick-next, .slick-prev').hide();

                $('.visual_mask .visual_mask_img .slide').eq(0).find('img').css({'opacity':1});
                var slide_img = $('.visual_mask_img .slide');
                var btn_menu = $('.menu li');

                $('.main .visual_mask_bg').on('beforeChange', function(event, slick, currentSlide, nextSlide){
                    slide_img.find('img').stop().animate({'opacity':0}, 100);
					slide_img.eq(nextSlide).find('img').stop().css({'opacity':0}).delay(300).animate({'opacity':1}, 1000, function(){
						//slide_img.removeClass("shadow");
						//slide_img.eq(nextSlide).addClass("shadow");
					});
					btn_menu.eq(nextSlide).addClass('on').siblings().removeClass('on');

                    btn_menu.find('a').off();
                });

                $('.main .visual_mask_bg').on('afterChange', function(event, slick, currentSlide){
                    btn_menu.find('a').on('click', btnClick);
                });

                btn_menu.find('a').on('click', btnClick);
                function btnClick(){
                    var _this = $(this);
                    var _thisIndex = $(this).parents('.menu li').index();

                    slider.slick('slickGoTo', _thisIndex);

                    _this.parent('li').addClass('on').siblings().removeClass('on');

                }

            }
        }
	};

	var aboutUs = {
		init : function() {
			aboutUs.scrollItem();
			aboutUs.abuSlider();
			//aboutUs.print();
			//aboutUs.map();
		},
		scrollItem : function(){ //스크롤시 애니메이션
			if ($('.history_wrap').get(0) != undefined) {
				var $elements = $( '*[data-animation]' );

				$elements.each( function( i, el ) {
					var $el = $( el );
					var animationClass = $el.data('animation');

					$el.one('inview', function(){
						$(this).addClass( animationClass );
						$(this).addClass('animated');

					});
				});

			}
		},
		abuSlider :function(){
			$(".d_intro_t .scroll_tab").eq(0).children('a').addClass('active');
			$(".d_intro_t .scroll_tab a").on('click',function(e){
				e.preventDefault();
				$(".d_intro_t .scroll_tab a").removeClass("active");
				$(this).addClass("active");
				var attr=$(this).attr('href');
				var ty=$(attr).offset().top;
				$('html,body').stop().animate({scrollTop:ty});
			})
		}
		/*
		,
		print : function() {
			if ($('.print_btn').get(0) != undefined) {
				$('html, body').on('click', '.print_btn', function() {
					var btnNumber = $(this).data('number');
					common.print('map' + btnNumber);
				});
			}
		}
		
		map :function(){
			function map1() {
				var mapContainer = document.getElementById('map1'), // 지도를 표시할 div
					mapOption = {
						center: new daum.maps.LatLng(37.5607126625, 126.9737736241), // 지도의 중심좌표
						level: 4 // 지도의 확대 레벨
					};

				var map = new daum.maps.Map(mapContainer, mapOption);

				var imageSrc = '/ko/pc/assets/images/common/map_position.png', // 마커이미지의 주소입니다
					imageSize = new daum.maps.Size(222, 55), // 마커이미지의 크기입니다
					imageOption = {offset: new daum.maps.Point(111, 50)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

				// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
				var markerImage = new daum.maps.MarkerImage(imageSrc, imageSize, imageOption),
					markerPosition = new daum.maps.LatLng(37.5607126625, 126.9737736241); // 마커가 표시될 위치입니다

				// 마커를 생성합니다
				var marker = new daum.maps.Marker({
					position: markerPosition,
					image: markerImage // 마커이미지 설정
				});

				// 마커가 지도 위에 표시되도록 설정합니다
				marker.setMap(map);
			}
			function map2() {
				var mapContainer = document.getElementById('map2'), // 지도를 표시할 div
					mapOption = {
						center: new daum.maps.LatLng(37.559479, 126.972860), // 지도의 중심좌표
						level: 4 // 지도의 확대 레벨
					};

				var map = new daum.maps.Map(mapContainer, mapOption);

				var imageSrc = '/ko/pc/assets/images/common/map_position.png', // 마커이미지의 주소입니다
					imageSize = new daum.maps.Size(222, 55), // 마커이미지의 크기입니다
					imageOption = {offset: new daum.maps.Point(111, 50)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

				// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
				var markerImage = new daum.maps.MarkerImage(imageSrc, imageSize, imageOption),
					markerPosition = new daum.maps.LatLng(37.559479, 126.972860); // 마커가 표시될 위치입니다

				// 마커를 생성합니다
				var marker = new daum.maps.Marker({
					position: markerPosition,
					image: markerImage // 마커이미지 설정
				});

				// 마커가 지도 위에 표시되도록 설정합니다
				marker.setMap(map);
			}

			if ($('.location_box').get(0) != undefined) {
				map1();
				map2();
			}

		}
		*/
	};

	var career = {
		init : function() {
			career.accordionFAQ();
			career.popFocus();
		},
		accordionFAQ : function() {
			if($('.faq_box .accordion').get(0) != undefined) {
				$('.faq_box .accordion').accordion({
					"transitionSpeed": 400
				});
			}
		},
		popFocus : function(){
			$(".popup_vdo .btn_close").on("click" ,function(){
				$(".btn_vdo_interview").focus();
				console.log("ddd")
			})
			$(".popup_vdo .btn_style5.focus_loop").on("click" ,function(){
				$(".btn_vdo_interview").focus();
				console.log("fff")
			})
		}
	};

	var business = {
		init : function() {
			business.dbTab();
			business.dbSlider();
			business.dbAskform();
		},
		dbTab : function(){
			var h=0;
			var h1=0;
			$(".b_cont_tab1 li .list_title").on("click",function(){
				h=$(this).next().height();
				h1=parseInt(h) + 100;
				$(".b_cont_tab1").css('height',h1+'px');
				$(".b_cont_tab1 li .list_box").css('display','none');
				$(this).next().fadeIn(300);
				$(".b_cont_tab1 li .list_title").removeClass('on');
				$(this).addClass('on')
			});
			$(".b_cont_tab2 li .list_title").on("click",function(){
				h=$(this).next().height();
				h1=parseInt(h) + 150;
				$(".b_cont_tab2").css('height',h1+'px');
				$(".b_cont_tab2 li .list_box").css('display','none');
				$(this).next().fadeIn(300);
				$(".b_cont_tab2 li .list_title").removeClass('on');
				$(this).addClass('on')
			});
			$(".b_cont_tab3 li .list_title").on("click",function(){
				h=$(this).next().height();
				h1=parseInt(h) + 200;
				$(".b_cont_tab3").css('height',h1+'px');
				$(".b_cont_tab3 li .list_box").css('display','none');
				$(this).next().fadeIn(300);
				$(".b_cont_tab3 li .list_title").removeClass('on');
				$(this).addClass('on')
			});
			$(".depth-tab__title").on("click",function(e){
				e.preventDefault();
				var $target = $($(this).attr("href"));
				$(this).addClass("active").siblings(".depth-tab__title").removeClass("active");
				$target.addClass("active").siblings(".depth-tab__content").removeClass("active");
			});
		},
		dbSlider :function(){
			$('.b_results').slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 2000,
			});

			$('.img_slide_wrap').slick();
		},
		dbAskform :function(){
			$(".db_area.ask .ask_btn1").on('click',function(e){
				e.preventDefault();
				var _this = $(this);
				_this.next(".g_inquiry").animate({'margin-top':'-40px'}, 300);
				_this.next(".g_inquiry").slideDown();
				_this.animate({'opacity':0}, 600)
			});

			$(".db_area.ask .ask_btn2").on('click',function(e){
				e.preventDefault();
				var _this = $(this);
				$(".db_area.ask .ask_btn1").animate({'opacity':1}, 600);
				_this.parents(".g_inquiry").slideUp();
				_this.parents(".g_inquiry").animate({'margin-top':'0'}, 300);
			});
		}
	};

	var contact = {
		init : function() {
			contact.tabContAnimate();
		},
		tabContAnimate : function(){
			$('html').delegate('*[data-tab=cont]','click',function(e){
				e.preventDefault();
				var target = $(this).attr('href');
				var tarPos = $(target).position().top;
				$(this).addClass('active').siblings().removeClass('active');
				console.log(tarPos);
				$('html,body').animate({
					scrollTop: tarPos
				},750,'swing')
			})
		}
	};

	var app = {
		init : function() {
			common.init();
			main.init();
			aboutUs.init();
			career.init();
			contact.init();
			business.init();
		}
	};

	return app;
}();

$(document).ready(function() {
	//video.init();
	dc.init();

	// temp

});