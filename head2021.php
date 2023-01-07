<!DOCTYPE html>
<html lang="ko">
<head>
<title>제이솔루션</title>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta charset="utf-8">
<meta http-equiv="Pragma" content="no-cache" />
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">
<meta name="format-detection" content="telephone=no, address=no, email=no">
<link href="../sos/bootstrap.min.css" rel="stylesheet">
<link href="../css/common.css" type="text/css" rel="stylesheet">
<!-- <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,400,500,700" rel="stylesheet"> -->
<?php
if( $_SERVER['REMOTE_ADDR'] != '115.90.106.188' ){
?>
<link rel="stylesheet" href="https://use.typekit.net/vzu7ewf.css">
<link rel="stylesheet" href="http://font.dmax.kr/dmax_notokr.css">
<?php
}
?>
<!-- <script src="../js/jquery-1.8.3.min.js"></script> -->
<script src="../js/placeholders.min.js"></script><!-- input placeholder browser -->
<script src="../js/prefixfree.min.js"></script><!-- prefix browser : box-sizing -->
<!--[if lt IE 9]>
<script src="../js/html5shiv.js"></script>
<![endif]-->

<!-- css -->
<link href="../sos/aos.css" rel="stylesheet">
<script src="../sos/aos.js"></script>

</head>

<!--[if (ie 8)|(ie 9)]>
<div id="max_browser_msg">
	<h1 class="skip">권장 브라우저 안내</h1>
	<p>IE버전이 낮아 홈페이지 이용에 불편함이 있으므로 <mark>IE10이상이나 다른 브라우저를 이용해 주세요.</mark> 편리한 사이트 이용을 위하여 최신 브라우저로 업그레이드를 권장합니다. 하위버전의 브라우저는 보안에 취약하오니 브라우저 업데이트를 꼭 해주시기 바랍니다.</p>
	<a href="https://browsehappy.com/" target="_blank" title="새창으로 열기" class="bt_browser_upgrade">브라우저 업그레이드 하기</a>
	<a href="javascript:;" class="bt_close_browser">닫기</a>
</div>
<script type="text/javascript">
	$('.bt_close_browser').click(function(){
		$('#max_browser_msg').slideUp(300);
	});
</script>
<![endif]-->

<LINK href="../sos/type_jh.css" rel="stylesheet" type="text/css"> 
<LINK href="../sos/jquery.lib.css" rel="stylesheet" type="text/css">

<script src="//code.jquery.com/jquery.min.js"></script>

<SCRIPT src="../sos/hvi.ui.js"></SCRIPT>
<SCRIPT src="../sos/jquery.lib.js"></SCRIPT>
<LINK href="../fontawesome/css/all.css" rel="stylesheet">
<LINK href="../wolfnav/wolfNav.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="../wolfnav/jquery.WolfNav.js"></script>

<script type="text/javascript">
$(document).ready(function() {
	$('.nav3').WolfHaruNav();
});
</script>

<script>
$(document).ready(function(){
	var urlPathForMain = window.location.pathname;
	if(urlPathForMain != null) {
		if(urlPathForMain.match("/index")) {
			$("#footerMain").show();
			$("header.sub").remove();
			$("header.main").show();
		} else {
			$("#footerMain").hide();
			$("header.sub").show();
			$("header.main").remove();
		}
	}
});
</script>

<div class="wrap">
<div class="wrap_header">
	<HEADER class="header main">
		<div class="inner_wrap">
			<div class="m_menu">
				<a href="#;" class="header_mobile_totalMenu">
					<i class="fas fa-list"></i>
				</a>
				<div class="nav3">
					<ul>
						<li>
							<a href="../about.php">회사소개</a>
							<ul>
								<li><a href="../about.php">회사개요</a></li>
								<li><a href="../ceo.php">CEO 인사말</a></li>
								<li><a href="../history.php">연혁</a></li>
								<li><a href="../field.php">사업분야</a></li>
								<li><a href="../organization.php">조직도</a></li>
								<li><a href="../location.php">오시는 길</a></li>
							</ul>
						</li>
						<li>
							<a href="../tech.php">회사소식</a>
							<ul>
								<li><a href="../tech.php">인증서 및 기술현황</a></li>
								<li><a href="../hire.php">인재채용</a></li>
							</ul>
						</li>
						<li>
							<a href="../mcall.php">ICT 솔루션</a>
							<!--
							<ul>
								<li><a href="../prod3_category.php?cid=362">ICT 솔루션</a></li>
							</ul>
							-->
							<ul>
								<li><a href="../mcall.php">M-CALL</a></li>
								<li><a href="../iam.php">IAM</a></li>
								<li><a href="../idm.php">IDM</a></li>
								<li><a href="../waiting.php">오케스트라</a></li>
								<li><a href="../dtm.php">DTM</a></li>
							</ul>
						</li>
						<!--
						<li>
							<a href="../prod1_list.php?cid=116">통신상품</a>
							<ul>
								<li><a href="../prod1_list.php?cid=116">모바일</a></li>
								<li><a href="../prod1_list.php?cid=7">기업전화</a></li>
								<li><a href="../prod1_list.php?cid=8">인터넷</a></li>
								<li><a href="../prod1_list.php?cid=9">IOT</a></li>
								<li><a href="../prod1_list.php?cid=10">결합상품</a></li>
								<li><a href="../prod1_list.php?cid=11">소호상품</a></li>
								<li><a href="../prod1_list.php?cid=12">솔루션</a></li>
							</ul>
						</li>
						<li>
							<a href="../prod2_category.php?cid=27">전자제품</a>
							<ul>
								<li><a href="../prod2_category.php?cid=27">디스플레이/비즈TV</a></li>
								<li><a href="../prod2_category.php?cid=28">PC/프린팅/IT</a></li>
								<li><a href="../prod2_category.php?cid=29">주방가전</a></li>
								<li><a href="../prod2_category.php?cid=30">생활가전 A/V</a></li>
							</ul>
						</li>
						-->
						<li>
							<a href="../consulting.php">맞춤 컨설팅</a>
							<ul>
								<li><a href="../consulting.php">맞춤 컨설팅</a></li>
							</ul>
						</li>
						<!--
						<li>
							<a href="http://www.j-sol.co.kr/shop/" target="_blank">임직원 몰</a>
							<ul>
								<li><a href="http://www.j-sol.co.kr/shop/" target="_blank">임직원 몰</a></li>
							</ul>
						</li>
						-->
						<li>
							<a href="../commu.php?bbs_code=notice_n&mode=list">고객지원</a>
							<ul>
								<li><a href="../commu.php?bbs_code=notice_n&mode=list">공지사항</a></li>
								<li><a href="../faq_m.php">FAQ</a></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>

			<H1 class="logo">
				<a href="/index.php" target="_self">
					<img src="../image/logo.png" alt="BIZWELL">
				</a>
			</H1>
			<NAV class="gnb">
				<ul>
					<li>
							<a href="../about.php">회사소개</a>
							<ul>
								<li><a href="../about.php">회사개요</a></li>
								<li><a href="../ceo.php">CEO 인사말</a></li>
								<li><a href="../history.php">연혁</a></li>
								<li><a href="../field.php">사업분야</a></li>
								<li><a href="../organization.php">조직도</a></li>
								<li><a href="../location.php">오시는 길</a></li>
							</ul>
						</li>
						<li>
							<a href="../tech.php">회사소식</a>
							<ul>
								<li><a href="../tech.php">인증서 및 기술현황</a></li>
								<li><a href="../hire.php">인재채용</a></li>
							</ul>
						</li>
						<li>
							<a href="../mcall.php">ICT 솔루션</a>
							<ul>
								<li><a href="../mcall.php">M-CALL</a></li>
								<li><a href="../iam.php">IAM</a></li>
								<li><a href="../idm.php">IDM</a></li>
								<li><a href="../waiting.php">오케스트라</a></li>
								<li><a href="../dtm.php">DTM</a></li>
							</ul>
						</li>
						<!--
						<li>
							<a href="../prod1_list.php?cid=116">통신상품</a>
							<ul>
								<li><a href="../prod1_list.php?cid=116">모바일</a></li>
								<li><a href="../prod1_list.php?cid=7">기업전화</a></li>
								<li><a href="../prod1_list.php?cid=8">인터넷</a></li>
								<li><a href="../prod1_list.php?cid=9">IOT</a></li>
								<li><a href="../prod1_list.php?cid=10">결합상품</a></li>
								<li><a href="../prod1_list.php?cid=11">소호상품</a></li>
								<li><a href="../prod1_list.php?cid=12">솔루션</a></li>
							</ul>
						</li>
						<li>
							<a href="../prod2_category.php?cid=27">전자제품</a>
							<ul>
								<li><a href="../prod2_category.php?cid=27">디스플레이/비즈TV</a></li>
								<li><a href="../prod2_category.php?cid=28">PC/프린팅/IT</a></li>
								<li><a href="../prod2_category.php?cid=29">주방가전</a></li>
								<li><a href="../prod2_category.php?cid=30">생활가전 A/V</a></li>
							</ul>
						</li>
						-->
						<li>
							<a href="../consulting.php">맞춤 컨설팅</a>
							<ul>
								<li><a href="../consulting.php">맞춤 컨설팅</a></li>
							</ul>
						</li>
						<!--
						<li>
							<a href="http://www.j-sol.co.kr/shop/" target="_blank">임직원 몰</a>
							<ul>
								<li><a href="http://www.j-sol.co.kr/shop/" target="_blank">임직원 몰</a></li>
							</ul>
						</li>
						-->
						<li>
							<a href="../commu.php?bbs_code=notice_n&mode=list">고객지원</a>
							<ul>
								<li><a href="../commu.php?bbs_code=notice_n&mode=list">공지사항</a></li>
								<li><a href="../faq_m.php">FAQ</a></li>
							</ul>
						</li>
				</ul>
			</NAV>
		</div>
	</HEADER>

	<!-- 서브페이지 메뉴 -->
	<HEADER class="header sub" style="position:fixed" >
		<div class="inner_wrap" >
			<a href="#;" class="header_mobile_totalMenu">
				<i class="fas fa-list"></i>
			</a>
			<div class="m_menu">
				<div class="nav3">
					<ul>
						<li>
							<a href="../about.php">회사소개</a>
							<ul>
								<li><a href="../about.php">회사개요</a></li>
								<li><a href="../ceo.php">CEO 인사말</a></li>
								<li><a href="../history.php">연혁</a></li>
								<li><a href="../field.php">사업분야</a></li>
								<li><a href="../organization.php">조직도</a></li>
								<li><a href="../location.php">오시는 길</a></li>
							</ul>
						</li>
						<li>
							<a href="../tech.php">회사소식</a>
							<ul>
								<li><a href="../tech.php">인증서 및 기술현황</a></li>
								<li><a href="../hire.php">인재채용</a></li>
							</ul>
						</li>
						<li>
							<a href="../mcall.php">ICT 솔루션</a>
							<ul>
								<li><a href="../mcall.php">M-CALL</a></li>
								<li><a href="../iam.php">IAM</a></li>
								<li><a href="../idm.php">IDM</a></li>
								<li><a href="../waiting.php">오케스트라</a></li>
								<li><a href="../dtm.php">DTM</a></li>
							</ul>
						</li>
						<!--
						<li>
							<a href="../prod1_list.php?cid=116">통신상품</a>
							<ul>
								<li><a href="../prod1_list.php?cid=116">모바일</a></li>
								<li><a href="../prod1_list.php?cid=7">기업전화</a></li>
								<li><a href="../prod1_list.php?cid=8">인터넷</a></li>
								<li><a href="../prod1_list.php?cid=9">IOT</a></li>
								<li><a href="../prod1_list.php?cid=10">결합상품</a></li>
								<li><a href="../prod1_list.php?cid=11">소호상품</a></li>
								<li><a href="../prod1_list.php?cid=12">솔루션</a></li>
							</ul>
						</li>
						<li>
							<a href="../prod2_category.php?cid=27">전자제품</a>
							<ul>
								<li><a href="../prod2_category.php?cid=27">디스플레이/비즈TV</a></li>
								<li><a href="../prod2_category.php?cid=28">PC/프린팅/IT</a></li>
								<li><a href="../prod2_category.php?cid=29">주방가전</a></li>
								<li><a href="../prod2_category.php?cid=30">생활가전 A/V</a></li>
							</ul>
						</li>
						-->
						<li>
							<a href="../consulting.php">맞춤 컨설팅</a>
							<ul>
								<li><a href="../consulting.php">맞춤 컨설팅</a></li>
							</ul>
						</li>
						<!--
						<li>
							<a href="http://www.j-sol.co.kr/shop/" target="_blank">임직원 몰</a>
							<ul>
								<li><a href="http://www.j-sol.co.kr/shop/" target="_blank">임직원 몰</a></li>
							</ul>
						</li>
						-->
						<li>
							<a href="../commu.php?bbs_code=notice_n&mode=list">고객지원</a>
							<ul>
								<li><a href="../commu.php?bbs_code=notice_n&mode=list">공지사항</a></li>
								<li><a href="../faq_m.php">FAQ</a></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>

			<H1 class="logo">
				<a href="/index.php" target="_self">
					<img src="../image/logo.png" alt="BIZWELL">
				</a>
			</H1>
			<NAV class="gnb">
				<ul>
					<li>
						<a href="../<?php echo $co1_arr[0]['category_replace_link'] ?>" class="on">회사소개</a>
						<ul>
							<li><a href="../about.php">회사개요</a></li>
							<li><a href="../ceo.php">CEO 인사말</a></li>
							<li><a href="../history.php">연혁</a></li>
							<li><a href="../field.php">사업분야</a></li>
							<li><a href="../organization.php">조직도</a></li>
							<li><a href="../location.php">오시는 길</a></li>
						</ul>
					</li>
					<li>
						<a href="../tech.php">회사소식</a>
						<ul>
							<li><a href="../tech.php">인증서 및 기술현황</a></li>
							<li><a href="../hire.php">인재채용</a></li>
						</ul>
					</li>
					<li>
						<a href="../mcall.php">ICT 솔루션</a>
						<ul>
							<li><a href="../mcall.php">M-CALL</a></li>
							<li><a href="../iam.php">IAM</a></li>
							<li><a href="../idm.php">IDM</a></li>
							<li><a href="../waiting.php">오케스트라</a></li>
							<li><a href="../dtm.php">DTM</a></li>
						</ul>
					</li>
					<li>
						<a href="../consulting.php">맞춤 컨설팅</a>
						<ul>
							<li><a href="../consulting.php">맞춤 컨설팅</a></li>
						</ul>
					</li>
					<!--
					<li>
						<a class="link" target="_blank" href="../shop">임직원몰</a>
						<ul>
							<li><a href="../shop" target="_blank">임직원몰</a></li>
						</ul>
					</li>
					-->
					<li>
						<a href="../commu.php?bbs_code=notice_n&mode=list">고객지원</a>
						<ul>
							<li><a href="../commu.php?bbs_code=notice_n&mode=list">공지사항</a></li>
							<li><a href="../faq_m.php">자주하는 질문</a></li>
						</ul>
					</li>
				</ul>
			</NAV>
		</div>
		<!-- 줄 메뉴
		<div class="wrap_nav">
			<div class="inner_wrap">
				<div class="nav" >
					<a class="btn_home" href="/index.php" target="_self">
					<SPAN class="blind">메인</SPAN></a>
				</div>
				<div id="dev1_index">
					<div class="nav" >
						<div class="select">
							<A id="selectName" href="../company/about.php#">회사소개</a>
							<ul>
								<li><a href="../company/about.php" data-groupnames="/company">회사소개</a></li>
								<li><a href="../ict/prod3_category.php?cid=362" data-groupnames="/ict">ICT 솔루션</a></li>
								<li><a href="../tong/prod1_list.php?cid=116" data-groupnames="/tong">통신상품</a></li>
								<li><a href="../elec/prod2_category.php?cid=27" data-groupnames="/elec">전자제품</a></li>
								<li><a href="../consult/consulting.php" data-groupnames="/consult">맞춤 컨설팅</a></li>
								<li><a href="http://www.j-sol.co.kr/shop/" target="_blank">임직원몰</a></li>
								<li><a href="../guest/commu.php?bbs_code=notice_n&mode=list" data-groupnames="guest">고객지원</a></li>
							</ul>
						</div>
					</div>
				</div>
				<!-- 서브 소메뉴 
				<div id="dev2Nav_company" style="display:none;">
					<div class="nav">
						<div class="select">
							<a class="selectName2" href="##">전체</a>
							<ul>
								<li><A href="../company/about.php" data-groupnames="/about">회사개요</a></li>
								<li><A href="../company/ceo.php" data-groupnames="/ceo">CEO 인사말</a></li>
								<li><A href="../company/history.php" data-groupnames="/history">연혁</a></li>
								<li><A href="../company/field.php" data-groupnames="/field">사업분야</a></li>
								<li><A href="../company/organization.php" data-groupnames="/organization">조직도</a></li>
								<li><A href="../company/location.php" data-groupnames="/location">오시는 길</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div id="dev2Nav_ict" style="display:none;">
					<div class="nav">
						<div class="select">
							<a class="selectName2" href="##">전체</a>
							<ul>
								<li><A href="../ict/prod3_category.php?cid=362" data-groupnames="/ict1">ICT 솔루션</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div id="dev2Nav_tong" style="display:none;">
					<div class="nav">
						<div class="select">
							<a class="selectName2" href="##">전체</a>
							<ul>
								<li><A href="../tong/prod1_list.php?cid=116" data-groupnames="/mobile">모바일</a></li>
								<li><A href="../tong/prod1_list.php?cid=7" data-groupnames="/company_phone">기업전화</a></li>
								<li><A href="../tong/prod1_list.php?cid=8" data-groupnames="/internet">인터넷</a></li>
								<li><A href="../tong/prod1_list.php?cid=9" data-groupnames="/iot">IOT</a></li>
								<li><A href="../tong/prod1_list.php?cid=10" data-groupnames="/plus">결합상품</a></li>
								<li><A href="../tong/prod1_list.php?cid=11" data-groupnames="/soho">소호상품</a></li>
								<li><A href="../tong/prod1_list.php?cid=12" data-groupnames="/solution">솔루션</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div id="dev2Nav_elec" style="display:none;">
					<div class="nav">
						<div class="select">
							<a class="selectName2" href="##">전체</a>
							<ul>
								<li><A href="../elec/prod2_category.php?cid=27" data-groupnames="/tv">디스플레이/비즈TV</a></li>
								<li><A href="../elec/prod2_category.php?cid=28" data-groupnames="/pc">PC/프린팅/IT</a></li>
								<li><A href="../elec/prod2_category.php?cid=29" data-groupnames="/joobang">주방가전</a></li>
								<li><A href="../elec/prod2_category.php?cid=30" data-groupnames="/living">생활가전 A/V</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div id="dev2Nav_consult" style="display:none;">
					<div class="nav">
						<div class="select">
							<a class="selectName2" href="##">전체</a>
							<ul>
								<li><A href="../consulting.php" data-groupnames="/consulting">맞춤컨설팅</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div id="dev2Nav_guest" style="display:none;">
					<div class="nav">
						<div class="select">
							<a class="selectName2" href="##">전체</a>
							<ul>
								<li><A href="/commu.php?bbs_code=notice_n&mode=list" data-groupnames="/ict1">공지사항</a></li>
								<li><A href="/faq_m.php" data-groupnames="/ict1">자주하는 질문</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		-->
	</HEADER>
</div>
</div>

</HEAD> 
<script> 
	AOS.init(); 
</script>