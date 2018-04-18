// this is grabbing all the functions that were exported in the data
const data = require('./data');
// this is grabbing all the functions that were exported in the data
const addEvents = require('./event');
// this calling the addEvents function in the events.js
addEvents();
// this is selecting one of the functions that is exported by using dot notation
data.initialize();
