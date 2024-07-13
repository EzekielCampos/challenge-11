const router = require('express').Router();
const {randomUUID} = require("../../public/helpers/random-id");
const notes = require("../../db/db.json");
const {updateFile} = require("../../public/helpers/write-to-file");

const {verifyBodyPost, verifyDeleteId} = require("./middleware-functions");


router.route('/')
.get((req, res)=>{

    res.json(notes);
    
})
.post(verifyBodyPost,(req,res) =>{

    const {title, text} = req.body;

        const addNote = {
            title,
            text,
            id :randomUUID(),
        };

        notes.push(addNote);
        // const updatedNote = JSON.stringify(notes, null,2);
        updateFile(notes);
        
        res.status(201).json(addNote);

    res.json(`${req.method} request received`);
})


router.delete("/:id",verifyDeleteId,(req, res) =>{

    const itemDelete= req.params.id;

    const notesModified = notes.filter(note => note.id !== itemDelete);

    updateFile(notesModified);
    res.status(200).json({ message: 'Note deleted successfully' });

//    res.json(notesModified);



    
})



module.exports= router;