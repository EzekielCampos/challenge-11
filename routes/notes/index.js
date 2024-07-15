const router = require('express').Router();
// This function will generate a random id for each note that is written
const {randomUUID} = require("../../public/helpers/random-id");
// This will grab the array of notes from the db.json file to be used for each method
const notes = require("../../db/db.json");
// This function will be used to update the different notes whether one is added or deleted
const {updateFile} = require("../../public/helpers/write-to-file");

// These middleware functions will be used to verify that the data exist or that the right parameters were added
const {verifyBodyPost, verifyDeleteId} = require("./middleware-functions");


router.route('/')
// Get request will return all the notes that have been written to the db.json file
.get((req, res)=>{

    res.json(notes);
    
})
// Middleware function checks to see if the post has the correct data to be added to the files db
.post(verifyBodyPost,(req,res) =>{

    // Deconstruct req.body and make variables out of the title and text 
    const {title, text} = req.body;

    // Create a new object inserting the two variables from req.body and a unique id for that specific note
        const addNote = {
            title,
            text,
            id :randomUUID(),
        };

        // Add the new note to the notes array that holds all notes from the db.json file
        notes.push(addNote);
        // Once the new note is added the file is updated with this function
        updateFile(notes);
        // Return the status number and the new note that was just posted
        res.status(201).json(addNote);

})


router.delete("/:id",verifyDeleteId,(req, res) =>{

    // This variable will hold the id of the note that will be deleted
    const itemDelete= req.params.id;
    // The filter method will create a new variable that will exclude the id of the note that needs to be removed
    const notesModified = notes.filter(note => note.id !== itemDelete);
    // Update the file with the notesModified vairable
    updateFile(notesModified);
    // Return a status code and message about succsesful removal of note
    res.status(200).json({ message: 'Note deleted successfully' });
    
})



module.exports= router;