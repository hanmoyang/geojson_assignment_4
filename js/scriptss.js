var map = L.map('mapContainer').setView([40.735021, -73.994787], 11);

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
}).addTo(map);

$.getJSON('data/data.geojson', function(jqueryData) {

  L.geoJson(museums, {
    onEachFeature: function (feature, layer) {
      layer.on('click', function() {
        $('#sidebar h2').text(feature.properties.name)
      })}
  }).addTo(map);

  L.geoJson(districts).addTo(map);

  L.geoJson(myData, {
    style: function (feature) {

      var customColor;

      if(feature.properties.value == 1) {
        customColor = 'red';
      }

      if(feature.properties.value == 2) {
        customColor = 'blue';
      }

      if(feature.properties.value == 3) {
        customColor = 'green';
      }

      if(feature.properties.value == 4) {
        customColor = 'yellow';
      }

      if(feature.properties.value == 5) {
        customColor = 'orange';
      }

      if(feature.properties.value == 6) {
        customColor = 'pink';
      }     

      return {
        color: customColor,
        fillColor: customColor,
        weight: 2,
      };
    },
    onEachFeature: function (feature, layer) {
      layer.on('click', function() {

        $('#sidebar h2').text(feature.properties.name)
      })
    }
  }).addTo(map);
}) 

 console.log('Here is the data we got using jQuery', jqueryData)
  L.geoJson(jqueryData, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, {
        color: 'orange',
        fillColor: 'steelblue',
        fillOpacity: .9,
        weight: 1,
      });
    }
  }).addTo(map);