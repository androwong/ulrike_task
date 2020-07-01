  var map = L.map('map').setView([51.932994,4.509373], 14);
// add a layer to the map
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(map);

	var popup = L.popup();

	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("You clicked the map at " + e.latlng.toString())
			.openOn(map);
	}

map.on('click', onMapClick);

    L.marker([51.941196,4.512291], {icon: L.AwesomeMarkers.icon({icon: 'spinner', prefix: 'fa', markerColor: 'red', spin:true}) }).bindPopup('I am a spinner').addTo(map);
    L.marker([51.927913,4.521303], {icon: L.AwesomeMarkers.icon({icon: 'coffee', prefix: 'fa', markerColor: 'red', iconColor: '#f28f82'}) }).bindPopup('I am a coffeeshop').addTo(map);
    L.marker([51.936063,4.502077], {icon: L.AwesomeMarkers.icon({icon: 'cog', prefix: 'fa', markerColor: 'purple', iconColor: 'black'}) }).bindPopup('I am a cog').addTo(map);
    L.marker([51.932835,4.506969], {icon: L.AwesomeMarkers.icon({icon: 'glass', prefix: 'fa', markerColor: 'green'}) }).bindPopup('I am a glas').addTo(map);
    L.marker([51.930295,4.515209], {icon: L.AwesomeMarkers.icon({icon: 'shopping-cart', prefix: 'fa', markerColor: 'blue'}) }).bindPopup('I am a shopping cart').addTo(map);
    L.marker([51.930083,4.507742], {icon: L.AwesomeMarkers.icon({icon: 'info', prefix: 'fa', markerColor: 'orange'}) }).bindPopup('I am info').addTo(map);
    L.marker([51.930454,4.527054], {icon: L.AwesomeMarkers.icon({icon: 'group', prefix: 'fa', markerColor: 'darkred'}) }).bindPopup('I am a group').addTo(map);
    L.marker([51.929607,4.527054], {icon: L.AwesomeMarkers.icon({icon: 'arrow-right', prefix: 'fa', markerColor: 'darkblue'}) }).bindPopup('I am an arrow').addTo(map);
    L.marker([51.928919,4.528856], {icon: L.AwesomeMarkers.icon({icon: 'twitter', prefix: 'fa', markerColor: 'cadetblue'}) }).bindPopup('I am twitter').addTo(map);
    L.marker([51.930295,4.530745], {icon: L.AwesomeMarkers.icon({icon: 'phone', prefix: 'fa', markerColor: 'darkpurple'}) }).bindPopup('I am a phone').addTo(map);
    L.marker([51.925055,4.512806], {icon: L.AwesomeMarkers.icon({icon: 'ambulance', prefix: 'fa', markerColor: 'darkgreen'}) }).bindPopup('I am an ambulance').addTo(map);
    L.marker([51.925902,4.505768], {icon: L.AwesomeMarkers.icon({icon: 'medkit', prefix: 'fa', markerColor: 'darkblue'}) }).bindPopup('I am a medkit').addTo(map);
	
