# Pet Store Management API

This Node.js application provides a simple API for managing a pet store. It supports operations such as adding, listing, deleting, and retrieving information about animals.

## Setup

### Install Dependencies

Before running the application, make sure to install the necessary dependencies:

**bash**
```npm install express```

## API Endpoints
### 1. List Animals

To view the list of animals using the GET method, access the following link:

http://127.0.0.1:8081/listAnimals
### 2. Add Animal

To add a new animal, use a tool like curl or Postman. For example:

**bash**

```curl -X POST -H "Content-Type: application/json" -d '{"name":"Birman","id":5,"weight":"4.7 kg","price":"2000 USD"}' http://127.0.0.1:8081/addAnimal```

### 3. Updated List of Animals

To view the modified list of animals, access the link:

http://127.0.0.1:8081/animals
### 4. Delete Animal

To delete an animal (e.g., animal with ID 2), access the link:

http://127.0.0.1:8081/deleteAnimal
### 5. Retrieve Animal by ID

To retrieve information about a specific animal (e.g., animal with ID 2), access the link:

http://127.0.0.1:8081/2
## Project Structure

    animals.json: Initial data file containing information about animals in the pet store.

    get.js: Program that uses the GET method to display the list of animals from the pet store.

    post.js: Program that uses the POST method to add a new animal to the pet shop.

    delete.js: Program that uses the DELETE method to eliminate an animal based on the chosen ID.

    id_show.js: Program that uses the GET method to display animals based on their ID.

    animals_copy.txt: A copy of the initial animals.json file, use it to start the Node server operations from scratch.

    node_modules: Folder containing the 'express' dependency. If you have not installed it yet, use the following command:

**bash**

```npm i express```
