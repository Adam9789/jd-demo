<?php
$a=$_POST["user"];
$b=$_POST["password"];
$arr=array("laiqian","longzhu","shuaiting");
$arr2=array("laiqian"=>"123","longzhu"=>"123","shuaiting"=>"123");
if(in_array($a,$arr)){
    if($arr2[$a]==$b){
        echo '{"code":2}';
    }else{
        echo '{"code":1}';
    }
}else{
  echo '{"code":0}'; 
}
?>
