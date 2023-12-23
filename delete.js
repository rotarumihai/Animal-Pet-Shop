// This program uses the DELETE method, which eliminates an animal based on the chosen id
var express = require('express');
var app = express();
var fs = require("fs").promises;

var id = 2;

app.all('/deleteAnimal', async function (req, res) {
   try {
      // First read existing animals.
      const data = await fs.readFile(__dirname + "/animals.json", 'utf8');
      const animals = JSON.parse(data);

      // Check if the animal with the specified ID exists
      if (animals["animal" + id]) {
         delete animals["animal" + id];
         await fs.writeFile(__dirname + "/animals.json", JSON.stringify(animals));
         res.status(200).json(animals);
      } else {
         res.status(404).json({ error: "Animal not found" });
      }
   } catch (err) {
      console.error("Error:", err);
      res.status(500).json({ error: "Internal Server Error" });
   }
});

var server = app.listen(8081, function () {
   var host = server.address().address;
   var port = server.address().port;
   console.log("Example app listening at http://%s:%s", host, port);
});

// After running the file, access the link: http://127.0.0.1:8081/deleteAnimal to see modified list of animals
