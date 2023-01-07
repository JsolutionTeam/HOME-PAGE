<!DOCTYPE html>
<html lang="ko">
<head>
<title>제이솔루션</title>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">
<meta name="format-detection" content="telephone=no, address=no, email=no">
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
<script src="../js/jquery-1.8.3.min.js"></script>
<script src="../js/placeholders.min.js"></script><!-- input placeholder browser -->
<script src="../js/prefixfree.min.js"></script><!-- prefix browser : box-sizing -->
<!--[if lt IE 9]>
<script src="../js/html5shiv.js"></script>
<![endif]-->
</head>
<body>
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
<div id="max_wrap">
	<div id="header">
		<div class="inner">
			<h1 class="logo"><a href="/"><img src="../images/common/logo.png" alt="BIZWELL"></a></h1>
			<div class="gnb_wrap">
				<h2 class="blind">MAIN MENU</h2>
				<ul class="gnb">
					<li class="gnb-1dep">
						<h3><a href="<?php echo $co1_arr[0]['category_replace_link'] ?>" class="on">회사소개</a></h3>
						<ul class="gnb-2dep">
							<?php
							foreach($co1_arr as $key => $v) {
							?>
							<li><a href="<?php echo $v['category_replace_link'] ?>"><?php echo $v['category_name'] ?></a></li>
							<?php
							}
							?>
							<!-- <li><a href="../about.php">회사개요</a></li>
							<li><a href="../ceo.php">CEO 인사말</a></li>
							<li><a href="../organization.php">조직도</a></li>
							<li><a href="../history.php">연혁</a></li>
							<li><a href="../field.php">사업분야</a></li>
							<li><a href="../partner.php">파트너/고객사</a></li>
							<li><a href="../location.php">오시는길</a></li> -->
						</ul>
					</li>
					<li class="gnb-1dep">
						<h3><a href="prod3_category.php?cid=<?php echo $co4_arr[0]['cid'] ?>">ICT 솔루션</a></h3>

							<ul class="gnb-2dep">
							<?php
							foreach($co4_arr as $key => $v) {
							?>
							<li><a href="prod3_category.php?cid=<?php echo $v['cid'] ?>"><?php echo $v['category_name'] ?></a></li>
							<?php
							}
							?>
							</ul>

					</li>
					<li class="gnb-1dep">
						<h3><a href="prod1_list.php?cid=<?php echo $co2_arr[0]['cid'] ?>">통신상품</a></h3>
						<ul class="gnb-2dep">
							<?php
							foreach($co2_arr as $key => $v) {
							?>
							<li><a href="prod1_list.php?cid=<?php echo $v['cid'] ?>"><?php echo $v['category_name'] ?></a></li>
							<?php
							}
							?>
							<!-- <li><a href="../prod1_list.php">기업전화</a></li>
							<li><a href="javascript:;">인터넷</a></li>
							<li><a href="">IOT</a></li>
							<li><a href="">결합상품</a></li>
							<li><a href="">소호상품</a></li>
							<li><a href="">솔루션</a></li> -->
						</ul>
					</li>
					<li class="gnb-1dep">
						<h3><a href="prod2_category.php?cid=<?php echo $co3_arr[0]['cid'] ?>">전자제품</a></h3>
						<ul class="gnb-2dep">
							<?php
							foreach($co3_arr as $key => $v) {
							?>
							<li><a href="prod2_category.php?cid=<?php echo $v['cid'] ?>"><?php echo $v['category_name'] ?></a></li>
							<?php
							}
							?>
							<!-- <li><a href="../prod2_category.php">디스플레이/비즈TV</a></li>
							<li><a href="javascript:;">PC/프린팅/IT</a></li>
							<li><a href="javascript:;">주방가전</a></li>
							<li><a href="javascript:;">생활가전/음향</a></li> -->
						</ul>
					</li>
					
					<li class="gnb-1dep">
						<h3><a href="./consulting.php">맞춤 컨설팅</a></h3>
					</li>
					<li class="gnb-1dep"><h3><a class="link" target="_blank" href="./shop">임직원몰</a></h3></li>
					<li class="gnb-1dep">
						<h3><a href="commu.php?bbs_code=notice_n&mode=list">고객지원</a></h3>
						<ul class="gnb-2dep">
							<li><a href="commu.php?bbs_code=notice_n&mode=list">공지사항</a></li>
							<li><a href="faq_m.php">자주하는 질문</a></li>
						</ul>
					</li>
				</ul>
				<script>
					$(function () { 
						$(".gnb-1dep").mouseover( function () {
							var idx = $(".gnb-1dep").index(this);
							$(".gnb-1dep").eq(idx).children(".gnb-2dep").stop().slideDown(0);
						});
						$(".gnb-1dep").mouseleave( function () {
							var idx = $(".gnb-1dep").index(this);
							$(".gnb-1dep").children(".gnb-2dep").hide();
						});
					});
				</script>
			</div>
		</div>
	</div>
	<div class="fullmenu_bg" style="display:none"></div>
	<hr>
