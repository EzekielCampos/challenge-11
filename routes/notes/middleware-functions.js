

const notes = require("../../db/db.json");

const checkForValue = (array, itemToDelete)=>{

    return array.some(element =>element.id === itemToDelete)


}

const verifyBodyPost = (req, res, next)=>{

    if(req.body?.title && req.body?.text) next();

    else return res.status(500).json('Error in posting review');
        

}


const verifyDeleteId = (req, res, next) =>{

if(req.param?.id && checkForValue(notes, req.param.id)) next();

else return res.status(404).send({ error: 'Item not found' });


}

module.exports = {verifyBodyPost,}