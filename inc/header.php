	<div id="header">
		<div class="inner">
			<h1 class="logo"><a href="/"><img src="../images/common/logo.png" alt="BIZWELL"></a></h1>
			<div class="gnb_wrap">
				<h2 class="blind">MAIN MENU</h2>
				<ul class="gnb">
					<li class="gnb-1dep">
						<h3><a href="../about.php" class="on">ȸ��Ұ�</a></h3>
						<ul class="gnb-2dep">
							<li><a href="../about.php">ȸ�簳��</a></li>
							<li><a href="../ceo.php">CEO �λ縻</a></li>
							<li><a href="../organization.php">������</a></li>
							<li><a href="../history.php">����</a></li>
							<li><a href="../field.php">����о�</a></li>
							<li><a href="../partner.php">��Ʈ��/����</a></li>
							<li><a href="../location.php">���ô±�</a></li>
						</ul>
					</li>
					<li class="gnb-1dep">
						<h3><a href="../prod1_list.php">��Ż�ǰ</a></h3>
						<ul class="gnb-2dep">
							<li><a href="../prod1_list.php">�����ȭ</a></li>
							<li><a href="javascript:;">���ͳ�</a></li>
							<li><a href="">IOT</a></li>
							<li><a href="">���ջ�ǰ</a></li>
							<li><a href="">��ȣ��ǰ</a></li>
							<li><a href="">�ַ��</a></li>
						</ul>
					</li>
					<li class="gnb-1dep">
						<h3><a href="../prod2_category.php">������ǰ</a></h3>
						<ul class="gnb-2dep">
							<li><a href="../prod2_category.php">���÷���/����TV</a></li>
							<li><a href="javascript:;">PC/������/IT</a></li>
							<li><a href="javascript:;">�ֹ氡��</a></li>
							<li><a href="javascript:;">��Ȱ����/����</a></li>
						</ul>
					</li>
					<li class="gnb-1dep">
						<h3><a href="../prod3_category.php">ICT �� �ַ��</a></h3>
					</li>
					<li class="gnb-1dep">
						<h3><a href="../consulting.php">���� ������</a></h3>
					</li>
					<li class="gnb-1dep"><h3><a class="link" href="">��������</a></h3></li>
					<li class="gnb-1dep">
						<h3><a href="../notice.php">������</a></h3>
						<ul class="gnb-2dep">
							<li><a href="../notice.php">��������</a></li>
							<li><a href="../customer.php">�����ϴ� ����</a></li>
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