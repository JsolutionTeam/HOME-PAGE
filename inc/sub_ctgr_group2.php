	<?php
	$sql = "select * from max_banner where banner_code='prod2' order by banner_rank asc";
	$result = max_query($sql);
	$row = max_assoc($result)
	?>
	<div class="sub_vis" style="background: url(<?php echo MAX_HOST_BANNER;?>/<?php echo $row['banner_image']; ?>) 50% no-repeat;">
		<p><span><?php echo nl2br($row['banner_addfield_01']); ?></span><?php echo nl2br($row['banner_addfield_02']); ?></p>
	</div>
	<hr>
	<div class="sub_ctgr_group">
		<div class="full_box">
			<p class="full_tit blind">CATEGORY</p>
			<ul class="depth1 n4">
				<?php
					$get_03elarr = get_depth1_idxmenu("03_el","on");

					foreach($get_03elarr as $key => $v) {
						$child_cnt = count($v['children']);
				?>
				<li>
					<p><a class="<?php echo ($_GET['cid'] == $v['cid'])?"on":"" ?>" href="prod2_category.php?cid=<?php echo $v['cid']; ?>"><?php echo $v['category_name'] ?></a></p>
					<ul class="depth2">
						<?php
							foreach($v['children'] as $key2 => $v2) {
						?>
							<li><a href="prod2_list.php?cid=<?php echo $v2['cid']; ?>"><?php echo $v2['category_name'] ?></a></li>
						<?php
							}
						?>
					</ul>
				</li>
				<?php
					}
				?>
				<!-- <li>
					<p><a href="javascript:;" class="on">디스플레이/TV</a></p>
					<ul class="depth2">
						<li><a href="../prod1_list.php">스마트 사이니지</a></li>
						<li><a href="javascript:;">커브드 모니터</a></li>
						<li><a href="javascript:;">비디오 월</a></li>
						<li><a href="javascript:;">모니터</a></li>
					</ul>
				</li>
				<li>
					<p><a href="javascript:;">PC/프린팅/IT</a></p>
					<ul class="depth2">
						<li><a href="javascript:;">일체형 PC</a></li>
						<li><a href="javascript:;">모바일/태블릿</a></li>
						<li><a href="javascript:;">데스크탑</a></li>
						<li><a href="javascript:;">태블릿 PC</a></li>
						<li><a href="javascript:;">노트북</a></li>
						<li><a href="javascript:;">복합기</a></li>
					</ul>
				</li>
				</li>
				<li>
					<p><a href="javascript:;">주방가전</a></p>
					<ul class="depth2">
						<li><a href="javascript:;">냉장고</a></li>
						<li><a href="javascript:;">조리기기/전자레인지</a></li>
						<li><a href="javascript:;">식기세척기</a></li>
					</ul>
				</li>
				<li>
					<p><a href="javascript:;">생활가전/음향</a></p>
					<ul class="depth2">
						<li><a href="javascript:;">에어컨</a></li>
						<li><a href="javascript:;">세탁기</a></li>
						<li><a href="javascript:;">청소기</a></li>
						<li><a href="javascript:;">에어케어</a></li>
						<li><a href="javascript:;">공기청정기/제습기/가습기</a></li>
						<li><a href="javascript:;">사운드바</a></li>
						<li><a href="javascript:;">하만</a></li>
					</ul>
				</li> -->
			</ul>

		</div>
	</div>