// This program uses the GET method, which displays the list of animals from the pet store

var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listAnimals', function (req, res) {
   fs.readFile( __dirname + "/" + "animals.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})

// After running the file, access the link: http://127.0.0.1:8081/listAnimals to see animal list
