<?php

	include "./head2021.php";
?>

<?php
$modify_mode = "modify";
$modify_type = "02_te";
$modify_page = "product_prd_write_".$modify_type;
$product_info = get_product_detail($modify_type, $_GET['pid']);
$modify_param = "?mode=". $modify_mode ."&pid=". $product_info['pid'] ."&back=". dirname(__FILE__);
$modify_url = MAX_HOST_ADMIN ."/". $modify_page .".php". $modify_param;
//echo basename(__FILE__, '.php');
//str_replace('.php', '', str_replace('/', '', str_replace(dirname(__FILE__), '', __FILE__)));
?>

<?php	include "./layout/".MAX_FILENAME.".html"; ?>

<?php
	include "./tail.php";
?>
