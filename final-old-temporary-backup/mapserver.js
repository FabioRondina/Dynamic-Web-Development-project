const express = require("express");
const bodyParser = require('body-parser');
const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyA8Nw1Dqe9tkAc4Hsq0LhxD0TPFfJp_3qc'
});
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.post("/pref", function(req, res) {
//     // Geocode an address.
// googleMapsClient.geocode({
//   address: req.body.startpoint + " " + req.body.location
// }, function(err, response) {
//   if (!err) {
//     var loc = response.json.results;
//     console.log(loc);
//     res.send(loc);
//   }
// });

//      googleMapsClient.findPlace({
//          input: req.body.startpoint + " " + req.body.location,
//          inputtype: 'textquery'}, function(req, res) {
//              if(!err) {
//                  console.log(res);
//              }
//       });
         googleMapsClient.placesNearby({
            location: [48.133159, 11.567706]}, function(req, res) {
                 if(!err) {
                     console.log(res);
                 }
         
         });
    
});

// Geocode an address.
// googleMapsClient.({
//   address: '1600 Amphitheatre Parkway, Mountain View, CA'
// }, function(err, response) {
//   if (!err) {
//     console.log(response.json.results);
//   }
// });

app.get("/map", function(req, res) {
    
});

app.listen(8080);