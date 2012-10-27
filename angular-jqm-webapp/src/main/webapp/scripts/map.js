function onMobileMapLoad() {
    var bizLong = document.getElementById("bizLong");
    var bizLat = document.getElementById("bizLat");

    if (navigator.network.connection.type != Connection.NONE) {
        // load the google api
        var fileref=document.createElement('script');
        fileref.setAttribute("type","text/javascript");
        fileref.setAttribute("src",
"http://maps.googleapis.com/maps/api/js?sensor=true&callback=" +
"getGeolocation");
        document.getElementsByTagName("head")[0].
           appendChild(fileref);
    } else {
        alert("Must be connected to the Internet");
    }
}
function onLocalMapLoad() {
    var bizLong = document.getElementById("bizLong");
    var bizLat = document.getElementById("bizLat");

        // load the google api
        var fileref=document.createElement('script');
        fileref.setAttribute("type","text/javascript");
        fileref.setAttribute("src",
"http://maps.googleapis.com/maps/api/js?sensor=false&callback=" +
"getGeolocation");
        document.getElementsByTagName("head")[0].
           appendChild(fileref);
}
function getMobileGeolocation() {
    // get the user's gps coordinates and display map
    var options = {
        maximumAge: 3000,
        timeout: 5000,
        enableHighAccuracy: true
    };
    navigator.geolocation.getCurrentPosition(loadMap,
        geoError, options);
}
function loadMap(position) {
    var latlng = new google.maps.LatLng(
         bizLat.value, bizLong.value);

    var myOptions = {
        zoom: 12,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var mapObj = document.getElementById("map_canvas");
    var map = new google.maps.Map(mapObj, myOptions);
    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        title:"Biz"
    });
}
function geoError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

$('#location').live("pagebeforecreate", function() {
    var useragent = navigator.userAgent;
	var mapdiv = document.getElementById("map_canvas");
	var mapitem = document.getElementById("map_item");

    //alert("User-agent header : " + navigator.userAgent);

 	if ((useragent.indexOf('Android 3.') != -1) && (screen.width >= 800) && (screen.height >= 800)) {
  		// galaxy tab
    	mapdiv.style.height = '480px';
 		mapdiv.style.margin = '0.8em';
  	} else if ((useragent.indexOf('Android 2.') != -1 ) || (useragent.indexOf('Android 3.') != -1 )) {
  		mapitem.style.maxWidth = '490px';
 		mapdiv.style.height = '300px';
 		mapdiv.style.margin = '0.4em';
  	} else {
    	mapdiv.style.height = '450px';
 		mapdiv.style.margin = '1em';
 	}
});

$('#location').live("pageshow", onMobileMapLoad);
