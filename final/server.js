// create a Mongo db
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/threepins";
const flash = require('express-flash-notification');
const bodyParser = require('body-parser');
const request = require('request');
const express = require('express');
const session = require('express-session');
const apiKey = '&key=AIzaSyA8Nw1Dqe9tkAc4Hsq0LhxD0TPFfJp_3qc';
const app = express();

app.use(session({ secret: 'example' }));


//set the view engine to ejs
app.set('view engine','ejs');

//set public folder -- NEED THIS FOR SECONDARY FOLDERS
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(flash(app));



// --- clack GNU Terry Pratchet --DON'T TOUCH THIS ROUTE
app.get(function (req, res, next) {
  res.set('X-Clacks-Overhead', 'GNU Terry Pratchet');
  next();
});// end of route

var db;

//call mongo db using the url into the function
MongoClient.connect(url, function(err,database){
  if(err) throw err;
  db = database;
  app.listen(8080);
  console.log("listen from mongodb connection")
});

//---------------BASIC ROUTE FOR TEMPLATE PAGES

// root page on load route to index----------------------------------------------------------------------------------------
app.get('/', function(req, res) {
  console.log("/ route called");
  res.render('pages/index');
});// end of route

// startForm page route----------------------------------------------------------------------------------------
app.get('/startForm', function(req, res) {
  console.log("/startForm route called");
  // if the user is not logged in redirect them to the login page
  if(!req.session.loggedin){
    req.flash('INFO', 'Please log in to use the Start planning day page', false);
    res.redirect('/login');return;}
  //otherwise render startForm
  res.render('pages/startForm');
});// end of route



//profile page route----------------------------------------------------------------------------------------
app.get('/profile', function(req, res) {
  console.log("/profile route called");
  //if the user is not logged in redirect them to the login page
  if(!req.session.loggedin){
    req.flash('INFO', 'Please log in to access the Profile page', false);
    res.redirect('/login');return;}
  //get the requested user based on their username, eg /profile?username=dioreticllama
  var useremail = req.session.email;
  //this query finds the first document in the array with that useremail.
  console.log(useremail);
  //Because the username value sits in the login section of the user data we use login.username
  db.collection('profiles').findOne({
    "email": useremail
  }, function(err, result) {
    if (err) throw err;
    console.log("usermail : " + useremail+ ": results : " + result);
    console.log(JSON.stringify(result));// to check which json OBJ is sent as result
    //finally we just send the result to the user page as "user"
    res.render('pages/profile', { user: result });
  }); //end query findOne
});// end of route


// login page ROUTE----------------------------------------------------------------------------------------
app.get('/login', function(req,res){
  console.log("/loginFabio route called");

  // if already logged in redirect to /
  if(req.session.loggedin){
    req.flash('INFO', 'User already logged in', false);
    res.redirect('/');return;}
    //otherwise render /login
  res.render('pages/login.ejs');
});// end of route

//register route simply draws our register page----------------------------------------------------------------------------------------
app.get('/register', function(req, res) {
  //if user is logged in redirect to / page
  if(req.session.loggedin){
    req.flash('INFO', 'User already logged in, not allowed to register another user ', false);
    res.redirect('/');return;}
  //otherwise render /register
  res.render('pages/register')
});// end of route

//removeuser route simply draws our removeuser page----------------------------------------------------------------------------------------
app.get('/removeUser', function(req, res) {
  //if the user is not logged in redirect them to the login page
  if(!req.session.loggedin){
    req.flash('INFO', 'We are sorry that you are leaving, hope you come back soon', false);
    res.redirect('/login');return;}
  //otherwise render /removeUser
  res.render('pages/removeUser')
});// end of route

//logout route cause the page to Logout.----------------------------------------------------------------------------------------
//it sets our session.loggedin to false and then redirects the user to the login
app.get('/logout', function(req, res) {
  if(!req.session.loggedin){
    req.flash('INFO', 'You are already logged out', false);
    res.redirect('/');return;}
  else
  {
  // req.flash('INFO', 'Logged out successful, See you soon!!!', false);// not working here
  req.session.loggedin = false;
  req.session.destroy();
  res.redirect('/');
  }
});// end of route

//--------------- POST ROUTES-------------------------------------------------------------------------------------------------------------------


//-------------DO LOGIN ROUTE-------------------------------------------------------------------------------------------------------------------

app.post('/dologin', function(req,res){
  console.log(JSON.stringify(req.body))
    var email = req.body.email;
    var pword = req.body.password;
    console.log("U : " + email + " P : "+ pword);

    db.collection('profiles').findOne({"email": email}, function(err, result) {
      if (err) throw err;//if there is an error, throw the error
      //if there is no result, redirect the user back to the login system as that username must not exist
      console.log("Email inside query : " + email);
      // console.log("result :" + result.login.password);


      if(!result){
        req.flash('INFO', 'Sorry, e-mail or password are not correct', false);
        res.redirect('/login');return}
      //if there is a result then check the password, if the password is correct set session loggedin to true and send the user to the index

      // i can see all the data i need for task 3 but redirect will not let me pass them
      var loggedUser = result.name.first + " " + result.name.last;
      console.log("logged user : " + loggedUser);
      console.log("session email :" + req.session.email );// unsefined since is not set yet

      if(result.login.password == pword){
          req.session.loggedin = true;
          req.session.email = email;
          // Empty the collections for the new query
          db.collection("TempResults").remove();
          db.collection("Interested").remove();
          db.collection("Location").remove();
          res.redirect('/')
      }
      //otherwise send them back to login
      else{res.redirect('/login')}
    });//end query
  });// end of route


//--------------------------------REGISTER ROUTE-------------------------------------------------------------------------------------------------
app.post('/doRegister', function(req, res) {
  //check we are logged in- redirect if logged user try to register a new account
  if(req.session.loggedin){
    req.flash('INFO', 'User already have a profile, not allowed to register again', false);
    res.redirect('/login');return;}

    var email = req.body.email;
    console.log("Email inside query : " + email);
    //check if the email is already in registred into the db
    db.collection('profiles').findOne({"email": email}, function(err, result) {
      if (err) throw err;//if there is an error, throw the error
      //if there is no result, redirect the user back to the login system as that username must not exist
      console.log("Username inside query : " + email);
      // console.log("result :" + result.login.password);
      if(result){ req.flash('INFO', 'Sorry, email already used', false);
        res.redirect('/login');return}
  // create the data string from the form components that have been passed in
 if(!result){
  var datatostore = {
    "gender":req.body.gender,
    "name":{"first":req.body.first,"last":req.body.last},
    "email":req.body.email,
    "login":{"username":req.body.username,"password":req.body.password},
    "dob":req.body.dob,"registered":Date(),
    "picture":{"large":req.body.large,"medium":req.body.medium,"thumbnail":req.body.thumbnail},
    "nat":req.body.nat}



    //once created we just run the data string against the database and all our new data will be saved/
    db.collection('profiles').save(datatostore, function(err, result) {
      if (err) throw err;
      console.log('saved to database')
      //when complete redirect to the index
      res.redirect('/')
    });// end second query
  }
});// end first query
  });// end of route

//--------------------DELETE USER PROFILE AND LOGOUT-----------------------------------------------------------------------------------

//the delete route deals with user deletion based on entering a username
app.post('/deleteUser', function(req, res) {
  //check we are logged in.
  if(!req.session.loggedin){
    req.flash('INFO', 'Please login to use this functionality', false);
    res.redirect('/login');return;}
  //if so get the username variable
  var userEmail = req.body.email;

  //check for the username added in the form, if one exists then you can delete that doccument
  db.collection('profiles').deleteOne({"email":userEmail}, function(err, result) {
    if (err) throw err;
    //when complete log out and redirect to the index
    req.session.loggedin = false;
    req.session.destroy();
    //and redirect to the index
    res.redirect('/');
  });
});


// ---------------------- AUTOCOMPLETE ROUTE ---------------------- //
// Route to process the AJAX request for city field
app.get('/cityautocompl', function(req, res) {
    var city = req.query.city;

    request('https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' + city + '&types=(cities)' + apiKey,
           {json: true}, (err, results, body) => {
        if(err) throw err;

        var data = {candidates: ""};

        var str = "";



        for(var i = 0; i < body.predictions.length; i++) {
            str += ("<p onClick='selectCity(" + '"'+ body.predictions[i].description  + '"'+ ")'>" + body.predictions[i].description + "</p>");
        }

        data.candidates = str

        res.send(data);
    })  // end of request
});  // end of route

// Route to process the AJAX request for location field
app.get('/locautocompl', function(req, res) {
    // if the city is not filled in
    if(req.query.city == undefined) {
        req.flash('INFO', 'Please fill in the Location field for suggestions', false);
    }  // end of if statement
    else{
        var city = req.query.city;
        var location = req.query.loc;

        // request the location from the city field
        request('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=' + city +
              '&inputtype=textquery&fields=geometry'  + apiKey, {json: true}, (err, loc, body) => {
          if(err) {return console.log(err);}

            // check if the status is OK
            if(body.status === 'OK') {
              var latLng = "";
              latLng += body.candidates[0].geometry.location.lat;
              latLng += "," + body.candidates[0].geometry.location.lng;

              var cityWords = city.split(",");
              var query = "";

              // build query
              for(var i = 0; i < cityWords.length - 1; i++) {
                  query += (cityWords[i] + "+");
              }

              query += cityWords[cityWords.length - 1];

              request('https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' + location +
                      '&location=' + latLng + '&radius=12000' + apiKey, {json: true}, (err, results, body) => {
                  if(err) throw err;

                  var data = {candidates: ""};

                  var str = "";


                    for(var i = 0; i < body.predictions.length; i++) {
                        str += ("<p onClick='selectLoc(" + '"'+ body.predictions[i].description  + '"'+ ")'>" + body.predictions[i].description + "</p>");
                    }

                    data.candidates = str
                    
                    res.send(data);
                })  // end of inner request
          }  // end of if statement
        });  // end of location request
    }  // end of else statement
});  // end of route


  // ---------------------- DETAILS FORM ROUTE ---------------------- //
  // Route to process user position, get places around and redirect to around page
  app.post('/plan', function(req, res) {
      //check we are logged in.
      if(!req.session.loggedin){
        req.flash('INFO', 'Please login to use this functionality', false);
        res.redirect('/login');return;}


      // Empty the collections for the new query
      db.collection("TempResults").remove();
      db.collection("Interested").remove();
      db.collection("Location").remove();
      // db.collection("DateSelected").remove();

      // Process input and build query details
      var dateSelected = req.body.date;
      console.log(dateSelected);
      db.collection("DateSelected").save({date : dateSelected});

      var input = (req.body.startpoint + " " + req.body.location).split(" ");
      var query = "";
      var latLng = "";
      const poiList = ['amusementPark', 'aquarium', 'artGallery', 'church', 'museum'];
      var poiSelect = [];

      // Build selected POI list
      if(req.body.amusementPark != undefined) {poiSelect.push('amusement_park')};
      if(req.body.aquarium != undefined) {poiSelect.push('aquarium')};
      if(req.body.artGallery != undefined) {poiSelect.push('art_gallery')};
      if(req.body.church != undefined) {poiSelect.push('church')};
      if(req.body.museum != undefined) {poiSelect.push('museum')};

      // Build string for location query
      for(var i = 0; i < input.length - 1; i++) {
          query += (input[i] + "%20");
      }
      query += input[input.length - 1];

      // Send request to find location coordinates
      request('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=' + query +
              '&inputtype=textquery&fields=formatted_address,name,geometry'  + apiKey, {json: true}, (err, loc, body) => {
          if(err) {return console.log(err);}

          // check if the status is OK
          if(body.status === 'OK') {
              latLng += body.candidates[0].geometry.location.lat;
              latLng += "," + body.candidates[0].geometry.location.lng;

              // Save the user's location to the database
              db.collection("Location").save({location : [
                  body.candidates[0].geometry.location.lat,
                  body.candidates[0].geometry.location.lng]
              });

              // Send request to search nearby POIs by selected categories
              request('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + latLng +
                      '&type=' + poiSelect[0] + '&radius=12000' + apiKey, {json: true}, (err, around, body) => {
                  if(err) {return console.log(err);}
                  for(var j = 0; j < body.results.length; j++) {
                      // add POIs to database
                      db.collection('TempResults').save(
                          {
                              name: body.results[j].name,
                              geom: body.results[j].geometry,
                              icon: body.results[j].icon,
                              open: body.results[j].opening_hours,
                              p_id: body.results[j].place_id,
                              rating: body.results[j].rating,
                              distance : {}
                          },
                          function(err, res) {
                          if(err) return console.log(err);
                      });  // end of DB function
                    };   // end of POI results loop
                  res.redirect('/around');
                 });  // end of places request
               }  // end of if statement




           else {
               req.flash('INFO', 'We have trouble to find your location! Please check the form entry!',false);
           }
      }); // end of location request
  }); // end of route


  // ----------------- ROUTE TO RENDER AroundYou PAGE ----------------- //
  app.get('/around', function(req, res) {
     //if the user is not logged in redirect them to the login page
     if(!req.session.loggedin){
       req.flash('INFO', 'Please log in to access the What\'s around page', false);
       res.redirect('/login');return;}

      // retrieve user location for distance query
      var loc;
      db.collection('Location').find().toArray(function(err, start) {
          if(err) throw err;
          loc = start[0];
      })

     // find results in the database
     db.collection('TempResults').find().toArray(function(err, result) {
         if(err) throw err;


         // if there is at least one result render the aroundYou page
         if(result.length > 0) {

             var query = "";  // variable to build query

             // build query from results
             for(var i = 0; i < result.length; i++) {
                 query += (result[i].geom.location.lat + '%2C' + result[i].geom.location.lng + "%7C");
             };  // end of of loop

             // cut the last | at the end of the query
             query = query.substring(0, query.length - 1);

             request('https://maps.googleapis.com/maps/api/distancematrix/json?origins=' + loc.location[0] + ',' + loc.location[1] +
                     '&destinations=' + query + apiKey, {json: true}, (error, dist, body) => {

                     // update distance of POIs in database
                     for(var j = 0; j < result.length; j++) {
                         result[j].distance = body.rows[0].elements[j].distance;
                     }  // end of for loop

                     // sort to array by distance
                     result.sort(function(a, b) {
                         if(a.distance != undefined && b.distance != undefined) {
                             return a.distance.value - b.distance.value}});

                     // render the page
                     res.render('pages/aroundYou', {places : result});
             });  // end of request




         }
         // else produce an error message and redirect to the startForm page
         else {
             req.flash("Info", "We couldn't find anything that matches your criteria! Redirecting to form!",false);
             res.redirect('/startForm');
         }
     })
  });

  // --- ROUTE TO RECEIVE AND PROCESS SELECTION FROM AROUND YOU FORM ---- //
  app.post('/getinterest', function(req, res) {
      // extract keys from query
      var selected = Object.keys(req.body);

      // clear the Interested collection
      db.collection('Interested').remove();

      // retrieve interested object details
      db.collection('TempResults').find({'p_id' : {$in: selected}}).toArray(function(err, results) {
          if(err) throw err;

          // save the results to Interested collecteion
          db.collection('Interested').insertMany(results, function(err, result) {
              if(err) throw err;

              res.redirect("/map")
          })  // end of Interested database function
      });  // end of TempResult database function
  });  // end of route


  // -------- ROUTE DISPLAY THE MAP --------- //
  app.get('/map', function(req, res) {
      //if the user is not logged in redirect them to the login page
      if(!req.session.loggedin){
          req.flash('INFO', 'Please log in to access to the Map page', false);
          res.redirect('/login');return;};

      // array to save locations
      var pins = [];  // variable to store the selected POIs
      var start = [];  // variable to store user location

      // Otherwise retrieve Location and Interested object from the database and render the page
      db.collection("Location").find().toArray(function(err, loc) {
          if(err) throw err;

          // if there are no results in Location redirect to form and display an error message
          if(loc === undefined || loc.length == 0) {
              req.flash('INFO', 'No location details. Did you fill out the form? Redirecting!', false);
              res.redirect('/startForm');return;
          }

          start.push(loc[0].location[0]);
          start.push(loc[0].location[1]);

          // retrieve interested location details
          db.collection("Interested").find().toArray(function(error, intd) {
              if(err) throw err;

              // add interested locations to locations array
              for(var i = 0; i < intd.length; i++) {
                  pins.push(intd[i].geom.location);
              }

              // render the page and send location details
              res.render('pages/map', {loc : start, pois : pins});
          });  // end of Interested database query
      });   // end of Location database query
  });// end of route


  //---------------Route to populate the planner using interest collection-------------------------------------------------------------------------//

  app.get('/populate', function (req,res){
        if(!req.session.loggedin){
        req.flash('INFO', 'Please log in to access to the Plan your day page', false);
        res.redirect('/login');return;};

        var date;
        var startingHour = '08'; //need 2 digit from 00 to 24

        db.collection("DateSelected").findOne(function (err,result){
          if(err) throw err;
          if(result.date == "" || result.date == null){
            req.flash('INFO', 'No initial date found', false);
            res.redirect('/');return;}

          console.log("expected result" + result.date);
          date = result.date;
          console.log("expected result as var" + date);
                  console.log(JSON.stringify(result));
        });// end date find

        db.collection('Interested').find().toArray(function(err,results){
          if (err) throw err;
          if(!results){
            req.flash('INFO', 'No point of interest selected, please complete all the step to receive the', false);
            res.redirect('/');return;};

          res.render('pages/planner', {events : results, SelectedDate : date, hour :startingHour});

        });//end find
  });//end route
