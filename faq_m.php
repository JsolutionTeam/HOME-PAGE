<?php

	include "./head2021.php";

$max_skin = skin_loads();

	// 자주 묻는 질문 뽑아오기.
	$fb_sql = "SELECT * FROM max_faq2 AS F LEFT JOIN max_faq2_category AS FC ON F.faq_category = FC.fcid WHERE F.faq_best = 'Y' and F.faq_use = 'Y' ORDER BY F.faq_rank";
	$fb_result = max_query($fb_sql);
	$fb_list = array();
	while( $list = max_assoc($fb_result ) ){
		$fb_list[] = $list;
	}

	// 카테고리 뽑아오기
	$fc_sql = "SELECT * FROM max_faq2_category WHERE fc_use = 'Y' ORDER BY fc_rank";
	$fc_result = max_query($fc_sql);
	$fc_list = array();
	while( $list = max_assoc($fc_result) ){
		$fc_list[] = $list;
	}



	// 질문 뽑아오기
	$search = '';
	$query = '';
	if( $faq_keyword ){
		$search .= " AND F.faq_question LIKE '%{$faq_keyword}%'";
		$query = 'faq_keyword='.$faq_keyword;
	}
	if( $faq_category ){
		$search .= " AND F.faq_category = '{$faq_category}'";
		$query .= '&amp;faq_category='.$faq_category;
	}
	$sql_page = "SELECT COUNT(*) AS C FROM max_faq2 AS F LEFT JOIN max_faq2_category AS FC ON F.faq_category = FC.fcid WHERE F.faq_use = 'Y'{$search}";

	$count = max_assoc(max_query($sql_page));
	$list_num = 10;
	$list_page = 10;
	if( !$page || $page <= 0 ) $page =1;
	

	$max_paging = max_paging($count['C'],$list_num,$list_page,$page,'page',"faq_m.php",$query);

	$sql = "SELECT * FROM max_faq2 AS F LEFT JOIN max_faq2_category AS FC ON F.faq_category = FC.fcid WHERE F.faq_use = 'Y'{$search} ORDER BY F.faq_rank {$max_paging['limit']}";
	
	$result = max_query($sql);
	$faq_list = array();

	while( $list = max_assoc($result) ){
		$faq_list[] = $list;
	}
	$title = '자주하는 질문';
?>
	
<?php	include "./layout/".MAX_FILENAME.".html"; ?>

<?php
	include "./tail.php";
?>
