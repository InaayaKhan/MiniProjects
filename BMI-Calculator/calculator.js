//jshint esversion:6

const express = require('express');                     //requires the 'express' package
const app = express();                                  // app refers to [express() function] - which refers to the express module
const port = 3000;

const fs = require('fs');

app.use('/css', express.static('css'));                 // allows files stored in folder called 'css' to be used

var bodyParser = require('body-parser');                    //body-parser package is required to tap into the html form data
app.use(bodyParser.urlencoded({ extended: true }))          //url encoded is for form data  //extended set to true allows us to post nested objects

// Get reqq is sent to root of our website '/'    (when the get req is targeting the route '/'home route ........the callback is triggered)
// When that request happens... this callback function is triggered

app.get('/', (req, res) => {                            //app.get tells what should happen when browser gets in touch with our server on port:3000 and makes a GET request
    res.sendFile(__dirname + '/index.html')               //__dirname is file path to get to THIS CURRENT file.... The rest is relative pathname that is to be concatenated with the path
});

app.post("/", (req, res) => {                      //Handles POST requests (without it we will not be able to accept any posts requests to '/' route )
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);     
    // console.log(req.body)      // (req has lots of data)

    var bmi = weight / (height * height);                

    res.send("BMI - " + bmi);
});


app.listen(port, () => {                                                //tunes to listen on the given port number  (will not work in browser without GET request)
    console.log(`Calculator app listening on port ${port}`);               //logs that it is listening in the terminal
});