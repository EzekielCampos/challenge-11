

const fs = require("fs");



const updateFile= (data) =>{
    fs.writeFile("../db/db.json", data, (err) =>
        err
          ? console.error(err)
          : console.log(
              `Review for ${addNote.title} has been written to JSON file`
            )
      );

} 

module.exports = {updateFile};
