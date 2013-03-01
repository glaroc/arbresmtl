<?php
function cl(){
$Result = file_get_contents("http://www.quebio.ca/misc/Especes.json");
$JSO=json_decode($Result);
foreach ($JSO->{'rows'} as $row){
  echo '<option value="' . $row[0] . '">' . $row[0] . '</option>';
}
}
?>
