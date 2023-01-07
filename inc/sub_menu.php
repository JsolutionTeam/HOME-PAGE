<div class="sub_loc_wrap" style="border-top:1px solid #ddd;">
		<div class="sub_loc">
			<a href="/" class="loc_home">home</a>
			<div class="loc_depth loc_depth1">
				<p>
					<? 
						if ($first_page=="company") {echo "회사소개";} 
						elseif ($first_page=="tech") {echo "회사소식";}
						elseif ($first_page=="ict") {echo "ICT 솔루션";}
						elseif ($first_page=="consult") {echo "맞춤 컨설팅";}
						elseif ($first_page=="help") {echo "고객지원";}
					?>
				</p>
				<ul class="menu1_lst">
					<li><a href="../about.php">회사소개</a></li>
					<li><a href="../tech.php">회사소식</a></li>
					<li><a href="../mcall.php">ICT솔루션</a></li>
					<!--
					<li><a href="../prod1_list.php?cid=116">통신상품</a></li>
					<li><a href="../prod2_category.php?cid=27">전자제품</a></li>
					-->
					<li><a href="../consulting.php">맞춤 컨설팅</a></li>
					<!--
					<li><a href="http://www.j-sol.co.kr/shop/" target="_blank">임직원몰</a></li>
					-->
					<li><a href="../commu.php?bbs_code=notice_n&mode=list">고객지원</a></li>
				</ul>
			</div>
			<div class="loc_depth loc_depth2">
				<p>
					<? 
						if ($second_page=="about") {echo "회사개요";}
						elseif ($second_page=="ceo") {echo "CEO 인사말";}
						elseif ($second_page=="history") {echo "연혁";}
						elseif ($second_page=="field") {echo "사업분야";}
						/* elseif ($second_page=="partner") {echo "파트너 고객사";} */
						elseif ($second_page=="organization") {echo "조직도";}
						elseif ($second_page=="location") {echo "오시는 길";}

						elseif ($second_page=="tech") {echo "인증서 및 기술현황";}
						elseif ($second_page=="hire") {echo "인재채용";}
						elseif ($second_page=="mcall") {echo "M-CALL";}
						elseif ($second_page=="iam") {echo "IAM";}
						elseif ($second_page=="idm") {echo "IDM";}
						elseif ($second_page=="waiting") {echo "오케스트라";}
						elseif ($second_page=="dtm") {echo "DTM";}

						elseif ($second_page=="consulting") {echo "맞춤 컨설팅";}

						elseif ($second_page=="notice") {echo "공지사항";}
						elseif ($second_page=="faq") {echo "자주하는 질문";}
					?>
				</p>
				<ul class="menu2_lst">
					<? 
						if ($first_page=="company") {echo "
						<li><a href='../about.php'>회사개요</a></li>
						<li><a href='../ceo.php'>CEO 인사말</a></li>
						<li><a href='../history.php'>연혁</a></li>
						<li><a href='../field.php'>사업분야</a></li>
						<li><a href='../organization.php'>조직도</a></li>
						<li><a href='../location.php'>오시는 길</a></li>
						";}

						elseif ($first_page=="tech") {echo "
						<li><a href='../tech.php'>인증서 및 기술현황</a></li>
						<li><a href='../hire.php'>인재채용</a></li>
						";}

						elseif ($first_page=="ict") {echo "
						<li><a href='../mcall.php'>M-CALL</a></li>
						<li><a href='../iam.php'>IAM</a></li>
						<li><a href='../idm.php'>IDM</a></li>
						<li><a href='../waiting.php'>진료 대기 플랫폼</a></li>
						<li><a href='../dtm.php'>DTM</a></li>";}

						elseif ($first_page=="consult") {echo "
							<li><a href='../consult.php'>맞춤 컨설팅</a></li>
						";}

						elseif ($first_page=="help") {echo "
							<li><a href='../commu.php?bbs_code=notice_n&mode=list'>공지사항</a></li>
							<li><a href='../faq_m.php'>자주하는 질문</a></li>
						";}
					?>
				</ul>
			</div>

		</div>
</div>

<script>
		$(".loc_depth1").hover(function () {
			$(".menu1_lst").stop().show();
		}, function () {
			$(".menu1_lst").stop().hide();
		});
		$(".loc_depth2").hover(function () {
			$(".menu2_lst").stop().show();
		}, function () {
			$(".menu2_lst").stop().hide();
		});
		$(".loc_depth3").hover(function () {
			$(".menu3_lst").stop().show();
		}, function () {
			$(".menu3_lst").stop().hide();
		});
	</script>