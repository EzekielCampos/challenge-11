const express = require("express");
const path = require('path');

const app = express();

const api = require("./routes");

// Specifies which port to be listening for request to the server
const PORT = process.env.PORT || 3001;

// These are global middleware that will be run before each http request
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// This function will create static routes for each file in the public folder
app.use(express.static('public'));
// This middleware takes us to our routes for one of the specific http request
app.use('/api', api);
// If this route is hit it will send back and render the notes.html file
app.get("/notes", (req, res)=>{
    res.sendFile(path.join(__dirname, "/public/notes.html"));

});


// This is the method that will be listening at the specified port for request
app.listen(PORT, ()=>{

    console.info(`App listening at http://localhost:${PORT}`);

});