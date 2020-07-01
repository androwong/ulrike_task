//Javascript	
    var maxX = 5, minX = 3, minY = -20, maxY = 30;
    var mapZoom = 5;
    var mapPosition = [32.772114];

var myStyle = {
    "color": "#193b78",
    "weight": 1,
	"fill": false,
    "opacity": 0.5
};

	  
 cities3 = L.layerGroup();

 L.geoJSON(world, {
    style: myStyle
}).addTo(cities3);


var cfg = {
  // radius should be small ONLY if scaleRadius is true (or small radius is intended)
  // if scaleRadius is false it will be the constant radius used in pixels
  "radius": 10,
  "maxOpacity": 0.6, 
  // scales the radius based on map zoom
  "scaleRadius": false, 
  // if set to false the heatmap uses the global maximum for colorization
  // if activated: uses the data maximum within the current map boundaries 
  //   (there will always be a red spot with useLocalExtremas true)
  "useLocalExtrema": true,
  // which field name in your data represents the latitude - default "lat"
  latField: 'Latitude',
  // which field name in your data represents the longitude - default "lng"
  lngField: 'Longitude',
  // which field name in your data represents the data value - default "value"
  valueField: 'Date'
};

	  
	  
// set options for spider etc
      var options = {
        spiderfyOnMaxZoom: true,
		spiderLegPolylineOptions: {weight: 2,color: '#193B78', opacity: 1},
        clockHelpingCircleOptions: {
          weight: 1,
          opacity: 0,
          color: 'red',
          dashArray: '.1 4'
        },

        helpingCircles: 'false',
        elementsPlacementStrategy: 'concentric',

        spiderfyDistanceSurplus: 15,
        spiderfyDistanceMultiplier: 1.6,

        elementsMultiplier: 1.5,
        firstCircleElements: 8
      }

 
 // var markers = L.markerClusterGroup(options);

	  var markers = new L.MarkerClusterGroup({ 
    iconCreateFunction: function (cluster) {
        var markers = cluster.getAllChildMarkers();
        var html = '<div class="circle">' + markers.length + '</div>';
        return L.divIcon({ html: html, className: 'mycluster', iconSize: L.point(32, 32) });
    },
	spiderfyOnMaxZoom: true,spiderLegPolylineOptions: {weight: 2,color: '#222', opacity: 1},
        clockHelpingCircleOptions: {weight: 1,opacity: 0,color: 'red',dashArray: '.1 4'},helpingCircles: 'false',elementsPlacementStrategy: 'concentric',spiderfyDistanceSurplus: 15,spiderfyDistanceMultiplier: 1.6,        elementsMultiplier: 1.5,firstCircleElements: 8
}); 

// setp up icons
var armedclashIcon = L.icon({
  iconUrl: '../../shared/images/icon1.png',
  iconRetinaUrl: '../../shared/images/icon1.png',
  iconSize: [35, 35],
  iconAnchor: [9, 21],
  popupAnchor: [0,0]
});	  

var KidnapIcon = L.icon({
  iconUrl: '../../shared/images/tank.png',
  iconRetinaUrl: '../../shared/images/tank.png',
  iconSize: [35, 35],
  iconAnchor: [9, 21],
  popupAnchor: [0,0]
});	  

var CivilIcon = L.icon({
  iconUrl: '../../shared/images/tank.png',
  iconRetinaUrl: '../../shared/images/tank.png',
  iconSize: [35, 35],
  iconAnchor: [9, 21],
  popupAnchor: [0,0]
});	  
	  	  
  var InternationalIcon = L.icon({
  iconUrl: '../../shared/images/icon4.png',
  iconRetinaUrl: '../../shared/images/bang.png',
  iconSize: [35, 35],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14]
});

var HumanIcon = L.icon({
  iconUrl: '../../shared/images/icon2.png',
  iconRetinaUrl: '../../shared/images/icon4.png',
  iconSize: [35, 35],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14]
});
  
      
      
// parse json data

	  for ( var i = 0; i < iraq.length; ++i )
{


	
  var popup = '<div class=iiss_main><b>Type:</b> ' + iraq[i].ThemesString+
			  '<br/><b></b> ' + iraq[i].Text+'</div>';
			  
switch(iraq[i].ThemesString) {
        case "Missile Production":
            
  marker = L.marker( [iraq[i].Latitude, iraq[i].Longitude], {icon: armedclashIcon} )
                  .bindPopup( popup );
 		
		break;
		
 		case "Armoured Vehicle Upgrade":
  marker = L.marker( [iraq[i].Latitude, iraq[i].Longitude], {icon: CivilIcon} )
                  .bindPopup( popup );
 
            break;
        
		case "Armed clashes/Violent incidents, Military developments":	
  marker = L.marker( [iraq[i].Latitude, iraq[i].Longitude], {icon: InternationalIcon} )
                  .bindPopup( popup );
 
            break;
        				
        case "Armed clashes/Violent incidents, Human security":
  marker = L.marker( [iraq[i].Latitude, iraq[i].Longitude], {icon: HumanIcon} )
                  .bindPopup( popup );
 
            break;

        case "Armed clashes/Violent incidents, Kidnappings/Abductions/Disappearances":
  marker = L.marker( [iraq[i].Latitude, iraq[i].Longitude], {icon: KidnapIcon} )
                  .bindPopup( popup );
 
            break;

			
    default:
 
			  
   marker = L.marker( [iraq[i].Latitude, iraq[i].Longitude], {icon: armedclashIcon} )
                  .bindPopup( popup );
 
}



  markers.addLayer( marker );
}
 


    
	
var cities3 = L.layerGroup();
    L.polygon([
		[-4.2, 29.222],
		[-3, 28],
		[-4, 27.1],
		[-5.8, 27.1],
		[-4.2, 29.222]
	]).addTo(cities3).bindPopup("Approixmate area of the conflict");

var heatmapLayer=new HeatmapOverlay(cfg);	

var testData={max:8,data:iraq};


heatmapLayer.setData(testData);


// add country / adinistrative boundaries	  
var countryboundaries = L.layerGroup();


	function style(feature) {
		return {
			weight: 4,
			opacity: 0.08,
			color: 'white',
			dashArray: '2',
			fillOpacity: 0.2,
			fillColor: 'green'
		};
	}

	var geojson = L.geoJson(boundaries, {
		style: style,
	}).addTo(countryboundaries);
	
	
	
	var mbAttr = '<a href="https://www.maptiler.com/license/maps/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>',
		mbUrl = 'https://api.maptiler.com/maps/topo/{z}/{x}/{y}.png?key=6oDCiCawBNvqnyDDgs3s';
		mbUrl3 = 'https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=6oDCiCawBNvqnyDDgs3s';
		mbUrl2 = 'https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=6oDCiCawBNvqnyDDgs3s'
	
	var topo   = L.tileLayer(mbUrl, {id: 'mapbox.sample', attribution: mbAttr}),
		sat  = L.tileLayer(mbUrl3, {id: 'mapbox.sample3',   attribution: mbAttr}),
		Grayscalestreets  = L.tileLayer(mbUrl2, {id: 'mapbox.sample3',   attribution: mbAttr});

	
	
	    var map = L.map('map-content', {
		center: [32.772114,-97.445133],
		zoom: 6,
		maxZoom: 7,
		minZoom: 3,
		layers: [topo,countryboundaries ,markers,heatmapLayer]
		
	});

	var baseLayers = {
		"Grayscale": Grayscalestreets,
		"Topo": topo,
		"Satellite": sat
	};

	var overlays = {
				"Heatmap of Factories": heatmapLayer,
				"Type of Factories": markers
				
		};

	L.control.layers(baseLayers, overlays).addTo(map);
