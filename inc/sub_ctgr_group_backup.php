	<?php
	$sql = "select * from max_banner where banner_code='prod1' order by banner_rank asc";
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
			<ul class="depth1 n6">
				<?php
					$get_02tearr = get_depth1_idxmenu("02_te", "on");

					foreach($get_02tearr as $key => $v) {

						
						$child_cnt = count($v['children']);
						if(!$child_cnt) {
				?>
				<li class="no_smn"><p><a class="<?php echo ($_GET['cid'] == $v['cid'])?"on":"" ?>" href="prod1_list.php?cid=<?php echo $v['cid']; ?>"><?php echo $v['category_name'] ?></a></p></li>
				<?php
						} else {

							$loc_url = "prod1_list.php?cid=";

							$on = "";
							foreach($v['children'] as $key2 => $v2) {
								if($_GET['cid'] == $v2['cid']) $on = "on";
							}
							if($_GET['cid'] == $v['cid']) $on = "on";
				?>
				<li>
					<p><a class="<?php echo $on; ?>" href="<?php echo $loc_url.$v['cid']; ?>"><?php echo $v['category_name'] ?></a></p>
					<ul class="depth2">
						<?php
							foreach($v['children'] as $key2 => $v2) {
						?>
							<li><a class="<?php echo ($_GET['cid'] == $v2['cid'])?"on":"" ?>" href="<?php echo $loc_url.$v2['cid']; ?>"><?php echo $v2['category_name'] ?></a></li>
						<?php
							}
						?>
					</ul>
				</li>
				<?php
						}
					}
				?>
				<!-- <li>
					<p><a href="javascript:;" class="on">기업전화</a></p>
					<ul class="depth2">
						<li><a href="../prod1_list.php" class="on">전화</a></li>
						<li><a href="javascript:;">인터넷전화</a></li>
						<li><a href="javascript:;">모바일</a></li>
					</ul>
				</li>
				<li>
					<p><a href="javascript:;">인터넷</a></p>
					<ul class="depth2">
						<li><a href="javascript:;">인터넷</a></li>
						<li><a href="javascript:;">TV</a></li>
						<li><a href="javascript:;">IDC</a></li>
					</ul>
				</li>
				<li class="no_smn"><p><a href="javascript:;">IOT</a></p></li>
				<li class="no_smn"><p><a href="javascript:;">결합상품</a></p></li>
				<li class="no_smn"><p><a href="javascript:;">소호상품</a></p></li>
				<li class="no_smn"><p><a href="javascript:;">솔루션</a></p></li> -->
			</ul>
		</div>
	</div>