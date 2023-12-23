// This program uses the GET method for displaying animals based on their id
var express = require('express');
var app = express();
var fs = require("fs");

app.get('/:id', function (req, res) {
   // First read existing animals.
   fs.readFile( __dirname + "/" + "animals.json", 'utf8', function (err, data) {
      var animals = JSON.parse( data );
      var animal = animals["animal" + req.params.id] 
      console.log( animal );
      res.end( JSON.stringify(animal));
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})

// After running the file, access the link: http://127.0.0.1:8081/2 to see animal with id of 2

// You can choose by entering at the end of the url any id (from 1 to 4) you want.
