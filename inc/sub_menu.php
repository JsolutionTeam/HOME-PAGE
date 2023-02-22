<div class="sub_loc_wrap" style="border-top:1px solid #ddd;">
		<div class="sub_loc">
			<a href="/" class="loc_home">home</a>
			<div class="loc_depth loc_depth1">
				<p>
					<?php 
						if ($first_page=="company") {echo "회사소개";} 
						elseif ($first_page=="field") {echo "사업분야";}
						elseif ($first_page=="tech") {echo "기술 및 인증";}
						elseif ($first_page=="ict") {echo "ICT 솔루션";}
						elseif ($first_page=="help") {echo "고객지원";}
						elseif ($first_page=="shop") {echo "쇼핑몰";}
					?>
				</p>
				<ul class="menu1_lst">
					<li><a href="../about.php">회사소개</a></li>
					<li><a href="../field.php">사업분야</a></li>
					<li><a href="../tech.php">기술 및 인증</a></li>
					<li><a href="../mcall.php">ICT솔루션</a></li>
					<li><a href="../shop.php">쇼핑몰</a></li>
				</ul>
			</div>
			<div class="loc_depth loc_depth2">
				<p>
					<?php 
						if ($second_page=="about") {echo "회사개요";}
						elseif ($second_page=="ceo") {echo "CEO 인사말";}
						elseif ($second_page=="history") {echo "연혁";}
						elseif ($second_page=="location") {echo "오시는 길";}
						elseif ($second_page=="field") {echo "사업분야";}
						elseif ($second_page=="organ") {echo "조직도";}
						elseif ($second_page=="hire") {echo "인재채용";}
						elseif ($second_page=="tech1") {echo "인증현황";}
						elseif ($second_page=="tech2") {echo "상장 및 표창";}
						elseif ($second_page=="tech3") {echo "지재권현황";}
						elseif ($second_page=="huclo_aix") {echo "HUCLO AI-X 플랫폼";}
						elseif ($second_page=="huclo_people") {echo "HUCLO PEOPLE";}
						elseif ($second_page=="huclo_product") {echo "HUCLO PRODUCT";}
						elseif ($second_page=="huclo_projection") {echo "HUCLO PROJECTION";}
						elseif ($second_page=="faq") {echo "자주하는 질문";}
						elseif ($second_page=="shop") {echo "쇼핑몰";}
					?>
				</p>
				<ul class="menu2_lst">
					<?php
						if ($first_page=="company") {echo "
						<li><a href='../about.php'>회사개요</a></li>
						<li><a href='../ceo.php'>CEO 인사말</a></li>
						<li><a href='../history.php'>연혁</a></li>
						<li><a href='../location.php'>오시는 길</a></li>
						";}

						elseif ($first_page=="field") {echo "
						<li><a href='../field.php'>사업분야</a></li>
						<li><a href='../organization.php'>조직도</a></li>
						<li><a href='../hire.php'>인재채용</a></li>
						";}

						elseif ($first_page=="tech") {echo "
						<li><a href='../tech1.php'>인증현황</a></li>
						<li><a href='../tech2.php'>상장 및 표창</a></li>
						<li><a href='../tech3.php'>지재권</a></li>
						";}

						elseif ($first_page=="ict") {echo "
						<li><a href='../huclo_aix.php'>HUCLO AI-X 플랫폼</a></li>
						<li><a href='../huclo_product.php'>HUCLO PRODUCT</a></li>
						<li><a href='../huclo_people.php'>HUCLO_PEOPLE</a></li>
						<li><a href='../huclo_projection.php'>HUCLO_PROJECTION</a></li>
						<li><a href='../dtm.php'>DTM</a></li>";}

						elseif ($first_page=="help") {echo "
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
