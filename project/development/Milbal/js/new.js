var popup = '<div class=iiss_main><b>Main Factory Location:</b> ' + iraq[i].FinalAssembly+
			  '<br/><b></b> ' + iraq[i].Text+'</div>';
			  
switch(iraq[i].FinalAssembly) {
        case "1":
            
		marker = L.circle([iraq[i].Latitude, iraq[i].Longitude],iraq[i].FinalAssembly * 100000, {
		color: 'red',
		fillColor: '#f03',
        fillOpacity: 1,
		zIndex: -100
	})
 	.bindPopup(popup);	
}




var circle = {
    radius: 8,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

L.marker(FinalAssembly, {
    pointToLayer: function ([iraq[i].Latitude, iraq[i].Longitude]) {
        return L.marker(circle);
    }
}).addTo(map);














// setp up icons
var armedclashIcon = L.icon({
  iconUrl: '../../shared/images/icon1.png',
  iconRetinaUrl: '../../shared/images/ground.png',
  iconSize: [35, 35],
  iconAnchor: [9, 21],
  popupAnchor: [0,0]
});	  

var KidnapIcon = L.icon({
  iconUrl: '../../shared/images/icon5.png',
  iconRetinaUrl: '../../shared/images/ground.png',
  iconSize: [35, 35],
  iconAnchor: [9, 21],
  popupAnchor: [0,0]
});	  

var CivilIcon = L.icon({
  iconUrl: '../../shared/images/icon3.png',
  iconRetinaUrl: '../../shared/images/ground.png',
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
  iconRetinaUrl: '../../shared/images/armed.png',
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
	
	var greenIcon = new LeafIcon({iconUrl: '../../shared/images/tank.png'}),
    redIcon = new LeafIcon({iconUrl: '../../shared/images/airforce.png'}),
    orangeIcon = new LeafIcon({iconUrl: '../../shared/images/battle.png'});
	BangIcon = new LeafIcon({iconUrl: '../../shared/images/radar.jpg'});



      
      
// parse json data

for ( var e = 0; e < iraq.length; ++i )
{

 
 
L.marker([iraq[e].Latitude, iraq[e].Longitude], {icon: BangIcon,title:'Conflict name'}).bindPopup(iraq[e].conflict").addTo(map);
 


 L.circle([iraq[e].Latitude, iraq[e].Longitude],iraq[e].FinalAssembly * 1000, {
		color: 'red',
		fillColor: '#f03',
        fillOpacity: 1
	}).addTo(map).bindPopup("Radar coverage");
			  
  
 
  //markers.addLayer( marker );
}
 
	
      map.addLayer(markers);
    }
	
	
	
	
	---------------
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