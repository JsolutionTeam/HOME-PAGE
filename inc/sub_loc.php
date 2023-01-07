	<?php
	$text = $_SERVER['REQUEST_URI'];
	$php_self = explode("/", $text);
	$url_cnt = count($php_self) - 1;
	$this_page = $php_self[$url_cnt];
	$url_parsed = parse_url($this_page); 
	//print_r($url_parsed) ; // Array ( [path] => test.php [query] => as=das&assd=11 ) 
	$query = explode("&",$url_parsed["query"]);
	/*
	foreach($query as $key => $v) {
		$vv = explode("=", $v);
		$$key = $vv[1];
	}
	echo $cid;
	*/

	$pathinfo = pathinfo($url_parsed["path"]); 
	$now_page = $pathinfo["filename"];

	$menu = array(
		"회사소개" => array(
						"about",
						"ceo",
						"history",
						"field",
						"partner",
						"location",
						"organization"
					),
		"통신상품" => array(
						"prod1_list",
						"prod1_detail"
					),
		"전자제품" => array(
						"prod2_category",
						"prod2_list",
						"prod2_detail"
					),
		"솔루션/기타" => array(
						"prod3_category",
						"prod3_detail"
					),
		"맞춤 컨설팅" => array(
						"consulting"
					),
		"고객지원" => array(
						"commu",
						"faq_m"
					)
		);

		foreach($menu as $key => $v) {
			$cnt++;
			foreach($v as $key2 => $v2) {
				if($v2 == $now_page) { 
					$now_category_name = $key;
					$now_category_cnt = $cnt;
				}
			}
		}

		if($now_category_cnt == 1) {
			$banner_code = "about";
			$typez = "01_co";
			$sub_menu = get_depth1_idxmenu($typez, $depth);

			foreach($sub_menu as $key => $v) {
				if($v['category_replace_link'] == $url_parsed["path"]) {
					$sub_category_name = $v['category_name'];
				}
			}
		}
		if($now_category_cnt == 2) {
			$banner_code = "prod1";
			$typez = "02_te";
			$depth = "Y";
			$sub_menu = get_depth1_idxmenu($typez, $depth);

			$sub_tit = get_parent_d($_GET[cid]);
			$sub_category_name = $sub_tit['category_name'];
		}
		if($now_category_cnt == 3) {
			$banner_code = "prod2";
			$typez = "03_el";
			$depth = "Y";
			$sub_menu = get_depth1_idxmenu($typez, $depth);

			$sub_tit = get_parent_d($_GET[cid]);
			$sub_category_name = $sub_tit['category_name'];

			
			$ssub_arr = get_category_children($sub_tit['cid']);
			$ssub_category_name = get_title_only($_GET[cid]);
		}
		if($now_category_cnt == 4) {
			$banner_code = "prod3";
			$typez = "04_ic";
			$sub_menu = get_depth1_idxmenu($typez, $depth);

			$sub_tit = get_parent_d($_GET[cid]);
			$sub_category_name = $sub_tit['category_name'];
		}
		if($now_category_cnt == 5) {
			$banner_code = "consulting";
			$typez = "05_ct";
			$sub_category_name = "맞춤 컨설팅";
			$sub_menu[] = array(
				"category_name"			=> $sub_category_name,
				"category_replace_link" => "consulting.php"
			);
		}
		if($now_category_cnt == 6) {
			$banner_code = "commu";
			$sub_menu[] = array(
				"category_name"			=> "공지사항",
				"category_replace_link" => "commu.php?bbs_code=notice_n&mode=list",
				"category_replace"		=> "commu.php"
			);
			$sub_menu[] = array(
				"category_name"			=> "자주하는 질문",
				"category_replace_link" => "faq_m.php",
				"category_replace"		=> "faq_m.php"
			);
			foreach($sub_menu as $key => $v) {
				if($v['category_replace'] == $url_parsed["path"]) {
					$sub_category_name = $v['category_name'];
				}
			}
		}
	?>
	<?php
	$sql = "select * from max_banner where banner_code='$banner_code' order by banner_rank asc";
	$result = max_query($sql);
	$row = max_assoc($result)
	?>
	<div class="sub_vis" style="background: url(<?php echo MAX_HOST_BANNER;?>/<?php echo $row['banner_image']; ?>) 50% no-repeat;">
		<p><span><?php echo nl2br($row['banner_addfield_01']); ?></span><?php echo nl2br($row['banner_addfield_02']); ?></p>
	</div>
	<hr>
	<div class="sub_loc_wrap">
		<div class="sub_loc">
			<a href="/" class="loc_home">home</a>
			<div class="loc_depth loc_depth1">
				<p><?php echo $now_category_name ?></p>
				<ul class="menu1_lst">
					<li><a href="about.php">회사소개</a></li>
					<li><a href="prod1_list.php?cid=13">통신상품</a></li>
					<li><a href="prod2_category.php?cid=27">전자제품</a></li>
					<li><a href="prod3_category.php?cid=58">솔루션/기타</a></li>
					<li><a href="shop">임직원몰</a></li>
					<li><a href="consulting.php">맞춤 컨설팅</a></li>
					<li><a href="commu.php?bbs_code=notice_n&mode=list">고객지원</a></li>
				</ul>
			</div>
			<div class="loc_depth loc_depth2">
				<p><?php echo $sub_category_name ?></p>
				<ul class="menu2_lst">
					<?php
					foreach($sub_menu as $key => $v) {
					?>
						<?php
						if($now_category_cnt == 1) {
						?>
						<li><a href="<?php echo $v['category_replace_link'] ?>"><?php echo $v['category_name'] ?></a></li>
						<?php
						}
						?>
						<?php
						if($now_category_cnt == 2) {
						?>					
						<li><a href="prod1_list.php?cid=<?php echo $v['cid'] ?>"><?php echo $v['category_name'] ?></a></li>
						<?php
						}
						?>
						<?php
						if($now_category_cnt == 4) {
						?>					
						<li><a href="prod3_category.php?cid=<?php echo $v['cid'] ?>"><?php echo $v['category_name'] ?></a></li>
						<?php
						}
						?>
						<?php
						if($now_category_cnt == 3) {
						?>					
						<li><a href="prod2_category.php?cid=<?php echo $v['cid'] ?>"><?php echo $v['category_name'] ?></a></li>
						<?php
						}
						?>
						<?php
						if($now_category_cnt == 5) {
						?>
						<li><a href="<?php echo $v['category_replace_link'] ?>"><?php echo $v['category_name'] ?></a></li>
						<?php
						}
						?>
						<?php
						if($now_category_cnt == 6) {
						?>
						<li><a href="<?php echo $v['category_replace_link'] ?>"><?php echo $v['category_name'] ?></a></li>
						<?php
						}
						?>
					<?php
					}
					?>
				</ul>
			</div>
			<?php
			if($now_category_cnt == 3) {
			?>		
			<div class="loc_depth loc_depth3">
				<p><?php echo $ssub_category_name ?></p>
				<ul class="menu3_lst">
					<?php
					foreach($ssub_arr as $key => $v) {
					?>
					<li><a href="prod2_list.php?cid=<?php echo $v['cid'] ?>"><?php echo $v['category_name'] ?></a></li>
					<?php
					}
					?>
				<ul>
			</div>
			<?php
			}
			?>
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