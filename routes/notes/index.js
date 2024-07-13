const router = require('express').Router();
const {randomUUID} = require("../../public/helpers/random-id");
const info = require("../../db/db.json");
const {updateFile} = require("../../public/helpers/write-to-file");


router.route('/')
.get((req, res)=>{

    res.json(info);
    
})
.post((req,res) =>{

    const {title, text} = req.body;
    if(title && text){

        const addNote = {
            title,
            text,
            id :randomUUID(),
        };

        info.push(addNote);
        const updatedNote = JSON.stringify(info, null,2);
        updateFile(updatedNote);
        

        res.status(201).json(addNote);
    }
    else{
        res.status(500).json('Error in posting review');
    }
    console.info(info);

    res.json(`${req.method} request received`);



})







module.exports= router;