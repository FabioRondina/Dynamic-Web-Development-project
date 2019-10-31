function createMap() {
  map = new google.maps.Map(document.getElementById('mainWindow'), {
    center: {lat: 48.150633, lng: 11.578996},
    zoom: 14
  });

  addMarkers();
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
