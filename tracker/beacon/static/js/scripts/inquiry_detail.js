/*
// In this example, we center the map, and add a marker, using a LatLng object
// literal instead of a google.maps.LatLng object. LatLng object literals are
// a convenient way to add a LatLng coordinate and, in most cases, can be used
// in place of a google.maps.LatLng object.
var map;
function initialize() {
  var mapOptions = {
    zoom: 13,
    center: {lat:{{ obj.reply.position.latitude }}, lng: {{obj.reply.position.longitude}}}
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var marker = new google.maps.Marker({
    // The below line is equivalent to writing:
    // position: new google.maps.LatLng(-34.397, 150.644)
    position: {lat: {{ obj.reply.position.latitude }}, lng: {{obj.reply.position.longitude}}},
    map: map
  });

   // You can use a LatLng literal in place of a google.maps.LatLng object when
  // creating the Marker object. Once the Marker object is instantiated, its
  // position will be available as a google.maps.LatLng object. In this case,
  // we retrieve the marker's position using the
  // google.maps.LatLng.getPosition() method.
  var infowindow = new google.maps.InfoWindow({
    content: '<p>Marker Location:' + marker.getPosition() + '</p>'
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);
  });
}
    var diff2 = 2;
    console.log(diff2);
            document.getElementById('love').innerHTML = diff2;

google.maps.event.addDomListener(window, 'load', initialize);
*/