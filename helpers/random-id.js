
const ShortUniqueId = require('short-unique-id');

const {randomUUID} = new ShortUniqueId({length: 5, dictionary:'hex'});



console.log(randomUUID());


module.exports = {randomUUID}