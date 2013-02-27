<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
<script type="text/javascript" src="/misc/Arbres_mtl_ft.js"></script>
<script type="text/javascript" src="/misc/markerclusterer_compiled.js"></script>
<?php
global $language_content;
$lang=$language_content->language;
?>
<body onload="load('<?php echo $lang; ?>');">

Les données utilisées pour cet interface proviennent du <a href="http://donnees.ville.montreal.qc.ca/fiche/arbres/" target="_blank">portail de données ouvertes de la ville de Montréal.</a><br> Le développement de cet outil a été initié par Christian Gendreau, David Shorthouse, Guillaume Larocque, Marc-André Goderre et Yoann Perrot dans le cadre de la journée des données ouvertes de Montréal 2013. 
<div id="search" style="width:100%;height: 60px;background-color:#2d2d2d;">
<table align="center" id="bamsearch"> 
<tr><td> 
<span style="color:white;">
<?php 
if ($lang=='en' | isset($lang)==0){
echo 'Search by</span></td><td>';
}else{
echo 'Chercher par</span></td><td>';
}
?>
  <select id="selectby">
  <option value="an">
<?php 
if ($lang=='en' | isset($lang)==0){
echo 'species</option>';
}else{
echo 'espèce</option>';
}
?> 
<!--<option value="au">
<?php 
if ($lang=='en' | isset($lang)==0){
echo 'Place name</option>';
}else{
echo 'Nom de lieu</option>';
}
?>
-->
  </select>
  <input type="text"  id="searchfield" onchange="load('<?php echo $lang; ?>');document.getElementById('searchString2').value='all';" name="s"/>
  <input type="button" onclick="load('<?php echo $lang; ?>')" 
<?php 
if ($lang=='en' | isset($lang)==0){
echo 'value="Search"/>';
}else{
echo 'value="Chercher"/>';
}
?>
</td><td width="350px">
<span style="color:white;">    
<?php 
if ($lang=='en' | isset($lang)==0){
echo 'or filter by species';
}else{
echo 'ou filtrer par espèce';
}
?>
</span>
  <select id="searchString2" onchange="load('<?php echo $lang; ?>');resetsearch();" onclick="load('<?php echo $lang; ?>')" name="s">
  <option value="all">Selectionnez...</option>
 <?php require("/var/www/quebio.ca/misc/arbres_sp_dropdown_ft.php");cl();?>
  </select>

</td><tr></table>
</div><br>
<div id="map_canvas" style="width:100%;height:650px;"></div>
<div id="Results" style="width:850px;">
</div>
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-18640498-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
</body>