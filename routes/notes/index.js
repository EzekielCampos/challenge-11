const router = require('express').Router();

const info = require("../../db/db.json");




router.route('/')
.get((req, res)=>{

    res.json(info);
    
})



module.exports= router;