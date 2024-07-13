

const fs = require("fs");

const updateFile = (data) => {
    fs.writeFile("./db/db.json", data, (err) =>
        err
          ? console.error(err)
          : console.log(
              `Note has been updated!`
            )
      );

} 

module.exports = {updateFile};
