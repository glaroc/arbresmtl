<?php
function cl(){
$Result = file_get_contents("http://www.quebio.ca/misc/Especes2.json");
$JSO=json_decode($Result);
global $language_content;
$lang=$language_content->language;
foreach ($JSO->{'rows'} as $row){
	if ($lang=='en'){
  	echo '<option value="' . $row[1] . '">' . $row[1] . '</option>';
	}else{
	echo '<option value="' . $row[0] . '">' . $row[0] . '</option>';
	}
}
}

?>
