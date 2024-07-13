const router = require('express').Router();
const {randomUUID} = require("../../public/helpers/random-id");
const notes = require("../../db/db.json");
const {updateFile} = require("../../public/helpers/write-to-file");


router.route('/')
.get((req, res)=>{

    res.json(notes);
    
})
.post((req,res) =>{

    const {title, text} = req.body;
    if(title && text){

        const addNote = {
            title,
            text,
            id :randomUUID(),
        };

        notes.push(addNote);
        const updatedNote = JSON.stringify(notes, null,2);
        updateFile(updatedNote);
        
        res.status(201).json(addNote);
    }
    else{
        res.status(500).json('Error in posting review');
    }

    res.json(`${req.method} request received`);

})



module.exports= router;