
	<div class="sub_vis2" style="background:#ddd url(../image/subimg<?php if ($first_page=="company") {echo "01";} elseif ($first_page=="tech"){echo "02";} elseif ($first_page=="ict"){echo "03";} elseif ($first_page=="field"){echo "04";} elseif ($first_page=="help"){echo "05";}?>.jpg) 50% no-repeat;" data-aos='fade-down'>
	<?php if ($first_page=="company") {echo "<p><span>B2B 전문 컨설팅 회사 제이솔루션</span>기업환경에 적합한 최적의 솔루션을 제안해드립니다.</p>";}
		elseif ($first_page=="tech") {echo "<p style='color:#fff'><span>기업상황을 체계적으로 분석하여 최적의 솔루션을 제공합니다.</span>ICT 솔루션</p>";}
		elseif ($first_page=="ict") {echo "<p><span>기업상황을 체계적으로 분석하여 최적의 솔루션을 제공합니다.</span>ICT 솔루션</p>";}
		elseif ($first_page=="field") {echo "<p ><span>제이솔루션은 B2B 전문 컨설팅 회사로<br>기업의 사업환경에 적합한 상품을 제공합니다.</span>맞춤컨설팅</p>";}
		elseif ($first_page=="help") {echo "<p style='color:#222'><span>B2B 전문 상품 컨설팅 회사 제이솔루션</span>기업의 사업환경에 최적의 솔루션을 제안해드립니다.</p>";}
	?>
	</div>

<!-- 통신상품과 전자제품은 관리자페이지의 설정부분에서 등록합니다. 기존의 메뉴를 수정할 수 없어 통신,전자제품 메뉴를 제외한 메뉴의 서브디자인과 서브메뉴를 따로 지정합니다.  -->
