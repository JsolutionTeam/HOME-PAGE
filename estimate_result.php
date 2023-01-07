<?php
	include "./shop/common.php";


	$mode		= $_POST['mod'];
	$pid		= $_POST['pid'];
	$cid		= $_POST['cid'];
	$wr_company = $_POST['wr_company'];
	$wr_name	= $_POST['wr_name'];
	$wr_tel		= $_POST['wr_tel'];
	$wr_email	= $_POST['wr_email'];
	$wr_division = $_POST['wr_division'];
	$wr_position = $_POST['wr_position'];
	$wr_addr	= $_POST['wr_addr'];
	$wr_etc		= $_POST['wr_etc'];
	$estimate_msg = "문의가 완료되었습니다.";

	$regdate	= time();
	if($mode == "01_ho") {
		$etc = $_POST['etc'];
		$tt1 = ($cid == "m_etc")?$_POST['etc']:$cid;
		$category_name= "메인($tt1)";

		$sql = "
			insert max_estimate_01_ho set
				etc				= '$etc',
				cid				= '$cid',
				regdate			= '$regdate',
				buyer_name		= '$wr_name',
				buyer_sphone	= '$wr_tel',
				buyer_email		= '$wr_email',
				buyer_company	= '$wr_company',
				wr_division	= '$wr_division',
				wr_position	= '$wr_position',
				wr_addr	= '$wr_addr',
				wr_etc	= '$wr_etc'
		";
		max_query($sql);
		echo "<script>alert('".$estimate_msg."'); history.back();</script>";
	}

	if($mode == "02_te") {
		$category_name= "통신상품";
		$prd_info = get_product_detail( "02_te", $pid );
		$category_name .= "(".$prd_info['product_name'].")";

		$sql = "
			insert max_estimate_02_te set
				pid				= $pid,
				cid				= $cid,
				regdate			= '$regdate',
				buyer_name		= '$wr_name',
				buyer_sphone	= '$wr_tel',
				buyer_email		= '$wr_email',
				buyer_company	= '$wr_company',
				wr_division	= '$wr_division',
				wr_position	= '$wr_position',
				wr_addr	= '$wr_addr',
				wr_etc	= '$wr_etc'
		";
		max_query($sql);
		echo "<script>alert('".$estimate_msg."'); history.back();</script>";
	}

	if($mode == "03_el") {
		$category_name= "전자제품";
		$prd_info = get_product_detail( "03_el", $pid );
		$category_name .= "(".$prd_info['product_name'].")";

		$sql = "
			insert max_estimate_03_el set
				pid				= $pid,
				cid				= $cid,
				regdate			= '$regdate',
				buyer_name		= '$wr_name',
				buyer_sphone	= '$wr_tel',
				buyer_email		= '$wr_email',
				buyer_company	= '$wr_company',
				wr_division	= '$wr_division',
				wr_position	= '$wr_position',
				wr_addr	= '$wr_addr',
				wr_etc	= '$wr_etc'
		";
		max_query($sql);
		echo "<script>alert('".$estimate_msg."'); history.back();</script>";
	}

	if($mode == "04_ic") {
		$category_name= "ICT 및 솔루션";
		$prd_info = get_product_detail( "04_ic", $pid );
		$category_name .= "(".$prd_info['product_name'].")";
		$sql = "
			insert max_estimate_04_ic set
				pid				= $pid,
				cid				= $cid,
				regdate			= '$regdate',
				buyer_name		= '$wr_name',
				buyer_sphone	= '$wr_tel',
				buyer_email		= '$wr_email',
				buyer_company	= '$wr_company',
				wr_division	= '$wr_division',
				wr_position	= '$wr_position',
				wr_addr	= '$wr_addr',
				wr_etc	= '$wr_etc'
		";
		max_query($sql);
		echo "<script>alert('".$estimate_msg."'); history.back();</script>";
	}

	if($mode == "05_ct") {

		$category_name= "맞춤 컨설팅";
		$buyer_name = $_POST['buyer_name'];
		$buyer_sphone = $_POST['buyer_sphone'];
		$buyer_email = $_POST['buyer_email'];
		$buyer_company = $_POST['buyer_company'];
		$buyer_company_number = $_POST['buyer_company_number'];
		$buyer_addr	= $_POST['buyer_addr'];
		$buyer_zonecode	= $_POST['buyer_zonecode'];
		$opt1 = implode("†",$_POST['opt1']);
		$opt2 = $_POST['opt2'];
		$opt3_a = $_POST['opt3_a'];
		$opt3_b = $_POST['opt3_b'];
		$opt3_c = $_POST['opt3_c'];
		$opt3_d = $_POST['opt3_d'];
		$opt3_cnt = $_POST['opt3_cnt'];
		$opt4_a = $_POST['opt4_a'];
		$opt4_b = $_POST['opt4_b'];
		$opt4_cnt = $_POST['opt4_cnt'];
		$opt_etc = $_POST['opt_etc'];


		$wr_name = $buyer_name;
		$wr_tel = $buyer_sphone;
		$wr_email = $buyer_email;
		$wr_company = $buyer_company;
		$wr_addr = $buyer_addr;
		$wr_etc = $opt_etc;

		$category_name .= "(".$opt1.")";
		$category_name = str_replace("†", ",", $category_name);

		$sql = "
			insert max_estimate_05_ct set
				regdate					= '$regdate',
				buyer_name				= '$buyer_name',
				buyer_sphone			= '$buyer_sphone',
				buyer_email				= '$buyer_email',
				buyer_company			= '$buyer_company',
				buyer_company_number	= '$buyer_company_number',
				buyer_addr				= '$buyer_addr',
				buyer_zonecode			= '$buyer_zonecode',
				opt1					= '$opt1',
				opt2					= '$opt2',
				opt3_a					= '$opt3_a',
				opt3_b					= '$opt3_b',
				opt3_c					= '$opt3_c',
				opt3_d					= '$opt3_d',
				opt3_cnt				= '$opt3_cnt',
				opt4_a					= '$opt4_a',
				opt4_b					= '$opt4_b',
				opt4_cnt				= '$opt4_cnt',
				opt_etc					= '$opt_etc',
				wr_division	= '$wr_division',
				wr_position	= '$wr_position',
				wr_addr	= '$wr_addr',
				wr_etc	= '$wr_etc'
		";
		max_query($sql);
		echo "<script>alert('".$estimate_msg."'); location.replace('/consulting.php');</script>";
	}

	// mail 발송하기.
	$fmail		= "master@dmax.kr";
	$fname		= $max_config['shop_name'];
	$subject	= '['.$category_name.'] 견적의뢰가 접수되었습니다.';//'['.$max_config['shop_name'].'] 견적의뢰가 접수되었습니다.';
	//$to			= $buyer_email;
	// 관리자 추가
	$to			= $max_config['shop_email'];
	//$to			.= ',master@dmax.kr';
	$mail_include = $_SERVER['DOCUMENT_ROOT']."estimate_mail.php";
	ob_start();
	include_once ($mail_include);
	$content = ob_get_contents();
	ob_end_clean();

	$mails = mailer( $fmail, $fname, $subject, $content, $to );
?>
