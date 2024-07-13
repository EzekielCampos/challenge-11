const router = require('express').Router();
const {randomUUID} = require("../../helpers/random-id");
const info = require("../../db/db.json");


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

        // info.push(addNote);
        console.info(addNote);
        
    }
    else{
        res.status(500).json('Error in posting review');
    }
    console.info(info);

    res.json(`${req.method} request received`);



})







module.exports= router;