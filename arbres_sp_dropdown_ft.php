<?php
function cl(){
//$Result = file_get_contents("https://www.googleapis.com/fusiontables/v1/query?sql=SELECT%20%20essence_francais%20FROM%201pNs1eF5sIpc1aVVgsGBtvQYQDU73m3oH9YZZqOo%20GROUP%20BY%20essence_francais%20ORDER%20BY%20essence_francais&key=AIzaSyCPZScFyLT80f4xHGq0zOjTd4qd-vbTHt4");
$Result = file_get_contents("http://www.quebio.ca/misc/Especes.json");
$JSO=json_decode($Result);
foreach ($JSO->{'rows'} as $row){
  echo '<option value="' . $row[0] . '">' . $row[0] . '</option>';
}
}
?>
