
// This variable will hold all the notes in an array from the db.json file
const notes = require("../../db/db.json");

// This function will return a boolean if the id that we are looking to delete is in the array
const checkForValue = (data, itemToDelete)=>{

    // This array method will return boolean if the id is found
    return data.some(element => element.id === itemToDelete)


}

const verifyBodyPost = (req, res, next)=>{

    // Checks whether req.body contains the title and text attributes that was sent with post method
    if(req.body?.title && req.body?.text) next();
    // If the attributes are not there then the response will be the correct status code and message saying there was an error
    else return res.status(500).json('Error in posting review');
        

}


const verifyDeleteId = (req, res, next) =>{
// This will verify that the id that was specified in the parameters exist inside the notes already
if(checkForValue(notes, req.param.id)) next();
// If the id is not found then an error and status code will be sent
else return res.status(404).json({ message: 'Note cannot be found' });


}

module.exports = {verifyBodyPost, verifyDeleteId}