   var map = L.map('map').setView([32.830307, -96.727907], 8);

      //** Start of Basemaps **//
      var accessToken = 'pk.eyJ1IjoicHExIiwiYSI6ImNqODc2ODdlYjE1Ym8zM3BsMjZydHNqMGEifQ.LHix7zEhd8HRtp-YqVRjKQ';

      var basemap = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicHExIiwiYSI6ImNqODc2ODdlYjE1Ym8zM3BsMjZydHNqMGEifQ.LHix7zEhd8HRtp-YqVRjKQ', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'mapbox.streets',
        // Access token is created from Mapbox.com
        accessToken: accessToken
      }).addTo(map);


      //Font Awesome Icons
      var redMarker = L.AwesomeMarkers.icon({
        icon: 'home',
        prefix: 'fa',
        markerColor:'red'
      });
      var blueMarker = L.AwesomeMarkers.icon({
        icon: 'money',
        iconColor: 'Chartreuse',
        spin: 'True',
        prefix: 'fa',
        markerColor:'darkblue',
      });

      var blackMarker = L.AwesomeMarkers.icon({
        icon: 'cog',
        iconColor: 'white',
        prefix: 'fa',
        markerColor:'black',
      });


      function returnAwesome(json, latlng){
        var house = json.properties;
        if(house.bedsTotal == 4){
          return L.marker(latlng, {icon:blueMarker});
        }
        else if (house.bedsTotal == 3){
          return L.marker(latlng, {icon:redMarker});
        }
        else{
          return L.marker(latlng, {icon:blackMarker});
        }
      }


      // Popup function with housing data
      function popupHouse(feature, layer){
        layer.bindPopup("<strong>Address: </strong>" + feature.properties.address
                        +"<br>" + "City: " + feature.properties.city
                        +"<br>" + "State: " + feature.properties.state
                        +"<br>" + "State: " + feature.properties.currentPrice
                        +"<br>" + "Beds: " + feature.properties.bedsTotal
                        +"<br>" + "Baths: " + feature.properties.bathsTotal);

      }

      var house_json = "https://gist.githubusercontent.com/pq1/53d54fcf40c95962683ef48c7b116058/raw/5e71a0066e78b63f537e2b071f3a651efbc5da55/addresses_out.geojson"



      //loading the geojson for the power plants
      var housingData = new L.GeoJSON.AJAX(house_json,{onEachFeature: popupHouse, pointToLayer: returnAwesome});

      var markers = new L.MarkerClusterGroup({
        maxClusterRadius: 60
      });

      housingData.on("data:loaded", function(){
        markers.addLayer(housingData);
        map.addLayer(markers);
      });


