function load(lang) {
      var markc=[];
      ss=document.getElementById('searchfield').value;
      classsearch = document.getElementById('searchString2').value;
      if (ss == '' && classsearch=='all'){
        ss='all';
      } else if (ss== '' && classsearch!='all'){
        ss=classsearch;
      }
      ss=addslashes(ss.toLowerCase());
var map;
var layer10;
var layer11;
var layer12;
map = new google.maps.Map(document.getElementById('map_canvas'), {
center: new google.maps.LatLng(45.550, -73.696),
zoom: 11,
mapTypeId: 'hybrid'
});

jQuery.getJSON('/misc/Especes_frequence.json', function(data){
  jQuery.each(data, function(key,value) {
  (lang=='fr')?ra=0:ra=1;
  jQuery('#searchString2').append('<option value='+value[ra]+'>'+value[ra]+'</option>');
});
});

if (ss == 'all'){
layer10 = new google.maps.FusionTablesLayer({
query: {
select: "col29",
from: "10UTiaDwvYAs1lNjt_OwVP7Z6sJMdbJdU_yug4-0"
},
map: map,
styleId: 2,
templateId: 2
});
layer11 = new google.maps.FusionTablesLayer({
query: {
select: "col29",
from: "1CCbQQ5D9AsABcNJxh_aFPwSH0lW2OhsPNso1_eI"
},
map: map,
styleId: 2,
templateId: 2
});
layer12 = new google.maps.FusionTablesLayer({
query: {
select: "col29",
from: "1XaRezIUnKRd_qAQ_sr-T5THaEHXnVWaHbCWDrJQ",
},
map: map,
styleId: 2,
templateId: 2
});
   jQuery('#searchcount').fadeIn().text((lang=='fr'?'Nombre d\'arbres trouvés:':'Number of trees found:')+' 222 066');

}else{
  if (ss== '' && classsearch!='all'){
  searchlang=lang;
}else{
  searchlang=document.getElementById('selectby').value;
}
  if (searchlang=='en'){
que="essence_anglais CONTAINS IGNORING CASE \'"+ss+"\'";
rr=1;
}else if (searchlang=='fr'){
que="essence_francais CONTAINS IGNORING CASE \'"+ss+"\'";
rr=0;
}else {
que="essence_latin CONTAINS IGNORING CASE \'"+ss+"\'";
rr=2;
}

jQuery.getJSON('/misc/Especes_frequence.json', function(data){
  spcount=0;
  jQuery.each(data, function(key,value) {
  if(value[rr].replace(/'/g, "\\'").toLowerCase().indexOf(ss)!=-1){
    spcount=spcount+parseInt(value[3]);
  }
});
  if (lang=='en'){
   jQuery('#searchcount').fadeIn().text('Nombre of trees found: '+spcount);
}else{
   jQuery('#searchcount').fadeIn().text('Nombre d\'arbres trouvés: '+spcount);
}
});

layer10 = new google.maps.FusionTablesLayer({
query: {
select: "col29",
from: "10UTiaDwvYAs1lNjt_OwVP7Z6sJMdbJdU_yug4-0",
where: que
},
map: map,
styleId: 2,
templateId: 2
});
layer11 = new google.maps.FusionTablesLayer({
query: {
select: "col29",
from: "1CCbQQ5D9AsABcNJxh_aFPwSH0lW2OhsPNso1_eI",
where: que
},
map: map,
styleId: 2,
templateId: 2
});
layer12 = new google.maps.FusionTablesLayer({
query: {
select: "col29",
from: "1XaRezIUnKRd_qAQ_sr-T5THaEHXnVWaHbCWDrJQ",
where: que
},
map: map,
styleId: 2,
templateId: 2
});
}
}
google.maps.event.addDomListener(window, 'load', initialize);

function findstr(key, array) {
  var results = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i].indexOf(key) == 0) {
      results.push(array[i]);
    }
  }
  return results;
}

function bindInfoWindow(marker, map, infoWindow, html) {
      google.maps.event.addListener(marker, 'click', function() {
        infoWindow.setContent(html);
        infoWindow.open(map, marker);
      });
}

function addslashes( str ) {
    return (str+'').replace(/([\\"'])/g, "\\$1").replace(/\0/g, "\\0");
}

function downloadUrl(url, callback) {
      var request = window.ActiveXObject ?
          new ActiveXObject('Microsoft.XMLHTTP') :
          new XMLHttpRequest;

      request.onreadystatechange = function() {
        if (request.readyState == 4) {
          request.onreadystatechange = doNothing;
          callback(request, request.status);
        }
      };

      request.open('GET', url, true);
      request.send(null);
}

function doNothing() {}


function addOption(selectbox,text,value )
{
	var optn = document.createElement("OPTION");
	optn.text = text;
	optn.value = value;
	selectbox.options.add(optn);
}


function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function resetsearch()
{
document.getElementById('searchfield').value='';
document.getElementById('selectby').value=lang;
}
