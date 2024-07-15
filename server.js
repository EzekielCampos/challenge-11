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
// This route will go to specific http method 
app.use('/api', api);
// If this route is hit it will send back and render the notes.html file
app.get("/notes", (req, res)=>{
    res.sendFile(path.join(__dirname, "/public/notes.html"));

});
// If a path is written that is not specified it will always return to the main page
app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, "public/index.html"));

})

// Fallback route for when a user attempts to visit routes that don't exist
app.listen(PORT, ()=>{

    console.info(`App listening at http://localhost:${PORT}`);

});