var map;

// get the geojson data
function eqfeed_callback(response) {
  map.data.addGeoJson(response);
}

// use the google maps API to show the LA area and plot the geojson markers on the map
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: new google.maps.LatLng(34.0745204,-118.2540685),
    mapTypeId: 'terrain'
  });

  var script = document.createElement('script');
  script.src = 'FutureBikeShareStations.js';
  document.getElementsByTagName('head')[0].appendChild(script);
}

// Loop through the results array and place a marker for each set of coordinates.
window.eqfeed_callback = function(results) {
  for (var i = 0; i < results.features.length; i++) {
    var coords = results.features[i].geometry.coordinates;
    var latLng = new google.maps.LatLng(coords[1],coords[0]);
    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
  }
};

// code for upvote/downvote
$('#place1').upvote();
$('#place2').upvote();
$('#place3').upvote();
$('#place4').upvote();
$('#place5').upvote();
$('#place6').upvote();
$('#place7').upvote();
$('#place8').upvote();
$('#place9').upvote();
$('#place10').upvote();
