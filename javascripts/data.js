// this is receiving/acquiring the loadsPets request function from the pets.js file
const loadsPets = require('./pets');
// this receiving/ being passed in the printToDom function form the dom.js
const printToDom = require('./dom');
// this is setting the variable to an empty array
let arrayPets = [];
// this function is parse the object of the data into a string
const onPetLoad = function () {
  arrayPets = JSON.parse(this.responseText).pets;
  printToDom(arrayPets);
};
// this is setting a variable for when something goes wrong...
const badDomestic = function () {
  console.log('error');
};
// this is setting function to receive the request function and passes it the parsing function and the error function
const initialize = () => {
  loadsPets(onPetLoad,badDomestic);
};
// this fucntion is just returning what is in the array
const gotDemPets = () => {
  return arrayPets;
};
// this is exporting the those two functions
module.exports = {
  initialize,
  gotDemPets,
};
