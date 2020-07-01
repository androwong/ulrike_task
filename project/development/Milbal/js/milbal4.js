
    // global variables
    var map;

    // creates extent for random data not needed for ACD
    var maxX = 11, minX = 8.5, minY = 112.0, maxY = 116.3;
    var mapZoom = 10;
    var mapPosition = [(maxX + minX)/2, (maxY + minY)/2];

    
    $( document ).ready(function(){
      refreshMap();
      $('select').change(function () {
      	refreshMap()
      })
    });

    function refreshMap () {



	// set json for tiles for hills
	  var tilejsonV = {"format":"png","name":"OpenMapTiles Hillshades","tiles":["https://maps.tilehosting.com/data/hillshades/{z}/{x}/{y}.png?key=ldQlqrA0QUwnI6rAYayY"],"basename":"hillshade-2016-11-28-planet.mbtiles","id":"openmaptiles_hillshades","description":"Hillshades from http://openmaptiles.org","attribution":"<a href=\"https://openmaptiles.com/hillshades\" target=\"_blank\">Hillshades</a>","type":"overlay","version":"1","format_arguments":"","minzoom":0,"maxzoom":12,"bounds":[-179.98067,-57.000384,179.972533,72.000695],"scale":"1","profile":"mercator","center":[-0.004068499999988262,7.500155500000005,6],"tilejson":"2.0.0"};

	  
tile_layer = L.tileLayer(tilejsonV.tiles[0],{opacity: 0.3})

      // need to simply this as layers now fixed
	  var baseTiles = {
        'osm': L.tileLayer('https://maps.tilehosting.com/styles/streets/{z}/{x}/{y}.png?key=ldQlqrA0QUwnI6rAYayY', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
          opacity: parseFloat($('#mapopacity-select').val())
        })

      }['osm'];

      // setting map
      if (map) {map.remove();}

      map = L.map('map-content', {maxZoom: 12,minZoom: 4,}).setView(mapPosition, mapZoom);
      map.on('zoomend', function () { mapZoom = map.getZoom(); });
      map.on('moveend', function () { mapPosition = map.getCenter(); });
	  
	 // add the base map and hill shading to map
      baseTiles.addTo(map);
	  tile_layer.addTo(map); 

var myStyle = {
    "color": "#193b78",
    "weight": 2,
	"fill": false,
    "opacity": 0.8
};

		  L.geoJSON(world, {
    style: myStyle
}).addTo(map);  
 
 // var markers = L.markerClusterGroup(options);

	  var markers = new L.MarkerClusterGroup({ 
    iconCreateFunction: function (cluster) {
        var markers = cluster.getAllChildMarkers();
        var html = '<div class="circle">' + markers.length + '</div>';
        return L.divIcon({ html: html, className: 'mycluster', iconSize: L.point(32.772114,-60.445133) });
    },
	spiderfyOnMaxZoom: true,spiderLegPolylineOptions: {weight: 2,color: '#193B78', opacity: 1},
        clockHelpingCircleOptions: {weight: 1,opacity: 0,color: 'red',dashArray: '.1 4'},helpingCircles: 'false',elementsPlacementStrategy: 'concentric',spiderfyDistanceSurplus: 15,spiderfyDistanceMultiplier: 1.6,        elementsMultiplier: 1.5,firstCircleElements: 8
}); 

// setp up icons
var armedclashIcon = L.icon({
  iconUrl: 'icon1.png',
  iconRetinaUrl: 'ground.png',
  iconSize: [35, 35],
  iconAnchor: [9, 21],
  popupAnchor: [0,0]
});	  

var KidnapIcon = L.icon({
  iconUrl: 'icon5.png',
  iconRetinaUrl: 'ground.png',
  iconSize: [35, 35],
  iconAnchor: [9, 21],
  popupAnchor: [0,0]
});	  

var CivilIcon = L.icon({
  iconUrl: 'icon3.png',
  iconRetinaUrl: 'ground.png',
  iconSize: [35, 35],
  iconAnchor: [9, 21],
  popupAnchor: [0,0]
});	  
	  	  
  var InternationalIcon = L.icon({
  iconUrl: 'icon4.png',
  iconRetinaUrl: 'bang.png',
  iconSize: [35, 35],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14]
});

var HumanIcon = L.icon({
  iconUrl: 'icon2.png',
  iconRetinaUrl: 'armed.png',
  iconSize: [35, 35],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14]
});
  
var LeafIcon = L.Icon.extend({
    options: {
        iconSize:     [31, 31],
        shadowSize:   [31, 31],
        iconAnchor:   [10, 10],
        shadowAnchor: [1, 1],
        popupAnchor:  [-3, -3]
    }
});
	
	var greenIcon = new LeafIcon({iconUrl: 'tank.png'}),
    redIcon = new LeafIcon({iconUrl: 'airforce.png'}),
    orangeIcon = new LeafIcon({iconUrl: 'battle.png'});
	BangIcon = new LeafIcon({iconUrl: 'radar.jpg'});



      
      
// parse json data

	  for ( var i = 0; i < syria.length; ++i )
{

 
 
L.marker([syria[i].Latitude, syria[i].Longitude], {icon: BangIcon,title:'Conflict name'}).bindPopup(syria[i].Conflict).addTo(map);
 


 L.circle([syria[i].Latitude, syria[i].Longitude],syria[i].Fatalities * 1000, {
		color: 'red',
		fillColor: '#f03',
        fillOpacity: 1
	}).addTo(map).bindPopup("Radar coverage");
			  
  
 
  //markers.addLayer( marker );
}
 
	
      map.addLayer(markers);
    }
