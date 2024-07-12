const router = require('express').Router();

const info = require("../../db/db.json");




router.route('/')
.get((req, res)=>{

    res.json(info);
    
})
.post((req,res) =>{

    const {id, title, text} = req.body;


})



module.exports= router;