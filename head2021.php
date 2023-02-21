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
<link rel="stylesheet" href="https://use.typekit.net/vzu7ewf.css">
<link rel="stylesheet" href="http://font.dmax.kr/dmax_notokr.css">
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
								<li><a href="../location.php">오시는 길</a></li>
							</ul>
						</li>
						<li>
							<a href="../field.php">사업분야</a>
							<ul>
								<li><a href="../field.php">사업분야</a></li>
								<li><a href="../organization.php">조직도</a></li>
								<li><a href="../hire.php">인재채용</a></li>
							</ul>
						</li>

						<li>
							<a href="../tech1.php">기술 및 인증</a>
							<ul>
								<li><a href="../tech1.php">인증 현황</a></li>
								<li><a href="../tech2.php">상장 및 표창</a></li>
								<li><a href="../tech3.php">지재권 현황</a></li>
							</ul>
						</li>

						<li>
							<a href="../huclo_aix.php">ICT 솔루션</a>
							<ul>
								<li><a href="../huclo_aix.php">HUCLO AI-X 플랫폼</a></li>
								<li><a href="../huclo_product.php">HUCLO PRODUCT</a></li>
								<li><a href="../huclo_people.php">HUCLO PEOPLE</a></li>
								<li><a href="../huclo_projection.php">HUCLO PROJECTION</a></li>
							</ul>
						</li>
						<li>
							<a href="../faq_m.php">고객지원</a>
							<ul>
								<li><a href="../faq_m.php">FAQ</a></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>

			<H1 class="logo">
				<a href="/index.php" target="_self">
					<img src="../image/logo.png" alt="jsolution" style="width:100%">
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
							<li><a href="../location.php">오시는 길</a></li>
						</ul>
					</li>
					<li>
						<a href="../field.php">사업분야</a>
						<ul>
							<li><a href="../field.php">사업분야</a></li>
							<li><a href="../organization.php">조직도</a></li>
							<li><a href="../hire.php">인재채용</a></li>
						</ul>
					</li>
					<li>
						<a href="../tech1.php">기술 및 인증</a>
						<ul>
							<li><a href="../tech1.php">인증 현황</a></li>
							<li><a href="../tech2.php">상장 및 표창</a></li>
							<li><a href="../tech3.php">지재권 현황</a></li>
						</ul>
					</li>

					<li>
						<a href="../huclo_aix.php">ICT 솔루션</a>
						<ul>
							<li><a href="../huclo_aix.php">HUCLO AI-X 플랫폼</a></li>
							<li><a href="../huclo_product.php">HUCLO PRODUCT</a></li>
							<li><a href="../huclo_people.php">HUCLO PEOPLE</a></li>
							<li><a href="../huclo_projection.php">HUCLO PROJECTION</a></li>
						</ul>
					</li>

						<li>
							<a href="../faq_m.php">고객지원</a>
							<ul>
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
								<li><a href="../location.php">오시는 길</a></li>
							</ul>
						</li>
						<li>
							<a href="../field.php">사업분야</a>
							<ul>
								<li><a href="../field.php">사업분야</a></li>
								<li><a href="../organization.php">조직도</a></li>
								<li><a href="../hire.php">인재채용</a></li>
							</ul>
						</li>
						<li>
							<a href="../tech1.php">기술 및 인증</a>
							<ul>
								<li><a href="../tech1.php">인증 현황</a></li>
								<li><a href="../tech2.php">상장 및 표창</a></li>
								<li><a href="../tech3.php">지재권 현황</a></li>
							</ul>
						</li>
						<li>
						<a href="../huclo_aix.php">ICT 솔루션</a>
							<ul>
								<li><a href="../huclo_aix.php">HUCLO AI-X 플랫폼</a></li>
								<li><a href="../huclo_product.php">HUCLO PRODUCT</a></li>
								<li><a href="../huclo_people.php">HUCLO PEOPLE</a></li>
								<li><a href="../huclo_projection.php">HUCLO PROJECTION</a></li>
							</ul>
						</li>
						<li>
							<a href="../faq_m.php">고객지원</a>
							<ul>
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
								<li><a href="../location.php">오시는 길</a></li>
							</ul>
						</li>
						<li>
							<a href="../field.php">사업분야</a>
							<ul>
								<li><a href="../field.php">사업분야</a></li>
								<li><a href="../organization.php">조직도</a></li>
								<li><a href="../hire.php">인재채용</a></li>
							</ul>
						</li>
						<li>
							<a href="../tech1.php">기술 및 인증</a>
							<ul>
								<li><a href="../tech1.php">인증 현황</a></li>
								<li><a href="../tech2.php">상장 및 표창</a></li>
								<li><a href="../tech3.php">지재권 현황</a></li>
							</ul>
						</li>
						<li>
						<a href="../huclo_aix.php">ICT 솔루션</a>
							<ul>
								<li><a href="../huclo_aix.php">HUCLO AI-X 플랫폼</a></li>
								<li><a href="../huclo_product.php">HUCLO PRODUCT</a></li>
								<li><a href="../huclo_people.php">HUCLO PEOPLE</a></li>
								<li><a href="../huclo_projection.php">HUCLO PROJECTION</a></li>
							</ul>
						</li>
						
						<li>
							<a href="../faq_m.php">고객지원</a>
							<ul>
								<li><a href="../faq_m.php">FAQ</a></li>
							</ul>
						</li>
				</ul>
			</NAV>
		</div>

	</HEADER>
</div>
</div>

</HEAD> 
<script> 
	AOS.init(); 
</script>
