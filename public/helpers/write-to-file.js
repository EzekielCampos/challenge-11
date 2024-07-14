

const fs = require("fs");

// This function will update the db.json file when a new note is added or deleted
const updateFile = (data) => {
  // Call the write to file method from "fs" and convert the data that will be added to the file to a string
    fs.writeFile("./db/db.json", JSON.stringify(data, null, 2), (err) =>
        err
          ? console.error(err)
          : console.log(
              `Notes has been updated!`
            )
      );

} 

module.exports = {updateFile};
