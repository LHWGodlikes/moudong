<?php
include("./config.php");

$username = $_POST['username'];
$password = $_POST['password'];

$sql2= "select * from user where username='$username'";
$res2 = mysql_query($sql2);
$row = mysql_num_rows($res2);
$sql1 = "insert into user (username,password) values ('$username','$password')";


if($row > 0) {
  echo json_encode(array(
    "res_code" => 0,
    "res_message" => "用户名已存在，注册失败！"
  ));
}
else if( $row==0){
	$res1= mysql_query($sql1);
  echo json_encode(array(
    "res_code" => 1,
    "res_message" => "注册成功"
  ));
}

?>