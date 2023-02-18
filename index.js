/*********************************************************************************
*  WEB322 – lab 3
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Yuvraj Singh  Student ID: 156150211 
*
*  Cyclic Web App URL: 
*  GitHub Repository URL: 
*
********************************************************************************/

// setup our requires
var express = require("express");
var app = express();
var path = require("path");
const exphbs = require("express-handlebars");

var HTTP_PORT = process.env.PORT || 8080;

// call this function after the http server starts listening for requests
function onHttpStart() {
    console.log("Express http server listening on: " + HTTP_PORT);
}

app.engine('.hbs', exphbs.engine({ 
    extname: '.hbs',
    helpers: { 
        warning: function(options){
         
        }
    },
    partialsDir: path.join(__dirname, 'views/partials'),
    layoutsDir: path.join(__dirname, 'views/partials'),
}));

app.set("view engine", ".hbs");

// Register handlebars as the rendering engine for views


app.get("/viewData", function(req,res){

    var someData = {
        name: "John",
        age: 23,
        occupation: "developer",
        company: "Scotiabank",
        visible: true
    };

    res.render('viewData', {
        data: someData,
    });

});

// start the server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);