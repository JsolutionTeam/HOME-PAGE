/**
 * Outdated IE Alert! jQuery plugin
 * Version 1.0
 * https://github.com/AndersonMamede/outdated-ie-alert
 * Based on IE Alert! jQuery plugin - https://github.com/inso/ie-alert
 */

(function($){
	var i18n = {

		getText : function(key){
			var lang = (window.navigator.userLanguage || window.navigator.language || "").split("-")[0];
			return (i18n[lang] || i18n["en"])[key];
		},

		en : {
			title : "Did you know that your Internet Explorer is out of date?",
			text : "To get the best possible experience using our site we recommend that you upgrade to a modern web browser. To download a newer web browser click on the Upgrade button.",
			upgradeTitle : "Upgrade",
			upgradeLink : "http://outdatedbrowser.com/en"
		},

		pt : {
			title : "Você sabia que seu Internet Explorer está ultrapassado?",
			text : "Para ter a melhor experiência possível em nosso site, recomendamos que você utilize um <b>navegador atualizado</b>. Para fazer o download de um novo navegador, clique no botão Atualizar.",
			upgradeTitle : "Atualizar",
			upgradeLink : "http://outdatedbrowser.com/br"
		}
	};

	var defaultOptions = {
		support : "ie8",
		overlayClose : false,
		closeBtn : true,
		title : i18n.getText("title"),
		text : i18n.getText("text"),
		upgradeTitle : i18n.getText("upgradeTitle"),
		upgradeLink : i18n.getText("upgradeLink")
	};

	var initialize = function($obj, options){
		var panel = [
			"<div class='ie-l-t-c'></div>",
			"<div class='ie-t'></div>",
			"<div class='ie-r-t-c'></div>",
			"<div class='ie-l'></div>",
			"<div class='ie-c'>",
			"<span class='ie-span'>" + options.title + "</span>",
			"<p class='ie-p'>" + options.text + "</p>",
			"<div class='ie-u'>",
			"<div class='ie-u-l'></div>",
			"<a href='" + options.upgradeLink + "' target='_blank'>",
			"<div class='ie-u-c'>",
			"<span class='ie-u-s'>" + options.upgradeTitle + "</span>",
			"</div>",
			"</a>",
			"<div class='ie-u-r'></div>",
			"</div>",
			"</div>",
			"<div class='ie-r'></div>",
			"<div class='ie-l-b-c'></div>",
			"<div class='ie-b'></div>",
			"<div class='ie-r-b-c'></div>"
		].join("");

		var iepanel = $("<div id='outdated-ie-alert-panel'>" + panel + "</div>");
		var ieoverlay = $("<div id='outdated-ie-alert-overlay'></div>").css("height", $(document).height());

		var active = function(){
			$obj.prepend(iepanel, ieoverlay);

			$(".ie-l, .ie-r").css("height", $(".ie-c").css("height"));
			$(".ie-u").css("margin-left", -($(".ie-u-c").width() / 2 + 14));

			if(!options.closeBtn){
				$(".ie-r-t-c").css("background-position", "-145px -58px").click(function(e){
					e.preventDefault();
				});
			}else{
				$(".ie-r-t-c").click(function(){
					iepanel.fadeOut(100);
					ieoverlay.fadeOut("slow");
				});
			}

			if(options.overlayClose){
				ieoverlay.click(function(){
					iepanel.fadeOut(100);
					ieoverlay.fadeOut("slow");
				});
			}

			if(ie == 6){
				iepanel.addClass("ie6-style");
				overlay.css("background", "#D6D6D6");
				$obj.css("margin", "0");
			}
		}

		if(options.support == "ie9" && ie < 10){ // the modal box will appear on IE9, IE8, IE7, IE6
			active();
		}else if(options.support == "ie8" && ie < 9){ // the modal box will appear on IE8, IE7, IE6
			active();
		}else if(options.support == "ie7" && ie < 8){ // the modal box will appear on IE7, IE6
			active();
		}else if(options.support == "ie6" && ie < 7){ // the modal box will appear only on IE6 and below
			active();
		}
	};

	$.fn.outdatedIeAlert = function(options){
		options = $.extend({}, defaultOptions, options);

		return this.each(function(){
			ie = (function(){
				var undef,
					v = 3,
					div = document.createElement("div"),
					all = div.getElementsByTagName("i");

				while(
					div.innerHTML = '<!--[if gt IE ' +(++v) + ']><i></i><![endif]-->',
						all[0]
					);

				return v > 4 ? v : undef;
			}());

			if(ie >= 5){
				initialize($(this), options);
			}
		});
	};
})(jQuery);


/**
 * jQuery Vimelar plugin
 * @author: Sozonov Alexey
 * @version: v.1.0.0
 * licensed under the MIT License
 * updated: July 5, 2015
 * since 2015
 * Enjoy.
 */
!function(e,i){var t={ratio:16/9,videoId:"8970192",width:e(i).width(),wrapperZIndex:99},a=function(a,r){var r=e.extend({},t,r),o=e(a);e("html,body").css({width:"100%",height:"100%"}),e("<iframe />",{name:"myFrame",id:"vimelar-player",src:"//player.vimeo.com/video/"+r.videoId+("undefined"!=typeof r.parameters?"?"+e.param(r.parameters):""),style:"position: absolute; width:100%; height: 100%;",frameborder:0,webkitallowfullscreen:1,mozallowfullscreen:1,allowfullscreen:1}).prependTo("body").wrap('<div id="vimelar-container" style="overflow: hidden; position: fixed; z-index: 1; width: 100%; height: 100%"></div>').after('<div id="vimelar-overlay" style="width: 100%; height: 100%; z-index: 2; position: absolute; left: 0; top: 0;"></div>'),o.css({position:"relative","z-index":r.wrapperZIndex});var d=function(){var t,a,o=e(i).width(),d=e(i).height(),n=e("#vimelar-player");o/r.ratio<d?(t=Math.ceil(d*r.ratio),n.width(t).height(d).css({left:(o-t)/2,top:0})):(a=Math.ceil(o/r.ratio),n.width(o).height(a).css({left:0,top:(d-a)/2}))};e(i).load(function(){d()}),e(i).on("resize.vimelar",function(){d()})};e.fn.vimelar=function(i){return this.each(function(){e.data(this,"vimelar_instantiated")||e.data(this,"vimelar_instantiated",a(this,i))})}}(jQuery,window);

/**
 * shave - Shave is a javascript plugin that truncates multi-line text within a html element based on set max height
 * @version v1.0.4
 * @link https://github.com/dollarshaveclub/shave#readme
 * @author Jeff Wainwright <jjwainwright2@gmail.com> (jeffry.in)
 * @license MIT */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.shave=t()}(this,function(){"use strict";function e(e,t,n){if(!t)throw Error("maxHeight is required");var s="string"==typeof e?document.querySelectorAll(e):e;"length"in s||(s=[s]);for(var i={character:"…",classname:"js-shave",spaces:!0},a=n&&n.character||i.character,r=n&&n.classname||i.classname,o=(!n||n.spaces!==!1)&&i.spaces,c='<span class="js-shave-char">'+a+"</span>",l=0;l<s.length;l++){var h=s[l],f=h.querySelector("."+r),d=void 0===h.textContent?"innerText":"textContent";f&&(h.removeChild(h.querySelector(".js-shave-char")),h[d]=h[d]);var u=h[d],y=o?u.split(" "):u;if(!(y.length<2)){var p=h.style.height;h.style.height="auto";var v=h.style.maxHeight;if(h.style.maxHeight="none",h.offsetHeight<t)h.style.height=p,h.style.maxHeight=v;else{for(var g=y.length-1,m=0,j=void 0;m<g;)j=m+g+1>>1,h[d]=o?y.slice(0,j).join(" "):y.slice(0,j),h.insertAdjacentHTML("beforeend",c),h.offsetHeight>t?g=o?j-1:j-2:m=j;h[d]=o?y.slice(0,g).join(" "):y.slice(0,g),h.insertAdjacentHTML("beforeend",c);var x=o?y.slice(g).join(" "):y.slice(g);h.insertAdjacentHTML("beforeend",'<span class="'+r+'" style="display:none;">'+x+"</span>"),h.style.height=p,h.style.maxHeight=v}}}}if("undefined"!=typeof window){var t=window.$||window.jQuery||window.Zepto;t&&(t.fn.shave=function(t,n){return e(this,t,n),this})}return e});

/** ================================================================================
 * [pg-tab]
 * version: 3.1.0
 * update: 2016.11.05
 * https://github.com/KennethanCeyer/PIGNOSE-Tab
 *================================================================================ */
!function(a){a.fn.pignoseTab=function(b){var c=this;return this.settings=a.extend({callback:null,animation:"static",animationTime:300,animationEasing:"easeInOutCubic",children:".sub-tab"},b),this.rendering=function(b,d){return b.each(function(b,e){if(!("undefined"==typeof e||e.length<1)){var f=a(e).addClass("pignose-tab-wrapper"),g=f.parents(".pignose-tab-wrapper:last").addClass("pignose-tab-wrapper-root"),h=f.children("ul").addClass("pignose-tab-group"),i=h.children("li").addClass("pignose-tab-list"),j=i.children('a:not(".pignose-tab-more")').addClass("pignose-tab-btn"),k=i.children("a.pignose-tab-more"),l=i.children("div").addClass("pignose-tab-container");g.length<1&&(g=f.addClass("pignose-tab-wrapper-root")),l.children(c.settings.children).length>0&&c.rendering(l.children(c.settings.children).addClass("pignose-sub-tab").parent().addClass("pignose-sub-tab-wrapper")),f.hasClass("pignose-tab-responsive-btn")&&a(window).bind("resize",function(){var b=0;k.length&&(b=f.width()-(k.innerWidth(!0)+k.offset().left)),j.each(function(){a(this).outerWidth(Math.floor((f.width()-b)/j.length)),a(this).parent().width(a(this).outerWidth(!0))})}),i.filter(".active").length<1&&i.eq(0).addClass("active"),i.filter(":last").children(".pignose-tab-btn").addClass("last-btn"),j.bind("click",function(b){a(this).hasClass("active")||(i.removeClass("active").children(".pignose-tab-btn, .pignose-tab-container").removeClass("active"),a(this).parent().addClass("active").children(".pignose-tab-btn, .pignose-tab-container").addClass("active"),c.resizeTab(g),a(window).triggerHandler("resize"),null!=c.settings.callback&&"function"==typeof c.settings&&c.settings.callback()),b.preventDefault()}),i.filter(".active").find(".pignose-tab-btn").triggerHandler("click"),"undefined"!=typeof d&&(c.resizeTab(f,"initialization"),a(window).triggerHandler("resize"),a(window).bind("load",function(){a(this).triggerHandler("resize")}))}}),b},this.resizeTab=function(a,b,d){var e,f=d,g=a,h=g.filter(".active"),i=g.find(".pignose-tab-group").eq(0).find("> .pignose-tab-list.active > .pignose-tab-container"),j=g.siblings(".pignose-tab-container"),k=g.find(c.settings.children).eq(0).find("> .pignose-tab-group > .pignose-tab-list.active > .pignose-tab-container");if("undefined"==typeof b&&(b=0),"string"==typeof b&&"initialization"==b&&(f="quick",b=0),"undefined"==typeof g||g.length<1)return!1;if(g.is(".pignose-tab-container")===!1)return i.length>0?c.resizeTab(i,b,f):c.resizeTab(j,b,f),!1;if(k.length>0&&(e=c.resizeTab(k,b+1,f)),h.length>0){var l=h.closest(c.settings.children);null==e||e<=0?e=h.outerHeight()+h.position().top+parseFloat(l.css("padding-top").replace("px",""))+parseFloat(l.css("padding-bottom").replace("px",""))+2:e+=h.position().top+2,"undefined"==typeof c.settings.animation||!!c.settings.animation==!1||"static"==c.settings.animation||"quick"==f?l.height(e):l.stop().animate({height:e+"px"},c.settings.animationTime,"undefined"!=typeof window[c.settings.animationEasing]?c.settings.animationEasing:null)}return e},c.rendering(this,!0)}}(jQuery);

/**
 * jQuery SelectBox
 *
 * v1.2.0
 * https://github.com/marcj/jquery-selectBox
 */
(function(a){var b=this.SelectBox=function(c,d){if(c instanceof jQuery){if(c.length>0){c=c[0]}else{return}}this.typeTimer=null;this.typeSearch="";this.isMac=navigator.platform.match(/mac/i);d="object"===typeof d?d:{};this.selectElement=c;if(!d.mobile&&navigator.userAgent.match(/iPad|iPhone|Android|IEMobile|BlackBerry/i)){return false}if("select"!==c.tagName.toLowerCase()){return false}this.init(d)};b.prototype.version="1.2.0";b.prototype.init=function(o){var j=a(this.selectElement);if(j.data("selectBox-control")){return false}var f=a('<a class="selectBox" />'),h=j.attr("multiple")||parseInt(j.attr("size"))>1,d=o||{},c=parseInt(j.prop("tabindex"))||0,m=this;f.width(j.outerWidth()).addClass(j.attr("class")).attr("title",j.attr("title")||"").attr("tabindex",c).css("display","inline-block").bind("focus.selectBox",function(){if(this!==document.activeElement&&document.body!==document.activeElement){a(document.activeElement).blur()}if(f.hasClass("selectBox-active")){return}f.addClass("selectBox-active");j.trigger("focus")}).bind("blur.selectBox",function(){if(!f.hasClass("selectBox-active")){return}f.removeClass("selectBox-active");j.trigger("blur")});if(!a(window).data("selectBox-bindings")){a(window).data("selectBox-bindings",true).bind("scroll.selectBox",this.hideMenus).bind("resize.selectBox",this.hideMenus)}if(j.attr("disabled")){f.addClass("selectBox-disabled")}j.bind("click.selectBox",function(p){f.focus();p.preventDefault()});if(h){o=this.getOptions("inline");f.append(o).data("selectBox-options",o).addClass("selectBox-inline selectBox-menuShowing").bind("keydown.selectBox",function(p){m.handleKeyDown(p)}).bind("keypress.selectBox",function(p){m.handleKeyPress(p)}).bind("mousedown.selectBox",function(p){if(1!==p.which){return}if(a(p.target).is("A.selectBox-inline")){p.preventDefault()}if(!f.hasClass("selectBox-focus")){f.focus()}}).insertAfter(j);if(!j[0].style.height){var n=j.attr("size")?parseInt(j.attr("size")):5;var e=f.clone().removeAttr("id").css({position:"absolute",top:"-9999em"}).show().appendTo("body");e.find(".selectBox-options").html("<li><a>\u00A0</a></li>");var l=parseInt(e.find(".selectBox-options A:first").html("&nbsp;").outerHeight());e.remove();f.height(l*n)}this.disableSelection(f)}else{var i=a('<span class="selectBox-label" />'),k=a('<span class="selectBox-arrow" />');i.attr("class",this.getLabelClass()).text(this.getLabelText());o=this.getOptions("dropdown");o.appendTo("BODY");f.data("selectBox-options",o).addClass("selectBox-dropdown").append(i).append(k).bind("mousedown.selectBox",function(p){if(1===p.which){if(f.hasClass("selectBox-menuShowing")){m.hideMenus()}else{p.stopPropagation();o.data("selectBox-down-at-x",p.screenX).data("selectBox-down-at-y",p.screenY);m.showMenu()}}}).bind("keydown.selectBox",function(p){m.handleKeyDown(p)}).bind("keypress.selectBox",function(p){m.handleKeyPress(p)}).bind("open.selectBox",function(q,p){if(p&&p._selectBox===true){return}m.showMenu()}).bind("close.selectBox",function(q,p){if(p&&p._selectBox===true){return}m.hideMenus()}).insertAfter(j);var g=f.width()-k.outerWidth()-parseInt(i.css("paddingLeft"))||0-parseInt(i.css("paddingRight"))||0;i.width(g);this.disableSelection(f)}j.addClass("selectBox").data("selectBox-control",f).data("selectBox-settings",d).hide()};b.prototype.getOptions=function(j){var f;var c=a(this.selectElement);var e=this;var d=function(i,k){i.children("OPTION, OPTGROUP").each(function(){if(a(this).is("OPTION")){if(a(this).length>0){e.generateOptions(a(this),k)}else{k.append("<li>\u00A0</li>")}}else{var l=a('<li class="selectBox-optgroup" />');l.text(a(this).attr("label"));k.append(l);k=d(a(this),k)}});return k};switch(j){case"inline":f=a('<ul class="selectBox-options" />');f=d(c,f);f.find("A").bind("mouseover.selectBox",function(i){e.addHover(a(this).parent())}).bind("mouseout.selectBox",function(i){e.removeHover(a(this).parent())}).bind("mousedown.selectBox",function(i){if(1!==i.which){return}i.preventDefault();if(!c.selectBox("control").hasClass("selectBox-active")){c.selectBox("control").focus()}}).bind("mouseup.selectBox",function(i){if(1!==i.which){return}e.hideMenus();e.selectOption(a(this).parent(),i)});this.disableSelection(f);return f;case"dropdown":f=a('<ul class="selectBox-dropdown-menu selectBox-options" />');f=d(c,f);f.data("selectBox-select",c).css("display","none").appendTo("BODY").find("A").bind("mousedown.selectBox",function(i){if(i.which===1){i.preventDefault();if(i.screenX===f.data("selectBox-down-at-x")&&i.screenY===f.data("selectBox-down-at-y")){f.removeData("selectBox-down-at-x").removeData("selectBox-down-at-y");e.hideMenus()}}}).bind("mouseup.selectBox",function(i){if(1!==i.which){return}if(i.screenX===f.data("selectBox-down-at-x")&&i.screenY===f.data("selectBox-down-at-y")){return}else{f.removeData("selectBox-down-at-x").removeData("selectBox-down-at-y")}e.selectOption(a(this).parent());e.hideMenus()}).bind("mouseover.selectBox",function(i){e.addHover(a(this).parent())}).bind("mouseout.selectBox",function(i){e.removeHover(a(this).parent())});var h=c.attr("class")||"";if(""!==h){h=h.split(" ");for(var g in h){f.addClass(h[g]+"-selectBox-dropdown-menu")}}this.disableSelection(f);return f}};b.prototype.getLabelClass=function(){var c=a(this.selectElement).find("OPTION:selected");return("selectBox-label "+(c.attr("class")||"")).replace(/\s+$/,"")};b.prototype.getLabelText=function(){var c=a(this.selectElement).find("OPTION:selected");return c.text()||"\u00A0"};b.prototype.setLabel=function(){var c=a(this.selectElement);var d=c.data("selectBox-control");if(!d){return}d.find(".selectBox-label").attr("class",this.getLabelClass()).text(this.getLabelText())};b.prototype.destroy=function(){var c=a(this.selectElement);var e=c.data("selectBox-control");if(!e){return}var d=e.data("selectBox-options");d.remove();e.remove();c.removeClass("selectBox").removeData("selectBox-control").data("selectBox-control",null).removeData("selectBox-settings").data("selectBox-settings",null).show()};b.prototype.refresh=function(){var c=a(this.selectElement),e=c.data("selectBox-control"),f=e.hasClass("selectBox-dropdown"),d=e.hasClass("selectBox-menuShowing");c.selectBox("options",c.html());if(f&&d){this.showMenu()}};b.prototype.showMenu=function(){var e=this,d=a(this.selectElement),j=d.data("selectBox-control"),h=d.data("selectBox-settings"),f=j.data("selectBox-options");if(j.hasClass("selectBox-disabled")){return false}this.hideMenus();var g=parseInt(j.css("borderBottomWidth"))||0;f.width(j.innerWidth()).css({top:j.offset().top+j.outerHeight()-g,left:j.offset().left});if(d.triggerHandler("beforeopen")){return false}var i=function(){d.triggerHandler("open",{_selectBox:true})};switch(h.menuTransition){case"fade":f.fadeIn(h.menuSpeed,i);break;case"slide":f.slideDown(h.menuSpeed,i);break;default:f.show(h.menuSpeed,i);break}if(!h.menuSpeed){i()}var c=f.find(".selectBox-selected:first");this.keepOptionInView(c,true);this.addHover(c);j.addClass("selectBox-menuShowing");a(document).bind("mousedown.selectBox",function(k){if(1===k.which){if(a(k.target).parents().andSelf().hasClass("selectBox-options")){return}e.hideMenus()}})};b.prototype.hideMenus=function(){if(a(".selectBox-dropdown-menu:visible").length===0){return}a(document).unbind("mousedown.selectBox");a(".selectBox-dropdown-menu").each(function(){var d=a(this),c=d.data("selectBox-select"),g=c.data("selectBox-control"),e=c.data("selectBox-settings");if(c.triggerHandler("beforeclose")){return false}var f=function(){c.triggerHandler("close",{_selectBox:true})};if(e){switch(e.menuTransition){case"fade":d.fadeOut(e.menuSpeed,f);break;case"slide":d.slideUp(e.menuSpeed,f);break;default:d.hide(e.menuSpeed,f);break}if(!e.menuSpeed){f()}g.removeClass("selectBox-menuShowing")}else{a(this).hide();a(this).triggerHandler("close",{_selectBox:true});a(this).removeClass("selectBox-menuShowing")}})};b.prototype.selectOption=function(d,j){var c=a(this.selectElement);d=a(d);var k=c.data("selectBox-control"),h=c.data("selectBox-settings");if(k.hasClass("selectBox-disabled")){return false}if(0===d.length||d.hasClass("selectBox-disabled")){return false}if(c.attr("multiple")){if(j.shiftKey&&k.data("selectBox-last-selected")){d.toggleClass("selectBox-selected");var e;if(d.index()>k.data("selectBox-last-selected").index()){e=d.siblings().slice(k.data("selectBox-last-selected").index(),d.index())}else{e=d.siblings().slice(d.index(),k.data("selectBox-last-selected").index())}e=e.not(".selectBox-optgroup, .selectBox-disabled");if(d.hasClass("selectBox-selected")){e.addClass("selectBox-selected")}else{e.removeClass("selectBox-selected")}}else{if((this.isMac&&j.metaKey)||(!this.isMac&&j.ctrlKey)){d.toggleClass("selectBox-selected")}else{d.siblings().removeClass("selectBox-selected");d.addClass("selectBox-selected")}}}else{d.siblings().removeClass("selectBox-selected");d.addClass("selectBox-selected")}if(k.hasClass("selectBox-dropdown")){k.find(".selectBox-label").text(d.text())}var f=0,g=[];if(c.attr("multiple")){k.find(".selectBox-selected A").each(function(){g[f++]=a(this).attr("rel")})}else{g=d.find("A").attr("rel")}k.data("selectBox-last-selected",d);if(c.val()!==g){c.val(g);this.setLabel();c.trigger("change")}return true};b.prototype.addHover=function(d){d=a(d);var c=a(this.selectElement),f=c.data("selectBox-control"),e=f.data("selectBox-options");e.find(".selectBox-hover").removeClass("selectBox-hover");d.addClass("selectBox-hover")};b.prototype.getSelectElement=function(){return this.selectElement};b.prototype.removeHover=function(d){d=a(d);var c=a(this.selectElement),f=c.data("selectBox-control"),e=f.data("selectBox-options");e.find(".selectBox-hover").removeClass("selectBox-hover")};b.prototype.keepOptionInView=function(e,d){if(!e||e.length===0){return}var c=a(this.selectElement),j=c.data("selectBox-control"),g=j.data("selectBox-options"),h=j.hasClass("selectBox-dropdown")?g:g.parent(),i=parseInt(e.offset().top-h.position().top),f=parseInt(i+e.outerHeight());if(d){h.scrollTop(e.offset().top-h.offset().top+h.scrollTop()-(h.height()/2))}else{if(i<0){h.scrollTop(e.offset().top-h.offset().top+h.scrollTop())}if(f>h.height()){h.scrollTop((e.offset().top+e.outerHeight())-h.offset().top+h.scrollTop()-h.height())}}};b.prototype.handleKeyDown=function(c){var k=a(this.selectElement),g=k.data("selectBox-control"),l=g.data("selectBox-options"),e=k.data("selectBox-settings"),f=0,h=0;if(g.hasClass("selectBox-disabled")){return}switch(c.keyCode){case 8:c.preventDefault();this.typeSearch="";break;case 9:case 27:this.hideMenus();this.removeHover();break;case 13:if(g.hasClass("selectBox-menuShowing")){this.selectOption(l.find("LI.selectBox-hover:first"),c);if(g.hasClass("selectBox-dropdown")){this.hideMenus()}}else{this.showMenu()}break;case 38:case 37:c.preventDefault();if(g.hasClass("selectBox-menuShowing")){var d=l.find(".selectBox-hover").prev("LI");f=l.find("LI:not(.selectBox-optgroup)").length;h=0;while(d.length===0||d.hasClass("selectBox-disabled")||d.hasClass("selectBox-optgroup")){d=d.prev("LI");if(d.length===0){if(e.loopOptions){d=l.find("LI:last")}else{d=l.find("LI:first")}}if(++h>=f){break}}this.addHover(d);this.selectOption(d,c);this.keepOptionInView(d)}else{this.showMenu()}break;case 40:case 39:c.preventDefault();if(g.hasClass("selectBox-menuShowing")){var j=l.find(".selectBox-hover").next("LI");f=l.find("LI:not(.selectBox-optgroup)").length;h=0;while(0===j.length||j.hasClass("selectBox-disabled")||j.hasClass("selectBox-optgroup")){j=j.next("LI");if(j.length===0){if(e.loopOptions){j=l.find("LI:first")}else{j=l.find("LI:last")}}if(++h>=f){break}}this.addHover(j);this.selectOption(j,c);this.keepOptionInView(j)}else{this.showMenu()}break}};b.prototype.handleKeyPress=function(e){var c=a(this.selectElement),f=c.data("selectBox-control"),d=f.data("selectBox-options");if(f.hasClass("selectBox-disabled")){return}switch(e.keyCode){case 9:case 27:case 13:case 38:case 37:case 40:case 39:break;default:if(!f.hasClass("selectBox-menuShowing")){this.showMenu()}e.preventDefault();clearTimeout(this.typeTimer);this.typeSearch+=String.fromCharCode(e.charCode||e.keyCode);d.find("A").each(function(){if(a(this).text().substr(0,this.typeSearch.length).toLowerCase()===this.typeSearch.toLowerCase()){this.addHover(a(this).parent());this.selectOption(a(this).parent(),e);this.keepOptionInView(a(this).parent());return false}});this.typeTimer=setTimeout(function(){this.typeSearch=""},1000);break}};b.prototype.enable=function(){var c=a(this.selectElement);c.prop("disabled",false);var d=c.data("selectBox-control");if(!d){return}d.removeClass("selectBox-disabled")};b.prototype.disable=function(){var c=a(this.selectElement);c.prop("disabled",true);var d=c.data("selectBox-control");if(!d){return}d.addClass("selectBox-disabled")};b.prototype.setValue=function(f){var c=a(this.selectElement);c.val(f);f=c.val();if(null===f){f=c.children().first().val();c.val(f)}var g=c.data("selectBox-control");if(!g){return}var e=c.data("selectBox-settings"),d=g.data("selectBox-options");this.setLabel();d.find(".selectBox-selected").removeClass("selectBox-selected");d.find("A").each(function(){if(typeof(f)==="object"){for(var h=0;h<f.length;h++){if(a(this).attr("rel")==f[h]){a(this).parent().addClass("selectBox-selected")}}}else{if(a(this).attr("rel")==f){a(this).parent().addClass("selectBox-selected")}}});if(e.change){e.change.call(c)}};b.prototype.setOptions=function(m){var l=a(this.selectElement),f=l.data("selectBox-control"),d=l.data("selectBox-settings"),k;switch(typeof(m)){case"string":l.html(m);break;case"object":l.html("");for(var g in m){if(m[g]===null){continue}if(typeof(m[g])==="object"){var c=a('<optgroup label="'+g+'" />');for(var e in m[g]){c.append('<option value="'+e+'">'+m[g][e]+"</option>")}l.append(c)}else{var h=a('<option value="'+g+'">'+m[g]+"</option>");l.append(h)}}break}if(!f){return}f.data("selectBox-options").remove();k=f.hasClass("selectBox-dropdown")?"dropdown":"inline";m=this.getOptions(k);f.data("selectBox-options",m);switch(k){case"inline":f.append(m);break;case"dropdown":this.setLabel();a("BODY").append(m);break}};b.prototype.disableSelection=function(c){a(c).css("MozUserSelect","none").bind("selectstart",function(d){d.preventDefault()})};b.prototype.generateOptions=function(e,f){var c=a("<li />"),d=a("<a />");c.addClass(e.attr("class"));c.data(e.data());d.attr("rel",e.val()).text(e.text());c.append(d);if(e.attr("disabled")){c.addClass("selectBox-disabled")}if(e.attr("selected")){c.addClass("selectBox-selected")}f.append(c)};a.extend(a.fn,{selectBox:function(e,c){var d;switch(e){case"control":return a(this).data("selectBox-control");case"settings":if(!c){return a(this).data("selectBox-settings")}a(this).each(function(){a(this).data("selectBox-settings",a.extend(true,a(this).data("selectBox-settings"),c))});break;case"options":if(undefined===c){return a(this).data("selectBox-control").data("selectBox-options")}a(this).each(function(){if(d=a(this).data("selectBox")){d.setOptions(c)}});break;case"value":if(undefined===c){return a(this).val()}a(this).each(function(){if(d=a(this).data("selectBox")){d.setValue(c)}});break;case"refresh":a(this).each(function(){if(d=a(this).data("selectBox")){d.refresh()}});break;case"enable":a(this).each(function(){if(d=a(this).data("selectBox")){d.enable(this)}});break;case"disable":a(this).each(function(){if(d=a(this).data("selectBox")){d.disable()}});break;case"destroy":a(this).each(function(){if(d=a(this).data("selectBox")){d.destroy();a(this).data("selectBox",null)}});break;case"instance":return a(this).data("selectBox");default:a(this).each(function(g,f){if(!a(f).data("selectBox")){a(f).data("selectBox",new b(f,e))}});break}return a(this)}})})(jQuery);

/**
 _ _      _       _
 ___| (_) ___| | __  (_)___
 / __| | |/ __| |/ /  | / __|
 \__ \ | | (__|   < _ | \__ \
 |___/_|_|\___|_|\_(_)/ |___/
 |__/

 Version: 1.6.0
 Author: Ken Wheeler
 Website: http://kenwheeler.github.io
 Docs: http://kenwheeler.github.io/slick
 Repo: http://github.com/kenwheeler/slick
 Issues: http://github.com/kenwheeler/slick/issues
 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(b,c){return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.focussed=!1,e.interrupted=!1,e.hidden="hidden",e.paused=!0,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,d,f),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0)}var b=0;return c}(),b.prototype.activateADA=function(){var a=this;a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),e.options.vertical===!1?d[e.animType]="translate3d("+b+"px, 0px, 0px)":d[e.animType]="translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.getNavTarget=function(){var b=this,c=b.options.asNavFor;return c&&null!==c&&(c=a(c).not(b.$slider)),c},b.prototype.asNavFor=function(b){var c=this,d=c.getNavTarget();null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};b.options.fade===!1?c[b.transitionType]=b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:c[b.transitionType]="opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayClear(),a.slideCount>a.options.slidesToShow&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this,b=a.currentSlide+a.options.slidesToScroll;a.paused||a.interrupted||a.focussed||(a.options.infinite===!1&&(1===a.direction&&a.currentSlide+1===a.slideCount-1?a.direction=0:0===a.direction&&(b=a.currentSlide-a.options.slidesToScroll,a.currentSlide-1===0&&(a.direction=1))),a.slideHandler(b))},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(b.$slider.addClass("slick-dotted"),d=a("<ul />").addClass(b.options.dotsClass),c=0;c<=b.getDotCount();c+=1)d.append(a("<li />").append(b.options.customPaging.call(this,b,c)));b.$dots=d.appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.empty().append(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.currentTarget);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=d.slideCount%d.options.slidesToScroll!==0,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&a("li",b.$dots).off("click.slick",b.changeSlide).off("mouseenter.slick",a.proxy(b.interrupt,b,!0)).off("mouseleave.slick",a.proxy(b.interrupt,b,!1)),b.$slider.off("focus.slick blur.slick"),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.cleanUpSlideEvents(),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpSlideEvents=function(){var b=this;b.$list.off("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.empty().append(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.$slider.removeClass("slick-dotted"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.$slidesCache=b.$slides,b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.focusHandler=function(){var b=this;b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.options.pauseOnFocus&&(b.focussed=d.is(":focus"),b.autoPlay())},0)})},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else if(a.options.asNavFor)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else d=1+Math.ceil((a.slideCount-a.options.slidesToShow)/a.options.slidesToScroll);return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.slideWidth*b.options.slidesToShow*-1,e=d*b.options.slidesToShow*-1),b.slideCount%b.options.slidesToScroll!==0&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth*-1,e=(b.options.slidesToShow-(a-b.slideCount))*d*-1):(b.slideOffset=b.slideCount%b.options.slidesToScroll*b.slideWidth*-1,e=b.slideCount%b.options.slidesToScroll*d*-1))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?a*b.slideWidth*-1+b.slideOffset:a*d*-1+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots(),c.checkResponsive(!0),c.focusHandler()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA(),c.options.autoplay&&(c.paused=!1,c.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.off("click.slick").on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.interrupt,b,!0)).on("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.initSlideEvents=function(){var b=this;b.options.pauseOnHover&&(b.$list.on("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.interrupt,b,!1)))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.initSlideEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:b.options.rtl===!0?"next":"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:b.options.rtl===!0?"previous":"next"}}))},b.prototype.lazyLoad=function(){function g(c){a("img[data-lazy]",c).each(function(){var c=a(this),d=a(this).attr("data-lazy"),e=document.createElement("img");e.onload=function(){c.animate({opacity:0},100,function(){c.attr("src",d).animate({opacity:1},200,function(){c.removeAttr("data-lazy").removeClass("slick-loading")}),b.$slider.trigger("lazyLoaded",[b,c,d])})},e.onerror=function(){c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),b.$slider.trigger("lazyLoadError",[b,c,d])},e.src=d})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=Math.ceil(e+b.options.slidesToShow),b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.autoPlay(),a.options.autoplay=!0,a.paused=!1,a.focussed=!1,a.interrupted=!1},b.prototype.postSlide=function(a){var b=this;b.unslicked||(b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay&&b.autoPlay(),b.options.accessibility===!0&&b.initADA())},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(b){b=b||1;var e,f,g,c=this,d=a("img[data-lazy]",c.$slider);d.length?(e=d.first(),f=e.attr("data-lazy"),g=document.createElement("img"),g.onload=function(){e.attr("src",f).removeAttr("data-lazy").removeClass("slick-loading"),c.options.adaptiveHeight===!0&&c.setPosition(),c.$slider.trigger("lazyLoaded",[c,e,f]),c.progressiveLazyLoad()},g.onerror=function(){3>b?setTimeout(function(){c.progressiveLazyLoad(b+1)},500):(e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),c.$slider.trigger("lazyLoadError",[c,e,f]),c.progressiveLazyLoad())},g.src=f):c.$slider.trigger("allImagesLoaded",[c])},b.prototype.refresh=function(b){var d,e,c=this;e=c.slideCount-c.options.slidesToShow,!c.options.infinite&&c.currentSlide>e&&(c.currentSlide=e),c.slideCount<=c.options.slidesToShow&&(c.currentSlide=0),d=c.currentSlide,c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.cleanUpSlideEvents(),b.initSlideEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.setPosition(),b.focusHandler(),b.paused=!b.options.autoplay,b.autoPlay(),b.$slider.trigger("reInit",[b])},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,void d.reinit())},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=b.slideWidth*d*-1,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(){var c,d,e,f,h,b=this,g=!1;if("object"===a.type(arguments[0])?(e=arguments[0],g=arguments[1],h="multiple"):"string"===a.type(arguments[0])&&(e=arguments[0],f=arguments[1],g=arguments[2],"responsive"===arguments[0]&&"array"===a.type(arguments[1])?h="responsive":"undefined"!=typeof arguments[1]&&(h="single")),"single"===h)b.options[e]=f;else if("multiple"===h)a.each(e,function(a,c){b.options[a]=c});else if("responsive"===h)for(d in f)if("array"!==a.type(b.options.responsive))b.options.responsive=[f[d]];else{for(c=b.options.responsive.length-1;c>=0;)b.options.responsive[c].breakpoint===f[d].breakpoint&&b.options.responsive.splice(c,1),c--;b.options.responsive.push(f[d])}g&&(b.unload(),b.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=a.options.useTransform&&null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,
	d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.interrupt=function(a){var b=this;a||b.autoPlay(),b.interrupted=a},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),void c.asNavFor(e)):void c.slideHandler(e)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,j,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):(i.options.autoplay&&clearInterval(i.autoPlayTimer),e=0>d?i.slideCount%i.options.slidesToScroll!==0?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?i.slideCount%i.options.slidesToScroll!==0?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.options.asNavFor&&(j=i.getNavTarget(),j=j.slick("getSlick"),j.slideCount<=j.options.slidesToShow&&j.setSlideClasses(i.currentSlide)),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)})):i.postSlide(e),void i.animateHeight()):void(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e))))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"down":"up":"vertical"},b.prototype.swipeEnd=function(a){var c,d,b=this;if(b.dragging=!1,b.interrupted=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe){switch(d=b.swipeDirection()){case"left":case"down":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.currentDirection=0;break;case"right":case"up":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.currentDirection=1}"vertical"!=d&&(b.slideHandler(c),b.touchObject={},b.$slider.trigger("swipe",[b,d]))}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.options.vertical===!1?b.swipeLeft=d+f*g:b.swipeLeft=d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):void b.setCSS(b.swipeLeft)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return b.interrupted=!0,1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,void(b.dragging=!0))},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;a.options.autoplay&&(document[a.hidden]?a.interrupted=!0:a.interrupted=!1)},a.fn.slick=function(){var f,g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length;for(f=0;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});

/**
 * Copyright (c) 2015 NAVER corp.
 * egjs projects are licensed under the MIT license
 * https://naver.github.io/egjs/license.txt
 *
 * egjs JavaScript library
 * http://naver.github.io/egjs
 *
 * @version 1.5.0
 * @SHA-1 a22f4c1 (1.5.0-rc)
 */
/**
 * All-in-one packaged file for ease use of 'eg.infiniteGrid' with below dependencies.
 * NOTE: This is not an official distribution file and is only for user convenience.
 *
 * src/module.js
 * src/agent.js
 * src/eg.js
 * src/class.js
 * src/component.js
 * src/plugin/persist.js
 * src/infiniteGrid.js
 */
!function(a,b,c){function d(a){return a>2?a+1+"th":m[a]}function e(a,b){var c;for(c in b)a=a.replace(new RegExp("{{"+c+"}}","gi"),b[c]);return a}function f(a,b){for(var f,g,h,i,j,m,n,o,p=0,q=b.length,r=[],s=[],t=c.require;q>p;p++)g=b[p],h={index:d(p),name:g,componentName:a},i="string"==typeof b[p],j=void 0===b[p],m=i&&(f=k[b[p]]),n=i&&f&&!c[b[p]],o=n&&t&&t.specified&&t.specified(b[p]),i||j?o&&t.defined(b[p])?(g=t(b[p]),s.push(g)):!o||t.defined(b[p])?n&&t&&t.specified&&!t.specified(b[p])?(h.url=f.url,r.push(e(l[1],h))):!n||t?m&&c[b[p]]?(g=c[b[p]],s.push(g)):!i||f?void 0!==b[p]||r.push(e(l[4],h)):r.push(e(l[3],h)):(h.url=f.url,r.push(e(l[2],h))):(h.url=f.url,r.push(e(l[0],h))):s.push(g);return[s,r]}function g(a){return a.charAt(0).toUpperCase()+a.slice(1)}function h(a){var c,d,e,f=g(a);if(!(i[f]&&i[f].prototype&&i[f].prototype._events))return!1;if(j.fn[a])throw new Error("The name '"+f+"' has already been used and registered as plugin. Try with different one.");j.fn[a]=function(c){var d,e;return"string"==typeof c?(d=this.data(b+"-"+a),"instance"===c?d:(e=d[c].apply(d,Array.prototype.slice.call(arguments,1)),e===d?this:e)):((void 0===c||j.isPlainObject(c))&&this.data(b+"-"+a,new i[f](this,c||{},a+":")),this)},e={trigger:"trigger",add:"on",remove:"off"},c=i[f].prototype._events();for(var h in c){d=j.event.special[a+":"+c[h]]={},d.setup=function(){return!0};for(var k in e)d[k]=function(c){return function(d,e){return j(this).data(b+"-"+a)[c](d.type,"trigger"===c?e:d.handler),!1}}(e[k])}}var i;c[b]||(c[b]={}),i=c[b];var j=c[a],k={jQuery:{url:"http://jquery.com/"},Hammer:{url:"http://hammerjs.github.io/"}},l=["[egjs] The {{name}} library must be loaded before {{componentName}}.",'[egjs] For AMD environment (like RequireJS), "{{name}}" must be declared, which is required by {{componentName}}.',"[egjs] The {{index}} argument of {{componentName}} is missing.\r\nDownload {{name}} from [{{url}}].","[egjs] The {{name}} parameter of {{componentName}} is not valid.\r\nPlease check and try again.","[egjs] The {{index}} argument of {{componentName}} is undefined.\r\nPlease check and try again."],m=["1st","2nd","3rd"],n=function(a){(n=c.console&&c.console.warn?function(a){c.console.warn(a)}:function(){})(a)};i.module||(i.module=function(a,b,d){var e=f(a,b);e[1].length?n(e[1].join("\r\n")):(d.apply(c,e[0]),h(a))})}("jQuery","eg",window),eg.module("agent",[eg],function(a){function b(a){return j(a,o.defaultString.browser)}function c(a){var b,c;return a?(c=h(a).versionSearch||a,b=d(c,n)):void 0}function d(a,b){var c,d,e=o.defaultString.browser.version,f=new RegExp("("+a+")","i").exec(b);return f?(d=f.index,a=f[0],d>-1&&(c=d+a.length+1,e=b.substring(c).split(" ")[0].replace(/_/g,".").replace(/\;|\)/g,"")),e):e}function e(a){return j(a,o.defaultString.os)}function f(a){var b,c,d,e,f=n,h=g(a)||{},i=o.defaultString.os.version;return a?h.versionAlias?h.versionAlias:(c=h.versionSearch||a,d=new RegExp("("+c+")\\s([\\d_\\.]+|\\d_0)","i"),e=d.exec(f),e&&(b=d.exec(f)[2].replace(/_/g,".").replace(/\;|\)/g,"")),b||i):void 0}function g(a){return i(o.os,a)}function h(a){return i(o.browser,a)}function i(a,b){for(var c,d,e,f=0;e=a[f];f++)if(c=e.criteria,d=new RegExp(e.identity,"i").test(b),c?d&&k(n,c):d)return e}function j(a,b){for(var c,d=0;c=a[d];d++)if(k(n,c.criteria))return c.identity||b.name;return b.name}function k(a,b){return b&&b.test?!!b.test(a):a.indexOf(b)>-1}function l(){for(var a,b,c=n,e=o.webview,f=!1,g=0;b=e[g];g++)if(k(c,b.criteria)&&(a=d(b.browserVersionSearch,c),k(c,b.webviewToken)||k(a,b.webviewBrowserVersion))){f=!0;break}return f}function m(a){return a.browser.name=a.browser.name.toLowerCase(),a.os.name=a.os.name.toLowerCase(),"ios"===a.os.name&&a.browser.webview&&(a.browser.version="-1"),a}var n,o={browser:[{criteria:"PhantomJS",identity:"PhantomJS"},{criteria:/Opera Mini/,identity:"Opera mini",versionSearch:"Opera Mini"},{criteria:/Opera|OPR/,identity:"Opera",versionSearch:"Opera|OPR"},{criteria:/Edge/,identity:"Edge",versionSearch:"Edge"},{criteria:/MSIE|Trident|Windows Phone/,identity:"IE",versionSearch:"IEMobile|MSIE|rv"},{criteria:/SAMSUNG|SamsungBrowser/,identity:"SBrowser",versionSearch:"Chrome"},{criteria:/Chrome|CriOS/,identity:"Chrome"},{criteria:/Android/,identity:"default"},{criteria:/iPhone|iPad/,identity:"Safari",versionSearch:"Version"},{criteria:"Apple",identity:"Safari",versionSearch:"Version"},{criteria:"Firefox",identity:"Firefox"}],os:[{criteria:/Windows Phone|Windows NT/,identity:"Window",versionSearch:"Windows Phone|Windows NT"},{criteria:"Windows 2000",identity:"Window",versionAlias:"5.0"},{criteria:/iPhone|iPad/,identity:"iOS",versionSearch:"iPhone OS|CPU OS"},{criteria:"Mac",versionSearch:"OS X",identity:"MAC"},{criteria:/Android/,identity:"Android"}],webview:[{criteria:/iPhone|iPad/,browserVersionSearch:"Version",webviewBrowserVersion:/-1/},{criteria:/iPhone|iPad|Android/,webviewToken:/NAVER|DAUM|; wv/}],defaultString:{browser:{version:"-1",name:"default"},os:{version:"-1",name:"unknown"}}};a.Agent={create:function(a){this.ua=n=a;var d={os:{},browser:{}};return d.browser.name=b(o.browser),d.browser.version=c(d.browser.name),d.os.name=e(o.os),d.os.version=f(d.os.name),d.browser.webview=l(),m(d)}}}),eg.module("eg",["jQuery",eg,window,eg.Agent],function(a,b,c,d){function e(a,b,c,d){var e=a.hook[b];return e&&(d=e.apply(a,c)),a[b]=function(){var e=a.hook[b];return e?e.apply(a,c):d},d}b.VERSION="1.5.0",b.hook={},b.agent=function(){var a=d.create(c.navigator.userAgent);return e(this,"agent",[a],a)},b.translate=function(a,b,c){return c=c||!1,"translate"+(c?"3d(":"(")+a+","+b+(c?",0)":")")},b.isHWAccelerable=function(){var a,c=!1,f=b.agent(),g=f.os.version,h=f.browser.name,i=f.browser.version;return-1!==h.indexOf("chrome")?c=i>="25":/ie|edge|firefox|safari|inapp/.test(h)?c=!0:-1!==f.os.name.indexOf("android")&&(a=(d.ua.match(/\(.*\)/)||[null])[0],c=g>="4.1.0"&&!/EK-GN120|SM-G386F/.test(a)||g>="4.0.3"&&/SHW-|SHV-|GT-|SCH-|SGH-|SPH-|LG-F160|LG-F100|LG-F180|LG-F200|EK-|IM-A|LG-F240|LG-F260/.test(a)&&!/SHW-M420|SHW-M200|GT-S7562/.test(a)),e(this,"isHWAccelerable",[c,f],c)},b.isTransitional=function(){var a=!1,c=b.agent(),d=c.browser.name;if(/chrome|firefox|sbrowser/.test(d))a=!0;else switch(c.os.name){case"ios":a=/safari|inapp/.test(d)&&parseInt(c.os.version,10)<6;break;case"window":a=/safari/.test(d)||/ie/.test(d)&&parseInt(c.browser.nativeVersion,10)>=10;break;default:a=/safari/.test(d)}return e(this,"isTransitional",[a,c],a)},b._hasClickBug=function(){var a=b.agent(),c="safari"===a.browser.name;return e(this,"_hasClickBug",[c,a],c)},a&&a.extend(a.easing,{easeOutCubic:function(a){return 1-Math.pow(1-a,3)}})}),eg.module("class",[eg],function(a){a.Class=function(a){var b=function(){"function"==typeof a.construct&&a.construct.apply(this,arguments)};return b.prototype=a,b.prototype.instance=function(){return this},b.prototype.constructor=b,b},a.Class.extend=function(a,b){var c=function(){a.apply(this,arguments),"function"==typeof b.construct&&b.construct.apply(this,arguments)},d=function(){};d.prototype=a.prototype;var e=new d;for(var f in b)e[f]=b[f];return e.constructor=c,c.prototype=e,c}}),eg.module("component",[eg],function(a){a.Component=a.Class({construct:function(){this.eventHandler={},this.options={}},option:function(a,b){if(arguments.length>=2)return this.options[a]=b,this;if("string"==typeof a)return this.options[a];if(0===arguments.length)return this.options;for(var c in a)this.options[c]=a[c];return this},trigger:function(a,b){b=b||{};var c=this.eventHandler[a]||[],d=c.length>0;if(!d)return!0;c=c.concat(),b.eventType=a;var e,f,g,h=!1,i=[b];for(b.stop=function(){h=!0},(f=arguments.length)>2&&(i=i.concat(Array.prototype.slice.call(arguments,2,f))),e=0;g=c[e];e++)g.apply(this,i);return!h},once:function(a,b){if("object"==typeof a&&"undefined"==typeof b){var c,d=a;for(c in d)this.once(c,d[c]);return this}if("string"==typeof a&&"function"==typeof b){var e=this;this.on(a,function f(){var c=Array.prototype.slice.call(arguments);b.apply(e,c),e.off(a,f)})}return this},hasOn:function(a){return!!this.eventHandler[a]},on:function(a,b){if("object"==typeof a&&"undefined"==typeof b){var c,d=a;for(c in d)this.on(c,d[c]);return this}if("string"==typeof a&&"function"==typeof b){var e=this.eventHandler[a];"undefined"==typeof e&&(e=this.eventHandler[a]=[]),e.push(b)}return this},off:function(a,b){if(0===arguments.length)return this.eventHandler={},this;if("undefined"==typeof b){if("string"==typeof a)return this.eventHandler[a]=void 0,this;var c=a;for(var d in c)this.off(d,c[d]);return this}var e=this.eventHandler[a];if(e){var f,g;for(f=0;g=e[f];f++)if(g===b){e.splice(f,1);break}}return this}})}),eg.module("persist",["jQuery",eg,window,document],function(a,b,c,d){function e(a){if(a){var b="__tmp__"+r;try{return a.setItem(b,r),a.getItem(b)===r}catch(c){return!1}}}function f(a){u=u||a.originalEvent&&a.originalEvent.persisted,!u&&v?t.trigger("persist"):g()}function g(){k(null)}function h(){var b,d=x?x.getItem(c.location.href+r):n.state;if(null===d)return{};var e,f="string"==typeof d&&d.length>0&&"null"!==d;try{if(b=q.parse(d),e=!("object"!==a.type(b)||b instanceof Array),!f||!e)throw new Error}catch(g){i(),b={}}return b}function i(){console.warn("window.history or session/localStorage has no valid format data to be handled in persist.")}function j(a){var b=h()[a];return("null"===b||"undefined"==typeof b)&&(b=null),b}function k(a){if(x)a?x.setItem(c.location.href+r,q.stringify(a)):x.removeItem(c.location.href+r);else try{n.replaceState(null===a?null:q.stringify(a),d.title,c.location.href)}catch(b){console.warn(b.message)}a?t.attr(r,!0):t.attr(r,null)}function l(a,b){var c=h();c[a]=b,k(c)}var m=c.performance,n=c.history,o=b.agent(),p=function(){var a=parseFloat(o.os.version);return!("ios"===o.os.name||"mac"===o.os.name&&"safari"===o.browser.name||"android"===o.os.name&&(4.3>=a&&o.browser.webview===!0||3>a))}(),q=c.JSON,r="___persist___",s="KEY"+r,t=a(c),u=t.attr(r)===!0,v=m&&m.navigation&&m.navigation.type===(m.navigation.TYPE_BACK_FORWARD||2),w="replaceState"in n&&"state"in n,x=function(){return e(c.sessionStorage)?c.sessionStorage:e(c.localStorage)?c.localStorage:void 0}();return w||x?q?(a.persist=function(a,b){var c;return"string"==typeof a?c=a:(c=s,b=1===arguments.length?a:null),(b||2===arguments.length)&&l(c,b),j(c)},a.persist.isNeeded=function(){return p},!v&&g(),a.event.special.persist={setup:function(){t.on("pageshow",f)},teardown:function(){t.off("pageshow",f)},trigger:function(a){a.state=j(s)}},{isBackForwardNavigated:v,onPageshow:f,reset:g,getState:h,setState:k,GLOBALKEY:s}):void console.warn("The JSON object is not supported in your browser.\r\nFor work around use polyfill which can be found at:\r\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON#Polyfill"):void 0}),eg.module("infiniteGrid",["jQuery",eg,window,document],function(a,b,c,d){var e={layoutComplete:"layoutComplete",append:"append",prepend:"prepend"},f=3;b.InfiniteGrid=b.Class.extend(b.Component,{_events:function(){return e},construct:function(b,d,e){var f=c.navigator.userAgent;this.options=a.extend({isEqualSize:!1,defaultGroupKey:null,count:30,threshold:300},d),this.$el=b instanceof a?b:a(b),this.el=this.$el.get(0),this.el.style.position="relative",this._prefix=e||"",this._isIos=/iPhone|iPad/.test(f),this._isIE=/MSIE|Trident|Windows Phone|Edge/.test(f),this._appendCols=this._prependCols=[],this.$view=a(c),this._reset(),this._refreshViewport(),this.el.children.length>0&&this.layout(!0,this._itemize(a.makeArray(this.el.children),this.options.defaultGroupKey)),this._onScroll=a.proxy(this._onScroll,this),this._onResize=a.proxy(this._onResize,this),this.$view.on("scroll",this._onScroll).on("resize",this._onResize)},_getScrollTop:function(){return d.body.scrollTop||d.documentElement.scrollTop},_onScroll:function(){if(!this.isProcessing()){var b=this._getScrollTop(),c=this._prevScrollTop;if(!(this._isIos&&0===b||c===b)){var d,f;if(b>c){if(a.isEmptyObject(this._bottomElement)&&(this._bottomElement=this.getBottomElement(),null==this._bottomElement))return;d=this._bottomElement,f=d.getBoundingClientRect(),f.top<=this._clientHeight+this.options.threshold&&this.trigger(this._prefix+e.append,{scrollTop:b})}else{if(a.isEmptyObject(this._topElement)&&(this._topElement=this.getTopElement(),null==this._topElement))return;if(d=this._topElement,f=d.getBoundingClientRect(),f.bottom>=-this.options.threshold){var g=this.fit();g>0&&(b-=g,this.$view.scrollTop(b)),this.trigger(this._prefix+e.prepend,{scrollTop:b})}}this._prevScrollTop=b}}},_onResize:function(){this._resizeTimeout&&clearTimeout(this._resizeTimeout);var a=this;this._resizeTimeout=setTimeout(function(){a._refreshViewport(),a.$el.innerWidth()!==a._containerWidth&&a.layout(!0),a._resizeTimeout=null,a._prevScrollTop=-1},100)},_refreshViewport:function(){var b=this.$view.get(0);b&&(this._clientHeight=a.isWindow(b)?b.innerHeight||document.documentElement.clientHeight:b.clientHeight)},getStatus:function(){var b,c={};for(b in this)!this.hasOwnProperty(b)||!/^_/.test(b)||"function"==typeof this[b]||this[b]instanceof Element||(c[b]=this[b]);return{prop:c,options:a.extend({},this.options),items:a.map(this.items,function(b){var c=a.extend({},b);return delete c.el,c}),html:this.el.innerHTML,cssText:this.el.style.cssText}},setStatus:function(b){return b&&b.cssText&&b.html&&b.prop&&b.items?(this.el.style.cssText=b.cssText,this.el.innerHTML=b.html,a.extend(this,b.prop),this._topElement=this._bottomElement=null,this.items=a.map(this.el.children,function(a,c){return b.items[c].el=a,b.items[c]}),this):this},isProcessing:function(){return this._isProcessing},isRecycling:function(){return this.options.count>0&&this._isRecycling},getGroupKeys:function(){return a.map(this.items,function(a){return a.groupKey})},layout:function(b,c,d){var e=a.extend({isAppend:!0,removedCount:0},d);return b="undefined"==typeof b||b,c||e.isAppend||(e.isAppend=!0),this._waitResource(b,e.isAppend?c:c.reverse(),e),this},_layoutComplete:function(b,c,d){var e=!this.items.length;c&&d.isAppend&&(this.items=this.items.concat(c)),e&&a.each(c,function(a,b){b.el.style.position="absolute"}),e||b?this._resetCols(this._measureColumns()):c||(this._appendCols=this._prependCols.concat()),this._layoutItems(b,c,d),this._postLayout(b,c,d)},_layoutItems:function(b,c,d){var e=this,f=c||this.items;if(a.each(f,function(a,c){c.position=e._getItemLayoutPosition(b,c,d.isAppend)}),c&&!d.isAppend){this.items=c.sort(function(a,b){return a.position.y-b.position.y}).concat(this.items);var g=this._getTopPositonY();0!==g&&(f=this.items,a.each(f,function(a,b){b.position.y-=g}),this._syncCols(!1),this._syncCols(!0))}a.each(f,function(a,b){if(b.el){var c=b.el.style;c.left=b.position.x+"px",c.top=b.position.y+"px"}})},append:function(b,c){return this._isProcessing||0===b.length?void 0:(b=a(b),this._insert(b,c,!0),b.length)},prepend:function(b,c){return this._isProcessing||0===b.length?void 0:(b=a(b),this._insert(b,c,!1),b.length)},clear:function(){return this.el.innerHTML="",this.el.style.height="",this._reset(),this},getTopElement:function(){var a=this._getTopItem();return a&&a.el},_getTopItem:function(){var b=null,c=1/0;return a.each(this._getColItems(!1),function(a,d){d&&d.position.y<c&&(c=d.position.y,b=d)}),b},_getTopPositonY:function(){var a=this._getTopItem();return a?a.position.y:0},getBottomElement:function(){var b,c=null,d=-(1/0);return a.each(this._getColItems(!0),function(a,e){b=e?e.position.y+e.size.height:0,b>=d&&(d=b,c=e)}),c&&c.el},_postLayout:function(a,b,c){if(this._isProcessing){b=b||[],this.el.style.height=this._getContainerSize().height+"px",this._doubleCheckCount=f,this._topElement=this.getTopElement(),this._bottomElement=this.getBottomElement();var d=0;if(c.isAppend||(d=b.length>=this.items.length?0:this.items[b.length].position.y,d>0&&(this._prevScrollTop=this._getScrollTop()+d,this.$view.scrollTop(this._prevScrollTop))),this._isProcessing=!1,this.trigger(this._prefix+e.layoutComplete,{target:b.concat(),isAppend:c.isAppend,distance:d,croppedCount:c.removedCount}),!c.isAppend&&0===this._getScrollTop()){var g=this;clearInterval(this._doubleCheckTimer),this._doubleCheckTimer=setInterval(function(){0===g._getScrollTop()&&(g.trigger(g._prefix+e.prepend,{scrollTop:0}),--g._doubleCheckCount<=0&&clearInterval(g._doubleCheckTimer))},500)}}},_insert:function(b,c,d){if(this._isProcessing=!0,this.isRecycling()||(this._isRecycling=this.items.length+b.length>=this.options.count),0!==b.length){var e=b.toArray(),f=a(e),g=-this._clientHeight+"px";a.each(e,function(a,b){b.style.position="absolute",b.style.top=g});var h=this._adjustRange(d,f);this.$el[d?"append":"prepend"](f),this.layout(!1,this._itemize(f,c),{isAppend:d,removedCount:h})}},_waitResource:function(a,b,c){this._isProcessing=!0;var d=this._checkImageLoaded(),e=this,f=function(){e._layoutComplete(a,b,c)};d.length>0?this._waitImageLoaded(d,f):setTimeout(function(){f&&f()},0)},_adjustRange:function(b,c){var d=0;if(!this.isRecycling())return d;this.options.count<=c.length&&(d+=b?c.splice(0,c.length-this.options.count).length:c.splice(this.options.count).length);var e,f,g=this.items.length+c.length-this.options.count;return 0>=g||(f=this._getDelimiterIndex(b,g))<0?d:(b?(e=this.items.splice(0,f),this._syncCols(!1)):(e=f===this.items.length?this.items.splice(0):this.items.splice(f,this.items.length-f),this._syncCols(!0)),a.each(e,function(a,b){f=c.index(b.el),-1!==f?c.splice(f,1):b.el.parentNode.removeChild(b.el)}),d+=e.length)},_getDelimiterIndex:function(a,b){var c=this.items.length;if(c===b)return c;var d,e=0,f=a?b-1:c-b,g=f+(a?1:-1),h=this.items[f].groupKey;if(null!=h&&h===this.items[g].groupKey)if(a){for(d=f;d>0&&h===this.items[d].groupKey;d--);e=0===d?-1:d+1}else{for(d=f;c>d&&h===this.items[d].groupKey;d++);e=d===c?-1:d}else e=a?g:f;return e},_fit:function(b){if(this.options.count<=0)return this._fit=function(){return 0},0;var c=this._getTopPositonY();return 0!==c&&(a.each(this.items,function(a,d){d.position.y-=c,b&&(d.el.style.top=d.position.y+"px")}),this._syncCols(!1),this._syncCols(!0),b&&(this.el.style.height=this._getContainerSize().height+"px")),c},fit:function(){return this._fit(!0)},_reset:function(){this._isProcessing=!1,this._topElement=null,this._bottomElement=null,this._isRecycling=!1,this._prevScrollTop=0,this._equalItemSize=0,this._resizeTimeout=null,this._doubleCheckTimer=null,this._doubleCheckCount=f,this._resetCols(this._appendCols.length||0),this.items=[]},_checkImageLoaded:function(){return this.$el.find("img").filter(function(b,c){return c.nodeType&&-1!==a.inArray(c.nodeType,[1,9,11])?!c.complete:void 0}).toArray()},_waitImageLoaded:function(b,c){var d,e=b.length,f=function(b){e--,a(b.target).off("load error"),0>=e&&c&&c()},g=this;a.each(b,function(b,c){if(d=a(c),g._isIE){var e=c.getAttribute("src");c.setAttribute("src",""),c.setAttribute("src",e)}d.on("load error",f)})},_measureColumns:function(){this.el.style.width=null,this._containerWidth=this.$el.innerWidth(),this._columnWidth=this._getColumnWidth()||this._containerWidth;var a=this._containerWidth/this._columnWidth,b=this._columnWidth-this._containerWidth%this._columnWidth;return a=Math.max(Math[b&&1>=b?"round":"floor"](a),1),a||0},_resetCols:function(a){a="undefined"==typeof a?0:a;for(var b=[];a--;)b.push(0);this._appendCols=b.concat(),this._prependCols=b.concat()},_getContainerSize:function(){return{height:Math.max.apply(Math,this._appendCols),width:this._containerWidth}},_getColumnWidth:function(){var b=this.items[0]&&this.items[0].el,c=0;if(b){var d=a(b);c=d.innerWidth(),this.options.isEqualSize&&(this._equalItemSize={width:c,height:d.innerHeight()})}return c},_syncCols:function(a){if(this.items.length){var b,c=this._getColItems(a),d=a?this._appendCols:this._prependCols,e=d.length;for(b=0;e>b;b++)d[b]=c[b].position.y+(a?c[b].size.height:0)}},_getColIdx:function(a){return parseInt(a.position.x/parseInt(this._columnWidth,10),10)},_getColItems:function(a){for(var b,c,d=this._appendCols.length,e=new Array(d),f=0,g=a?this.items.length-1:0;b=this.items[g];){if(c=this._getColIdx(b),!e[c]&&(e[c]=b,++f===d))return e;g+=a?-1:1}return e},_itemize:function(b,c){return a.map(b,function(a){return{el:a,position:{x:0,y:0},groupKey:"undefined"==typeof c?null:c}})},_getItemLayoutPosition:function(b,c,d){if(c&&c.el){var e=a(c.el);(b||!c.size)&&(c.size=this._getItemSize(e));var f,g=d?this._appendCols:this._prependCols,h=Math[d?"min":"max"].apply(Math,g);if(d)f=a.inArray(h,g);else for(var i=g.length;i-->=0;)if(g[i]===h){f=i;break}return g[f]=h+(d?c.size.height:-c.size.height),{x:this._columnWidth*f,y:d?h:h-c.size.height}}},_getItemSize:function(a){return this._equalItemSize||{width:a.innerWidth(),height:a.innerHeight()}},remove:function(b){for(var c=null,d=-1,e=0,f=this.items.length;f>e;e++)if(this.items[e].el===b){d=e;break}return~d&&(c=a.extend({},this.items[d]),this.items.splice(d,1),c.el.parentNode.removeChild(c.el)),c},destroy:function(){this.off(),this.$view.off("resize",this._onResize).off("scroll",this._onScroll),this._reset()}})});


/**
 * author Christopher Blum
 *    - based on the idea of Remy Sharp, http://remysharp.com/2009/01/26/element-in-view-event-plugin/
 *    - forked from http://github.com/zuk/jquery.inview/
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){function i(){var b,c,d={height:f.innerHeight,width:f.innerWidth};return d.height||(b=e.compatMode,(b||!a.support.boxModel)&&(c="CSS1Compat"===b?g:e.body,d={height:c.clientHeight,width:c.clientWidth})),d}function j(){return{top:f.pageYOffset||g.scrollTop||e.body.scrollTop,left:f.pageXOffset||g.scrollLeft||e.body.scrollLeft}}function k(){if(b.length){var e=0,f=a.map(b,function(a){var b=a.data.selector,c=a.$element;return b?c.find(b):c});for(c=c||i(),d=d||j();e<b.length;e++)if(a.contains(g,f[e][0])){var h=a(f[e]),k={height:h[0].offsetHeight,width:h[0].offsetWidth},l=h.offset(),m=h.data("inview");if(!d||!c)return;l.top+k.height>d.top&&l.top<d.top+c.height&&l.left+k.width>d.left&&l.left<d.left+c.width?m||h.data("inview",!0).trigger("inview",[!0]):m&&h.data("inview",!1).trigger("inview",[!1])}}}var c,d,h,b=[],e=document,f=window,g=e.documentElement;a.event.special.inview={add:function(c){b.push({data:c,$element:a(this),element:this}),!h&&b.length&&(h=setInterval(k,250))},remove:function(a){for(var c=0;c<b.length;c++){var d=b[c];if(d.element===this&&d.data.guid===a.guid){b.splice(c,1);break}}b.length||(clearInterval(h),h=null)}},a(f).on("scroll resize scrollstop",function(){c=d=null}),!g.addEventListener&&g.attachEvent&&g.attachEvent("onfocusin",function(){d=null})});

/*!
 * jQuery Accordion
 * (c) 2014 Victor Fernandez <victor@vctrfrnndz.com>
 * MIT Licensed.
 */

;(function ( $, window, document, undefined ) {

	var pluginName = 'accordion',
		defaults = {
			transitionSpeed: 300,
			transitionEasing: 'ease',
			controlElement: '[data-control]',
			contentElement: '[data-content]',
			groupElement: '[data-accordion-group]',
			singleOpen: true
		};

	function Accordion(element, options) {
		this.element = element;
		this.options = $.extend({}, defaults, options);
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}

	Accordion.prototype.init = function () {
		var self = this,
			opts = self.options;

		var $accordion = $(self.element),
			$controls = $accordion.find('> ' + opts.controlElement),
			$content =  $accordion.find('> ' + opts.contentElement);

		var accordionParentsQty = $accordion.parents('[data-accordion]').length,
			accordionHasParent = accordionParentsQty > 0;

		var closedCSS = { 'max-height': 0, 'overflow': 'hidden' };

		var CSStransitions = supportsTransitions();

		function debounce(func, threshold, execAsap) {
			var timeout;

			return function debounced() {
				var obj = this,
					args = arguments;

				function delayed() {
					if (!execAsap) func.apply(obj, args);
					timeout = null;
				};

				if (timeout) clearTimeout(timeout);
				else if (execAsap) func.apply(obj, args);

				timeout = setTimeout(delayed, threshold || 100);
			};
		}

		function supportsTransitions() {
			var b = document.body || document.documentElement,
				s = b.style,
				p = 'transition';

			if (typeof s[p] == 'string') {
				return true;
			}

			var v = ['Moz', 'webkit', 'Webkit', 'Khtml', 'O', 'ms'];

			p = 'Transition';

			for (var i=0; i<v.length; i++) {
				if (typeof s[v[i] + p] == 'string') {
					return true;
				}
			}

			return false;
		}

		function requestAnimFrame(cb) {
			if(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame) {
				return  requestAnimationFrame(cb) ||
					webkitRequestAnimationFrame(cb) ||
					mozRequestAnimationFrame(cb);
			} else {
				return setTimeout(cb, 1000 / 60);
			}
		}

		function toggleTransition($el, remove) {
			if(!remove) {
				$content.css({
					'-webkit-transition': 'max-height ' + opts.transitionSpeed + 'ms ' + opts.transitionEasing,
					'transition': 'max-height ' + opts.transitionSpeed + 'ms ' + opts.transitionEasing
				});
			} else {
				$content.css({
					'-webkit-transition': '',
					'transition': ''
				});
			}
		}

		function calculateHeight($el) {
			var height = 0;

			$el.children().each(function() {
				height = height + $(this).outerHeight(true);
			});

			$el.data('oHeight', height);
		}

		function updateParentHeight($parentAccordion, $currentAccordion, qty, operation) {
			var $content = $parentAccordion.filter('.open').find('> [data-content]'),
				$childs = $content.find('[data-accordion].open > [data-content]'),
				$matched;

			if(!opts.singleOpen) {
				$childs = $childs.not($currentAccordion.siblings('[data-accordion].open').find('> [data-content]'));
			}

			$matched = $content.add($childs);

			if($parentAccordion.hasClass('open')) {
				$matched.each(function() {
					var currentHeight = $(this).data('oHeight');

					switch (operation) {
						case '+':
							$(this).data('oHeight', currentHeight + qty);
							break;
						case '-':
							$(this).data('oHeight', currentHeight - qty);
							break;
						default:
							throw 'updateParentHeight method needs an operation';
					}

					$(this).css('max-height', $(this).data('oHeight'));
				});
			}
		}

		function refreshHeight($accordion) {
			if($accordion.hasClass('open')) {
				var $content = $accordion.find('> [data-content]'),
					$childs = $content.find('[data-accordion].open > [data-content]'),
					$matched = $content.add($childs);

				calculateHeight($matched);

				$matched.css('max-height', $matched.data('oHeight'));
			}
		}

		function closeAccordion($accordion, $content) {
			$accordion.trigger('accordion.close');

			if(CSStransitions) {
				if(accordionHasParent) {
					var $parentAccordions = $accordion.parents('[data-accordion]');

					updateParentHeight($parentAccordions, $accordion, $content.data('oHeight'), '-');
				}

				$content.css(closedCSS);

				$accordion.removeClass('open');
			} else {
				$content.css('max-height', $content.data('oHeight'));

				$content.animate(closedCSS, opts.transitionSpeed);

				$accordion.removeClass('open');
			}
		}

		function openAccordion($accordion, $content) {
			$accordion.trigger('accordion.open');
			if(CSStransitions) {
				toggleTransition($content);

				if(accordionHasParent) {
					var $parentAccordions = $accordion.parents('[data-accordion]');

					updateParentHeight($parentAccordions, $accordion, $content.data('oHeight'), '+');
				}

				requestAnimFrame(function() {
					$content.css('max-height', $content.data('oHeight'));
				});

				$accordion.addClass('open');
			} else {
				$content.animate({
					'max-height': $content.data('oHeight')
				}, opts.transitionSpeed, function() {
					$content.css({'max-height': 'none'});
				});

				$accordion.addClass('open');
			}
		}

		function closeSiblingAccordions($accordion) {
			var $accordionGroup = $accordion.closest(opts.groupElement);

			var $siblings = $accordion.siblings('[data-accordion]').filter('.open'),
				$siblingsChildren = $siblings.find('[data-accordion]').filter('.open');

			var $otherAccordions = $siblings.add($siblingsChildren);

			$otherAccordions.each(function() {
				var $accordion = $(this),
					$content = $accordion.find(opts.contentElement);

				closeAccordion($accordion, $content);
			});

			$otherAccordions.removeClass('open');
		}

		function toggleAccordion() {
			var isAccordionGroup = (opts.singleOpen) ? $accordion.parents(opts.groupElement).length > 0 : false;

			calculateHeight($content);

			if(isAccordionGroup) {
				closeSiblingAccordions($accordion);
			}

			if($accordion.hasClass('open')) {
				closeAccordion($accordion, $content);
			} else {
				openAccordion($accordion, $content);
			}
		}

		function addEventListeners() {
			$controls.on('click', toggleAccordion);

			$controls.on('accordion.toggle', function() {
				if(opts.singleOpen && $controls.length > 1) {
					return false;
				}

				toggleAccordion();
			});

			$controls.on('accordion.refresh', function() {
				refreshHeight($accordion);
			});

			$(window).on('resize', debounce(function() {
				refreshHeight($accordion);
			}));
		}

		function setup() {
			$content.each(function() {
				var $curr = $(this);

				if($curr.css('max-height') != 0) {
					if(!$curr.closest('[data-accordion]').hasClass('open')) {
						$curr.css({ 'max-height': 0, 'overflow': 'hidden' });
					} else {
						toggleTransition($curr);
						calculateHeight($curr);

						$curr.css('max-height', $curr.data('oHeight'));
					}
				}
			});


			if(!$accordion.attr('data-accordion')) {
				$accordion.attr('data-accordion', '');
				$accordion.find(opts.controlElement).attr('data-control', '');
				$accordion.find(opts.contentElement).attr('data-content', '');
			}
		}

		setup();
		addEventListeners();
	};

	$.fn[pluginName] = function ( options ) {
		return this.each(function () {
			if (!$.data(this, 'plugin_' + pluginName)) {
				$.data(this, 'plugin_' + pluginName,
					new Accordion( this, options ));
			}
		});
	}

})( jQuery, window, document );

