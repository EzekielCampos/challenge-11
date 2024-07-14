// This variable will help route the request to the specified location
const router = require('express').Router();


const notes = require("./notes");

// This endpoint will take the user to the next folder which holds all the http request methods
router.use('/notes', notes);


module.exports= router;