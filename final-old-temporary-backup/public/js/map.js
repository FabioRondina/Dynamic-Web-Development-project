function createMap() {

  map = new google.maps.Map(document.getElementById('mainWindow'), {
    center: {lat: 48.150633, lng: 11.578996},
    zoom: 14
  });

  // ---------  TO SORT  ------------- //
// <<<<<<< map
//   // addMarkers();
//   searchPlace();
// =======
//   addMarkers();
// >>>>>>> master
};

function addMarkers() {
  var marker1 = new google.maps.Marker({
    position: {lat: 48.137534, lng: 11.585912},
    map: map
  });

  var marker2 = new google.maps.Marker({
    position: {lat: 48.137665, lng: 11.589832},
    map: map
  });

  var marker3 = new google.maps.Marker({
    position: {lat: 48.147231, lng: 11.572505},
    map: map
  });

  var marker4 = new google.maps.Marker({
    position: {lat: 48.148199, lng: 11.570163},
    map: map
  });
}

function searchPlace() {
//   $.getJSON('https://maps.googleapis.com/maps/api/place/findplacefromtext/output?key=AIzaSyA8Nw1Dqe9tkAc4Hsq0LhxD0TPFfJp_3qc&input=Munich&inputtype=textquery',
//     function(result) {
//       console.log(result);
//     });
    // var sydney = new google.maps.LatLng(-33.867, 151.195);

  infowindow = new google.maps.InfoWindow();

//   map = new google.maps.Map(
//       document.getElementById('map'), {center: sydney, zoom: 15});

  var request = {
    query: 'Whitehills drive, aberdeen',
    fields: ['name', 'geometry'],
  };
  
  

  var service = new google.maps.places.PlacesService(map);

  service.findPlaceFromQuery(request, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        // new google.maps.Maker({position: {lat: results[i].geometry.viewport.ga.j, lng: results[i].geometry.viewport.ma.l}, map: map});
          //console.log(results[i].geometry.viewport.toJSON());
          var coor = results[i].geometry.viewport.toJSON();
          console.log(coor);
          console.log(parseFloat(coor.south) + ", " + parseFloat(coor.east));
          var marker4 = new google.maps.Marker({
            position: {lat: parseFloat(coor.south), lng: parseFloat(coor.east)},
            map: map
  });
          console.log(results[i]);
      }
      map.setCenter(results[0].geometry.location);
    }
  });
    

};