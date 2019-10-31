const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/profile";
const bodyParser = require('body-parser');
const request = require('request');
const express = require('express');
const apiKey = '&key=AIzaSyA8Nw1Dqe9tkAc4Hsq0LhxD0TPFfJp_3qc';
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));



var db;

//call mongo db using the url into the function
MongoClient.connect(url, function(err,database){
  if(err) throw err;
  db = database;
  app.listen(8080);
});



//----------------REGISTER ROUTE--------------------

app.post('/register',function(req,res){
  db.collection('profile').save(req.body, function(err,result){
    if(err) throw err;
    console.log('saved to database')
    res.redirect('/');//return to login page for now login.html
    // build profile page with data
    // unlock deactive buttons (Profile Page)

  });
});


//-------------LOGIN ROUTE---------------------

app.post('/login', function(req,res){
  db.collection('profile').find().toArray(function(err,result){
    if (err) throw err;
    //add a validation
    var mail = req.body.email;
    var pass = req.body.password;
    // console.log(mail +" " + pass); /// tested and working :)
     console.log(result.length);
     // if(!result){
     //   res.send("login failed, email or password are not correct");
     // }

     for ( var i= 0 ; i < result.length ; i ++){
       console.log(result[i].email);
       console.log(result[i].password);

       if( result[i].email == mail && result[i].password == pass){
         res.send("login successful");
       }else{
         res.send("login failed, email or password are not correct");
       }//end if else
     }//end for loop

  });//end toArray /login

});//end route

//--------------------check entry on db

app.get('/all', function(req,res){
  db.collection('profile').find().toArray(function(err,result){
     var out = "<h1>This are all the entry of the profile DB</h1>";

     for(var i =0 ; i < result.length ; i++){
       out += "<div>";
       out += "<h2>Name :" +result[i].name + "</h2>";
       out += "<p>E-mail :" +result[i].email + "</p>";
       out += "<p>Password: " +result[i].password + "</p>";
       out += "</div>";
     }
     res.send(out);
  });//end to Array /all
});//end all

// app.get('/', function (req,res){
//   res.send("Hello world! , express is helping us");
// });


// ---------------------- DETAILS FORM ROUTE ---------------------- //
// Route to process user position, get places around and redirect to around page
app.post('/plan', function(req, res) {
    // Process input and build query details
    var input = (req.body.startpoint + " " + req.body.location).split(" ");
    var query = "";
    var latLng = "";
    //console.log(reqString);

    // Build string for location query
    for(var i = 0; i < input.length - 1; i++) {
        query += (input[i] + "%20");
    }
    query += input[input.length - 1];


    // Send request to find location coordinates
    request('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=' + query + '&inputtype=textquery&fields=formatted_address,name,geometry'  + apiKey, {json: true}, (err, loc, body) => {
        if(err) {return console.log(err);}
        console.log(loc.body);
        if(loc.body.satus === 'OK') {
            latLng += loc.body.candidates[0].geometry.location.lat;
            latLng += "," + loc.body.candidates[0].geometry.location.lng;

            // Send request to search nearby POIs
            request('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + latLng + '&type=museum&radius=15000' + apiKey, {json: true}, (err, results, body) => {
                if(err) {return console.log(err);}
                // console.log(result);
                var resList = results.body.results;
                var output = "";

                for(var i = 0; i < resList.length; i++) {
                    output += "<div>";
                    output += "<input type='checkbox'><img src=" + resList[i].icon + ">";
                    output += "<h2>" + resList[i].name + "</h2>";
                    output += "</div>";
                }

                // Save result to temporary DB storage
//                 db.collection('TempResults').save(resList, function(err, res) {
//                         if(err) return console.log(err);
//                         console.log("Saved successfully!")
//                     });
                res.send(output);
            }); // end of places request
        }
        else {
            console.log('Incorrect starting point!');
        }
    }); // end of location request

}); // end of route
