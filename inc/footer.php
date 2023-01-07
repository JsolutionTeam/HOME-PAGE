	<div id="footer">
		<div class="ft_comp">
			<div class="ft_info1">
				<dl><dt>상호</dt><dd>(주) 제이솔루션</dd></dl>
				<dl><dt>대표이사</dt><dd>권세기</dd></dl>
				<dl><dt>대표전화</dt><dd>1644-3950</dd></dl>
				<dl><dt>팩스번호</dt><dd>053-956-3935</dd></dl>
			</div>
			<div class="ft_info2">
				<dl><dt>본사</dt><dd>대구광역시 북구 경대로17길 47, 경북대학교내 IT융합산업빌딩(115동) 602호</dd></dl>
				<dl><dt>기업부설연구소</dt><dd>대구광역시 동구 팔공로51길 41 정욱빌딩 202호</dd></dl>
				<dl><dt>사업자 등록번호</dt><dd>555-86-00969<a href="#">사업자 정보 확인</a></dd></dl>
				<dl><dt>개인정보관리책임자</dt><dd>권세기</dd></dl>
			</div>
			<cite>Copyright ⓒ 2018 BIZ-WELL. All right reserved.</cite>
		</div>
		<p id="bt_top"><a href="javascript:;">TOP</a></p>
	</div>
	<script type="text/javascript">
		// fade in #back-top
		$(function () {
			$(window).scroll(function () {
				if ($(this).scrollTop() > 100) {
					$('#bt_top').fadeIn();
				} else {
					$('#bt_top').fadeOut();
				}
			});
			// scroll body to 0px on click
			$('#bt_top a').click(function () {
				$('body,html').animate({
					scrollTop: 0
				}, 300);
				return false;
			});
		});
	</script>