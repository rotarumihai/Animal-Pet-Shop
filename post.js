// This program uses the POST method to add new animal to pet shop
const express = require('express');
const fs = require('fs').promises;
const app = express();
const port = 8081;

app.use(express.json());

const animalsFilePath = __dirname + "/animals.json";

app.post('/addAnimal', async (req, res) => {
    try {
        const { name, id, weight, price } = req.body;

        if (!name || !id || !weight || !price) {
            return res.status(400).json({ error: "Invalid animal data. Please provide name, id, weight, and price." });
        }

        const data = await fs.readFile(animalsFilePath, 'utf8');
        const animals = JSON.parse(data);

        const newAnimal = {
            id,
            name,
            weight,
            price,
        };

        animals[`animal${id}`] = newAnimal;

        await fs.writeFile(animalsFilePath, JSON.stringify(animals), 'utf8');
        console.log("File updated successfully.");

        res.json({ success: true, animals });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Show modified list of animals
app.get('/animals', async (req, res) => {
    try {
        const data = await fs.readFile(animalsFilePath, 'utf8');
        const animals = JSON.parse(data);
        res.json({ animals });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

const server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


/* After running the file, type in another terminal (as an example): 

curl -X POST -H "Content-Type: application/json" -d '{"name":"Birman","id":5,"weight":"4.7 kg","price":"2000 USD"}' http://127.0.0.1:8081/addAnimal

and access the link: http://127.0.0.1:8081/animals  to see modied list of animals */
