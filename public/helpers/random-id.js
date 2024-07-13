
const ShortUniqueId = require('short-unique-id');

const {randomUUID} = new ShortUniqueId({length: 5, dictionary:'hex'});


module.exports = {randomUUID}