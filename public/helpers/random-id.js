// This npm package will help generate a random id to be used for when a new note is created
const ShortUniqueId = require('short-unique-id');
// This function will generate a random id that will have a length of five and only use hexadecimal values
const {randomUUID} = new ShortUniqueId({length: 5, dictionary:'hex'});


module.exports = {randomUUID}