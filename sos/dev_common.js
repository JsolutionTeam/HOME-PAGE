/**
 * 개발 common js
 */

$(document).ready(function(){
	
	//글자 카운터 기능 S
	//페이지 내 글자카운터 클래스 수 만큼 기능실행
	$(".maxString").each(function(){
		//로드시 데이터가 있을시 글자수 초기화 세팅
		var wordMaxLength = $(this).attr("maxlength");
		$(this).parent().find(" .count_num").html("<span>"+$(this).val().length+"</span> / "+ wordMaxLength +"자");
	});
	//페이지 내 글자카운터 입력시 실시간 카운트
	$(function() {
	      $('.maxString').keyup(function (e){
	    	  var wordMaxLength = $(this).attr("maxlength");
	          var content = $(this).val();
	          $(this).parent().find(" .count_num").html('<span>'+content.length +'</span> / '+ wordMaxLength + '자');
	      });
	});
	//글자 카운터 기능 E
	
});

//숫자만 체크 함수 기능 S
function onlyNumber(event){
	event = event || window.event;
	var keyID = (event.which) ? event.which : event.keyCode;
	if ( (keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105) || keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 || keyID == 9 ) 
		return;
	else
		return false;
}
function removeChar(event) {
	event = event || window.event;
	var keyID = (event.which) ? event.which : event.keyCode;
	if ( keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 ) 
		return;
	else
		event.target.value = event.target.value.replace(/[^0-9]/g, "");
}
//숫자만 체크 함수 기능 E
