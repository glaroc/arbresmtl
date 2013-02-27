function load(lang) {
      var markc=[];
      ss=document.getElementById('searchfield').value;
      classsearch = document.getElementById('searchString2').value;
      if (ss == '' && classsearch=='all'){
        ss='all';
      } else if (ss== '' && classsearch!='all'){
        ss=classsearch;
      }
      ss=addslashes(ss);
var map;
var layer10;
var layer11;
var layer12;
map = new google.maps.Map(document.getElementById('map_canvas'), {
center: new google.maps.LatLng(45.550, -73.696),
zoom: 11,
mapTypeId: 'hybrid'
});
if (ss == 'all'){
layer10 = new google.maps.FusionTablesLayer({
query: {
select: "col31",
from: "124R5lV91b0PMMBqbeCw_zYR1BTtib_6Iw8ej4os"
},
map: map,
styleId: 2,
templateId: 2
});
layer11 = new google.maps.FusionTablesLayer({
query: {
select: "col31",
from: "1Ujfo3Mv7h2RlB6P-eTcUA5rbG3XvVJ0wU3vx3eM"
},
map: map,
styleId: 2,
templateId: 2
});
layer12 = new google.maps.FusionTablesLayer({
query: {
select: "col31",
from: "1Z7cZYCP8vojzbOAroHFp96GnAYUi8jpzGaM0fmI",
},
map: map,
styleId: 2,
templateId: 2
});
}else{
layer10 = new google.maps.FusionTablesLayer({
query: {
select: "col31",
from: "124R5lV91b0PMMBqbeCw_zYR1BTtib_6Iw8ej4os",
where: "essence_francais CONTAINS IGNORING CASE \'"+ss+"\'"
},
map: map,
styleId: 2,
templateId: 2
});
layer11 = new google.maps.FusionTablesLayer({
query: {
select: "col31",
from: "1Ujfo3Mv7h2RlB6P-eTcUA5rbG3XvVJ0wU3vx3eM",
where: "essence_francais CONTAINS IGNORING CASE \'"+ss+"\'"
},
map: map,
styleId: 2,
templateId: 2
});
layer12 = new google.maps.FusionTablesLayer({
query: {
select: "col31",
from: "1Z7cZYCP8vojzbOAroHFp96GnAYUi8jpzGaM0fmI",
where: "essence_francais CONTAINS IGNORING CASE \'"+ss+"\'"
},
map: map,
styleId: 2,
templateId: 2
});


}
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
document.getElementById('selectby').value='an';
}
