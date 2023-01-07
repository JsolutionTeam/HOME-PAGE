<?php
	include "./shop/common.php";
	include "./head2021.php";
?>

<?php
$suc_id		= "admin";
$get_mode	= $_GET['mode'];
?>

<?php
	// 사용 안함
	if ( $get_mode === 'write' ) {
		// 쓰기 모드 (수정)
		if ( $max_member['member_id'] != $suc_id ) {
			// 쓰기 모드는 관리자(admin)만 가능합니다.
			echo "<script> alert('정상적인 접근이 아닙니다.'); location.href='history.php'; </script>";
			exit();
		}
	} else {
		// 읽기 모드 (기본)
	 	$sql = "select * from max_banner where banner_use='Y' and banner_code = 'index_history' order by banner_rank asc";
		$result = max_query($sql);
		while($row = max_assoc($result)) {
			$year = $row['banner_addfield_01'];
			$mon = $row['banner_addfield_01'];
			$his_arr[$year][$mon][] = $row;
		}

		$sql = "select banner_addfield_01 from max_banner where banner_use='Y' and banner_code = 'index_history' group by banner_addfield_01 asc";
		$result = max_query($sql);
		while($row = max_assoc($result)) {
			$his_year[] = $row;
		}
	}
?>

<?php	include "./layout/".MAX_FILENAME.".html"; ?>

<?php
	include "./tail.php";
?>
